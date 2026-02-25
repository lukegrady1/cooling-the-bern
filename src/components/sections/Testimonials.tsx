import React from 'react'
import SectionHeader from '../ui/SectionHeader'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

const Testimonials: React.FC = () => {
  return (
    <section className="bg-ice py-24" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted By Central Florida Families"
          subtitle="Don't take our word for it — hear from the homeowners and businesses who rely on us for their HVAC needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
          <div>
            <p className="font-montserrat font-800 text-dark text-5xl">5.0</p>
            <div className="flex justify-center gap-1 mt-1 text-amber-400" aria-label="5 out of 5 stars average rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate text-sm mt-1">Average Rating</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200" aria-hidden="true" />
          <div>
            <p className="font-montserrat font-800 text-dark text-5xl">500+</p>
            <p className="text-slate text-sm mt-2">Happy Customers</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-gray-200" aria-hidden="true" />
          <div>
            <p className="font-montserrat font-800 text-dark text-5xl">12+</p>
            <p className="text-slate text-sm mt-2">Years of Service</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
