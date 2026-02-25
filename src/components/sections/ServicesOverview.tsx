import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { services } from '../../data/services'

const ServicesOverview: React.FC = () => {
  const featuredServices = services.slice(0, 6)

  return (
    <section className="section-navy grain-overlay py-24" aria-labelledby="services-heading">
      <div className="container-custom relative z-10">
        <SectionHeader
          eyebrow="What We Do"
          title="Complete HVAC Solutions"
          subtitle="From emergency AC repairs to full system installations, we handle every aspect of your home's cooling and heating needs."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} dark />
          ))}
        </div>

        <div className="text-center">
          <Button
            label="View All 11 Services"
            to="/services"
            variant="outlined"
            size="md"
            ariaLabel="View all HVAC services"
          />
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
