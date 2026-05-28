import Link from "next/link";

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.79.42-1.32.76-1.62-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5z" />
    </svg>
  );
}

const SOCIALS = [
  { Icon: TwitterIcon, label: "twitter" },
  { Icon: InstagramIcon, label: "instagram" },
  { Icon: GithubIcon, label: "github" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#050505] relative z-10"
      data-testid="site-footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display font-black text-3xl tracking-tighter">
              LOCKIN<span className="text-cyan-400">.</span>
            </div>
            <p className="mt-4 text-zinc-400 max-w-sm leading-relaxed">
              A physical NFC brick that gives your attention back. Tap to enter
              deep work. Tap to return.
            </p>
            <div className="flex gap-3 mt-8">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`footer-social-${label}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Product
            </div>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <Link href="/store" className="hover:text-white transition-colors" data-testid="footer-link-store">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors" data-testid="footer-link-features">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors" data-testid="footer-link-how">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Company
            </div>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Press</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Support
            </div>
            <ul className="space-y-3 text-zinc-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Warranty</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Shipping</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Lockin Labs. Reclaim your focus.
          </div>
          <div className="flex gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
