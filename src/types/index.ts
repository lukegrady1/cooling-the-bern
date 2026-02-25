import type React from 'react'

export interface Service {
  id: string
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  slug: string
  keywords: string[]
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  date: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  metaDescription: string
  keywords: string[]
}

export interface ServiceArea {
  city: string
  county: string
  state: string
}

export interface NavLink {
  label: string
  path: string
}

export interface CTAButton {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'outlined'
}

export interface SEOHeadProps {
  title: string
  description: string
  canonical: string
  ogImage?: string
  schemaMarkup?: Record<string, unknown>
}

export interface TrustBadgeItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  label: string
  value: string
}
