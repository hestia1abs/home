import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="relative mt-auto overflow-hidden border-t border-white/5 bg-black/20 py-20 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020204]/80 pointer-events-none" />
            <div className="mx-auto max-w-[1800px] px-6 relative z-10">
                <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-16">
                    {/* Column 1: Logo + Statement */}
                    <div className="space-y-6">
                        <Link href="/" className="group flex items-baseline gap-1">
                            <Image
                                src="/logo_h.png"
                                alt="Hestia Labs"
                                width={120}
                                height={120}
                                className="h-20 w-auto object-contain brightness-125 transition-transform duration-500 group-hover:scale-[1.02] md:h-24"
                            />
                        </Link>
                        <p className="max-w-sm text-sm leading-7 text-white/55 md:text-base">
                            Hestia builds local-first intelligence systems for homes, spaces, and hardware environments where reliability, privacy, and real-world execution matter.
                        </p>
                        <a href="mailto:contact@hestialabs.in" className="inline-flex text-ui text-primary transition-colors hover:text-white">
                            contact@hestialabs.in
                        </a>
                    </div>

                    {/* Column 2: Platform */}
                    <div className="space-y-5">
                        <h4 className="text-ui font-black uppercase tracking-[0.4em] text-primary">Platform</h4>
                        <ul className="space-y-3 text-sm text-white/45 md:text-base">
                            <li><a href="#platform" className="hover:text-primary transition-colors">Overview</a></li>
                            <li><a href="#products" className="hover:text-primary transition-colors">Hardware</a></li>
                            <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="space-y-5">
                        <h4 className="text-ui font-black uppercase tracking-[0.4em] text-primary">Resources</h4>
                        <ul className="space-y-3 text-sm text-white/45 md:text-base">
                            <li><a href="#security" className="hover:text-primary transition-colors">Security</a></li>
                            <li><a href="#applications" className="hover:text-primary transition-colors">Use Cases</a></li>
                            <li><a href="#cta" className="hover:text-primary transition-colors">Request Access</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div className="space-y-5">
                        <h4 className="text-ui font-black uppercase tracking-[0.4em] text-primary">Company</h4>
                        <ul className="space-y-3 text-sm text-white/45 md:text-base">
                            <li><a href="#vision" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="mailto:contact@hestialabs.in" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:gap-8">
                    <p className="text-center text-ui text-white/30">© 2026 Hestia Labs. Local intelligence for the physical world.</p>
                    <div className="flex gap-8 text-ui text-white/30 md:gap-12">
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
