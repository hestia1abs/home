'use client'

import { useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { GlitchText } from '@/components/animations/GlitchText'
import Shuffle from '@/components/animations/Shuffle'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { hexString, unitNoise } from '@/lib/deterministic'

function HashchainPreview() {
    const rows = useMemo(
        () =>
            Array.from({ length: 16 }, (_, index) => ({
                id: `row-${index}`,
                block: (1047238 - index).toLocaleString(),
                content: Array.from({ length: 6 }, (_, blockIndex) => hexString(index * 100 + blockIndex * 13, 4)).join(':'),
                status: unitNoise(index + 20) > 0.75 ? 'VERIFIED' : 'SYNCING'
            })),
        []
    )

    const loopedRows = [...rows, ...rows]

    return (
        <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_28%),linear-gradient(180deg,rgba(1,4,10,0.94),rgba(2,6,16,0.92))] p-8 font-mono md:p-10">
            <div className="relative z-10 mb-8 flex items-end justify-between border-b border-primary/20 pb-4">
                <div className="space-y-1">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Cryptographic_Hashchain</div>
                    <div className="text-lg font-black uppercase text-white md:text-2xl">Immutable_Ledger_of_Truth</div>
                </div>
                <div className="text-right text-[10px] uppercase text-primary/60">
                    Status: [LOCKED] <br />
                    Blocks: 1,047,238
                </div>
            </div>

            <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="space-y-3"
            >
                {loopedRows.map((row, index) => (
                    <div key={`${row.id}-${index}`} className="flex items-center gap-4 md:gap-6">
                        <div className="w-14 text-[10px] text-primary/35 md:w-20">{row.block}</div>
                        <div className="flex-1 border-l-2 border-primary/20 bg-white/5 px-3 py-2 text-[11px] font-bold tracking-[0.22em] text-white/55 transition-colors hover:border-primary hover:bg-white/10 md:text-xs">
                            {row.content.toUpperCase()}
                        </div>
                        <div className={`rounded border px-2 py-1 text-[8px] font-black uppercase ${row.status === 'VERIFIED' ? 'border-green-500/20 bg-green-500/5 text-green-400' : 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400'}`}>
                            {row.status}
                        </div>
                    </div>
                ))}
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
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

                    {/* Hashchain Block */}
                    <div className="col-span-12 glass-panel relative overflow-hidden rounded-3xl border-white/5 min-h-[420px] md:min-h-[500px]">
                        {/* Corner brackets */}
                        <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-primary/30 z-20" />
                        <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-primary/30 z-20" />
                        <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-primary/30 z-20" />
                        <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-primary/30 z-20" />

                        <HashchainPreview />
                    </div>
                </div>
            </div>
        </section>
    )
}
