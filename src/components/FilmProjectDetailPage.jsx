import { useState, useEffect } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'

const FilmProjectDetailPage = ({ onBack, project }) => {
  useScrollToTop()

  const [fundingProgress, setFundingProgress] = useState(0)
  const [showFullBudget, setShowFullBudget] = useState(false)

  // Default project data for "Urban Legends 2" if no project is passed
  const defaultProject = {
    id: 'urban-legends-2',
    title: 'Urban Legends 2',
    genre: 'Horror',
    stage: 'Pre-Production',
    fundingStatus: 'Partially Funded',
    budget: '$850K',
    secured: '$620K',
    role: 'Director/Producer',
    timeline: 'Production starts March 2024',
    status: 'On Track',
  }

  const projectData = project || defaultProject

  // Calculate funding percentage
  const budgetNumber = parseInt(projectData.budget.replace(/[$K]/g, '')) * 1000
  const securedNumber = parseInt(projectData.secured.replace(/[$K]/g, '')) * 1000
  const fundingPercentage = Math.round((securedNumber / budgetNumber) * 100)

  // Animate funding progress bar on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setFundingProgress(fundingPercentage)
    }, 500)
    return () => clearTimeout(timer)
  }, [fundingPercentage])

  const handleScheduleCall = () => {
    alert('Investment call scheduling feature coming soon! Please contact us directly.')
  }

  const handleDownloadPitchDeck = () => {
    alert('Pitch deck download feature coming soon! Please contact us for materials.')
  }

  const investmentTiers = [
    {
      amount: '$25K+',
      title: 'Associate Producer',
      benefits: [
        'Associate Producer screen credit',
        'Behind-the-scenes set visit',
        'Digital screener access',
        'Monthly progress reports',
        'Invitation to wrap party',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      amount: '$50K+',
      title: 'Executive Producer',
      benefits: [
        'Executive Producer screen credit',
        'Creative input during production',
        'Two premiere tickets',
        'Revenue sharing participation',
        'Marketing consultation access',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      amount: '$100K+',
      title: 'Co-Producer',
      benefits: [
        'Co-Producer credit with logo placement',
        'Distribution strategy consultation',
        'First-look rights on sequel',
        'Premium revenue share tier',
        'Festival screening access',
        'Merchandising participation',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  const budgetBreakdown = [
    {
      category: 'Production Equipment & Technology',
      amount: 180000,
      description: 'Cameras, lighting, audio, specialized horror equipment',
    },
    {
      category: 'Cast & Crew Compensation',
      amount: 95000,
      description: 'Principal cast, key crew, union requirements',
    },
    {
      category: 'Location Fees & Permits',
      amount: 45000,
      description: 'Filming locations, permits, insurance',
    },
    {
      category: 'Post-Production & VFX',
      amount: 75000,
      description: 'Editing, color, VFX, sound design',
    },
    {
      category: 'Marketing & Distribution',
      amount: 65000,
      description: 'Festival strategy, promotional materials, PR',
    },
    {
      category: 'Contingency & Insurance',
      amount: 30000,
      description: 'Production insurance, contingency fund',
    },
  ]

  const teamMembers = [
    {
      name: 'Marcus Rivera',
      role: 'Director/Producer',
      experience: '15 years experience, 3 festival awards',
      avatar: '🎬',
    },
    {
      name: 'Sarah Chen',
      role: 'Cinematographer',
      experience: 'Award-winning DP, practical effects expert',
      avatar: '📹',
    },
    {
      name: 'James Kim',
      role: 'VFX Supervisor',
      experience: 'Industry veteran with major horror credits',
      avatar: '✨',
    },
  ]

  const timelineItems = [
    {
      quarter: 'Q1 2024',
      phase: 'Pre-Production',
      tasks: 'Cast, locations, pre-viz',
      status: 'current',
    },
    {
      quarter: 'Q2 2024',
      phase: 'Principal Photography',
      tasks: '30-day shoot schedule',
      status: 'upcoming',
    },
    {
      quarter: 'Q3-Q4 2024',
      phase: 'Post-Production',
      tasks: 'Editing, VFX, sound design',
      status: 'upcoming',
    },
    {
      quarter: 'Q1 2025',
      phase: 'Distribution',
      tasks: 'Festivals, theatrical, streaming',
      status: 'upcoming',
    },
  ]

  const comparableFilms = [
    { title: 'The Conjuring', roi: '2,100%', budget: '$20M', gross: '$420M' },
    { title: 'Paranormal Activity', roi: '66,900%', budget: '$15K', gross: '$193M' },
    { title: 'Insidious', roi: '1,000%', budget: '$1.5M', gross: '$97M' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Mobile-Optimized Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              <span className="text-xs md:text-sm text-purple-300 hidden sm:inline">
                Filmmaker Portal
              </span>
            </div>
            <button
              onClick={onBack}
              className="px-2 md:px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
            >
              <span>←</span>
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Header - Mobile Optimized */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 space-y-4 lg:space-y-0">
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-2">
                    {projectData.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm">
                    <span className="px-2 md:px-3 py-1 bg-red-500/20 text-red-300 rounded-full border border-red-400/30">
                      {projectData.genre}
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-400/30">
                      {projectData.stage}
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                      {projectData.role}
                    </span>
                    <span className="px-2 md:px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-400/30">
                      {fundingPercentage}% Funded
                    </span>
                  </div>
                </div>
                <div className="text-left lg:text-right lg:ml-4">
                  <div className="text-indigo-300 text-xs md:text-sm">Production Start</div>
                  <div className="text-white font-semibold text-sm md:text-base">
                    {projectData.timeline}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Synopsis */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Project Synopsis</h2>
              <div className="text-indigo-100 space-y-4">
                <p>
                  <strong className="text-white">Urban Legends 2</strong> is a supernatural horror
                  film that explores how ancient urban legends adapt and spread through modern
                  digital connectivity. Set in a contemporary college town, the film follows a group
                  of students who discover that viral social media challenges are actually
                  manifestations of centuries-old supernatural entities.
                </p>
                <p>
                  Building on the success of the original Urban Legends (1998), this modern
                  reimagining combines practical effects with cutting-edge technology to create
                  visceral, contemporary scares. The film explores themes of digital addiction,
                  viral misinformation, and the power of collective belief in the internet age.
                </p>
                <p>
                  With a focus on practical effects enhanced by modern VFX techniques, Urban Legends
                  2 aims to deliver authentic horror experiences that resonate with both franchise
                  fans and new audiences seeking intelligent, character-driven supernatural terror.
                </p>
              </div>
            </div>

            {/* Investment Tiers */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Investment Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {investmentTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div
                      className={`bg-gradient-to-r ${tier.color} text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block`}
                    >
                      {tier.amount}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{tier.title}</h3>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-indigo-200 text-sm flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Breakdown */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">What We're Seeking from Investors</h2>
                <button
                  onClick={() => setShowFullBudget(!showFullBudget)}
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  {showFullBudget ? 'Hide Details' : 'Show Details'}
                </button>
              </div>

              <div className="space-y-4">
                {budgetBreakdown.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{item.category}</h3>
                        {showFullBudget && (
                          <p className="text-indigo-200 text-sm mt-1">{item.description}</p>
                        )}
                      </div>
                      <div className="text-green-400 font-bold text-lg">
                        ${item.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total Budget</span>
                    <span className="text-2xl font-bold text-blue-400">$850,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Key Team Members</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg p-4 border border-white/10 text-center hover:border-white/30 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{member.avatar}</div>
                    <h3 className="text-white font-bold text-lg">{member.name}</h3>
                    <p className="text-purple-300 font-medium mb-2">{member.role}</p>
                    <p className="text-indigo-200 text-sm">{member.experience}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Production Timeline */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Production Timeline</h2>
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`w-4 h-4 rounded-full mt-1 ${
                        item.status === 'current' ? 'bg-green-400' : 'bg-gray-500'
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-1">
                        <span className="text-purple-300 font-semibold">{item.quarter}</span>
                        <span className="text-white font-bold">{item.phase}</span>
                      </div>
                      <p className="text-indigo-200 text-sm">{item.tasks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Funding Overview */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Funding Overview</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-indigo-200">Progress</span>
                    <span className="text-green-400 font-semibold">{fundingProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${fundingProgress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Total Budget</span>
                    <span className="text-blue-400 font-bold">{projectData.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Secured</span>
                    <span className="text-green-400 font-bold">{projectData.secured}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-indigo-200">Still Needed</span>
                    <span className="text-red-400 font-bold">
                      ${(budgetNumber - securedNumber) / 1000}K
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Analysis */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Market Analysis</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-purple-300 font-semibold mb-3">Comparable Films ROI</h4>
                  <div className="space-y-3">
                    {comparableFilms.map((film, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-white font-medium">{film.title}</div>
                            <div className="text-indigo-200 text-xs">Budget: {film.budget}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-bold">{film.roi}</div>
                            <div className="text-indigo-200 text-xs">{film.gross}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-4 border border-purple-400/30">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">Projected ROI</div>
                    <div className="text-green-400 font-bold text-2xl">400-800%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Ready to Invest?</h3>

              <div className="space-y-3">
                <button
                  onClick={handleScheduleCall}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Investment Call
                </button>

                <button
                  onClick={handleDownloadPitchDeck}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg border border-white/20 transition-all duration-200"
                >
                  Download Full Pitch Deck
                </button>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <div className="text-indigo-200 text-sm">
                  <div>Contact: invest@indiegate.io</div>
                  <div>Phone: (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmProjectDetailPage
