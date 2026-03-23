'use client'

import { motion, Variants } from 'framer-motion'
import { PageHero } from '@/components/home/PageHero'
import { SectionDivider } from '@/components/home/SectionDivider'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const jobs = [
    {
        title: 'Embedded Systems Engineer',
        location: 'Bengaluru / Remote',
        type: 'Full-time',
        description: 'Design and build the firmware for next-generation home automation controllers.'
    },
    {
        title: 'Full Stack Developer (Next.js/Node.js)',
        location: 'Bengaluru / Remote',
        type: 'Full-time',
        description: 'Build premium dashboard experiences and real-time control systems.'
    },
    {
        title: 'AI/ML Research Engineer',
        location: 'Remote',
        type: 'Full-time',
        description: 'Work on Kara and Mark, our conversational hardware intelligence agents.'
    }
]

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            <PageHero
                badge="Careers"
                heading="Join the Future"
                subtitle="We're building the first cloud intelligence that can talk to hardware. Join us in making the world more interactive."
            />

            <SectionDivider label="Opportunities" />

            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {jobs.map((job, index) => (
                            <motion.div key={index} variants={item}>
                                <Card className="glass-card hover:glow-primary transition-all duration-500 overflow-hidden group">
                                    <CardContent className="p-8">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{job.type}</span>
                                                        <span className="w-1 h-1 rounded-full bg-border" />
                                                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{job.location}</span>
                                                    </div>
                                                    <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{job.title}</h3>
                                                </div>
                                                <p className="text-sm text-muted-foreground max-w-xl">
                                                    {job.description}
                                                </p>
                                            </div>
                                            <Button className="w-full md:w-auto text-[10px] uppercase tracking-widest h-12 px-8">
                                                Apply Now
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-24 p-12 glass-card text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                        <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Don&apos;t see a fit?</h2>
                        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
                            We&apos;re always looking for brilliant minds who are passionate about hardware and AI.
                        </p>
                        <Link href="mailto:careers@hestialabs.in">
                            <Button variant="outline" className="text-[10px] uppercase tracking-widest h-12 px-8">
                                Send Open Application
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}