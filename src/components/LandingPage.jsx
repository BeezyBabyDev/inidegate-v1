import Button from './Button';

const LandingPage = ({ onSelectPortal }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-2xl font-bold">
              InideGate.<span className="text-blue-400">v1</span>
            </h1>
          </div>
          <div className="space-x-4">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-900">
              About
            </Button>
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-900">
              Contact
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
              Connect. Build. <span className="text-blue-400">Innovate.</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The premier platform connecting visionary investors with exceptional talent. 
              Turn ideas into reality, faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Portal Selection */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Investor Portal */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Investor Portal</h3>
              <p className="text-blue-100 mb-6">
                Discover groundbreaking startups, analyze market opportunities, and build your investment portfolio with confidence.
              </p>
              <ul className="text-left text-blue-100 mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Deal Flow Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Portfolio Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Due Diligence Tools
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Network Access
                </li>
              </ul>
              <Button 
                onClick={() => onSelectPortal('investor')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3"
              >
                Enter Investor Portal
              </Button>
            </div>

            {/* Talent Portal */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Talent Portal</h3>
              <p className="text-blue-100 mb-6">
                Showcase your skills, connect with innovative companies, and build the next generation of game-changing products.
              </p>
              <ul className="text-left text-blue-100 mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Project Opportunities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Skill Assessment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Portfolio Builder
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Career Growth
                </li>
              </ul>
              <Button 
                onClick={() => onSelectPortal('talent')}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3"
              >
                Enter Talent Portal
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Secure & Private</h4>
              <p className="text-blue-100 text-sm">End-to-end encryption and privacy-first approach</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Lightning Fast</h4>
              <p className="text-blue-100 text-sm">Optimized for speed and performance</p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Network</h4>
              <p className="text-blue-100 text-sm">Connect with opportunities worldwide</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 mt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-blue-200">
          <p>&copy; 2025 InideGate.v1. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 