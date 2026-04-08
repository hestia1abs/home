'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cpu, Layers, Code } from 'lucide-react';

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
            Launch Inventory
          </span>
          <h2 
            data-testid="offerings-headline"
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6"
          >
            The Hestia Stack
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Hestia Labs provides a unified, local-first platform for AI to execute in the physical world. 
            Our launch stack delivers everything needed from protocol to hardware.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, i) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 spotlight-card group relative overflow-hidden min-h-[480px] flex flex-col justify-between"
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
                      {offering.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4 group-hover:scale-[1.02] transition-transform origin-left">
                    {offering.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {offering.desc}
                  </p>
                </div>

                {/* Specs */}
                <div className="mt-8">
                  <div className="h-px w-full bg-white/5 group-hover:bg-white/10 transition-colors mb-6" />
                  <ul className="space-y-3">
                    {offering.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-3 text-[10px] font-bold tracking-[0.1em] uppercase text-zinc-500 group-hover:text-zinc-400 transition-colors"
                      >
                        <div
                          className="w-1 h-1 rounded-full"
                          style={{ backgroundColor: offering.accent }}
                        />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}