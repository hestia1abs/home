'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const NO_SCROLL_LOCK_ROUTES = ['/privacy', '/terms']

export function ScrollPreventer() {
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const shouldPreventScroll = isMobile && !NO_SCROLL_LOCK_ROUTES.some(route => pathname.startsWith(route))

    if (shouldPreventScroll) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [isMobile, pathname])

  return null
}
