'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

import { getPositionClasses } from '../../lib/cinematic/utils';
import { scenePerspectives } from '../../lib/cinematic/scene-data';

import * as THREE from 'three';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

function CyberpunkBuilding() {
  const { scene } = useGLTF('/assets/models/cyberpunk_skyscraper.glb');

  useEffect(() => {
    if (scene) {
      scene.scale.set(3, 3, 3);
      scene.position.set(0, 0, 0);
    }
  }, [scene]);

  return <primitive object={scene} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function AnimatedCamera({ cameraAnimRef, targetAnimRef }: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cameraRef = useRef<any>(null);
  const { set } = useThree();

  useEffect(() => {
    if (cameraRef.current) {
      set({ camera: cameraRef.current });
    }
  }, [set]);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.set(cameraAnimRef.current.x, cameraAnimRef.current.y, cameraAnimRef.current.z);
      cameraRef.current.lookAt(targetAnimRef.current.x, targetAnimRef.current.y, targetAnimRef.current.z);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={45} near={1} far={1000} position={[0, 5, 10]} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Scene({ cameraAnimRef, targetAnimRef }: any) {
  const { scene } = useThree();

  useEffect(() => {
    if (scene) {
      const fogColor = new THREE.Color('#0a0a0a');
      scene.fog = new THREE.Fog(fogColor, 10, 30);
      scene.background = new THREE.Color('#0a0a0a');
    }
  }, [scene]);

  return (
    <>
      <AnimatedCamera cameraAnimRef={cameraAnimRef} targetAnimRef={targetAnimRef} />

      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} castShadow />
      <directionalLight position={[-10, 10, -10]} intensity={0.8} />
      <pointLight position={[0, 50, 20]} intensity={1.2} color="#00ffff" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#e8ff47" />

      <CyberpunkBuilding />
    </>
  );
}

export function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cameraAnimRef = useRef({ x: -20, y: 0, z: 0 });
  const targetAnimRef = useRef({ x: 0, y: 15, z: 0 });
  const rotationAnimRef = useRef({ useRotation: false });
  const [isLoading, setIsLoading] = useState(true);
  const splitInstancesRef = useRef<SplitText[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !smoothWrapperRef.current || !smoothContentRef.current) return;

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    document.fonts.ready.then(() => {
      ScrollSmoother.create({
        wrapper: smoothWrapperRef.current!,
        content: smoothContentRef.current!,
        smooth: 1.5,
        effects: false,
        smoothTouch: 0.1,
      });

      const setProgressWidth = gsap.quickSetter(progressBarRef.current, 'width', '%');
      const setProgressText = gsap.quickSetter(progressTextRef.current, 'textContent');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress * 100;
            setProgressWidth(progress);
            setProgressText(Math.round(progress).toString().padStart(3, '0') + '%');
          },
        },
      });

      // Hestia Hero Content Fade-Out Logic
      // We assume the hero content has an id of 'hero-content'
      tl.to(
        '#hero-content',
        {
          opacity: 0,
          y: -50,
          scale: 0.95,
          duration: 0.05, // Fade out in the first 5% of the scroll
          ease: 'power2.out',
        },
        0
      );

      // Hide Cinematic HUD on Hero Section
      tl.fromTo(
        '#cinematic-hud',
        { opacity: 0, y: 20 },
        { 
          opacity: 0.7, 
          y: 0, 
          duration: 0.05, 
          ease: 'power2.out' 
        },
        0.05 // Appear as soon as the Hero starts fading
      );

      scenePerspectives.forEach((perspective) => {
        const startProgress = perspective.scrollProgress.start / 100;
        const endProgress = perspective.scrollProgress.end / 100;

        tl.to(
          cameraAnimRef.current,
          {
            x: perspective.camera.x,
            y: perspective.camera.y,
            z: perspective.camera.z,
            duration: endProgress - startProgress,
            ease: 'none',
          },
          startProgress
        );

        tl.to(
          targetAnimRef.current,
          {
            x: perspective.target.x,
            y: perspective.target.y,
            z: perspective.target.z,
            duration: endProgress - startProgress,
            ease: 'none',
          },
          startProgress
        );

        tl.to(
          rotationAnimRef.current,
          {
            useRotation: false,
            duration: endProgress - startProgress,
            ease: 'none',
          },
          startProgress
        );
      });

      scenePerspectives.forEach((perspective, index) => {
        const textEl = textRefs.current[index];
        if (textEl) {
          if (perspective.hideText) {
            gsap.set(textEl, { opacity: 0, pointerEvents: 'none' });
            return;
          }

          const titleEl = textEl.querySelector('h2');
          const subtitleEl = textEl.querySelector('p');

          if (titleEl && subtitleEl) {
            const titleSplit = new SplitText(titleEl, { type: 'chars' });
            const subtitleSplit = new SplitText(subtitleEl, { type: 'chars' });
            splitInstancesRef.current.push(titleSplit, subtitleSplit);

            // Robust Styling for Gradient Titles
            gsap.set(titleSplit.chars, {
              backgroundImage: 'linear-gradient(to right, #38bdf8, #ef4444, #ffffff)',
              webkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
            });

            const textTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: containerRef.current,
                start: `${perspective.scrollProgress.start}% top`,
                end: `${perspective.scrollProgress.end}% top`,
                scrub: 0.5,
              },
            });

            if (index === 0) {
              // Start hidden to avoid overlay with Hero content
              gsap.set([titleSplit.chars, subtitleSplit.chars], {
                x: -20,
                opacity: 0,
              });

              textTimeline
                .to([subtitleSplit.chars, titleSplit.chars], {
                  x: 0,
                  opacity: 1,
                  duration: 0.3,
                  stagger: -0.02,
                  ease: 'power2.out',
                }, 0.1) // Start slightly after scroll begins
                .to({}, { duration: 0.5 })
                .to([subtitleSplit.chars, titleSplit.chars], {
                  x: 100,
                  opacity: 0,
                  duration: 0.2,
                  stagger: -0.02,
                  ease: 'power2.in',
                });
            } else {
              const isLastPerspective = index === scenePerspectives.length - 1;

              textTimeline
                .fromTo(
                  [subtitleSplit.chars, titleSplit.chars],
                  { x: -100, opacity: 0 },
                  {
                    x: 0,
                    opacity: 1,
                    duration: isLastPerspective ? 0.2 : 0.25,
                    stagger: isLastPerspective ? -0.01 : -0.02,
                    ease: 'power2.out',
                  }
                )
                .to({}, { duration: isLastPerspective ? 1.0 : 0.5 })
                .to([subtitleSplit.chars, titleSplit.chars], {
                  x: 100,
                  opacity: 0,
                  duration: 0.25,
                  stagger: -0.02,
                  ease: 'power2.in',
                });
            }
          }
        }
      });
    });

    return () => {
      clearTimeout(loadingTimer);
      splitInstancesRef.current.forEach((split) => split.revert());
      splitInstancesRef.current = [];
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-10000 bg-black transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-px bg-white/20">
          <div className="h-full bg-white opacity-80 animate-pulse pointer-events-none" />
        </div>
      </div>

      <div className="fixed inset-0 w-full h-svh z-0 pointer-events-none">
        {/* Grid Noise Overlay */}
        <div
          className="absolute inset-0 z-10 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(232,255,71,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,255,71,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <Canvas
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 2]}
          style={{ background: '#0a0a0a' }}
        >
          <Scene cameraAnimRef={cameraAnimRef} targetAnimRef={targetAnimRef} />
        </Canvas>
      </div>

      {/* Cinematic HUD elements */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none opacity-50 hidden md:block">
        <div className="flex flex-col items-center gap-4">
          <svg width="24" height="32" viewBox="0 0 24 32" className="relative">
            <path
              d="M 12 4 L 12 24 M 12 24 L 8 20 M 12 24 L 16 20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              className="text-white/60"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.3))',
              }}
            />
          </svg>
          <div
            className="w-1 h-1 rounded-full bg-white/40"
            style={{
              boxShadow: '0 0 6px rgba(255,255,255,0.4)',
            }}
          />
        </div>
      </div>

      <div id="cinematic-hud" className="fixed left-1/2 -translate-x-1/2 bottom-[13svh] z-40 pointer-events-none w-[250px] opacity-0">
        <div className="absolute -top-3 left-0 w-3 h-3 border-l border-t border-white/20" />
        <div className="absolute -top-3 right-0 w-3 h-3 border-r border-t border-white/20" />

        <div className="relative h-px bg-white/10">
          <div
            ref={progressBarRef}
            className="absolute left-0 top-0 h-full bg-linear-to-r from-sky-400/60 to-red-500 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            style={{ width: '0%' }}
          />
        </div>

        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <span ref={progressTextRef} className="text-[10px] font-mono text-white/60 tracking-[0.2em]">
            000%
          </span>
        </div>
      </div>

      {/* Text Overlays for Cinematic Scroll */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {scenePerspectives.map((perspective, index) => (
          <div
            key={index}
            ref={(el) => {
              textRefs.current[index] = el;
            }}
            className={`absolute max-md:w-full ${getPositionClasses(perspective.position)}`}
          >
            <h2 className="cinematic-title text-[2.8vw] max-md:text-[5.5vw] font-extrabold leading-[0.9] mb-3 tracking-tighter uppercase font-syne">
              {perspective.title}
            </h2>
            <p className="text-[0.85vw] max-md:text-[3.2vw] leading-relaxed text-white/70 font-dm-mono uppercase tracking-[0.3em] drop-shadow-lg whitespace-nowrap">
              {perspective.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* The massive scroll track */}
      <div ref={smoothWrapperRef} id="smooth-wrapper" className="relative z-0 pointer-events-none">
        <div ref={smoothContentRef} id="smooth-content">
          <div ref={containerRef} style={{ height: '900svh' }} />
        </div>
      </div>
    </>
  );
}

useGLTF.preload('/assets/models/cyberpunk_skyscraper.glb');
