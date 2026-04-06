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
                    <span className="text-ui text-[#ff003c] mb-4 tracking-[0.8em]">Intelligence Layer</span>
                    <h2 className="text-h2 mb-8 text-glow text-[#0ff]"><Shuffle text="Orchestration Surfaces" /></h2>
                    <p className="max-w-3xl border-l-4 border-[#f0f] pl-6 text-body leading-relaxed text-white/70 md:pl-10">
                        Kara and Mark represent the planning and interface layers around Hestia. They translate intent into policy-aware actions that stay inside the HxTP execution contract.
                    </p>
                </div>

                <div className="bento-grid gap-6 xl:gap-8">
                    {/* Kara Module */}
                    <SpotlightCard className="col-span-12 xl:col-span-8 min-h-[760px] xl:min-h-[700px] p-8 md:p-10 xl:p-12 flex flex-col justify-between group overflow-hidden relative bg-black/60 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500" spotlightColor="rgba(34, 211, 238, 0.15)">
                        <div className="relative z-10 grid flex-1 grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:gap-10">
                            <div className="flex flex-col justify-between gap-8">
                                <div>
                                    <span className="text-ui text-[#0ff] mb-5 block">Planning Intelligence</span>
                                    <h3 className="mb-5 text-h2 text-[#0ff] drop-shadow-none"><Shuffle text="Kara" /></h3>
                                    <p className="max-w-[30rem] border-l-4 border-[#0ff] pl-4 text-body leading-relaxed text-white/75 md:pl-6">
                                        Kara is the strategic orchestration layer for sequencing automations, coordinating device intent, and keeping execution aligned with policy.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-ui transition-colors cursor-pointer group-hover:border-[#0ff]/30 group-hover:bg-[#0ff]/10 md:px-6">
                                        Policy-aware orchestration
                                    </div>
                                    <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-ui transition-colors cursor-pointer group-hover:border-[#0ff]/30 group-hover:bg-[#0ff]/10 md:px-6">
                                        Multi-device sequencing
                                    </div>
                                </div>
                            </div>

                            <div className="relative min-h-[320px] md:min-h-[420px] xl:min-h-full">
                                <div className="pointer-events-none absolute inset-0 opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100">
                                     <EntityCard
                                        name="Kara"
                                        traits=""
                                        description=""
                                        modelUrl="/assets/kara.glb"
                                        className="h-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4 md:gap-6">
                            <div className="flex items-center gap-3 xl:ml-auto">
                                 <div className="status-dot online" />
                                 <span className="text-ui opacity-50">Capability-bound execution</span>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Mark Module */}
                    <SpotlightCard className="col-span-12 xl:col-span-4 min-h-[680px] xl:min-h-[700px] p-8 md:p-10 xl:p-12 flex flex-col group overflow-hidden relative bg-black/60 border-purple-500/20 hover:border-purple-500/50 transition-all duration-500" spotlightColor="rgba(168, 85, 247, 0.15)">
                        <div className="relative z-10">
                             <span className="text-ui text-[#f0f] mb-5 block">Adaptive Interface</span>
                             <h3 className="text-h2 text-[#f0f] mb-5 drop-shadow-none"><Shuffle text="Mark" /></h3>
                             <p className="border-l-4 border-[#f0f] pl-4 text-body leading-relaxed text-white/75 md:pl-6">
                                 Mark is the exploratory interface layer for discovery, user interaction, and higher-level coordination around the local execution system.
                             </p>
                        </div>

                        <div className="relative z-0 flex-1 min-h-[260px] md:min-h-[340px] opacity-90 transition-all duration-700 pointer-events-none group-hover:scale-105 group-hover:opacity-100">
                             <EntityCard
                                name="Mark"
                                traits=""
                                description=""
                                modelUrl="/assets/mark.glb"
                                className="h-full"
                            />
                        </div>

                        <div className="relative z-10 pt-8 md:pt-10">
                            <div className="h-2 w-full bg-white/5 rounded-full mb-8 overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '92%' }}
                                    transition={{ duration: 2, ease: "circOut" }}
                                    className="h-full bg-[#f0f] shadow-[0_0_15px_rgba(240,0,240,0.5)]"
                                 />
                            </div>
                            <div className="flex justify-between items-center text-ui opacity-50 font-black">
                                <span>Focus</span>
                                <span>Adaptive discovery layer</span>
                            </div>
                        </div>
                    </SpotlightCard>

                    {/* Shared Infrastructure box */}
                    <SpotlightCard className="col-span-12 min-h-[320px] p-8 md:p-10 xl:p-12 flex flex-col gap-8 justify-between group overflow-hidden bg-black/40 border-white/5 hover:border-[#ff003c]/30 transition-all lg:flex-row lg:items-center">
                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-h2 text-[#ff003c] tracking-tight drop-shadow-none select-none">Unified Execution Fabric</h4>
                            <p className="max-w-3xl border-l-4 border-[#ff003c] pl-4 text-body font-bold leading-relaxed text-white md:pl-8">
                                Intelligence, policy, and device control stay synchronized through the same HxTP message discipline, so the system remains explainable as it scales.
                            </p>
                        </div>
                        <div className="hidden h-full w-full max-w-[420px] opacity-40 transition-opacity group-hover:opacity-80 lg:block">
                             <SovereignProtocol />
                        </div>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    )
}
