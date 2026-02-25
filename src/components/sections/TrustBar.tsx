import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface TrustItem {
  icon: React.ReactNode
  title: string
  description: string
}

const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ShieldIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ClockIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const StarOutlineIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const trustItems: TrustItem[] = [
  {
    icon: <CheckIcon />,
    title: '12+ Years Experience',
    description: 'A decade of expertise in ductwork and licensed HVAC service',
  },
  {
    icon: <ClockIcon />,
    title: 'Same-Day Service',
    description: 'Fast response when you need it most — even on short notice',
  },
  {
    icon: <ShieldIcon />,
    title: 'Licensed & Insured',
    description: 'Florida CAC certified with full liability coverage on every job',
  },
  {
    icon: <StarOutlineIcon />,
    title: '5-Star Rated',
    description: 'Consistently rated 5 stars by homeowners across Central Florida',
  },
]

const TrustBar: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-ice py-10 border-y border-blue-100" aria-label="Trust indicators">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="flex items-start gap-3"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-sky-brand mt-0.5">
                {item.icon}
              </div>
              <div>
                <p className="font-montserrat font-700 text-dark text-sm leading-tight">{item.title}</p>
                <p className="font-inter text-slate text-xs mt-1 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
