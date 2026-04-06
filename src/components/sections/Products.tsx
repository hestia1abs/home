'use client'

import { PhysicalControlPlane } from '@/components/animations/PhysicalControlPlane'

export function ProductsSection() {
    return (
        <section id="products" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
                    <div className="flex flex-col">
                        <span className="text-ui text-cyan-400 mb-4 tracking-[0.8em]">Hardware Platform</span>
                        <h2 className="text-h2">Physical Core Systems</h2>
                    </div>
                    <p className="max-w-2xl border-l-4 border-white/20 pl-6 text-body leading-relaxed text-white/70 md:pl-10">
                        Purpose-built hardware that runs private intelligence close to the environment it serves, with predictable control, low-latency response, and local resilience.
                    </p>
                </div>

                <div className="bento-grid gap-6 xl:gap-10">
                    {/* HX47 Core Block */}
                    <div className="col-span-12 glass-panel relative flex min-h-[560px] flex-col justify-between overflow-hidden rounded-[40px] border-white/5 p-8 md:p-12 lg:flex-row lg:items-center lg:p-16">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent z-0" />
                        <div className="relative z-10 lg:w-1/2 space-y-8 md:space-y-10">
                            <div className="space-y-4">
                                <span className="text-ui text-cyan-400 tracking-widest">Helix hardware // local execution node</span>
                                <h3 className="text-h1 text-white select-none drop-shadow-none tracking-tighter">HX47</h3>
                                <p className="text-h3 text-white/60 font-bold">Secure local execution for devices, spaces, and AI-driven control.</p>
                            </div>
                            <p className="max-w-xl text-body leading-relaxed text-white/75">
                                A high-performance localized compute platform designed to host Hestia services inside your environment, without relying on constant cloud round-trips.
                            </p>
                            <div className="flex flex-wrap gap-6 md:gap-8">
                               <div className="flex items-center gap-3 text-ui opacity-70">
                                   <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                                   ECC-class memory
                               </div>
                               <div className="flex items-center gap-3 text-ui opacity-70">
                                   <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                                   Local runtime kernel
                               </div>
                            </div>
                        </div>

                        <div className="relative flex min-h-[320px] items-center justify-center lg:h-full lg:w-1/2">
                             <div className="h-[360px] w-full max-w-[560px]">
                                 <PhysicalControlPlane />
                             </div>
                        </div>
                    </div>

                    {/* Sensor Array block */}
                    <div className="col-span-12 lg:col-span-6 glass-panel flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] border-white/5 p-8 md:p-12">
                        <div className="space-y-6">
                             <h3 className="text-h3 text-white">Sovereign Sensors</h3>
                             <p className="max-w-md text-body leading-relaxed text-white/65">
                                Environmental sensing designed to report into the local runtime, not upstream to a generic cloud service.
                             </p>
                        </div>
                        <div className="flex gap-4">
                             {[1,2,3,4,5,6].map(i => <div key={i} className="h-2 flex-1 bg-white/5 rounded-full border border-white/10 group-hover:bg-cyan-500/20 transition-colors" />)}
                        </div>
                    </div>

                    {/* Actuator Hub block */}
                    <div className="col-span-12 lg:col-span-6 glass-panel flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] border-white/5 bg-accent/5 p-8 md:p-12">
                        <div className="space-y-6">
                             <h3 className="text-h3 text-white">Unified Actuators</h3>
                             <p className="max-w-md text-body leading-relaxed text-white/65">
                                A modular output layer for lighting, climate, access, and other physical systems that need dependable real-time control.
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
