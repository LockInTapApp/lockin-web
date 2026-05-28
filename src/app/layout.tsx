import type { Metadata } from "next";
import { Chivo, Manrope } from "next/font/google";
import { Toaster } from "sonner";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Lockin — Reclaim your focus",
  description:
    "Lockin is a physical NFC brick that holds the keys to your phone. Tap once — apps go dark, notifications silence, the timer starts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${chivo.variable} antialiased`}>
      <body className="min-h-screen bg-[#050505] text-white grain">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
