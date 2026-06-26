import { useState } from 'react';
import { SectionHeading, SectionLabel } from './primitives';

const faqs = [
  {
    q: 'How does Helix route work between different agents?',
    a: 'The decision engine evaluates each incoming task against agent capabilities, current load, and historical success rates, then dispatches to the optimal agent in under 50ms. Routing rules are configurable in code or via the visual builder, and you can pin specific tasks to specific agents when needed.',
  },
  {
    q: 'Can I bring my own models and API keys?',
    a: 'Yes. Helix is model-agnostic. Connect OpenAI, Anthropic, open-source models via your own endpoints, or any combination. Your keys stay in your vault — we never proxy model traffic through our servers unless you explicitly enable it.',
  },
  {
    q: 'What does observability actually include?',
    a: 'Every workflow run produces a full trace: every agent invocation, every prompt, every tool call, token counts, latency breakdowns, and the final decision path. Traces are retained per your plan and exportable via API to Datadog, Honeycomb, or your existing stack.',
  },
  {
    q: 'How is sensitive data handled?',
    a: 'PII redaction runs at the runtime boundary before any data reaches a model. You define redaction policies per workflow. Data residency options let you keep all processing within a specific region. We are SOC 2 Type II certified and offer HIPAA-compliant configurations on Enterprise.',
  },
  {
    q: 'What happens if an agent fails mid-workflow?',
    a: 'Helix supports automatic retries with configurable backoff, fallback agents, and dead-letter queues. Failed runs are never silent — they trigger alerts and produce a full trace so you can debug the exact failure point. You can also set circuit breakers per agent.',
  },
  {
    q: 'Is there a self-hosted option?',
    a: 'Enterprise customers can deploy Helix in their own VPC or on-premises. The control plane, runtime, and knowledge graph all run as containerized services. We provide a solutions engineer to assist with deployment and ongoing operations.',
  },
];

function Item({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-primary/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-mono text-[15px] font-medium text-secondary">{q}</span>
        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-primary/15 transition-transform duration-300 ${open ? 'rotate-180 bg-primary text-bg' : 'text-primary/60'}`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`accordion-panel ${open ? 'open' : ''}`}>
        <div>
          <p className="pb-5 pr-10 text-[14px] leading-relaxed text-secondary/70">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>FAQ</SectionLabel>
            <SectionHeading>Questions, answered.</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-secondary/70">
              Still curious? Our engineering team responds in under 4 hours on average.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-1.5 font-mono text-[13px] font-medium text-primary hover:text-accent-2">
              Read the full docs
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-primary/10 bg-surface/40 px-6 shadow-soft">
              {faqs.map((f, i) => (
                <Item
                  key={i}
                  q={f.q}
                  a={f.a}
                  open={openIdx === i}
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
