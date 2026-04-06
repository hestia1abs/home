'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import Shuffle from '@/components/animations/Shuffle'

type PricingItem = {
    title: string
    price: string
    desc: string
    features: string[]
    accent: string
    color?: string
    featured?: boolean
    period?: string
    type?: string
}

const CheckIcon = ({ size = 12, className, style }: { size?: number, className?: string, style?: React.CSSProperties }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const SUBSCRIPTION_TIERS: PricingItem[] = [
    { 
        title: 'Essential', 
        price: '₹49', 
        period: '/ month',
        desc: 'Local-first control for single-space deployments and entry-level automation.', 
        features: ['Basic Voice Control', 'Limited AI Execution', 'Essential Automation', 'Local-first Reliability'],
        color: 'rgba(34, 211, 238, 0.2)', // Cyan
        accent: '#0ff'
    },
    { 
        title: 'Smart Saver', 
        price: '₹199', 
        period: '/ month',
        desc: 'A practical plan for homes that want unified control, automation, and measurable value.', 
        features: ['Full Home Control', 'Smart ROI Automation', 'HX47 AI Assistance', 'Unified Mobile + Voice'],
        featured: true,
        color: 'rgba(168, 85, 247, 0.2)', // Purple
        accent: '#f0f'
    },
    { 
        title: 'Professional', 
        price: '₹499', 
        period: '/ month',
        desc: 'For higher-intent households that need predictive automation, insights, and multi-device coordination.', 
        features: ['HX47 Orchestration', 'Predictive Automation', 'Remote Control + Insights', 'Multi-device Coordination'],
        color: 'rgba(236, 72, 153, 0.2)', // Pink
        accent: '#ec4899'
    },
    { 
        title: 'Premium', 
        price: '₹1499', 
        period: '/ month', 
        desc: 'A high-comfort experience built around personalization, orchestration, and premium support.', 
        features: ['Full AI Environment', 'Advanced Personalization', 'Priority Support', 'Zero-friction Experience'],
        color: 'rgba(255, 255, 255, 0.1)', // White/Glass
        accent: '#fff'
    },
]

const HARDWARE_NUCLEUS: PricingItem[] = [
    {
        title: 'Helix Entry',
        type: 'Device',
        price: '₹999',
        desc: 'Entry hardware for local control and HxTP-native device execution.',
        features: ['HxTP Native', 'Voice Interface', 'Environmental Sensing'],
        accent: '#0ff'
    },
    {
        title: 'Helix Core',
        type: 'Controller',
        price: '₹4999',
        desc: 'Primary controller for multi-room coordination and edge execution.',
        features: ['Multi-room Control', 'Edge Inference', 'Offline Autonomy'],
        accent: '#f0f'
    },
    {
        title: 'AI Node',
        type: 'Processor',
        price: '₹15000',
        desc: 'Dedicated high-performance GPU clustering for private AI.',
        features: ['HX47 Dedicated Core', 'Real-time Learning', 'Extreme Privacy'],
        accent: '#ff003c'
    },
    {
        title: 'Builder Gateway',
        type: 'Deployment',
        price: '₹30000',
        desc: 'A higher-capacity deployment surface for larger homes, pilots, and builder integrations.',
        features: ['Expanded Device Capacity', 'Deployment Tooling', 'Remote Administration'],
        accent: '#fff'
    }
]

export function PricingSection() {
    const [view, setView] = useState<'subs' | 'hw'>('subs')
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })

    // Parallax effect for the decorative background lines
    const line1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const line2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
    const line3Y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

    // Staggered card animation
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
        <section ref={sectionRef} id="pricing" className="relative overflow-hidden py-16 md:py-24">
            {/* Decorative background lines with parallax */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                <motion.div
                    className="absolute left-1/4 top-0 h-full w-px bg-cyan-500"
                    style={{ y: line1Y }}
                />
                <motion.div
                    className="absolute left-2/4 top-0 h-full w-px bg-purple-500"
                    style={{ y: line2Y }}
                />
                <motion.div
                    className="absolute left-3/4 top-0 h-full w-px bg-pink-500"
                    style={{ y: line3Y }}
                />
            </div>

            {/* Soft ambient glow orbs */}
            <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-[#0ff] opacity-[0.03] blur-[80px]" />
            <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-[#f0f] opacity-[0.02] blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-[1800px] px-6">
                {/* Header with entrance animations */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'circOut' }}
                    viewport={{ once: true }}
                    className="mb-16 space-y-5 text-center md:mb-24 md:space-y-6"
                >
                    <span className="text-ui tracking-[0.8em] text-[#ff003c]">Pricing</span>
                    <h2 className="text-h2 text-glow">
                        <Shuffle text="Software revenue, hardware entry." />
                    </h2>
                    <p className="mx-auto max-w-3xl text-body leading-relaxed text-white/60">
                        Hestia follows an India-first pricing model: hardware is the entry point, software creates recurring value, and higher-capability environments scale through orchestration and support.
                    </p>
                </motion.div>

                {/* View Switcher with enhanced hover/focus */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16 flex justify-center md:mb-24"
                >
                    <div className="flex w-full max-w-3xl flex-col gap-2 rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-2xl sm:w-auto sm:flex-row sm:rounded-full">
                        <button
                            onClick={() => setView('subs')}
                            className={`rounded-full px-6 py-4 text-ui transition-all duration-300 sm:px-10 ${
                                view === 'subs'
                                    ? 'bg-primary text-background shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                                    : 'text-white/50 hover:bg-white/10 hover:text-white/80'
                            }`}
                        >
                            Software plans
                        </button>
                        <button
                            onClick={() => setView('hw')}
                            className={`rounded-full px-6 py-4 text-ui transition-all duration-300 sm:px-10 ${
                                view === 'hw'
                                    ? 'bg-[#f0f] text-background shadow-[0_0_15px_rgba(240,0,240,0.4)]'
                                    : 'text-white/50 hover:bg-white/10 hover:text-white/80'
                            }`}
                        >
                            Hardware
                        </button>
                    </div>
                </motion.div>

                {/* Grid with AnimatePresence + staggered cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={view}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 xl:gap-8"
                    >
                        {(view === 'subs' ? SUBSCRIPTION_TIERS : HARDWARE_NUCLEUS).map((item: PricingItem, idx: number) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                custom={idx}
                                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
                            >
                                <SpotlightCard
                                    spotlightColor={item.color || 'rgba(255, 255, 255, 0.05)'}
                                    className={`group relative flex min-h-[520px] flex-col justify-between overflow-hidden border border-white/5 bg-black/40 p-8 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] md:min-h-[580px] xl:min-h-[620px] xl:p-12 ${
                                        item.featured ? 'ring-4 ring-primary/30 ring-offset-4 ring-offset-background md:ring-offset-8' : ''
                                    }`}
                                >
                                    {item.featured && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="absolute left-1/2 top-5 z-20 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-ui text-background shadow-[0_0_20px_rgba(34,211,238,0.5)] md:top-6 md:px-6"
                                        >
                                            Value Leader
                                        </motion.div>
                                    )}

                                    <div className="relative z-10 space-y-8 md:space-y-10">
                                        <div className="space-y-4">
                                            <div className="flex flex-wrap items-start justify-between gap-3">
                                                <span
                                                    className="text-ui opacity-40 transition-opacity group-hover:opacity-100"
                                                    style={{ color: item.accent }}
                                                >
                                                    {item.type || 'Software'}
                                                </span>
                                            </div>
                                            <h3
                                                className="max-w-[9ch] text-[clamp(2.6rem,5vw,4.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] transition-all group-hover:text-glow"
                                                style={{ color: item.accent }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="max-w-[24ch] pt-2 text-sm leading-7 text-white/55 transition-colors group-hover:text-white/70 md:text-base">
                                                {item.desc}
                                            </p>
                                        </div>

                                        <div className="pt-4 md:pt-8">
                                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                                <span className="font-mono text-4xl font-black tracking-tight transition-all group-hover:scale-105 md:text-5xl">
                                                    {item.price}
                                                </span>
                                                {item.period && (
                                                    <span className="text-ui opacity-40 transition-opacity group-hover:opacity-70">
                                                        {item.period}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mb-8 mt-6 h-px w-full bg-white/10 transition-all group-hover:bg-white/20 md:mb-10 md:mt-8" />
                                            <ul className="space-y-4 md:space-y-6">
                                                {item.features.map((f: string) => (
                                                    <li
                                                        key={f}
                                                        className="flex items-start gap-3 text-ui leading-normal text-white/60 transition-colors group-hover:text-white/80 md:gap-4"
                                                    >
                                                        <CheckIcon
                                                            size={14}
                                                            className="mt-1 transition-transform group-hover:scale-110"
                                                            style={{ color: item.accent }}
                                                        />
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group/btn relative w-full overflow-hidden rounded-2xl py-4 text-ui transition-all duration-500 md:py-5"
                                    >
                                        <div className="absolute inset-0 bg-white/5 transition-colors group-hover/btn:bg-white/10" />
                                        <div
                                            className="absolute inset-0 opacity-0 blur-2xl transition-opacity group-hover/btn:opacity-100"
                                            style={{ backgroundColor: item.accent + '30' }}
                                        />
                                        <span className="relative z-10 font-black">
                                            {view === 'subs' ? 'Request plan' : 'Request hardware'}
                                        </span>
                                    </motion.button>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Insight with fade-in */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center md:mt-24"
                >
                    <div className="mb-12 h-px w-32 bg-[#ff003c]" />
                    <p className="max-w-2xl text-center text-script text-3xl leading-tight text-white/20 transition-colors hover:text-white/30 md:text-5xl">
                        &quot;Full-stack. Sovereign. Built for the physical world.&quot;
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-30 transition-opacity hover:opacity-40 md:gap-16">
                        <div className="flex flex-col items-center">
                            <span className="text-ui mb-1 opacity-50">Stage</span>
                            <span className="text-ui font-black">Pre-launch build</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-ui mb-1 opacity-50">Market</span>
                            <span className="text-ui font-black">India-first rollout</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-ui mb-1 opacity-50">Model</span>
                            <span className="text-ui font-black">Hardware + recurring software</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}