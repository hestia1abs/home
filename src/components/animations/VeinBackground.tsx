'use client'

import { motion } from 'framer-motion'

export function VeinBackground() {
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
                {[...Array(8)].map((_, i) => (
                    <motion.path
                        key={i}
                        d={`M${200 + i * 100} ${300 + Math.random() * 400}Q${400 + Math.random() * 200} ${500} ${500 + Math.random() * 100} ${500 + Math.random() * 100}`}
                        stroke="#ff003c"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: [0, 0.2, 0] }}
                        transition={{ 
                            duration: 5 + Math.random() * 5, 
                            repeat: Infinity, 
                            ease: "easeInOut", 
                            delay: i * 0.5 
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
