"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { StoryChapters } from "@/components/story/StoryChapters";

const NUMS = Array.from({ length: 11 }, (_, i) => String(i + 1).padStart(2, "0"));

export function StoryExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const meterRef = useRef<HTMLDivElement>(null);
  const clockEls = useRef<Array<HTMLElement | null>>([]);
  const [active, setActive] = useState(1);
  const [bricked, setBricked] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let brickedOnce = false;
    let clockTimer: ReturnType<typeof setInterval> | null = null;
    let seconds = 0;

    const paintClock = (s: number) => {
      const mm = String(Math.floor(s / 60)).padStart(2, "0");
      const ss = String(s % 60).padStart(2, "0");
      const text = `${mm}:${ss}`;
      clockEls.current.forEach((el) => {
        if (el) el.textContent = text;
      });
    };

    const startClock = () => {
      if (reduce) {
        paintClock(2537); // a calm static 42:17
        return;
      }
      paintClock(0);
      clockTimer = setInterval(() => {
        seconds += 1;
        paintClock(seconds);
      }, 1000);
    };

    // reveal observer: focus-pulls + fades
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
    root.querySelectorAll(".story-pull, .story-fade").forEach((el) => revObs.observe(el));

    // chapter observer: active index + the tap + the clock
    const chObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const n = Number(el.dataset.chapter);
          setActive(n);
          if (el.classList.contains("story-tap")) el.classList.add("is-tapped");
          if (n >= 3 && !brickedOnce) {
            brickedOnce = true;
            setBricked(true);
            startClock();
          }
        });
      },
      { threshold: 0.5 },
    );
    root.querySelectorAll("[data-chapter]").forEach((c) => chObs.observe(c));

    // scroll progress + focus meter
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        if (progressRef.current) progressRef.current.style.width = `${p * 100}%`;
        if (meterRef.current) meterRef.current.style.height = `${p * 100}%`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revObs.disconnect();
      chObs.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (clockTimer) clearInterval(clockTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const goTo = (n: number) => {
    rootRef.current
      ?.querySelector(`[data-chapter="${String(n).padStart(2, "0")}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={rootRef} className="relative">
      <div className="story-void" aria-hidden />
      <div className="story-grain" aria-hidden />
      <div ref={progressRef} className="story-progress" aria-hidden />
      <div ref={meterRef} className="story-meter" aria-hidden />

      {/* desktop chrome rail */}
      <nav className="story-rail" aria-label="Chapters">
        <a href="/" aria-label="Lockin home">
          <Image
            src="/lockin-icon.png"
            alt="Lockin"
            width={30}
            height={30}
            className="rounded-[7px] ring-1 ring-white/10"
          />
        </a>
        <div className="story-rail-index">
          {NUMS.map((num, i) => (
            <button
              key={num}
              type="button"
              onClick={() => goTo(i + 1)}
              aria-label={`Go to chapter ${num}`}
              className={`story-rail-num ${active === i + 1 ? "is-active" : ""}`}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="story-rail-foot">
          <span className={`story-rail-state ${bricked ? "is-bricked" : ""}`}>
            {bricked ? "BRICKED" : "OPEN"}
          </span>
          <span
            ref={(el) => {
              clockEls.current[0] = el;
            }}
            className="story-rail-clock"
            aria-hidden
          >
            00:00
          </span>
        </div>
      </nav>

      {/* mobile top bar */}
      <div className="story-topbar">
        <Image
          src="/lockin-icon.png"
          alt="Lockin"
          width={22}
          height={22}
          className="rounded-[6px] ring-1 ring-white/10"
        />
        <span>{`${String(active).padStart(2, "0")} / 11`}</span>
        <span className="flex items-center gap-3">
          <span style={bricked ? { color: "#34d399" } : undefined}>
            {bricked ? "BRICKED" : "OPEN"}
          </span>
          <span
            ref={(el) => {
              clockEls.current[1] = el;
            }}
            aria-hidden
          >
            00:00
          </span>
        </span>
      </div>

      <StoryChapters />
    </div>
  );
}
