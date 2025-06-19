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
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
            <p className="text-purple-200 mb-6">
              Active investment opportunities will appear here.
            </p>
            <DealFlowFeed />
          </div>

          <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Portfolio Overview</h3>
            <p className="text-purple-200 mb-6">Your portfolio summary will appear here.</p>
            <PortfolioOverview />
          </div>

          <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Quick Insights & Actions</h3>
            <p className="text-purple-200 mb-6">Key stats and quick actions will appear here.</p>
            <QuickInsights />
          </div>
        </div>

        <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Market Insights & Trending Projects
          </h3>
          <MarketTrends />
        </div>
      </div>
    </>
  )
}

export default InvestorDashboard
