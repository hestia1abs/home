'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TrueTypewriterProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // s
  className?: string;
  cursor?: boolean;
  animateOn?: 'view' | 'load';
}

/**
 * TrueTypewriter: A high-performance typewriter effect that supports multi-line text
 * and ensures the cursor correctly follows the paragraph flow to the final line.
 */
export default function TrueTypewriter({
  text,
  speed = 15, // SNAPPY DEFAULT
  delay = 0,
  className = '',
  cursor = true,
  animateOn = 'view',
}: TrueTypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const shouldAnimate = animateOn === 'load' || (animateOn === 'view' && isInView);

  useEffect(() => {
    if (!shouldAnimate || isDone) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
        // Use a slightly randomized speed for a more natural "termincal" feel if needed,
        // but here we keep it constant for cinematic precision.
        timeoutId = setTimeout(type, speed);
      } else {
        setIsDone(true);
      }
    };

    const startTimeout = setTimeout(type, delay * 1000);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay, shouldAnimate, isDone]);

  return (
    <span 
      ref={containerRef} 
      className={`inline ${className}`}
      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
    >
      {/* Current revealed text segment */}
      {displayedText}
      
      {/* 
          The cursor is placed INLINE so it naturally moves Line-by-Line 
          along with the character reveal, fixing the issue where it 
          stayed on the first line.
      */}
      {cursor && (
        <motion.span
          animate={{ 
            opacity: isDone ? [1, 0] : [1, 0],
            display: isDone ? 'none' : 'inline-block' 
          }}
          transition={{ 
            opacity: { duration: 0.4, repeat: isDone ? 0 : Infinity, repeatType: "reverse" },
            display: { delay: 0.5 } // Hide shortly after completion
          }}
          className="inline-block w-[0.5em] h-[1em] bg-cyan-400/90 ml-1 translate-y-[0.1em]"
        >
          {/* Using a non-breaking space or a block character */}
          &nbsp;
        </motion.span>
      )}
    </span>
  );
}
