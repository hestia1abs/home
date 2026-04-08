'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cpu, Layers, Code, Activity, Database, Box } from 'lucide-react';
import { cn } from '@/lib/utils';
import DecryptedText from '@/components/animations/DecryptedText';

const offerings = [
  {
    title: 'HxTP Protocol',
    category: 'THE CORE',
    desc: 'A deterministic execution layer for signed, reliable, and observable command delivery across any environment.',
    specs: ['SHA-256 Signed Paths', 'Deterministic Latency', 'Edge-Native Execution', 'Tamper-proof Ledger'],
    accent: '#22d3ee',
    accentRgb: '34, 211, 238',
    icon: Shield,
  },
  {
    title: 'Helix Gateway',
    category: 'HARDWARE',
    desc: 'Physical compute node for high-integrity local execution, voice interaction, and environmental sensing.',
    specs: ['Local Inference GPU', 'Multi-Sensor Array', 'Offline-First Autonomy', 'Low-Latency Orchestration'],
    accent: '#f0f',
    accentRgb: '255, 0, 255',
    icon: Cpu,
  },
  {
    title: 'Sovereign OS',
    category: 'THE INTERFACE',
    desc: 'Advanced management surface for private AI orchestration, device registry, and HxTP policy enforcement.',
    specs: ['Private Model Registry', 'Policy-Based Control', 'Real-Time Telemetry', 'Zero-Cloud Drift'],
    accent: '#3b82f6',
    accentRgb: '59, 130, 246',
    icon: Layers,
  },
  {
    title: 'Developer SDK',
    category: 'ECOSYSTEM',
    desc: 'Comprehensive toolset for building hardware-aware intelligence and autonomous execution pathways.',
    specs: ['HxTP Client Libraries', 'Edge Testing CLI', 'Secure Key Management', 'Deployment Automation'],
    accent: '#ff003c',
    accentRgb: '255, 0, 60',
    icon: Code,
  },
];

function SpecModule({ spec, accent }: { spec: string; accent: string }) {
  const getIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('signed') || t.includes('lock') || t.includes('security') || t.includes('private') || t.includes('policy')) return Shield;
    if (t.includes('latency') || t.includes('real-time') || t.includes('telemetry') || t.includes('activity')) return Activity;
    if (t.includes('gpu') || t.includes('compute') || t.includes('cpu') || t.includes('execution')) return Cpu;
    if (t.includes('ledger') || t.includes('history') || t.includes('drift') || t.includes('sensor')) return Database;
    return Box;
  };

  const Icon = getIcon(spec);

  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] group/module hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="p-1.5 rounded-lg bg-white/[0.03] group-hover/module:bg-white/[0.08] transition-colors">
          <Icon className="w-3 h-3 text-zinc-500 group-hover/module:text-zinc-300 transition-colors" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[7px] font-black tracking-widest text-zinc-600 uppercase">Active</span>
          <div className="w-1 h-1 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
        </div>
      </div>
      <span className="text-[9px] font-bold tracking-[0.1em] text-zinc-400 group-hover/module:text-zinc-200 transition-colors uppercase leading-tight">
        {spec}
      </span>
    </div>
  );
}

export function PricingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const line1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const line2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section
      ref={ref}
      id="offerings"
      data-testid="offerings-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <motion.div
          style={{ y: line1Y }}
          className="absolute left-1/3 top-0 h-full w-px bg-cyan-400"
        />
        <motion.div
          style={{ y: line2Y }}
          className="absolute left-2/3 top-0 h-full w-px bg-fuchsia-400"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-red-500 mb-6 block">
            <DecryptedText text="Launch Inventory" animateOn="view" speed={60} />
          </span>
          <h2 
            data-testid="offerings-headline"
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6"
          >
            <DecryptedText text="The Hestia Stack" animateOn="view" speed={100} />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Hestia Labs provides a unified, local-first platform for AI to execute in the physical world. 
            Our launch stack delivers everything needed from protocol to hardware.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="bento-grid">
          {offerings.map((offering, i) => {
            const Icon = offering.icon;
            const isLarge = i === 0 || i === 3;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={cn(
                  "glass-card rounded-3xl p-8 spotlight-card group relative overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[480px]",
                  isLarge ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-5"
                )}
                data-testid={`offering-card-${i}`}
              >
                {/* Top section */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `rgba(${offering.accentRgb}, 0.1)`,
                        borderColor: `rgba(${offering.accentRgb}, 0.2)`,
                        color: offering.accent,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <DecryptedText text={offering.category} animateOn="inViewHover" speed={40} />
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 group-hover:scale-[1.02] transition-transform origin-left leading-tight">
                    <DecryptedText text={offering.title} animateOn="inViewHover" speed={50} />
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors max-w-sm">
                    {offering.desc}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <span className="text-[9px] font-black tracking-[0.3em] uppercase text-zinc-600">Technical Parameters</span>
                    <div className="h-px w-12 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {offering.specs.map((spec) => (
                      <SpecModule key={spec} spec={spec} accent={offering.accent} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}