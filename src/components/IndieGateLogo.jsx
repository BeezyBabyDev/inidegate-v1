import React from 'react'

const IndieGateLogo = ({ className = 'w-12 h-12' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <rect x="10" y="18" width="18" height="18" stroke="#2563eb" strokeWidth="3" fill="none" />
    <rect x="20" y="8" width="18" height="18" stroke="#60a5fa" strokeWidth="3" fill="none" />
    <rect x="26" y="14" width="6" height="6" stroke="#2563eb" strokeWidth="2" fill="none" />
  </svg>
)

export default IndieGateLogo
