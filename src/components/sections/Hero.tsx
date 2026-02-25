import React, { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section
      ref={heroRef}
      className="hero-bg grain-overlay"
      aria-label="Hero section"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-brand/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal-brand/10 blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-40 md:py-48">
        <motion.div
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="inline-flex items-center gap-2 bg-sky-brand/15 border border-sky-brand/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-sky-brand animate-pulse" aria-hidden="true" />
            <span className="font-montserrat font-600 text-sky-brand text-xs tracking-widest uppercase">
              Kissimmee &amp; Central Florida
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={prefersReducedMotion ? {} : itemVariants}
            className="font-montserrat font-800 text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Central Florida's{' '}
            <span className="text-gradient">Trusted HVAC</span> Experts
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={prefersReducedMotion ? {} : itemVariants}
            className="font-inter text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Keeping Kissimmee &amp; Orlando Cool Since Day One.{' '}
            <em className="font-montserrat font-300 italic text-white/70 not-italic">
              Fast. Reliable. Affordable.
            </em>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button
              label="Get Free Estimate"
              to="/free-estimate"
              variant="primary"
              size="lg"
              magnetic={true}
              ariaLabel="Get a free HVAC estimate"
            />
            <Button
              label="View Our Services"
              to="/services"
              variant="outlined"
              size="lg"
              ariaLabel="Browse our HVAC services"
            />
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={prefersReducedMotion ? {} : itemVariants}
            className="flex flex-wrap gap-6"
          >
            {[
              { value: '12+', label: 'Years Experience' },
              { value: 'Same-Day', label: 'Service Available' },
              { value: 'Licensed', label: 'FL CAC Certified' },
              { value: '500+', label: 'Happy Customers' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-brand flex-shrink-0" aria-hidden="true" />
                <span className="font-montserrat font-700 text-white text-sm">
                  {item.value}{' '}
                  <span className="font-inter font-400 text-white/60">{item.label}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-inter text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
