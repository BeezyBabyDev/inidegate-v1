import React, { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Button from './Button'
import TalentProfile from './TalentProfile'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { useNavigate } from 'react-router-dom'

const TalentPortalComponent = ({ onLogout }) => {
  const navigate = useNavigate()
  // Automatically scroll to top when component mounts
  useScrollToTop()

  // Inject clean button styles
  React.useEffect(() => {
    const styleElement = document.createElement('style')
    styleElement.textContent = mobileStyles
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  const [activeTab, setActiveTab] = useState('👤 Profile')
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const tabs = ['👤 Profile', '🎯 Dashboard', '🎬 Auditions', '🌐 Network', '📊 Analytics']

  const handleBackToDashboard = () => {
    setSelectedProfile(null)
    setCurrentView('dashboard')
  }

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  const handleLogout = () => {
    navigate('/')
  }

  const renderDashboardTab = () => (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Auditions Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
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
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Active Auditions</h3>
          <p className="text-pink-200 mb-4">5 pending applications</p>
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
            View Applications
          </Button>
        </div>

        {/* Profile Views Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Profile Views</h3>
          <p className="text-pink-200 mb-4">347 views this month</p>
          <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
            View Analytics
          </Button>
        </div>

        {/* Network Growth Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Network Growth</h3>
          <p className="text-pink-200 mb-4">23 new connections</p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Expand Network
          </Button>
        </div>
      </div>

      {/* Recent Casting Opportunities */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Recent Casting Opportunities</h3>
        <div className="space-y-4">
          {/* Sample casting opportunities */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">"Midnight Dreams" - Lead Role</h4>
                <p className="text-pink-300">Indie Drama • Los Angeles</p>
                <p className="text-pink-200 text-sm mt-2">
                  Female, 25-35, looking for emotionally complex lead character
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-200 text-xs rounded-full">
                    Drama
                  </span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-200 text-xs rounded-full">
                    Lead Role
                  </span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-200 text-xs rounded-full">
                    Female
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-pink-300 font-medium">$2,500/day</p>
                <p className="text-pink-200 text-sm">Closes: Dec 15</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                  95% Match
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-300 hover:bg-pink-500/20 text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">
                  "Urban Legends" - Supporting Actor
                </h4>
                <p className="text-pink-300">Thriller • Atlanta</p>
                <p className="text-pink-200 text-sm mt-2">
                  Male, 30-40, charismatic supporting character with depth
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-rose-500/20 text-rose-200 text-xs rounded-full">
                    Thriller
                  </span>
                  <span className="px-2 py-1 bg-rose-500/20 text-rose-200 text-xs rounded-full">
                    Supporting
                  </span>
                  <span className="px-2 py-1 bg-rose-500/20 text-rose-200 text-xs rounded-full">
                    Male
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-pink-300 font-medium">$1,800/day</p>
                <p className="text-pink-200 text-sm">Closes: Dec 20</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                  87% Match
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">
                Apply Now
              </Button>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-300 hover:bg-pink-500/20 text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Talent Profile</h3>

        {/* Profile Header */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">JD</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">Jane Doe</h4>
            <p className="text-pink-300">Lead Actress • Los Angeles, CA</p>
            <p className="text-pink-200 mt-2">
              Versatile performer with 8+ years experience in independent film and theater
            </p>
            <div className="flex space-x-2 mt-3">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-300 hover:bg-pink-500/20 text-sm"
              >
                View Public Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Skills & Specialties */}
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-white mb-3">Skills & Specialties</h5>
          <div className="flex flex-wrap gap-2">
            {[
              'Drama',
              'Comedy',
              'Action',
              'Voice Acting',
              'Stage Combat',
              'Method Acting',
              'Improvisation',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-pink-500/20 text-pink-200 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Credits */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Recent Credits</h5>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">"Silent Waters" (2024)</h6>
              <p className="text-pink-300 text-sm">Lead Role - Sarah Mitchell</p>
              <p className="text-pink-200 text-xs">
                Dir. Michael Chen • Awarded Best Actress at Sundance
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">"City Dreams" (2023)</h6>
              <p className="text-pink-300 text-sm">Supporting Role - Emma Rodriguez</p>
              <p className="text-pink-200 text-xs">
                Dir. Lisa Park • Selected for Cannes Film Festival
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAuditionsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Audition Dashboard</h3>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">12</p>
            <p className="text-pink-200 text-sm">Active Applications</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">8</p>
            <p className="text-pink-200 text-sm">Callbacks</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">3</p>
            <p className="text-pink-200 text-sm">Booked Roles</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">89%</p>
            <p className="text-pink-200 text-sm">Success Rate</p>
          </div>
        </div>

        {/* Application Status */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Recent Applications</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">"Midnight Dreams" - Lead Role</h5>
                <p className="text-pink-300 text-sm">Applied 3 days ago</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                Under Review
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">"Urban Legends" - Supporting</h5>
                <p className="text-pink-300 text-sm">Applied 1 week ago</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                Callback Scheduled
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">"The Voice Within" - Voice Over</h5>
                <p className="text-pink-300 text-sm">Applied 2 weeks ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                Booked!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNetworkTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Professional Network</h3>

        {/* Network Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">156</p>
            <p className="text-pink-200 text-sm">Connections</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">23</p>
            <p className="text-pink-200 text-sm">Casting Directors</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">45</p>
            <p className="text-pink-200 text-sm">Fellow Actors</p>
          </div>
        </div>

        {/* Suggested Connections */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Suggested Connections</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">MC</span>
                </div>
                <div>
                  <h5 className="font-medium text-white">Michael Chen</h5>
                  <p className="text-pink-300 text-sm">Director • 2 mutual connections</p>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">Connect</Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">LP</span>
                </div>
                <div>
                  <h5 className="font-medium text-white">Lisa Park</h5>
                  <p className="text-pink-300 text-sm">Casting Director • 5 mutual connections</p>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">Connect</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Performance Analytics</h3>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">347</p>
            <p className="text-pink-200 text-sm">Profile Views</p>
            <p className="text-green-400 text-xs">+23% this month</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">89%</p>
            <p className="text-pink-200 text-sm">Callback Rate</p>
            <p className="text-green-400 text-xs">+15% vs industry avg</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">4.8</p>
            <p className="text-pink-200 text-sm">Rating</p>
            <p className="text-green-400 text-xs">Based on 42 reviews</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-400">$45K</p>
            <p className="text-pink-200 text-sm">Avg Annual Earnings</p>
            <p className="text-green-400 text-xs">+35% year over year</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
          <div className="space-y-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">
                Profile viewed by{' '}
                <span className="text-pink-400">Sarah Wilson (Casting Director)</span>
              </p>
              <p className="text-pink-300">2 hours ago</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">
                Callback scheduled for <span className="text-pink-400">"Midnight Dreams"</span>
              </p>
              <p className="text-pink-300">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case '👤 Profile':
        return renderProfileTab()
      case '🎯 Dashboard':
        return renderDashboardTab()
      case '🎬 Auditions':
        return renderAuditionsTab()
      case '🌐 Network':
        return renderNetworkTab()
      case '📊 Analytics':
        return renderAnalyticsTab()
      default:
        return renderDashboardTab()
    }
  }

  if (currentView === 'profile' && selectedProfile) {
    return <TalentProfile talentData={selectedProfile} onBack={handleBackToDashboard} />
  }

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        onLogout={handleLogout}
        portalType="talent"
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}
      >
        <TopBar />
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            <button
              className="mb-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-purple-700"
              onClick={() => navigate('/')}
            >
              Back to Portals
            </button>
            {/* Welcome Section - Mobile Optimized */}
            <div className="mb-6 md:mb-8">
              <h2 className="portal-heading-main portal-fade-in">Welcome to the Talent Network</h2>
              <p className="portal-text-large text-pink-200 mb-6 md:mb-8 text-center">
                Connect with casting directors, audition for roles, and showcase your talent to the
                indie film community.
              </p>
            </div>

            {/* Mobile-First Tab Navigation */}
            <div className="mb-6 md:mb-8">
              {/* Mobile: Horizontal Scroll Tabs */}
              <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 border-0 outline-none focus:outline-none focus:ring-0 ${
                      activeTab === tab
                        ? 'bg-white text-pink-900 shadow-lg'
                        : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content with Mobile Optimization */}
            <div className="mb-6 md:mb-8">{renderContent()}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Add mobile-specific styles and clean button styling
const mobileStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Clean button styling - remove all default browser outlines */
  button:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  
  button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
  
  button:active {
    outline: none !important;
    box-shadow: none !important;
  }
  
  @media (max-width: 768px) {
    .mobile-card {
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .mobile-text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    
    .mobile-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`

export default TalentPortalComponent
