import { useEffect, useState } from 'react';

const links = [
  { label: 'Platform', href: '#features' },
  { label: 'Metrics', href: '#metrics' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#faq' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-primary/10 bg-bg/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-bg">
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-9z" />
            </svg>
          </span>
          <span className="font-mono text-[15px] font-semibold tracking-tight text-secondary">Helix</span>
          <span className="ml-1 hidden rounded-md border border-primary/15 bg-surface/60 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary/60 sm:inline">
            v3.2
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[13px] font-medium text-secondary/70 transition-colors hover:bg-surface/70 hover:text-secondary"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#"
            className="rounded-lg px-3 py-2 text-[13px] font-medium text-secondary/70 transition-colors hover:text-secondary"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[13px] font-semibold text-bg shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Start building
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 text-secondary md:hidden"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-primary/10 bg-bg/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-secondary/80 hover:bg-surface"
              >
                {l.label}
              </a>
            ))}
            <a href="#pricing" className="mt-2 rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-bg">
              Start building
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
