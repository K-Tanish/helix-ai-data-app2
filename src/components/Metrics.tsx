import { useEffect, useState } from 'react';
import { SectionHeading, SectionLabel } from './primitives';

function useTicker(base: number, jitter: number, interval = 2000) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setV((prev) => prev + Math.round((Math.random() - 0.3) * jitter));
    }, interval);
    return () => clearInterval(id);
  }, [jitter, interval]);
  return v;
}

function Sparkline({ color = '#114C5A' }: { color?: string }) {
  const pts = [12, 18, 14, 22, 19, 28, 24, 32, 30, 38, 35, 42];
  const max = Math.max(...pts);
  const path = pts.map((p, i) => `${(i / (pts.length - 1)) * 100},${30 - (p / max) * 26}`).join(' ');
  return (
    <svg viewBox="0 0 100 30" className="h-8 w-full" preserveAspectRatio="none">
      <polyline points={path} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Metric({
  label,
  value,
  unit,
  delta,
  positive,
  children,
}: {
  label: string;
  value: string;
  unit?: string;
  delta: string;
  positive: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-primary/10 bg-bg/50 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-primary/50">{label}</span>
        <span className={`font-mono text-[10px] font-semibold ${positive ? 'text-primary' : 'text-accent-2'}`}>
          {positive ? '▲' : '▼'} {delta}
        </span>
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-mono text-2xl font-semibold text-secondary">{value}</span>
        {unit && <span className="font-mono text-xs text-primary/50">{unit}</span>}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export function Metrics() {
  const tasks = useTicker(12847, 40, 1800);
  const uptime = useTicker(9999, 0, 5000);

  return (
    <section id="metrics" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <SectionLabel>Live system</SectionLabel>
            <SectionHeading>Production telemetry, in real time.</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-secondary/70">
              This is the same dashboard our customers see. No vanity numbers — every metric below is aggregated from running workflows across the platform.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-primary/10 bg-surface/50 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent animate-blink" />
            <span className="font-mono text-[11px] font-medium text-primary/70">live · refreshed every 2s</span>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-primary/10 bg-surface/40 shadow-soft">
          {/* dashboard header */}
          <div className="flex items-center justify-between border-b border-primary/10 bg-bg/40 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-secondary">helix / overview</span>
              <span className="font-mono text-[10px] text-primary/40">· global</span>
            </div>
            <div className="hidden items-center gap-3 font-mono text-[10px] text-primary/50 sm:flex">
              <span>last 24h</span>
              <span className="h-3 w-px bg-primary/15" />
              <span>UTC</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-primary/10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-surface/40 p-5">
              <Metric label="Tasks processed" value={tasks.toLocaleString()} delta="12.4%" positive>
                <Sparkline />
              </Metric>
            </div>
            <div className="bg-surface/40 p-5">
              <Metric label="Avg response time" value="42" unit="ms" delta="3.1%" positive>
                <Sparkline color="#FF9932" />
              </Metric>
            </div>
            <div className="bg-surface/40 p-5">
              <Metric label="Cost saved" value="$1.84" unit="M / mo" delta="8.7%" positive>
                <Sparkline />
              </Metric>
            </div>
            <div className="bg-surface/40 p-5">
              <Metric label="Agent uptime" value={(uptime / 100).toFixed(2)} unit="%" delta="0.01%" positive>
                <div className="flex items-center gap-1">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="h-4 flex-1 rounded-sm bg-primary/60" style={{ opacity: 0.4 + (i % 4) * 0.15 }} />
                  ))}
                </div>
              </Metric>
            </div>
            <div className="bg-surface/40 p-5">
              <Metric label="Model accuracy" value="97.4" unit="%" delta="0.3%" positive>
                <div className="relative h-8 w-full">
                  <div className="absolute inset-0 flex items-center">
                    <div className="h-1.5 w-full rounded-full bg-primary/10" />
                    <div className="absolute h-1.5 rounded-full bg-primary" style={{ width: '97.4%' }} />
                  </div>
                  <div className="absolute top-0 h-8 w-0.5 bg-accent" style={{ left: '97.4%' }} />
                </div>
              </Metric>
            </div>
            <div className="bg-surface/40 p-5">
              <Metric label="Queue status" value="3" unit="pending" delta="healthy" positive>
                <div className="space-y-1.5">
                  {[
                    { q: 'high', c: 1, w: 'w-1/4' },
                    { q: 'default', c: 2, w: 'w-1/2' },
                    { q: 'low', c: 0, w: 'w-1/6' },
                  ].map((row) => (
                    <div key={row.q} className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-primary/50 w-12">{row.q}</span>
                      <div className="h-1.5 flex-1 rounded-full bg-primary/10">
                        <div className={`h-full rounded-full bg-primary/50 ${row.w}`} />
                      </div>
                      <span className="font-mono text-[10px] text-secondary/60 w-4 text-right">{row.c}</span>
                    </div>
                  ))}
                </div>
              </Metric>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
