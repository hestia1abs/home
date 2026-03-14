'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
}

const stagger: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
}

interface PageHeroProps {
    badge: string
    heading: ReactNode
    subtitle: string | ReactNode
    className?: string
}

export function PageHero({ badge, heading, subtitle, className = '' }: PageHeroProps) {
    return (
        <section className={`border-b border-border py-24 md:py-32 ${className}`}>
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    <motion.div variants={fadeUp}>
                        <div className="inline-block border border-foreground/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] font-bold">
                            {badge}
                        </div>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] max-w-4xl text-glow">
                            {heading}
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <div className="max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {subtitle}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
