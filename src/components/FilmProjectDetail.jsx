import { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'

const FilmProjectDetail = ({ onBack, project = null }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()

  const [activeTab, setActiveTab] = useState('overview')

  // Default project data for "Midnight in Brooklyn"
  const defaultProject = {
    title: 'Midnight in Brooklyn',
    subtitle: 'Drama • Pre-Production',
    badge: 'Hot Deal',
    budget: '$2.8M',
    seeking: '$1.2M',
    equity: '15%',
    roi: '280%',
    description:
      'A young immigrant nurse navigates love, loss, and identity while working the night shift in a Brooklyn hospital during the height of the pandemic.',
    director: 'Sarah Chen',
    genre: 'Drama',
    status: 'Pre-Production',
  }

  const projectData = project || defaultProject

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋', active: true },
    { id: 'personnel', label: 'Key Personnel', icon: '👥', active: false },
    { id: 'media', label: 'Media Assets', icon: '🎬', active: false },
    { id: 'financials', label: 'Financials', icon: '💰', active: false },
    { id: 'timeline', label: 'Timeline', icon: '📅', active: false },
    { id: 'distribution', label: 'Distribution', icon: '📡', active: false },
    { id: 'legal', label: 'Legal & Risk', icon: '⚖️', active: false },
  ]

  const handleExpressInterest = () => {
    alert(`Interest expressed in ${projectData.title}!`)
  }

  const handleScheduleMeeting = () => {
    alert(`Meeting request sent for ${projectData.title}!`)
  }

  const handleShareProject = () => {
    alert(`Sharing ${projectData.title}...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Header Navigation */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          {onBack && (
            <div className="pt-4 pb-2">
              <button
                onClick={onBack}
                className="bg-white/10 hover:bg-white/20 text-white hover:text-white transition-all text-sm flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm font-medium"
              >
                ← Back to Deal Flow
              </button>
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex space-x-1 overflow-x-auto py-4">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30'
                    : 'text-purple-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Overview Card */}
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl mb-8 overflow-hidden">
          <div className="p-8">
            {/* Title and Badge Row */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{projectData.title}</h1>
                <p className="text-purple-200 text-lg">{projectData.subtitle}</p>
              </div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                {projectData.badge}
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Total Budget */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-sm text-purple-100 mb-1 font-medium">Total Budget</div>
                <div className="text-3xl font-bold text-white">{projectData.budget}</div>
              </div>

              {/* Seeking Investment */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-sm text-purple-100 mb-1 font-medium">Seeking Investment</div>
                <div className="text-3xl font-bold text-green-400">{projectData.seeking}</div>
              </div>

              {/* Equity Offered */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-sm text-purple-100 mb-1 font-medium">Equity Offered</div>
                <div className="text-3xl font-bold text-blue-400">{projectData.equity}</div>
              </div>

              {/* Estimated ROI */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-sm text-purple-100 mb-1 font-medium">Estimated ROI</div>
                <div className="text-3xl font-bold text-purple-400">{projectData.roi}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleExpressInterest}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Express Interest
              </button>
              <button
                onClick={handleScheduleMeeting}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
              >
                Schedule Meeting
              </button>
              <button
                onClick={handleShareProject}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
              >
                Share Project
              </button>
            </div>
          </div>
        </div>

        {/* Project Description Card */}
        <div className="bg-white/15 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Project Synopsis</h2>
            <p className="text-white text-lg leading-relaxed font-medium">
              {projectData.description}
            </p>
          </div>
        </div>

        {/* Additional Details Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Information */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Key Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-purple-100 font-medium">Director:</span>
                  <span className="text-white font-semibold">{projectData.director}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-100 font-medium">Genre:</span>
                  <span className="text-white font-semibold">{projectData.genre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-100 font-medium">Status:</span>
                  <span className="text-green-400 font-semibold">{projectData.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-100 font-medium">Location:</span>
                  <span className="text-white font-semibold">Brooklyn, NY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-100 font-medium">Expected Duration:</span>
                  <span className="text-white font-semibold">95 minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Highlights */}
          <div className="bg-white/15 backdrop-blur-lg rounded-2xl border border-white/30 shadow-2xl">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Investment Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm font-medium">
                    Experienced director with award-winning track record
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm font-medium">
                    Strong market appeal for festival and streaming distribution
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm font-medium">
                    Timely social themes with broad audience appeal
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm font-medium">
                    Strategic partnerships already secured for production
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm font-medium">
                    Clear path to profitability with multiple revenue streams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Disclosure */}
        <div className="bg-yellow-500/10 backdrop-blur-lg rounded-2xl border border-yellow-400/30 shadow-xl mt-8">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-yellow-400 text-xl">⚠️</span>
              <h4 className="text-lg font-semibold text-white">Investment Disclosure</h4>
            </div>
            <p className="text-yellow-100 text-sm font-medium">
              This is a high-risk investment opportunity. Film investments are speculative and may
              result in total loss of capital. Past performance does not guarantee future results.
              Please consult with your financial advisor before investing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmProjectDetail
