import React from 'react'
import { Link } from 'react-router-dom'

const PhoneIcon: React.FC = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.3a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MobileCTABar: React.FC = () => {
  return (
    <div className="mobile-cta-bar md:hidden" role="navigation" aria-label="Quick contact actions">
      <a
        href="tel:+14073089947"
        className="flex-1 flex items-center justify-center gap-2 bg-navy text-white font-montserrat font-semibold text-sm py-3 rounded-lg transition-colors hover:bg-navy-light"
        aria-label="Call Cooling The Bern now"
      >
        <PhoneIcon />
        Call Now
      </a>
      <Link
        to="/free-estimate"
        className="flex-1 flex items-center justify-center gap-2 bg-sky-brand text-white font-montserrat font-semibold text-sm py-3 rounded-lg transition-colors hover:bg-sky-500"
        aria-label="Get a free estimate"
      >
        Free Estimate
      </Link>
    </div>
  )
}

export default MobileCTABar
