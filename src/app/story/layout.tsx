import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Lockin — Lights Off",
  description:
    "Scroll through a focus session. Tap the brick, and the lights go off: apps vanish, notifications fall silent, the screen turns dark, and a stopwatch starts.",
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`story ${fraunces.variable} ${geist.variable} ${geistMono.variable}`}>
      {children}
    </div>
  );
}
