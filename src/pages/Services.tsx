import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import SEOHead from '../components/ui/SEOHead'
import ServiceCard from '../components/ui/ServiceCard'
import SectionHeader from '../components/ui/SectionHeader'
import CTAStrip from '../components/sections/CTAStrip'
import Button from '../components/ui/Button'
import { services } from '../data/services'

const Services: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SEOHead
        title="HVAC Services | Cooling The Bern Air Conditioning LLC | Kissimmee, FL"
        description="Full-service HVAC in Kissimmee & Central Florida. AC repair, installation, maintenance, duct work, mini-splits, commercial HVAC & more. Get a free estimate today."
        canonical="https://coolingthebern.com/services"
      />

      {/* Page Header */}
      <section
        className="section-navy grain-overlay py-28 pt-48"
        aria-label="Services page header"
      >
        <div className="container-custom relative z-10">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-4">
              Our Services
            </span>
            <h1
              className="font-montserrat font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Complete HVAC Solutions for Every Need
            </h1>
            <p className="font-inter text-white/75 text-lg leading-relaxed">
              From emergency repairs to full system installations, we offer 11 comprehensive HVAC services to keep Central Florida comfortable year-round.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-24" aria-labelledby="all-services-heading">
        <div className="container-custom">
          <SectionHeader
            eyebrow="All Services"
            title="What We Offer"
            subtitle="Every service is backed by 12+ years of expertise and a commitment to doing the job right the first time."
          />

          <div id="all-services-heading" className="sr-only">All HVAC Services</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.slug}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>

          {/* CTA box */}
          <div className="bg-ice rounded-2xl p-10 text-center border border-blue-100">
            <h2 className="font-montserrat font-800 text-dark text-3xl mb-3">
              Need a Service Not Listed?
            </h2>
            <p className="text-slate text-lg mb-8 max-w-xl mx-auto">
              We handle a wide range of HVAC needs. If you don't see exactly what you're looking for, give us a call — we probably do it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button label="Get Free Estimate" to="/free-estimate" variant="primary" ariaLabel="Request a free estimate" />
              <Button label="Call Us Now" href="tel:+14075552376" variant="secondary" ariaLabel="Call Cooling The Bern" />
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        title="Not Sure Which Service You Need?"
        subtitle="Our expert technicians will diagnose your issue and recommend the right solution — free of charge."
      />
    </>
  )
}

export default Services
