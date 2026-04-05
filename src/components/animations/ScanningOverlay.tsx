'use client'

import { motion } from 'framer-motion'

export function ScanningOverlay() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
            {/* Moving Scanning Line */}
            <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)] z-10"
            />

            {/* Random Floating Data Strips */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: Math.random() * 100 + '%' }}
                    animate={{ 
                        opacity: [0, 0.5, 0],
                        y: ['0vh', '100vh']
                    }}
                    transition={{ 
                        duration: 10 + Math.random() * 10, 
                        repeat: Infinity, 
                        delay: i * 2 
                    }}
                    className="absolute top-0 text-[10px] font-mono text-cyan-500/40 whitespace-nowrap"
                >
                    {Math.random().toString(16).toUpperCase()} // IP: 192.168.1.{Math.floor(Math.random() * 255)}
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
