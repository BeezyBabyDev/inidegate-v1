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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          Welcome, {investor?.name || 'Investor'}!
        </h2>
        <p className="text-lg text-purple-200 mb-8">Here's your personalized dashboard overview.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <DealFlowFeed />
          <PortfolioOverview />
          <QuickInsights />
        </div>
        <MarketTrends />
      </div>
    </div>
  )
}

export default InvestorDashboard
