'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

    return (
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="mb-16 space-y-5 text-center md:mb-24 md:space-y-6">
                    <span className="text-ui text-[#ff003c] tracking-[0.8em]">Pricing</span>
                    <h2 className="text-h2 text-glow">
                        <Shuffle text="Software revenue, hardware entry." />
                    </h2>
                    <p className="max-w-3xl mx-auto text-body text-white/60 leading-relaxed">
                        Hestia follows an India-first pricing model: hardware is the entry point, software creates recurring value, and higher-capability environments scale through orchestration and support.
                    </p>
                </div>

                {/* View Switcher */}
                <div className="mb-16 flex justify-center md:mb-24">
                    <div className="flex w-full max-w-3xl flex-col gap-2 rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-2xl sm:w-auto sm:flex-row sm:rounded-full">
                        <button 
                            onClick={() => setView('subs')}
                            className={`rounded-full px-6 py-4 text-ui transition-all duration-300 sm:px-10 ${view === 'subs' ? 'bg-primary text-background' : 'text-white/50 hover:bg-white/5'}`}
                        >
                            Software plans
                        </button>
                        <button 
                            onClick={() => setView('hw')}
                            className={`rounded-full px-6 py-4 text-ui transition-all duration-300 sm:px-10 ${view === 'hw' ? 'bg-[#f0f] text-background' : 'text-white/50 hover:bg-white/5'}`}
                        >
                            Hardware
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={view}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-8"
                    >
                        {(view === 'subs' ? SUBSCRIPTION_TIERS : HARDWARE_NUCLEUS).map((item: PricingItem) => (
                            <SpotlightCard 
                                key={item.title}
                                spotlightColor={item.color || 'rgba(255, 255, 255, 0.05)'}
                                className={`group relative flex min-h-[560px] flex-col justify-between border-white/5 bg-black/40 p-8 transition-all duration-500 hover:border-white/20 md:min-h-[620px] xl:min-h-[700px] xl:p-12 ${item.featured ? 'ring-4 ring-primary/30 ring-offset-4 ring-offset-background md:ring-offset-8' : ''}`}
                            >
                                {item.featured && (
                                    <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full bg-primary px-5 py-2 text-ui text-background shadow-[0_0_20px_rgba(34,211,238,0.5)] md:-top-4 md:px-6">
                                        Value Leader
                                    </div>
                                )}

                                <div className="relative z-10 space-y-8 md:space-y-10">
                                    <div className="space-y-4">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <span className="text-ui opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: item.accent }}>
                                                {item.type || 'Software'}
                                            </span>
            
                                        </div>
                                        <h3 className="text-h3 font-black group-hover:text-glow transition-all" style={{ color: item.accent }}>
                                            {item.title}
                                        </h3>
                                        <p className="pt-2 text-sm leading-7 text-white/55 md:text-base">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="pt-4 md:pt-8">
                                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                            <span className="text-4xl font-mono font-black tracking-tight md:text-5xl">{item.price}</span>
                                            {item.period && <span className="text-ui opacity-40">{item.period}</span>}
                                        </div>
                                        <div className="mb-8 mt-6 h-px w-full bg-white/10 md:mb-10 md:mt-8" />
                                        
                                        <ul className="space-y-4 md:space-y-6">
                                            {item.features.map((f: string) => (
                                                <li key={f} className="flex items-start gap-3 text-ui leading-normal text-white/60 transition-colors group-hover:text-white md:gap-4">
                                                    <CheckIcon size={14} className="mt-1" style={{ color: item.accent }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className="group/btn relative w-full overflow-hidden rounded-2xl py-4 text-ui transition-all duration-500 md:py-5">
                                    <div className="absolute inset-0 bg-white/5 group-hover/btn:bg-white/10 transition-colors" />
                                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity blur-2xl" style={{ backgroundColor: item.accent + '30' }} />
                                    <span className="relative z-10 font-black">{view === 'subs' ? 'Request plan' : 'Request hardware'}</span>
                                </button>
                            </SpotlightCard>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Insight */}
                <div className="mt-20 flex flex-col items-center md:mt-24">
                    <div className="h-px w-32 bg-[#ff003c] mb-12" />
                    <p className="max-w-2xl text-center text-script text-3xl leading-tight text-white/20 md:text-5xl">
                        &quot;Full-stack. Sovereign. Built for the physical world.&quot;
                    </p>
                    <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-30 md:gap-16">
                         <div className="flex flex-col items-center">
                             <span className="text-ui opacity-50 mb-1">Stage</span>
                             <span className="text-ui font-black">Pre-launch build</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <span className="text-ui opacity-50 mb-1">Market</span>
                             <span className="text-ui font-black">India-first rollout</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <span className="text-ui opacity-50 mb-1">Model</span>
                             <span className="text-ui font-black">Hardware + recurring software</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Decorative background lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.04]">
                 <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-500" />
                 <div className="absolute top-0 left-2/4 w-px h-full bg-purple-500" />
                 <div className="absolute top-0 left-3/4 w-px h-full bg-pink-500" />
            </div>
        </section>
    )
}
