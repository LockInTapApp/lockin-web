"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent",
      )}
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          data-testid="nav-logo"
          className="font-display font-black text-xl tracking-tighter text-white"
        >
          LOCKIN<span className="text-cyan-400">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300",
                  isActive ? "text-white" : "text-zinc-400 hover:text-white",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/store"
            data-testid="nav-cta-buy"
            className="text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors duration-300"
          >
            Get Lockin
          </Link>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          data-testid="nav-mobile-toggle"
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-6 py-6 gap-5">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="text-zinc-300 hover:text-white text-base"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/store"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta"
              className="bg-white text-black px-5 py-3 rounded-full text-center font-semibold"
            >
              Get Lockin
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
