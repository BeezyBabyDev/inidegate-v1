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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-8 px-2 md:px-8">
      <div className="bg-purple-900/30 backdrop-blur-sm border border-white/10 rounded-[40px] p-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">
          Welcome, {investor?.name || 'Investor'}!
        </h2>
        <p className="text-lg text-purple-200 mb-8 text-center">
          Here's your personalized dashboard overview.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <DealFlowFeed />
          <PortfolioOverview />
          <QuickInsights />
        </div>
        <div>
          <MarketTrends />
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard
