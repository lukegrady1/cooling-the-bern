Before writing any code, read the frontend design skill file by running:
view /mnt/skills/public/frontend-design/SKILL.md
Study it completely and follow all of its guidelines for the entire project. This is non-negotiable.

# PROJECT BRIEF: COOLING THE BERN AIR CONDITIONING LLC

## 1. Project Overview & Vision
Build a multi-page, professional, and high-converting React Single Page Application (SPA) for an HVAC company: Cooling The Bern Air Conditioning LLC. 
* **Target Audience:** Residential homeowners and commercial property managers in Kissimmee, Orlando, and the broader Central Florida area.
* **Emotional Tone:** Trustworthy, highly professional, responsive, and community-focused. The brand identity is a "man on a mission to Cool the Bern for a loyal customer."
* **Design Philosophy:** Premium, modern, and highly legible. Inspired by top-tier home service brands and modern tech companies. Use generous white space, premium glassmorphism for service listings, subtle gradient overlays (navy to transparent over Florida skies/AC backgrounds), and smooth, tasteful animations.

**Business Context to Integrate:**
* **Experience:** 12+ years in HVAC (10 years duct installation, 4 years licensed tech).
* **Notable Projects:** Replaced a 20-ton commercial chiller with a new Carrier unit at the Museum of Arts and Science in Daytona.
* **Service Area:** Kissimmee, Orlando, St. Cloud, Daytona, Central Florida (Osceola County).
* **Contact Info (Placeholders):** Phone: (407) 555-BERN | Email: info@coolingthebern.com | License: [FL CAC License #]

## 2. File & Folder Architecture
Create the following exact project structure:

```text
cooling-the-bern/
├── index.html                        (Vite entry point)
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── favicon.ico
└── src/
    ├── main.tsx                      (React root, HelmetProvider, Router setup)
    ├── App.tsx                       (Route definitions with lazy loading)
    ├── types/
    │   └── index.ts                  (All shared TypeScript interfaces)
    ├── styles/
    │   ├── global.css                (CSS variables, Tailwind directives)
    │   ├── animations.css            (Keyframes, transition utilities)
    │   └── components.css            (Shared component base styles)
    ├── data/
    │   ├── services.ts               (Typed array of all service objects)
    │   ├── testimonials.ts           (Typed array of testimonial objects)
    │   ├── blogPosts.ts              (Typed array of blog post metadata)
    │   └── serviceArea.ts            (Typed array of service area locations)
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   └── Layout.tsx            (Wraps all pages, renders Navbar + Footer)
    │   ├── ui/
    │   │   ├── Button.tsx            (Reusable typed button with variant prop)
    │   │   ├── ServiceCard.tsx
    │   │   ├── TestimonialCard.tsx
    │   │   ├── TrustBadge.tsx
    │   │   ├── SectionHeader.tsx
    │   │   ├── SEOHead.tsx           (Reusable helmet wrapper)
    │   │   └── MobileCTABar.tsx      (Fixed bottom bar, mobile only)
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── TrustBar.tsx
    │       ├── ServicesOverview.tsx
    │       ├── WhyChooseUs.tsx
    │       ├── Testimonials.tsx
    │       ├── ServiceArea.tsx
    │       └── CTAStrip.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Services.tsx
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── FreeEstimate.tsx
    │   └── blog/
    │       ├── BlogIndex.tsx
    │       ├── HowOftenServiceAC.tsx
    │       ├── SignsAirDuctsNeedReplacing.tsx
    │       └── MiniSplitVsCentralAC.tsx
    └── icons/
        ├── AcRepairIcon.tsx
        ├── InstallationIcon.tsx
        ├── MaintenanceIcon.tsx
        ├── DuctIcon.tsx
        ├── MiniSplitIcon.tsx
        ├── CommercialIcon.tsx
        ├── HeatPumpIcon.tsx
        ├── AirQualityIcon.tsx
        ├── ThermostatIcon.tsx
        ├── NewConstructionIcon.tsx
        └── DuctCleaningIcon.tsx
3. Design System Specification
Implement Tailwind CSS for utility-first styling, mapping these precise values into your tailwind.config.js and src/styles/global.css as CSS custom properties.

Color Palette:

Primary Brand: Deep Navy Blue (#0A2342)

Accent / CTA: Vibrant Sky Blue (#0EA5E9)

Supporting Accent: Ice White (#F0F9FF)

Dark Text: Near Black (#111827)

Body Text: Slate Gray (#4B5563)

Background: Clean White (#FFFFFF)

Success/Trust: Cool Teal (#0D9488)

Typography:

Headings: Montserrat (Weights: 700, 800)

Subheadings: Montserrat (Weight: 600)

Body Text: Inter (Weights: 400, 500)

Accent/Taglines: Montserrat (Weight: 300 Italic)

Scale: Base 16px. H1: ~56px (Hero), H2: ~40px, H3: ~28px, H4: ~20px.

4. Component Breakdown & Data Models
Implement strict TypeScript. Place these in src/types/index.ts:

TypeScript
export interface Service { id: string; title: string; description: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; slug: string; keywords: string[]; }
export interface Testimonial { id: string; name: string; location: string; rating: number; text: string; date: string; }
export interface BlogPost { id: string; title: string; slug: string; excerpt: string; date: string; readTime: string; metaDescription: string; keywords: string[]; }
export interface ServiceArea { city: string; county: string; state: string; }
export interface NavLink { label: string; path: string; }
export interface CTAButton { label: string; href: string; variant: 'primary' | 'secondary' | 'outlined'; }
export interface SEOHeadProps { title: string; description: string; canonical: string; ogImage?: string; schemaMarkup?: Record<string, unknown>; }
Core UI Components:

Button.tsx: Framer Motion powered. Primary uses Sky Blue, Secondary uses Outline. Includes hover scale (whileHover={{ scale: 1.05 }}) and tap effect (whileTap={{ scale: 0.95 }}).

ServiceCard.tsx: Glassmorphism background, staggered fade-in via Framer Motion variants. Ends with "Learn More →".

SEOHead.tsx: A wrapper utilizing react-helmet-async to dynamically inject meta tags and JSON-LD.

Icons: Hand-crafted SVG paths, typed as React functional components in src/icons/ (NO EMOJIS).

5. Page-by-Page Layout Specification
Create these React routes (lazy loaded via React.lazy and Suspense):

/ (Home): Full-height Hero with deep gradient overlay on Florida sky background. H1: "Central Florida's Trusted HVAC Experts", Subheadline: "Keeping Kissimmee & Orlando Cool Since Day One. Fast. Reliable. Affordable." Include a Trust Bar ("12+ Years Experience", "Same-Day Service"), Services Overview, Why Choose Us, Testimonials, and Mid-page CTA strip.

/services: Grid layout of all 11 service categories (AC Repair, Installation, Maintenance, Air Duct Installation, Air Duct Cleaning, Mini-Split, Commercial, Heat Pump, Indoor Air Quality, Thermostat, New Construction).

/about: Founder story: "With over 12 years of hands-on HVAC experience... treats every customer like family. From residential tune-ups to replacing 20-ton commercial chillers at major Florida institutions..." Include placeholder team photos.

/contact: React Hook Form for inquiries, phone/email details, business hours (Mo-Fr 07:00-18:00), Google Maps placeholder.

/free-estimate: High-conversion dedicated landing page with an extensive React Hook Form capturing lead details.

/blog: Blog index page plus 3 hardcoded SEO-optimized sample posts: "How Often Should You Service Your AC in Florida?", "Signs Your Air Ducts Need to Be Replaced...", "Mini-Split vs Central AC...". Write 500+ words of realistic placeholder copy for each.

6. Animation & Motion Design
Use Framer Motion extensively but tastefully:

Page Transitions: Fade in/out with slight Y-axis slide (initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}).

Scroll Reveals: Use whileInView with viewport={{ once: true, margin: "-100px" }} for staggered fading on Service Cards and Testimonials.

Hero: Animated scroll-down indicator. CTA buttons slide in with a spring bounce easing curve.

7. Responsive Design Requirements
Mobile First: Stack grids to 1 column on mobile.

Navigation: Hamburger menu on mobile. Sticky navbar with blur backdrop filter (backdrop-blur-md) on scroll.

Mobile CTA Bar: Implement MobileCTABar.tsx fixed to the bottom of the viewport on mobile devices containing a phone icon ("Call Now") and "Get Estimate" button.

8. Performance, SEO & Accessibility
SEO is critical: Every page MUST use <SEOHead /> as its first child. Use react-helmet-async.

Include this JSON-LD schema on the Home page:

JSON
{ "@context": "[https://schema.org](https://schema.org)", "@type": "HVACBusiness", "name": "Cooling The Bern Air Conditioning LLC", "description": "Professional HVAC repair, installation, and maintenance services in Kissimmee and Central Florida", "url": "[https://coolingthebern.com](https://coolingthebern.com)", "telephone": "+14075550000", "address": { "@type": "PostalAddress", "addressLocality": "Kissimmee", "addressRegion": "FL", "addressCountry": "US" }, "geo": { "@type": "GeoCoordinates", "latitude": 28.4812, "longitude": -81.3428 }, "areaServed": ["Kissimmee", "Orlando", "St. Cloud", "Daytona Beach", "Central Florida"], "openingHours": "Mo-Fr 07:00-18:00", "priceRange": "$$", "hasOfferCatalog": { "@type": "OfferCatalog", "name": "HVAC Services" } }
Include unique meta titles, descriptions, canonical URLs, and keywords for every route. Include a comment reminding the user that "Because this is a client-side SPA, consider deploying to Vercel/Netlify with pre-rendering or migrating to Next.js in the future for full production crawlability."

Generate static sitemap.xml and robots.txt in /public.

Semantic HTML: Use <header>, <main>, <article>, <section>, <nav>, <footer>.

Accessibility: Proper aria-labels, descriptive alt tags on all images, and useReducedMotion hooks for animations.

9. Additional Libraries & Justification
Install these exact dependencies:

react-router-dom: For client-side multi-page routing.

framer-motion: For required micro-interactions, spring animations, and scroll reveals.

react-helmet-async: For dynamic document head management (SEO).

react-hook-form: For performant, accessible form state and validation on the contact/estimate pages.

clsx & tailwind-merge: For dynamic Tailwind class construction in reusable components.

10. Stretch Goals & Polish Details
Add a subtle grain/noise texture overlay to the deep navy sections to give it a premium, tactical feel.

Implement magnetic button pull effects on the primary Hero CTAs (where the button slightly tracks the cursor location before click).

Ensure all placeholder images have a clean, neutral overlay so text contrast is strictly maintained (WCAG AAA compliant).

QUALITY BAR REMINDER:
This website must look and feel like it was built by a premium web agency and is worth $5,000+. Every section should feel intentional and polished. Typography must be beautifully set. Spacing must be generous and consistent. Framer Motion animations must be smooth and tasteful — never cheesy or distracting. The design must immediately convey that Cooling The Bern Air Conditioning LLC is a trustworthy, professional, and experienced company. Do not cut corners on any page. Review the frontend-design SKILL.md file and follow it rigorously throughout the entire build.

All TypeScript must be strict and clean — no any types, no @ts-ignore comments, no implicit anys. Run tsc --noEmit mentally before finalizing each file. Component props must all have explicit interfaces. The codebase should be structured as if a senior TypeScript engineer will be reviewing it.

When complete, verify: every page has a unique SEOHead, every form has react-hook-form validation, every route is lazy-loaded, every image has descriptive alt text, all Tailwind classes reflect the design system, and Framer Motion animations are present on hero entrance, scroll reveals, card hovers, and page transitions.