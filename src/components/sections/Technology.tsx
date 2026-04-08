'use client'

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ShieldCheck, Lock, Hash } from 'lucide-react';
import DecryptedText from '@/components/animations/DecryptedText';
import ASCIIText from '@/components/animations/ASCIIText';
import TrueTypewriter from '@/components/animations/TrueTypewriter';

function AmbientLedger() {
  const [hashes, setHashes] = useState<{id: number, hash: string}[]>([]);

  useEffect(() => {
    const generatedHashes = Array.from({ length: 24 }, (_, i) => ({
      id: 1047238 - i,
      hash: Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join(''),
    }));
    setHashes(generatedHashes);
  }, []);

  return (
    <div className="absolute inset-0 opacity-[0.04] font-mono pointer-events-none overflow-hidden">
      <div className="flex flex-wrap gap-4 p-8 justify-center items-center">
        {hashes.map((h) => (
          <div key={h.id} className="text-[10px] whitespace-nowrap text-cyan-400 uppercase tracking-widest">
            0X{h.hash}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
    </div>
  );
}

export function TechnologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="security"
      data-testid="security-section"
      className="relative py-24 md:py-32 overflow-hidden bg-[#030303]"
    >
      {/* Scanning laser effect */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-cyan-500/40" />
            <div className="relative h-6 w-32 opacity-70">
              <ASCIIText 
                text="VALIDATION" 
                asciiFontSize={4} 
                textFontSize={40} 
                planeBaseHeight={2} 
                enableWaves={false} 
                textColor="#22d3ee"
              />
            </div>
          </div>
          <h2 
            data-testid="security-headline"
            className="font-heading text-3xl md:text-5xl font-medium tracking-tight text-white mb-6"
          >
            <DecryptedText text="Trust Built Into Execution" animateOn="view" speed={100} />
          </h2>
          <p className="text-zinc-400 max-w-2xl border-l border-cyan-500/30 pl-6 italic">
            <TrueTypewriter 
              text="Hestia is designed for environments where intent, control, and device actions must remain verifiable. Security is part of the execution path, not an add-on."
              speed={10}
            />
          </p>
        </motion.div>

        {/* Security Cards Grid */}
        <div className="bento-grid">
          {/* Fail-Closed Validation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="col-span-12 md:col-span-4 glass-card rounded-2xl p-8 border-cyan-500/10 hover:border-cyan-500/30 transition-colors relative group"
            data-testid="security-validation-card"
          >
            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-cyan-500/40" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-cyan-500/40" />

            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              System_Core
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-white group-hover:text-cyan-400 transition-colors mb-4">
              <DecryptedText text="Fail-Closed Validation" animateOn="inViewHover" speed={50} />
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              <TrueTypewriter 
                text="Commands that fail verification do not execute. Device behavior stays bounded by an explicit trust model, ensuring zero unauthorized state changes."
                speed={8}
              />
            </p>
          </motion.div>

          {/* Policy & Allowlist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="col-span-12 md:col-span-8 glass-card rounded-2xl p-8 border-fuchsia-500/10 hover:border-fuchsia-500/30 transition-colors relative group"
            data-testid="security-policy-card"
          >
            {/* Corner decorations */}
            <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-fuchsia-500/40" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-fuchsia-500/40" />

            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-fuchsia-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Pathway_Enforcement
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-medium text-white group-hover:text-fuchsia-400 transition-colors mb-4">
              <DecryptedText text="Policy & Allowlist Enforcement" animateOn="inViewHover" speed={50} />
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-2xl">
              <TrueTypewriter 
                text="Devices, actions, and automation pathways are constrained by cryptographic policy before they reach the execution layer. No 'default allow' — only explicit authorization."
                speed={8}
              />
            </p>

            {/* Frequency visualizer */}
            <div className="flex items-end gap-1 h-12 opacity-30 group-hover:opacity-70 transition-opacity">
              {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [10, Math.random() * 40 + 10, 10] }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.4,
                    repeat: Infinity,
                    delay: i * 0.02,
                  }}
                  className="flex-1 bg-fuchsia-400 rounded-t-sm"
                />
              ))}
            </div>
          </motion.div>

          {/* Tamper-Proof Execution Log */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden min-h-[450px] flex items-center justify-center"
            data-testid="security-hashchain-card"
          >
            {/* Corner brackets */}
            <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-cyan-500/30 pointer-events-none" />
            <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-cyan-500/30 pointer-events-none" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-cyan-500/30 pointer-events-none" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-cyan-500/30 pointer-events-none" />

            <AmbientLedger />

            <div className="relative z-10 text-center max-w-3xl">
              <h3 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-4 leading-tight">
                <DecryptedText text="Tamper-Proof Execution Log" animateOn="view" speed={120} />
              </h3>
               <p className="text-zinc-400 leading-relaxed text-lg mb-10">
                <TrueTypewriter 
                  text="Every command transmitted via HxTP is part of a cryptographic hashchain. This ensures that the history of your environment is immutable, observable, and impossible to spoof."
                  speed={12}
                />
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: ShieldCheck, text: 'SHA-256 Integrity' },
                  { icon: Lock, text: 'Entropy Injection' },
                  { icon: Hash, text: 'Offline Verification' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold tracking-[0.1em] uppercase text-zinc-400"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}