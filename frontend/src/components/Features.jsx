import {
  Lock,
  Timer,
  Bell,
  CalendarClock,
  AlarmClock,
  Flame,
  Trophy,
  ShieldCheck,
  KeyRound,
  EyeOff,
} from "lucide-react";

const GAMIFY_IMG =
  "https://static.prod-images.emergentagent.com/jobs/d5f33ca5-0695-4e28-bd44-17f3f8fe1b8c/images/5f868273e9010879bd93989bddc4b1737e72572b188557693a241e7770d85d49.png";

export default function Features() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 md:py-40 bg-[#F5F5F7]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl reveal">
          <span className="text-xs md:text-sm uppercase tracking-[0.22em] text-emerald-700 mb-4 block">
            Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-tight text-neutral-900">
            A whole focus system,
            <br />
            <span className="text-neutral-500">in one tap.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* Card 1: Bricking — DARK FEATURE TILE for contrast */}
          <div
            data-testid="feature-bricking"
            className="reveal md:col-span-2 rounded-3xl p-8 md:p-10 relative overflow-hidden group transition-all duration-500 bg-neutral-900 text-white"
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/25 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Lock size={18} className="text-emerald-400" />
              <span className="text-xs uppercase tracking-[0.22em] text-white/55">
                Bricking
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight relative z-10">
              Block what breaks your focus.
            </h3>
            <p className="mt-4 text-white/65 max-w-lg relative z-10">
              Curate apps and websites that disappear the moment your phone
              touches the brick. Notifications go silent. The theme flips
              dark. A stopwatch starts counting your time saved.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-white/10 border border-white/15 relative z-10">
              <Timer size={16} className="text-emerald-400" />
              <div className="font-display text-2xl tracking-tighter">
                01:42:08
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-white/55">
                Locked in
              </span>
            </div>
          </div>

          {/* Card 2: Notifications */}
          <div
            data-testid="feature-notifications"
            className="reveal card-light rounded-3xl p-8 md:p-10 transition-all duration-500"
          >
            <Bell size={20} className="text-emerald-700 mb-6" />
            <h3 className="font-display text-2xl font-medium text-neutral-900">
              Silenced notifications
            </h3>
            <p className="mt-3 text-neutral-600">
              Every blocked app's notifications are intercepted. View them
              later in one tidy log — never as an interruption.
            </p>
            <div className="mt-6 space-y-2">
              {["Instagram", "Twitter", "TikTok"].map((n, i) => (
                <div
                  key={n}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-100"
                  style={{ opacity: 1 - i * 0.2 }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm text-neutral-700">{n}</span>
                  <EyeOff size={12} className="ml-auto text-neutral-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Scheduled */}
          <div
            data-testid="feature-scheduled"
            className="reveal card-light rounded-3xl p-8 md:p-10 transition-all duration-500"
          >
            <CalendarClock size={20} className="text-emerald-700 mb-6" />
            <h3 className="font-display text-2xl font-medium text-neutral-900">
              Scheduled brick modes
            </h3>
            <p className="mt-3 text-neutral-600">
              Build presets — whitelist or blacklist — and assign them to
              calendar slots. Mornings deep work, evenings social.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-100">
                <span className="text-neutral-800">Deep Work</span>
                <span className="text-neutral-500 text-xs">
                  Mon–Fri · 9:00–12:00
                </span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-neutral-50 border border-neutral-100">
                <span className="text-neutral-800">Sleep</span>
                <span className="text-neutral-500 text-xs">Daily · 22:00–07:00</span>
              </div>
            </div>
          </div>

          {/* Card 4: Alarm (large with image) */}
          <div
            data-testid="feature-alarm"
            className="reveal md:col-span-2 card-light rounded-3xl p-8 md:p-10 transition-all duration-500 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <AlarmClock size={20} className="text-emerald-700 mb-6" />
                <h3 className="font-display text-2xl md:text-3xl font-medium text-neutral-900">
                  Wake up with a tap.
                </h3>
                <p className="mt-3 text-neutral-600">
                  Set an alarm that only ends when you tap your phone to the
                  brick. No more snooze, no scrolling in bed.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="font-display text-4xl tracking-tighter text-neutral-900">
                    06:30
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Mon–Fri
                  </span>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-neutral-200 aspect-square bg-neutral-50">
                <img
                  src={GAMIFY_IMG}
                  alt="Gamification UI"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Card 5: Gamification */}
          <div
            data-testid="feature-gamification"
            className="reveal card-light rounded-3xl p-8 md:p-10 transition-all duration-500"
          >
            <Flame size={20} className="text-emerald-700 mb-6" />
            <h3 className="font-display text-2xl font-medium text-neutral-900">
              Streaks & badges
            </h3>
            <p className="mt-3 text-neutral-600">
              Earn streaks for consecutive focus days. Unlock badges as your
              session totals grow.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Flame, Trophy, ShieldCheck].map((Ic, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center"
                >
                  <Ic size={16} className="text-emerald-700" />
                </div>
              ))}
              <div className="ml-2 font-display text-xl text-neutral-900">
                42
                <span className="text-neutral-500 text-base"> day streak</span>
              </div>
            </div>
          </div>

          {/* Card 6: Strict */}
          <div
            data-testid="feature-strict"
            className="reveal card-light rounded-3xl p-8 md:p-10 transition-all duration-500"
          >
            <ShieldCheck size={20} className="text-emerald-700 mb-6" />
            <h3 className="font-display text-2xl font-medium text-neutral-900">
              Strict mode
            </h3>
            <p className="mt-3 text-neutral-600">
              Lockin defends itself. While you're bricked, the app can't be
              uninstalled and permissions can't be tampered with.
            </p>
          </div>

          {/* Card 7: Emergency */}
          <div
            data-testid="feature-emergency"
            className="reveal card-light rounded-3xl p-8 md:p-10 transition-all duration-500"
          >
            <KeyRound size={20} className="text-emerald-700 mb-6" />
            <h3 className="font-display text-2xl font-medium text-neutral-900">
              Emergency unbrick
            </h3>
            <p className="mt-3 text-neutral-600">
              Five lifetime escape hatches for true emergencies. Separate
              alarm credits keep mornings safe.
            </p>
            <div className="mt-6 flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full ${
                    i < 4 ? "bg-emerald-500" : "bg-neutral-200"
                  }`}
                />
              ))}
              <span className="ml-3 text-xs text-neutral-500">4 / 5 left</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
