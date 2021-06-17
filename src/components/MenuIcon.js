import React from 'react'

const SvgComponent = props => (
  <svg
    viewBox="0 0 24 24"
    width={24}
    height={24}
    stroke="#fff"
    strokeWidth={2}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
)

export default SvgComponent
