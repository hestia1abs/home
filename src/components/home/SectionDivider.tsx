'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
    label: string
}

export function SectionDivider({ label }: SectionDividerProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="relative py-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent divider-glow" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background px-6 text-xs uppercase tracking-[0.3em] text-muted-foreground/40">
                        {label}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
