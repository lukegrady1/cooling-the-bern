import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-montserrat font-800 ${
          light ? 'text-white' : 'text-dark'
        } leading-tight`}
        style={{ fontSize: '2.5rem' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-slate'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
