"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Shield,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import { MEDIA, COLORWAYS, type Colorway } from "@/lib/media";

const PRICE = 89;

export default function StorePage() {
  const [color, setColor] = useState<Colorway["id"]>(COLORWAYS[0].id);
  const [qty, setQty] = useState(1);
  const selected = COLORWAYS.find((c) => c.id === color)!;

  const handleBuy = () => {
    toast.success("Added to your reservation", {
      description: `Lockin Brick — ${selected.name} × ${qty}. We'll notify you when it ships.`,
    });
  };

  return (
    <div className="relative" data-testid="store-page">
      <section className="pt-32 pb-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
            <span>Store</span>
            <span>/</span>
            <span className="text-white">Lockin Brick</span>
          </div>
          <h1 className="mt-4 font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tighter">
            Lockin Brick<span className="text-cyan-400">.</span>
          </h1>
          <p className="mt-3 text-zinc-400 max-w-xl">
            The original. CNC-machined housing, NFC core, no batteries to charge.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#0a0a0a] to-black"
              data-testid="store-product-image"
            >
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent" />
              <div className="aurora" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MEDIA.productHero}
                alt="Lockin Brick"
                className="absolute inset-0 w-full h-full object-contain p-12 float-slow drop-shadow-[0_30px_60px_rgba(0,229,255,0.18)]"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-widest text-zinc-500">
                <span>Color: {selected.name}</span>
                <span>
                  {qty} unit{qty > 1 ? "s" : ""}
                </span>
              </div>
            </motion.div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[MEDIA.productHero, MEDIA.productInteraction, MEDIA.productVariants].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-2xl border border-white/10 overflow-hidden bg-[#0a0a0a]"
                  data-testid={`store-thumb-${i}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 mb-4">
                <Sparkles size={12} />
                Ships in 5–7 business days
              </div>

              <div className="flex items-baseline gap-4">
                <span className="font-display font-black text-5xl tracking-tighter" data-testid="store-price">
                  ${PRICE}
                </span>
                <span className="text-zinc-500 line-through text-lg">$119</span>
                <span className="text-xs uppercase tracking-widest text-cyan-400 ml-2">Early access</span>
              </div>

              <p className="mt-6 text-zinc-400 leading-relaxed">
                A solid, palm-weighted brick made for one job: to be tapped. Pair once with your phone, then make a ritual of it — at your desk, by your bed, on the kitchen counter.
              </p>

              <div className="mt-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-zinc-500">Color</span>
                  <span className="text-sm text-white">{selected.name}</span>
                </div>
                <div className="flex gap-3" data-testid="store-color-picker">
                  {COLORWAYS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setColor(c.id)}
                      data-testid={`store-color-${c.id}`}
                      aria-label={c.name}
                      className={`relative w-14 h-14 rounded-2xl transition-all duration-300 ${
                        color === c.id
                          ? "ring-2 ring-cyan-400 scale-105"
                          : "ring-1 ring-white/10 hover:ring-white/30"
                      }`}
                      style={{ background: c.hex }}
                    >
                      {color === c.id && (
                        <Check
                          size={16}
                          className={`absolute inset-0 m-auto ${
                            c.id === "porcelain" ? "text-black" : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Quantity</div>
                <div className="inline-flex items-center border border-white/15 rounded-full">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    data-testid="store-qty-decrease"
                    className="px-4 py-3 hover:bg-white/5 rounded-l-full transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-6 font-semibold tabular-nums w-10 text-center" data-testid="store-qty-value">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(9, q + 1))}
                    data-testid="store-qty-increase"
                    className="px-4 py-3 hover:bg-white/5 rounded-r-full transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <button
                onClick={handleBuy}
                data-testid="store-buy-button"
                className="mt-10 w-full bg-white text-black font-semibold px-8 py-5 rounded-full hover:bg-zinc-200 transition-all duration-300 text-base"
              >
                Reserve for ${PRICE * qty}
              </button>
              <p className="text-xs text-zinc-500 mt-3 text-center">
                Free worldwide shipping · 30-day return · 2-year warranty
              </p>

              <div className="mt-12 pt-10 border-t border-white/10">
                <h3 className="font-display font-bold text-xl tracking-tight mb-5">What&apos;s in the box</h3>
                <ul className="space-y-3 text-zinc-300">
                  {[
                    "1× Lockin Brick (your color)",
                    "Magnetic desk pad",
                    "Quick-start card",
                    "Lifetime access to Lockin app (iOS + Android)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3" data-testid={`store-box-item-${i}`}>
                      <Check size={16} className="text-cyan-400 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { Icon: Truck, label: "Free shipping" },
                  { Icon: RotateCcw, label: "30-day returns" },
                  { Icon: Shield, label: "2-yr warranty" },
                ].map(({ Icon, label }, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-4 text-center">
                    <Icon size={18} className="mx-auto text-zinc-400" />
                    <div className="text-xs text-zinc-400 mt-2">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">Specifications</div>
              <h2 className="font-display font-black text-3xl sm:text-4xl tracking-tighter leading-[1]">
                Engineered to be
                <br />
                <span className="text-zinc-500">touched.</span>
              </h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {[
                ["Material", "Aircraft-grade aluminum"],
                ["Dimensions", "52 × 52 × 22 mm"],
                ["Weight", "180 g"],
                ["Tech", "NFC NTAG 215, AES-128 secured"],
                ["Power", "Passive — no battery"],
                ["Compatibility", "iOS 15+ · Android 9+"],
                ["Pairing", "1 brick : 1 phone (post-launch)"],
                ["In the box", "Brick · Desk pad · Quick card"],
              ].map(([k, v], i) => (
                <div key={i} className="border-b border-white/10 pb-4" data-testid={`spec-${i}`}>
                  <div className="text-xs uppercase tracking-widest text-zinc-500">{k}</div>
                  <div className="mt-1 text-white">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.05] to-transparent p-10 md:p-14">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">
              One brick. One phone.
            </div>
            <h3 className="font-display font-black text-3xl sm:text-4xl tracking-tighter">
              No one else can unlock yours.
            </h3>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-2xl">
              Each Brick pairs to a single phone after first setup. Your roommate&apos;s Brick won&apos;t free your apps — and yours won&apos;t free theirs. Focus is non-transferable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
