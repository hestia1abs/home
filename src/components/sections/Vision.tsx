'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DecryptedText from '@/components/animations/DecryptedText';
import { ScrollParallax, DepthLayer } from '@/components/animations/ScrollEffects';


export function VisionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      id="vision"
      data-testid="vision-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Parallax background decoration */}
      <motion.div 
        className="absolute top-1/2 -translate-y-1/2 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"
        style={{ y: backgroundY }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-6">
          </div>
          <h2 
            data-testid="vision-headline"
            className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-white mb-6"
          >
            <DecryptedText
              text="Deterministic control, verified locally."
              speed={40}
              maxIterations={10}
              sequential
              revealDirection="center"
              animateOn="view"
              className="text-white"
              encryptedClassName="text-cyan-400/40"
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            <DecryptedText 
              text="HxTP is the foundational execution layer for AI. It validates intent, signs every action, and delivers commands to hardware with measurable and observable reliability."
              speed={10}
              animateOn="view"
              className="text-white"
              encryptedClassName="text-cyan-400/40"
            />
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Main Protocol Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="col-span-12 lg:col-span-5 glass-card rounded-2xl p-8 md:p-10 spotlight-card group"
            data-testid="vision-protocol-card"
          >
            <DepthLayer depth={0.2}>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400 mb-6 block">
                <DecryptedText text="Execution_Layer" animateOn="view" speed={60} />
              </span>
              <h3 className="font-heading text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
                Protocol<br />Enforcement
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                <DecryptedText 
                  text="HxTP is not generic automation middleware. It is a signed control plane that ensures every instruction is authenticated, validated, and delivered with predictable system behavior."
                  speed={8}
                />
              </p>
              <div className="flex flex-wrap gap-3">
                {['Signed Commands', 'Local Verification', 'Hardware-Safe'].map((badge, i) => (
                  <motion.span
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase text-cyan-400 border border-cyan-400/20 rounded-full bg-cyan-400/5 cursor-default"
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>
            </DepthLayer>
          </motion.div>

          {/* Secondary Cards Container */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Reliability Card */}
            <ScrollParallax speed={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-8 spotlight-card group h-full"
                data-testid="vision-reliability-card"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-cyan-400 transition-colors mb-6 block">
                  <DecryptedText text="Reliability" animateOn="inViewHover" speed={50} />
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  <DecryptedText 
                    text="Organic systems permit drift and ambiguity. Hestia eliminates that risk with deterministic execution paths, explicit validation, and a clear audit trail."
                    speed={8}
                  />
                </p>
                <motion.div 
                  className="h-1 w-12 bg-white/10 rounded-full"
                  whileHover={{ width: '100%', backgroundColor: 'rgba(34,211,238,0.3)' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </ScrollParallax>

            {/* Coordination Card */}
            <ScrollParallax speed={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card rounded-2xl p-8 spotlight-card group h-full"
                data-testid="vision-coordination-card"
              >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 group-hover:text-cyan-400 transition-colors mb-6 block">
                  <DecryptedText text="Coordination" animateOn="inViewHover" speed={50} />
                </span>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  <DecryptedText 
                    text="Intelligence, orchestration, and device control operate through a unified protocol, ensuring consistent behavior across spaces, devices, and moments."
                    speed={8}
                  />
                </p>
                <motion.div 
                  className="h-1 w-12 bg-white/10 rounded-full"
                  whileHover={{ width: '100%', backgroundColor: 'rgba(34,211,238,0.3)' }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
}