import type React from 'react'

const DuctIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M3 9h18v6H3z" />
    <path d="M9 9v6" />
    <path d="M15 9v6" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
    <path d="M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
    <path d="M8 15v3" />
    <path d="M16 15v3" />
  </svg>
)

export default DuctIcon
