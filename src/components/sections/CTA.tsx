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
                <div className="glass-panel rounded-[80px] p-24 md:p-40 flex flex-col items-center text-center gap-16 border-primary/20 shadow-[0_0_200px_rgba(34,211,238,0.2)] relative overflow-hidden bg-black/40">
                    {/* Background abstract visual */}
                    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(183,255,255,0.1),transparent_70%)]" />
                    <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
                    <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full" />

                    <div className="space-y-10 relative z-10 w-full max-w-5xl">
                        <span className="text-ui text-primary tracking-[1em] font-black uppercase">Nexus Access</span>
                        <h2 className="text-h1 mb-6 select-none leading-tight">
                            The Era of <span className="text-primary italic">Agency</span>
                        </h2>
                        <p className="max-w-3xl mx-auto text-body text-white/60 leading-relaxed uppercase font-bold">
                            Stop asking questions. Start executing actions. Join the waitlist for the HX47 private beta and the first release of HxTP.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 relative z-10 w-full max-w-2xl mt-8">
                        <input 
                            type="email" 
                            placeholder="Enter your research email" 
                            className="flex-1 bg-white/5 border-2 border-white/10 rounded-3xl px-10 py-6 text-ui font-black uppercase tracking-widest placeholder:opacity-30 focus:outline-none focus:border-primary/50 transition-all text-center lg:text-left"
                        />
                        <button className="bg-primary text-background px-12 py-6 rounded-3xl text-ui font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
                             JOIN BETA
                             <ArrowIcon size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="relative z-10 pt-16 flex flex-col items-center gap-6">
                        <div className="flex -space-x-6">
                             {[1,2,3,4,5,6].map(i => (
                                <div key={i} className="w-16 h-16 rounded-full border-4 border-background bg-zinc-900 flex items-center justify-center text-ui font-black shadow-xl">
                                    {String.fromCharCode(65 + i)}
                                </div>
                             ))}
                        </div>
                        <p className="text-ui font-black tracking-[0.4em] text-primary/40">
                             4,209 Units in Queue // Bengaluru Labs
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
