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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-purple-900/20 backdrop-blur-sm border border-white/10 rounded-[32px] p-12">
          {/* Content will go here */}
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard
