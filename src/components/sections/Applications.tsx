'use client'


import { motion } from 'framer-motion'
import DecryptedText from '@/components/animations/DecryptedText'
import TrueTypewriter from '@/components/animations/TrueTypewriter'

const applications = [
    { title: 'Residential Automation', desc: 'Local-first control for lighting, climate, access, and routines without giving up responsiveness or privacy.', tag: 'Residential' },
    { title: 'Smart Apartments', desc: 'Builder-ready orchestration for common infrastructure, apartment-level control, and ongoing maintenance contracts.', tag: 'Real Estate' },
    { title: 'Industrial Control Surfaces', desc: 'Reliable coordination for multi-device environments where actions must remain policy-checked and observable.', tag: 'Manufacturing' },
    { title: 'Enterprise Environments', desc: 'A controlled execution layer for facilities that need auditability, remote visibility, and local resilience.', tag: 'Enterprise' },
]

export function ApplicationsSection() {
    return (
        <section id="applications" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-12 mb-24">
                   <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16">
                       <div className="flex flex-col gap-6">
                           <div className="flex items-center mb-0">
                           </div>
                           <h2 className="text-h2">
                               <DecryptedText text="Built for real environments" animateOn="view" speed={100} />
                           </h2>
                       </div>
                       <p className="flex min-h-0 max-w-2xl items-center border-l-4 border-accent/30 pl-6 text-body text-white/65 lg:min-h-[6rem] lg:pl-10">
                           <TrueTypewriter 
                               text="Hestia is designed for spaces where local execution, trust, and observability matter more than novelty."
                               speed={10}
                           />
                       </p>
                   </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-10">
                    {applications.map((app, i) => (
                        <motion.div 
                            key={app.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: "circOut" }}
                            className="glass-panel group flex min-h-[320px] flex-col justify-between rounded-[36px] border-white/5 bg-black/40 p-8 transition-all duration-700 hover:border-accent/40 hover:bg-black/60 md:min-h-[380px] md:p-12 xl:rounded-[60px] xl:p-16"
                        >
                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-center gap-4 md:gap-6">
                                     <div className="w-16 h-px bg-accent/30 group-hover:w-32 transition-all duration-700" />
                                     <span className="text-ui text-accent/50 group-hover:text-accent font-black tracking-[0.4em]">{app.tag}</span>
                                </div>
                                <h3 className="text-h3 text-white group-hover:text-accent transition-colors">
                                    <DecryptedText text={app.title} animateOn="inViewHover" speed={50} />
                                </h3>
                                <p className="max-w-xl text-body leading-relaxed text-white/60">
                                    <TrueTypewriter text={app.desc} speed={8} />
                                </p>
                            </div>
                            <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                <span className="text-ui text-accent font-black">
                                    <DecryptedText text="CASE STUDY AVAILABLE" animateOn="hover" speed={40} />
                                </span>
                                <span className="text-accent text-2xl">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background circle */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[150px] md:h-[1000px] md:w-[1000px]" />
        </section>
    )
}
