'use client';

import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons';

export default function NotFound() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            router.push('/');
        }
    }, [countdown, router]);

    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Left: Animation */}
                <div className="flex-1 w-full aspect-square max-w-[500px]">
                    <DotLottieReact
                        src="/assets/lotties/Error404.lottie"
                        autoplay
                        loop
                    />
                </div>

                {/* Right: Content */}
                <div className="flex-1 text-center md:text-left space-y-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight">
                            A Glitch in <br />the Matrix
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                            Somebody ate my page. Try returning home before the system reboots.
                        </p>
                        <div className="inline-block border-b border-muted-foreground/30 pb-1">
                            <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-muted-foreground/50">
                                Automatic redirection in {countdown}s...
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3 border border-foreground bg-foreground text-background px-8 py-4 uppercase text-sm font-bold tracking-wide hover:bg-background hover:text-foreground transition-all duration-300"
                        >
                            Return to Homepage
                            <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}