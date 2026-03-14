'use client'

import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { useEffect, Suspense } from 'react'
import { motion, Variants } from 'framer-motion'
import dynamic from 'next/dynamic'
import { EntityCard } from '@/components/home/EntityCard'
import { WorldGrid } from '@/components/home/WorldGrid'
import { ShiftCompare } from '@/components/home/ShiftCompare'

const HeroScene = dynamic(() => import('@/components/home/HeroScene').then(mod => mod.HeroScene), { ssr: false })

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


export default function Home() {

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <main className="min-h-screen bg-background w-full overflow-x-hidden">

            {/* ───────────────────── Section 1: Cinematic Hero ───────────────────── */}
            <section className="relative min-h-[90vh] overflow-hidden hero-gradient flex items-center">
                <div className="absolute inset-0 bg-grid opacity-[0.03]" />

                <div className="relative z-20 w-full mx-auto max-w-7xl px-4 pt-4 pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Left: Text */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            animate="visible"
                            className="space-y-8 text-left"
                        >
                            <motion.div variants={fadeUp}>
                                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/40 mb-6">
                                    Something is being built.
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9] max-w-3xl text-glow">
                                    The Moment
                                    <br />
                                    Intelligence Learned
                                    <br />
                                    <span className="text-muted-foreground/70">to Act.</span>
                                </h1>
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <p className="max-w-lg text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    Meet <strong className="text-foreground">Kara</strong> and <strong className="text-foreground">Mark</strong> — cloud intelligences designed to interact with machines, not just answer questions.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <div className="flex flex-col gap-4 pt-2 items-start">
                                    <Link
                                        href="/platform"
                                        className="group inline-flex w-fit items-center gap-3 border border-foreground bg-foreground text-background px-7 py-3.5 uppercase text-sm font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300"
                                    >
                                        See What&apos;s Coming
                                        <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </Link>
                                    <p className="text-sm text-muted-foreground/50">Current AI answers questions. Ours executes actions.</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: 3D Models */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        >
                            <Suspense fallback={<div className="h-[400px] md:h-[550px] lg:h-[650px] w-full bg-background flex items-center justify-center" />}>
                                <HeroScene />
                            </Suspense>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ───────────────────── Section 2: The Shift ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-4xl px-6 text-center space-y-10">
                    <motion.h2
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[0.9]"
                    >
                        Intelligence Should Not
                        <br />
                        <span className="text-muted-foreground/40">Live in Chat Boxes.</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        It should control lighting. Run machines. Read sensors. Manage devices. Operate homes.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto"
                    >
                        Current AI answers questions. Ours executes actions.
                    </motion.p>
                </div>
            </section>

            {/* ───────────────────── Section 3: Meet the Intelligence ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-6xl px-6 space-y-32">

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="text-center space-y-4"
                    >
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                            The Entities
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none text-glow">
                            Meet Kara and Mark.
                        </h2>
                    </motion.div>

                    {/* Kara */}
                    <EntityCard
                        name="Kara"
                        traits="Calm. Analytical. Strategic."
                        description="Kara processes complex environments and makes decisions that keep systems running at peak efficiency. She doesn't guess. She knows."
                        modelUrl="/assets/kara.glb"
                    />

                    {/* Mark */}
                    <EntityCard
                        name="Mark"
                        traits="Curious. Adaptive. Explorer."
                        description="Mark navigates unfamiliar systems, learns their behavior, and finds the optimal path forward. He doesn't wait for instructions. He discovers."
                        modelUrl="/assets/mark.glb"
                        reversed
                    />
                </div>
            </section>

            {/* ───────────────────── Section 4: The World They Touch ───────────────────── */}
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
                            One Intelligence Layer.
                            <br />
                            <span className="text-muted-foreground/40">Infinite Applications.</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-muted-foreground text-xl max-w-xl mx-auto"
                        >
                            From your home to your factory floor.
                        </motion.p>
                    </motion.div>

                    <WorldGrid />
                </div>
            </section>

            {/* ───────────────────── Section 5: Old vs New ───────────────────── */}
            <section className="py-32 md:py-48">
                <div className="mx-auto max-w-5xl px-6 space-y-24">
                    <ShiftCompare />

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                        className="text-center text-2xl md:text-3xl font-semibold text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed"
                    >
                        We didn&apos;t build another chatbot.
                        <br />
                        <span className="text-foreground">We built the execution layer for reality.</span>
                    </motion.p>
                </div>
            </section>

            {/* ───────────────────── Section 6: Final CTA ───────────────────── */}
            <section className="py-32 md:py-48 relative overflow-hidden">
                <div className="absolute inset-0 hero-gradient opacity-50" />

                <div className="relative z-10 mx-auto max-w-3xl px-6 text-center space-y-12">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="space-y-6"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] text-glow"
                        >
                            Builders Wanted.
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
                        >
                            If you&apos;ve been waiting for AI to stop talking and start doing — this is it.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-60px' }}
                    >
                        <Link
                            href="/products"
                            className="group inline-flex items-center gap-3 border border-foreground bg-foreground text-background px-8 py-4 uppercase text-sm font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300"
                        >
                            Join the Wave
                            <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-8 pt-8"
                    >
                        <Link href="/about" className="text-xs uppercase tracking-widest text-muted-foreground/40 hover:text-foreground transition-colors duration-300">
                            The Story
                        </Link>
                        <span className="w-px h-3 bg-muted-foreground/10" />
                        <Link href="/careers" className="text-xs uppercase tracking-widest text-muted-foreground/40 hover:text-foreground transition-colors duration-300">
                            Join the Team
                        </Link>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}