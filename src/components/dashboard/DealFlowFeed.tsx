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

const getTransform = (offset: number, isMobile: boolean, isTablet: boolean) => {
  // Desktop defaults
  let tx = 0,
    tz = 0,
    rot = 0,
    scale = 1,
    opacity = 1,
    z = 10,
    blur = 0,
    shadow = ''
  if (offset === 0) {
    // Center
    tx = 0
    tz = 0
    rot = 0
    scale = 0.85
    opacity = 1
    z = 10
    blur = 0
    shadow = '0 20px 40px rgba(0,0,0,0.3)'
  } else if (offset === -1) {
    // Left Adjacent
    tx = isMobile ? -140 : isTablet ? -210 : -280
    tz = isMobile ? -80 : isTablet ? -100 : -150
    rot = -45
    scale = 0.45
    opacity = 0.8
    z = 5
    blur = 1
    shadow = '0 10px 20px rgba(0,0,0,0.2)'
  } else if (offset === 1) {
    // Right Adjacent
    tx = isMobile ? 140 : isTablet ? 210 : 280
    tz = isMobile ? -80 : isTablet ? -100 : -150
    rot = 45
    scale = 0.45
    opacity = 0.8
    z = 5
    blur = 1
    shadow = '0 10px 20px rgba(0,0,0,0.2)'
  } else if (offset === -2 && !isMobile) {
    // Far Left (not shown on mobile)
    tx = isTablet ? -340 : -450
    tz = isTablet ? -200 : -300
    rot = -75
    scale = 0.25
    opacity = 0.4
    z = 1
    blur = 2
    shadow = '0 5px 10px rgba(0,0,0,0.1)'
  } else if (offset === 2 && !isMobile) {
    // Far Right (not shown on mobile)
    tx = isTablet ? 340 : 450
    tz = isTablet ? -200 : -300
    rot = 75
    scale = 0.25
    opacity = 0.4
    z = 1
    blur = 2
    shadow = '0 5px 10px rgba(0,0,0,0.1)'
  } else {
    // Hide further cards
    return {
      transform: 'scale(0.1) translateZ(-400px)',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none' as React.CSSProperties['pointerEvents'],
      filter: 'blur(3px)',
      boxShadow: 'none',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden' as React.CSSProperties['backfaceVisibility'],
      transformOrigin: 'center center',
    }
  }
  return {
    transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rot}deg) scale(${scale})`,
    opacity,
    zIndex: z,
    pointerEvents: 'auto' as React.CSSProperties['pointerEvents'],
    filter: blur
      ? `blur(${blur}px) brightness(${0.7 + 0.3 * opacity})`
      : `brightness(${0.7 + 0.3 * opacity})`,
    boxShadow: shadow,
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden' as React.CSSProperties['backfaceVisibility'],
    transformOrigin: 'center center',
  }
}

const DealFlowFeed: React.FC<DealFlowFeedProps> = ({ onSelectDeal }) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef<number | null>(null)
  const touchDeltaX = useRef<number>(0)
  const animationTimeout = useRef<NodeJS.Timeout | null>(null)

  // Responsive helpers
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1200

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

  // Only render 5 cards (center, ±1, ±2), but only 3 on mobile
  const getVisibleCards = () => {
    const cards = []
    for (let i = isMobile ? -1 : -2; i <= (isMobile ? 1 : 2); i++) {
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
      style={{
        perspective: isMobile ? 800 : isTablet ? 1000 : 1400,
        perspectiveOrigin: 'center center',
        height: isMobile ? 340 : 600,
      }}
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
        className="carousel-3d relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', width: '100%', height: isMobile ? 340 : 600 }}
      >
        {getVisibleCards().map(({ deal, offset, idx }) => (
          <div
            key={deal.id}
            className="deal-card absolute top-1/2 left-1/2"
            style={{
              ...getTransform(offset, isMobile, isTablet),
              transition: `
                transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94),
                opacity 0.4s ease-in-out
              `,
              marginLeft: '-160px',
              marginTop: isMobile ? '-100px' : '-300px',
              width: isMobile ? 200 : 320,
              height: isMobile ? 200 : 320,
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
