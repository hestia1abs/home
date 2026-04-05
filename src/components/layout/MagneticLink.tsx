'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'
import Shuffle from '@/components/animations/Shuffle'

interface MagneticLinkProps {
    children: string
    href: string
    onClick?: () => void
    active?: boolean
    className?: string
}

export function MagneticLink({ children, href, onClick, active, className }: MagneticLinkProps) {
    const triggerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const trigger = triggerRef.current
        if (!trigger) return

        const xTo = gsap.quickTo(trigger, "x", { duration: 0.3, ease: "power3.out" })
        const yTo = gsap.quickTo(trigger, "y", { duration: 0.3, ease: "power3.out" })

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { left, top, width, height } = trigger.getBoundingClientRect()
            const centerX = left + width / 2
            const centerY = top + height / 2
            
            // Magnetic pull calculation
            const distanceX = clientX - centerX
            const distanceY = clientY - centerY
            
            // Limit the pull to a reasonable range
            const pullStrength = 0.35 // 35% of distance
            xTo(distanceX * pullStrength)
            yTo(distanceY * pullStrength)
        }

        const handleMouseLeave = () => {
            xTo(0)
            yTo(0)
            setIsHovered(false)
        }

        const handleMouseEnter = () => {
            setIsHovered(true)
        }

        trigger.addEventListener('mousemove', handleMouseMove)
        trigger.addEventListener('mouseenter', handleMouseEnter)
        trigger.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            trigger.removeEventListener('mousemove', handleMouseMove)
            trigger.removeEventListener('mouseenter', handleMouseEnter)
            trigger.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div 
            ref={triggerRef}
            className={cn(
                "relative py-2 px-4 cursor-pointer group transition-colors duration-300",
                active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                className
            )}
            onClick={onClick}
        >
            <Shuffle 
                text={children}
                className="text-xs font-bold uppercase tracking-widest pointer-events-none"
                triggerOnHover={true}
                shuffleTimes={1}
                duration={0.3}
            />
            {/* Active Indicator */}
            <div className={cn(
                "absolute -bottom-1 left-4 right-4 h-px bg-primary scale-x-0 transition-transform duration-500 origin-left",
                (active || isHovered) && "scale-x-100"
            )} />
            
            {/* Micro-glitch particles on hover */}
            {isHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400 animate-[shimmer_1s_infinite]" />
                </div>
            )}
        </div>
    )
}
