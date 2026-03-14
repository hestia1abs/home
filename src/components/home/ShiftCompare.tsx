'use client'

import { motion, Variants } from 'framer-motion'

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
}

export function ShiftCompare() {
    return (
        <div className="space-y-32">
            {/* Old Internet */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="max-w-3xl mx-auto space-y-8"
            >
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground/30">
                    Yesterday
                </div>
                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-muted-foreground/20 leading-none">
                    The Old Internet
                </h3>
                <div className="space-y-4 pl-1">
                    {['Information', 'Search results', 'Chatbots', 'AI that talks'].map((item) => (
                        <div key={item} className="flex items-center gap-4">
                            <div className="w-8 h-px bg-muted-foreground/15" />
                            <span className="text-lg text-muted-foreground/30">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* New Internet */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="max-w-3xl mx-auto space-y-8"
            >
                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60">
                    Now
                </div>
                <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-glow">
                    The New Internet
                </h3>
                <div className="space-y-4 pl-1">
                    {['Intelligence', 'Execution', 'Control', 'AI that acts'].map((item) => (
                        <div key={item} className="flex items-center gap-4">
                            <div className="w-8 h-px bg-primary/40 shadow-[0_0_8px_hsl(var(--primary)/0.3)]" />
                            <span className="text-lg text-foreground/80">{item}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
