import React, { useRef } from 'react'
import { dealFlow } from '../../data/dealFlowData'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Deal } from '../../types/deals'

interface DealCardProps {
  deal: Deal
  onSelectDeal: (id: string) => void
}

const DealCard: React.FC<DealCardProps> = ({ deal, onSelectDeal }) => {
  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const getStatusChipClass = (status: Deal['status']): string => {
    switch (status) {
      case 'Hot Deal':
        return 'bg-red-500/80 border-red-400'
      case 'Featured':
        return 'bg-blue-500/80 border-blue-400'
      case 'Limited Time':
        return 'bg-yellow-500/80 border-yellow-400'
      default:
        return 'bg-green-500/80 border-green-400'
    }
  }

  return (
    <div
      className="flex-shrink-0 w-full cursor-pointer group"
      onClick={() => onSelectDeal(deal.id)}
    >
      <div className="bg-white/5 p-6 rounded-[24px] h-full flex flex-col transition-all duration-300 group-hover:bg-white/10 group-hover:scale-[1.02]">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
            {deal.title}
          </h4>
          {deal.status && (
            <span
              className={`text-xs font-semibold text-white px-3 py-1 rounded-full border ${getStatusChipClass(
                deal.status
              )}`}
            >
              {deal.status}
            </span>
          )}
        </div>
        <p className="text-sm text-purple-200 mb-4">
          {deal.genre} • {deal.stage}
        </p>
        <p className="text-sm text-purple-300 mb-6">Director: {deal.director}</p>

        <div className="space-y-3 text-sm mt-auto">
          <div className="flex justify-between items-center">
            <span className="text-purple-300">Budget:</span>
            <span className="text-white font-semibold">{formatCurrency(deal.budget)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-300">Seeking:</span>
            <span className="text-green-400 font-bold">{formatCurrency(deal.seeking)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-300">Equity:</span>
            <span className="text-white font-semibold">{deal.equity}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-purple-300">Est. ROI:</span>
            <span className="text-green-400 font-bold">{deal.roi}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface DealFlowFeedProps {
  onSelectDeal: (id: string) => void
}

const DealFlowFeed: React.FC<DealFlowFeedProps> = ({ onSelectDeal }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-4"
      >
        {dealFlow.map((deal: Deal) => (
          <div key={deal.id} className="snap-start w-full flex-shrink-0">
            <DealCard deal={deal} onSelectDeal={onSelectDeal} />
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full pointer-events-none">
        <button
          onClick={() => scroll('left')}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white rounded-full p-2 ml-[-20px] transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 text-white rounded-full p-2 mr-[-20px] transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default DealFlowFeed
