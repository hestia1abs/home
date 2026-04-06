'use client'


const ArrowIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export function CTASection() {
    return (
        <section id="cta" className="py-20 md:py-32 relative overflow-hidden px-6">
            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="glass-panel relative overflow-hidden rounded-[40px] border-primary/20 bg-black/40 p-8 shadow-[0_0_160px_rgba(34,211,238,0.12)] md:p-12 xl:p-16">
                    {/* Background abstract visual */}
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(183,255,255,0.1),transparent_70%)]" />
                    <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
                    <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full" />

                    <div className="relative z-10 grid grid-cols-1 gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
                        <div className="max-w-4xl space-y-8">
                            <span className="text-ui text-primary tracking-[1em] font-black uppercase">Get in touch</span>
                            <h2 className="text-h2 max-w-[14ch] select-none leading-tight text-white">
                                Build the next layer of real-world intelligence.
                            </h2>
                            <p className="max-w-2xl text-body leading-relaxed text-white/60">
                                If you are working on private infrastructure, residential systems, or hardware-aware AI experiences, we would love to hear what you are building.
                            </p>
                        </div>

                        <div className="w-full max-w-2xl xl:ml-auto">
                            <div className="flex flex-col gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Enter your work email" 
                                    className="w-full rounded-2xl border-2 border-white/10 bg-white/5 px-6 py-5 text-left text-ui font-black tracking-[0.3em] placeholder:opacity-35 focus:border-primary/50 focus:outline-none transition-all"
                                />
                                <button className="group flex items-center justify-center gap-4 rounded-2xl bg-primary px-8 py-5 text-ui font-black uppercase tracking-widest text-background transition-all hover:scale-[1.01] active:scale-95">
                                     Request Access
                                     <ArrowIcon size={20} className="transition-transform group-hover:translate-x-2" />
                                </button>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-white/45">
                                For product pilots, hardware partnerships, and early deployments, write to us directly at contact@hestialabs.in.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 pt-12 flex flex-col items-center gap-6 md:pt-14">
                        <div className="flex -space-x-4 md:-space-x-6">
                             {[1,2,3,4,5,6].map(i => (
                                <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-zinc-900 text-ui font-black shadow-xl md:h-16 md:w-16">
                                    {String.fromCharCode(65 + i)}
                                </div>
                             ))}
                        </div>
                        <p className="text-ui font-black tracking-[0.35em] text-primary/40 text-center">
                             Active conversations across residential, hardware, and systems design teams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
