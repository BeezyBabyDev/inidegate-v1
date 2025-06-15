import Button from './Button'

// IndieGate.io Logo Component - Official Design
// Authentic projector lens & screen symbolizing independent filmmaking and breaking Hollywood gatekeeping

const LandingPage = ({ onSelectPortal }) => {
  const talentCategories = [
    'Filmmakers & Creators',
    'Production Crew',
    'Post Production Artists',
    'Art Directors',
    'Set Decorators',
    'Costume Designers',
    'Stylists',
    'Wardrobe Supervisors',
    'Hair & Makeup Artists',
    'Production Sound Mixers',
    'Boom Operators',
    'Utility Sound Techs',
    'Sound Coordinators',
    'Stunt Performers',
    'Casting Directors',
    'Casting Assistants',
  ]

  const investorCategories = [
    'Producers',
    'Executive Producers',
    'High-Net Worth Individuals (HNWIs)',
    'Experienced Film Investors',
    'First-Time Film Investors',
    'Strategic Partners',
    'Family Offices',
    'Venture Capital Firms',
    'Angel Investors',
    'Institutional Funds',
    'Syndicates',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="space-x-4">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-900 font-medium"
              onClick={() => onSelectPortal('talent')}
            >
              Creative Portal
            </Button>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium"
              onClick={() => onSelectPortal('investor')}
            >
              Investor Portal
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Hero Content */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Start with a vision. Build a bridge.{' '}
              <span className="text-blue-400">Keep it human.</span>
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The premier AI-driven platform connecting visionary film investors with exceptional
              indie filmmakers. Turn your creative vision into cinematic reality.
            </p>
          </div>

          {/* Portal Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Investor Portal */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Investor Network</h3>
              <p className="text-blue-100 mb-6">
                Discover groundbreaking indie film projects, analyze market opportunities, and build
                your entertainment portfolio with confidence.
              </p>

              {/* Investor Categories */}
              <div className="text-left mb-6">
                <p className="text-sm font-medium text-blue-200 mb-3">Network Includes:</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {investorCategories.slice(0, 6).map((category, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-500/20 text-green-200 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-green-500/30 text-green-100 text-xs rounded-full font-medium">
                    +{investorCategories.length - 6} more
                  </span>
                </div>
              </div>

              <ul className="text-left text-blue-100 mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Film Project Deal Flow
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Box Office Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  AI-Powered ROI Predictions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Industry Network Access
                </li>
              </ul>
              <Button
                onClick={() => onSelectPortal('investor')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3"
              >
                Enter Investor Portal
              </Button>
            </div>

            {/* Creative Portal */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Creatives</h3>
              <p className="text-white/80 mb-6">
                Showcase your talent, connect with projects, and build your career in independent
                film.
              </p>

              {/* Creative Categories */}
              <div className="text-left mb-6">
                <p className="text-sm font-medium text-blue-200 mb-3">Network Includes:</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {talentCategories.slice(0, 6).map((category, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-200 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  <span className="px-2 py-1 bg-purple-500/30 text-purple-100 text-xs rounded-full font-medium">
                    +{talentCategories.length - 6} more
                  </span>
                </div>
              </div>

              <ul className="text-left text-white/70 mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Build professional profiles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Connect with opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  AI-Powered Project Matching
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Join our community
                </li>
              </ul>
              <button
                onClick={() => onSelectPortal('talent')}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Enter Creative Portal
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">AI-Powered Matching</h4>
              <p className="text-blue-100 text-sm">
                Smart algorithms connecting the right talent with perfect projects
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Industry Secure</h4>
              <p className="text-blue-100 text-sm">
                Bank-level security protecting your creative projects and investments
              </p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Film Network</h4>
              <p className="text-blue-100 text-sm">
                Connect with film industry professionals worldwide
              </p>
            </div>
          </div>

          {/* Industry Impact Stats */}
          <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Powering Independent Filmmaking</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">50K+</p>
                <p className="text-sm text-blue-200">Active Film Professionals</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">$2.8B</p>
                <p className="text-sm text-blue-200">Total Projects Funded</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">1,200+</p>
                <p className="text-sm text-blue-200">Films Produced</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">85%</p>
                <p className="text-sm text-blue-200">Successful Match Rate</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 mt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-blue-200">
          <p>
            &copy; 2025 IndieGate.io - AI-Driven Platform for Indie Filmmakers & Investors. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
