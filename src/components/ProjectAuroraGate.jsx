import { useState } from 'react'
import { Lock } from 'lucide-react'

const ProjectAuroraGate = ({ onAccessGranted }) => {
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)

  // The valid access code for Project Aurora
  const AURORA_ACCESS_CODE = 'PA2025'

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
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#18192a] via-[#1a1333] to-[#18192a]">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl border border-[#2d2346] bg-[#18192a]/95">
        {/* Icon and Title */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 mb-4">
            <Lock size={32} className="text-purple-300" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Project Aurora</h1>
          <p className="text-purple-300 text-sm font-medium">Restricted Access Gateway</p>
        </div>

        {/* Access Code Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="accessCode"
              className="block text-sm font-semibold text-purple-200 mb-2"
            >
              Enter Access Code
            </label>
            <input
              id="accessCode"
              type="text"
              value={accessCode}
              onChange={e => setAccessCode(e.target.value)}
              className="w-full px-4 py-3 bg-[#23243a] border border-purple-700 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-lg"
              placeholder="Enter access code"
              autoComplete="off"
              spellCheck="false"
            />
            {error && <p className="mt-2 text-red-400 text-sm font-medium">{error}</p>}
          </div>

          <button
            type="submit"
            disabled={isVerifying || !accessCode.trim()}
            className={`w-full py-3 px-4 rounded-xl text-white font-bold text-lg transition-all duration-200 shadow-md tracking-wide
              ${
                isVerifying || !accessCode.trim()
                  ? 'bg-purple-900/60 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950'
              }
            `}
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
          <p className="text-purple-400 text-xs font-medium flex items-center justify-center gap-1">
            <Lock size={14} className="inline-block mr-1 text-purple-400" />
            Secure Gateway &bull; Authorized Personnel Only
          </p>
          <p className="text-purple-400/70 text-xs mt-2">Access resets after each session</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectAuroraGate
