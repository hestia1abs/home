'use client'

import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';
import { motion, Variants } from 'framer-motion'
import { WorldGrid } from '@/components/home/WorldGrid'

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

export default function DevelopersPage() {
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
                                For Builders
                            </div>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] text-glow"
                        >
                            Build Systems Where
                            <br />
                            Intelligence Meets
                            <br />
                            <span className="text-muted-foreground/30">Hardware.</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="max-w-xl text-xl md:text-2xl text-muted-foreground leading-relaxed"
                        >
                            Not another API wrapper. A platform where AI interacts with the physical world —
                            and you decide what it builds.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── Connect Hardware ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-4xl px-6 space-y-12">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-6">
                            <span className="text-6xl md:text-7xl font-bold text-foreground/5 font-mono">01</span>
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                                Connect Hardware
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            Plug Your Devices
                            <br />
                            <span className="text-muted-foreground/30">Into Intelligence.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Helix Nodes bridge the gap between your physical devices and the intelligence layer.
                            Plug in. Power on. Done.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── Intelligence Layer ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-4xl px-6 space-y-12">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-6">
                            <span className="text-6xl md:text-7xl font-bold text-foreground/5 font-mono">02</span>
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                                Intelligence Processes
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            Kara and Mark
                            <br />
                            <span className="text-muted-foreground/30">Analyze Everything.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            They analyze your environment, understand context, and make decisions —
                            not based on rules you wrote, but on patterns they learned.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── Actions Execute ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-4xl px-6 space-y-12">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-6">
                            <span className="text-6xl md:text-7xl font-bold text-foreground/5 font-mono">03</span>
                            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                                Actions Execute
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            Commands Become
                            <br />
                            <span className="text-muted-foreground/30">Physical Actions.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                            Sub-50ms from cloud to device. Lights dim. Motors spin. Valves open.
                            Intelligence becomes action.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* ───────────────────── What You Can Build ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-5xl px-6 space-y-20">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="text-center space-y-6"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            What You Can Build.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-xl text-muted-foreground max-w-xl mx-auto"
                        >
                            One intelligence layer. Infinite applications.
                        </motion.p>
                    </motion.div>

                    <WorldGrid />
                </div>
            </section>

            {/* ───────────────────── Promise to Developers ───────────────────── */}
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
                                Our Promise
                            </div>
                        </motion.div>

                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none"
                        >
                            What We Promise
                            <br />
                            <span className="text-muted-foreground/30">Builders.</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="space-y-20"
                    >
                        {[
                            { title: 'Works Without the Cloud', desc: 'Your systems function offline. The cloud enhances — it never controls.' },
                            { title: 'Security Is the Default', desc: 'Encrypted communication. Authenticated devices. Logged actions. You don\'t enable security — you\'d have to disable it.' },
                            { title: 'One Interface. Everywhere.', desc: 'Mobile, desktop, embedded. Same API. Same guarantees. Build once, deploy anywhere.' },
                        ].map((item) => (
                            <motion.div key={item.title} variants={fadeUp} className="space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">{item.title}</h3>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
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
                        Want Early Access?
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="text-xl text-muted-foreground max-w-md mx-auto"
                    >
                        SDKs and platform docs are in active development.
                        Get in early and help shape the experience.
                    </motion.p>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <motion.div variants={fadeUp}>
                            <Link href="/products" className="group inline-flex items-center gap-2 border border-foreground bg-foreground text-background px-7 py-3.5 text-sm uppercase font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300">
                                Get Hardware
                                <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                            <Link href="/platform" className="text-sm uppercase font-bold tracking-wide text-muted-foreground/50 hover:text-foreground transition-colors duration-300">
                                See the Platform
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}