import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Store", href: "#store" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-white/75 border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-display text-xl tracking-tight flex items-center gap-2 text-neutral-900"
        >
          <span className="inline-block w-2.5 h-2.5 rounded-sm bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.4)]" />
          <span className="font-semibold">Lockin</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            data-testid="nav-buy-button"
            className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-5 h-10 text-sm font-medium"
          >
            <a href="#store">Buy Lockin</a>
          </Button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-neutral-700 hover:text-neutral-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/95 backdrop-blur-2xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`nav-link-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-base text-neutral-700 hover:text-neutral-900 py-1"
              >
                {l.label}
              </a>
            ))}
            <Button
              asChild
              data-testid="nav-buy-button-mobile"
              className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 mt-2"
            >
              <a href="#store" onClick={() => setOpen(false)}>
                Buy Lockin
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
