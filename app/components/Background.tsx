'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { gsap, Power2 } from 'gsap'

// --- Classes ---

class Particle {
  mesh: THREE.Mesh
  color: THREE.Color
  percent: number
  burst: boolean
  offset: THREE.Vector3
  speed: number
  rotate: THREE.Vector3
  pos: THREE.Vector3

  constructor(cellGeometry: THREE.BufferGeometry, burst: boolean = false) {
    const radius = Math.random() * 0.003 + 0.0003

    const range = 10
    const offsetType = burst ? 200 : 350
    const saturate = Math.floor(Math.random() * 20 + 65)
    const light = burst ? 20 : 56

    this.color = new THREE.Color(`hsl(${Math.random() * range + offsetType}, ${saturate}%, ${light}%)`)
    const mat = new THREE.MeshPhongMaterial({
      color: this.color
    })

    this.mesh = new THREE.Mesh(cellGeometry, mat)
    this.mesh.scale.set(radius, radius, radius)
    this.mesh.scale.x += (Math.random() - 0.5) * 0.001
    this.mesh.scale.y += (Math.random() - 0.5) * 0.001
    this.mesh.scale.z += (Math.random() - 0.5) * 0.001
    this.mesh.position.set(0, 0, 1.5)

    this.percent = burst ? 0.2 : Math.random()
    this.burst = burst ? true : false
    this.offset = new THREE.Vector3((Math.random() - 0.5) * 0.025, (Math.random() - 0.5) * 0.025, 0)
    this.speed = Math.random() * 0.004 + 0.0002

    if (this.burst) {
      this.speed += 0.003
      this.mesh.scale.x *= 1.4
      this.mesh.scale.y *= 1.4
      this.mesh.scale.z *= 1.4
    }

    this.rotate = new THREE.Vector3(-Math.random() * 0.1 + 0.01, 0, Math.random() * 0.01)
    this.pos = new THREE.Vector3(0, 0, 0)
  }

  update(tunnel: Tunnel) {
    this.percent += this.speed * (this.burst ? 1 : tunnel.speed)
    this.pos = tunnel.curve.getPoint(1 - (this.percent % 1)).add(this.offset)
    this.mesh.position.copy(this.pos)
    this.mesh.rotation.x += this.rotate.x
    this.mesh.rotation.y += this.rotate.y
    this.mesh.rotation.z += this.rotate.z
  }
}

class Tunnel {
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  particles: Particle[] = []
  particlesContainer: THREE.Object3D
  curve!: THREE.CatmullRomCurve3
  tubeMesh!: THREE.Mesh
  tubeMaterial!: THREE.MeshBasicMaterial
  tubeGeometry_o!: THREE.BufferGeometry
  mouse: {
    position: THREE.Vector2
    ratio: THREE.Vector2
    target: THREE.Vector2
  }
  speed: number = 1
  prevTime: number = 0
  mousedown: boolean = false
  cellGeometry: THREE.BufferGeometry
  isMobile: boolean

  constructor(canvas: HTMLCanvasElement, cellModel: THREE.Object3D) {
    this.isMobile = window.innerWidth < 500
    this.cellGeometry = (cellModel.children[0] as THREE.Mesh).geometry as THREE.BufferGeometry

    this.mouse = {
      position: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.7),
      ratio: new THREE.Vector2(0, 0),
      target: new THREE.Vector2(window.innerWidth * 0.5, window.innerHeight * 0.7)
    }

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvas,
      alpha: true
    })
    this.renderer.setClearColor(0x000000, 1)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    this.camera = new THREE.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.01, 100)
    this.camera.rotation.y = Math.PI
    this.camera.position.z = 0.35

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x000000)
    this.scene.fog = new THREE.Fog(0x000000, 0.05, 1.6)

    const light = new THREE.HemisphereLight(0xe9eff2, 0x01010f, 1)
    this.scene.add(light)

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5)
    this.scene.add(ambientLight)

    this.particlesContainer = new THREE.Object3D()
    this.scene.add(this.particlesContainer)

    this.addParticles()
    this.createMesh()
  }

  addParticles() {
    const count = this.isMobile ? 60 : 120
    for (let i = 0; i < count; i++) {
      const particle = new Particle(this.cellGeometry)
      this.particles.push(particle)
      this.particlesContainer.add(particle.mesh)
    }
  }

  createMesh() {
    const points: THREE.Vector3[] = []
    for (let i = 0; i < 5; i++) {
        points.push(new THREE.Vector3(0, 0, 2.5 * (i / 4)))
    }
    points[4].y = -0.06

    this.curve = new THREE.CatmullRomCurve3(points)

    this.tubeMaterial = new THREE.MeshBasicMaterial({
      side: THREE.BackSide,
      color: 0x000000
    })

    const tubeGeo = new THREE.TubeGeometry(this.curve, 70, 0.02, 30, false)
    this.tubeMesh = new THREE.Mesh(tubeGeo, this.tubeMaterial)
    this.tubeGeometry_o = tubeGeo.clone()
    this.scene.add(this.tubeMesh)
  }

  onMouseDown() {
    this.mousedown = true
    gsap.to(this.scene.fog!.color, { duration: 0.6, r: 1, g: 1, b: 1 })
    gsap.to(this.tubeMaterial.color, { duration: 0.6, r: 0, g: 0, b: 0 })
    gsap.to(this, { duration: 1.5, speed: 0.1, ease: Power2.easeInOut })
  }

  onMouseUp() {
    this.mousedown = false
    gsap.to(this.scene.fog!.color, { duration: 0.6, r: 0, g: 0, b: 0 })
    gsap.to(this.tubeMaterial.color, { duration: 0.6, r: 0, g: 0, b: 0 })
    gsap.to(this, { duration: 0.6, speed: 1, ease: Power2.easeIn })
  }

  onMouseMove(clientX: number, clientY: number) {
    this.mouse.target.x = clientX
    this.mouse.target.y = clientY
  }

  onResize() {
    const ww = window.innerWidth
    const wh = window.innerHeight
    this.isMobile = ww < 500
    this.camera.aspect = ww / wh
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(ww, wh)
  }

  updateCamera() {
    this.mouse.position.x += (this.mouse.target.x - this.mouse.position.x) / 30
    this.mouse.position.y += (this.mouse.target.y - this.mouse.position.y) / 30

    this.mouse.ratio.x = (this.mouse.position.x / window.innerWidth)
    this.mouse.ratio.y = (this.mouse.position.y / window.innerHeight)

    this.camera.rotation.z = ((this.mouse.ratio.x) * 1 - 0.05)
    this.camera.rotation.y = Math.PI - (this.mouse.ratio.x * 0.3 - 0.15)
    this.camera.position.x = ((this.mouse.ratio.x) * 0.044 - 0.025)
    this.camera.position.y = ((this.mouse.ratio.y) * 0.044 - 0.025)
  }

  updateCurve() {
    const position = this.tubeMesh.geometry.attributes.position
    const position_o = this.tubeGeometry_o.attributes.position
    const radialSegments = 30

    this.curve.points[2].x = 0.6 * (1 - this.mouse.ratio.x) - 0.3
    this.curve.points[3].x = 0
    this.curve.points[4].x = 0.6 * (1 - this.mouse.ratio.x) - 0.3
    this.curve.points[2].y = 0.6 * (1 - this.mouse.ratio.y) - 0.3
    this.curve.points[3].y = 0
    this.curve.points[4].y = 0.6 * (1 - this.mouse.ratio.y) - 0.3

    const splinePoints = this.curve.getPoints(70)

    for (let i = 0; i < position.count; i++) {
        const index = Math.floor(i / (radialSegments + 1))
        const splinePoint = splinePoints[index]
        const ox = position_o.getX(i)
        const oy = position_o.getY(i)
        
        const targetX = ox + splinePoint.x
        const targetY = oy + splinePoint.y
        const currentX = position.getX(i)
        const currentY = position.getY(i)
        
        position.setX(i, currentX + (targetX - currentX) / 15)
        position.setY(i, currentY + (targetY - currentY) / 15)
    }
    position.needsUpdate = true
  }

  render(time: number) {
    this.updateCamera()
    this.updateCurve()

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update(this)
      if (this.particles[i].burst && this.particles[i].percent > 1) {
        this.particlesContainer.remove(this.particles[i].mesh)
        this.particles.splice(i, 1)
        i--
      }
    }

    if (this.mousedown) {
      if (time - this.prevTime > 20) {
        this.prevTime = time
        let particle = new Particle(this.cellGeometry, true)
        this.particles.push(particle)
        this.particlesContainer.add(particle.mesh)
        if (!this.isMobile) {
          particle = new Particle(this.cellGeometry, true)
          this.particles.push(particle)
          this.particlesContainer.add(particle.mesh)

          particle = new Particle(this.cellGeometry, true)
          this.particles.push(particle)
          this.particlesContainer.add(particle.mesh)
        }
      }
    }

    this.renderer.render(this.scene, this.camera)
  }
}

// --- Component ---

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tunnelRef = useRef<Tunnel>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    let tunnel: Tunnel
    let animationId: number

    const loader = new OBJLoader()
    loader.load('/assets/models/blood_cell.obj', (obj) => {
      tunnel = new Tunnel(canvasRef.current!, obj)
      tunnelRef.current = tunnel

      const animate = (time: number) => {
        tunnel.render(time)
        animationId = requestAnimationFrame(animate)
      }
      animate(0)
    })

    const handleResize = () => tunnel?.onResize()
    const handleMouseMove = (e: MouseEvent) => tunnel?.onMouseMove(e.clientX, e.clientY)
    const handleTouchMove = (e: TouchEvent) => tunnel?.onMouseMove(e.touches[0].clientX, e.touches[0].clientY)
    const handleMouseDown = () => tunnel?.onMouseDown()
    const handleMouseUp = () => tunnel?.onMouseUp()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchstart', handleMouseDown)
    window.addEventListener('touchend', handleMouseUp)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchstart', handleMouseDown)
      window.removeEventListener('touchend', handleMouseUp)
      tunnel?.renderer.dispose()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <canvas id="scene" ref={canvasRef} className="w-full h-full cursor-pointer" />
    </div>
  )
}
