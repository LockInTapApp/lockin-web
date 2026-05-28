"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lock,
  CalendarClock,
  Trophy,
  ShieldCheck,
  BellOff,
  Smartphone,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MEDIA } from "@/lib/media";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  span: string;
  big?: boolean;
};

const features: Feature[] = [
  {
    icon: Lock,
    title: "Brick on Tap",
    desc: "One NFC tap silences your phone. Apps, sites, and notifications go dark — instantly.",
    span: "md:col-span-7 md:row-span-2",
    big: true,
  },
  {
    icon: CalendarClock,
    title: "Scheduled Modes",
    desc: "Whitelisting or blacklisting presets. Recurring schedules per weekday.",
    span: "md:col-span-5",
  },
  {
    icon: Trophy,
    title: "Streaks & Badges",
    desc: "Earn streaks. Collect badges. See every focused minute, every day.",
    span: "md:col-span-5",
  },
  {
    icon: ShieldCheck,
    title: "Strict Mode",
    desc: "Block uninstalls. Lock permissions. Five lifetime emergency unbricks.",
    span: "md:col-span-6",
  },
  {
    icon: BellOff,
    title: "Quiet Inbox",
    desc: "Notifications from blocked apps disappear — view them later, on your terms.",
    span: "md:col-span-6",
  },
];

const faqs = [
  {
    q: "What exactly is the Lockin Brick?",
    a: "A palm-sized NFC device. Tap your phone to it and the Lockin app enters Brick Mode: selected apps & websites get blocked, notifications muted, the UI flips to a focused dark theme, and a stopwatch starts tracking your session.",
  },
  {
    q: "Do I have to use the brick to start a session?",
    a: "No. You can tap the in-app 'Tap to Lockin' button, or simply tap your phone to the Brick — whichever feels right. The Brick is the physical anchor; the app does the rest.",
  },
  {
    q: "What if there is an emergency?",
    a: "Every account ships with 5 lifetime Emergency Unbricks for sessions, plus a separate emergency for alarms. You can also schedule unbrick windows (5–15 min) for breaks.",
  },
  {
    q: "Is one Brick locked to one phone?",
    a: "Yes — post-launch, each Brick pairs to one device. A friend's Brick cannot unlock your phone. Your focus stays yours.",
  },
  {
    q: "What is the alarm feature?",
    a: "Set an alarm that only stops when you tap the Brick. You'll get a heads-up the night before, and per-day scheduling.",
  },
];

export default function Home() {
  return (
    <div className="relative" data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MEDIA.heroBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/30 to-[#050505]" />
        <div className="aurora" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger} className="md:col-span-7">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur text-xs tracking-widest uppercase text-zinc-300 mb-8"
              data-testid="hero-eyebrow"
            >
              <Sparkles size={12} className="text-cyan-400" />
              Now shipping worldwide
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display font-black text-5xl sm:text-6xl lg:text-[6.5rem] leading-[0.9] tracking-tighter"
              data-testid="hero-headline"
            >
              Reclaim
              <br />
              your <span className="text-cyan-400">focus.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg text-zinc-400 max-w-xl leading-relaxed"
              data-testid="hero-subhead"
            >
              Lockin is a physical brick that holds the keys to your phone. Tap once — apps go dark, notifications silence, the timer starts. Tap again to come back.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/store"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300"
              >
                Order the Brick
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#how-it-works"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                See how it works
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-8 text-xs uppercase tracking-widest text-zinc-500"
            >
              <span>NFC powered</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>iOS & Android</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>No subscription</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl pulse-ring" />
              <div className="absolute inset-0 rounded-full bg-cyan-400/5 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MEDIA.productHero}
                alt="Lockin Brick"
                className="relative z-10 w-full h-full object-contain float-slow drop-shadow-[0_30px_60px_rgba(0,229,255,0.18)]"
                data-testid="hero-product-image"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* STAT BAR */}
      <section className="border-y border-white/5 bg-black/60 backdrop-blur relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {[
            { k: "4.2h", v: "avg. daily phone time saved" },
            { k: "0.3s", v: "tap-to-brick latency" },
            { k: "100%", v: "offline. no cloud needed" },
            { k: "1:1", v: "phone-to-brick pairing" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              data-testid={`stat-${i}`}
            >
              <div className="font-display font-black text-4xl tracking-tighter">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 mt-2">{s.v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES BENTO */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="max-w-2xl mb-16"
          >
            <motion.div variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">
              The system
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95]"
            >
              Hardware that makes
              <br />
              <span className="text-zinc-500">software listen.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Every feature is built around one promise: when you tap, your phone gets out of your way.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  data-testid={`feature-card-${i}`}
                  className={`relative group ${f.span} rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#050505] p-8 md:p-10 overflow-hidden hover:border-white/25 transition-all duration-500`}
                >
                  <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/5 blur-3xl transition-all duration-700" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
                      <Icon size={20} className="text-cyan-400" />
                    </div>
                    <h3
                      className={`font-display ${f.big ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"} font-bold tracking-tight`}
                    >
                      {f.title}
                    </h3>
                    <p className="mt-3 text-zinc-400 leading-relaxed text-base">{f.desc}</p>
                    {f.big && (
                      <div className="mt-auto pt-10">
                        <div className="aspect-[16/9] rounded-2xl bg-black/40 border border-white/10 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={MEDIA.productInteraction}
                            alt="Tap to Lockin"
                            className="w-full h-full object-cover opacity-90"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 md:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 md:sticky md:top-32">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">The ritual</div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95]">
                Three taps.
                <br />
                One deep hour.
              </h2>
              <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
                We didn&apos;t want another app screaming for your attention. We built an object you reach for — physical, deliberate, calm.
              </p>
            </div>

            <div className="md:col-span-7 space-y-6">
              {[
                {
                  n: "01",
                  t: "Choose a Brick Mode",
                  d: "Pre-define which apps and sites get blocked. Whitelist your tools, or blacklist your traps.",
                },
                {
                  n: "02",
                  t: "Tap to Lockin",
                  d: "Touch your phone to the Brick. Notifications mute. The app flips to dark. The stopwatch starts.",
                  highlight: true,
                },
                {
                  n: "03",
                  t: "Tap to come back",
                  d: "When the session ends — or your scheduled unbrick window opens — tap again. Pick up where you left off.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  data-testid={`step-${i + 1}`}
                  className={`relative rounded-3xl border ${
                    step.highlight
                      ? "border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.06] to-transparent"
                      : "border-white/10 bg-[#0a0a0a]"
                  } p-8 md:p-10`}
                >
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`font-display font-black text-5xl tracking-tighter ${
                        step.highlight ? "text-cyan-400" : "text-zinc-700"
                      }`}
                    >
                      {step.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-2xl tracking-tight">{step.t}</h3>
                      <p className="mt-2 text-zinc-400 leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GAMIFICATION */}
      <section className="py-24 md:py-32 relative overflow-hidden z-10 border-t border-white/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MEDIA.userFocus}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Progress, visualized
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95]">
              Every minute
              <br />
              becomes a streak.
            </h2>
            <p className="mt-6 text-zinc-300 text-lg leading-relaxed max-w-xl">
              Lockin tracks your sessions automatically. Daily totals, weekly averages, and badge milestones — proof that focus compounds.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: "27", v: "Day streak" },
                { k: "112h", v: "This month" },
                { k: "08", v: "Badges earned" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur p-5"
                  data-testid={`gam-stat-${i}`}
                >
                  <div className="font-display font-black text-3xl text-cyan-400 tracking-tighter">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-zinc-500 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-black/70 backdrop-blur p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs uppercase tracking-widest text-zinc-500">This week</span>
                <Smartphone size={16} className="text-zinc-500" />
              </div>
              <div className="space-y-3">
                {[
                  { d: "Mon", v: 80 },
                  { d: "Tue", v: 55 },
                  { d: "Wed", v: 92 },
                  { d: "Thu", v: 70 },
                  { d: "Fri", v: 65 },
                  { d: "Sat", v: 40 },
                  { d: "Sun", v: 88 },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-10 text-xs uppercase tracking-widest text-zinc-500">{row.d}</span>
                    <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.v}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: i * 0.06 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-200"
                      />
                    </div>
                    <span className="w-12 text-right text-xs text-zinc-400 tabular-nums">
                      {Math.round((row.v / 100) * 6)}h
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">Questions</div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter">
              The fine print, plainly.
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3" data-testid="faq-accordion">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border border-white/10 rounded-2xl px-6 bg-[#0a0a0a]"
              >
                <AccordionTrigger className="font-display text-lg font-semibold tracking-tight hover:no-underline text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 leading-relaxed text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-black p-12 md:p-20 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[0.95]">
                Stop scrolling.
                <br />
                <span className="text-cyan-400">Start finishing.</span>
              </h2>
              <p className="mt-6 text-zinc-400 text-lg max-w-xl leading-relaxed">
                One brick. One ritual. A focused life — without an app trying to sell you focus.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/store"
                  data-testid="cta-final-primary"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-200 transition-all duration-300"
                >
                  Order yours
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  data-testid="cta-final-secondary"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
