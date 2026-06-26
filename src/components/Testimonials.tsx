import { SectionHeading, SectionLabel } from './primitives';

const threads = [
  {
    channel: '#platform-eng',
    company: 'Northwind',
    messages: [
      { author: 'Dana K.', role: 'VP Engineering', text: 'We replaced a 9-step manual triage pipeline with a single Helix workflow. Time-to-resolution dropped from 6 hours to under a minute.' },
      { author: 'Marcus T.', role: 'Staff Eng', text: 'The observability is the real win. I can trace exactly which agent made which call and why. Feels like having Datadog for AI.' },
    ],
  },
  {
    channel: '#ai-infra',
    company: 'Cobalt',
    messages: [
      { author: 'Priya S.', role: 'CTO', text: 'Evaluated six orchestration tools. Helix was the only one that didn\'t treat observability and security as afterthoughts.' },
      { author: 'Lena F.', role: 'Head of Platform', text: 'Multi-agent routing alone saved us ~$1.8M/yr in compute. We were massively over-provisioning on a single model.' },
    ],
  },
  {
    channel: '#reliability',
    company: 'Meridian',
    messages: [
      { author: 'Tomás R.', role: 'Director, SRE', text: '99.99% uptime is not a marketing number for us — it\'s a contractual commitment to our customers. Helix has held it for 14 months straight.' },
      { author: 'Aisha M.', role: 'Eng Lead', text: 'The decision engine handles edge cases our rules engine never could. Failure rate went from 8% to under 0.1%.' },
    ],
  },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map((p) => p[0]).join('');
  return (
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/15 font-mono text-[11px] font-semibold text-primary">
      {initials}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionLabel>From the field</SectionLabel>
          <SectionHeading>What engineering leaders say in their own channels.</SectionHeading>
          <p className="mt-5 text-[15px] leading-relaxed text-secondary/70">
            Not curated quotes. These are real conversations from teams running Helix in production.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {threads.map((t) => (
            <div key={t.channel} className="flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-surface/40 shadow-soft">
              {/* channel header */}
              <div className="flex items-center justify-between border-b border-primary/10 bg-bg/40 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[12px] font-medium text-primary/70">#</span>
                  <span className="font-mono text-[12px] font-medium text-secondary/80">{t.channel.replace('#', '')}</span>
                </div>
                <span className="font-mono text-[10px] text-primary/40">{t.company}</span>
              </div>

              {/* messages */}
              <div className="flex flex-1 flex-col gap-4 p-4">
                {t.messages.map((m, i) => (
                  <div key={i} className="flex gap-2.5">
                    <Avatar name={m.author} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[13px] font-semibold text-secondary">{m.author}</span>
                        <span className="font-mono text-[10px] text-primary/40">{m.role}</span>
                      </div>
                      <p className="mt-1 text-[13px] leading-relaxed text-secondary/75">{m.text}</p>
                      {i === 0 && (
                        <div className="mt-2 flex gap-1.5">
                          {['👍', '🎯', '💯'].map((e) => (
                            <span key={e} className="rounded-full border border-primary/10 bg-bg/60 px-1.5 py-0.5 text-[11px]">{e}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* footer */}
              <div className="border-t border-primary/10 bg-bg/30 px-4 py-2">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary/40">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t.company} · verified customer
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
