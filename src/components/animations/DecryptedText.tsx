'use client'

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover' | 'inViewHover' | 'click';
  clickMode?: 'once' | 'toggle';
}

type Direction = 'forward' | 'reverse';

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'once',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isDecrypted, setIsDecrypted] = useState<boolean>(animateOn !== 'click');
  const [direction, setDirection] = useState<Direction>('forward');

  const containerRef = useRef<HTMLSpanElement>(null);
  const orderRef = useRef<number[]>([]);
  const pointerRef = useRef<number>(0);
  const timeoutRef = useRef<number>(0);

  const availableChars = useMemo<string[]>(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter(char => char !== ' ')
      : characters.split('');
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split('')
        .map((char, i) => {
          if (char === ' ') return ' ';
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join('');
    },
    [availableChars]
  );

  const computeOrder = useCallback(
    (len: number): number[] => {
      const order: number[] = [];
      if (len <= 0) return order;
      if (revealDirection === 'start') {
        for (let i = 0; i < len; i++) order.push(i);
        return order;
      }
      if (revealDirection === 'end') {
        for (let i = len - 1; i >= 0; i--) order.push(i);
        return order;
      }
      const middle = Math.floor(len / 2);
      let offset = 0;
      while (order.length < len) {
        if (offset % 2 === 0) {
          const idx = middle + offset / 2;
          if (idx >= 0 && idx < len) order.push(idx);
        } else {
          const idx = middle - Math.ceil(offset / 2);
          if (idx >= 0 && idx < len) order.push(idx);
        }
        offset++;
      }
      return order.slice(0, len);
    },
    [revealDirection]
  );

  const fillAllIndices = useCallback((): Set<number> => {
    const s = new Set<number>();
    for (let i = 0; i < text.length; i++) s.add(i);
    return s;
  }, [text]);

  const triggerDecrypt = useCallback(() => {
    if (sequential) {
      orderRef.current = computeOrder(text.length);
      pointerRef.current = 0;
    }
    setRevealedIndices(new Set());
    setDirection('forward');
    setIsAnimating(true);
  }, [sequential, computeOrder, text.length]);

  const triggerReverse = useCallback(() => {
    if (sequential) {
      orderRef.current = computeOrder(text.length).slice().reverse();
      pointerRef.current = 0;
    }
    setRevealedIndices(fillAllIndices());
    setDirection('reverse');
    setIsAnimating(true);
  }, [sequential, computeOrder, fillAllIndices, text.length]);

  useEffect(() => {
    if (!isAnimating) return;

    let iteration = 0;
    const tick = () => {
      setRevealedIndices(prev => {
        const nextSet = new Set(prev);
        
        if (sequential) {
          if (direction === 'forward') {
            if (nextSet.size < text.length) {
              const batchSize = Math.max(1, Math.floor(text.length / 20)); // Batch for speed/perf
              for(let b=0; b<batchSize && nextSet.size < text.length; b++) {
                nextSet.add(orderRef.current[nextSet.size]);
              }
              setDisplayText(shuffleText(text, nextSet));
              timeoutRef.current = window.setTimeout(tick, speed);
              return nextSet;
            } else {
              setIsAnimating(false);
              setIsDecrypted(true);
              return nextSet;
            }
          } else {
            if (pointerRef.current < orderRef.current.length) {
              const batchSize = Math.max(1, Math.floor(text.length / 20));
              for(let b=0; b<batchSize && pointerRef.current < orderRef.current.length; b++) {
                nextSet.delete(orderRef.current[pointerRef.current++]);
              }
              setDisplayText(shuffleText(text, nextSet));
              timeoutRef.current = window.setTimeout(tick, speed);
              return nextSet;
            } else {
              setIsAnimating(false);
              setIsDecrypted(false);
              return nextSet;
            }
          }
        } else {
          if (direction === 'forward') {
            setDisplayText(shuffleText(text, prev));
            iteration++;
            if (iteration >= maxIterations) {
              setIsAnimating(false);
              setDisplayText(text);
              setIsDecrypted(true);
            } else {
              timeoutRef.current = window.setTimeout(tick, speed);
            }
            return prev;
          } else {
            // Reverse logic... simplified for perf
            setIsAnimating(false);
            setIsDecrypted(false);
            setDisplayText(shuffleText(text, new Set()));
            return new Set();
          }
        }
      });
    };

    timeoutRef.current = window.setTimeout(tick, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [isAnimating, direction, sequential, text, speed, maxIterations, shuffleText]);

  const triggerHoverDecrypt = useCallback(() => {
    if (isAnimating) return;
    setIsDecrypted(false);
    triggerDecrypt();
  }, [isAnimating, triggerDecrypt]);

  const resetToPlainText = useCallback(() => {
    setIsAnimating(false);
    setDisplayText(text);
    setIsDecrypted(true);
  }, [text]);

  const handleClick = () => {
    if (animateOn !== 'click') return;
    if (clickMode === 'toggle' && isDecrypted) {
      triggerReverse();
    } else {
      triggerDecrypt();
    }
  };

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'inViewHover') return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        triggerDecrypt();
        setHasAnimated(true);
      }
    }, { threshold: 0.1 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [animateOn, hasAnimated, triggerDecrypt]);

  const animateProps = animateOn === 'hover' || animateOn === 'inViewHover'
    ? { onMouseEnter: triggerHoverDecrypt, onMouseLeave: resetToPlainText }
    : animateOn === 'click' ? { onClick: handleClick } : {};

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${parentClassName}`}
      {...animateProps}
      {...props}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {displayText}
      </span>
    </motion.span>
  );
}
