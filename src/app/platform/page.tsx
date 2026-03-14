'use client'

import { HugeiconsIcon } from '@hugeicons/react'
import {
  AlertCircleIcon,
  CloudIcon,
  Home01Icon,
  Shield01Icon,
  EnergyIcon,
  GlobalIcon,
  CpuIcon
} from '@hugeicons/core-free-icons'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'



export default function PlatformPage() {
  const [view, setView] = useState<'cloud' | 'local' | 'offline'>('cloud')

  return (
    <main className="min-h-screen bg-background">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}
      />

      {/* Hero Section */}
      <section className="relative z-10 border-b border-white/5 py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-5xl px-6 space-y-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block border border-foreground/30 px-4 py-2 text-[10px] uppercase tracking-[0.3em] font-bold">
              The Intelligence Layer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]">
              Cloud Intelligence.
              <br />
              Real-World
              <br />
              <span className="text-muted-foreground/50">Interaction.</span>
            </h1>
          </div>
          <p className="max-w-xl text-xl text-muted-foreground leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            A new computing layer where Kara and Mark operate — executing actions across physical systems with secure, instant precision.
          </p>
        </div>
      </section>

      {/* Engineering Metrics */}
      <section className="relative z-10 border-b border-white/5 py-32 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
                How They
                <br />
                Operate
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-md">
              Kara and Mark don&apos;t lag. They execute at the speed of physical reality. These are the numbers that make intelligence feel alive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { val: '< 50ms', label: 'Command Speed', desc: 'Voice and button commands execute in your environment without cloud delay.', icon: EnergyIcon },
              { val: 'TLS 1.3', label: 'Encryption', desc: 'AES-256 for data at rest. All transit is encrypted end-to-end.', icon: Shield01Icon },
              { val: '99.97%', label: 'Environment Uptime', desc: 'Independent operation. Your system lives even when the net is down.', icon: Home01Icon },
              { val: '30s', label: 'Failover', desc: 'Automatic switch to local execution if cloud is unavailable.', icon: CloudIcon },
            ].map((metric) => (
              <div key={metric.label} className="space-y-6">
                <div className="h-px w-12 bg-foreground/20" />
                <div className="space-y-3">
                  <HugeiconsIcon icon={metric.icon} size={24} className="text-foreground/80" />
                  <div className="text-4xl font-bold tracking-tighter font-mono">{metric.val}</div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-foreground/80 mb-2">{metric.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{metric.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sovereign Architecture Flow */}
      <section className="relative z-10 py-24 md:py-32 bg-background overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative z-30">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-500">Where Kara & Mark Live</h3>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter leading-none">Secure By Design</h2>
            </div>
            <div className="flex bg-foreground/5 p-1 backdrop-blur-md rounded-full overflow-x-auto hide-scrollbar max-w-full z-40 relative">
              <button
                onClick={() => setView('cloud')}
                className={cn(
                  "px-4 md:px-6 py-2 text-[9px] md:text-[10px] whitespace-nowrap font-bold uppercase tracking-widest transition-all rounded-full flex-shrink-0",
                  view === 'cloud' ? "bg-foreground text-background shadow-[0_0_20px_rgba(59,130,246,0.3)]" : "hover:bg-foreground/10 text-muted-foreground"
                )}
              >
                Cloud
              </button>
              <button
                onClick={() => setView('local')}
                className={cn(
                  "px-4 md:px-6 py-2 text-[9px] md:text-[10px] whitespace-nowrap font-bold uppercase tracking-widest transition-all rounded-full flex-shrink-0",
                  view === 'local' ? "bg-foreground text-background shadow-[0_0_20px_rgba(34,197,94,0.3)]" : "hover:bg-foreground/10 text-muted-foreground"
                )}
              >
                Local AI
              </button>
              <button
                onClick={() => setView('offline')}
                className={cn(
                  "px-4 md:px-6 py-2 text-[9px] md:text-[10px] whitespace-nowrap font-bold uppercase tracking-widest transition-all rounded-full flex-shrink-0",
                  view === 'offline' ? "bg-foreground text-background shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "hover:bg-foreground/10 text-muted-foreground"
                )}
              >
                Offline
              </button>
            </div>
          </div>

          {/* Highly Responsive Flex Layout Container */}
          <div className="relative w-full min-h-[700px] flex flex-col xl:flex-row gap-8 items-center xl:items-stretch py-12">
            {/* Background Ambient Glows */}
            <div className={cn(
              "absolute inset-0 transition-opacity duration-1500 pointer-events-none opacity-20 blur-[100px]",
              view === 'cloud' ? "bg-purple-900/30" : view === 'local' ? "bg-green-900/30" : "bg-yellow-900/20"
            )} />

            {/* COLUMN 1: Interface (Helix Control) */}
            <div className="w-full xl:w-1/4 flex items-center justify-center order-3 xl:order-1 relative z-20">
              <motion.div
                layout
                className="flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-black/50 backdrop-blur-sm"
              >
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <DotLottieReact src="/assets/lotties/MobileApp.lottie" autoplay loop />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/80">Helix Control</h4>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-mono pt-2">Interface</p>
              </motion.div>
            </div>

            {/* COLUMN 2: The Core Stack (Cloud & Local Environments) */}
            <div className="w-full xl:w-2/4 flex flex-col gap-6 order-1 xl:order-2 relative z-20 h-[600px] xl:h-auto">
              {/* Cloud Envelope */}
              <div className={cn(
                "relative flex-1 rounded-3xl border transition-all duration-1000 p-6 flex flex-col",
                view === 'cloud'
                  ? "border-purple-500/30 bg-purple-500/5 shadow-[inset_0_0_50px_rgba(168,85,247,0.1)]"
                  : "border-blue-500/10 bg-blue-500/[0.02]"
              )}>
                <div className="flex items-center gap-2 text-muted-foreground/50 mb-auto">
                  <HugeiconsIcon icon={GlobalIcon} size={16} className={cn("", view !== 'cloud' ? "text-blue-400/50" : "text-purple-400/80")} />
                  <span className={cn(
                    "text-[10px] uppercase tracking-[0.3em] font-bold",
                    view !== 'cloud' ? "text-blue-400/40" : "text-purple-400/80"
                  )}>
                    Cloud Infrastructure
                  </span>
                </div>

                {/* Cloud Services (OTA/Sync) visible only when not in full cloud mode */}
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center gap-12 transition-all duration-1000",
                  view === 'cloud' ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
                )}>
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <DotLottieReact src="/assets/lotties/Download.lottie" autoplay loop />
                    </div>
                    <span className="text-[10px] text-blue-400/60 uppercase tracking-widest font-mono mt-2">Updates</span>
                  </div>
                  <div className={cn(
                    "flex flex-col items-center transition-all duration-1000",
                    view === 'offline' ? "opacity-20 blur-[1px]" : "opacity-100"
                  )}>
                    <div className="w-16 h-16 flex items-center justify-center">
                      <DotLottieReact src="/assets/lotties/CloudSyncDone.lottie" autoplay loop />
                    </div>
                    <span className="text-[10px] text-blue-400/60 uppercase tracking-widest font-mono mt-2">Sync</span>
                  </div>
                </div>
              </div>

              {/* Home Envelope */}
              <div className={cn(
                "relative flex-1 rounded-3xl border transition-all duration-1000 p-6 flex flex-col",
                view !== 'cloud'
                  ? "border-green-500/30 bg-green-500/5 shadow-[inset_0_0_50px_rgba(34,197,94,0.1)]"
                  : "border-green-500/10 bg-green-500/[0.02]"
              )}>
                <div className="flex items-center gap-2 mt-auto">
                  <HugeiconsIcon icon={Home01Icon} size={16} className={cn("text-green-500/50", view !== 'cloud' ? "text-green-400/80" : "")} />
                  <span className={cn(
                    "text-[10px] uppercase tracking-[0.3em] font-bold text-green-500/50",
                    view !== 'cloud' ? "text-green-400/80" : ""
                  )}>
                    Local Home Environment
                  </span>
                </div>
              </div>

              {/* THE CORE: HX47 + HxTP (This moves between the envelopes) */}
              <motion.div
                layout
                initial={false}
                animate={{
                  y: view === 'cloud' ? '-30%' : '30%', // Moves the core vertically between the two flex-1 boxes
                }}
                transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                className={cn(
                  "absolute top-1/2 left-8 right-8 xl:left-12 xl:right-12 -translate-y-1/2 flex items-center justify-around p-6 rounded-[32px] border backdrop-blur-md z-30 transition-all duration-1000",
                  view === 'cloud'
                    ? "bg-purple-900/20 border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.3)]"
                    : view === 'local'
                      ? "bg-green-900/20 border-green-500/40 shadow-[0_0_60px_rgba(34,197,94,0.3)]"
                      : "bg-yellow-900/10 border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.2)]"
                )}
              >
                {/* HX47 Module */}
                <div className={cn(
                  "flex flex-col items-center transition-all duration-1000",
                  view === 'offline' ? "opacity-30 blur-sm scale-90" : "opacity-100 scale-100"
                )}>
                  <div className="w-20 h-20 mb-2 relative flex items-center justify-center">
                    <DotLottieReact src="/assets/lotties/AILoopLoader.lottie" autoplay loop />
                  </div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-foreground">HX47</h4>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono pt-1">Intelligence</p>
                </div>

                {/* Flow Indicator */}
                <div className="hidden sm:flex flex-col items-center justify-center opacity-50">
                  <div className="flex gap-1 animate-pulse">
                    <div className={cn("w-1.5 h-1.5 rounded-full", view === 'cloud' ? "bg-purple-400" : view === 'local' ? "bg-green-400" : "bg-yellow-400")} />
                    <div className={cn("w-1.5 h-1.5 rounded-full animation-delay-200", view === 'cloud' ? "bg-purple-400" : view === 'local' ? "bg-green-400" : "bg-yellow-400")} />
                    <div className={cn("w-1.5 h-1.5 rounded-full animation-delay-400", view === 'cloud' ? "bg-purple-400" : view === 'local' ? "bg-green-400" : "bg-yellow-400")} />
                  </div>
                </div>

                {/* HxTP Module */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-6 mt-2 relative flex items-center justify-center">
                    {/* Nested Rings representing security */}
                    <div className={cn(
                      "absolute inset-[-12px] rounded-full border border-dashed animate-[spin_10s_linear_infinite] opacity-60",
                      view === 'cloud' ? "border-purple-400" : view === 'local' ? "border-green-400" : "border-yellow-400"
                    )} />
                    <div className={cn(
                      "absolute inset-[-4px] rounded-full border border-dotted animate-[spin_15s_linear_infinite_reverse] opacity-40",
                      view === 'cloud' ? "border-purple-300" : view === 'local' ? "border-green-300" : "border-yellow-300"
                    )} />
                    <DotLottieReact src="/assets/lotties/Fingerprintsuccess.lottie" autoplay loop />
                  </div>
                  <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-foreground">HxTP</h4>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono pt-1">Authority</p>
                </div>
              </motion.div>
            </div>

            {/* COLUMN 3: Execution Nodes */}
            <div className="w-full xl:w-1/4 flex flex-row xl:flex-col items-center justify-center gap-12 order-2 xl:order-3 relative z-20">
              <motion.div layout className="flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-black/50 backdrop-blur-sm w-full xl:w-auto">
                <div className={cn(
                  "w-16 h-16 mb-4 flex items-center justify-center transition-all duration-1000",
                  view === 'cloud' ? "scale-x-[-1]" : ""
                )}>
                  <DotLottieReact src="/assets/lotties/Lightbulb.lottie" autoplay loop />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">Smart Light</h4>
              </motion.div>

              <motion.div layout className="flex flex-col items-center p-6 rounded-2xl border border-white/5 bg-black/50 backdrop-blur-sm w-full xl:w-auto">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <DotLottieReact src="/assets/lotties/CeilingFan.lottie" autoplay loop />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/80">Smart Fan</h4>
              </motion.div>
            </div>

          </div>
          {/* End Responsive Layout Container */}

        </div>
      </section>

      {/* Architecture Explanations */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="text-cyan-500">
              <HugeiconsIcon icon={GlobalIcon} size={24} className="text-cyan-500" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Cloud Native</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When connected, Kara and Mark utilize the full power of Hestia&apos;s clustered GPU infrastructure for complex environmental analysis and predictive modeling, pushing optimized rules down to the edge.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-green-500">
              <HugeiconsIcon icon={CpuIcon} size={24} className="text-green-500" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Edge Execution</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The HX47 unit doesn&apos;t just route commands — it executes them locally. The HxTP protocol ensures that a command from a local switch to a local light never leaves the physical building.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-yellow-500">
              <HugeiconsIcon icon={AlertCircleIcon} size={24} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Air-Gapped Operation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sever the internet connection, and the system becomes deterministic. AI prediction pauses, but all authenticated devices, local commands, and physical schedules continue executing flawlessly.
            </p>
          </div>
        </div>
      </section>


    </main>
  )
}