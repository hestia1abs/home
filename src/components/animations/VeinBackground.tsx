'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

function rangeNoise(seed: number, min: number, max: number) {
    const x = Math.sin(seed) * 10000
    return Math.floor((x - Math.floor(x)) * (max - min) + min)
}

export function VeinBackground() {
    const tendrils = useMemo(
        () =>
            Array.from({ length: 8 }, (_, index) => ({
                id: `tendril-${index}`,
                d: `M${200 + index * 100} ${rangeNoise(index * 10 + 1, 300, 700)}Q${rangeNoise(index * 10 + 2, 400, 600)} 500 ${rangeNoise(index * 10 + 3, 500, 600)} ${rangeNoise(index * 10 + 4, 500, 600)}`,
                duration: rangeNoise(index * 10 + 5, 5, 10),
                delay: index * 0.5
            })),
        []
    )

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main Veins */}
                <motion.path
                    d="M-50 500C100 400 300 600 500 500S900 400 1050 500"
                    stroke="#ff003c"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M500 -50C400 100 600 300 500 500S400 900 500 1050"
                    stroke="#ff003c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
                
                {/* Branching Tendrils */}
                {tendrils.map((tendril) => (
                    <motion.path
                        key={tendril.id}
                        d={tendril.d}
                        stroke="#ff003c"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 0.2, 0] }}
                        transition={{ 
                            duration: tendril.duration, 
                            repeat: Infinity, 
                            ease: "easeInOut", 
                            delay: tendril.delay
                        }}
                    />
                ))}

                {/* Pulsing Nodes */}
                <motion.circle
                    cx="500"
                    cy="500"
                    r="4"
                    fill="#ff003c"
                    animate={{ r: [4, 8, 4], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>
            
            {/* Ambient Red Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff003c]/10 blur-[120px] rounded-full animate-pulse" />
        </div>
    )
}
