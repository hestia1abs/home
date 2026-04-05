'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {  Stars, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function WarpField() {
  const groupRef = useRef<THREE.Group>(null)
  const count = 200
  const lines = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 100
      ),
      speed: 0.5 + Math.random() * 2,
      length: 5 + Math.random() * 15,
      color: new THREE.Color().setHSL(0.5 + Math.random() * 0.1, 1, 0.5)
    }))
  }, [])

  useFrame((state, delta) => {
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
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
    </div>
  )
}
