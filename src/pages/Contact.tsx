import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SEOHead from '../components/ui/SEOHead'
import Button from '../components/ui/Button'

interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const Contact: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (_data: ContactFormData) => {
    // In production, submit to your backend or form service
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <SEOHead
        title="Contact Us | Cooling The Bern Air Conditioning LLC | Kissimmee, FL"
        description="Contact Cooling The Bern for HVAC service in Kissimmee & Central Florida. Call (407) 308-9947 or send a message. Mon–Fri 7AM–6PM."
        canonical="https://coolingthebern.com/contact"
      />

      {/* Page Header */}
      <section className="section-navy grain-overlay py-28 pt-48" aria-label="Contact page header">
        <div className="container-custom relative z-10">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-4">
              Get In Touch
            </span>
            <h1
              className="font-montserrat font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              We're Ready When You Are
            </h1>
            <p className="font-inter text-white/75 text-lg leading-relaxed">
              Reach out by phone, email, or the form below. We typically respond within a few hours during business hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-24" aria-labelledby="contact-form-heading">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact info */}
            <motion.aside
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
              aria-label="Contact information"
            >
              <h2 className="font-montserrat font-700 text-dark text-2xl mb-8">Contact Info</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy text-sky-brand flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.3a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-montserrat font-700 text-dark text-sm mb-0.5">Phone</p>
                    <a href="tel:+14073089947" className="font-inter text-sky-brand hover:text-navy transition-colors font-medium">
                      (407) 308-9947
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy text-sky-brand flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-montserrat font-700 text-dark text-sm mb-0.5">Email</p>
                    <a href="mailto:info@coolingthebern.com" className="font-inter text-sky-brand hover:text-navy transition-colors font-medium text-sm">
                      info@coolingthebern.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy text-sky-brand flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-montserrat font-700 text-dark text-sm mb-0.5">Business Hours</p>
                    <p className="font-inter text-slate text-sm">Monday – Friday</p>
                    <p className="font-inter text-slate text-sm">7:00 AM – 6:00 PM</p>
                    <p className="font-inter text-slate text-xs mt-1 text-teal-brand font-medium">Emergency service available</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-navy text-sky-brand flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-montserrat font-700 text-dark text-sm mb-0.5">Service Area</p>
                    <p className="font-inter text-slate text-sm">Kissimmee, Orlando, St. Cloud,</p>
                    <p className="font-inter text-slate text-sm">Daytona &amp; Central Florida</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div
                className="mt-10 rounded-2xl overflow-hidden aspect-video bg-navy/10 border border-blue-100 flex items-center justify-center"
                role="img"
                aria-label="Map showing Cooling The Bern service area in Kissimmee, Florida"
              >
                <div className="text-center p-6">
                  <svg className="w-10 h-10 text-sky-brand mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="font-montserrat font-600 text-dark text-sm">Kissimmee, FL 34741</p>
                  <p className="font-inter text-slate text-xs mt-1">Serving all of Central Florida</p>
                </div>
              </div>
            </motion.aside>

            {/* Contact form */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <h2 id="contact-form-heading" className="font-montserrat font-700 text-dark text-2xl mb-8">Send a Message</h2>

              {submitted ? (
                <div className="bg-teal-brand/10 border border-teal-brand/30 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-brand/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-montserrat font-700 text-dark text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate">Thank you for reaching out. We'll get back to you within a few hours during business hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sky-brand hover:text-navy font-montserrat font-600 text-sm transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Contact form"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="form-label">
                        Full Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        aria-required="true"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        {...register('name', { required: 'Full name is required' })}
                      />
                      {errors.name && (
                        <p id="name-error" className="form-error" role="alert">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(407) 555-0000"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        {...register('phone', {
                          pattern: {
                            value: /^[\d\s\-+().]{7,}$/,
                            message: 'Please enter a valid phone number',
                          },
                        })}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="form-error" role="alert">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="form-label">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="john@example.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email', {
                        required: 'Email address is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p id="email-error" className="form-error" role="alert">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="form-label">
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      className="form-input"
                      {...register('service')}
                    >
                      <option value="">Select a service...</option>
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>AC Maintenance</option>
                      <option>Air Duct Installation</option>
                      <option>Air Duct Cleaning</option>
                      <option>Mini-Split System</option>
                      <option>Commercial HVAC</option>
                      <option>Heat Pump</option>
                      <option>Indoor Air Quality</option>
                      <option>Smart Thermostat</option>
                      <option>New Construction</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell us about your HVAC issue or question..."
                      className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      {...register('message', { required: 'Please include a message' })}
                    />
                    {errors.message && (
                      <p id="message-error" className="form-error" role="alert">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    label={isSubmitting ? 'Sending...' : 'Send Message'}
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full justify-center"
                    ariaLabel="Submit contact form"
                  />
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
