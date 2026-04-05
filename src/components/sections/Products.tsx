'use client'

export function ProductsSection() {
    return (
        <section id="products" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                    <div className="flex flex-col">
                        <span className="text-ui text-cyan-400 mb-4 tracking-[0.8em]">The Manifestation</span>
                        <h2 className="text-h2">Physical Core Systems</h2>
                    </div>
                    <p className="max-w-2xl text-body text-white uppercase border-l-4 border-white/20 pl-10 leading-relaxed font-bold">
                        The bridge between intelligence and reality. Custom hardware designed for absolute sovereignty and deterministic control.
                    </p>
                </div>

                <div className="bento-grid gap-10">
                    {/* HX47 Core Block */}
                    <div className="col-span-12 lg:col-span-12 h-[600px] glass-panel rounded-[60px] p-16 flex flex-col lg:flex-row items-center justify-between group relative overflow-hidden border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-0" />
                        <div className="relative z-10 lg:w-1/2 space-y-12">
                            <div className="space-y-4">
                                <span className="text-ui text-cyan-400 tracking-widest">Unit 01 // HESTIA_ENGINE</span>
                                <h3 className="text-h1 text-white select-none drop-shadow-none tracking-tighter">HX47</h3>
                                <p className="text-h3 text-white/60 font-bold">The Central Nervous System.</p>
                            </div>
                            <p className="text-body text-white/80 leading-relaxed max-w-xl font-mono uppercase">
                                A high-performance localized compute node designed to run Kara and Mark instances within your physical air-gapped network.
                            </p>
                            <div className="flex gap-8">
                               <div className="flex items-center gap-3 text-ui opacity-70">
                                   <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                                   64GB ECC CORE
                               </div>
                               <div className="flex items-center gap-3 text-ui opacity-70">
                                   <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                                   HX-OS KERNEL
                               </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 h-full flex items-center justify-center relative">
                             {/* Abstract hardware visual */}
                             <div className="w-80 h-80 border-2 border-white/10 rounded-3xl rotate-45 flex items-center justify-center bg-white/[0.03] shadow-[0_0_150px_rgba(34,211,238,0.2)] transition-all duration-1000 group-hover:rotate-90 group-hover:scale-110">
                                 <div className="w-56 h-56 border-2 border-white/20 rounded-2xl flex items-center justify-center relative">
                                     <div className="w-32 h-32 bg-cyan-500/30 blur-[50px] rounded-full absolute" />
                                     <div className="w-24 h-24 border border-[#0ff]/40 rounded-full animate-ping" />
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Sensor Array block */}
                    <div className="col-span-12 lg:col-span-6 h-[450px] glass-panel rounded-[60px] p-12 flex flex-col justify-between group overflow-hidden border-white/5">
                        <div className="space-y-6">
                             <h3 className="text-h3 text-white">Sovereign Sensors</h3>
                             <p className="text-body text-white/60 max-w-md uppercase font-mono leading-relaxed">
                                High-density sensor arrays that don't report to the cloud, only to your local HX47 unit.
                             </p>
                        </div>
                        <div className="flex gap-4">
                             {[1,2,3,4,5,6].map(i => <div key={i} className="h-2 flex-1 bg-white/5 rounded-full border border-white/10 group-hover:bg-cyan-500/20 transition-colors" />)}
                        </div>
                    </div>

                    {/* Actuator Hub block */}
                    <div className="col-span-12 lg:col-span-6 h-[450px] glass-panel rounded-[60px] p-12 flex flex-col justify-between group overflow-hidden bg-accent/5 border-white/5">
                        <div className="space-y-6">
                             <h3 className="text-h3 text-white">Unified Actuators</h3>
                             <p className="text-body text-white/60 max-w-md uppercase font-mono leading-relaxed">
                                Control any physical system via the HxTP protocol. Modular, encrypted, and instant.
                             </p>
                        </div>
                        <div className="flex justify-end pr-12">
                            <div className="w-32 h-32 rounded-full border-8 border-accent/20 border-t-accent animate-spin" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
