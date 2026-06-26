import { type ReactNode } from 'react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary/60">
      <span className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-3xl font-semibold leading-[1.1] tracking-tight text-secondary sm:text-4xl md:text-[2.75rem]">
      {children}
    </h2>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-primary/50">
      {children}
    </span>
  );
}
