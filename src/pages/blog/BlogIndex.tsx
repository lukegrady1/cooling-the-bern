import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import SEOHead from '../../components/ui/SEOHead'
import CTAStrip from '../../components/sections/CTAStrip'
import { blogPosts } from '../../data/blogPosts'

const ClockIcon: React.FC = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const BlogIndex: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SEOHead
        title="HVAC Blog | Cooling Tips & Expert Advice | Cooling The Bern"
        description="Expert HVAC tips, maintenance guides, and Florida cooling advice from the professionals at Cooling The Bern Air Conditioning LLC in Kissimmee, FL."
        canonical="https://coolingthebern.com/blog"
      />

      {/* Header */}
      <section className="section-navy grain-overlay py-28 pt-48" aria-label="Blog page header">
        <div className="container-custom relative z-10">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block font-montserrat text-xs font-700 tracking-widest uppercase text-sky-brand mb-4">
              HVAC Resource Center
            </span>
            <h1
              className="font-montserrat font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Tips, Guides & Expert HVAC Advice
            </h1>
            <p className="font-inter text-white/75 text-lg leading-relaxed">
              Stay informed about your AC system with practical advice from Central Florida's trusted HVAC professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="bg-white py-24" aria-labelledby="blog-posts-heading">
        <div className="container-custom">
          <h2 id="blog-posts-heading" className="sr-only">Blog Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="blog-card group"
              >
                {/* Featured image placeholder */}
                <div
                  className="aspect-video bg-gradient-to-br from-navy to-navy-light relative overflow-hidden"
                  role="img"
                  aria-label={`Featured image for article: ${post.title}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-20" aria-hidden="true">
                    <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}>
                      <rect x="2" y="7" width="20" height="10" rx="2" />
                      <path d="M6 11h.01M6 13h.01M10 11h4M10 13h4M18 11v2" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-sky-brand text-white text-xs font-montserrat font-700 px-3 py-1 rounded-full">
                      HVAC Tips
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-slate text-xs mb-3">
                    <time dateTime={post.date}>{post.date}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-montserrat font-700 text-dark text-lg leading-snug mb-3 group-hover:text-sky-brand transition-colors duration-200">
                    <Link to={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="font-inter text-slate text-sm leading-relaxed mb-5 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sky-brand hover:text-navy font-montserrat font-600 text-sm transition-colors duration-200"
                    aria-label={`Read full article: ${post.title}`}
                  >
                    Read Article
                    <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        title="Questions About Your HVAC System?"
        subtitle="Our expert technicians are happy to help. Contact us for a free consultation."
      />
    </>
  )
}

export default BlogIndex
