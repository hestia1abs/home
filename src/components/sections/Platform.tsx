'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Cpu, Layers, ArrowRight } from 'lucide-react';

export function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="platform"
      data-testid="platform-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6 block">
            System Architecture
          </span>
          <h2 
            data-testid="platform-headline"
            className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-white mb-6"
          >
            Deterministic execution for the physical world.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            HxTP is a layered runtime that connects intelligence, orchestration, and device control 
            without sacrificing latency, privacy, or observability.
          </p>
        </motion.div>

        {/* Bento Grid - Control Room Style */}
        <div className="bento-grid">
          {/* Signed Control Layer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 spotlight-card group min-h-[360px] flex flex-col justify-between"
            data-testid="platform-control-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4">
                Signed Control Layer
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                HxTP signs and verifies every command so execution remains traceable, predictable, 
                and resilient across real hardware environments.
              </p>
            </div>
            <button className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-zinc-500 group-hover:text-cyan-400 transition-colors mt-6">
              Read Documentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Local Runtime */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 spotlight-card group min-h-[360px] flex flex-col justify-between"
            data-testid="platform-runtime-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4">
                Local Runtime
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Local execution keeps response times low and user experience stable, even when 
                connectivity changes or cloud services are unavailable.
              </p>
            </div>
            <div className="mt-6">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '85%' } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-fuchsia-500/60 to-cyan-500/60"
                />
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-zinc-500 uppercase tracking-wider">
                <span>Edge</span>
                <span>85% Local</span>
              </div>
            </div>
          </motion.div>

          {/* Real-time Coordination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 spotlight-card group min-h-[360px] flex flex-col justify-between"
            data-testid="platform-coordination-card"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4">
                Real-time Coordination
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Orchestration keeps services, devices, and AI agents synchronized so the system 
                behaves as a single dependable control surface.
              </p>
            </div>
            <div className="flex gap-1 items-end h-8 mt-6 opacity-30 group-hover:opacity-70 transition-opacity">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [4, 20 + Math.random() * 12, 4] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  className="flex-1 bg-cyan-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Resilient Fabric - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 glass-card rounded-2xl p-10 md:p-16 spotlight-card relative overflow-hidden min-h-[500px] flex items-center justify-center"
            data-testid="platform-fabric-card"
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: 'url(https://static.prod-images.emergentagent.com/jobs/ab3bc862-19cc-4662-9f8a-c80ad0e4a351/images/ea8d5123bb2b1a5151da0feb411efdabf7400b37750b7a345fc89230dd7006ba.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%)'
              }}
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80" />

            <div className="relative z-10 text-center max-w-3xl">
              <h3 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight">
                Resilient<br />
                <span className="text-gradient-cyan">Fabric</span>
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Core routing, validation, and device coordination are isolated within a single execution fabric. 
                This architectural choice provides hardware-aware reliability that scales across environments.
              </p>

              {/* Abstract connection visualization */}
              <div className="relative mt-12 h-24 flex items-center justify-center">
                <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
                
                <motion.div
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative w-20 h-20 rounded-xl border border-cyan-500/40 bg-cyan-500/5 flex items-center justify-center"
                >
                  <Layers className="w-8 h-8 text-cyan-400/60" />
                </motion.div>

                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-cyan-400/40"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: i % 2 === 0 ? '20%' : '80%'
                    }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}