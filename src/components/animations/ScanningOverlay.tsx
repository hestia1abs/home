'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { hexString, intNoise, rangeNoise } from '@/lib/deterministic'

export function ScanningOverlay() {
    const strips = useMemo(
        () =>
            Array.from({ length: 4 }, (_, index) => ({
                id: `strip-${index}`,
                x: `${rangeNoise(index * 8 + 1, 8, 88)}%`,
                duration: rangeNoise(index * 8 + 2, 12, 20),
                delay: index * 2.4,
                label: `${hexString(index * 8 + 3, 6)} | IP 192.168.1.${intNoise(index * 8 + 4, 10, 240)}`
            })),
        []
    )

    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30">
            <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 z-10 h-px w-full bg-cyan-400/80 shadow-[0_0_12px_rgba(0,255,255,0.5)]"
            />

            {strips.map((strip) => (
                <motion.div
                    key={strip.id}
                    initial={{ opacity: 0, x: strip.x }}
                    animate={{ opacity: [0, 0.45, 0], y: ['0vh', '100vh'] }}
                    transition={{ duration: strip.duration, repeat: Infinity, delay: strip.delay, ease: 'linear' }}
                    className="absolute top-0 whitespace-nowrap text-[10px] font-mono text-cyan-500/35"
                >
                    {strip.label}
                </motion.div>
            ))}

            <div className="absolute left-10 top-10 h-20 w-20 border-l-2 border-t-2 border-cyan-400/15" />
            <div className="absolute right-10 top-10 h-20 w-20 border-r-2 border-t-2 border-cyan-400/15" />
            <div className="absolute bottom-10 left-10 h-20 w-20 border-b-2 border-l-2 border-cyan-400/15" />
            <div className="absolute bottom-10 right-10 h-20 w-20 border-b-2 border-r-2 border-cyan-400/15" />
        </div>
    )
}
