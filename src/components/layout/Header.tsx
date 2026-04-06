'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'
import { MagneticLink } from '@/components/layout/MagneticLink'

const navItems = [
    { name: 'Overview', href: '#vision' },
    { name: 'Architecture', href: '#platform' },
    { name: 'Intelligence', href: '#entities' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
]


export function Header() {
    const { user } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0)
        return () => clearTimeout(timer)
    }, [])

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false)
            } else {
                setVisible(true)
            }
            setLastScrollY(currentScrollY)
            setScrolled(currentScrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    // Active section tracking
    useEffect(() => {
        const sectionIds = navItems.map(item => item.href.replace('#', ''))
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-30% 0px -60% 0px' }
        )

        sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    // Disable scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)'
        } else {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0'
        }
        return () => {
            document.body.style.overflow = 'unset'
            document.body.style.paddingRight = '0'
        }
    }, [isOpen])

    // Close menu on ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Smooth scroll to section
    const scrollToSection = useCallback((href: string) => {
        setIsOpen(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }, [])

    return (
        <header className={cn(
            "sticky top-0 z-40 w-full transition-all duration-500",
            visible ? "translate-y-0" : "-translate-y-full",
            scrolled
                ? "border-b border-border bg-background/95 backdrop-blur-xl"
                : "border-b border-transparent bg-transparent"
        )}>
            <nav className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-4 md:py-5">
                <Link
                    href="/"
                    className="flex items-center gap-4 flex-shrink-0 group"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                >
                    <Image
                        src="/logo.png"
                        alt="Hestia Labs"
                        width={160}
                        height={160}
                        className="h-10 w-auto object-contain brightness-110 transition-transform duration-500 group-hover:scale-105 md:h-12"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="text-ui text-foreground font-black tracking-[0.2em] -mb-1">Hestia</span>
                        <span className="text-[10px] font-black uppercase tracking-[0.35em] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Embodied Systems Lab</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 ml-auto">
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
                        {navItems.map((item) => (
                            <MagneticLink
                                key={item.href}
                                href={item.href}
                                onClick={() => scrollToSection(item.href)}
                                active={activeSection === item.href.replace('#', '')}
                                className="text-ui"
                            >
                                {item.name}
                            </MagneticLink>
                        ))}
                        
                        <div className="w-px h-6 bg-border/50 mx-4" />

                        <MagneticLink
                            href="mailto:contact@hestialabs.in"
                            className="text-ui"
                        >
                            Contact
                        </MagneticLink>
                        
                        {!mounted ? (
                            <div className="w-[120px] h-[44px] bg-muted animate-pulse rounded-full"></div>
                        ) : user ? (
                            <Link href="https://cloud.hestialabs.in/dashboard">
                                <MagneticLink href="/dashboard" active={false} className="text-ui">
                                    Dashboard
                                </MagneticLink>
                            </Link>
                        ) : (
                            <Link href="https://auth.hestialabs.in/signin">
                                <button className="rounded-full bg-white px-6 py-3 text-ui font-black text-black transition-all hover:scale-105 active:scale-95">
                                    Sign In
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <div className="relative h-4 w-6">
                            <span className={cn(
                                "absolute left-0 block h-0.5 w-6 bg-foreground transition-all duration-300",
                                isOpen ? "top-2 rotate-45" : "top-0"
                            )} />
                            <span className={cn(
                                "absolute left-0 top-2 block h-0.5 w-6 bg-foreground transition-all duration-300",
                                isOpen && "opacity-0"
                            )} />
                            <span className={cn(
                                "absolute left-0 block h-0.5 w-6 bg-foreground transition-all duration-300",
                                isOpen ? "top-2 -rotate-45" : "top-4"
                            )} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={cn(
                    "fixed inset-0 top-[73px] z-50 w-screen max-w-full transition-all duration-500 ease-in-out lg:hidden",
                    isOpen
                        ? "translate-x-0 opacity-100 pointer-events-auto"
                        : "translate-x-full opacity-0 pointer-events-none"
                )}
                style={{
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(12px)',
                }}
                role="dialog"
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <div className="flex flex-col p-6 gap-8 min-h-full">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className={cn(
                                "text-3xl font-bold uppercase tracking-tighter transition-all duration-300 text-left relative group text-foreground",
                                activeSection === item.href.replace('#', '') ? "font-bold" : "opacity-90 hover:opacity-100"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                    <div className="mt-auto flex flex-col gap-6 pb-12 space-y-4">
                        <a
                            href="mailto:contact@hestialabs.in"
                            className="flex h-14 items-center justify-center rounded-2xl border border-foreground text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-foreground hover:text-background"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </a>
                        {!mounted ? (
                            <div className="h-14 w-full bg-muted animate-pulse"></div>
                        ) : user ? (
                            <Link
                                href="https://cloud.hestialabs.in/dashboard"
                                className="flex h-14 cursor-pointer items-center justify-center rounded-2xl bg-foreground text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="https://auth.hestialabs.in/signin"
                                className="flex h-14 items-center justify-center bg-foreground text-background rounded-none cursor-pointer hover:shadow-lg transition-all duration-300 text-sm font-bold uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
