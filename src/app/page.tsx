'use client'

import { HeroSection } from '@/components/sections/Hero'
import { VisionSection } from '@/components/sections/Vision'
import { PlatformSection } from '@/components/sections/Platform'
import { ProductsSection } from '@/components/sections/Products'
import { TechnologySection } from '@/components/sections/Technology'
import { ApplicationsSection } from '@/components/sections/Applications'
import { PricingSection } from '@/components/sections/Pricing'
import { CTASection } from '@/components/sections/CTA'

export default function Home() {
    return (
        <main className="min-h-screen text-foreground overflow-x-hidden scroll-smooth">
            <HeroSection />
            <VisionSection />
            <PlatformSection />
            <ProductsSection />
            <TechnologySection />
            <ApplicationsSection />
            <PricingSection />
            <CTASection />
        </main>
    )
}