'use client'


import { motion } from 'framer-motion'
import Shuffle from '@/components/animations/Shuffle'

export function VisionSection() {
    return (
        <section id="vision" className="py-20 md:py-32 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-16 md:gap-20">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-ui text-[#ff003c] tracking-[0.6em]">SYSTEM PRINCIPLES</span>
                        <motion.h2
                            initial={{ y: 24, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="mt-6 text-h2 text-white"
                        >
                            <Shuffle text="Deterministic control, verified locally." />
                        </motion.h2>
                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                            HxTP is the execution layer behind Hestia. It validates intent, signs every action, and delivers commands to hardware with a level of reliability that is measurable, observable, and built for the physical world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        <div className="glass-panel rounded-[36px] border-[#ff003c]/10 bg-black/40 p-8 md:p-10 lg:col-span-5">
                            <span className="text-ui text-[#ff003c]">Execution Layer</span>
                            <h3 className="mt-5 max-w-[10ch] text-[clamp(2.6rem,5vw,5rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#ff003c]">
                                Execution Manifest Located
                            </h3>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                                HxTP is not generic automation glue. It is a signed control plane that ensures every instruction is authenticated, validated, and delivered with predictable system behavior.
                            </p>
                            <div className="mt-8 inline-flex rounded-full border border-[#ff003c]/20 bg-[#ff003c]/8 px-4 py-2 text-ui text-white/70">
                                Signed commands. Local verification. Hardware-safe execution.
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="glass-panel rounded-[32px] border-[#f0f]/10 bg-black/35 p-8">
                                <span className="text-ui text-[#f0f]">Reliability</span>
                                <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                                    Organic systems permit drift and ambiguity. Hestia reduces that risk with deterministic execution paths, explicit validation, and a clear audit trail.
                                </p>
                            </div>
                            <div className="glass-panel rounded-[32px] border-[#0ff]/10 bg-black/35 p-8">
                                <span className="text-ui text-[#0ff]">Coordination</span>
                                <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                                    Intelligence, orchestration, and device control operate through a unified protocol, so the system behaves consistently across spaces, devices, and moments.
                                </p>
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
