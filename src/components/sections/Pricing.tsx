'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import Shuffle from '@/components/animations/Shuffle'

type OfferingItem = {
    title: string
    category: string
    desc: string
    specs: string[]
    accent: string
    color: string
    icon: React.ReactNode
}

const LAUNCH_STACK: OfferingItem[] = [
    {
        title: 'HxTP Protocol',
        category: 'THE CORE',
        desc: 'A deterministic execution layer for signed, reliable, and observable command delivery across any environment.',
        specs: ['SHA-256 Signed Paths', 'Deterministic Latency', 'Edge-Native Execution', 'Tamper-proof Ledger'],
        accent: '#0ff',
        color: 'rgba(34, 211, 238, 0.1)',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        )
    },
    {
        title: 'Helix Gateway',
        category: 'HARDWARE',
        desc: 'Physical compute node for high-integrity local execution, voice interaction, and environmental sensing.',
        specs: ['Local Inference GPU', 'Multi-Sensor Array', 'Offline-First Autonomy', 'Low-Latency Orchestration'],
        accent: '#f0f',
        color: 'rgba(240, 0, 240, 0.1)',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
        )
    },
    {
        title: 'Sovereign OS',
        category: 'THE INTERFACE',
        desc: 'Advanced management surface for private AI orchestration, device registry, and HxTP policy enforcement.',
        specs: ['Private Model Registry', 'Policy-Based Control', 'Real-Time Telemetry', 'Zero-Cloud Drift'],
        accent: '#00f',
        color: 'rgba(0, 0, 255, 0.1)',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        )
    },
    {
        title: 'Developer SDK',
        category: 'ECOSYSTEM',
        desc: 'Comprehensive toolset for building hardware-aware intelligence and autonomous execution pathways.',
        specs: ['HxTP Client Libraries', 'Edge Testing CLI', 'Secure Key Management', 'Deployment Automation'],
        accent: '#ff003c',
        color: 'rgba(255, 0, 60, 0.1)',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        )
    }
]

export function PricingSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    const line1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const line2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    }

    const cardVariants: Variants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
        },
    }

    return (
        <section ref={sectionRef} id="offerings" className="relative overflow-hidden py-24 md:py-32">
            {/* Parallax lines */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
                <motion.div className="absolute left-1/3 top-0 h-full w-px bg-primary" style={{ y: line1Y }} />
                <motion.div className="absolute left-2/3 top-0 h-full w-px bg-accent" style={{ y: line2Y }} />
            </div>

            <div className="relative z-10 mx-auto max-w-[1800px] px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'circOut' }}
                    viewport={{ once: true }}
                    className="mb-20 space-y-6 text-center md:mb-32"
                >
                    <span className="text-ui tracking-[0.8em] text-[#ff003c] uppercase font-black">Launch Inventory</span>
                    <h2 className="text-h2 md:text-7xl lg:text-8xl">
                        <Shuffle text="The Hestia Stack" />
                    </h2>
                    <p className="mx-auto max-w-3xl text-body text-white/50 leading-relaxed md:text-xl">
                        Hestia Labs provides a unified, local-first platform for AI to execute in the physical world. Our launch stack delivers everything needed from protocol to hardware.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8"
                >
                    {LAUNCH_STACK.map((offering) => (
                        <motion.div key={offering.title} variants={cardVariants}>
                            <SpotlightCard
                                spotlightColor={offering.color}
                                className="group relative flex min-h-[560px] flex-col justify-between overflow-hidden border border-white/5 p-8 transition-all duration-500 hover:border-white/20 rounded-[2.5rem] xl:p-10"
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div
                                            className="h-14 w-14 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:scale-110"
                                            style={{ color: offering.accent, backgroundColor: offering.color }}
                                        >
                                            {offering.icon}
                                        </div>
                                        <span className="text-ui opacity-30 group-hover:opacity-100 font-black tracking-widest uppercase transition-opacity">
                                            {offering.category}
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-h3 text-white group-hover:scale-[1.02] transition-transform origin-left">
                                            {offering.title}
                                        </h3>
                                        <p className="text-body text-sm leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                                            {offering.desc}
                                        </p>
                                    </div>

                                    <div className="pt-6 space-y-4">
                                        <div className="h-px w-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                                        <ul className="space-y-4">
                                            {offering.specs.map((spec) => (
                                                <li key={spec} className="flex items-center gap-3 text-[11px] font-mono tracking-wider text-white/40 uppercase group-hover:text-white/60 transition-colors">
                                                    <div className="h-1 w-1 rounded-full bg-primary" style={{ backgroundColor: offering.accent }} />
                                                    {spec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}