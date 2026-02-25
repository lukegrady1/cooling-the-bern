import type React from 'react'

const NewConstructionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M2 20h20" />
    <path d="M5 20V10l7-7 7 7v10" />
    <path d="M9 20v-5h6v5" />
    <path d="M3 10l9-9 9 9" />
    <path d="M12 3v4" />
  </svg>
)

export default NewConstructionIcon
