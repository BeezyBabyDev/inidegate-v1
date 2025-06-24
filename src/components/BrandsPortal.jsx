import { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Button from './Button'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { useNavigate } from 'react-router-dom'

const BrandsPortal = () => {
  const navigate = useNavigate()
  // Automatically scroll to top when component mounts
  useScrollToTop()

  const [activeTab, setActiveTab] = useState('Overview')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

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
        {/* Active Campaigns Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Active Campaigns</h3>
          <p className="text-orange-200 mb-4">7 partnerships running</p>
          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
            Manage Campaigns
          </Button>
        </div>

        {/* ROI Tracking Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Campaign ROI</h3>
          <p className="text-orange-200 mb-4">+245% average return</p>
          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
            View Analytics
          </Button>
        </div>

        {/* New Opportunities Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">New Opportunities</h3>
          <p className="text-orange-200 mb-4">15 perfect matches</p>
          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
            Browse Projects
          </Button>
        </div>
      </div>

      {/* Featured Opportunities */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Featured Brand Partnership Opportunities
        </h3>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">
                  &ldquo;Urban Dreams&rdquo; - Tech Startup Integration
                </h4>
                <p className="text-orange-300">Indie Drama • $2.5M Budget • Los Angeles</p>
                <p className="text-orange-200 text-sm mt-2">
                  Looking for emerging tech brands for authentic startup office scenes and mobile
                  app integration
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-full">
                    Tech
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-full">
                    Apps
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-full">
                    Startups
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-300 font-medium">Equity Partnership</p>
                <p className="text-orange-200 text-sm">2-5% Revenue Share</p>
                <p className="text-orange-200 text-sm">Deadline: Jan 15</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                  92% Match
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm">
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-300 hover:bg-orange-500/20 text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">
                  &ldquo;Midnight Café&rdquo; - Food & Beverage Feature
                </h4>
                <p className="text-orange-300">Romance • $1.8M Budget • Portland</p>
                <p className="text-orange-200 text-sm mt-2">
                  Authentic coffee shop setting needs artisanal coffee brands and local food
                  products
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded-full">
                    Food & Beverage
                  </span>
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded-full">
                    Coffee
                  </span>
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded-full">
                    Local
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-300 font-medium">Product Placement</p>
                <p className="text-orange-200 text-sm">$15K-50K Budget</p>
                <p className="text-orange-200 text-sm">Deadline: Dec 20</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                  87% Match
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm">
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-300 hover:bg-orange-500/20 text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBrandProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Brand Profile</h3>

        {/* Brand Header */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">TC</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">TechCorp Industries</h4>
            <p className="text-orange-300">Technology & Innovation • San Francisco, CA</p>
            <p className="text-orange-200 mt-2">
              Leading tech company specializing in AI and mobile app development
            </p>
            <div className="flex space-x-2 mt-3">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm">
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-300 hover:bg-orange-500/20 text-sm"
              >
                View Public Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Brand Categories */}
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-white mb-3">Brand Categories</h5>
          <div className="flex flex-wrap gap-2">
            {['Technology', 'Mobile Apps', 'AI/ML', 'Startups', 'Innovation', 'B2B Solutions'].map(
              (category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-500/20 text-orange-200 text-sm rounded-full"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>

        {/* Recent Partnerships */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Recent Partnerships</h5>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">&ldquo;Silicon Dreams&rdquo; (2024)</h6>
              <p className="text-orange-300 text-sm">
                Product Placement - TechCorp App Integration
              </p>
              <p className="text-orange-200 text-xs">
                ROI: +320% • 2.5M impressions • Featured in Cannes
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">&ldquo;Future Forward&rdquo; (2023)</h6>
              <p className="text-orange-300 text-sm">Equity Partnership - 3% Revenue Share</p>
              <p className="text-orange-200 text-xs">
                ROI: +185% • International Distribution • Award Winner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPartnershipsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Partnership Dashboard</h3>

        {/* Partnership Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-400">12</p>
            <p className="text-orange-200 text-sm">Active Partnerships</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">$2.4M</p>
            <p className="text-orange-200 text-sm">Total Investment</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">245%</p>
            <p className="text-orange-200 text-sm">Avg ROI</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">18</p>
            <p className="text-orange-200 text-sm">Film Credits</p>
          </div>
        </div>

        {/* Active Partnerships */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Active Partnerships</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">
                  &ldquo;Urban Dreams&rdquo; - Tech Integration
                </h5>
                <p className="text-orange-300 text-sm">Production Phase • 60% Complete</p>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                In Production
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">
                  &ldquo;Midnight Café&rdquo; - Product Placement
                </h5>
                <p className="text-orange-300 text-sm">Post-Production • Editing Phase</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                Post-Production
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">
                  &ldquo;Drive&rdquo; - Premium Partnership
                </h5>
                <p className="text-orange-300 text-sm">Distribution • Film Festival Circuit</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Brand Analytics</h3>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-400">12.5M</p>
            <p className="text-orange-200 text-sm">Total Impressions</p>
            <p className="text-green-400 text-xs">+45% this quarter</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">245%</p>
            <p className="text-orange-200 text-sm">Average ROI</p>
            <p className="text-green-400 text-xs">+12% vs last year</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">4.7</p>
            <p className="text-orange-200 text-sm">Partnership Rating</p>
            <p className="text-green-400 text-xs">Based on 34 projects</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">$2.4M</p>
            <p className="text-orange-200 text-sm">Revenue Generated</p>
            <p className="text-green-400 text-xs">+78% year over year</p>
          </div>
        </div>

        {/* Recent Performance */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Recent Performance</h4>
          <div className="space-y-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">
                &ldquo;Silicon Dreams&rdquo; generated{' '}
                <span className="text-orange-400">2.5M impressions</span> at Cannes
              </p>
              <p className="text-orange-300">3 days ago</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">
                New partnership opportunity:{' '}
                <span className="text-orange-400">&ldquo;Future Tech&rdquo;</span> - 95% brand match
              </p>
              <p className="text-orange-300">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProjectsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Project Portfolio</h3>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">&ldquo;Silicon Dreams&rdquo; (2024)</h4>
            <p className="text-orange-300 text-sm mb-3">Tech Drama • $3.2M Budget</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Investment:</span>
                <span className="text-white">$250K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">ROI:</span>
                <span className="text-green-400">+320%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Impressions:</span>
                <span className="text-white">2.5M</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
              Completed
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">&ldquo;Future Forward&rdquo; (2023)</h4>
            <p className="text-orange-300 text-sm mb-3">Sci-Fi Thriller • $4.1M Budget</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Investment:</span>
                <span className="text-white">$180K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">ROI:</span>
                <span className="text-green-400">+185%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Awards:</span>
                <span className="text-white">3</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
              Award Winner
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case '🎯 Dashboard':
        return renderDashboardTab()
      case '🏢 Brand Profile':
        return renderBrandProfileTab()
      case '🤝 Partnerships':
        return renderPartnershipsTab()
      case '📊 Analytics':
        return renderAnalyticsTab()
      case '🎬 Projects':
        return renderProjectsTab()
      default:
        return renderDashboardTab()
    }
  }

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        activeTab={activeTab}
        onTabClick={handleTabClick}
        portalType="brands"
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}
      >
        <TopBar />
        <main className="flex-1 overflow-y-auto p-8">{renderContent()}</main>
      </div>
    </div>
  )
}

export default BrandsPortal
