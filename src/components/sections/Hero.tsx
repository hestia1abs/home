'use client'

import { motion } from 'framer-motion'
import DecryptedText from '@/components/animations/DecryptedText'
import Shuffle from '@/components/animations/Shuffle'
import ASCIIText from '@/components/animations/ASCIIText'


export function HeroSection() {
    return (
        <section id="hero" className="relative overflow-hidden pt-28 md:pt-24">
            <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1800px] flex-col items-center justify-center px-6 pb-16 text-center pointer-events-none md:min-h-[760px] md:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="mb-8 flex flex-wrap items-center justify-center gap-4 md:mb-12 md:gap-6"
                >
                    <div className="w-12 h-px bg-[#ff003c]" />
                    <span className="text-ui text-[#ff003c] tracking-[0.8em]">
                        <DecryptedText text="> HXTP - The New Internet <" speed={50} />
                    </span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
                    className="mb-3 md:mb-4"
                >
                    <h1 className="text-h1 mb-4 text-glow leading-none md:mb-6">
                        <DecryptedText text="Sovereign" animateOn="view" speed={100} />
                    </h1>
                </motion.div>
                
                <div className="relative flex h-[140px] w-full items-center justify-center sm:h-[160px] md:h-[180px] lg:h-[190px] xl:h-[220px]">
                     <ASCIIText 
                        text="Intelligence"
                        asciiFontSize={8}
                        textFontSize={100}
                        textColor="#22d3ee"
                        enableWaves={true}
                     />
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                    className="mt-8 max-w-5xl md:mt-12"
                >
                    <Shuffle 
                        text="Deterministic local execution for the physical world." 
                        className="text-h3 mt-4 max-w-5xl text-center leading-[1.15] text-white/78 md:mt-6"
                        shuffleDirection="up"
                        duration={0.8}
                        stagger={0.05}
                    />
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 md:text-lg">
                        <DecryptedText text="Hestia combines private infrastructure, dependable orchestration, and edge-native intelligence into a system designed to act with precision across homes, devices, and spaces." animateOn="view" speed={100} />
                    </p>
                </motion.div>
            </div>

            <div className="relative z-20 w-full border-y-2 border-white/5 bg-gradient-to-t from-background/95 via-background/75 to-background/55 py-8 backdrop-blur-[8px] pointer-events-auto md:py-10">
                <div className="mx-auto grid max-w-[1800px] grid-cols-1 gap-8 px-6 opacity-75 transition-opacity duration-700 hover:opacity-100 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-ui tracking-[0.4em] text-[#ff003c]">
                            <DecryptedText text="Deployment" animateOn="view" speed={60} />
                        </span>
                        <span className="text-lg font-mono font-black uppercase tracking-tight md:text-2xl">Local-first runtime</span>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-ui tracking-[0.4em] text-[#0ff]">
                            <DecryptedText text="Latency" animateOn="view" speed={60} />
                        </span>
                        <span className="text-lg font-mono font-black uppercase tracking-tight md:text-2xl">Edge response</span>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-ui tracking-[0.4em] text-[#f0f]">
                            <DecryptedText text="Coordination" animateOn="view" speed={60} />
                        </span>
                        <span className="text-lg font-mono font-black uppercase tracking-tight md:text-2xl">Real-time sync</span>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-ui tracking-[0.4em] text-[#ff003c]">
                            <DecryptedText text="Security" animateOn="view" speed={60} />
                        </span>
                        <span className="text-lg font-mono font-black uppercase tracking-tight text-[#ff003c] drop-shadow-[0_0_20px_rgba(255,0,60,0.35)] md:text-2xl">Signed command path</span>
                    </div>
                </div>
            </div>

            {/* Vertical coordinates overlay */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 pointer-events-none hidden 2xl:flex">
                <div className="h-60 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
                <div className="[writing-mode:vertical-rl] text-ui text-cyan-500/30 tracking-[0.8em]">
                    Hestia Labs // Research Division
                </div>
                <div className="h-60 w-px bg-gradient-to-t from-transparent via-cyan-500/50 to-transparent" />
            </div>
            
            {/* Left side coordinates */}
            <div className="absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 pointer-events-none hidden 2xl:flex text-ui text-cyan-500/30 uppercase tracking-widest text-right">
                <span>LAT 12.9716 N</span>
                <span>LON 77.5946 E</span>
                <span>ALT 920M</span>
                <span className="text-cyan-400 opacity-50 pulse-glow">SYS.STABLE //</span>
            </div>
        </section>
    )
}
