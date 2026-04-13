'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

interface AnimatedIntroProps {
  phrases: string[]
  typingSpeed?: number
  pauseDuration?: number
  onComplete?: () => void
}

export function AnimatedIntro({
  phrases,
  typingSpeed = 50,
  pauseDuration = 2000,
  onComplete,
}: AnimatedIntroProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isExiting, setIsExiting] = useState(false)
  const [glowIntensity, setGlowIntensity] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [glitchText, setGlitchText] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    if (currentIndex === 2) {
      let count = 0
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
      const interval = setInterval(() => {
        setGlitchText(
          phrases[2]
            .split('')
            .map((char) => Math.random() > 0.7 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
            .join('')
        )
        count++
        if (count > 8) {
          clearInterval(interval)
          setGlitchText(phrases[2])
        }
      }, 50)
      return () => clearInterval(interval)
    } else {
      setGlitchText('')
    }
  }, [currentIndex, phrases])

  const currentPhrase = phrases[currentIndex]

  const typeText = useCallback(() => {
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentPhrase.length) {
        setDisplayedText(currentPhrase.slice(0, charIndex))
        setGlowIntensity(prev => Math.min(prev + 0.15, 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [currentPhrase, typingSpeed])

  useEffect(() => {
    typeText()
  }, [currentIndex])

  useEffect(() => {
    if (displayedText.length < currentPhrase.length) return

    const transitionDelay = currentIndex === 1 ? 1500 : pauseDuration

    const pauseTimer = setTimeout(() => {
      if (currentIndex < phrases.length - 1) {
        if (currentIndex === 1) {
          let count = 0
          const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`'
          const interval = setInterval(() => {
            setGlitchText(
              phrases[2]
                .split('')
                .map((_, i) => Math.random() > 0.6 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : i < displayedText.length ? displayedText[i] : '')
                .join('')
            )
            count++
            if (count > 12) {
              clearInterval(interval)
              setGlitchText(phrases[2])
            }
          }, 40)
          setTimeout(() => {
            setCurrentIndex(prev => prev + 1)
            setDisplayedText('')
            setGlitchText('')
          }, 600)
          return () => clearInterval(interval)
        } else {
          setCurrentIndex(prev => prev + 1)
          setDisplayedText('')
        }
      } else {
        setIsExiting(true)
        setTimeout(() => onComplete?.(), 1200)
      }
    }, transitionDelay)

    return () => clearTimeout(pauseTimer)
  }, [displayedText, currentIndex, phrases.length, pauseDuration, onComplete, currentPhrase.length])

  useEffect(() => {
    if (!canvasRef.current) return

    let animationId: number

    const loader = new OBJLoader()
    loader.load('/assets/models/blood_cell.obj', (obj: any) => {
      const isMobile = window.innerWidth < 500
      const cellGeometry = obj.children[0].geometry

      const mouse = { position: new THREE.Vector2(), ratio: new THREE.Vector2(), target: new THREE.Vector2() }
      
      const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current!, alpha: true })
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

      const camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.01, 100)
      camera.rotation.y = Math.PI
      camera.position.z = 0.35

      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x000000)
      scene.fog = new THREE.Fog(0x000000, 0.05, 1.6)

      const light = new THREE.HemisphereLight(0xe9eff2, 0x01010f, 1)
      scene.add(light)
      scene.add(new THREE.AmbientLight(0x404040, 0.5))

      const particlesContainer = new THREE.Object3D()
      scene.add(particlesContainer)

      const particles: any[] = []
      const count = isMobile ? 60 : 120
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 0.003 + 0.0003
        const range = 10
        const color = new THREE.Color(`hsl(${Math.random() * range + 350}, ${Math.floor(Math.random() * 20 + 65)}%, 56%)`)
        const mesh = new THREE.Mesh(cellGeometry, new THREE.MeshPhongMaterial({ color }))
        mesh.scale.set(radius, radius, radius)
        mesh.position.set(0, 0, 1.5)
        
        const particle = { 
          mesh, 
          percent: Math.random(), 
          burst: false, 
          offset: new THREE.Vector3((Math.random() - 0.5) * 0.025, (Math.random() - 0.5) * 0.025, 0),
          speed: Math.random() * 0.004 + 0.0002,
          rotate: new THREE.Vector3(-Math.random() * 0.1 + 0.01, 0, Math.random() * 0.01),
          curve: new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0.625), new THREE.Vector3(0, 0, 1.25), new THREE.Vector3(0, 0, 1.875), new THREE.Vector3(0, -0.06, 2.5)])
        }
        particles.push(particle)
        particlesContainer.add(mesh)
      }

      const animate = (_time: number) => {
        mouse.position.x += (mouse.target.x - mouse.position.x) / 30
        mouse.position.y += (mouse.target.y - mouse.position.y) / 30
        mouse.ratio.x = mouse.position.x / window.innerWidth
        mouse.ratio.y = mouse.position.y / window.innerHeight

        camera.rotation.z = mouse.ratio.x - 0.05
        camera.rotation.y = Math.PI - (mouse.ratio.x * 0.3 - 0.15)
        camera.position.x = mouse.ratio.x * 0.044 - 0.025
        camera.position.y = mouse.ratio.y * 0.044 - 0.025

        particles.forEach((p: any) => {
          p.percent += p.speed
          const pos = p.curve.getPoint(1 - (p.percent % 1)).add(p.offset)
          p.mesh.position.copy(pos)
          p.mesh.rotation.x += p.rotate.x
          p.mesh.rotation.y += p.rotate.y
          p.mesh.rotation.z += p.rotate.z
        })

        renderer.render(scene, camera)
        animationId = requestAnimationFrame(animate)
      }

      animate(0)

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      const handleMouseMove = (e: MouseEvent) => { mouse.target.x = e.clientX; mouse.target.y = e.clientY }
      const handleTouchMove = (e: TouchEvent) => { mouse.target.x = e.touches[0].clientX; mouse.target.y = e.touches[0].clientY }

      window.addEventListener('resize', handleResize)
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('touchmove', handleTouchMove)

      return () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('touchmove', handleTouchMove)
        renderer.dispose()
      }
    })
  }, [])

  const isFinalPhrase = currentIndex === phrases.length - 1

  const containerStyle = isExiting 
    ? 'fixed inset-0 z-50 bg-black transition-all duration-1000 ease-out opacity-0 scale-150'
    : 'fixed inset-0 z-50 bg-black'

  const textStyle = isExiting
    ? `text-center text-xl sm:text-3xl md:text-5xl font-bold tracking-wide bg-linear-to-r from-sky-400 via-red-500 to-white bg-clip-text text-transparent transition-all duration-700 ease-out scale-200 opacity-0 blur-lg font-pixel-silkscreen ${isFinalPhrase ? 'tracking-[0.3em]' : ''}`
    : `text-center text-xl sm:text-3xl md:text-5xl font-bold tracking-wide bg-linear-to-r from-sky-400 via-red-500 to-white bg-clip-text text-transparent transition-all duration-300 font-pixel-silkscreen ${isFinalPhrase ? 'tracking-[0.3em]' : ''}`

  return (
    <div className={containerStyle}>
      <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
          className={textStyle}
          style={{
            textShadow: `0 0 ${20 + glowIntensity * 30}px rgba(56, 189, 248, ${glowIntensity * 0.5}), 0 0 ${40 + glowIntensity * 60}px rgba(248, 113, 113, ${glowIntensity * 0.3})`
          }}
        >
          {glitchText || displayedText}
          <span 
            className="inline-block w-[0.55em] h-[1em] bg-linear-to-b from-sky-400 to-red-500 align-middle ml-0.5"
            style={{ 
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 65%, 70% 65%, 70% 45%, 100% 45%, 100% 100%, 0% 100%)',
              opacity: showCursor ? 1 : 0,
              transition: 'opacity 0.08s ease'
            }}
          />
        </h1>
      </div>
    </div>
  )
}

export default AnimatedIntro