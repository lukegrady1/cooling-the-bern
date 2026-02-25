import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { serviceAreas } from '../../data/serviceArea'

const MapPinIcon: React.FC = () => (
  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
)

const ServiceAreaSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="bg-white py-24" aria-labelledby="service-area-heading">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-light flex items-center justify-center"
              role="img"
              aria-label="Service area map covering Central Florida including Kissimmee, Orlando, and surrounding counties"
            >
              {/* Decorative map placeholder */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(14,165,233,0.5) 0%, transparent 50%),
                                  radial-gradient(circle at 70% 60%, rgba(13,148,136,0.4) 0%, transparent 50%)`,
              }} aria-hidden="true" />
              <div className="text-center p-8 relative z-10">
                <svg className="w-16 h-16 text-sky-brand mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="font-montserrat font-700 text-white text-xl mb-2">Central Florida</p>
                <p className="font-inter text-white/60 text-sm">Kissimmee · Orlando · St. Cloud</p>
                <p className="font-inter text-white/60 text-sm">Daytona &amp; Surrounding Areas</p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                  {serviceAreas.slice(0, 6).map((area) => (
                    <div key={area.city} className="flex items-center gap-1.5 text-sky-brand text-xs font-montserrat font-600">
                      <MapPinIcon />
                      {area.city}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-3">
              Service Area
            </span>
            <h2
              id="service-area-heading"
              className="font-montserrat font-800 text-dark leading-tight mb-5"
              style={{ fontSize: '2.5rem' }}
            >
              Proudly Serving Central Florida
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Based in Kissimmee, we provide HVAC services across Osceola County, Orange County, and the surrounding Central Florida region. Whether you're in a neighborhood subdivision or a large commercial complex, we're ready to help.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {serviceAreas.map((area, i) => (
                <motion.div
                  key={area.city}
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                  className="flex items-center gap-1.5 text-sm text-dark font-montserrat font-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-brand flex-shrink-0" aria-hidden="true" />
                  {area.city}
                </motion.div>
              ))}
            </div>

            <div className="bg-ice rounded-xl p-5 border border-blue-100">
              <p className="font-montserrat font-700 text-dark text-sm mb-1">Not sure if we cover your area?</p>
              <p className="font-inter text-slate text-sm">
                Call us at{' '}
                <a href="tel:+14075552376" className="text-sky-brand hover:text-navy font-semibold transition-colors">
                  (407) 555-BERN
                </a>
                {' '}and we'll let you know right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreaSection
