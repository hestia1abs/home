'use client'

import { motion } from 'framer-motion'
import DecryptedText from '@/components/animations/DecryptedText'
import Shuffle from '@/components/animations/Shuffle'
import ASCIIText from '@/components/animations/ASCIIText'

export function HeroSection() {
    return (
        <section id="hero" className="relative h-screen min-h-[900px] overflow-hidden flex flex-col items-center justify-center">
            {/* The beautiful background from layout.tsx is completely visible beneath this section */}
            
            <div className="relative z-10 w-full max-w-[1800px] px-6 flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="flex items-center gap-6 mb-12"
                >
                    <div className="w-12 h-px bg-[#ff003c]" />
                    <span className="text-ui text-[#ff003c] tracking-[0.8em]">
                        <DecryptedText text="> SYS.HXTP.OVERRIDE_ACTIVE" speed={50} />
                    </span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
                    className="mb-4"
                >
                    <h1 className="text-h1 mb-6 text-glow leading-tight">
                        Sovereign
                    </h1>
                </motion.div>
                
                <div className="relative h-[120px] md:h-[180px] lg:h-[220px] w-full flex justify-center items-center">
                     <ASCIIText 
                        text="Intelligence"
                        asciiFontSize={8}
                        textFontSize={200}
                        textColor="#22d3ee"
                        enableWaves={true}
                     />
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                    className="mt-12"
                >
                    <Shuffle 
                        text="SUBJUGATED BY DETERMINISTIC LOCAL EXECUTION." 
                        className="text-h3 text-white/50 mt-6 max-w-4xl text-center leading-relaxed"
                        shuffleDirection="up"
                        duration={0.8}
                        stagger={0.05}
                    />
                </motion.div>
            </div>

            {/* Tech Stack Marquee Footer */}
            <div className="absolute bottom-0 left-0 w-full z-20 py-16 bg-gradient-to-t from-background via-background/80 to-transparent backdrop-blur-[4px] border-t-2 border-white/5 pointer-events-auto">
                <div className="max-w-[1800px] mx-auto px-6 flex flex-wrap justify-between items-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-700">
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#ff003c] mb-3 group-hover:text-red-300 transition-colors tracking-[0.4em]">SYS.STAT</span>
                       <span className="text-2xl font-mono font-black tracking-tighter uppercase">INFECTED \\ OK</span>
                   </div>
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#0ff] mb-3 group-hover:text-cyan-300 transition-colors tracking-[0.4em]">CONTROL</span>
                       <span className="text-2xl font-mono font-black tracking-tighter uppercase">ABSOLUTE OVERRIDE</span>
                   </div>
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#f0f] mb-3 group-hover:text-fuchsia-300 transition-colors tracking-[0.4em]">ROOT</span>
                       <span className="text-2xl font-mono font-black tracking-tighter uppercase">KARA_M_SYNC</span>
                   </div>
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#ff003c] mb-3 group-hover:text-red-300 transition-colors tracking-[0.4em]">SECURITY</span>
                       <span className="text-2xl font-mono font-black tracking-tighter text-[#ff003c] drop-shadow-[0_0_20px_rgba(255,0,60,0.6)] uppercase">TAMPER_DETECTED</span>
                   </div>
                </div>
            </div>

            {/* Vertical coordinates overlay */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 pointer-events-none hidden xl:flex">
                <div className="h-60 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                <div className="[writing-mode:vertical-rl] text-ui text-cyan-500/30 tracking-[0.8em]">
                    Hestia Labs // Research Division
                </div>
                <div className="h-60 w-px bg-gradient-to-t from-transparent via-cyan-500/50 to-transparent" />
            </div>
            
            {/* Left side coordinates */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20 pointer-events-none hidden xl:flex text-ui text-cyan-500/30 uppercase tracking-widest text-right">
                <span>LAT 12.9716 N</span>
                <span>LON 77.5946 E</span>
                <span>ALT 920M</span>
                <span className="text-cyan-400 opacity-50 pulse-glow">SYS.STABLE //</span>
            </div>
        </section>
    )
}
