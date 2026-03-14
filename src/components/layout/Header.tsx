'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'

const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Technology', href: '/technology' },
    { name: 'Developers', href: '/developers' },
]

export function Header() {
    const pathname = usePathname()
    const { user } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Track scroll position for hide on scroll and transparent state
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Hide on scroll down, show on scroll up
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

    // Close menu on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (isOpen && !target.closest('header')) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    return (
        <header className={cn(
            "sticky top-0 z-40 w-full transition-all duration-500",
            visible ? "translate-y-0" : "-translate-y-full",
            scrolled
                ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                : "border-b border-transparent bg-transparent"
        )}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 w-full">
                <Link href="https://hestialabs.in" className="flex items-center gap-3 flex-shrink-0">
                    <Image
                        src="/logo_black.png"
                        alt="Hestia Labs"
                        width={128}
                        height={128}
                        className="h-16 w-auto object-contain"
                        priority
                    />
                    <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold uppercase tracking-widest text-foreground">Hestia</span>
                        <span className="text-xs font-bold uppercase tracking-widest bg-gradient-to-b from-white to-blue-500 bg-clip-text text-transparent">Labs</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 ml-auto">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm uppercase tracking-wide transition-colors",
                                    pathname === item.href
                                        ? "text-foreground font-bold"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <a
                            href="mailto:contact@hestialabs.in"
                            className="rounded-none border border-foreground px-4 py-2 text-sm uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors"
                        >
                            Contact
                        </a>
                        {!mounted ? (
                            <div className="w-[100px] h-[36px] bg-muted animate-pulse"></div>
                        ) : user ? (
                            <Link href={
                                typeof window !== 'undefined' && window.location.hostname.includes('admin')
                                    ? '/admin'
                                    : typeof window !== 'undefined' && window.location.hostname.includes('cloud')
                                        ? '/dashboard'
                                        : "https://cloud.hestialabs.in/dashboard"
                            }>
                                <div className="flex items-center justify-center bg-foreground text-background px-4 py-2 text-sm font-bold uppercase tracking-widest cursor-pointer hover:shadow-lg transition-all duration-300">
                                    {typeof window !== 'undefined' && window.location.hostname.includes('admin') ? 'Control Panel' : 'Dashboard'}
                                </div>
                            </Link>
                        ) : (
                            <Link href={typeof window !== 'undefined' && window.location.hostname.includes('auth') ? '/signin' : "https://auth.hestialabs.in"}>
                                <div className="flex items-center justify-center bg-foreground text-background px-4 py-2 text-sm font-bold uppercase tracking-widest cursor-pointer hover:shadow-lg transition-all duration-300">
                                    Login
                                </div>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex h-10 w-10 items-center justify-center md:hidden flex-shrink-0"
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

            {/* Mobile Drawer - Full viewport overlay */}
            <div
                className={cn(
                    "fixed inset-0 top-[73px] z-50 w-screen max-w-full transition-all duration-500 ease-in-out md:hidden",
                    isOpen
                        ? "translate-x-0 opacity-100 pointer-events-auto"
                        : "translate-x-full opacity-0 pointer-events-none"
                )}
                style={{
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(12px)',
                    transformStyle: 'preserve-3d',
                }}
                role="navigation"
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <div className="flex flex-col p-6 gap-8 min-h-full">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-3xl font-bold uppercase tracking-tighter transition-all duration-300 relative group text-foreground",
                                pathname === item.href
                                    ? "font-bold"
                                    : "opacity-90 hover:opacity-100"
                            )}
                            style={{
                                transform: isOpen ? 'translateZ(0px)' : 'translateZ(-20px)',
                                transition: 'color 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <div className="mt-auto flex flex-col gap-6 pb-12 space-y-4">
                        <a
                            href="mailto:contact@hestialabs.in"
                            className="flex h-14 items-center justify-center border border-foreground text-sm uppercase tracking-widest font-bold rounded-none hover:bg-foreground hover:text-background transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                            style={{
                                transform: isOpen ? 'translateZ(10px)' : 'translateZ(-20px)',
                                transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            Contact Us
                        </a>
                        {!mounted ? (
                            <div className="h-14 w-full bg-muted animate-pulse"></div>
                        ) : user ? (
                            <Link
                                href={
                                    typeof window !== 'undefined' && window.location.hostname.includes('admin')
                                        ? '/admin'
                                        : typeof window !== 'undefined' && window.location.hostname.includes('cloud')
                                            ? '/dashboard'
                                            : "https://cloud.hestialabs.in/dashboard"
                                }
                                className="flex h-14 items-center justify-center bg-foreground text-background rounded-none cursor-pointer hover:shadow-lg transition-all duration-300 text-sm font-bold uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    transform: isOpen ? 'translateZ(10px)' : 'translateZ(-20px)',
                                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                                }}
                            >
                                {typeof window !== 'undefined' && window.location.hostname.includes('admin') ? 'Control Panel' : 'Dashboard'}
                            </Link>
                        ) : (
                            <Link
                                href={typeof window !== 'undefined' && window.location.hostname.includes('auth') ? '/signin' : "https://auth.hestialabs.in"}
                                className="flex h-14 items-center justify-center bg-foreground text-background rounded-none cursor-pointer hover:shadow-lg transition-all duration-300 text-sm font-bold uppercase tracking-widest"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    transform: isOpen ? 'translateZ(10px)' : 'translateZ(-20px)',
                                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                                }}
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}