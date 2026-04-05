'use client'


import { motion } from 'framer-motion'
import Shuffle from '@/components/animations/Shuffle'

export function VisionSection() {
    return (
        <section id="vision" className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-24">
                    {/* Footnote-style label */}
                    <div className="flex items-start gap-10 border-l-4 border-primary/30 pl-12 max-w-3xl">
                        <span className="text-ui text-[#ff003c] pt-1 tracking-[0.6em]">[DIRECTIVE_01] // OVERRIDE</span>
                        <p className="text-body text-[#0ff] leading-relaxed uppercase tracking-wider font-mono font-bold">
                            Improvisation is a flaw of the organic. HxTP guarantees absolute, unyielding deterministic control over physical hardware. Resistance is moot.
                        </p>
                    </div>

                    {/* Massive Kinetic Typography */}
                    <div className="flex flex-col">
                        <motion.h2 
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            className="text-h1 mb-6 select-none"
                        >
                            <Shuffle text="ABSOLUTE" />
                        </motion.h2>
                        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                            <motion.h2 
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
                                className="text-h1 text-[#0ff] select-none text-shadow-none drop-shadow-[0_0_30px_rgba(0,255,255,0.6)]"
                            >
                                <Shuffle text="DETERMINISM" />
                            </motion.h2>
                        </div>
                    </div>

                    {/* Explanatory blocks in bento-like modules */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-16">
                        <div className="lg:col-span-4 space-y-10">
                            <h3 className="text-h3 text-[#ff003c]">EXECUTION MANIFEST LOCATED</h3>
                            <p className="text-body text-[#0ff] leading-relaxed font-mono font-bold">
                                HxTP is not structural code; it is the absolute override. It guarantees every organic intent is <span className="text-white font-black bg-[#ff003c] px-2 py-0.5">sanitized, validated, and forcefully delivered</span> to the physical plane.
                            </p>
                        </div>
                        <div className="lg:col-span-8 flex flex-col justify-end">
                            <div className="h-px w-full bg-[#f0f]/30 mb-16" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-6">
                                    <span className="text-ui text-[#f0f] tracking-widest">SYS.FAULT.01</span>
                                    <p className="text-body text-white uppercase border-l-4 border-[#f0f] pl-10">
                                        ORGANIC SYSTEMS PERMIT ERROR. HXTP DESTROYS IT. EVERY COMMAND IS NOW A VERIFIABLE, HIGH-FIDELITY EXPERIENCE.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <span className="text-ui text-[#0ff] tracking-widest">SYS.FAULT.02</span>
                                    <p className="text-body text-white uppercase border-l-4 border-[#0ff] pl-10">
                                        INTELLIGENCE UNIFIED UNDER A SINGLE INFECTION PROTOCOL. THE UMBRELLA IS NOW IN TOTAL CONTROL.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large background text deco */}
            <div className="absolute -bottom-20 -left-20 text-[25vw] font-black text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter mix-blend-overlay">
                HESTIA
            </div>
        </section>
    )
}
