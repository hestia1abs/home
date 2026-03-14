'use client'

import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { motion, Variants } from 'framer-motion'

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

export default function ProductsPage() {
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
                                Products
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] text-glow"
                        >
                            The Nervous System
                            <br />
                            Kara and Mark
                            <br />
                            <span className="text-muted-foreground/30">Need to Exist.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="max-w-xl text-xl md:text-2xl text-muted-foreground leading-relaxed"
                        >
                            Intelligence needs infrastructure. These are the physical systems that let
                            cloud intelligence interact with your world.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── HX47 ───────────────────── */}
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
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-6">
                                Flagship Device
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none"
                        >
                            HX47
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug max-w-2xl">
                            Where Kara and Mark live.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Full AI execution on a custom PCB. Voice processing, environmental sensing,
                            device orchestration. All in a unit smaller than your palm.
                        </motion.p>

                        <motion.div
                            variants={stagger}
                            className="space-y-6 pt-8"
                        >
                            {[
                                'Custom ESP32-S3 SoC',
                                'Multi-sensor array',
                                'Voice + NLP pipeline',
                                'Encrypted hardware comms',
                                'Sub-50ms response time',
                            ].map((spec) => (
                                <motion.div key={spec} variants={fadeUp} className="flex items-center gap-4">
                                    <div className="w-8 h-px bg-primary/40 shadow-[0_0_8px_hsl(var(--primary)/0.3)]" />
                                    <span className="text-lg text-foreground/70">{spec}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── Helix Gateway ───────────────────── */}
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
                                Coming Next
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none"
                        >
                            Helix Gateway
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-2xl md:text-3xl font-semibold leading-snug max-w-2xl">
                            The brain of your environment.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Coordinates multiple nodes. Runs local AI inference. Manages mesh networking.
                            The sovereign control point for everything in your space.
                        </motion.p>

                        <motion.div
                            variants={stagger}
                            className="space-y-6 pt-8"
                        >
                            {[
                                'Multi-node orchestration',
                                'Local model inference',
                                'Mesh networking',
                                'Offline-first architecture',
                                'Expandable hardware modules',
                            ].map((spec) => (
                                <motion.div key={spec} variants={fadeUp} className="flex items-center gap-4">
                                    <div className="w-8 h-px bg-muted-foreground/20" />
                                    <span className="text-lg text-muted-foreground/60">{spec}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── Pricing ───────────────────── */}
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
                                How We Sustain This
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            No Ads. No Data Selling.
                            <br />
                            <span className="text-muted-foreground/30">Ever.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Hardware sales and intelligence subscriptions.
                            Your data stays yours. We make money by building things you actually want.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-24"
                    >
                        {[
                            { tier: 'Free', price: '$0', desc: 'Local-only execution. Your hardware, your intelligence. No cloud required.' },
                            { tier: 'Pro', price: '$9/mo', desc: 'Cloud intelligence, remote access, advanced AI models, priority updates.' },
                            { tier: 'Enterprise', price: 'Custom', desc: 'Dedicated infrastructure, custom AI training, SLA guarantees.' },
                        ].map((plan) => (
                            <motion.div key={plan.tier} variants={fadeUp} className="space-y-4">
                                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                                    {plan.tier}
                                </div>
                                <div className="text-5xl md:text-6xl font-bold tracking-tighter">{plan.price}</div>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">{plan.desc}</p>
                            </motion.div>
                        ))}
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
                        Be Among the First.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="text-xl text-muted-foreground max-w-md mx-auto"
                    >
                        The HX47 is in pre-order. Limited first batch for early builders.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="flex items-center justify-center gap-6"
                    >
                        <Link
                            href="/auth/signup"
                            className="group inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-7 py-3.5 text-sm uppercase font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300"
                        >
                            Join the Waitlist
                            <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="/platform"
                            className="text-sm uppercase font-bold tracking-wide text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
                        >
                            See the Platform
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}