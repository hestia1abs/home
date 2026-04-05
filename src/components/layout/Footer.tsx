import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="py-32 relative overflow-hidden mt-auto border-t border-white/5 bg-black/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020204]/80 pointer-events-none" />
            <div className="mx-auto max-w-[1800px] px-6 relative z-10">
                <div className="grid grid-cols-1 gap-20 md:grid-cols-4 mb-24">
                    {/* Column 1: Logo + Statement */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-baseline gap-1 group">
                            <Image
                                src="/logo_h.png"
                                alt="Hestia Labs"
                                width={120}
                                height={120}
                                className="h-40 w-auto object-contain brightness-125 group-hover:scale-105 transition-transform duration-500"
                            />
                        </Link>
                        <p className="text-ui text-white/50 max-w-sm leading-relaxed uppercase tracking-wider font-bold">
                            Something is being built. For homes. For presence.
                            For intelligence that feels alive.
                        </p>
                    </div>

                    {/* Column 2: Platform */}
                    <div className="space-y-8">
                        <h4 className="text-ui font-black uppercase tracking-[0.4em] text-primary">Platform</h4>
                        <ul className="space-y-4 text-ui text-white/40 uppercase tracking-widest font-bold">
                            <li><a href="#platform" className="hover:text-primary transition-colors">Overview</a></li>
                            <li><a href="#technology" className="hover:text-primary transition-colors">Technology</a></li>
                            <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Developers */}
                    <div className="space-y-8">
                        <h4 className="text-ui font-black uppercase tracking-[0.4em] text-primary">Developers</h4>
                        <ul className="space-y-4 text-ui text-white/40 uppercase tracking-widest font-bold">
                            <li><a href="#technology" className="hover:text-primary transition-colors">Get Started</a></li>
                            <li><a href="#technology" className="hover:text-primary transition-colors">Documentation</a></li>
                            <li><a href="#applications" className="hover:text-primary transition-colors">Use Cases</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="space-y-8">
                        <h4 className="text-ui font-black uppercase tracking-[0.4em] text-primary">Company</h4>
                        <ul className="space-y-4 text-ui text-white/40 uppercase tracking-widest font-bold">
                            <li><a href="#vision" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="mailto:contact@hestialabs.in" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-ui text-white/30 uppercase tracking-[0.2em]">© 2026 Hestia Labs. Sovereign Intelligence Protocol.</p>
                    <div className="flex gap-12 text-ui text-white/30 uppercase tracking-[0.2em]">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy & Data</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
            
            {/* Ambient Red Glow */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </footer>
    )
}
