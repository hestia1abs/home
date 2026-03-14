'use client'

import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { motion, Variants } from 'framer-motion'
import { EntityCard } from '@/components/home/EntityCard'

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

export default function AboutPage() {
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
                                The Origin
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] text-glow"
                        >
                            Why Intelligence
                            <br />
                            Should Not Live
                            <br />
                            <span className="text-muted-foreground/30">In Chat Boxes.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="max-w-xl text-xl md:text-2xl text-muted-foreground leading-relaxed"
                        >
                            Some ideas arrive fully formed. This one arrived as a feeling when we were kids — and never left.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── The Spark ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-4xl px-6 space-y-20">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30 mb-12">
                            The Spark
                        </div>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-12"
                    >
                        <motion.p variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight leading-snug">
                            Tony Stark walks into his lab.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            He talks to JARVIS. The house responds. Not with a robotic beep. With understanding.
                            It knows what he needs. It adjusts the systems. It thinks.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            We were kids watching that. We didn&apos;t know what machine learning was. We didn&apos;t know
                            embedded systems or signal processing or any of it.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug">
                            But we knew something: that shouldn&apos;t stay fiction.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── The Realization ───────────────────── */}
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
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30 mb-12">
                                The Realization
                            </div>
                        </motion.div>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            That image stayed with us. Through learning to solder. Through burning
                            firmware onto microcontrollers at 2 AM and watching LEDs respond to commands we actually wrote.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Through failed prototypes and rewritten protocols and the slow realization that
                            the world was building AI that <em className="text-foreground/80">talks</em> — when it should be building AI that <em className="text-foreground/80">acts</em>.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight leading-snug max-w-3xl">
                            So we decided to build it ourselves. From nothing. Hardware, software, everything.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── Meet the Entities ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-6xl px-6 space-y-32">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="text-center space-y-4"
                    >
                        <motion.div variants={fadeUp}>
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                                The Entities
                            </div>
                        </motion.div>
                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none text-glow"
                        >
                            Two Intelligences.
                            <br />
                            <span className="text-muted-foreground/30">One Mission.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-xl text-muted-foreground max-w-2xl mx-auto"
                        >
                            They weren&apos;t designed to chat. They were designed to interact with the physical world.
                        </motion.p>
                    </motion.div>

                    <EntityCard
                        name="Kara"
                        traits="Calm. Analytical. Strategic."
                        description="Kara processes complex environments and makes decisions that keep systems running at peak efficiency. She doesn't guess. She knows."
                        modelUrl="/assets/kara.glb"
                    />

                    <EntityCard
                        name="Mark"
                        traits="Curious. Adaptive. Explorer."
                        description="Mark navigates unfamiliar systems, learns their behavior, and finds the optimal path forward. He doesn't wait for instructions. He discovers."
                        modelUrl="/assets/mark.glb"
                        reversed
                    />
                </div>
            </section>

            {/* ───────────────────── The Future ───────────────────── */}
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
                                The Future
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            Built for the Next
                            <br />
                            <span className="text-muted-foreground/30">Twenty Years.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            We&apos;re not building for a launch. We&apos;re building for a future where intelligence
                            is as fundamental to physical infrastructure as electricity.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Kara and Mark are the beginning. The first entities in a system designed to grow,
                            learn, and adapt across environments — homes, factories, cities.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug">
                            We&apos;re building something that we ourselves want to live with.
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
                        Want to See
                        <br />
                        <span className="text-muted-foreground/30">Where This Goes?</span>
                    </motion.h2>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="flex items-center justify-center gap-6"
                    >
                        <Link
                            href="/products"
                            className="group inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-7 py-3.5 text-sm uppercase font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300"
                        >
                            Join the Wave
                            <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="/careers"
                            className="text-sm uppercase font-bold tracking-wide text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
                        >
                            Join the Team
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}