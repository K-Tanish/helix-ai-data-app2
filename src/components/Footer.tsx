import { useState } from 'react';

const columns = [
  {
    title: 'Product',
    links: ['Platform', 'Workflow Builder', 'Multi-Agent Routing', 'Knowledge Graph', 'Observability', 'Changelog'],
  },
  {
    title: 'Developers',
    links: ['Documentation', 'API Reference', 'SDKs', 'CLI', 'Status', 'System Models'],
  },
  {
    title: 'Resources',
    links: ['Architecture', 'Security', 'Compliance', 'Whitepapers', 'Customer Stories', 'Blog'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'DPA', 'Subprocessors', 'Cookie Policy'],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <footer className="border-t border-primary/10 bg-secondary text-bg">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* top: brand + newsletter */}
        <div className="grid grid-cols-1 gap-10 border-b border-bg/10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-bg text-secondary">
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-9z" /></svg>
              </span>
              <span className="font-mono text-[15px] font-semibold tracking-tight">Helix</span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-bg/60">
              The control plane for autonomous AI workflows. Built for teams who treat automation as infrastructure.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="flex items-center gap-1.5 rounded-md border border-bg/15 px-2 py-1 font-mono text-[10px] text-bg/60">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
                All systems operational
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="font-mono text-[13px] font-semibold uppercase tracking-wider text-bg/70">Subscribe to the changelog</h3>
            <p className="mt-2 text-[13px] text-bg/50">Engineering updates, no marketing. One email per month.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
              className="mt-4 flex max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSent(false); }}
                placeholder="you@company.com"
                className="flex-1 rounded-lg border border-bg/15 bg-bg/5 px-3.5 py-2.5 text-[13px] text-bg placeholder:text-bg/40 focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-accent px-4 py-2.5 text-[13px] font-semibold text-secondary transition-colors hover:bg-accent-2"
              >
                {sent ? 'Subscribed ✓' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        {/* link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-bg/40">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-bg/70 transition-colors hover:text-accent">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-bg/10 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4 font-mono text-[11px] text-bg/40">
            <span>© 2026 Helix Systems, Inc.</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">SOC 2 Type II</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">v3.2.1</span>
          </div>
          <div className="flex items-center gap-4">
            {['GitHub', 'X', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="font-mono text-[11px] text-bg/50 transition-colors hover:text-accent">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
