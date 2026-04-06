'use client'

import { motion } from 'framer-motion'
import DecryptedText from '@/components/animations/DecryptedText'
import Shuffle from '@/components/animations/Shuffle'
import ASCIIText from '@/components/animations/ASCIIText'

export function HeroSection() {
    return (
        <section id="hero" className="relative flex min-h-[780px] md:min-h-[900px] overflow-hidden flex-col items-center justify-center pt-28 md:pt-24">
            {/* The beautiful background from layout.tsx is completely visible beneath this section */}
            
            <div className="relative z-10 w-full max-w-[1800px] px-6 flex flex-col items-center text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-12 md:gap-6"
                >
                    <div className="w-12 h-px bg-[#ff003c]" />
                    <span className="text-ui text-[#ff003c] tracking-[0.8em]">
                        <DecryptedText text="> HXTP.LOCAL_EXECUTION_LAYER" speed={50} />
                    </span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
                    className="mb-3 md:mb-4"
                >
                    <h1 className="text-h1 mb-4 text-glow leading-none md:mb-6">
                        Sovereign
                    </h1>
                </motion.div>
                
                <div className="relative flex h-[88px] w-full items-center justify-center sm:h-[110px] md:h-[150px] lg:h-[190px] xl:h-[220px]">
                     <ASCIIText 
                        text="Intelligence"
                        asciiFontSize={6}
                        textFontSize={130}
                        textColor="#22d3ee"
                        enableWaves={true}
                     />
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                    className="mt-8 md:mt-12"
                >
                    <Shuffle 
                        text="Deterministic local execution for the physical world." 
                        className="text-h3 mt-4 max-w-5xl text-center leading-relaxed text-white/70 md:mt-6"
                        shuffleDirection="up"
                        duration={0.8}
                        stagger={0.05}
                    />
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
                        Hestia combines private infrastructure, dependable orchestration, and edge-native intelligence into a system designed to act with precision across homes, devices, and spaces.
                    </p>
                </motion.div>
            </div>

            {/* Tech Stack Marquee Footer */}
            <div className="absolute bottom-0 left-0 z-20 w-full border-t-2 border-white/5 bg-gradient-to-t from-background via-background/80 to-transparent py-10 backdrop-blur-[4px] pointer-events-auto md:py-16">
                <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-8 px-6 opacity-60 transition-opacity duration-700 hover:opacity-100 md:gap-12">
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#ff003c] mb-3 group-hover:text-red-300 transition-colors tracking-[0.4em]">Deployment</span>
                       <span className="text-lg font-mono font-black tracking-tight uppercase md:text-2xl">LOCAL-FIRST RUNTIME</span>
                   </div>
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#0ff] mb-3 group-hover:text-cyan-300 transition-colors tracking-[0.4em]">Latency</span>
                       <span className="text-lg font-mono font-black tracking-tight uppercase md:text-2xl">EDGE RESPONSE</span>
                   </div>
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#f0f] mb-3 group-hover:text-fuchsia-300 transition-colors tracking-[0.4em]">Coordination</span>
                       <span className="text-lg font-mono font-black tracking-tight uppercase md:text-2xl">REAL-TIME SYNC</span>
                   </div>
                   <div className="flex flex-col items-start group cursor-pointer">
                       <span className="text-ui text-[#ff003c] mb-3 group-hover:text-red-300 transition-colors tracking-[0.4em]">Security</span>
                       <span className="text-lg font-mono font-black tracking-tight uppercase text-[#ff003c] drop-shadow-[0_0_20px_rgba(255,0,60,0.35)] md:text-2xl">SIGNED COMMAND PATH</span>
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
