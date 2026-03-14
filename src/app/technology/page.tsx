'use client'

import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { motion, Variants } from 'framer-motion'
import { ShiftCompare } from '@/components/home/ShiftCompare'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* ───────────────────── Hero ───────────────────── */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                The Vision
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] text-glow"
            >
              AI Used to Answer
              <br />
              Questions.
              <br />
              <span className="text-muted-foreground/30">Now It Runs Systems.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Every generation of the internet changed what we could do. This one changes what intelligence can do — in the physical world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── The Shift ───────────────────── */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-5xl px-6 space-y-24">
          <ShiftCompare />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center text-2xl md:text-4xl font-bold tracking-tight max-w-3xl mx-auto leading-snug"
          >
            We didn&apos;t build another chatbot.
            <br />
            <span className="text-muted-foreground/40">We built the execution layer for reality.</span>
          </motion.p>
        </div>
      </section>

      {/* ───────────────────── The Intelligence Layer ───────────────────── */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30 mb-6">
                The Intelligence Layer
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none"
            >
              Kara and Mark.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Two cloud intelligences that don&apos;t generate text. They generate action.
              They see your environment. They understand your systems. They make decisions
              that affect the physical world.
            </motion.p>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Kara is strategic. She optimizes, predicts, and maintains.
              Mark is explorative. He navigates, learns, and discovers.
            </motion.p>

            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug">
              Together, they are the first intelligence layer that operates reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── The Physical World ───────────────────── */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-4xl px-6 space-y-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30 mb-6">
                The Physical World
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
            >
              Where Intelligence
              <br />
              <span className="text-muted-foreground/30">Meets Matter.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-16"
          >
            {[
              { label: 'Homes', text: 'Lights respond. Climate adapts. Security watches. Not because you programmed rules — because intelligence understood what you need.' },
              { label: 'Machines', text: 'Industrial equipment that self-monitors, self-reports, and self-optimizes. No more scheduled maintenance. Just intelligence that knows.' },
              { label: 'Robots', text: 'Autonomous systems that navigate unfamiliar space, learn obstacles, and coordinate with each other. No pre-mapped paths.' },
              { label: 'Energy', text: 'Power systems that predict demand before it happens. Load balancing that thinks in real-time. Waste becomes a relic.' },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{item.label}</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── The Execution ───────────────────── */}
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-4xl px-6 space-y-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-12"
          >
            <motion.div variants={fadeUp}>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30 mb-6">
                The Execution
              </div>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
            >
              Intelligence Becomes
              <br />
              <span className="text-muted-foreground/30">Action.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Sub-50ms latency. Encrypted from device to cloud. Works offline.
              Commands don&apos;t travel through five APIs and three third-party services.
              They flow directly from intelligence to hardware.
            </motion.p>

            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Lights dim. Motors spin. Valves open. Sensors report.
            </motion.p>

            <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug">
              The gap between thought and action disappears.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────── CTA ───────────────────── */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center space-y-12">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] text-glow"
          >
            The Future Is Being Built.
            <br />
            <span className="text-muted-foreground/30">Right Now.</span>
          </motion.h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <motion.div variants={fadeUp}>
              <Link href="/platform" className="group inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-7 py-3.5 text-sm uppercase font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300">
                See the Platform
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link href="/developers" className="text-sm uppercase font-bold tracking-wide text-muted-foreground/50 hover:text-foreground transition-colors duration-300">
                Build With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}