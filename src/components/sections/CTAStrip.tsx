import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'

interface CTAStripProps {
  title?: string
  subtitle?: string
}

const CTAStrip: React.FC<CTAStripProps> = ({
  title = 'Ready to Stay Cool This Summer?',
  subtitle = 'Get a free, no-obligation estimate today. Same-day appointments available.',
}) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden py-20 grain-overlay"
      style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0EA5E9 100%)' }}
      aria-label="Call to action"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2
            className="font-montserrat font-800 text-white leading-tight mb-4"
            style={{ fontSize: '2.25rem' }}
          >
            {title}
          </h2>
          <p className="font-inter text-white/80 text-lg leading-relaxed mb-10">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              label="Get Free Estimate"
              to="/free-estimate"
              variant="secondary"
              size="lg"
              magnetic={true}
              ariaLabel="Get a free HVAC estimate"
            />
            <Button
              label="Call (407) 308-9947"
              href="tel:+14073089947"
              variant="outlined"
              size="lg"
              ariaLabel="Call us now"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTAStrip
