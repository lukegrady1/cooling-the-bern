import React, { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  label: string
  href?: string
  to?: string
  variant?: 'primary' | 'secondary' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
  magnetic?: boolean
  ariaLabel?: string
}

const cn = (...inputs: Parameters<typeof clsx>) => twMerge(clsx(...inputs))

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  to,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className,
  icon,
  magnetic = false,
  ariaLabel,
}) => {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  const baseClasses = cn(
    'btn-base',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-outlined': variant === 'outlined',
      'text-sm px-4 py-2.5': size === 'sm',
      'text-base px-6 py-3.5': size === 'md',
      'text-lg px-8 py-4': size === 'lg',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic || prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
    ref.current.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
  }

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: 'spring', stiffness: 400, damping: 25 },
      }

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {label}
    </>
  )

  if (to) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block', transition: 'transform 0.1s ease' }}
      >
        <motion.div {...motionProps} style={{ display: 'inline-block' }}>
          <Link to={to} className={baseClasses} aria-label={ariaLabel}>
            {content}
          </Link>
        </motion.div>
      </div>
    )
  }

  if (href) {
    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'inline-block', transition: 'transform 0.1s ease' }}
      >
        <motion.div {...motionProps} style={{ display: 'inline-block' }}>
          <a href={href} className={baseClasses} aria-label={ariaLabel}>
            {content}
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', transition: 'transform 0.1s ease' }}
    >
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <button
          type={type}
          className={baseClasses}
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
        >
          {content}
        </button>
      </motion.div>
    </div>
  )
}

export default Button
