import { useState } from 'react';
import { SectionHeading, SectionLabel } from './primitives';

type Currency = 'USD' | 'INR' | 'EUR';

const rates: Record<Currency, number> = { USD: 1, INR: 83, EUR: 0.92 };
const symbols: Record<Currency, string> = { USD: '$', INR: '₹', EUR: '€' };

const plans = [
  {
    name: 'Starter',
    tag: 'for pilots',
    base: 49,
    desc: 'Run your first autonomous workflow in an afternoon. No infrastructure required.',
    features: ['5 active workflows', '2 agents', '1M tasks / mo', 'Community support', '7-day audit log'],
    cta: 'Start free trial',
    featured: false,
  },
  {
    name: 'Scale',
    tag: 'most adopted',
    base: 249,
    desc: 'Production orchestration for teams shipping automation across multiple services.',
    features: ['Unlimited workflows', '20 agents', '25M tasks / mo', 'Priority support', '90-day audit log', 'Knowledge graph', 'Custom routing rules'],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    tag: 'for platforms',
    base: null,
    desc: 'Dedicated infrastructure, SSO, and compliance controls for regulated environments.',
    features: ['Unlimited everything', 'Dedicated agents', 'Custom SLAs', 'SAML / SCIM', 'SOC 2 + HIPAA', 'On-prem option', 'Solutions engineer'],
    cta: 'Talk to sales',
    featured: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(true);
  const [currency, setCurrency] = useState<Currency>('USD');

  const price = (base: number | null) => {
    if (base === null) return null;
    const monthly = annual ? base * 0.8 : base;
    const converted = Math.round(monthly * rates[currency]);
    return `${symbols[currency]}${converted.toLocaleString()}`;
  };

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Pricing</SectionLabel>
          </div>
          <SectionHeading>Engineered pricing for engineered teams.</SectionHeading>
          <p className="mt-5 text-[15px] leading-relaxed text-secondary/70">
            Transparent tiers. No per-seat tax. Scale with usage, not headcount.
          </p>
        </div>

        {/* controls */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="inline-flex items-center rounded-xl border border-primary/15 bg-surface/50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-lg px-4 py-1.5 text-[13px] font-medium transition-colors ${!annual ? 'bg-bg text-secondary shadow-soft' : 'text-primary/60'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-lg px-4 py-1.5 text-[13px] font-medium transition-colors ${annual ? 'bg-bg text-secondary shadow-soft' : 'text-primary/60'}`}
            >
              Annual
              <span className="ml-1.5 rounded bg-accent/20 px-1 py-0.5 font-mono text-[9px] font-semibold text-accent-2">-20%</span>
            </button>
          </div>

          <div className="inline-flex items-center rounded-xl border border-primary/15 bg-surface/50 p-1">
            {(Object.keys(rates) as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`rounded-lg px-3 py-1.5 font-mono text-[12px] font-medium transition-colors ${currency === c ? 'bg-primary text-bg' : 'text-primary/60'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
                plan.featured
                  ? 'border-primary/25 bg-primary text-bg shadow-lift lg:-mt-4 lg:mb-4'
                  : 'border-primary/10 bg-surface/40 text-secondary shadow-soft'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-7 rounded-md bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold text-secondary">
                  RECOMMENDED
                </div>
              )}
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-lg font-semibold tracking-tight">{plan.name}</h3>
                <span className={`font-mono text-[10px] font-medium uppercase tracking-wider ${plan.featured ? 'text-bg/50' : 'text-primary/40'}`}>
                  {plan.tag}
                </span>
              </div>
              <p className={`mt-2 text-[13px] leading-relaxed ${plan.featured ? 'text-bg/70' : 'text-secondary/60'}`}>
                {plan.desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                {plan.base === null ? (
                  <span className="font-mono text-3xl font-semibold">Custom</span>
                ) : (
                  <>
                    <span className="font-mono text-3xl font-semibold">{price(plan.base)}</span>
                    <span className={`font-mono text-[13px] ${plan.featured ? 'text-bg/50' : 'text-primary/50'}`}>/ mo</span>
                  </>
                )}
              </div>
              {plan.base !== null && annual && (
                <span className={`mt-1 font-mono text-[11px] ${plan.featured ? 'text-bg/50' : 'text-primary/50'}`}>
                  billed annually
                </span>
              )}

              <a
                href="#"
                className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all hover:-translate-y-0.5 ${
                  plan.featured
                    ? 'bg-accent text-secondary hover:shadow-lift'
                    : 'bg-primary text-bg shadow-soft hover:shadow-lift'
                }`}
              >
                {plan.cta}
              </a>

              <div className={`mt-7 border-t pt-5 ${plan.featured ? 'border-bg/15' : 'border-primary/10'}`}>
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 shrink-0 ${plan.featured ? 'text-accent' : 'text-primary'}`} fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l3.5 3.5L13 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`text-[13px] ${plan.featured ? 'text-bg/80' : 'text-secondary/70'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
