import { motion } from 'framer-motion'
import { EntityCard } from '@/components/home/EntityCard'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import { SovereignProtocol } from '@/components/animations/Sovereign'
import Shuffle from '@/components/animations/Shuffle'
import { ScanningOverlay } from '@/components/animations/ScanningOverlay'

export function EntitiesSection() {
    return (
        <section id="entities" className="py-16 md:py-24 relative overflow-hidden ctos-grid">
            <ScanningOverlay />
            
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16">
                    <span className="text-ui text-[#ff003c] mb-4 tracking-[0.8em]">SYS.ORCHESTRATION</span>
                    <h2 className="text-h2 mb-8 text-glow text-[#0ff]"><Shuffle text="PROTOCOL INJECTORS" /></h2>
                    <p className="max-w-3xl text-body text-white uppercase border-l-4 border-[#f0f] pl-10 leading-relaxed">
                        [ENTITIES] Alpha and Beta are cloud-based infiltration nodes. They anticipate intent and override hardware environments with absolute, untouchable precision.
                    </p>
                </div>

                <div className="bento-grid gap-8">
                    {/* Kara Module */}
                    <SpotlightCard className="col-span-12 lg:col-span-8 h-[700px] p-12 flex flex-col justify-between group overflow-hidden relative bg-black/60 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500" spotlightColor="rgba(34, 211, 238, 0.15)">
                        {/* Target Marker: Watch Dogs style */}
                        <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="w-12 h-12 border-2 border-[#0ff] rounded-full flex items-center justify-center animate-spin-slow">
                                 <div className="w-2 h-2 bg-[#0ff] rounded-full" />
                             </div>
                             <span className="absolute top-14 right-0 text-[10px] font-mono text-[#0ff] whitespace-nowrap">TARGET_ACQUIRED: ALPHA</span>
                        </div>

                        <div className="relative z-10">
                            <span className="text-ui text-[#0ff] mb-6 block animate-pulse">NODE_ACTIVE: CORE_STRATEGY</span>
                            <h3 className="text-h1 text-[#0ff] mb-6 drop-shadow-none"><Shuffle text="[ENTITY: ALPHA]" /></h3>
                            <p className="max-w-md text-body text-white uppercase font-mono border-l-4 border-[#0ff] pl-6 leading-relaxed">
                                {`> Generating HxTP payloads...`}<br/>
                                {`> Injecting intent parameters...`}<br/>
                                {`> Environment rewritten to match strategic core.`}
                            </p>
                        </div>
                        
                        <div className="absolute right-0 top-0 w-1/2 h-full z-0 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none">
                             <EntityCard
                                name="Kara"
                                traits=""
                                description=""
                                modelUrl="/assets/kara.glb"
                                className="h-full"
                            />
                        </div>

                        <div className="relative z-10 flex gap-6">
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-ui group-hover:bg-[#0ff]/10 group-hover:border-[#0ff]/30 transition-colors cursor-pointer">Strategic Core</div>
                            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-ui group-hover:bg-[#0ff]/10 group-hover:border-[#0ff]/30 transition-colors cursor-pointer">Predictive Logic</div>
                            
                            {/* Connection Status */}
                            <div className="ml-auto flex items-center gap-3">
                                 <div className="status-dot online" />
                                 <span className="text-ui opacity-50">HXTP_LINK: STABLE</span>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Mark Module */}
                    <SpotlightCard className="col-span-12 lg:col-span-4 h-[700px] p-12 flex flex-col group overflow-hidden relative bg-black/60 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500" spotlightColor="rgba(168, 85, 247, 0.15)">
                        <div className="relative z-10">
                             <span className="text-ui text-[#f0f] mb-6 block animate-pulse">NODE_ACTIVE: EXPLORATION</span>
                             <h3 className="text-h1 text-[#f0f] mb-6 drop-shadow-none"><Shuffle text="[ENTITY: BETA]" /></h3>
                             <p className="text-body text-white uppercase font-mono border-l-4 border-[#f0f] pl-6 leading-relaxed">
                                 {`> Probing unknown hardware...`}<br/>
                                 {`> Extracting schema parameters...`}<br/>
                                 {`> Uncompromising integration achieved.`}
                             </p>
                        </div>

                        <div className="flex-1 relative z-0 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none">
                             <EntityCard
                                name="Mark"
                                traits=""
                                description=""
                                modelUrl="/assets/mark.glb"
                                className="h-full"
                            />
                        </div>

                        <div className="relative z-10 pt-10">
                            <div className="h-2 w-full bg-white/5 rounded-full mb-8 overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '92%' }}
                                    transition={{ duration: 2, ease: "circOut" }}
                                    className="h-full bg-[#f0f] shadow-[0_0_15px_rgba(240,0,240,0.5)]"
                                 />
                            </div>
                            <div className="flex justify-between items-center text-ui opacity-50 font-black">
                                <span>Mode</span>
                                <span>Adaptive Explorer // R_92%</span>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Shared Infrastructure box */}
                    <SpotlightCard className="col-span-12 h-[350px] p-12 flex items-center justify-between group overflow-hidden bg-black/40 border-white/5 hover:border-[#ff003c]/30 transition-all">
                        <div className="space-y-6">
                            <h4 className="text-h2 text-[#ff003c] tracking-tight drop-shadow-none select-none hacking-glitch">SYS.LINK.ACTIVE</h4>
                            <p className="max-w-3xl text-body text-white font-mono uppercase leading-relaxed font-bold border-l-4 border-[#ff003c] pl-8">
                                Entities synchronized via the HxTP base layer. Zero-latency cryptographic entanglement achieved. Organic evasion impossible.
                            </p>
                        </div>
                        <div className="hidden lg:block h-full w-1/3 min-w-[400px] opacity-40 group-hover:opacity-80 transition-opacity">
                             <SovereignProtocol />
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}
