'use client'

import React, { useRef, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}

export function SpotlightCard({ children, className, spotlightColor = 'rgba(34, 211, 238, 0.15)' }: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  const rotateX = useSpring(useTransform(mouseY, [0, 400], [2, -2]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [0, 600], [-2, 2]), { stiffness: 300, damping: 30 })

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={cn(
        "group relative glass-panel rounded-3xl overflow-hidden border border-white/5 transition-colors",
        className
      )}
    >
      {/* Dynamic Cursor Light Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
          ),
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>

      {/* Futuristic Hover Glow */}
      <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
    </motion.div>
  )
}
