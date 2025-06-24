import React, { useRef, useState, useEffect, useCallback } from 'react'
import { dealFlow } from '../../data/dealFlowData'
import { Deal } from '../../types/deals'

const VISIBLE_CARDS = 7 // Show 3 on each side + center
const ROTATION_ANGLE = 45 // degrees between cards
const DEPTH = 200 // px for Z translation
const ADJACENT_DEPTH = 100 // px for adjacent cards
const ANIMATION_DURATION = 400 // ms

const DealCard: React.FC<{
  deal: Deal
  isFocused?: boolean
  style?: React.CSSProperties
  onClick?: () => void
  tabIndex?: number
}> = ({ deal, isFocused, style, onClick, tabIndex }) => {
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
    <div
      className={`bg-black/20 rounded-2xl p-4 h-full flex flex-col text-sm transition-transform duration-300 ease-in-out shadow-lg ${isFocused ? 'ring-2 ring-purple-500' : ''}`}
      style={style}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={deal.title + (isFocused ? ' (focused)' : '')}
      role="group"
    >
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

const getTransform = (offset: number) => {
  // Center card
  if (offset === 0) {
    return {
      transform: 'translateZ(0px) scale(1)',
      opacity: 1,
      zIndex: 3,
      filter: 'none',
      boxShadow: '0 8px 32px 0 rgba(80,0,160,0.25)',
    }
  }
  // Adjacent cards
  if (Math.abs(offset) === 1) {
    return {
      transform: `translateZ(-${ADJACENT_DEPTH}px) rotateY(${offset * ROTATION_ANGLE}deg) scale(0.85)`,
      opacity: 0.7,
      zIndex: 2,
      filter: 'blur(0.5px)',
      boxShadow: '0 4px 16px 0 rgba(80,0,160,0.15)',
    }
  }
  // Background cards
  if (Math.abs(offset) === 2) {
    return {
      transform: `translateZ(-${DEPTH}px) rotateY(${offset * ROTATION_ANGLE * 2}deg) scale(0.7)`,
      opacity: 0.4,
      zIndex: 1,
      filter: 'blur(1.5px)',
      boxShadow: '0 2px 8px 0 rgba(80,0,160,0.10)',
    }
  }
  // Hide further cards
  return {
    transform: 'scale(0.5) translateZ(-300px)',
    opacity: 0,
    zIndex: 0,
    pointerEvents: 'none',
    filter: 'blur(2px)',
  }
}

const DealFlowFeed: React.FC<DealFlowFeedProps> = ({ onSelectDeal }) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const animationTimeout = useRef<NodeJS.Timeout | null>(null)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') rotate(-1)
      if (e.key === 'ArrowRight') rotate(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx])

  // Swipe/drag navigation
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if ('touches' in e) {
      touchStartX.current = e.touches[0].clientX
    } else {
      touchStartX.current = (e as React.MouseEvent).clientX
    }
    touchDeltaX.current = 0
  }
  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (touchStartX.current !== null) {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
      touchDeltaX.current = clientX - touchStartX.current
    }
  }
  const handleTouchEnd = () => {
    if (touchDeltaX.current > 50) rotate(-1)
    else if (touchDeltaX.current < -50) rotate(1)
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  // Click navigation
  const handleClickZone = (dir: number) => {
    rotate(dir)
  }

  // Click on card
  const handleCardClick = (idx: number) => {
    if (idx === activeIdx) return
    setActiveIdx(idx)
  }

  // Rotation logic
  const rotate = (dir: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIdx(prev => {
      let next = prev + dir
      if (next < 0) next = dealFlow.length - 1
      if (next >= dealFlow.length) next = 0
      return next
    })
    if (animationTimeout.current) clearTimeout(animationTimeout.current)
    animationTimeout.current = setTimeout(() => setIsAnimating(false), ANIMATION_DURATION)
  }

  // Accessibility: Announce card changes
  useEffect(() => {
    if (!carouselRef.current) return
    const liveRegion = carouselRef.current.querySelector('[aria-live]') as HTMLElement
    if (liveRegion) {
      liveRegion.textContent = `Showing deal: ${dealFlow[activeIdx].title}`
    }
  }, [activeIdx])

  // Only render visible cards
  const getVisibleCards = () => {
    const cards = []
    for (let i = -3; i <= 3; i++) {
      let idx = (activeIdx + i + dealFlow.length) % dealFlow.length
      cards.push({
        deal: dealFlow[idx],
        offset: i,
        idx,
      })
    }
    return cards
  }

  return (
    <div
      className="deal-flow-carousel-container relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
      ref={carouselRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Deal Flow Feed 3D Carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {/* Left click zone */}
      <div
        className="absolute left-0 top-0 h-full w-1/4 z-10 cursor-pointer"
        aria-hidden="true"
        onClick={() => handleClickZone(-1)}
      />
      {/* Right click zone */}
      <div
        className="absolute right-0 top-0 h-full w-1/4 z-10 cursor-pointer"
        aria-hidden="true"
        onClick={() => handleClickZone(1)}
      />
      {/* 3D Cards */}
      <div
        className="carousel-3d relative w-full h-80 flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', height: 340 }}
      >
        {getVisibleCards().map(({ deal, offset, idx }) => (
          <div
            key={deal.id}
            className="absolute top-0 left-1/2"
            style={{
              ...getTransform(offset),
              transition: `
                transform ${ANIMATION_DURATION}ms cubic-bezier(0.25,0.46,0.45,0.94),
                opacity 200ms ease-in-out,
                filter 300ms ease,
                box-shadow 300ms ease
              `,
              pointerEvents: offset === 0 ? 'auto' : 'auto',
              marginLeft: '-160px', // half card width
              width: 320,
              height: 320,
            }}
            onClick={() => handleCardClick(idx)}
            tabIndex={offset === 0 ? 0 : -1}
            aria-hidden={offset !== 0}
            aria-label={deal.title + (offset === 0 ? ' (focused)' : '')}
          >
            <DealCard deal={deal} isFocused={offset === 0} />
          </div>
        ))}
      </div>
      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite" />
    </div>
  )
}

export default DealFlowFeed
