import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="bg-card py-12 border-t border-border mt-auto">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12">
                    {/* Column 1: Logo + Statement */}
                    <div className="space-y-4">
                        <Link href="https://hestialabs.in" className="flex items-baseline gap-1">
                            <Image
                                src="/logo_h.png"
                                alt="Hestia Labs"
                                width={100}
                                height={100}
                                className="h-32 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Something is being built. For homes. For presence.
                            For intelligence that feels alive.
                        </p>
                    </div>

                    {/* Column 2: Platform/Tech */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider">Platform</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="https://hestialabs.in/platform" className="hover:text-foreground transition-colors">Overview</Link></li>
                            <li><Link href="https://hestialabs.in/technology" className="hover:text-foreground transition-colors">Technology</Link></li>
                            <li><Link href="https://hestialabs.in/products" className="hover:text-foreground transition-colors">Products</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Docs/Devs */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider">Developers</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="https://hestialabs.in/developers" className="hover:text-foreground transition-colors">Get Started</Link></li>
                            <li><Link href="https://hestialabs.in/developers" className="hover:text-foreground transition-colors">Documentation</Link></li>
                            <li><Link href="https://hestialabs.in/developers" className="hover:text-foreground transition-colors">SDKs</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company/Support */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="https://hestialabs.in/about" className="hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="https://hestialabs.in/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
                            <li><a href="mailto:contact@hestialabs.in" className="hover:text-foreground transition-colors">Contact</a></li>
                            <li><a href="https://hestialabs.in/support" className="hover:text-foreground transition-colors">Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-xs text-muted-foreground">© 2026 Hestia Labs. All rights reserved.</p>
                    <div className="flex gap-6 text-xs text-muted-foreground mt-4 md:mt-0">
                        <Link href="https://hestialabs.in/privacy" className="hover:text-foreground transition-colors">Privacy & Data</Link>
                        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                        <Link href="https://hestialabs.in/privacy" className="hover:text-foreground transition-colors">Privacy & Data</Link>
                        <Link href="https://hestialabs.in/privacy/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <a href="#" className="hover:text-foreground transition-colors">Status</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
