import React, { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Lazy loaded pages for optimal performance
const Home = React.lazy(() => import('./pages/Home'))
const Services = React.lazy(() => import('./pages/Services'))
const About = React.lazy(() => import('./pages/About'))
const Contact = React.lazy(() => import('./pages/Contact'))
const FreeEstimate = React.lazy(() => import('./pages/FreeEstimate'))
const BlogIndex = React.lazy(() => import('./pages/blog/BlogIndex'))
const HowOftenServiceAC = React.lazy(() => import('./pages/blog/HowOftenServiceAC'))
const SignsAirDuctsNeedReplacing = React.lazy(() => import('./pages/blog/SignsAirDuctsNeedReplacing'))
const MiniSplitVsCentralAC = React.lazy(() => import('./pages/blog/MiniSplitVsCentralAC'))

const PageLoader: React.FC = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-white"
    role="status"
    aria-label="Loading page"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-4 border-navy/20 border-t-sky-brand animate-spin" aria-hidden="true" />
      <p className="font-montserrat font-600 text-slate text-sm">Loading...</p>
    </div>
  </div>
)

const App: React.FC = () => {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-estimate" element={<FreeEstimate />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/how-often-service-ac-florida" element={<HowOftenServiceAC />} />
            <Route path="/blog/signs-air-ducts-need-replacing" element={<SignsAirDuctsNeedReplacing />} />
            <Route path="/blog/mini-split-vs-central-ac" element={<MiniSplitVsCentralAC />} />
            {/* 404 fallback */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-white text-center p-8">
                <div>
                  <h1 className="font-montserrat font-800 text-dark text-6xl mb-4">404</h1>
                  <p className="text-slate text-xl mb-8">Page not found</p>
                  <a href="/" className="btn-base btn-primary">Return Home</a>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  )
}

export default App
