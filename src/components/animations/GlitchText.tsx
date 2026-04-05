'use client'

import  { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlitchTextProps {
    text: string
    className?: string
    intensity?: number
}

export function GlitchText({ text, className, intensity = 0.5 }: GlitchTextProps) {
    const [glitch, setGlitch] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() < 0.1 * intensity) {
                setGlitch(true)
                setTimeout(() => setGlitch(false), 100)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [intensity])

    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{text}</span>
            
            {glitch && (
                <>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0], x: [-2, 2, -1] }}
                        className="absolute top-0 left-0 text-[#0ff] z-0 opacity-50 select-none mix-blend-screen"
                    >
                        {text}
                    </motion.span>
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0], x: [2, -2, 1] }}
                        className="absolute top-0 left-0 text-[#f0f] z-0 opacity-50 select-none mix-blend-screen"
                    >
                        {text}
                    </motion.span>
                </>
            )}
        </span>
    )
}
