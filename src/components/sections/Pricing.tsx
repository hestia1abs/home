'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import Shuffle from '@/components/animations/Shuffle'

const CheckIcon = ({ size = 12, className, style }: { size?: number, className?: string, style?: React.CSSProperties }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

const SUBSCRIPTION_TIERS = [
    { 
        title: 'Mass Adoption', 
        subtitle: '₹1 Sachet Model',
        price: '₹49', 
        period: '/ month',
        desc: 'Built for Bharat. Essential intelligence for every home.', 
        features: ['Basic Voice Control', 'Limited AI Execution', 'Essential Automation', 'Local-first Reliability'],
        color: 'rgba(34, 211, 238, 0.2)', // Cyan
        accent: '#0ff'
    },
    { 
        title: 'Smart Saver', 
        subtitle: 'Value Middle Class',
        price: '₹199', 
        period: '/ month',
        desc: 'ROI-driven automation. Save time, energy, and effort.', 
        features: ['Full Home Control', 'Smart ROI Automation', 'HX47 AI Assistance', 'Unified Mobile + Voice'],
        featured: true,
        color: 'rgba(168, 85, 247, 0.2)', // Purple
        accent: '#f0f'
    },
    { 
        title: 'Professional', 
        subtitle: 'The Executive Tier',
        price: '₹499', 
        period: '/ month',
        desc: 'For those who value time over money. Absolute autonomy.', 
        features: ['HX47 Orchestration', 'Predictive Automation', 'Remote Control + Insights', 'Multi-device Coordination'],
        color: 'rgba(236, 72, 153, 0.2)', // Pink
        accent: '#ec4899'
    },
    { 
        title: 'Premium', 
        subtitle: 'Sovereign Luxury',
        price: '₹1499', 
        period: '/ month', 
        desc: 'Your home is alive. Personalized, frictionless, premium.', 
        features: ['Full AI Environment', 'HK47 Holographic AI', 'Personalized Behavior', 'Zero-friction Support'],
        color: 'rgba(255, 255, 255, 0.1)', // White/Glass
        accent: '#fff'
    },
]

const HARDWARE_NUCLEUS = [
    {
        title: 'Helix Entry',
        type: 'Device',
        price: '₹999',
        desc: 'The gateway to HxTP. Compact, powerful, reactive.',
        features: ['HxTP Native', 'Voice Interface', 'Environmental Sensing'],
        accent: '#0ff'
    },
    {
        title: 'Hx Core',
        type: 'Controller',
        price: '₹4999',
        desc: 'The central nervous system for localized execution.',
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
        title: 'HK47 Hologram',
        type: 'Interface',
        price: '₹30000',
        desc: 'The physical manifestation of your home intelligence.',
        features: ['Holographic Display', 'Lidar Tracking', 'Gesture Recognition'],
        accent: '#fff'
    }
]

export function PricingSection() {
    const [view, setView] = useState<'subs' | 'hw'>('subs')

    return (
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 relative z-10">
                
                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <span className="text-ui text-[#ff003c] tracking-[0.8em]">Investment Strategy</span>
                    <h2 className="text-h2 text-glow">
                        <Shuffle text="SECURE THE PROTOCOL" />
                    </h2>
                    <p className="max-w-3xl mx-auto text-body text-white/60 uppercase leading-relaxed font-bold">
                        Control does not have a price. It has a model. Choose your entry point into the sovereign ecosystem.
                    </p>
                </div>

                {/* View Switcher */}
                <div className="flex justify-center mb-24">
                    <div className="p-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full flex gap-2">
                        <button 
                            onClick={() => setView('subs')}
                            className={`px-10 py-4 rounded-full text-ui transition-all duration-300 ${view === 'subs' ? 'bg-primary text-background' : 'hover:bg-white/5 text-white/50'}`}
                        >
                            Subscription Ecosystem
                        </button>
                        <button 
                            onClick={() => setView('hw')}
                            className={`px-10 py-4 rounded-full text-ui transition-all duration-300 ${view === 'hw' ? 'bg-[#f0f] text-background' : 'hover:bg-white/5 text-white/50'}`}
                        >
                            Hardware Nucleus
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {(view === 'subs' ? SUBSCRIPTION_TIERS : HARDWARE_NUCLEUS).map((item: any) => (
                            <SpotlightCard 
                                key={item.title}
                                spotlightColor={item.color || 'rgba(255, 255, 255, 0.05)'}
                                className={`h-[700px] p-12 flex flex-col justify-between group relative border-white/5 hover:border-white/20 transition-all duration-500 bg-black/40 ${item.featured ? 'ring-4 ring-primary/30 ring-offset-8 ring-offset-background' : ''}`}
                            >
                                {item.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-6 py-2 rounded-full text-ui z-20 shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                                        Value Leader
                                    </div>
                                )}

                                <div className="space-y-10 relative z-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-start">
                                            <span className="text-ui opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: item.accent }}>
                                                {item.type || 'Sub_Node'}
                                            </span>
                                            {item.subtitle && (
                                                <span className="text-script text-white/40 text-2xl block leading-none">
                                                    {item.subtitle}
                                                </span>
                                            )}
                                        </div>
                                        <h3 className="text-h3 font-black group-hover:text-glow transition-all" style={{ color: item.accent }}>
                                            {item.title}
                                        </h3>
                                        <p className="text-ui text-white/50 leading-relaxed font-mono uppercase pt-2 tracking-widest">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="pt-8">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-mono font-black tracking-tighter">{item.price}</span>
                                            {item.period && <span className="text-ui opacity-40">{item.period}</span>}
                                        </div>
                                        <div className="h-px w-full bg-white/10 mt-8 mb-10" />
                                        
                                        <ul className="space-y-6">
                                            {item.features.map((f: string) => (
                                                <li key={f} className="flex items-start gap-4 text-ui text-white/60 lowercase tracking-widest leading-normal group-hover:text-white transition-colors normal-case">
                                                    <CheckIcon size={14} className="mt-1" style={{ color: item.accent }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <button className={`w-full py-5 rounded-2xl text-ui transition-all duration-500 relative overflow-hidden group/btn`}>
                                    <div className="absolute inset-0 bg-white/5 group-hover/btn:bg-white/10 transition-colors" />
                                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity blur-2xl" style={{ backgroundColor: item.accent + '30' }} />
                                    <span className="relative z-10 font-black">Initialize {view === 'subs' ? 'Access' : 'Secure'}</span>
                                </button>
                            </SpotlightCard>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Footer Insight */}
                <div className="mt-24 flex flex-col items-center">
                    <div className="h-px w-32 bg-[#ff003c] mb-12" />
                    <p className="text-script text-5xl text-white/20 text-center max-w-2xl leading-tight">
                        "Full-stack. Sovereign. Built for the physical world."
                    </p>
                    <div className="mt-12 flex gap-16 opacity-30">
                         <div className="flex flex-col items-center">
                             <span className="text-ui opacity-50 mb-1">Status</span>
                             <span className="text-ui font-black">READY TO DEPLOY</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <span className="text-ui opacity-50 mb-1">Target</span>
                             <span className="text-ui font-black">GLOBAL_SCALING</span>
                         </div>
                         <div className="flex flex-col items-center">
                             <span className="text-ui opacity-50 mb-1">Auth</span>
                             <span className="text-ui font-black">HXTP_CERTIFIED</span>
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
