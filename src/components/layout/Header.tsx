'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { MagneticLink } from '@/components/layout/Magnetic'

const navItems = [
    { name: 'Overview', href: '#vision' },
    { name: 'Architecture', href: '#platform' },
    { name: 'Hardware', href: '#products' },
    { name: 'Security', href: '#security' },
    { name: 'Offerings', href: '#offerings' },
]

export function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const lastScrollYRef = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
                setVisible(false)
            } else {
                setVisible(true)
            }

            lastScrollYRef.current = currentScrollY
            setScrolled(currentScrollY > 50)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const sectionIds = navItems.map((item) => item.href.replace('#', ''))
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { rootMargin: '-30% 0px -60% 0px' }
        )

        sectionIds.forEach((id) => {
            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [])

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

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const scrollToSection = useCallback(
        (href: string) => {
            setIsOpen(false)

            if (pathname !== '/') {
                window.location.href = `/${href}`
                return
            }

            const id = href.replace('#', '')
            const element = document.getElementById(id)

            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        },
        [pathname]
    )

    return (
        <header
            className={cn(
                'sticky top-0 z-40 w-full transition-all duration-500',
                visible ? 'translate-y-0' : '-translate-y-full',
                scrolled
                    ? 'border-b border-white/10 bg-background/90 backdrop-blur-xl'
                    : 'border-b border-white/6 bg-black/35 backdrop-blur-md'
            )}
        >
            <nav className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-4 md:py-5">
                <Link
                    href="/"
                    className="group flex flex-shrink-0 items-center gap-4"
                    onClick={(event) => {
                        if (pathname !== '/') {
                            return
                        }

                        event.preventDefault()
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
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
                        <span className="text-ui -mb-1 text-foreground font-black tracking-[0.2em]">Hestia</span>
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-[10px] font-black uppercase tracking-[0.35em] text-transparent">
                            Labs
                        </span>
                    </div>
                </Link>

                <div className="ml-auto flex items-center gap-4">
                    <div className="hidden items-center gap-4 lg:flex">
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

                        <div className="mx-4 h-6 w-px bg-border/50" />

                        <MagneticLink
                            href="mailto:contact@hestialabs.in"
                            onClick={() => {
                                window.location.href = 'mailto:contact@hestialabs.in'
                            }}
                            className="text-ui"
                        >
                            Contact
                        </MagneticLink>

                        <Link
                            href="https://auth.hestialabs.in/signin"
                            className="rounded-full bg-white px-6 py-3 text-ui font-black text-black transition-all hover:scale-105 active:scale-95"
                        >
                            Sign In
                        </Link>
                    </div>

                    <button
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <div className="relative h-4 w-6">
                            <span
                                className={cn(
                                    'absolute left-0 block h-0.5 w-6 bg-foreground transition-all duration-300',
                                    isOpen ? 'top-2 rotate-45' : 'top-0'
                                )}
                            />
                            <span
                                className={cn(
                                    'absolute left-0 top-2 block h-0.5 w-6 bg-foreground transition-all duration-300',
                                    isOpen && 'opacity-0'
                                )}
                            />
                            <span
                                className={cn(
                                    'absolute left-0 block h-0.5 w-6 bg-foreground transition-all duration-300',
                                    isOpen ? 'top-2 -rotate-45' : 'top-4'
                                )}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            <div
                className={cn(
                    'fixed inset-0 top-[73px] z-50 w-screen max-w-full transition-all duration-500 ease-in-out lg:hidden',
                    isOpen
                        ? 'translate-x-0 opacity-100 pointer-events-auto'
                        : 'translate-x-full opacity-0 pointer-events-none'
                )}
                style={{
                    background: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(12px)',
                }}
                role="dialog"
                aria-modal="true"
                aria-hidden={!isOpen}
            >
                <div className="flex min-h-full flex-col gap-8 p-6">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            className={cn(
                                'group relative text-left text-3xl font-bold uppercase tracking-tighter text-foreground transition-all duration-300',
                                activeSection === item.href.replace('#', '')
                                    ? 'font-bold'
                                    : 'opacity-90 hover:opacity-100'
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}

                    <div className="mt-auto flex flex-col gap-6 space-y-4 pb-12">
                        <a
                            href="mailto:contact@hestialabs.in"
                            className="flex h-14 items-center justify-center rounded-2xl border border-foreground text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-foreground hover:text-background"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </a>

                        <Link
                            href="https://auth.hestialabs.in/signin"
                            className="flex h-14 cursor-pointer items-center justify-center rounded-none bg-foreground text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:shadow-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
