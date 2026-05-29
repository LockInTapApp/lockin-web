import type { Metadata } from "next";
import { Outfit, Manrope } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lockin: Focus, materialized.",
  description:
    "Lockin is a physical NFC brick that instantly blocks distracting apps, websites and notifications, paired with a companion app that tracks every minute you reclaim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${outfit.variable}`}>
      <body>
        {children}
        <Toaster
          theme="light"
          position="top-center"
          toastOptions={{
            style: {
              background: "rgba(255, 255, 255, 0.98)",
              border: "1px solid rgba(0,0,0,0.08)",
              color: "#1d1d1f",
              backdropFilter: "blur(20px)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            },
          }}
        />
      </body>
    </html>
  );
}
