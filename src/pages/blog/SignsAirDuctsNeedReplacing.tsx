import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import SEOHead from '../../components/ui/SEOHead'
import CTAStrip from '../../components/sections/CTAStrip'
import Button from '../../components/ui/Button'

const SignsAirDuctsNeedReplacing: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      <SEOHead
        title="Signs Your Air Ducts Need to Be Replaced | Cooling The Bern Blog"
        description="Learn the 8 key warning signs that your home's air ducts need replacing. Expert duct installation advice from Cooling The Bern in Kissimmee, Central Florida."
        canonical="https://coolingthebern.com/blog/signs-air-ducts-need-replacing"
      />

      <section className="section-navy grain-overlay py-24 pt-48" aria-label="Blog post header">
        <div className="container-custom relative z-10 max-w-3xl">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-montserrat font-600 mb-6 transition-colors"
              aria-label="Back to blog"
            >
              <span aria-hidden="true">&larr;</span>
              Back to Blog
            </Link>
            <span className="inline-block bg-sky-brand/20 border border-sky-brand/30 text-sky-brand text-xs font-montserrat font-700 px-3 py-1 rounded-full mb-5">
              Ductwork
            </span>
            <h1
              className="font-montserrat font-800 text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              Signs Your Air Ducts Need to Be Replaced
            </h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <time dateTime="2026-01-28">January 28, 2026</time>
              <span aria-hidden="true">&middot;</span>
              <span>7 min read</span>
              <span aria-hidden="true">&middot;</span>
              <span>By Cooling The Bern Team</span>
            </div>
          </motion.div>
        </div>
      </section>

      <article className="bg-white py-20" aria-labelledby="article-heading">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 font-inter text-slate leading-relaxed">

              <p className="text-xl text-dark leading-relaxed font-inter">
                Your air ducts are the circulatory system of your home. They carry conditioned air from your HVAC unit to every room, and when they're in poor shape, everything suffers — your comfort, your air quality, and your energy bills. The tricky part? Ductwork is hidden inside your walls and ceilings, so problems often go unnoticed until they've become serious and expensive.
              </p>

              <p>
                With over 10 years of hands-on duct installation and replacement experience across Central Florida, our team at Cooling The Bern has seen the full spectrum of ductwork problems — from minor leaks to complete system failures. Here are the most important warning signs that your air ducts may need to be replaced.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">1. Uneven Temperatures Throughout Your Home</h2>

              <p>
                One of the most telling signs of duct problems is noticeable temperature variation between rooms. If some rooms are perfectly comfortable while others stay stubbornly hot or cold, your ductwork is the most likely culprit. This can result from duct leaks that allow conditioned air to escape into unconditioned spaces like attics or wall cavities, or from collapsed, kinked, or improperly sized duct sections that restrict airflow to certain parts of the home.
              </p>

              <p>
                In Florida, this problem is particularly common in older homes where original ductwork was installed decades ago using flexible duct materials that have since deteriorated in the heat and humidity. If you're constantly adjusting your thermostat trying to even out temperatures and nothing works, it's time for a professional duct inspection.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">2. Unexplained Increases in Energy Bills</h2>

              <p>
                Leaky or deteriorated ductwork can cause your HVAC system to lose 20–30% of its conditioned air before it ever reaches your living spaces. That means your AC is working significantly harder — and running significantly longer — than it should need to. If you've noticed your electric bills creeping up over time and can't attribute it to usage changes, duct problems may be quietly draining your wallet.
              </p>

              <p>
                Florida homeowners often dismiss this because they expect high electric bills in summer. But if your bills are higher than your neighbors' in comparable homes, or if they've jumped meaningfully from one year to the next with no other explanation, have your ductwork professionally evaluated.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">3. Excessive Dust in Your Home</h2>

              <p>
                If you're constantly dusting and cleaning, but surfaces seem to accumulate dust again almost immediately, your ductwork could be the source. Leaky return ducts can pull unfiltered air from attic spaces, crawl spaces, or wall cavities directly into your HVAC system and distribute it throughout your home. In Florida's humid climate, this can also introduce mold spores and allergens into your breathing air.
              </p>

              <p>
                Additionally, deteriorating duct insulation or duct liner material can shed particles that get distributed throughout your home. If you notice increased dust alongside musty odors or allergy symptoms, it's worth having your ducts inspected right away.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">4. Strange Smells When the System Runs</h2>

              <p>
                Musty, stale, or moldy odors coming from your vents are a serious red flag. Florida's relentless humidity creates ideal conditions for mold and mildew growth inside ductwork, particularly in systems with leaks or condensation problems. Once mold takes hold inside your ducts, it gets distributed throughout your entire home every time your HVAC system runs.
              </p>

              <p>
                Other smells to watch for include: burning smells (which can indicate overheating components), chemical smells (from off-gassing duct materials), or a general stale odor that doesn't go away with cleaning. Any persistent smell from your HVAC system warrants professional inspection.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">5. Your Ductwork Is More Than 15 Years Old</h2>

              <p>
                Most duct systems have a functional lifespan of 15–25 years, depending on the materials used and how well they've been maintained. Flexible duct (flex duct), which is the most common type used in Florida residential construction, tends toward the lower end of that range in our harsh climate — especially when it hasn't been properly supported or has been subjected to physical damage in tight attic spaces.
              </p>

              <p>
                If your home is older and the original ductwork has never been replaced or inspected, there's a good chance it's due for a serious look. Older homes may also have duct systems that were undersized for today's more powerful HVAC equipment, leading to chronic performance problems regardless of how new your AC unit is.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">6. Visible Damage to Accessible Ducts</h2>

              <p>
                Take a look at any accessible ductwork you can see — in your attic, garage, or mechanical room. Signs of visible damage include disconnected sections, crushed or kinked flex duct, visible holes or tears, missing duct tape that's since failed, and deteriorating insulation that's fallen away. Any of these visible issues almost certainly indicate worse problems in sections you can't see.
              </p>

              <p>
                Pest damage is also common in Florida — rodents and insects frequently nest inside ductwork, chewing through flexible ducts and creating large leaks. If you've had pest problems in the past, having your ducts inspected is a wise precaution even if you haven't noticed performance issues yet.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">7. Rattling, Whistling, or Banging Noises</h2>

              <p>
                Your duct system should be relatively quiet when your HVAC is running. Unusual sounds — rattling, popping, whistling, or banging — can indicate structural problems with your ductwork. Rattling often points to loose connections or unsupported sections vibrating when air moves through them. Whistling typically indicates a restriction or leak where air is escaping under pressure. Popping sounds (especially at startup and shutdown) may indicate ducts that are expanding and contracting due to pressure changes, often because of improper sizing.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">8. Poor Indoor Air Quality and Increased Allergies</h2>

              <p>
                Florida residents already deal with significant outdoor allergen loads — pollen, mold, and humidity are year-round concerns. But if you or family members are experiencing increased allergy symptoms, respiratory issues, or general air quality complaints primarily when indoors, your ductwork may be the cause.
              </p>

              <p>
                Leaky return ducts can pull contaminated air from attic spaces (which can be extremely moldy in Florida's climate), crawl spaces, or wall cavities into your airstream. This bypasses your air filter entirely and distributes whatever contaminants are present directly into your living space.
              </p>

              <h2 className="font-montserrat font-700 text-dark text-2xl mt-10 mb-4">What to Do Next</h2>

              <p>
                If any of these signs sound familiar, the most important thing you can do is schedule a professional duct inspection with a qualified HVAC contractor. A technician can perform a pressure test and visual inspection to identify leaks, disconnections, and deterioration — and provide a clear recommendation on whether repair or replacement is the right call.
              </p>

              <p>
                At Cooling The Bern Air Conditioning LLC, we have over a decade of duct installation experience in Central Florida. We understand exactly what local conditions do to ductwork and how to size, design, and install a system that will serve you reliably for years to come.
              </p>

              <div className="mt-10 bg-ice rounded-2xl p-8 border border-blue-100">
                <p className="font-montserrat font-700 text-dark text-lg mb-2">Suspect Duct Problems?</p>
                <p className="text-slate text-sm mb-5">
                  Contact Cooling The Bern for a professional duct inspection. We'll give you an honest assessment and a clear plan — no upselling, no pressure.
                </p>
                <Button label="Request Duct Inspection" to="/free-estimate" variant="primary" ariaLabel="Request a duct inspection" />
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      <CTAStrip />
    </>
  )
}

export default SignsAirDuctsNeedReplacing
