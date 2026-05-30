import { NotificationAvalanche } from "@/components/NotificationAvalanche";

const SIGNALS = [
  { stat: "58", unit: "×/day", label: "the average phone pickup" },
  { stat: "2.5h", unit: "", label: "lost to apps you didn't open on purpose" },
  { stat: "23min", unit: "", label: "to refocus after a single interruption" },
];

export function Problem() {
  return (
    <section
      id="problem"
      data-testid="problem-section"
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[520px] h-[520px] -translate-y-1/2 rounded-full bg-neutral-100 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="lg:col-span-6">
          <span className="reveal text-xs md:text-sm uppercase tracking-[0.22em] text-emerald-700 mb-4 block">
            The problem
          </span>
          <h2 className="clip-reveal font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-tight text-neutral-900">
            <span className="cr-line">
              <span className="cr-inner">Your phone never</span>
            </span>
            <span className="cr-line">
              <span className="cr-inner">stops asking.</span>
            </span>
          </h2>
          <p className="reveal mt-6 text-lg text-neutral-600 font-light max-w-xl leading-relaxed">
            Every app is engineered to pull you back. The badges stack, the previews glow, and your
            attention leaks away one glance at a time, usually before you even decide to look.
          </p>
          <p className="reveal mt-4 text-lg text-neutral-900 font-normal max-w-xl leading-relaxed">
            Lockin ends the negotiation. One tap and all of it goes quiet.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {SIGNALS.map((s) => (
              <div key={s.label} className="reveal">
                <div className="font-display text-3xl md:text-4xl font-light tracking-tighter text-neutral-900">
                  {s.stat}
                  <span className="text-emerald-600 text-xl align-top">{s.unit}</span>
                </div>
                <div className="mt-2 text-xs text-neutral-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phone avalanche */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="reveal">
            <NotificationAvalanche />
          </div>
        </div>
      </div>
    </section>
  );
}
