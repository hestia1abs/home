'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Player } from '@remotion/player'
import { Hashchain } from '@/components/animations/Hashchain'
import { GlitchText } from '@/components/animations/GlitchText'
import Shuffle from '@/components/animations/Shuffle'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export function TechnologySection() {
    const sectionRef = useRef<HTMLElement>(null)
    const laserRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!laserRef.current) return
        gsap.fromTo(laserRef.current, 
            { y: '-100%', opacity: 0 },
            { y: '100%', opacity: 0.4, duration: 2, repeat: -1, ease: 'none' }
        )
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} id="security" className="py-16 md:py-24 relative overflow-hidden">
            {/* GSAP vertical scanning laser */}
            <div ref={laserRef} className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-0 pointer-events-none" />

            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-12 mb-20">
                    <span className="text-ui text-[#ff003c] tracking-[0.6em]">Security & Verification</span>
                    <h2 className="text-h2 select-none text-glow text-[#ff003c]"><Shuffle text="Trust Built Into Execution" /></h2>
                    <p className="max-w-2xl border-l-4 border-[#ff003c] pl-6 text-body leading-relaxed text-white/70 md:pl-8">
                        Hestia is designed for environments where intent, control, and device actions must remain verifiable. Security is part of the execution path, not an add-on.
                    </p>
                </div>

                <div className="bento-grid gap-6 xl:gap-8">
                    {/* Fail-Closed Block */}
                    <div className="col-span-12 lg:col-span-4 glass-panel relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border-cyan-500/20 p-8 md:min-h-[420px] md:p-12">
                        {/* Corner brackets */}
                        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-cyan-400/30" />
                        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-cyan-400/30" />
                        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-cyan-400/30" />
                        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-cyan-400/30" />

                        <div className="space-y-5">
                             <h3 className="text-h3 text-[#0ff]">
                                <GlitchText text="Fail-Closed Validation" intensity={0.45} />
                             </h3>
                             <p className="mt-4 text-body leading-relaxed text-white/75">
                                 Commands that fail verification do not execute. Device behavior stays bounded by an explicit trust model.
                             </p>
                        </div>

                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)'
                        }} />

                        <div className="relative">
                             <div className="h-[3px] w-full bg-cyan-400/20 overflow-hidden">
                                 <motion.div 
                                    animate={{ left: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 bg-cyan-400 h-full w-20"
                                 />
                             </div>
                        </div>
                    </div>

                    {/* Allowlists Block */}
                    <div className="col-span-12 lg:col-span-8 glass-panel relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-3xl border-purple-500/20 p-8 md:min-h-[420px] md:p-12">
                        <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-purple-400/30" />
                        <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-purple-400/30" />
                        <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-purple-400/30" />
                        <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-purple-400/30" />

                        {/* Scanline effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168,85,247,0.1) 2px, rgba(168,85,247,0.1) 4px)'
                        }} />

                        <div className="space-y-5">
                             <h3 className="text-h3 text-[#f0f]">
                                <GlitchText text="Policy & Allowlist Enforcement" intensity={0.35} />
                             </h3>
                             <p className="mt-4 max-w-2xl text-body leading-relaxed text-white/75">
                                 Devices, actions, and automation pathways can be constrained by policy before they ever reach the execution layer.
                             </p>
                        </div>

                        <div className="flex gap-6 opacity-40 hover:opacity-100 transition-opacity">
                             {[1,2,3,4,5,6,7,8,9,10].map(i => (
                                <motion.div 
                                    key={i} 
                                    animate={{ height: [30, 80, 30] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-1.5 bg-purple-500 rounded-full" 
                                />
                             ))}
                        </div>
                    </div>

                    {/* Hashchain Block — Remotion Player */}
                    <div className="col-span-12 glass-panel relative overflow-hidden rounded-3xl border-white/5 min-h-[420px] md:min-h-[500px]">
                        {/* Corner brackets */}
                        <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30 z-20" />
                        <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30 z-20" />
                        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30 z-20" />
                        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30 z-20" />

                        <Player
                            component={Hashchain}
                            durationInFrames={600}
                            compositionWidth={1800}
                            compositionHeight={500}
                            fps={30}
                            loop
                            autoPlay
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
