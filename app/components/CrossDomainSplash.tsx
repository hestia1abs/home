'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CrossDomainSplash() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hasTransition = localStorage.getItem('cross-domain-transition')
    if (hasTransition) {
      setVisible(true)
      localStorage.removeItem('cross-domain-transition')
      const timer = setTimeout(() => setVisible(false), 600)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="text-2xl font-bold tracking-wider uppercase font-['Silkscreen','cursive'] text-white">
          Hestia Labs
        </div>
        <div className="mt-4 text-white/40 text-sm font-mono animate-pulse">
          Loading...
        </div>
      </motion.div>
    </motion.div>
  )
}

export function triggerCrossDomainTransition(url: string) {
  localStorage.setItem('cross-domain-transition', 'true')
  window.location.href = url
}