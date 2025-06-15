import { useState } from 'react'

function Navbar({ isScrolled }) {
  const handleInvestorLogin = () => {
    window.location.href = '/?portal=investor'
  }

  const handleCreativeLogin = () => {
    window.location.href = '/?portal=talent'
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 200 200"
              className="transition-transform duration-300 hover:scale-110"
            >
              <defs>
                <clipPath id="projectorLens">
                  <rect x="50" y="50" width="100" height="100" rx="15" />
                </clipPath>
                <clipPath id="screen">
                  <rect x="25" y="75" width="80" height="60" rx="8" />
                </clipPath>
              </defs>
              <rect x="50" y="50" width="100" height="100" rx="15" fill="#2563eb" />
              <rect x="25" y="75" width="80" height="60" rx="8" fill="#60a5fb" />
              <rect
                x="55"
                y="55"
                width="90"
                height="90"
                rx="12"
                fill="none"
                stroke="#60a5fb"
                strokeWidth="2"
                clipPath="url(#projectorLens)"
              />
              <rect
                x="30"
                y="80"
                width="70"
                height="50"
                rx="6"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                clipPath="url(#screen)"
              />
            </svg>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={`transition-colors duration-300 hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`transition-colors duration-300 hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </a>

            {/* Portal Buttons */}
            <button
              onClick={handleCreativeLogin}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Creative Portal
            </button>
            <button
              onClick={handleInvestorLogin}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Investor Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
