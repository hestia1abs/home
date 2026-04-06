import { motion } from 'framer-motion'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import Shuffle from '@/components/animations/Shuffle'
import { VeinBackground } from '@/components/animations/VeinBackground'

export function PlatformSection() {
    return (
        <section id="platform" className="py-16 md:py-24 relative overflow-hidden">
            <VeinBackground />
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
                    <div className="lg:col-span-7 flex flex-col">
                        <span className="text-ui text-[#ff003c] mb-4 tracking-[1em]">SYSTEM ARCHITECTURE</span>
                        <h2 className="text-h2 text-glow mb-4"><Shuffle text="How Hestia Executes" /></h2>
                    </div>
                    <div className="lg:col-span-5">
                         <p className="border-l-4 border-[#ff003c] pl-6 text-lg leading-8 text-[#0ff]/80 md:pl-10 md:text-xl 3xl:text-2xl">
                            A layered runtime that connects intelligence, orchestration, and device control without sacrificing latency, privacy, or observability.
                         </p>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                    {/* HxTP Protocol Block */}
                    <SpotlightCard className="flex min-h-[420px] flex-col justify-between space-y-6 bg-black/40 p-8 transition-all duration-500 group h-full border-[#ff003c]/20 hover:border-[#ff003c]/50 xl:p-10">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary group-hover:scale-110 transition-transform">
                            <span className="font-mono text-sm font-black">HxTP</span>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-h3 text-[#ff003c] tracking-tighter">Signed Control Layer</h3>
                            <p className="max-w-[28rem] text-body leading-relaxed text-white/75">
                                HxTP signs and verifies every command so execution remains traceable, predictable, and resilient across real hardware environments.
                            </p>
                        </div>

                        <button
                            type="button"
                            aria-label="HxTP documentation coming soon"
                            aria-disabled="true"
                            disabled
                            className="flex items-center gap-2 pt-4 text-ui text-primary/50 transition-colors group-hover:translate-x-2 group-hover:text-primary disabled:cursor-not-allowed"
                        >
                            <span>READ DOCUMENTATION</span>
                            <span>→</span>
                        </button>
                    </SpotlightCard>

                    {/* Edge-First Block */}
                    <SpotlightCard className="flex min-h-[420px] flex-col justify-between space-y-6 bg-black/40 p-8 transition-all duration-500 group h-full border-[#0ff]/20 hover:border-[#0ff]/50 xl:p-10" spotlightColor="rgba(0, 255, 255, 0.15)">
                        <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/30 text-accent group-hover:rotate-12 transition-transform">
                             <span className="font-mono text-sm font-black">EDGE</span>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-h3 text-[#0ff] tracking-tighter">Edge Runtime</h3>
                            <p className="max-w-[28rem] text-body leading-relaxed text-white/75">
                                Local execution keeps response times low and user experience stable, even when connectivity changes or cloud services are unavailable.
                            </p>
                        </div>

                        <div className="pt-6 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: '85%' }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                className="h-full bg-accent/60 shadow-[0_0_10px_rgba(280,100,70,0.5)]" 
                             />
                        </div>
                    </SpotlightCard>

                    {/* Multi-Agent Block */}
                    <SpotlightCard className="flex min-h-[420px] flex-col justify-between space-y-6 bg-black/40 p-8 transition-all duration-500 group h-full border-[#f0f]/20 hover:border-[#f0f]/50 xl:p-10" spotlightColor="rgba(240, 0, 240, 0.15)">
                        <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 text-cyan-400 group-hover:pulse-glow">
                             <span className="font-mono text-sm font-black">SYNC</span>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-h3 text-[#f0f] tracking-tighter">Realtime Coordination</h3>
                            <p className="max-w-[28rem] text-body leading-relaxed text-white/75">
                                Orchestration keeps services, devices, and AI agents synchronized so the system behaves as a single dependable control surface.
                            </p>
                        </div>

                        <div className="pt-6 flex gap-2">
                             {[1,2,3,4,5,6].map(i => (
                                <motion.div 
                                    key={i} 
                                    animate={{ 
                                        opacity: [0.2, 1, 0.2],
                                        height: [4, 8, 4]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                                    className="w-full bg-cyan-400/30 rounded-full" 
                                />
                             ))}
                        </div>
                    </SpotlightCard>

                    {/* Large Architecture Visualization box */}
                    <SpotlightCard className="relative overflow-hidden border-[#ff003c]/10 transition-colors group md:col-span-2 lg:col-span-3 min-h-[620px] lg:min-h-[680px] hover:border-[#ff003c]/40">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,60,0.08),transparent_70%)]" />
                         
                         {/* Viral Grid Effect */}
                         <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity" style={{
                             backgroundImage: 'radial-gradient(#ff003c 1px, transparent 1px)',
                             backgroundSize: '20px 20px'
                         }} />

                         <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10 xl:p-12">
                             <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/5 backdrop-blur-[2px]">
                                 {/* Central Core: PROTOTYPE STYLE */}
                                 <div className="relative group/core">
                                     {/* Veins emitting from core */}
                                     {[...Array(12)].map((_, i) => (
                                         <motion.div
                                            key={i}
                                            className="absolute top-1/2 left-1/2 h-px w-[300px] bg-gradient-to-r from-[#ff003c] to-transparent origin-left"
                                            style={{ rotate: i * 30 }}
                                            animate={{ 
                                                opacity: [0.1, 0.4, 0.1],
                                                scaleX: [0.8, 1.2, 0.8]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
                                         />
                                     ))}

                                     <div className="flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#ff003c]/20 animate-[spin_20s_linear_infinite] md:h-52 md:w-52 xl:h-60 xl:w-60" />
                                     <div className="absolute inset-0 flex items-center justify-center">
                                         <motion.div 
                                            animate={{ scale: [1, 1.1, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                            className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-[#ff003c]/40 bg-[#ff003c]/10 shadow-[0_0_50px_rgba(255,0,60,0.3)] backdrop-blur-md md:h-28 md:w-28 xl:h-32 xl:w-32"
                                         >
                                             <div className="w-full h-full bg-[url('/assets/noise.png')] opacity-20 absolute inset-0 mix-blend-overlay" />
                                             <span className="text-xl font-black tracking-tight text-[#ff003c] md:text-2xl">CORE</span>
                                         </motion.div>
                                     </div>
                                 </div>

                                 {/* Floating Scanlines over the core */}
                                 <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                    <motion.div 
                                        animate={{ top: ['-100%', '200%'] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        className="h-1/4 w-full bg-gradient-to-b from-transparent via-[#ff003c]/5 to-transparent skew-y-12"
                                    />
                                 </div>
                                 
                                 <div className="absolute left-6 top-6 text-ui text-[#ff003c]/60 md:left-10 md:top-10 xl:left-12 xl:top-12">CORE ORCHESTRATION LAYER</div>
                                 <div className="absolute bottom-6 right-6 max-w-[18rem] text-right text-ui tracking-[0.3em] text-[#0ff]/60 md:bottom-10 md:right-10 xl:bottom-12 xl:right-12">SIGNED FLOW // VERIFIED LOCALLY</div>
                             </div>
                         </div>
                         <div className="absolute bottom-6 left-6 right-6 z-10 md:bottom-10 md:left-10 md:right-10 xl:bottom-12 xl:left-12 xl:right-12">
                                <h4 className="mb-4 max-w-[20ch] text-h3 select-none tracking-tight text-[#ff003c] underline decoration-[#ff003c]/40 underline-offset-8">Resilient Control Core</h4>
                                <p className="max-w-3xl border-l-4 border-[#ff003c] pl-4 text-body leading-relaxed text-white md:pl-6 xl:pl-8">
                                    Core routing, validation, and device coordination are isolated within a single execution fabric designed for hardware-aware reliability.
                                </p>
                         </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}
