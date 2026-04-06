'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {  Stars, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { rangeNoise } from '@/lib/deterministic'

function WarpField() {
  const groupRef = useRef<THREE.Group>(null)
  const count = 200
  const lines = useMemo(() => {
    return new Array(count).fill(0).map((_, index) => ({
      pos: new THREE.Vector3(
        rangeNoise(index * 10 + 1, -25, 25),
        rangeNoise(index * 10 + 2, -25, 25),
        rangeNoise(index * 10 + 3, -50, 50)
      ),
      speed: rangeNoise(index * 10 + 4, 0.5, 2.5),
      length: rangeNoise(index * 10 + 5, 5, 20),
      color: new THREE.Color().setHSL(rangeNoise(index * 10 + 6, 0.5, 0.6), 1, 0.5)
    }))
  }, [])

  useFrame((_state, delta) => {
    if (!groupRef.current) return
    groupRef.current.children.forEach((child, i) => {
      const line = lines[i]
      child.position.z += line.speed * 20 * delta
      if (child.position.z > 20) {
        child.position.z = -80
      }
    })
  })

  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <mesh key={i} position={line.pos}>
          <boxGeometry args={[0.05, 0.05, line.length]} />
          <meshBasicMaterial color={line.color} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

export function Hyperspeed() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020204] overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
        <ambientLight intensity={0.5} />
        <WarpField />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <fog attach="fog" args={['#020204', 10, 100]} />
      </Canvas>
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020204_100%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />
    </div>
  )
}
