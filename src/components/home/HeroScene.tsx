'use client'

import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Float, useAnimations, useProgress } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'

function EntityModel({ url, position, scale }: { url: string; position: [number, number, number]; scale: number }) {
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
        <primitive
            ref={group}
            object={clone}
            scale={scale}
            position={position}
        />
    )
}

function LoadingOverlay() {
    const { progress } = useProgress()
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        if (progress === 100) {
            const t = setTimeout(() => setHidden(true), 600)
            return () => clearTimeout(t)
        }
    }, [progress])

    if (hidden) return null

    return (
        <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out"
            style={{
                opacity: progress === 100 ? 0 : 1,
                pointerEvents: progress === 100 ? 'none' : 'auto',
            }}
        >
            <div className="w-48 h-1 bg-white/5 overflow-hidden mt-4 rounded-full">
                <div
                    className="h-full bg-primary shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-500 ease-[cubic-bezier(0.1,0.9,0.2,1)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40 mt-6 animate-pulse">
                Starting Avatars [{Math.round(progress)}%]
            </p>
        </div>
    )
}

export function HeroScene() {
    return (
        <div className="w-full h-[400px] md:h-[550px] lg:h-[650px] relative">
            <Canvas shadows camera={{ position: [0, 0, 14], fov: 45 }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <Stage
                        intensity={0.4}
                        environment="city"
                        shadows={{ type: 'contact', opacity: 0.15, blur: 3 }}
                        adjustCamera={false}
                    >
                        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4} floatingRange={[-0.15, 0.15]}>
                            <EntityModel url="/assets/kara.glb" position={[-2.5, -1, 0]} scale={1.8} />
                        </Float>
                        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3} floatingRange={[-0.1, 0.2]}>
                            <EntityModel url="/assets/mark.glb" position={[2.5, -1, 0]} scale={1.8} />
                        </Float>
                    </Stage>
                </Suspense>
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />
            </Canvas>
            <LoadingOverlay />
        </div>
    )
}

useGLTF.preload('/assets/kara.glb')
useGLTF.preload('/assets/mark.glb')
