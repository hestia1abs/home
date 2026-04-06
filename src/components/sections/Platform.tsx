'use client'

import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import Shuffle from '@/components/animations/Shuffle'

export function PlatformSection() {
    return (
        <section id="platform" className="py-24 md:py-48 relative overflow-hidden bg-background">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-24">
                    <div className="lg:col-span-12 flex flex-col items-center text-center">
                        <span className="text-ui text-primary mb-6 tracking-[0.8em] font-black">SYSTEM ARCHITECTURE</span>
                        <h2 className="text-h2 text-white mb-8 max-w-4xl"><Shuffle text="Deterministic execution for the physical world." /></h2>
                        <p className="text-body max-w-3xl leading-relaxed text-white/50 md:text-xl">
                            HxTP is a layered runtime that connects intelligence, orchestration, and device control without sacrificing latency, privacy, or observability.
                        </p>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    {/* HxTP Protocol Block */}
                    <SpotlightCard className="flex min-h-[460px] flex-col justify-between space-y-6 bg-black/40 p-10 transition-all duration-500 group h-full border-white/5 hover:border-primary/30 xl:p-12 overflow-hidden rounded-[2.5rem]">
                        <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/20 text-primary group-hover:scale-105 transition-transform">
                            <span className="font-mono text-sm font-black tracking-widest uppercase">HxTP</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-h3 text-white tracking-tighter">Signed Control Layer</h3>
                            <p className="max-w-[28rem] text-body text-sm leading-relaxed text-white/60">
                                HxTP signs and verifies every command so execution remains traceable, predictable, and resilient across real hardware environments.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex items-center gap-3 pt-6 text-ui text-primary/40 transition-colors group-hover:text-primary"
                        >
                            <span className="font-black">READ DOCUMENTATION</span>
                            {/* Raw SVG Arrow Right */}
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </SpotlightCard>

                    {/* Edge-First Block */}
                    <SpotlightCard className="flex min-h-[460px] flex-col justify-between space-y-6 bg-black/40 p-10 transition-all duration-500 group h-full border-white/5 hover:border-primary/30 xl:p-12 overflow-hidden rounded-[2.5rem]" spotlightColor="rgba(34, 211, 238, 0.05)">
                        <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/20 text-primary group-hover:rotate-6 transition-transform">
                             <span className="font-mono text-sm font-black tracking-widest uppercase">EDGE</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-h3 text-white tracking-tighter">Local Runtime</h3>
                            <p className="max-w-[28rem] text-body text-sm leading-relaxed text-white/60">
                                Local execution keeps response times low and user experience stable, even when connectivity changes or cloud services are unavailable.
                            </p>
                        </div>

                        <div className="pt-8 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '85%' }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                className="h-full bg-primary/40 shadow-[0_0_10px_rgba(34,211,238,0.4)]" 
                             />
                        </div>
                    </SpotlightCard>

                    {/* Coordination Block */}
                    <SpotlightCard className="flex min-h-[460px] flex-col justify-between space-y-6 bg-black/40 p-10 transition-all duration-500 group h-full border-white/5 hover:border-primary/30 xl:p-12 overflow-hidden rounded-[2.5rem]" spotlightColor="rgba(34, 211, 238, 0.05)">
                        <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                             <span className="font-mono text-sm font-black tracking-widest uppercase">SYNC</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-h3 text-white tracking-tighter">Real-time Coordination</h3>
                            <p className="max-w-[28rem] text-body text-sm leading-relaxed text-white/60">
                                Orchestration keeps services, devices, and AI agents synchronized so the system behaves as a single dependable control surface.
                            </p>
                        </div>

                        <div className="pt-8 flex gap-3 h-8 items-end opacity-20">
                             {[1,2,3,4,5,6].map(i => (
                                <motion.div 
                                    key={i} 
                                    animate={{ height: [4, 16, 4] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1 bg-primary rounded-full" 
                                />
                             ))}
                        </div>
                    </SpotlightCard>

                    {/* Unified Architecture Block */}
                    <SpotlightCard className="relative overflow-hidden border-white/5 transition-colors group md:col-span-2 lg:col-span-3 min-h-[600px] lg:min-h-[700px] hover:border-primary/20 rounded-[3rem] p-12 md:p-20 xl:p-24 flex items-center justify-center">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.03),transparent_70%)]" />
                         
                         <div className="relative z-10 w-full flex flex-col items-center text-center space-y-16">
                            <div className="space-y-4">
                                <h3 className="text-h2 md:text-8xl text-white">
                                    Resilient <br/>
                                    Fabric
                                </h3>
                            </div>
                            
                            <p className="text-body max-w-3xl text-white/60 leading-relaxed">
                                Core routing, validation, and device coordination are isolated within a single execution fabric. This architectural choice provides hardware-aware reliability that scales across environments.
                            </p>
                             
                            {/* Abstract Diagram Visual (Replaces spinning CORE) */}
                            <div className="relative flex h-48 w-full items-center justify-center">
                                <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                                
                                <motion.div 
                                    animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.2, 0.5, 0.2] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="relative flex h-32 w-32 items-center justify-center rounded-2xl border border-primary/40 bg-primary/5 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                                >
                                    {/* Raw SVG Box Icon */}
                                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                                </motion.div>
                                
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full bg-primary/40"
                                        style={{ 
                                            left: `${15 + i * 10}%`,
                                            top: `${50 + (i % 2 === 0 ? 15 : -15)}%`
                                        }}
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    />
                                ))}
                            </div>
                         </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}
