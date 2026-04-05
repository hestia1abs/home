'use client'

import { motion } from 'framer-motion'
const ArrowIcon = ({ size = 24, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const jobs = [
    { title: 'Embedded Systems Engineer', location: 'San Francisco, CA', type: 'Full-time', tag: 'Engineering' },
    { title: 'AI Research Scientist', location: 'Remote', type: 'Full-time', tag: 'Agentics' },
    { title: 'Protocol Architect (HxTP)', location: 'London, UK', type: 'Full-time', tag: 'Architecture' },
    { title: 'Hardware Design Intern', location: 'San Francisco, CA', type: 'Internship', tag: 'Hardware' },
]

export function CareersSection() {
    return (
        <section id="careers" className="py-16 md:py-24 relative overflow-hidden px-6">
            <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-end">
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <span className="text-ui text-primary tracking-[0.8em]">The Expansion</span>
                        <h2 className="text-h2">Join the Research Division</h2>
                    </div>
                    <div className="lg:col-span-4 h-24 flex items-center border-l-4 border-primary/30 pl-12">
                         <p className="text-body text-white/50 leading-relaxed uppercase tracking-widest font-mono font-bold">
                            Building intelligence for the physical world requires those who think in hardware and software simultaneously.
                         </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {jobs.map((job, i) => (
                        <motion.div 
                            key={job.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="glass-panel group p-12 rounded-[50px] flex flex-col md:flex-row md:items-center justify-between gap-10 hover:border-primary/40 transition-all duration-500 cursor-pointer overflow-hidden relative bg-black/40 hover:bg-black/60"
                        >
                            <div className="flex flex-col gap-4 relative z-10">
                                <span className="text-ui text-primary/50 group-hover:text-primary transition-colors tracking-[0.4em] mb-1">{job.tag}</span>
                                <h3 className="text-h3 text-white group-hover:text-primary transition-colors">
                                    {job.title}
                                </h3>
                            </div>

                            <div className="flex items-center gap-16 relative z-10 text-ui group-hover:opacity-100 transition-opacity">
                                <div className="space-y-2 opacity-50">
                                    <div className="text-[10px] tracking-[0.3em] font-black uppercase text-primary/60">Location</div>
                                    <div className="text-foreground font-bold">{job.location}</div>
                                </div>
                                <div className="space-y-2 opacity-50">
                                    <div className="text-[10px] tracking-[0.3em] font-black uppercase text-primary/60">Engagement</div>
                                    <div className="text-foreground font-bold">{job.type}</div>
                                </div>
                                <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <ArrowIcon size={32} className="group-hover:translate-x-2 transition-transform text-primary" />
                                </div>
                            </div>
                            
                            <div className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
