'use client'

import { useImperativeHandle, useRef, forwardRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

export interface MenuOverlayRef {
  open: () => Promise<void>
  close: () => Promise<void>
}

interface MenuOverlayProps {
  onOpenComplete?: () => void
  onCloseComplete?: () => void
}

type ViewType = 'main' | 'about' | 'team'

export const MenuOverlay = forwardRef<MenuOverlayRef, MenuOverlayProps>(({ onOpenComplete, onCloseComplete }, ref) => {
  const overlayPathRef = useRef<SVGPathElement>(null)
  const menuWrapRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<HTMLAnchorElement[]>([])
  const aboutWrapRef = useRef<HTMLDivElement>(null)
  const teamWrapRef = useRef<HTMLDivElement>(null)
  
  const [viewStack, setViewStack] = useState<ViewType[]>(['main'])
  const activeView = viewStack[viewStack.length - 1]

  const closeOverlay = () => {
    if (!overlayPathRef.current || !menuWrapRef.current) return Promise.resolve()

    return new Promise<void>((resolve) => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onCloseComplete) onCloseComplete()
          resolve()
        }
      })

      tl.set(overlayPathRef.current, {
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      .to(overlayPathRef.current, {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' }
      }, 0)
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
        onComplete: () => {
          menuWrapRef.current?.classList.remove('menu-wrap--open')
        }
      })
      .set(overlayPathRef.current, {
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
      })
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' }
      })
      .to(overlayPathRef.current, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
      })
      
      // Animate whatever is currently visible
      if (activeView === 'main') {
        tl.to(menuItemsRef.current, { duration: 0.8, ease: 'power2.in', y: 100, opacity: 0, stagger: -0.05 }, 0)
      } else if (activeView === 'about') {
        tl.to(aboutWrapRef.current, { duration: 0.8, ease: 'power2.in', opacity: 0, scale: 0.95 }, 0)
      } else if (activeView === 'team') {
        tl.to(teamWrapRef.current, { duration: 0.8, ease: 'power2.in', opacity: 0, y: 30 }, 0)
      }
    })
  }

  useImperativeHandle(ref, () => ({
    open: async () => {
      setViewStack(['main'])
      // Reset positions
      gsap.set([aboutWrapRef.current, teamWrapRef.current], { display: 'none', opacity: 0 })
      gsap.set(menuItemsRef.current, { opacity: 0, y: 150 })

      if (!overlayPathRef.current || !menuWrapRef.current) return

      const tl = gsap.timeline({
        onStart: () => {
          menuWrapRef.current?.classList.add('menu-wrap--open')
        },
        onComplete: onOpenComplete
      })

      tl.set(overlayPathRef.current, {
        attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
      })
      .to(overlayPathRef.current, {
        duration: 0.8,
        ease: 'power4.in',
        attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
      }, 0)
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: 'power2',
        attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' }
      })
      .set(menuItemsRef.current, { opacity: 0 })
      .set(overlayPathRef.current, {
        attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' }
      })
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: 'power2.in',
        attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
      })
      .to(overlayPathRef.current, {
        duration: 0.8,
        ease: 'power4',
        attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
      })
      .to(menuItemsRef.current, {
        duration: 1.1,
        ease: 'power4',
        startAt: { y: 150 },
        y: 0,
        opacity: 1,
        stagger: 0.05
      }, '>-=1.1')
    },
    close: closeOverlay
  }))

  const transitionToView = (nextView: ViewType) => {
    const tl = gsap.timeline({
      onComplete: () => setViewStack(prev => [...prev, nextView])
    })
    
    // Hide current
    if (activeView === 'main') {
      tl.to(menuItemsRef.current, { duration: 0.6, ease: 'power3.inOut', y: -100, opacity: 0, stagger: 0.03 })
    } else if (activeView === 'about') {
      tl.to(aboutWrapRef.current, { duration: 0.6, ease: 'power3.inOut', opacity: 0, scale: 1.05, display: 'none' })
    }

    // Show next
    const targetRef = nextView === 'about' ? aboutWrapRef : teamWrapRef
    tl.fromTo(targetRef.current, 
      { opacity: 0, display: 'none', y: 50 },
      { display: 'flex', duration: 0.8, ease: 'power3.out', y: 0, opacity: 1 },
      '>-=0.3'
    )
  }

  const handleBackTouch = () => {
    if (viewStack.length > 1) {
      const currentView = activeView
      const prevView = viewStack[viewStack.length - 2]
      
      const tl = gsap.timeline({
        onComplete: () => setViewStack(prev => prev.slice(0, -1))
      })

      // Hide current
      const currentRef = currentView === 'about' ? aboutWrapRef : teamWrapRef
      tl.to(currentRef.current, { duration: 0.6, ease: 'power3.inOut', y: 50, opacity: 0, display: 'none' })

      // Show previous
      if (prevView === 'main') {
        tl.fromTo(menuItemsRef.current, 
          { y: -100, opacity: 0 },
          { duration: 0.8, ease: 'power3.out', y: 0, opacity: 1, stagger: -0.03 },
          '>-=0.3'
        )
      } else if (prevView === 'about') {
        tl.fromTo(aboutWrapRef.current,
          { opacity: 0, scale: 1.05, display: 'none' },
          { display: 'flex', duration: 0.8, ease: 'power3.out', opacity: 1, scale: 1 },
          '>-=0.3'
        )
      }
    } else {
      closeOverlay()
    }
  }

  const menuItems = [
    { tiny: 'Read the', text: 'DOCUMENTATION', link: 'https://docs.hestialabs.in', external: true },
    { tiny: 'Learn', text: 'ABOUT', link: '', external: false },
    { tiny: 'Get in', text: 'CONTACT', link: 'mailto:contact@hestialabs.in', external: true },
    { tiny: 'Member', text: 'LOGIN', link: 'https://auth.hestialabs.in', external: true },
  ]

  return (
    <>
      <div ref={menuWrapRef} className="menu-wrap fixed inset-0 z-1000 invisible opacity-0 transition-opacity duration-300 [&.menu-wrap--open]:visible [&.menu-wrap--open]:opacity-100 bg-black overflow-hidden">
        
        {/* Step 1: Main Menu */}
        <nav className={`menu flex flex-col items-center justify-center h-full absolute inset-0 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 ${activeView === 'main' ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {menuItems.map((item, i) => (
            <a 
              key={i}
              ref={(el) => { if (el) menuItemsRef.current[i] = el }}
              href={item.link || '#'}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="menu__item text-[10vw] sm:text-[8vw] text-white cursor-pointer leading-[0.85] font-black text-right relative group odd:ml-[-5vw] even:ml-[5vw] transition-all hover:tracking-tighter"
              onClick={(e) => {
                if (item.text === 'ABOUT') {
                  e.preventDefault()
                  transitionToView('about')
                } else if (item.external) {
                  // For external links, close the menu and allow default navigation
                  closeOverlay()
                } else {
                  // Default behavior for other items
                  closeOverlay()
                }
              }}
            >
              <span className="menu__item-tiny text-[0.8rem] sm:text-[1.2rem] block group-hover:text-sky-400 transition-colors uppercase tracking-[0.4em] font-mono text-white/40">{item.tiny}</span>
              <span className="menu__item-text text-white group-hover:text-sky-400 transition-colors uppercase">{item.text}</span>
            </a>
          ))}
        </nav>

        {/* Step 2: About Vision */}
        <div 
          ref={aboutWrapRef} 
          className={`about-wrap absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${activeView === 'about' ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ display: 'none' }}
        >
          <div className="max-w-4xl space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase font-mono tracking-tighter bg-linear-to-r from-sky-400 via-red-500 to-white bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-white/70 text-base sm:text-xl font-mono uppercase tracking-widest leading-relaxed max-w-3xl mx-auto">
                Hestia Labs is a technology company focused on building high-integrity infrastructure for the physical world. We engineer deterministic execution layers where code controls reality.
              </p>
            </div>
            
            <button 
              onClick={() => transitionToView('team')}
              className="group relative px-12 py-6 border border-white/10 hover:border-sky-400/50 transition-all rounded-full overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em]">
                Meet the Founders
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-sky-400/5 translate-y-full group-hover:translate-y-0 transition-transform" />
            </button>
          </div>
        </div>

        {/* Step 3: Team / Founders */}
        <div 
          ref={teamWrapRef} 
          className={`team-wrap absolute inset-0 flex flex-col items-center justify-center p-6 text-center ${activeView === 'team' ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{ display: 'none' }}
        >
          <div className="max-w-4xl w-full space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Founder 1 */}
              <div className="group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/sddion.svg" alt="@sddion" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]" width={80} height={80} />
                  </div>
                </div>
                <div className="w-16 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent mb-3 mx-auto opacity-50" />
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tighter group-hover:text-cyan-400 transition-colors text-center">@sddion</h3>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.5em] mb-2 text-center">CEO & CTO</p>
                <p className="text-white/40 text-xs font-mono uppercase leading-relaxed tracking-wide text-center">Fullstack • IoT • AI/ML</p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a href="https://instagram.com/wordwires" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-pink-500 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/sddion" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.735v20.53C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.265V1.735C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="mailto:sddion@hestialabs.in" className="text-white/40 hover:text-cyan-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v4z"/></svg>
                  </a>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto relative">
                    <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image src="/xspaceboi.svg" alt="@XspaceBoi" className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,107,157,0.5)]" width={80} height={80} />
                  </div>
                </div>
                <div className="w-16 h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent mb-3 mx-auto opacity-50" />
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 tracking-tighter group-hover:text-pink-400 transition-colors text-center">@XspaceBoi</h3>
                <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.5em] mb-2 text-center">Creative Head</p>
                <p className="text-white/40 text-xs font-mono uppercase leading-relaxed tracking-wide text-center">VFX • 3D • Motion</p>
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a href="https://instagram.com/bid_yut_24" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-pink-500 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="mailto:bidyut@hestialabs.in" className="text-white/40 hover:text-pink-400 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4l-8 5-8-5V6l8 5 8-5v4z"/></svg>
                  </a>
                  <span className="text-white/20">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.735v20.53C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.265V1.735C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual-Purpose Back/Close Button */}
        <button 
          onClick={handleBackTouch}
          className="button-close fixed top-0 right-0 m-6 sm:m-12 text-white hover:text-sky-400 p-4 transition-colors z-1100 pointer-events-auto"
          aria-label={viewStack.length > 1 ? "Go Back" : "Close Menu"}
        >
          <Image 
            src="/menuback.svg" 
            alt="Back" 
            className={`w-8 h-auto transition-transform duration-500 ${viewStack.length === 1 ? 'rotate-0' : '-rotate-90'}`} 
            width={32}
            height={32}
          />
        </button>

      </div>

      <svg className="overlay fixed inset-0 z-10000 pointer-events-none w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={overlayPathRef} className="overlay__path" fill="black" vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
      </svg>
    </>
  )
})

MenuOverlay.displayName = 'MenuOverlay'
