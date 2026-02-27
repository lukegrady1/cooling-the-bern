import React from 'react'
import SEOHead from '../components/ui/SEOHead'
import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import ServicesOverview from '../components/sections/ServicesOverview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import ServiceAreaSection from '../components/sections/ServiceArea'
import CTAStrip from '../components/sections/CTAStrip'

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'Cooling The Bern Air Conditioning LLC',
  description: 'Professional HVAC repair, installation, and maintenance services in Kissimmee and Central Florida',
  url: 'https://coolingthebern.com',
  telephone: '+14073089947',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kissimmee',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.4812,
    longitude: -81.3428,
  },
  areaServed: ['Kissimmee', 'Orlando', 'St. Cloud', 'Daytona Beach', 'Central Florida'],
  openingHours: 'Mo-Fr 07:00-18:00',
  priceRange: '$$',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
  },
}

const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cooling The Bern Air Conditioning LLC | Central Florida HVAC Experts | Kissimmee"
        description="Trusted HVAC repair, installation & maintenance in Kissimmee, Orlando & Central Florida. 12+ years experience. Same-day service available. Call (407) 308-9947."
        canonical="https://coolingthebern.com/"
        schemaMarkup={homeSchema}
      />
      <Hero />
      <TrustBar />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreaSection />
      <CTAStrip />
    </>
  )
}

export default Home
