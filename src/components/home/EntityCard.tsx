'use client'

import { Suspense, useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import * as THREE from 'three'
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'

function EntityModel({ url, active }: { url: string; active: boolean }) {
    const group = useRef<THREE.Group>(null)
    const { scene, animations } = useGLTF(url)
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { actions, names } = useAnimations(animations, group)

    useFrame((state) => {
        if (!active || !group.current) return

        const t = state.clock.getElapsedTime()
        group.current.rotation.y = Math.sin(t * 0.45) * 0.28
        group.current.rotation.x = Math.cos(t * 0.25) * 0.04
        group.current.position.y = -1 + Math.sin(t * 0.8) * 0.12
    })

    useEffect(() => {
        const primaryAction = names.length > 0 ? actions[names[0]] : undefined
        if (!primaryAction) return

        if (active) {
            primaryAction.reset().fadeIn(0.5).play()
        } else {
            primaryAction.fadeOut(0.25)
        }

        return () => {
            primaryAction.stop()
        }
    }, [actions, active, names])

    return (
        <group ref={group}>
            <primitive object={clone} scale={1.8} position={[0, -1, 0]} />
        </group>
    )
}

interface EntityCardProps {
    name: string
    traits: string
    description: string
    modelUrl: string
    reversed?: boolean
    className?: string
}

export function EntityCard({ name, traits, description, modelUrl, reversed = false, className }: EntityCardProps) {
    const cardRef = useRef<HTMLDivElement>(null)
    const inView = useInView(cardRef, { amount: 0.2 })
    const reduceMotion = useReducedMotion()
    const showInfo = Boolean(traits || description)
    const isStandalone = !showInfo
    const animateModel = inView && !reduceMotion

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={className || `grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${reversed ? 'lg:direction-rtl' : ''}`}
        >
            <div className={`relative h-full w-full ${isStandalone ? '' : reversed ? 'h-[350px] md:h-[450px] lg:order-2' : 'h-[350px] md:h-[450px] lg:order-1'}`}>
                <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,rgba(6,10,18,0.98),rgba(2,5,12,0.94))] shadow-[0_30px_90px_rgba(2,6,23,0.28)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.08),transparent_32%),linear-gradient(90deg,rgba(34,211,238,0.05),transparent_45%,rgba(168,85,247,0.06))]" />
                    <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

                    {inView && (
                        <Canvas
                            dpr={[0.75, 1.1]}
                            gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
                            camera={{ position: [0, 0.35, 6], fov: 32 }}
                            frameloop={animateModel ? 'always' : 'demand'}
                        >
                            <ambientLight intensity={1.25} />
                            <directionalLight position={[3, 6, 5]} intensity={1.4} color="#dff9ff" />
                            <pointLight position={[-4, 0, 3]} intensity={18} distance={16} color="#22d3ee" />
                            <pointLight position={[4, 1, 2]} intensity={10} distance={12} color="#a855f7" />
                            <Suspense fallback={null}>
                                <EntityModel url={modelUrl} active={animateModel} />
                            </Suspense>
                        </Canvas>
                    )}
                </div>
            </div>

            {!isStandalone && (
                <div className={`space-y-6 ${reversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/50">
                        Entity
                    </div>
                    <h3 className="text-5xl font-bold uppercase tracking-tighter md:text-6xl">
                        {name}
                    </h3>
                    <div className="text-sm font-bold uppercase tracking-widest text-primary">
                        {traits}
                    </div>
                    <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>
            )}
        </motion.div>
    )
}

useGLTF.preload('/assets/kara.glb')
useGLTF.preload('/assets/mark.glb')
