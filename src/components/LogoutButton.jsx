import React from 'react'

const LogoutButton = ({ onClick, className = '' }) => (
  <button
    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors bg-slate-800 text-red-400 hover:bg-red-900/20 hover:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
    onClick={onClick}
    aria-label="Logout"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
      />
    </svg>
    <span>Logout</span>
  </button>
)

export default LogoutButton
