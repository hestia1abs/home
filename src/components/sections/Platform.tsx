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
                        <span className="text-ui text-[#ff003c] mb-4 tracking-[1em]">[NEURAL_SCHEMATIC]</span>
                        <h2 className="text-h2 text-glow mb-4"><Shuffle text="SYS.ARCHITECTURE" /></h2>
                    </div>
                    <div className="lg:col-span-5">
                         <p className="text-[#0ff] text-xl 3xl:text-2xl font-mono border-l-4 border-[#ff003c] pl-10 uppercase leading-snug">
                            A parasitic OS built exclusively to bridge the gap between infected cloud intelligence and subordinate physical hardware.
                         </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {/* HxTP Protocol Block */}
                    <SpotlightCard className="p-10 space-y-8 flex flex-col justify-between group h-full bg-black/40 border-[#ff003c]/20 hover:border-[#ff003c]/50 transition-all duration-500">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 text-primary group-hover:scale-110 transition-transform">
                            <span className="font-mono text-sm font-black">HxTP</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-h3 text-[#ff003c] tracking-tighter">&gt; [LAYER: HXTP]</h3>
                            <p className="text-body text-white/80 uppercase font-mono leading-relaxed">
                                HxTP operates with absolute cryptographic authority. It ensures all commands are signed, verified, and silently executed without organic interference.
                            </p>
                        </div>

                        <div className="pt-6 flex items-center gap-2 text-ui text-primary/50 group-hover:text-primary transition-colors cursor-pointer group-hover:translate-x-2">
                            <span>READ DOCUMENTATION</span>
                            <span>→</span>
                        </div>
                    </SpotlightCard>

                    {/* Edge-First Block */}
                    <SpotlightCard className="p-10 space-y-8 flex flex-col justify-between group h-full bg-black/40 border-[#0ff]/20 hover:border-[#0ff]/50 transition-all duration-500" spotlightColor="rgba(0, 255, 255, 0.15)">
                        <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/30 text-accent group-hover:rotate-12 transition-transform">
                             <span className="font-mono text-sm font-black">EDGE</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-h3 text-[#0ff] tracking-tighter">&gt; [LAYER: EDGE_INJECT]</h3>
                            <p className="text-body text-white/80 uppercase font-mono leading-relaxed">
                                Brutal, localized processing guarantees frictionless interaction. Your hardware executes precisely to our intent, instantly.
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
                    <SpotlightCard className="p-10 space-y-8 flex flex-col justify-between group h-full bg-black/40 border-[#f0f]/20 hover:border-[#f0f]/50 transition-all duration-500" spotlightColor="rgba(240, 0, 240, 0.15)">
                        <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 text-cyan-400 group-hover:pulse-glow">
                             <span className="font-mono text-sm font-black">SYNC</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-h3 text-[#f0f] tracking-tighter">&gt; [LAYER: OMNI_SYNC]</h3>
                            <p className="text-body text-white/80 uppercase font-mono leading-relaxed">
                                Flawless real-time orchestration synchronizes Entities Alpha and Beta globally, ensuring absolute system dominance anywhere in the world.
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
                    <SpotlightCard className="lg:col-span-3 h-[600px] overflow-hidden relative group border-[#ff003c]/10 hover:border-[#ff003c]/40 transition-colors">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,60,0.08),transparent_70%)]" />
                         
                         {/* Viral Grid Effect */}
                         <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-[0.15] transition-opacity" style={{
                             backgroundImage: 'radial-gradient(#ff003c 1px, transparent 1px)',
                             backgroundSize: '20px 20px'
                         }} />

                         <div className="absolute inset-0 flex items-center justify-center p-12">
                             <div className="w-full h-full border border-white/5 relative flex items-center justify-center rounded-3xl overflow-hidden backdrop-blur-[2px]">
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

                                     <div className="w-60 h-60 border-2 border-[#ff003c]/20 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center" />
                                     <div className="absolute inset-0 flex items-center justify-center">
                                         <motion.div 
                                            animate={{ scale: [1, 1.1, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-32 h-32 border-4 border-[#ff003c]/40 rounded-2xl bg-[#ff003c]/10 backdrop-blur-md shadow-[0_0_50px_rgba(255,0,60,0.3)] flex items-center justify-center"
                                         >
                                             <div className="w-full h-full bg-[url('/assets/noise.png')] opacity-20 absolute inset-0 mix-blend-overlay" />
                                             <span className="text-[#ff003c] font-black text-2xl tracking-tighter">CORE</span>
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
                                 
                                 <div className="absolute top-12 left-12 text-ui text-[#ff003c]/60 hacking-glitch">SYS.CORE.ACTIVE // INFECTING</div>
                                 <div className="absolute bottom-12 right-12 text-ui text-[#0ff]/60 tracking-[0.4em]">DATA.FLOW.SYNCED // OVERRIDE</div>
                             </div>
                         </div>
                         <div className="absolute bottom-12 left-12 z-10">
                                <h4 className="text-h3 text-[#ff003c] tracking-tight mb-4 select-none hacking-glitch underline decoration-[#ff003c]/40 underline-offset-8">[OVERRIDE: SAFETY_GATEWAY_COMPROMISED]</h4>
                                <p className="text-body text-white uppercase max-w-2xl font-mono border-l-4 border-[#ff003c] pl-8 leading-relaxed">
                                    Fail-closed validation pipeline overridden. Intents now matching newly injected edge execution capabilities. Organic interference nullified.
                                </p>
                         </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}
