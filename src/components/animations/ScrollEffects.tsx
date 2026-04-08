'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Magnetic cursor effect hook
export function useMagneticCursor(strength = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      
      x.set(deltaX);
      y.set(deltaY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength, x, y]);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  return { ref, x: springX, y: springY, isHovered };
}

interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'x' | 'y';
  className?: string;
}

// Scroll-linked parallax component
export function ScrollParallax({ 
  children, 
  speed = 0.5, 
  direction = 'y',
  className = '' 
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const yRange = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const xRange = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
  
  const springY = useSpring(yRange, { stiffness: 100, damping: 30, mass: 0.5 });
  const springX = useSpring(xRange, { stiffness: 100, damping: 30, mass: 0.5 });

  const transformValue = direction === 'y' ? { y: springY } : { x: springX };

  return (
    <motion.div ref={ref} style={transformValue} className={className}>
      {children}
    </motion.div>
  );
}

interface InfiniteScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

// Infinite scroll reveal effect
export function InfiniteScrollReveal({ children, className = '' }: InfiniteScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface DepthLayerProps {
  children: React.ReactNode;
  depth?: number;
  className?: string;
}

// Depth layer component for z-axis illusion
export function DepthLayer({ 
  children, 
  depth = 1, 
  className = '' 
}: DepthLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const springConfig = { stiffness: 50, damping: 20, mass: 0.5 };
  const x = useSpring(position.x * depth * 20, springConfig);
  const y = useSpring(position.y * depth * 20, springConfig);
  const rotateX = useSpring(position.y * depth * 5, springConfig);
  const rotateY = useSpring(-position.x * depth * 5, springConfig);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollTimelineOptions {
  start?: string;
  end?: string;
  scrub?: number | boolean;
  markers?: boolean;
  scrollTrigger?: any;
  animations?: (timeline: gsap.core.Timeline, element: HTMLElement) => void;
}

// GSAP scroll timeline hook
export function useScrollTimeline(ref: React.RefObject<HTMLElement | null>, options: ScrollTimelineOptions = {}) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top bottom',
        end: options.end || 'bottom top',
        scrub: options.scrub ?? 1,
        markers: options.markers || false,
        ...options.scrollTrigger
      }
    });

    if (options.animations) {
      options.animations(timeline, element);
    }

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [ref, options]);
}

interface StaggerRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  duration?: number;
  className?: string;
}

// Stagger reveal animation
export function StaggerReveal({ 
  children, 
  staggerDelay = 0.1,
  duration = 0.8,
  className = '' 
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration, 
        ease: [0.25, 0.1, 0.25, 1] as any // Casting to any to avoid strict Easing type issues
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
}

// Smooth cursor follower
export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      if (cursor) {
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      }
      if (cursorDot) {
        cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-10 h-10 rounded-full border border-cyan-500/50 pointer-events-none z-[9999] transition-all duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150 bg-cyan-500/10' : 'scale-100'}`}
        style={{ mixBlendMode: 'difference' }}
      />
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none z-[9999] ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </>
  );
}