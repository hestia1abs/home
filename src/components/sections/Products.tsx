'use client'

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Radio, Cpu } from 'lucide-react';

export  function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="hardware"
      data-testid="hardware-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4 block">
              Hardware Platform
            </span>
            <h2 
              data-testid="hardware-headline"
              className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-white"
            >
              Physical Core Systems
            </h2>
          </div>
          <p className="text-zinc-400 max-w-xl leading-relaxed border-l border-white/10 pl-6">
            Purpose-built hardware that runs private intelligence close to the environment it serves, 
            with predictable control, low-latency response, and local resilience.
          </p>
        </motion.div>

        {/* HX47 Main Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 mb-8 relative overflow-hidden"
          data-testid="hardware-hx47-card"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/5 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-6 block">
                Helix Hardware // Local Execution Node
              </span>
              <h3 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tighter">
                HX47
              </h3>
              <p className="font-heading text-xl md:text-2xl text-zinc-300 mb-6">
                Secure local execution for devices, spaces, and AI-driven control.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8 max-w-lg">
                A high-performance localized compute platform designed to host Hestia services inside 
                your environment, without relying on constant cloud round-trips.
              </p>
              
              {/* Specs */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-zinc-400">
                    ECC-class memory
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.1em] uppercase text-zinc-400">
                    Local runtime kernel
                  </span>
                </div>
              </div>
            </div>

            {/* Hardware Visual */}
            <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <img
                src="/assets/5d86663e7bb80e39073e14b3e0a8cff243ce91a16f465d98523764162633a6fa.png"
                alt="HX47 Hardware Node"
                className="max-w-full max-h-[350px] object-contain drop-shadow-[0_0_60px_rgba(34,211,238,0.2)]"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border border-cyan-500/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-fuchsia-500/20 rounded-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Secondary Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sovereign Sensors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 spotlight-card group"
            data-testid="hardware-sensors-card"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Radio className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4">
              Sovereign Sensors
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Environmental sensing designed to report into the local runtime, not upstream to a generic cloud service.
            </p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="flex-1 h-2 bg-white/5 rounded-full border border-white/10 group-hover:bg-cyan-500/20 transition-colors"
                />
              ))}
            </div>
          </motion.div>

          {/* Unified Actuators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 spotlight-card group"
            data-testid="hardware-actuators-card"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-fuchsia-400" />
              </div>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-white mb-4">
              Unified Actuators
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              A modular output layer for lighting, climate, access, and other physical systems that need dependable real-time control.
            </p>
            <div className="flex justify-end">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full border-4 border-fuchsia-500/20 border-t-fuchsia-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}