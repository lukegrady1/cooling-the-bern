import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SEOHead from '../components/ui/SEOHead'
import CTAStrip from '../components/sections/CTAStrip'
import Button from '../components/ui/Button'

const stats = [
  { value: '12+', label: 'Years of Experience' },
  { value: '10', label: 'Years Duct Installation' },
  { value: '500+', label: 'Customers Served' },
  { value: '20-ton', label: 'Largest Commercial Job' },
]

const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SEOHead
        title="About Us | Cooling The Bern Air Conditioning LLC | Kissimmee HVAC Experts"
        description="Meet the team behind Cooling The Bern. 12+ years of HVAC expertise serving Kissimmee and Central Florida. Licensed, trusted, and community-focused."
        canonical="https://coolingthebern.com/about"
      />

      {/* Page Header */}
      <section
        className="section-navy grain-overlay py-28 pt-48"
        aria-label="About page header"
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-4">
              Our Story
            </span>
            <h1
              className="font-montserrat font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              More Than HVAC — We're Your Neighbors
            </h1>
            <p className="font-inter text-white/75 text-lg leading-relaxed">
              Built on a foundation of expertise, hard work, and genuine care for every customer. This is the Cooling The Bern story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-24" aria-labelledby="founder-story-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Photo placeholder */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-end overflow-hidden relative"
                role="img"
                aria-label="Founder of Cooling The Bern Air Conditioning LLC, HVAC professional at work"
              >
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10" aria-hidden="true">
                  <svg className="w-48 h-48 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                {/* Caption */}
                <div className="relative z-10 p-6">
                  <p className="font-montserrat font-700 text-white text-lg">Founder & Lead Technician</p>
                  <p className="font-inter text-white/70 text-sm">Kissimmee, Florida</p>
                </div>
              </div>

              {/* Stats below image */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-ice rounded-xl p-4 text-center border border-blue-100">
                    <p className="font-montserrat font-800 text-dark text-2xl">{stat.value}</p>
                    <p className="font-inter text-slate text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-3">
                The Cooling The Bern Story
              </span>
              <h2
                id="founder-story-heading"
                className="font-montserrat font-800 text-dark leading-tight mb-6"
                style={{ fontSize: '2.25rem' }}
              >
                A Man on a Mission to Cool the Bern
              </h2>

              <div className="space-y-5 text-slate leading-relaxed">
                <p>
                  With over <strong className="text-dark font-semibold">12 years of hands-on HVAC experience</strong> — including a decade specializing in air duct installation and 4 years as a Florida-licensed HVAC technician — Cooling The Bern was built on a simple principle: treat every customer like family, and never cut corners.
                </p>
                <p>
                  What began as a passion for precision and a deep knowledge of how air moves through a building grew into one of Central Florida's most trusted air conditioning companies. From day one, the mission has been clear: bring big-company expertise with small-company heart to every single job.
                </p>
                <p>
                  Our portfolio spans the full spectrum of HVAC work. On the residential side, we've helped hundreds of Kissimmee and Orlando homeowners stay comfortable through brutal Florida summers. On the commercial side, we've tackled major projects — including <strong className="text-dark font-semibold">replacing a 20-ton commercial chiller with a new Carrier unit</strong> at the Museum of Arts and Science in Daytona Beach — a testament to our capability and the trust institutions place in our team.
                </p>
                <p>
                  We operate out of Kissimmee, deep in the heart of Osceola County, and we serve our neighbors with the same dedication we'd want for ourselves. When your AC goes out in the middle of a Florida summer, you need someone fast, honest, and capable. That's exactly what we deliver.
                </p>
                <p>
                  Whether it's a routine maintenance visit, an emergency repair, a full system replacement, or a complex commercial installation, Cooling The Bern brings the same commitment to excellence to every project. We're not just here to fix your AC — we're here to earn your trust for life.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  label="Get Free Estimate"
                  to="/free-estimate"
                  variant="primary"
                  ariaLabel="Request a free estimate"
                />
                <Button
                  label="Contact Us"
                  to="/contact"
                  variant="secondary"
                  ariaLabel="Contact Cooling The Bern"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-ice py-20" aria-labelledby="values-heading">
        <div className="container-custom">
          <h2 id="values-heading" className="sr-only">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: 'Integrity',
                description: 'We never recommend work that isn\'t needed. Our quotes are transparent, our pricing is fair, and our word is our bond.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                title: 'Excellence',
                description: 'Every installation, every repair, every tune-up is completed with precision and care — as if it were our own home.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: 'Community',
                description: 'We live here, raise our families here, and genuinely care about the wellbeing of our Central Florida neighbors.',
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 border border-blue-100 shadow-glass"
              >
                <div className="w-16 h-16 rounded-2xl bg-navy text-sky-brand flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-montserrat font-700 text-dark text-xl mb-3">{value.title}</h3>
                <p className="font-inter text-slate text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        title="Let's Work Together"
        subtitle="Ready to experience the Cooling The Bern difference? Contact us today for a free estimate."
      />
    </>
  )
}

export default About
