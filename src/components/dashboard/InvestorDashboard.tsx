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
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
            <p className="text-purple-200 mb-6">
              Active investment opportunities will appear here.
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 mt-auto flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Deal Flow Feed</h4>
              <p className="text-purple-200">Active investment opportunities will appear here.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-3">Portfolio Overview</h3>
            <p className="text-purple-200 mb-6">Your portfolio summary will appear here.</p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 mt-auto flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Portfolio Overview</h4>
              <p className="text-purple-200">Your portfolio summary will appear here.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-3">Quick Insights & Actions</h3>
            <p className="text-purple-200 mb-6">Key stats and quick actions will appear here.</p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 mt-auto flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Insights & Actions</h4>
              <p className="text-purple-200">Key stats and quick actions will appear here.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all">
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
