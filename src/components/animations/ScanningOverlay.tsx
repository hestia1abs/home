'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { hexString, intNoise, rangeNoise } from '@/lib/deterministic'

export function ScanningOverlay() {
    const strips = useMemo(
        () =>
            Array.from({ length: 5 }, (_, index) => ({
                id: `strip-${index}`,
                x: `${rangeNoise(index * 8 + 1, 5, 90)}%`,
                duration: rangeNoise(index * 8 + 2, 10, 20),
                delay: index * 2,
                label: `${hexString(index * 8 + 3, 6)} | IP 192.168.1.${intNoise(index * 8 + 4, 10, 240)}`
            })),
        []
    )

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
            {/* Moving Scanning Line */}
            <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)] z-10"
            />

            {/* Random Floating Data Strips */}
            {strips.map((strip) => (
                <motion.div
                    key={strip.id}
                    initial={{ opacity: 0, x: strip.x }}
                    animate={{ 
                        opacity: [0, 0.5, 0],
                        y: ['0vh', '100vh']
                    }}
                    transition={{ 
                        duration: strip.duration, 
                        repeat: Infinity, 
                        delay: strip.delay
                    }}
                    className="absolute top-0 text-[10px] font-mono text-cyan-500/40 whitespace-nowrap"
                >
                    {strip.label}
                </motion.div>
            ))}

            {/* Corner Targeting Brackets */}
            <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-cyan-400/20" />
            <div className="absolute top-10 right-10 w-20 h-20 border-r-2 border-t-2 border-cyan-400/20" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-l-2 border-b-2 border-cyan-400/20" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-cyan-400/20" />
        </div>
    )
}
