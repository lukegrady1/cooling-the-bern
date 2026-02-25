import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Service } from '../../types'

interface ServiceCardProps {
  service: Service
  index?: number
  dark?: boolean
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0, dark = false }) => {
  const prefersReducedMotion = useReducedMotion()
  const Icon = service.icon

  return (
    <motion.div
      custom={index}
      variants={prefersReducedMotion ? {} : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      whileHover={prefersReducedMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
      className={`service-card group ${
        dark
          ? 'glass-card'
          : 'bg-white border border-gray-100 shadow-glass'
      }`}
    >
      {/* Icon */}
      <div
        className={`mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl transition-colors duration-300 ${
          dark
            ? 'bg-white/10 text-sky-brand group-hover:bg-sky-brand/20'
            : 'bg-ice text-navy group-hover:bg-sky-brand group-hover:text-white'
        }`}
      >
        <Icon className="w-7 h-7" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3
        className={`font-montserrat font-700 text-xl mb-3 ${
          dark ? 'text-white' : 'text-dark'
        }`}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-5 ${
          dark ? 'text-white/75' : 'text-slate'
        }`}
      >
        {service.description}
      </p>

      {/* CTA */}
      <Link
        to={`/services#${service.slug}`}
        className={`inline-flex items-center gap-2 text-sm font-semibold font-montserrat transition-colors duration-200 ${
          dark
            ? 'text-sky-brand hover:text-white'
            : 'text-sky-brand hover:text-navy'
        }`}
        aria-label={`Learn more about ${service.title}`}
      >
        Learn More
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </motion.div>
  )
}

export default ServiceCard
