'use client'

import { useMemo } from 'react'
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

export const HudScanner = () => {
    const frame = useCurrentFrame()
    const { width, height } = useVideoConfig()
    
    // Procedural data generation for the HUD readouts
    const hexCodes = useMemo(() => 
        Array.from({ length: 20 }, () => Math.random().toString(16).slice(2, 6).toUpperCase())
    , [])

    // Rotating elements
    const rotation = interpolate(frame, [0, 300], [0, 360])
    const pulseFade = Math.sin(frame / 5) * 0.5 + 0.5
    
    return (
        <div style={{ width, height, background: 'transparent' }} className="relative flex items-center justify-center overflow-hidden">
            {/* Background Data Streams */}
            <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-primary pointer-events-none select-none">
                {hexCodes.map((hex, i) => (
                    <div 
                        key={i} 
                        style={{ 
                            position: 'absolute', 
                            left: `${(i * 10) % 100}%`, 
                            top: `${(i * 20) % 100}%`,
                            opacity: (frame + i * 10) % 100 / 100
                        }}
                    >
                        {hex}
                    </div>
                ))}
            </div>

            {/* Circular HUD Elements */}
            <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="relative z-10">
                {/* Outer Ring */}
                <circle 
                    cx={width/2} cy={height/2} r={300} 
                    fill="none" stroke="rgba(34, 211, 238, 0.2)" 
                    strokeWidth="1" strokeDasharray="10 20"
                    style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
                />
                
                {/* Mid Ring with Scanning Segments */}
                <circle 
                    cx={width/2} cy={height/2} r={250} 
                    fill="none" stroke="rgba(168, 85, 247, 0.3)" 
                    strokeWidth="2" strokeDasharray="200 600"
                    style={{ transform: `rotate(${-rotation * 2}deg)`, transformOrigin: 'center' }}
                />

                {/* Inner Data Ring */}
                <circle 
                    cx={width/2} cy={height/2} r={180} 
                    fill="none" stroke="rgba(236, 72, 153, 0.4)" 
                    strokeWidth="10" strokeDasharray="1 10"
                    style={{ transform: `rotate(${rotation * 0.5}deg)`, transformOrigin: 'center' }}
                />

                {/* Scanning Laser Beam */}
                <line 
                    x1={width/2} y1={height/2} 
                    x2={width/2 + Math.cos(rotation * Math.PI / 180) * 350} 
                    y2={height/2 + Math.sin(rotation * Math.PI / 180) * 350}
                    stroke="rgba(34, 211, 238, 0.5)" 
                    strokeWidth="2"
                />

                {/* Crosshairs */}
                <g className="opacity-60">
                    <line x1={width/2 - 20} y1={height/2} x2={width/2 + 20} y2={height/2} stroke="#fff" strokeWidth="1" />
                    <line x1={width/2} y1={height/2 - 20} x2={width/2} y2={height/2 + 20} stroke="#fff" strokeWidth="1" />
                    <rect x={width/2 - 50} y={height/2 - 50} width="100" height="100" fill="none" stroke="#0ff" strokeWidth="1" strokeDasharray="5 5" />
                </g>

                {/* Tracking Annotations */}
                <text 
                    x={width/2 + 60} y={height/2 - 60} 
                    fill="#0ff" fontSize="12" fontFamily="monospace"
                    className="animate-pulse"
                >
                    [LOCKED: HX47_CORE]
                </text>
                <text 
                     x={width/2 - 200} y={height/2 + 180} 
                     fill="#ff003c" fontSize="10" fontFamily="monospace"
                >
                    TARGET_VERIFICATION: {pulseFade > 0.8 ? 'SUCCESS' : 'PENDING...'}
                </text>
            </svg>

            {/* Corner Text Overlays */}
            <div className="absolute top-20 left-20 border-l border-t border-primary/40 p-4 space-y-2">
                <div className="text-[10px] font-mono text-primary uppercase">Sys.Infiltration.Active</div>
                <div className="text-[12px] font-mono text-white font-bold">NODE_01_SCAN</div>
                <div className="w-16 h-[2px] bg-primary/20 overflow-hidden">
                    <div style={{ width: `${(frame % 30) / 30 * 100}%` }} className="h-full bg-primary" />
                </div>
            </div>

            <div className="absolute bottom-20 right-20 text-right border-r border-b border-accent/40 p-4">
                <div className="text-[10px] font-mono text-accent uppercase">Latency: 0.04ms</div>
                <div className="text-[12px] font-mono text-white font-bold uppercase">Entanglement_Live</div>
                <div className="flex gap-1 justify-end pt-2">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-1 h-4 bg-accent/40" style={{ height: Math.random() * 20 + 5 }} />
                    ))}
                </div>
            </div>
        </div>
    )
}
