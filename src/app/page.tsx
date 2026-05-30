"use client";

import { useReveal } from "@/lib/useReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { ModeBridge } from "@/components/ModeBridge";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  useReveal();
  return (
    <main data-testid="landing-page" className="bg-[#0A0A0B] text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <ModeBridge />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
