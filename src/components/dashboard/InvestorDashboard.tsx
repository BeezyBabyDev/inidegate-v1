import React from 'react'
import DealFlowFeed from './DealFlowFeed'
import MarketTrends from './MarketTrends'
import PortfolioOverview from './PortfolioOverview'
import { dealFlow } from '../../data/dealFlowData'
import { Deal } from '../../types/deals'

interface DashboardProps {
  onSelectDeal: (deal: Deal) => void
}

const InvestorDashboard: React.FC<DashboardProps> = ({ onSelectDeal }) => {
  const handleSelectDeal = (dealId: string) => {
    const selected = dealFlow.find(d => d.id === dealId)
    if (selected) {
      onSelectDeal(selected)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
          <p className="text-purple-200 mb-6 flex-shrink-0">
            Swipe to explore active investment opportunities.
          </p>
          <div className="flex-grow flex flex-col justify-center">
            <DealFlowFeed onSelectDeal={handleSelectDeal} />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <PortfolioOverview />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <MarketTrends />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard
