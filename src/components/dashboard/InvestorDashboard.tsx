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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-8 py-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-6 text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to the Investor Network</h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-purple-200 text-center px-4">
          Discover groundbreaking indie film projects, analyze market opportunities, and build your
          entertainment portfolio with confidence.
        </p>

        {/* Main Content Container */}
        <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-8 mt-8">
          <div className="flex items-center justify-center mb-12">
            <img src="/chart-increasing.png" alt="Analytics Icon" className="w-16 h-16 mb-4" />
          </div>

          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Analytics Dashboard Coming Soon
          </h2>

          <p className="text-xl text-purple-200 text-center">
            Advanced portfolio analytics and market insights will be available soon!
          </p>
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard
