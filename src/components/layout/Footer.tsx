import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white" role="contentinfo">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <svg className="w-8 h-8 text-sky-brand" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path d="M10 16h12M16 10v12M12 12l8 8M20 12l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="16" r="3" fill="currentColor" />
              </svg>
              <div>
                <span className="font-montserrat font-800 text-lg leading-none block">Cooling The Bern</span>
                <span className="font-inter text-white/50 text-xs leading-none">Air Conditioning LLC</span>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm mb-6">
              Central Florida's trusted HVAC experts. Serving Kissimmee, Orlando, and the surrounding area with professional air conditioning repair, installation, and maintenance services.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+14075552376"
                className="flex items-center gap-2 text-white/75 hover:text-sky-brand transition-colors text-sm"
                aria-label="Call us at (407) 555-BERN"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.3a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (407) 555-BERN
              </a>
              <a
                href="mailto:info@coolingthebern.com"
                className="flex items-center gap-2 text-white/75 hover:text-sky-brand transition-colors text-sm"
                aria-label="Email us at info@coolingthebern.com"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@coolingthebern.com
              </a>
              <p className="flex items-center gap-2 text-white/65 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Mon–Fri: 7:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-700 text-sm uppercase tracking-widest text-white/50 mb-5">Services</h3>
            <ul className="space-y-2.5" role="list">
              {['AC Repair', 'AC Installation', 'AC Maintenance', 'Air Duct Services', 'Mini-Split Systems', 'Commercial HVAC', 'Heat Pumps', 'Indoor Air Quality'].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-700 text-sm uppercase tracking-widest text-white/50 mb-5">Company</h3>
            <ul className="space-y-2.5 mb-8" role="list">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Free Estimate', path: '/free-estimate' },
                { label: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/65 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-teal-brand/20 border border-teal-brand/30 rounded-lg p-4">
              <p className="text-xs text-white/70 font-inter leading-relaxed">
                <span className="font-montserrat font-700 text-teal-brand block mb-1">Licensed & Insured</span>
                FL CAC License #[License Number]<br />
                Serving Osceola &amp; Orange County
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} Cooling The Bern Air Conditioning LLC. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Kissimmee, FL &middot; Serving Central Florida
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
