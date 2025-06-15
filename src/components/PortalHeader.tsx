import React from 'react'
import IndieGateLogo from './IndieGateLogo'

interface PortalHeaderProps {
  title?: string
  subtitle?: string
  onLogout: () => void
  onBack: () => void
}

const PortalHeader: React.FC<PortalHeaderProps> = ({
  title = 'IndieGate.io',
  subtitle,
  onLogout,
  onBack,
}) => (
  <header className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 bg-opacity-80 backdrop-blur-lg px-6 py-4 shadow-lg">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <IndieGateLogo className="w-10 h-10 md:w-14 md:h-14" />
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">{title}</h1>
          {subtitle && (
            <p className="text-base md:text-lg text-blue-200 leading-tight mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="px-6 py-2 rounded-lg border border-white/40 text-white bg-white/10 hover:bg-white/20 font-semibold text-base transition-colors"
        >
          Back to Home
        </button>
        <button
          onClick={onLogout}
          className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-base transition-colors shadow"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
)

export default PortalHeader
