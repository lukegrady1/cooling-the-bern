import type React from 'react'

const MiniSplitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <rect x="2" y="4" width="20" height="6" rx="2" />
    <path d="M6 7h.01" />
    <path d="M10 7h4" />
    <path d="M18 7h.01" />
    <rect x="6" y="14" width="4" height="6" rx="1" />
    <path d="M8 14v-4" />
    <path d="M5 18H4a2 2 0 0 1-2-2v-1" />
    <path d="M11 18h1" />
  </svg>
)

export default MiniSplitIcon
