import { SectionHeading, SectionLabel } from './primitives';
import { Reveal } from './Reveal';

const oldSteps = [
  { label: 'Manual approval queue', detail: 'Avg. 4.2 hours per request' },
  { label: 'Handoff delays', detail: '3 teams, 7 tickets' },
  { label: 'Human error rate', detail: '8.4% of runs' },
  { label: 'No audit trail', detail: 'Reconstructed manually' },
];

const newSteps = [
  { label: 'Instant routing', detail: '0ms dispatch' },
  { label: 'Decision engine', detail: 'Context-aware' },
  { label: 'Autonomous execution', detail: 'Multi-agent' },
  { label: 'Completed & logged', detail: 'Full trace' },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>The problem</SectionLabel>
            <SectionHeading>
              Traditional automation breaks at the decisions that matter most.
            </SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-secondary/70">
              Rules-based pipelines handle the easy 80%. The remaining 20% — judgment calls, edge cases, multi-step reasoning — falls back to humans. That's where time, money, and trust leak out.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* old workflow */}
          <Reveal variant="left" delay={100}>
          <div className="rounded-2xl border border-primary/10 bg-surface/30 p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-primary/50">
                Legacy pipeline
              </span>
              <span className="rounded-md bg-primary/5 px-2 py-0.5 font-mono text-[10px] font-medium text-primary/60">
                BEFORE
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              {oldSteps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="flex w-7 shrink-0 items-center justify-center rounded-md border border-primary/15 bg-bg font-mono text-[11px] font-semibold text-primary/50">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-lg border border-primary/10 bg-bg/60 px-3.5 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-secondary/80">{s.label}</span>
                      <span className="font-mono text-[11px] text-primary/40">{s.detail}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-primary/10 pt-4">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary/40" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span className="font-mono text-[12px] text-primary/50">~6.4 hours end-to-end · 8.4% failure</span>
            </div>
          </div>
          </Reveal>

          {/* new workflow */}
          <Reveal variant="right" delay={200}>
          <div className="relative rounded-2xl border border-primary/20 bg-primary p-6 shadow-lift sm:p-8">
            <div className="absolute inset-0 dot-grid opacity-[0.07] rounded-2xl" />
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-bg/60">
                Helix orchestration
              </span>
              <span className="rounded-md bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold text-secondary">
                AFTER
              </span>
            </div>
            <div className="relative mt-6 flex flex-col gap-3">
              {newSteps.map((s, i) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="flex w-7 shrink-0 items-center justify-center rounded-md bg-bg/10 font-mono text-[11px] font-semibold text-accent">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-lg border border-bg/10 bg-bg/5 px-3.5 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] font-medium text-bg">{s.label}</span>
                      <span className="font-mono text-[11px] text-bg/50">{s.detail}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-5 flex items-center gap-2 border-t border-bg/10 pt-4">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-mono text-[12px] text-bg/70">~1.2 seconds end-to-end · 99.96% success</span>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
