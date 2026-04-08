'use client'

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TrueTypewriterProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // s
  className?: string;
  cursor?: boolean;
  animateOn?: 'view' | 'load';
}

export default function TrueTypewriter({
  text,
  speed = 8, // Faster default
  delay = 0,
  className = '',
  cursor = true,
  animateOn = 'view',
}: TrueTypewriterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const shouldAnimate = animateOn === 'load' || (animateOn === 'view' && isInView);
  
  // Calculate total duration based on text length to keep it snappy
  const charCount = text.length;
  // Never exceed 1.2s for a paragraph, never faster than 0.3s
  const duration = Math.min(Math.max(charCount * (speed / 1000), 0.3), 1.2);

  return (
    <span 
      ref={containerRef} 
      className={`relative inline-block ${className}`}
    >
      {/* Primary text with reveal animation */}
      <motion.span
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={shouldAnimate ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ 
          duration, 
          delay, 
          ease: "linear",
          // The "steps" function makes it look like a typewriter by revealing in chunks
          // We use charCount as steps to simulate character-by-character reveal
          type: "tween" 
        }}
        className="inline-block"
      >
        {text}
      </motion.span>

      {/* Cursor implementation */}
      {cursor && (
        <motion.span
          initial={{ left: "0%" }}
          animate={shouldAnimate ? { left: "100%" } : {}}
          transition={{ 
            duration, 
            delay, 
            ease: "linear"
          }}
          className="absolute top-0 bottom-0 w-[0.6em] bg-cyan-400 opacity-70 flex items-center justify-center font-mono pointer-events-none"
          style={{ 
            height: '1.2em',
            translateY: '0.1em'
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          >
            █
          </motion.span>
        </motion.span>
      )}

      {/* Hidden text for layout stability */}
      <span className="invisible select-none pointer-events-none absolute left-0 top-0">
        {text}
      </span>
    </span>
  );
}
