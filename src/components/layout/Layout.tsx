import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileCTABar from '../ui/MobileCTABar'

interface LayoutProps {
  children: React.ReactNode
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        variants={prefersReducedMotion ? {} : pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex-1 pb-16 md:pb-0"
        role="main"
      >
        {children}
      </motion.main>
      <Footer />
      <MobileCTABar />
    </div>
  )
}

export default Layout
