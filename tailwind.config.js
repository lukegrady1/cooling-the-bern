/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2342',
          light: '#0d2d56',
          dark: '#071a33',
        },
        sky: {
          brand: '#0EA5E9',
        },
        ice: '#F0F9FF',
        teal: {
          brand: '#0D9488',
        },
        dark: '#111827',
        slate: '#4B5563',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h2': ['40px', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h4': ['20px', { lineHeight: '1.4' }],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0A2342 0%, #0d2d56 50%, #0A2342 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(10,35,66,0.85) 0%, rgba(10,35,66,0.6) 50%, rgba(10,35,66,0.85) 100%)',
        'gradient-cta': 'linear-gradient(135deg, #0A2342 0%, #0EA5E9 100%)',
      },
      animation: {
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 35, 66, 0.15)',
        'card-hover': '0 20px 60px rgba(10, 35, 66, 0.2)',
        'cta': '0 4px 24px rgba(14, 165, 233, 0.35)',
      },
    },
  },
  plugins: [],
}
