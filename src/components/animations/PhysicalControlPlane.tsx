'use client'

import { motion } from 'framer-motion'

const devices = [
    { id: 'sensors', label: 'Sensors', x: 20, y: 24, accent: 'rgba(94, 234, 212, 0.95)' },
    { id: 'climate', label: 'Climate', x: 82, y: 22, accent: 'rgba(125, 211, 252, 0.95)' },
    { id: 'lighting', label: 'Lighting', x: 16, y: 74, accent: 'rgba(129, 140, 248, 0.95)' },
    { id: 'access', label: 'Access', x: 78, y: 78, accent: 'rgba(192, 132, 252, 0.95)' },
]

const core = { x: 50, y: 50 }

const flows = devices.map((device, index) => ({
    ...device,
    delay: index * 0.45,
    duration: 3.8 + index * 0.3,
}))

export function PhysicalControlPlane() {
    return (
        <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_45%),linear-gradient(180deg,rgba(9,15,24,0.95),rgba(4,8,15,0.92))]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />

            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                    <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
                        <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                    </radialGradient>
                </defs>

                <circle cx={core.x} cy={core.y} r="22" fill="url(#coreGlow)" opacity="0.75" />

                {flows.map(flow => (
                    <g key={flow.id}>
                        <line
                            x1={flow.x}
                            y1={flow.y}
                            x2={core.x}
                            y2={core.y}
                            stroke="rgba(148,163,184,0.28)"
                            strokeWidth="0.55"
                        />
                        <motion.circle
                            r="0.85"
                            fill={flow.accent}
                            animate={{
                                cx: [flow.x, core.x, flow.x],
                                cy: [flow.y, core.y, flow.y],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: flow.duration,
                                repeat: Infinity,
                                repeatDelay: 0.6,
                                ease: 'linear',
                                delay: flow.delay,
                            }}
                        />
                    </g>
                ))}

                <motion.circle
                    cx={core.x}
                    cy={core.y}
                    r="8.5"
                    fill="rgba(15, 23, 42, 0.96)"
                    stroke="rgba(103, 232, 249, 0.5)"
                    strokeWidth="0.7"
                    animate={{
                        boxShadow: [
                            '0 0 0 rgba(34,211,238,0.0)',
                            '0 0 32px rgba(34,211,238,0.16)',
                            '0 0 0 rgba(34,211,238,0.0)',
                        ],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
            </svg>

            <div className="absolute inset-0">
                {devices.map((device, index) => (
                    <motion.div
                        key={device.id}
                        className="absolute w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-[0_18px_40px_rgba(2,6,23,0.38)] backdrop-blur-md"
                        style={{ left: `${device.x}%`, top: `${device.y}%` }}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: device.accent, boxShadow: `0 0 16px ${device.accent}` }} />
                            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">{device.label}</span>
                        </div>
                        <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/35">HxTP device endpoint</div>
                    </motion.div>
                ))}

                <motion.div
                    className="absolute left-1/2 top-1/2 w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[28px] border border-cyan-400/18 bg-slate-950/90 px-5 py-5 shadow-[0_24px_80px_rgba(34,211,238,0.16)] backdrop-blur-xl"
                    animate={{ scale: [1, 1.015, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="text-[10px] uppercase tracking-[0.35em] text-cyan-200/60">HxTP Control Plane</div>
                    <div className="mt-3 text-2xl font-semibold tracking-[0.08em] text-white">HX47 Core</div>
                    <div className="mt-3 space-y-2 text-[11px] uppercase tracking-[0.18em] text-white/50">
                        <div className="flex items-center justify-between">
                            <span>Policy</span>
                            <span className="text-cyan-200/80">Validated</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Safety</span>
                            <span className="text-cyan-200/80">Fail-closed</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span>Execution</span>
                            <span className="text-cyan-200/80">Local-first</span>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/8 bg-black/28 px-4 py-3 backdrop-blur-md">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-white/45">Device orchestration</span>
                    <span className="text-[10px] uppercase tracking-[0.28em] text-cyan-200/60">Signed flow • policy checks • deterministic execution</span>
                </div>
            </div>
        </div>
    )
}
