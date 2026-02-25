import type React from 'react'

const InstallationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <rect x="2" y="3" width="20" height="8" rx="2" />
    <path d="M2 15h20" />
    <path d="M7 19h10" />
    <path d="M12 11v8" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
    <path d="M6 7h.01" />
    <path d="M18 7h.01" />
  </svg>
)

export default InstallationIcon
