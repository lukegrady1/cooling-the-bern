import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import SEOHead from '../components/ui/SEOHead'
import Button from '../components/ui/Button'

interface EstimateFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  propertyType: string
  serviceType: string
  urgency: string
  squareFootage: string
  currentSystem: string
  systemAge: string
  address: string
  city: string
  zipCode: string
  issues: string
  preferredContact: string
  preferredTime: string
  additionalNotes: string
}

const FreeEstimate: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EstimateFormData>()

  const onSubmit = async (_data: EstimateFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    reset()
  }

  return (
    <>
      <SEOHead
        title="Free HVAC Estimate | Cooling The Bern Air Conditioning LLC | Kissimmee, FL"
        description="Get a free, no-obligation HVAC estimate from Cooling The Bern. Serving Kissimmee, Orlando & Central Florida. Fast response, honest pricing. Request yours today."
        canonical="https://coolingthebern.com/free-estimate"
      />

      {/* Hero banner */}
      <section
        className="section-navy grain-overlay py-20 pt-48"
        aria-label="Free estimate page header"
        style={{ background: 'linear-gradient(135deg, #0A2342 0%, #0EA5E9 100%)' }}
      >
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-white" aria-hidden="true" />
              <span className="font-montserrat font-600 text-white text-xs tracking-widest uppercase">
                100% Free — No Obligation
              </span>
            </span>
            <h1
              className="font-montserrat font-800 text-white leading-tight mb-5 mx-auto"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: '600px' }}
            >
              Get Your Free HVAC Estimate
            </h1>
            <p className="font-inter text-white/80 text-lg leading-relaxed max-w-xl mx-auto">
              Tell us about your HVAC needs and we'll get back to you with a clear, honest estimate — usually within hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-20" aria-labelledby="estimate-form-heading">
        <div className="container-custom max-w-3xl">
          <h2 id="estimate-form-heading" className="sr-only">Free Estimate Request Form</h2>

          {submitted ? (
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
              className="bg-teal-brand/10 border border-teal-brand/30 rounded-2xl p-14 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-teal-brand/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-teal-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-montserrat font-800 text-dark text-2xl mb-3">Estimate Request Received!</h3>
              <p className="text-slate leading-relaxed max-w-md mx-auto mb-8">
                Thank you! We've received your estimate request and will reach out to you within a few hours during business hours (Mon–Fri, 7 AM – 6 PM).
              </p>
              <p className="font-montserrat font-600 text-dark text-sm mb-1">Need immediate assistance?</p>
              <a href="tel:+14075552376" className="text-sky-brand hover:text-navy font-montserrat font-700 transition-colors">
                Call (407) 555-BERN
              </a>
              <div className="mt-8">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-slate hover:text-dark text-sm font-montserrat transition-colors"
                >
                  Submit another request
                </button>
              </div>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="Free estimate request form"
              className="space-y-8"
            >
              {/* Contact Information */}
              <fieldset>
                <legend className="font-montserrat font-700 text-dark text-xl mb-6 pb-3 border-b border-gray-100 w-full">
                  1. Contact Information
                </legend>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="est-firstName" className="form-label">
                      First Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="est-firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="John"
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      aria-required="true"
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && <p className="form-error" role="alert">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="est-lastName" className="form-label">
                      Last Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="est-lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Smith"
                      className={`form-input ${errors.lastName ? 'error' : ''}`}
                      aria-required="true"
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && <p className="form-error" role="alert">{errors.lastName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="est-email" className="form-label">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="est-email"
                      type="email"
                      autoComplete="email"
                      placeholder="john@example.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      aria-required="true"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' },
                      })}
                    />
                    {errors.email && <p className="form-error" role="alert">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="est-phone" className="form-label">
                      Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="est-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(407) 555-0000"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      aria-required="true"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: { value: /^[\d\s\-+().]{7,}$/, message: 'Invalid phone number' },
                      })}
                    />
                    {errors.phone && <p className="form-error" role="alert">{errors.phone.message}</p>}
                  </div>
                </div>
              </fieldset>

              {/* Property Information */}
              <fieldset>
                <legend className="font-montserrat font-700 text-dark text-xl mb-6 pb-3 border-b border-gray-100 w-full">
                  2. Property Details
                </legend>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="est-propertyType" className="form-label">Property Type</label>
                    <select id="est-propertyType" className="form-input" {...register('propertyType')}>
                      <option value="">Select type...</option>
                      <option>Single-Family Home</option>
                      <option>Condo / Apartment</option>
                      <option>Townhouse</option>
                      <option>Mobile / Manufactured Home</option>
                      <option>Commercial Building</option>
                      <option>Office Space</option>
                      <option>Retail / Restaurant</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="est-squareFootage" className="form-label">Approximate Square Footage</label>
                    <select id="est-squareFootage" className="form-input" {...register('squareFootage')}>
                      <option value="">Select range...</option>
                      <option>Under 1,000 sq ft</option>
                      <option>1,000 – 1,500 sq ft</option>
                      <option>1,500 – 2,000 sq ft</option>
                      <option>2,000 – 2,500 sq ft</option>
                      <option>2,500 – 3,000 sq ft</option>
                      <option>3,000 – 4,000 sq ft</option>
                      <option>Over 4,000 sq ft</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="est-address" className="form-label">Street Address</label>
                    <input
                      id="est-address"
                      type="text"
                      autoComplete="street-address"
                      placeholder="123 Main Street"
                      className="form-input"
                      {...register('address')}
                    />
                  </div>
                  <div>
                    <label htmlFor="est-city" className="form-label">City</label>
                    <input
                      id="est-city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Kissimmee"
                      className="form-input"
                      {...register('city')}
                    />
                  </div>
                  <div>
                    <label htmlFor="est-zipCode" className="form-label">Zip Code</label>
                    <input
                      id="est-zipCode"
                      type="text"
                      autoComplete="postal-code"
                      placeholder="34741"
                      className="form-input"
                      {...register('zipCode')}
                    />
                  </div>
                </div>
              </fieldset>

              {/* HVAC System Details */}
              <fieldset>
                <legend className="font-montserrat font-700 text-dark text-xl mb-6 pb-3 border-b border-gray-100 w-full">
                  3. Current HVAC System
                </legend>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="est-currentSystem" className="form-label">Current System Type</label>
                    <select id="est-currentSystem" className="form-input" {...register('currentSystem')}>
                      <option value="">Select system...</option>
                      <option>Central Air / Ducted</option>
                      <option>Mini-Split / Ductless</option>
                      <option>Heat Pump</option>
                      <option>Window Unit(s)</option>
                      <option>No Existing System</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="est-systemAge" className="form-label">Approximate System Age</label>
                    <select id="est-systemAge" className="form-input" {...register('systemAge')}>
                      <option value="">Select age...</option>
                      <option>Less than 5 years</option>
                      <option>5 – 10 years</option>
                      <option>10 – 15 years</option>
                      <option>Over 15 years</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              {/* Service Request */}
              <fieldset>
                <legend className="font-montserrat font-700 text-dark text-xl mb-6 pb-3 border-b border-gray-100 w-full">
                  4. Service Request
                </legend>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="est-serviceType" className="form-label">
                      Service Needed <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="est-serviceType"
                      className={`form-input ${errors.serviceType ? 'error' : ''}`}
                      aria-required="true"
                      {...register('serviceType', { required: 'Please select a service' })}
                    >
                      <option value="">Select service...</option>
                      <option>AC Repair</option>
                      <option>AC Installation / Replacement</option>
                      <option>AC Maintenance / Tune-Up</option>
                      <option>Air Duct Installation</option>
                      <option>Air Duct Cleaning</option>
                      <option>Mini-Split Installation</option>
                      <option>Commercial HVAC</option>
                      <option>Heat Pump</option>
                      <option>Indoor Air Quality</option>
                      <option>Smart Thermostat</option>
                      <option>New Construction HVAC</option>
                      <option>Multiple Services</option>
                      <option>Not Sure — Need Diagnosis</option>
                    </select>
                    {errors.serviceType && <p className="form-error" role="alert">{errors.serviceType.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="est-urgency" className="form-label">Urgency Level</label>
                    <select id="est-urgency" className="form-input" {...register('urgency')}>
                      <option value="">Select urgency...</option>
                      <option>Emergency — AC is out now</option>
                      <option>Urgent — Within 24 hours</option>
                      <option>Soon — Within the week</option>
                      <option>Planning — Next few weeks</option>
                      <option>Future — Just getting quotes</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="est-issues" className="form-label">
                    Describe Your Issue or Project
                  </label>
                  <textarea
                    id="est-issues"
                    rows={4}
                    placeholder="E.g., 'AC stopped blowing cold air yesterday', 'Need full system replacement', 'Installing in a new addition'..."
                    className="form-input resize-none"
                    {...register('issues')}
                  />
                </div>
              </fieldset>

              {/* Contact Preferences */}
              <fieldset>
                <legend className="font-montserrat font-700 text-dark text-xl mb-6 pb-3 border-b border-gray-100 w-full">
                  5. Contact Preferences
                </legend>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="est-preferredContact" className="form-label">Preferred Contact Method</label>
                    <select id="est-preferredContact" className="form-input" {...register('preferredContact')}>
                      <option value="">Select method...</option>
                      <option>Phone Call</option>
                      <option>Text Message</option>
                      <option>Email</option>
                      <option>Any</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="est-preferredTime" className="form-label">Best Time to Reach You</label>
                    <select id="est-preferredTime" className="form-input" {...register('preferredTime')}>
                      <option value="">Select time...</option>
                      <option>Morning (7 AM – 11 AM)</option>
                      <option>Midday (11 AM – 2 PM)</option>
                      <option>Afternoon (2 PM – 5 PM)</option>
                      <option>Evening (5 PM – 6 PM)</option>
                      <option>Anytime</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="est-additionalNotes" className="form-label">Additional Notes</label>
                  <textarea
                    id="est-additionalNotes"
                    rows={3}
                    placeholder="Anything else you'd like us to know..."
                    className="form-input resize-none"
                    {...register('additionalNotes')}
                  />
                </div>
              </fieldset>

              <div className="bg-ice rounded-xl p-5 border border-blue-100">
                <p className="font-inter text-slate text-sm leading-relaxed">
                  <span className="font-montserrat font-700 text-dark">Privacy Notice: </span>
                  Your information is only used to respond to your estimate request. We never sell or share your data.
                </p>
              </div>

              <Button
                label={isSubmitting ? 'Submitting...' : 'Submit Estimate Request'}
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full justify-center"
                ariaLabel="Submit free estimate request"
              />
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export default FreeEstimate
