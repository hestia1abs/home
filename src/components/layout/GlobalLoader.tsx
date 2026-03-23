'use client';

import { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function GlobalLoader() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // When the route changes, start the loader
        const initTimeout = setTimeout(() => {
            setIsLoading(true);
            setProgress(10); // Start with a small progress
        }, 0);

        // Fast start
        const startTimeout = setTimeout(() => setProgress(20), 50);

        // Steady middle
        const midTimeout = setTimeout(() => setProgress(70), 300);

        // Slow end (waiting for actual load to finish)
        const slowTimeout = setTimeout(() => setProgress(90), 800);

        // Very slow finish if it takes long
        const verySlowTimeout = setTimeout(() => setProgress(95), 3000);

        // Complete the loader after a short delay to allow the new page to render
        const finishTimeout = setTimeout(() => {
            setProgress(100);
            setTimeout(() => setIsLoading(false), 300); // fade out duration
        }, 1200);

        return () => {
            clearTimeout(initTimeout);
            clearTimeout(startTimeout);
            clearTimeout(midTimeout);
            clearTimeout(slowTimeout);
            clearTimeout(verySlowTimeout);
            clearTimeout(finishTimeout);
        };
    }, [pathname, searchParams]);

    if (!isLoading) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-[10000] pointer-events-none">
            <div
                className="h-1 bg-primary/80 shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-all ease-[cubic-bezier(0.1,0.9,0.2,1)] duration-300 origin-left"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
