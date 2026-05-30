"use client";

import { useEffect, useRef, useState } from "react";

const NOISE = [
  { app: "Instagram", body: "12 new posts" },
  { app: "TikTok", body: "47 videos for you" },
  { app: "Gmail", body: "94 unread" },
  { app: "Messages", body: "7 new" },
  { app: "YouTube", body: "8 recommendations" },
];

/**
 * The light → dark bridge between "How it works" and the dark Features grid.
 * A light "distracted" panel is wiped away by an emerald ripple that reveals a
 * dark "Locked in" panel, handing straight into the Features section.
 */
export function ModeBridge() {
  const ref = useRef<HTMLElement>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.55 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-testid="mode-bridge"
      data-played={played}
      aria-label="From distracted to locked in"
      className="mode-bridge relative h-[72vh] min-h-[460px] overflow-hidden bg-neutral-50"
    >
      {/* Distracted (light) */}
      <div className="mb-distracted absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-300/70 bg-amber-50 text-[11px] uppercase tracking-[0.2em] text-amber-700">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          Distracted
        </span>
        <div className="mt-2 flex flex-col gap-2 w-full max-w-xs">
          {NOISE.map((n, i) => (
            <div
              key={n.app}
              className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-neutral-200 bg-white text-sm"
              style={{ opacity: 1 - i * 0.14 }}
            >
              <span className="text-neutral-700">{n.app}</span>
              <span className="text-neutral-400 text-xs">{n.body}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Focused (dark) — revealed by the ripple */}
      <div className="mb-focused absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Locked in
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-tight text-white">
          One tap. The noise stops.
        </h2>
        <p className="text-white/50 font-light max-w-md">
          Apps go dark, notifications fall silent, and the only thing left is the work in front of
          you.
        </p>
      </div>
    </section>
  );
}
