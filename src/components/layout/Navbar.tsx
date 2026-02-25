import React, { useState, useEffect } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { NavLink } from '../../types'

const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

const LogoIcon: React.FC = () => (
  <svg className="w-8 h-8 text-sky-brand" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
    <path d="M10 16h12M16 10v12M12 12l8 8M20 12l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="16" r="3" fill="currentColor" />
  </svg>
)

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
  }, [])

  return (
    <header
      className={`navbar ${isScrolled || isMobileOpen ? 'navbar-scrolled' : 'bg-transparent'}`}
      role="banner"
    >
      <nav
        className="container-custom flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          aria-label="Cooling The Bern Air Conditioning LLC - Home"
          onClick={() => setIsMobileOpen(false)}
        >
          <LogoIcon />
          <div>
            <span className="font-montserrat font-800 text-white text-lg leading-none block">
              Cooling The Bern
            </span>
            <span className="font-inter text-white/60 text-xs leading-none">
              Air Conditioning LLC
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <RouterNavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `font-montserrat font-600 text-sm transition-colors duration-200 ${
                    isActive ? 'text-sky-brand' : 'text-white/85 hover:text-white'
                  }`
                }
              >
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+14075552376"
            className="font-montserrat font-600 text-sm text-white/85 hover:text-sky-brand transition-colors duration-200 flex items-center gap-1.5"
            aria-label="Call us at (407) 555-BERN"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.3a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.97-1.97a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (407) 555-BERN
          </a>
          <Link
            to="/free-estimate"
            className="btn-base btn-primary text-sm px-5 py-2.5"
          >
            Free Estimate
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
            {isMobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-md border-t border-white/10"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="container-custom py-4 space-y-1" role="list">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <RouterNavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg font-montserrat font-600 text-sm transition-colors ${
                        isActive ? 'text-sky-brand bg-white/5' : 'text-white/85 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </RouterNavLink>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <Link
                  to="/free-estimate"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-center btn-base btn-primary"
                >
                  Get Free Estimate
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
