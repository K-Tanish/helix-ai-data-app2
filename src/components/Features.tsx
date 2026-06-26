import React, { useState, useEffect } from 'react';
import { SectionHeading, SectionLabel } from './primitives';
import { Reveal } from './Reveal';

/* ---------- Card visualizations ---------- */

function WorkflowBuilderViz() {
  const blocks = [
    { x: 16, y: 24, w: 70, label: 'Trigger' },
    { x: 16, y: 64, w: 70, label: 'Classify' },
    { x: 110, y: 44, w: 70, label: 'Route' },
    { x: 204, y: 24, w: 70, label: 'Agent A' },
    { x: 204, y: 64, w: 70, label: 'Agent B' },
  ];
  return (
    <svg viewBox="0 0 290 110" className="w-full">
      <g fill="none" stroke="#114C5A" strokeOpacity="0.25" strokeWidth="1.2">
        <path d="M86 36 H110 V48 H108" />
        <path d="M86 76 H110 V64 H108" />
        <path d="M180 48 H204 V36 H202" />
        <path d="M180 48 H204 V76 H202" />
      </g>
      <g fill="none" stroke="#FFC801" strokeWidth="1.6" strokeDasharray="3 4" strokeLinecap="round" className="animate-dashMove">
        <path d="M86 36 H110 V48 H108" />
        <path d="M180 48 H204 V36 H202" />
      </g>
      {blocks.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y - 12} width={b.w} height="24" rx="6" fill={i === 2 ? '#114C5A' : '#fff'} stroke={i === 2 ? '#114C5A' : '#D9E8E2'} />
          <text x={b.x + b.w / 2} y={b.y + 3} textAnchor="middle" className="font-mono" fontSize="9" fontWeight="600" fill={i === 2 ? '#F1F6F4' : '#172B36'}>{b.label}</text>
        </g>
      ))}
    </svg>
  );
}

function WorkflowGraphViz() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4">
      <div className="absolute inset-0 golden-dot-grid opacity-50 rounded-2xl transition-opacity duration-300 group-hover:opacity-80" />

      <svg viewBox="0 0 560 460" className="relative w-full max-w-[600px]" role="img" aria-label="AI workflow engine routing tasks across intelligent nodes">
        <defs>
          <linearGradient id="flowGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#114C5A" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FFC801" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#114C5A" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="nodeFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#172B36" />
            <stop offset="100%" stopColor="#114C5A" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#114C5A" floodOpacity="0.18" />
          </filter>
        </defs>

        <g fill="none" strokeWidth="1.5">
          <path d="M70 110 C 180 110, 200 230, 300 230" stroke="#114C5A" strokeOpacity="0.18" />
          <path d="M70 230 C 180 230, 200 230, 300 230" stroke="#114C5A" strokeOpacity="0.18" />
          <path d="M70 350 C 180 350, 200 230, 300 230" stroke="#114C5A" strokeOpacity="0.18" />
          <path d="M360 230 C 420 230, 440 130, 500 130" stroke="#114C5A" strokeOpacity="0.18" />
          <path d="M360 230 C 420 230, 440 230, 500 230" stroke="#114C5A" strokeOpacity="0.18" />
          <path d="M360 230 C 420 230, 440 330, 500 330" stroke="#114C5A" strokeOpacity="0.18" />
        </g>

        <g fill="none" strokeWidth="2" strokeLinecap="round">
          <path d="M70 110 C 180 110, 200 230, 300 230" stroke="url(#flowGrad)" strokeDasharray="6 10" className="animate-dashMove" />
          <path d="M70 230 C 180 230, 200 230, 300 230" stroke="url(#flowGrad)" strokeDasharray="6 10" className="animate-dashMove" style={{ animationDelay: '0.4s' }} />
          <path d="M70 350 C 180 350, 200 230, 300 230" stroke="url(#flowGrad)" strokeDasharray="6 10" className="animate-dashMove" style={{ animationDelay: '0.8s' }} />
          <path d="M360 230 C 420 230, 440 130, 500 130" stroke="url(#flowGrad)" strokeDasharray="6 10" className="animate-dashMove" style={{ animationDelay: '0.2s' }} />
          <path d="M360 230 C 420 230, 440 230, 500 230" stroke="url(#flowGrad)" strokeDasharray="6 10" className="animate-dashMove" style={{ animationDelay: '0.6s' }} />
          <path d="M360 230 C 420 230, 440 330, 500 330" stroke="url(#flowGrad)" strokeDasharray="6 10" className="animate-dashMove" style={{ animationDelay: '1s' }} />
        </g>

        {[
          { y: 110, label: 'API', sub: 'ingest' },
          { y: 230, label: 'Webhook', sub: 'trigger' },
          { y: 350, label: 'Queue', sub: 'stream' },
        ].map((n, i) => (
          <g key={n.label} filter="url(#soft)">
            <rect x="20" y={n.y - 26} width="100" height="52" rx="12" fill="#fff" stroke="#D9E8E2" />
            <circle cx="40" cy={n.y} r="5" fill="#114C5A" className="animate-pulseNode" style={{ animationDelay: `${i * 0.5}s` }} />
            <text x="56" y={n.y - 3} className="font-mono" fontSize="11" fontWeight="600" fill="#172B36">{n.label}</text>
            <text x="56" y={n.y + 11} fontSize="9" fill="#114C5A" opacity="0.6">{n.sub}</text>
          </g>
        ))}

        <g filter="url(#soft)">
          <rect x="300" y="190" width="60" height="80" rx="16" fill="url(#nodeFill)" />
          <circle cx="330" cy="218" r="9" fill="none" stroke="#FFC801" strokeWidth="2" className="animate-pulseNode" />
          <circle cx="330" cy="218" r="3.5" fill="#FFC801" />
          <text x="330" y="248" textAnchor="middle" className="font-mono" fontSize="8.5" fontWeight="600" fill="#F1F6F4">ENGINE</text>
        </g>

        {[
          { y: 130, label: 'Agent A', sub: 'classify' },
          { y: 230, label: 'Agent B', sub: 'execute' },
          { y: 330, label: 'Agent C', sub: 'review' },
        ].map((n, i) => (
          <g key={n.label} filter="url(#soft)">
            <rect x="500" y={n.y - 26} width="40" height="52" rx="12" fill="#fff" stroke="#D9E8E2" />
            <rect x="506" y={n.y - 18} width="28" height="6" rx="3" fill="#D9E8E2" />
            <rect x="506" y={n.y - 8} width="20" height="4" rx="2" fill="#114C5A" opacity="0.3" />
            <rect x="506" y={n.y - 1} width="24" height="4" rx="2" fill="#114C5A" opacity="0.2" />
            <circle cx="520" cy={n.y + 14} r="3" fill={i === 1 ? '#FFC801' : '#114C5A'} className="animate-pulseNode" style={{ animationDelay: `${i * 0.3}s` }} />
          </g>
        ))}
      </svg>

      <div className="absolute left-4 top-4 hidden rounded-lg border border-primary/10 bg-bg/90 px-2.5 py-1.5 shadow-soft backdrop-blur sm:block">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
          <span className="font-mono text-[10px] font-medium text-primary/70">12,847 tasks/min</span>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 hidden rounded-lg border border-primary/10 bg-bg/90 px-2.5 py-1.5 shadow-soft backdrop-blur sm:block">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-blink" />
          <span className="font-mono text-[10px] font-medium text-primary/70">p99 · 42ms</span>
        </div>
      </div>
    </div>
  );
}

function PromptIntelViz() {
  const [prompt, setPrompt] = useState('Summarize Q3 churn drivers and route to retention agent.');
  const [intent, setIntent] = useState('retention.escalate');
  const [confidence, setConfidence] = useState('0.97');
  const [tokens, setTokens] = useState({ in: 1204, out: 312 });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (prompt.toLowerCase().includes('report') || prompt.toLowerCase().includes('data')) {
        setIntent('analytics.report');
        setConfidence('0.92');
        setTokens({ in: prompt.length * 4, out: Math.floor(prompt.length * 1.2) });
      } else if (prompt.trim().length === 0) {
        setIntent('...');
        setConfidence('0.00');
        setTokens({ in: 0, out: 0 });
      } else {
        setIntent('retention.escalate');
        setConfidence('0.97');
        setTokens({ in: Math.max(120, prompt.length * 3), out: Math.floor(prompt.length * 0.8) });
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [prompt]);

  return (
    <div className="space-y-2.5">
      <div className="rounded-lg border border-primary/20 bg-bg/80 p-2.5 transition-colors focus-within:border-accent/50 focus-within:bg-bg shadow-inner">
        <div className="flex items-center justify-between mb-1">
          <span className="font-mono text-[9px] font-medium uppercase tracking-wider text-primary/60">Live Prompt Input</span>
          <span className="font-mono text-[8px] text-accent opacity-80 uppercase">editable</span>
        </div>
        <textarea 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full bg-transparent font-mono text-[11px] leading-snug text-secondary focus:outline-none resize-none"
          rows={2}
          spellCheck={false}
        />
      </div>
      <div className="flex items-center gap-2 transition-all">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent animate-pulse" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="font-mono text-[10px] text-primary/70">optimized · {tokens.in} tokens → {tokens.out} tokens</span>
      </div>
      <div className="rounded-lg border border-primary/15 bg-primary p-2.5 transition-all">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-medium uppercase tracking-wider text-bg/50">parsed intent</span>
          <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-[9px] font-semibold text-secondary">{confidence}</span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-bg transition-all">{intent}</p>
      </div>
    </div>
  );
}

function MultiAgentViz() {
  const [agents, setAgents] = useState([
    { name: 'Planner', state: 'active', load: 78 },
    { name: 'Executor', state: 'active', load: 54 },
    { name: 'Critic', state: 'idle', load: 0 },
    { name: 'Reviewer', state: 'active', load: 41 },
  ]);

  const toggleAgent = (index: number) => {
    setAgents(current => {
      const next = [...current];
      const agent = next[index];
      const isNowActive = agent.state === 'idle';
      next[index] = { ...agent, state: isNowActive ? 'active' : 'idle' };
      
      const activeCount = next.filter(a => a.state === 'active').length;
      if (activeCount === 0) {
        next.forEach(a => a.load = 0);
      } else {
        const baseLoad = 100 / activeCount;
        next.forEach(a => {
          if (a.state === 'active') {
            a.load = Math.min(95, Math.floor(baseLoad + Math.random() * 20));
          } else {
            a.load = 0;
          }
        });
      }
      return next;
    });
  };

  return (
    <div className="space-y-2">
      <div className="font-mono text-[9px] font-medium uppercase tracking-wider text-primary/40 mb-2">Click agents to toggle pool</div>
      {agents.map((a, i) => (
        <div 
          key={a.name} 
          onClick={(e) => { e.preventDefault(); toggleAgent(i); }}
          className={`flex items-center gap-3 rounded-lg border px-2.5 py-2 cursor-pointer transition-all hover:scale-[1.02] active:scale-95 ${a.state === 'active' ? 'border-primary/20 bg-bg/80 hover:border-accent/40' : 'border-primary/5 bg-bg/30 opacity-60 hover:opacity-100 hover:border-primary/30'}`}
        >
          <span className={`h-2 w-2 rounded-full transition-colors ${a.state === 'active' ? 'bg-accent animate-pulse' : 'bg-primary/20'}`} />
          <span className="font-mono text-[11px] font-medium text-secondary w-16 select-none">{a.name}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/5">
            <div 
              className="h-full rounded-full bg-primary/60 transition-all duration-500 ease-out" 
              style={{ width: `${a.load}%` }} 
            />
          </div>
          <span className="font-mono text-[10px] text-primary/50 w-8 text-right transition-all duration-500 select-none">{a.load}%</span>
        </div>
      ))}
    </div>
  );
}

function KnowledgeGraphViz() {
  const nodes = [
    { x: 40, y: 30, r: 6 },
    { x: 110, y: 20, r: 4 },
    { x: 150, y: 60, r: 7 },
    { x: 80, y: 70, r: 4 },
    { x: 200, y: 40, r: 5 },
    { x: 230, y: 80, r: 4 },
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4], [4, 5], [1, 4]];
  return (
    <svg viewBox="0 0 260 100" className="w-full">
      <g stroke="#114C5A" strokeOpacity="0.2" strokeWidth="1">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
        ))}
      </g>
      <g stroke="#FFC801" strokeWidth="1.4" strokeDasharray="2 3" className="animate-dashMove">
        <line x1={nodes[0].x} y1={nodes[0].y} x2={nodes[1].x} y2={nodes[1].y} />
        <line x1={nodes[1].x} y1={nodes[1].y} x2={nodes[2].x} y2={nodes[2].y} />
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={i === 2 ? '#FFC801' : '#114C5A'} fillOpacity={i === 2 ? 1 : 0.7} className={i === 2 ? 'animate-pulseNode' : ''} />
      ))}
    </svg>
  );
}

function ObservabilityViz() {
  const bars = [40, 65, 50, 80, 45, 70, 90, 60, 55, 75, 85, 50];
  return (
    <div>
      <div className="flex items-end justify-between gap-1 h-16">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-primary/30 origin-bottom animate-rise"
            style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-primary/50">
        <span>trace · 12 spans</span>
        <span className="text-accent-2">1 anomaly</span>
      </div>
    </div>
  );
}

function SecurityViz() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-bg/50 px-2.5 py-1.5">
        <span className="font-mono text-[10px] text-secondary/70">SOC 2 Type II</span>
        <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-primary">PASS</span>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-bg/50 px-2.5 py-1.5">
        <span className="font-mono text-[10px] text-secondary/70">Data residency · EU</span>
        <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-primary">PASS</span>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-primary/10 bg-bg/50 px-2.5 py-1.5">
        <span className="font-mono text-[10px] text-secondary/70">PII redaction</span>
        <span className="rounded bg-accent px-1.5 py-0.5 font-mono text-[9px] font-semibold text-secondary">ACTIVE</span>
      </div>
    </div>
  );
}

function AnalyticsViz() {
  return (
    <svg viewBox="0 0 200 80" className="w-full">
      <defs>
        <linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#114C5A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#114C5A" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 25 L120 30 L140 18 L160 22 L180 12 L200 15 L200 80 L0 80 Z" fill="url(#areaG)" />
      <path d="M0 60 L20 50 L40 55 L60 35 L80 40 L100 25 L120 30 L140 18 L160 22 L180 12 L200 15" fill="none" stroke="#114C5A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="180" cy="12" r="3.5" fill="#FFC801" className="animate-pulseNode" />
    </svg>
  );
}

/* ---------- Card wrapper ---------- */

function Card({
  className = '',
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-primary/10 bg-surface/40 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(17,76,90,0.22),inset_0_0_40px_rgba(255,200,1,0.15)] hover:border-accent/40 hover:bg-accent/[0.03] ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="flex items-start justify-between">
      <h3 className="font-mono text-base font-semibold tracking-tight text-secondary">{title}</h3>
      <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-primary/40">{tag}</span>
    </div>
  );
}

/* ---------- Section ---------- */

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel>The platform</SectionLabel>
            <SectionHeading>One control plane. Every layer of the automation stack.</SectionHeading>
            <p className="mt-5 text-[15px] leading-relaxed text-secondary/70">
              From prompt to production, Helix gives you the primitives to build, route, observe, and secure autonomous workflows — without stitching together six different tools.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6">
          {/* Oversized featured — Workflow Builder */}
          <Reveal variant="scale" className="md:col-span-4">
            <Card href="#" className="h-full">
              <CardHeader title="Workflow Builder" tag="01 · core" />
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-secondary/60">
                Compose multi-step pipelines with a visual editor. Branch, loop, and hand off between agents without writing glue code.
              </p>
              <div className="mt-5 rounded-xl border border-primary/10 bg-bg/40 p-4">
                <WorkflowBuilderViz />
              </div>
            </Card>
          </Reveal>

          {/* New Live Animated Engine Graph */}
          <Reveal variant="scale" className="md:col-span-2">
            <Card href="#" className="h-full flex flex-col justify-between">
              <div>
                <CardHeader title="Runtime Execution" tag="02" />
                <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
                  Dynamic routing and state management through a unified spatial core.
                </p>
              </div>
              <div className="mt-6 flex-1 rounded-xl border border-primary/10 bg-bg/40 overflow-hidden">
                <WorkflowGraphViz />
              </div>
            </Card>
          </Reveal>

          {/* State Management (Knowledge Graph) */}
          <Card href="#" className="md:col-span-4">
            <CardHeader title="State Management" tag="03" />
            <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
              Unified memory across workflows.
            </p>
            <div className="mt-4 rounded-xl border border-primary/10 bg-bg/40 p-4">
              <KnowledgeGraphViz />
            </div>
          </Card>

          {/* Prompt Intelligence */}
          <Card href="#" className="md:col-span-2">
            <CardHeader title="Prompt Intelligence" tag="04" />
            <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
              Automatic compression and intent classification.
            </p>
            <div className="mt-4">
              <PromptIntelViz />
            </div>
          </Card>

          {/* Multi-Agent Routing */}
          <Card href="#" className="md:col-span-3">
            <CardHeader title="Multi-Agent Routing" tag="05" />
            <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
              Dynamic load balancing across specialized agents.
            </p>
            <div className="mt-4">
              <MultiAgentViz />
            </div>
          </Card>

          {/* Observability */}
          <Card href="#" className="md:col-span-3">
            <CardHeader title="Observability" tag="06" />
            <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
              Trace every span, every decision, every token.
            </p>
            <div className="mt-4">
              <ObservabilityViz />
            </div>
          </Card>

          {/* Automation Analytics */}
          <Card href="#" className="md:col-span-4">
            <CardHeader title="Automation Analytics" tag="07" />
            <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
              Cost, throughput, and accuracy trends in one view.
            </p>
            <div className="mt-4">
              <AnalyticsViz />
            </div>
          </Card>

          {/* Security Layer */}
          <Card href="#" className="md:col-span-2">
            <CardHeader title="Security & Compliance" tag="08" />
            <p className="mt-2 text-[13px] leading-relaxed text-secondary/60">
              Enterprise-grade controls at the edge.
            </p>
            <div className="mt-4">
              <SecurityViz />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
