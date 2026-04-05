'use client'

import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Float, useAnimations } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useMemo } from 'react'
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'

function EntityModel({ url }: { url: string }) {
    const group = useRef<THREE.Group>(null)
    const { scene, animations } = useGLTF(url)
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { actions, names } = useAnimations(animations, group)

    useFrame((_, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.5
        }
    })

    useEffect(() => {
        if (names.length > 0 && actions[names[0]]) {
            actions[names[0]]?.reset().fadeIn(0.5).play()
        }
    }, [actions, names])

    return (
        <primitive ref={group} object={clone} scale={2.0} position={[0, -1, 0]} />
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
    const isStandalone = !name

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={className || `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reversed ? 'lg:direction-rtl' : ''}`}
        >
            {/* 3D Model Viewer */}
            <div className={`w-full h-full relative ${isStandalone ? '' : reversed ? 'lg:order-2 h-[350px] md:h-[450px]' : 'lg:order-1 h-[350px] md:h-[450px]'}`}>
                <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
                    <Suspense fallback={null}>
                        <Stage
                            intensity={0.4}
                            environment="city"
                            shadows={{ type: 'contact', opacity: 0.15, blur: 3 }}
                            adjustCamera={false}
                        >
                            <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.4} floatingRange={[-0.15, 0.15]}>
                                <EntityModel url={modelUrl} />
                            </Float>
                        </Stage>
                    </Suspense>
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        enableRotate={false}
                    />
                </Canvas>
            </div>

            {/* Info */}
            {!isStandalone && (
                <div className={`space-y-6 ${reversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/50">
                        Entity
                    </div>
                    <h3 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter">
                        {name}
                    </h3>
                    <div className="text-sm font-bold uppercase tracking-widest text-primary">
                        {traits}
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        {description}
                    </p>
                </div>
            )}
        </motion.div>
    )
}
