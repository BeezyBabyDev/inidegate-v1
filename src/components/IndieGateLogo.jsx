import React from 'react'

const IndieGateLogo = ({ className = 'h-10' }) => (
  <div className={`flex items-center gap-2 ${className}`} style={{ minHeight: '40px' }}>
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      style={{ display: 'block' }}
    >
      {/* Underlayer: thin border */}
      <rect x="7" y="13" width="20" height="20" stroke="#60a5fa" strokeWidth="2" fill="none" />
      {/* Overlay: thick border */}
      <rect x="13" y="7" width="20" height="20" stroke="#2563eb" strokeWidth="3.5" fill="none" />
    </svg>
    <span className="font-bold text-white text-2xl leading-none select-none" style={{ fontFamily: 'inherit' }}>
      IndieGate.<span className="text-blue-300">io</span>
    </span>
  </div>
)

export default IndieGateLogo
