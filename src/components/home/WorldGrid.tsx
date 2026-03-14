'use client'

import { HugeiconsIcon } from '@hugeicons/react'
import {
    Home01Icon,
    AiChat01Icon,
    Settings01Icon,
    EnergyIcon,
    ToolsIcon
} from '@hugeicons/core-free-icons'
import { motion, Variants } from 'framer-motion'

const domains = [
    { icon: Home01Icon, label: 'Homes', desc: 'Intelligence in your walls' },
    { icon: AiChat01Icon, label: 'Robots', desc: 'Systems that learn and move' },
    { icon: Settings01Icon, label: 'Machines', desc: 'Hardware that self-optimizes' },
    { icon: EnergyIcon, label: 'Energy', desc: 'Power that thinks ahead' },
    { icon: ToolsIcon, label: 'Tools', desc: 'Instruments with awareness' },
]

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
}

export function WorldGrid() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-12"
        >
            {domains.map((domain) => {
                return (
                    <motion.div
                        key={domain.label}
                        variants={itemVariants}
                        className="group flex flex-col items-center gap-5 text-center"
                    >
                        <HugeiconsIcon
                            icon={domain.icon}
                            size={40}
                            className="text-muted-foreground/30 group-hover:text-primary transition-colors duration-500"
                        />
                        <span className="text-sm font-bold uppercase tracking-[0.15em] text-foreground/70 group-hover:text-foreground transition-colors duration-500">
                            {domain.label}
                        </span>
                        <span className="text-xs text-muted-foreground/40">
                            {domain.desc}
                        </span>
                    </motion.div>
                )
            })}
        </motion.div>
    )
}
