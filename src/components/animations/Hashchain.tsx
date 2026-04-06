'use client'

import  { useMemo } from 'react'
import { useCurrentFrame, useVideoConfig, interpolate } from 'remotion'
import { hexString, unitNoise } from '@/lib/deterministic'

export const Hashchain = () => {
    const frame = useCurrentFrame()
    const { width, height } = useVideoConfig()
    
    // Generate static-ish blocks of hashes that will scroll
    const hashes = useMemo(() => 
        Array.from({ length: 50 }, (_, index) => ({
            id: `hash-${index}`,
            content: Array.from({ length: 8 }, (_, blockIndex) => hexString(index * 100 + blockIndex * 11, 4)).join(':'),
            status: unitNoise(index + 10) > 0.8 ? 'VERIFIED' : 'SYNCING'
        }))
    , [])

    const scrollY = interpolate(frame, [0, 600], [0, -1000])

    return (
        <div style={{ width, height, background: 'transparent' }} className="relative p-10 overflow-hidden font-mono">
            {/* Header */}
            <div className="flex justify-between items-end mb-8 border-b border-primary/20 pb-4">
                <div className="space-y-1">
                    <div className="text-[10px] text-primary uppercase font-black tracking-[0.4em]">Cryptographic_Hashchain</div>
                    <div className="text-[20px] text-white font-black uppercase">Immutable_Ledger_of_Truth</div>
                </div>
                <div className="text-right text-[10px] text-primary/60 uppercase">
                    Status: [LOCKED] <br/>
                    Blocks: 1,047,238
                </div>
            </div>

            {/* Scrolling Stream */}
            <div 
                 style={{ transform: `translateY(${scrollY}px)` }}
                 className="space-y-2"
            >
                {hashes.map((h, i) => (
                    <div key={i} className="flex gap-6 items-center group">
                        <div className="text-[10px] text-primary/40 font-mono">{(1047238 - i).toLocaleString()}</div>
                        <div className="text-[12px] font-mono font-bold text-white/50 tracking-widest flex-1 bg-white/5 p-2 border-l-2 border-primary/20 transition-all hover:bg-white/10 hover:border-primary">
                            {h.content.toUpperCase()}
                        </div>
                        <div className={`text-[8px] font-black uppercase px-2 py-0.5 rounded border ${h.status === 'VERIFIED' ? 'text-green-400 border-green-500/20 bg-green-500/5' : 'text-cyan-400 border-cyan-500/20 animate-pulse bg-cyan-500/5'}`}>
                             {h.status}
                        </div>
                    </div>
                ))}
            </div>

            {/* Overlays */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

            {/* Digital distortions */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                {[1,2,3].map(i => (
                    <div 
                        key={i} 
                        className="absolute h-[1px] w-full bg-primary" 
                        style={{ top: `${(frame * i * 1.5) % 100}%` }}
                    />
                ))}
            </div>
        </div>
    )
}
