import { useEffect, useRef } from 'react';
import { SectionLabel } from './primitives';
import { CubeGraphic } from './CubeGraphic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cubeWrapperRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the cube and scale it as we scroll down
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=1000', // Pinned for 1000px of scrolling
        scrub: 1,
        pin: cubeWrapperRef.current,
        pinSpacing: false, // Don't add extra space below so the next section scrolls up over it
        animation: gsap.to(cubeWrapperRef.current, {
          scale: 2.2, // scale it up
          opacity: 0.15, // fade it so text in the next sections can be read easily
          yPercent: 20, // move it down slightly
          rotationX: 180, // rotate while scrolling
          rotationY: 360, // rotate while scrolling
          ease: 'power1.inOut',
        }),
      });
      
      // Fade out the left content faster
      gsap.to(leftContentRef.current, {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'center top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="top" className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 z-10">
        {/* left — maximalist */}
        <div ref={leftContentRef} className="lg:col-span-6 pointer-events-auto">
          <SectionLabel>AI Orchestration Platform</SectionLabel>

          <h1 className="mt-6 font-mono font-bold uppercase leading-[0.92] tracking-[-0.03em] text-secondary text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem]">
            <span className="block">Automate</span>
            <span className="block">
              <span className="relative inline-block">
                Everything
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
                  <path d="M2 6 Q 150 1 298 6" fill="none" stroke="#FFC801" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-secondary/70">
            Route work across intelligent agents. Instant decisions, full observability, engineering-grade control.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Deploy your first workflow
              <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/15 bg-surface/50 px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-surface"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
              Watch the engine
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-primary/10 pt-6">
            {[
              { v: '99.99%', l: 'Uptime' },
              { v: '42ms', l: 'Latency' },
              { v: 'SOC 2', l: 'Type II' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-xl font-semibold text-secondary">{s.v}</dt>
                <dd className="mt-1 text-[11px] uppercase tracking-wide text-primary/50">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* right - The 3D Cube */}
        <div className="lg:col-span-6 pointer-events-none absolute inset-0 lg:relative lg:inset-auto h-[50vh] lg:h-auto flex items-center justify-center -z-10 lg:z-0 opacity-20 lg:opacity-100">
          {/* We wrap the CubeGraphic in a ref to animate it with GSAP */}
          <div ref={cubeWrapperRef} className="w-[400px] h-[400px] origin-center z-[-1] relative">
             <CubeGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
