import { useState } from 'react'

const ProjectAuroraGate = ({ onAccessGranted }) => {
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  // The valid access code for Project Aurora
  const AURORA_ACCESS_CODE = 'AURORA2024'

  const handleSubmit = e => {
    e.preventDefault()
    setIsVerifying(true)
    setError('')

    // Simulate verification delay
    setTimeout(() => {
      if (accessCode.toUpperCase() === AURORA_ACCESS_CODE) {
        // Session-based access only - no localStorage persistence
        onAccessGranted()
      } else {
        setError('Invalid Project Aurora access code')
      }
      setIsVerifying(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Aurora Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-30 animate-pulse"
            style={{
              background:
                'linear-gradient(45deg, transparent 0%, rgba(139, 92, 246, 0.3) 50%, transparent 100%)',
              transform: 'rotate(-45deg) scale(2)',
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-[32px] p-8 border border-white/20 shadow-2xl">
          {/* Project Aurora Logo/Title */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌌</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Project Aurora</h1>
            <p className="text-purple-200 text-sm">Restricted Access Gateway</p>
          </div>

          {/* Access Code Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="accessCode"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Enter Access Code
              </label>
              <input
                id="accessCode"
                type="text"
                value={accessCode}
                onChange={e => setAccessCode(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="AURORA-****"
                autoComplete="off"
                spellCheck="false"
              />
              {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={isVerifying || !accessCode.trim()}
              className={`w-full py-3 px-4 rounded-xl text-white font-medium transition-all duration-200 ${
                isVerifying || !accessCode.trim()
                  ? 'bg-purple-800/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-[1.02]'
              }`}
            >
              {isVerifying ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                'Access Project Aurora'
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <p className="text-purple-300 text-xs">🔒 Secure Gateway • Authorized Personnel Only</p>
            <p className="text-purple-300/70 text-xs mt-2">Access resets after each session</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectAuroraGate
