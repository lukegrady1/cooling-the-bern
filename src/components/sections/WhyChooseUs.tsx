import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'

interface Reason {
  icon: React.ReactNode
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Licensed & Certified',
    description: 'Florida CAC licensed technicians with the training and credentials to handle any HVAC job safely and correctly.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Rapid Response',
    description: 'When your AC fails in the Florida heat, every minute matters. We offer fast scheduling with same-day availability.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'No surprise bills. We provide clear, upfront estimates before any work begins — and we stick to them.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Family-First Service',
    description: 'We treat every customer like family. From your first call to project completion, you\'ll always know what\'s happening.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Commercial-Grade Experience',
    description: 'From small residential repairs to 20-ton commercial chiller replacements, our experience spans the full spectrum.',
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Locally Rooted',
    description: 'We live and work right here in Central Florida. We understand the local climate and serve our neighbors.',
  },
]

const WhyChooseUs: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-white py-24" aria-labelledby="why-us-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-3">
              Why Choose Us
            </span>
            <h2
              id="why-us-heading"
              className="font-montserrat font-800 text-dark leading-tight mb-6"
              style={{ fontSize: '2.5rem' }}
            >
              The Standard You Deserve
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              With over 12 years of hands-on HVAC experience — including 10 years specializing in duct installation and 4 years as a licensed technician — we bring a depth of expertise that protects your investment and maximizes your comfort.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              From replacing a 20-ton commercial chiller at the Museum of Arts and Science in Daytona to fine-tuning a residential system in Kissimmee, we approach every job with the same level of dedication, precision, and professionalism.
            </p>
            <Button
              label="About Our Story"
              to="/about"
              variant="secondary"
              ariaLabel="Learn about Cooling The Bern"
            />
          </div>

          {/* Right column — reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="bg-ice rounded-xl p-5 border border-blue-100 hover:border-sky-brand/30 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-navy text-sky-brand flex items-center justify-center mb-3">
                  {reason.icon}
                </div>
                <h3 className="font-montserrat font-700 text-dark text-base mb-1.5">{reason.title}</h3>
                <p className="font-inter text-slate text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
