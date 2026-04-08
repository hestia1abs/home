'use client'

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, access_type: 'general' }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        toast.success('Welcome to the waitlist! We\'ll be in touch soon.');
      } else {
        const data = await response.json();
        toast.error(data.detail || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={ref}
      id="cta"
      data-testid="cta-section"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/5 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-cyan-400 mb-6 block">
                Get in touch
              </span>
              <h2 
                data-testid="cta-headline"
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
              >
                Build the next layer of real-world intelligence.
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                If you are working on private infrastructure, residential systems, or hardware-aware AI experiences, 
                we would love to hear what you are building.
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-md lg:ml-auto">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-heading text-xl text-white mb-2">You're on the list</h3>
                  <p className="text-zinc-400 text-sm">We'll reach out when it's your turn.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      data-testid="cta-email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-zinc-500 focus:border-cyan-500/50 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.2)] outline-none transition-all text-sm tracking-wide"
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="cta-submit-btn"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-black text-sm font-bold tracking-[0.1em] uppercase rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Access
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              <p className="text-zinc-500 text-xs mt-4 leading-relaxed">
                For product pilots, hardware partnerships, and early deployments, write to us directly at{' '}
                <a href="mailto:contact@hestialabs.in" className="text-cyan-400 hover:underline">
                  contact@hestialabs.in
                </a>
              </p>
            </div>
          </div>

          {/* Social proof */}
          <div className="relative z-10 mt-12 pt-10 border-t border-white/10 flex flex-col items-center gap-6">
            <div className="flex -space-x-3">
              {['A', 'B', 'C', 'D', 'E', 'F'].map((letter, i) => (
                <div
                  key={letter}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-800 border-2 border-[#050505] flex items-center justify-center text-xs font-bold text-zinc-400"
                  style={{ zIndex: 6 - i }}
                >
                  {letter}
                </div>
              ))}
            </div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-cyan-400/40 text-center">
              Active conversations across residential, hardware, and systems design teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}