const companies = [
  'Northwind',
  'Aperture',
  'Cobalt',
  'Meridian',
  'Helios Labs',
  'Foundry',
  'Quanta',
  'Vantage',
  'Lumen',
  'Orbital',
];

export function TrustRibbon() {
  return (
    <section className="border-y border-primary/10 bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary/50">
            Powering automation at
          </p>
          <div className="relative w-full max-w-3xl overflow-hidden mask-fade-x">
            <div className="flex w-max animate-ticker items-center gap-10">
              {[...companies, ...companies].map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="font-mono text-sm font-semibold tracking-tight text-primary/45 transition-colors hover:text-primary/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
