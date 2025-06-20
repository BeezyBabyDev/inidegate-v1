import React, { useState } from 'react'
import { dealFlow } from '../../data/dealFlowData'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Deal } from '../../types/deals'

const DealCard: React.FC<{ deal: Deal }> = ({ deal }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value)
  }

  const TAG_STYLES = {
    hot: 'bg-red-500/80 text-white',
    featured: 'bg-blue-500/80 text-white',
    limited: 'bg-yellow-500/80 text-black',
    pilot: 'bg-green-500/80 text-white'
  }

  const tagStyle = deal.tag ? TAG_STYLES[deal.tag.style] || '' : ''

  return (
    <div className="bg-white/5 rounded-2xl p-4 h-full flex flex-col text-sm">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-bold text-white text-base">{deal.title}</h4>
        {deal.tag && <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${tagStyle}`}>{deal.tag.text}</span>}
      </div>
      <p className="text-purple-300 text-xs mb-1">{deal.genre} • {deal.stage}</p>
      <p className="text-purple-300 text-xs mb-3">Director: {deal.director}</p>
      
      <div className="space-y-2 text-xs mt-auto">
        <div className="flex justify-between items-center"><span className="text-purple-300">Budget:</span> <span className="font-semibold text-white">{formatCurrency(deal.budget)}</span></div>
        <div className="flex justify-between items-center"><span className="text-purple-300">Seeking:</span> <span className="font-bold text-green-400">{formatCurrency(deal.seeking)}</span></div>
        <div className="flex justify-between items-center"><span className="text-purple-300">Equity:</span> <span className="font-semibold text-white">{deal.equity}%</span></div>
        <div className="flex justify-between items-center"><span className="text-purple-300">Est. ROI:</span> <span className="font-semibold text-white">{deal.estROI}%</span></div>
      </div>
    </div>
  )
}

interface DealFlowFeedProps {
  onSelectDeal: (deal: Deal) => void
}

const DealFlowFeed: React.FC<DealFlowFeedProps> = ({ onSelectDeal }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 2 + dealFlow.length) % dealFlow.length)
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 2) % dealFlow.length)
  }

  const visibleDeals = [
    dealFlow[currentIndex],
    dealFlow[(currentIndex + 1) % dealFlow.length]
  ]

  return (
    <div className="flex items-center justify-center h-full">
      <button onClick={handlePrev} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0">
        <ChevronLeft size={20} className="text-white" />
      </button>
      
      <div className="mx-4 w-full h-full flex flex-col gap-y-3">
        {visibleDeals.map(deal => (
          <div key={deal.id} className="h-1/2" onClick={() => onSelectDeal(deal)}>
            <DealCard deal={deal} />
          </div>
        ))}
      </div>

      <button onClick={handleNext} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex-shrink-0">
        <ChevronRight size={20} className="text-white" />
      </button>
    </div>
  )
}

export default DealFlowFeed
