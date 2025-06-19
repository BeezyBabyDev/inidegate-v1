import React from 'react'
import DealFlowFeed from './DealFlowFeed'
import PortfolioOverview from './PortfolioOverview'
import QuickInsights from './QuickInsights'
import MarketTrends from './MarketTrends'

interface InvestorProfile {
  name: string
  // Add more fields as needed for dashboard personalization
}

interface DashboardProps {
  investor: InvestorProfile
}

const InvestorDashboard: React.FC<DashboardProps> = ({ investor }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-8 py-4">
      <p className="text-xl text-purple-200 mb-8 text-center">
        Discover groundbreaking indie film projects, analyze market opportunities, and build your
        entertainment portfolio with confidence.
      </p>

      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="bg-purple-900/30 backdrop-blur-sm border border-white/10 rounded-[40px] p-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Welcome, {investor?.name || 'Investor'}!
          </h2>
          <p className="text-lg text-purple-200 mb-8 text-center">
            Here's your personalized dashboard overview.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-purple-800/30 backdrop-blur-sm border border-white/10 rounded-[32px] p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
              <p className="text-purple-200">Active investment opportunities will appear here.</p>
              <DealFlowFeed />
            </div>

            <div className="bg-purple-800/30 backdrop-blur-sm border border-white/10 rounded-[32px] p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Portfolio Overview</h3>
              <p className="text-purple-200">Your portfolio summary will appear here.</p>
              <PortfolioOverview />
            </div>

            <div className="bg-purple-800/30 backdrop-blur-sm border border-white/10 rounded-[32px] p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Quick Insights & Actions</h3>
              <p className="text-purple-200">Key stats and quick actions will appear here.</p>
              <QuickInsights />
            </div>
          </div>
        </div>

        <div className="bg-purple-900/30 backdrop-blur-sm border border-white/10 rounded-[40px] p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Market Insights & Trending Projects
          </h3>
          <MarketTrends />
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard
