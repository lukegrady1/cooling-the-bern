import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface TrustBadgeProps {
  icon: React.ReactNode
  value: string
  label: string
  index?: number
  dark?: boolean
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, value, label, index = 0, dark = true }) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`trust-badge ${dark ? '' : 'bg-white/60 border-gray-200'}`}
      aria-label={`${value} ${label}`}
    >
      <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
        dark ? 'bg-sky-brand/20 text-sky-brand' : 'bg-sky-brand/10 text-sky-brand'
      }`}>
        {icon}
      </div>
      <div>
        <p className={`font-montserrat font-bold text-lg leading-tight ${dark ? 'text-white' : 'text-dark'}`}>
          {value}
        </p>
        <p className={`text-xs ${dark ? 'text-white/70' : 'text-slate'}`}>{label}</p>
      </div>
    </motion.div>
  )
}

export default TrustBadge
