'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Line, Float } from '@react-three/drei'
import * as THREE from 'three'

function NodeGraph() {
    const pointsRef = useRef<THREE.Points>(null)
    const lineGroupRef = useRef<THREE.Group>(null)
    
    // Generate initial nodes
    const nodeCount = 40
    const nodes = useMemo(() => {
        const positions = new Float32Array(nodeCount * 3)
        const nodeData = []
        for (let i = 0; i < nodeCount; i++) {
            const x = (Math.random() - 0.5) * 10
            const y = (Math.random() - 0.5) * 10
            const z = (Math.random() - 0.5) * 5
            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z
            nodeData.push({
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                ),
                originalPos: new THREE.Vector3(x, y, z)
            })
        }
        return { positions, nodeData }
    }, [])

    useFrame((state, delta) => {
        if (!pointsRef.current || !lineGroupRef.current) return
        
        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
        
        // Update node positions
        for (let i = 0; i < nodeCount; i++) {
            const data = nodes.nodeData[i]
            
            // Wander around original position
            positions[i * 3] += data.velocity.x
            positions[i * 3 + 1] += data.velocity.y
            positions[i * 3 + 2] += data.velocity.z
            
            // Limit distance from origin
            const currentPos = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
            if (currentPos.distanceTo(data.originalPos) > 1) {
                data.velocity.multiplyScalar(-1)
            }
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true

        // Update lines (simplified: connect nodes if they are close)
        // For performance in a React-Three-Fiber context, we'll just have a few static-ish lines 
        // that pulse rather than calculating all pairs every frame.
    })

    // Pre-calculate some connections
    const connections = useMemo(() => {
        const lines = []
        for (let i = 0; i < nodeCount; i++) {
            // Each node connects to 1-2 neighbors
            const neighbors = 2
            for (let j = 0; j < neighbors; j++) {
                const targetIdx = Math.floor(Math.random() * nodeCount)
                if (targetIdx !== i) {
                    lines.push([i, targetIdx])
                }
            }
        }
        return lines
    }, [])

    return (
        <group>
            <Points ref={pointsRef} positions={nodes.positions} stride={3}>
                <PointMaterial
                    transparent
                    color="#22d3ee"
                    size={0.12}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
            
            <group ref={lineGroupRef}>
                {connections.map(([start, end], i) => (
                    <Connection 
                        key={i} 
                        startPos={[nodes.positions[start*3], nodes.positions[start*3+1], nodes.positions[start*3+2]]} 
                        endPos={[nodes.positions[end*3], nodes.positions[end*3+1], nodes.positions[end*3+2]]} 
                    />
                ))}
            </group>
        </group>
    )
}

function Connection({ startPos, endPos }: { startPos: [number, number, number], endPos: [number, number, number] }) {
    const lineRef = useRef<any>(null)
    
    useFrame((state) => {
        if (lineRef.current) {
            // Pulse opacity
            lineRef.current.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + Math.random()) * 0.1
        }
    })

    return (
        <Line
            ref={lineRef}
            points={[new THREE.Vector3(...startPos), new THREE.Vector3(...endPos)]}
            color="#22d3ee"
            lineWidth={0.5}
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
        />
    )
}

export function SovereignProtocol() {
    return (
        <div className="w-full h-full min-h-[200px] relative overflow-hidden bg-black/20 rounded-xl border border-white/5">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <NodeGraph />
                </Float>
                <fog attach="fog" args={['#000', 5, 20]} />
            </Canvas>
            
            {/* HUD Overlay */}
            <div className="absolute top-4 left-4 pointer-events-none">
                <div className="text-[8px] font-mono text-cyan-400 opacity-50 uppercase tracking-[0.2em] mb-1">HxTP Protocol Active</div>
                <div className="h-[1px] w-12 bg-cyan-500/30" />
            </div>
            
            <div className="absolute bottom-4 right-4 pointer-events-none text-right">
                <div className="text-[8px] font-mono text-cyan-400 opacity-50 uppercase tracking-[0.2em] mb-1">State: Synchronized</div>
                <div className="flex gap-1 justify-end">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-1 h-1 bg-cyan-500/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                </div>
            </div>
        </div>
    )
}
