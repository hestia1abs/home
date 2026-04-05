'use client'

import { HeroSection } from '@/components/sections/Hero'
import { VisionSection } from '@/components/sections/Vision'
import { EntitiesSection } from '@/components/sections/Entities'
import { PlatformSection } from '@/components/sections/Platform'
import { ProductsSection } from '@/components/sections/Products'
import { TechnologySection } from '@/components/sections/Technology'
import { ApplicationsSection } from '@/components/sections/Applications'
import { PricingSection } from '@/components/sections/Pricing'
import { CareersSection } from '@/components/sections/Careers'
import { CTASection } from '@/components/sections/CTA'

export default function Home() {
    return (
        <main className="min-h-screen text-foreground overflow-x-hidden scroll-smooth">
            <HeroSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-30">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <VisionSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <EntitiesSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <PlatformSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ProductsSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <TechnologySection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <ApplicationsSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <PricingSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CareersSection />

            <div className="mx-auto w-full max-w-[1800px] px-6 opacity-20">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>

            <CTASection />
        </main>
    )
}