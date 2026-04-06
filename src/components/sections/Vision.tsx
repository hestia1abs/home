'use client'


import { motion } from 'framer-motion'
import Shuffle from '@/components/animations/Shuffle'

export function VisionSection() {
    return (
        <section id="vision" className="py-24 md:py-48 relative overflow-hidden bg-background">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-20 md:gap-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <span className="text-ui text-primary tracking-[0.4em] font-bold">SYSTEM PRINCIPLES</span>
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            viewport={{ once: true }}
                            className="mt-8 text-h2 text-white"
                        >
                            <Shuffle text="Deterministic control, verified locally." />
                        </motion.h2>
                        <p className="mx-auto mt-10 text-body max-w-3xl text-white/50 leading-relaxed md:text-xl">
                            HxTP is the foundational execution layer for AI. It validates intent, signs every action, and delivers commands to hardware with measurable and observable reliability.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        {/* HxTP Core Block */}
                        <div className="glass-panel rounded-[2.5rem] border-primary/10 bg-black/40 p-10 md:p-14 lg:col-span-12 xl:col-span-5 flex flex-col justify-center space-y-10 group">
                            <div className="space-y-6">
                                <span className="text-ui text-primary tracking-widest font-black uppercase">Execution_Layer</span>
                                <h3 className="text-h2 md:text-6xl text-white">
                                    Protocol <br/>
                                    Enforcement
                                </h3>
                                <p className="text-body max-w-xl text-white/60">
                                    HxTP is not generic automation middleware. It is a signed control plane that ensures every instruction is authenticated, validated, and delivered with predictable system behavior.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Signed Commands',
                                    'Local Verification',
                                    'Hardware-Safe'
                                ].map((badge) => (
                                    <span key={badge} className="px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-mono text-primary uppercase tracking-widest">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Secondary Principles Container */}
                        <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="glass-panel rounded-[2.5rem] border-white/5 bg-black/35 p-10 flex flex-col justify-between group h-full">
                                <div className="space-y-8">
                                    <span className="text-ui text-white/30 group-hover:text-primary transition-colors uppercase font-black tracking-widest">Reliability</span>
                                    <p className="text-body text-sm leading-relaxed text-white/50">
                                        Organic systems permit drift and ambiguity. Hestia eliminates that risk with deterministic execution paths, explicit validation, and a clear audit trail.
                                    </p>
                                </div>
                                <div className="h-1 w-12 bg-white/10 rounded-full mt-12 group-hover:w-full group-hover:bg-primary/20 transition-all duration-700" />
                            </div>
                            
                            <div className="glass-panel rounded-[2.5rem] border-white/5 bg-black/35 p-10 flex flex-col justify-between group h-full">
                                <div className="space-y-8">
                                    <span className="text-ui text-white/30 group-hover:text-primary transition-colors uppercase font-black tracking-widest">Coordination</span>
                                    <p className="text-body text-sm leading-relaxed text-white/50">
                                        Intelligence, orchestration, and device control operate through a unified protocol, ensuring consistent behavior across spaces, devices, and moments.
                                    </p>
                                </div>
                                <div className="h-1 w-12 bg-white/10 rounded-full mt-12 group-hover:w-full group-hover:bg-primary/20 transition-all duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subdued large background text deco */}
            <div className="absolute -bottom-24 -left-20 text-[20vw] font-black text-white/[0.01] select-none pointer-events-none uppercase tracking-tighter mix-blend-overlay">
                HESTIA
            </div>
        </section>
    )
}
