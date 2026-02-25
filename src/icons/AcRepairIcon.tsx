import type React from 'react'

const AcRepairIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <rect x="2" y="7" width="20" height="10" rx="2" />
    <path d="M6 11h.01M6 13h.01" />
    <path d="M10 11h4" />
    <path d="M10 13h4" />
    <path d="M18 11v2" />
    <path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
  </svg>
)

export default AcRepairIcon
