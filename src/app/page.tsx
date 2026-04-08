'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/Hero'

const VisionSection = dynamic(() => import('@/components/sections/Vision').then(m => m.VisionSection))
const PlatformSection = dynamic(() => import('@/components/sections/Platform').then(m => m.PlatformSection))
const ProductsSection = dynamic(() => import('@/components/sections/Products').then(m => m.ProductsSection))
const TechnologySection = dynamic(() => import('@/components/sections/Technology').then(m => m.TechnologySection))
const ApplicationsSection = dynamic(() => import('@/components/sections/Applications').then(m => m.ApplicationsSection))
const PricingSection = dynamic(() => import('@/components/sections/Pricing').then(m => m.PricingSection))
const CTASection = dynamic(() => import('@/components/sections/CTA').then(m => m.CTASection))

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