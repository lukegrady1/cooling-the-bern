import type React from 'react'

const DuctCleaningIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 9h18v2H3z" />
    <path d="M7 9V5h10v4" />
    <path d="M9 11v4" />
    <path d="M15 11v4" />
    <path d="M7 15c0 2 1.5 3 5 4 3.5-1 5-2 5-4" />
    <path d="M9 19l3 2 3-2" />
  </svg>
)

export default DuctCleaningIcon
