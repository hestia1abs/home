'use client'

import { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { GlitchText } from '@/components/animations/GlitchText'
import Shuffle from '@/components/animations/Shuffle'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

/**
 * Ambient Hashchain Background for the centered card
 */
function AmbientLedger() {
    const hashes = useMemo(() => 
        Array.from({ length: 24 }, (_, i) => ({
            id: 1047238 - i,
            hash: Array.from({ length: 12 }, () => 
                Math.floor(Math.random() * 16).toString(16)
            ).join(''),
        }))
    , [])

    return (
        <div className="absolute inset-0 opacity-[0.07] font-mono pointer-events-none overflow-hidden">
            <div className="flex flex-wrap gap-4 p-4 justify-center items-center">
                {hashes.map((h) => (
                    <div key={h.id} className="text-[10px] whitespace-nowrap text-primary uppercase tracking-widest">
                        0X{h.hash}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>
    )
}

export function TechnologySection() {
    const sectionRef = useRef<HTMLElement>(null)
    const laserRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!laserRef.current) return
        gsap.fromTo(laserRef.current, 
            { y: '-100%', opacity: 0 },
            { y: '100%', opacity: 0.6, duration: 3, repeat: -1, ease: 'power1.inOut' }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="security" className="py-20 md:py-32 relative overflow-hidden bg-black">
        
            {/* GSAP vertical scanning laser */}
            <div ref={laserRef} className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0 pointer-events-none shadow-[0_0_50px_rgba(34,211,238,0.1)]" />

            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-10 mb-20">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-primary/40" />
                        <span className="text-ui text-primary tracking-[0.6em] uppercase">Security_Validation</span>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-h2 select-none text-glow text-white tracking-tight">
                            <Shuffle text="Trust Built Into Execution" />
                        </h2>
                        <p className="max-w-2xl border-l-2 border-primary/30 pl-8 text-lg font-light leading-relaxed text-white/50 italic">
                            Hestia is designed for environments where intent, control, and device actions must remain verifiable. Security is part of the execution path, not an add-on.
                        </p>
                    </div>
                </div>

                <div className="bento-grid gap-6 xl:gap-8">
                    {/* Fail-Closed Block */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="col-span-12 lg:col-span-4 glass-panel group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[40px] border-[#0ff]/10 p-8 md:p-12 transition-all duration-500 hover:border-[#0ff]/30"
                    >
                        {/* Corner Decorative details */}
                        <div className="absolute top-8 left-8 w-6 h-6 border-l border-t border-[#0ff]/40" />
                        <div className="absolute bottom-8 right-8 w-6 h-6 border-r border-b border-[#0ff]/40" />

                        <div className="space-y-6">
                             <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-[#0ff] tracking-[0.3em]">
                                 <span className="h-1.5 w-1.5 rounded-full bg-[#0ff] animate-pulse" />
                                 System_Core
                             </div>
                             <h3 className="text-h3 text-white group-hover:text-[#0ff] transition-colors duration-500 uppercase tracking-tighter font-black">
                                <GlitchText text="Fail-Closed Validation" intensity={0.2} />
                             </h3>
                             <p className="text-body leading-relaxed text-white/60 font-light">
                                 Commands that fail verification do not execute. Device behavior stays bounded by an explicit trust model, ensuring zero unauthorized state changes.
                             </p>
                        </div>
                    </motion.div>

                    {/* Allowlists Block */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="col-span-12 lg:col-span-8 glass-panel group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[40px] border-[#f0f]/10 p-8 md:p-12 transition-all duration-500 hover:border-[#f0f]/30"
                    >
                        <div className="absolute top-8 right-8 w-6 h-6 border-r border-t border-[#f0f]/40" />
                        <div className="absolute bottom-8 left-8 w-6 h-6 border-l border-b border-[#f0f]/40" />

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase text-[#f0f] tracking-[0.3em]">
                                 <span className="h-1.5 w-1.5 rounded-full bg-[#f0f] animate-pulse" />
                                 Pathway_Enforcement
                             </div>
                             <h3 className="text-h3 text-white group-hover:text-[#f0f] transition-colors duration-500 uppercase tracking-tighter font-black">
                                <GlitchText text="Policy & Allowlist Enforcement" intensity={0.2} />
                             </h3>
                             <p className="max-w-2xl text-body leading-relaxed text-white/60 font-light">
                                 Devices, actions, and automation pathways are constrained by cryptographic policy before they reach the execution layer. No "default allow" - only explicit authorization.
                             </p>
                        </div>

                        {/* Frequency visualizer style bars */}
                        <div className="flex items-end gap-2 h-16 opacity-30 group-hover:opacity-70 transition-opacity duration-700">
                             {Array.from({ length: 40 }).map((_, i) => (
                                <motion.div 
                                    key={i} 
                                    animate={{ height: [10, Math.random() * 60 + 10, 10] }}
                                    transition={{ 
                                        duration: 0.8 + Math.random(), 
                                        repeat: Infinity, 
                                        delay: i * 0.02,
                                        ease: "easeInOut"
                                    }}
                                    className="flex-1 bg-[#f0f] rounded-t-sm" 
                                />
                             ))}
                        </div>
                    </motion.div>

                    {/* Hashchain Block - Full Width Centered */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-12 glass-panel relative overflow-hidden rounded-[40px] border-white/5 min-h-[500px] shadow-2xl flex items-center justify-center p-8 md:p-16 lg:p-24"
                    >
                        {/* Brackets */}
                        <div className="absolute top-10 left-10 w-16 h-16 border-l border-t border-primary/30 z-20 pointer-events-none" />
                        <div className="absolute top-10 right-10 w-16 h-16 border-r border-t border-primary/30 z-20 pointer-events-none" />
                        <div className="absolute bottom-10 left-10 w-16 h-16 border-l border-b border-primary/30 z-20 pointer-events-none" />
                        <div className="absolute bottom-10 right-10 w-16 h-16 border-r border-b border-primary/30 z-20 pointer-events-none" />
                        
                        <AmbientLedger />
                        
                        <div className="relative z-30 max-w-4xl w-full flex flex-col items-center text-center space-y-10">
                            <div className="space-y-4">
                                <h3 className="text-h2 text-white font-black uppercase tracking-tighter leading-none md:text-[5rem] lg:text-[7rem]">
                                    Tamper-Proof <br/>
                                    <span className="text-primary italic">Execution Log</span>
                                </h3>
                            </div>
                            
                            <div className="space-y-8 max-w-2xl">
                                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light">
                                    Every command transmitted via HxTP is part of a cryptographic hashchain. This ensures that the history of your environment is immutable, observable, and impossible to spoof.
                                </p>
                                
                                <ul className="flex flex-wrap justify-center gap-6 md:gap-10">
                                    {[
                                        'SHA-256 Integrity',
                                        'Entropy Injection',
                                        'Offline Verification'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-[10px] md:text-xs font-mono text-white/70 uppercase tracking-widest bg-white/5 px-4 py-2 border border-white/10 rounded-full">
                                            <div className="h-1.5 w-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
