import React from 'react'
import Slider from 'react-slick'
import { dealFlow } from '../../data/dealFlowData'
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
    pilot: 'bg-green-500/80 text-white',
  }

  const tagStyle = deal.tag ? TAG_STYLES[deal.tag.style] || '' : ''

  return (
    <div className="bg-black/20 rounded-2xl p-4 h-full flex flex-col text-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-bold text-white text-base">{deal.title}</h4>
        {deal.tag && (
          <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${tagStyle}`}>
            {deal.tag.text}
          </span>
        )}
      </div>
      <p className="text-purple-300 text-xs mb-1">
        {deal.genre} • {deal.stage}
      </p>
      <p className="text-purple-300 text-xs mb-3">Director: {deal.director}</p>

      <div className="space-y-2 text-xs mt-auto">
        <div className="flex justify-between items-center">
          <span className="text-purple-300">Budget:</span>{' '}
          <span className="font-semibold text-white">{formatCurrency(deal.budget)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-purple-300">Seeking:</span>{' '}
          <span className="font-bold text-green-400">{formatCurrency(deal.seeking)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-purple-300">Equity:</span>{' '}
          <span className="font-semibold text-white">{deal.equity}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-purple-300">Est. ROI:</span>{' '}
          <span className="font-semibold text-white">{deal.estROI}%</span>
        </div>
      </div>
    </div>
  )
}

interface DealFlowFeedProps {
  onSelectDeal: (deal: Deal) => void
}

const DealFlowFeed: React.FC<DealFlowFeedProps> = ({ onSelectDeal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="w-full h-full">
      <Slider {...settings} className="deal-flow-carousel">
        {dealFlow.map(deal => (
          <div key={deal.id} className="px-2 h-full">
            <div onClick={() => onSelectDeal(deal)} className="cursor-pointer h-full">
              <DealCard deal={deal} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default DealFlowFeed
