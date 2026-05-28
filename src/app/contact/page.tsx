"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Send, type LucideIcon } from "lucide-react";
import { toast } from "sonner";

type Topic = "general" | "support" | "press" | "wholesale";
type FormState = {
  name: string;
  email: string;
  topic: Topic;
  message: string;
};

const INITIAL: FormState = { name: "", email: "", topic: "general", message: "" };

const TOPICS: { id: Topic; label: string }[] = [
  { id: "general", label: "General" },
  { id: "support", label: "Support" },
  { id: "press", label: "Press" },
  { id: "wholesale", label: "Wholesale" },
];

const CONTACT_INFO: { Icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { Icon: Mail, label: "Email", value: "hello@lockin.so", href: "mailto:hello@lockin.so" },
  { Icon: MessageCircle, label: "Support", value: "support@lockin.so", href: "mailto:support@lockin.so" },
  { Icon: MapPin, label: "HQ", value: "Jakarta · Singapore" },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Missing fields", {
        description: "Please fill in your name, email and message.",
      });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thank you for your message", {
      description: "We'll get back to you within 1–2 business days.",
    });
    setForm(INITIAL);
    setSubmitting(false);
  };

  return (
    <div className="relative pt-32 pb-24" data-testid="contact-page">
      <div className="aurora" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">Contact</div>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tighter leading-[0.9]">
                Say <span className="text-cyan-400">hi.</span>
              </h1>
              <p className="mt-6 text-zinc-400 text-lg leading-relaxed max-w-md">
                Press inquiries, partnerships, support, or just a kind note — we read every message.
              </p>

              <div className="mt-12 space-y-6">
                {CONTACT_INFO.map(({ Icon, label, value, href }, i) => (
                  <div key={i} className="flex items-center gap-4" data-testid={`contact-info-${i}`}>
                    <div className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-zinc-500">{label}</div>
                      {href ? (
                        <a href={href} className="text-white hover:text-cyan-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-white">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              data-testid="contact-form"
              className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl p-8 md:p-12"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    data-testid="contact-input-name"
                    placeholder="Jane Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                </Field>
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    data-testid="contact-input-email"
                    placeholder="jane@studio.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="What's this about?">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" data-testid="contact-topic-group">
                    {TOPICS.map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setForm((f) => ({ ...f, topic: t.id }))}
                        data-testid={`contact-topic-${t.id}`}
                        className={`px-4 py-2.5 rounded-full text-sm transition-all duration-300 border ${
                          form.topic === t.id
                            ? "bg-white text-black border-white"
                            : "bg-transparent text-zinc-300 border-white/15 hover:border-white/40"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    data-testid="contact-input-message"
                    placeholder="Tell us what's on your mind…"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-all resize-none"
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-zinc-500 max-w-sm">
                  By sending, you agree to our privacy policy. We never share your email.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all duration-300 disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send message"}
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">{label}</span>
      {children}
    </label>
  );
}
