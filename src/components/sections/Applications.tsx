'use client'


import { motion } from 'framer-motion'

const applications = [
    { title: 'Autonomous Spaces', desc: 'Buildings that breathe, react, and protect. Kara manages life support and security systems with zero-latency precision.', tag: 'Infrastructure' },
    { title: 'Precision Ag Tech', desc: 'Automated farming platforms that use localized edge AI to monitor crop health and execute nutrient delivery.', tag: 'Agriculture' },
    { title: 'Industrial Mesh', desc: 'Coordinating thousands of actuators across a factory floor via the HxTP protocol. No more lag in synchronous motions.', tag: 'Manufacturing' },
    { title: 'Sovereign Living', desc: 'Your home is yours. No cloud. No eavesdropping. Just local intelligence that truly understands your lifestyle.', tag: 'Residential' },
]

export function ApplicationsSection() {
    return (
        <section id="applications" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-12 mb-24">
                   <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-16">
                       <div className="flex flex-col gap-6">
                           <span className="text-ui text-accent tracking-[0.6em]">The Deployment</span>
                           <h2 className="text-h2">The Real World</h2>
                       </div>
                       <p className="max-w-2xl text-body text-white uppercase border-l-4 border-accent/30 pl-10 h-24 flex items-center font-bold">
                           Where theory meets physical execution. Intelligence deployed across critical infrastructure and high-stakes environments.
                       </p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {applications.map((app, i) => (
                        <motion.div 
                            key={app.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                            className="glass-panel rounded-[60px] p-16 flex flex-col justify-between group h-[400px] border-white/5 hover:border-accent/40 transition-all duration-700 bg-black/40 hover:bg-black/60"
                        >
                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                     <div className="w-16 h-px bg-accent/30 group-hover:w-32 transition-all duration-700" />
                                     <span className="text-ui text-accent/50 group-hover:text-accent font-black tracking-[0.4em]">{app.tag}</span>
                                </div>
                                <h3 className="text-h3 text-white group-hover:text-accent transition-colors">
                                    {app.title}
                                </h3>
                                <p className="text-body text-white/60 uppercase font-mono leading-relaxed max-w-xl">
                                    {app.desc}
                                </p>
                            </div>
                            <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-ui text-accent font-black">CASE STUDY AVAILABLE</span>
                                <span className="text-accent text-2xl">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
        </section>
    )
}
