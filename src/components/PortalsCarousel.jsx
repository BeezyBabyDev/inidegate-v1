import React, { useRef, useState, useEffect } from 'react'
import Button from './Button'

const getTransform = (offset, isMobile, isTablet) => {
  let tx = 0,
    tz = 0,
    rot = 0,
    scale = 1,
    opacity = 1,
    z = 10,
    blur = 0,
    shadow = ''
  if (offset === 0) {
    tx = 0
    tz = 0
    rot = 0
    scale = 0.85
    opacity = 1
    z = 10
    blur = 0
    shadow = '0 25px 50px rgba(0,0,0,0.4)'
  } else if (offset === -1) {
    tx = isMobile ? -140 : isTablet ? -210 : -280
    tz = isMobile ? -80 : isTablet ? -100 : -150
    rot = -45
    scale = 0.45
    opacity = 0.8
    z = 5
    blur = 1
    shadow = '0 15px 30px rgba(0,0,0,0.3)'
  } else if (offset === 1) {
    tx = isMobile ? 140 : isTablet ? 210 : 280
    tz = isMobile ? -80 : isTablet ? -100 : -150
    rot = 45
    scale = 0.45
    opacity = 0.8
    z = 5
    blur = 1
    shadow = '0 15px 30px rgba(0,0,0,0.3)'
  } else if (offset === -2 && !isMobile) {
    tx = isTablet ? -340 : -450
    tz = isTablet ? -200 : -300
    rot = -75
    scale = 0.25
    opacity = 0.4
    z = 1
    blur = 2
    shadow = '0 8px 16px rgba(0,0,0,0.2)'
  } else if (offset === 2 && !isMobile) {
    tx = isTablet ? 340 : 450
    tz = isTablet ? -200 : -300
    rot = 75
    scale = 0.25
    opacity = 0.4
    z = 1
    blur = 2
    shadow = '0 8px 16px rgba(0,0,0,0.2)'
  } else {
    return {
      transform: 'scale(0.1) translateZ(-400px)',
      opacity: 0,
      zIndex: 0,
      pointerEvents: 'none',
      filter: 'blur(3px)',
      boxShadow: 'none',
      willChange: 'transform, opacity',
      backfaceVisibility: 'hidden',
      transformOrigin: 'center center',
    }
  }
  return {
    transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${rot}deg) scale(${scale})`,
    opacity,
    zIndex: z,
    pointerEvents: 'auto',
    filter: blur
      ? `blur(${blur}px) brightness(${0.7 + 0.3 * opacity})`
      : `brightness(${0.7 + 0.3 * opacity})`,
    boxShadow: shadow,
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
    transformOrigin: 'center center',
  }
}

const PortalsCarousel = ({ portals, onPortalClick }) => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef(null)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)
  const animationTimeout = useRef(null)

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
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') rotate(-1)
      if (e.key === 'ArrowRight') rotate(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIdx])

  // Swipe/drag navigation
  const handleTouchStart = e => {
    if ('touches' in e) {
      touchStartX.current = e.touches[0].clientX
    } else {
      touchStartX.current = e.clientX
    }
    touchDeltaX.current = 0
  }
  const handleTouchMove = e => {
    if (touchStartX.current !== null) {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
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
  const handleClickZone = dir => {
    rotate(dir)
  }

  // Click on card
  const handleCardClick = idx => {
    if (idx === activeIdx) return
    setActiveIdx(idx)
  }

  // Rotation logic
  const rotate = dir => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIdx(prev => {
      let next = prev + dir
      if (next < 0) next = portals.length - 1
      if (next >= portals.length) next = 0
      return next
    })
    if (animationTimeout.current) clearTimeout(animationTimeout.current)
    animationTimeout.current = setTimeout(() => setIsAnimating(false), 400)
  }

  // Only render 5 cards (center, ±1, ±2), but only 3 on mobile
  const getVisibleCards = () => {
    const cards = []
    for (let i = isMobile ? -1 : -2; i <= (isMobile ? 1 : 2); i++) {
      let idx = (activeIdx + i + portals.length) % portals.length
      cards.push({
        portal: portals[idx],
        offset: i,
        idx,
      })
    }
    return cards
  }

  // Special styling for "Coming Soon" portal
  const getCardClass = (portal, offset) => {
    let base =
      'portal-card absolute top-1/2 left-1/2 rounded-2xl p-8 flex flex-col items-start bg-gradient-to-br '
    base += portal.color + ' '
    if (portal.disabled) base += 'coming-soon '
    if (offset === 0) base += 'center '
    else if (Math.abs(offset) === 1) base += 'adjacent '
    else if (Math.abs(offset) === 2) base += 'far '
    return base
  }

  // Opacity for "Coming Soon"
  const getComingSoonOpacity = offset => {
    if (offset === 0) return 0.6
    if (Math.abs(offset) === 1) return 0.4
    if (Math.abs(offset) === 2) return 0.2
    return 0
  }

  return (
    <div
      className="explore-portals-carousel-container relative w-full flex items-center justify-center select-none"
      style={{
        perspective: isMobile ? 800 : isTablet ? 1000 : 1400,
        perspectiveOrigin: 'center center',
        height: isMobile ? 340 : 500,
        overflow: 'visible',
        margin: '2rem 0',
      }}
      ref={carouselRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Explore Our Portals 3D Carousel"
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
        className="portals-carousel-3d relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d', width: '100%', height: isMobile ? 340 : 500 }}
      >
        {getVisibleCards().map(({ portal, offset, idx }) => (
          <div
            key={portal.key}
            className={getCardClass(portal, offset)}
            style={{
              ...getTransform(offset, isMobile, isTablet),
              transition: `
                transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94),
                opacity 0.4s ease-in-out,
                box-shadow 0.3s ease
              `,
              marginLeft: isMobile ? '-100px' : '-160px',
              marginTop: isMobile ? '-100px' : '-160px',
              width: isMobile ? 200 : 320,
              height: isMobile ? 200 : 320,
              opacity: portal.disabled ? getComingSoonOpacity(offset) : undefined,
              filter: portal.disabled
                ? offset === 0
                  ? 'grayscale(0.5) brightness(0.8)'
                  : 'grayscale(0.8) brightness(0.7)'
                : undefined,
              pointerEvents: portal.disabled ? 'none' : 'auto',
            }}
            onClick={() => !portal.disabled && handleCardClick(idx)}
            tabIndex={offset === 0 ? 0 : -1}
            aria-hidden={offset !== 0}
            aria-label={portal.name + (offset === 0 ? ' (focused)' : '')}
          >
            <h3 className="text-2xl font-bold mb-2">{portal.name}</h3>
            <p
              className="mb-6 text-slate-100 text-base"
              style={{
                fontSize:
                  offset === 0 ? '1.1rem' : offset === 1 || offset === -1 ? '1rem' : '0.9rem',
                opacity: offset === 0 ? 1 : 0.8,
              }}
            >
              {portal.desc}
            </p>
            <Button
              variant="secondary"
              className={portal.disabled ? 'coming-soon-button' : 'portal-cta'}
              disabled={portal.disabled}
              style={{
                fontSize:
                  offset === 0 ? '1rem' : offset === 1 || offset === -1 ? '0.95rem' : '0.85rem',
                opacity: portal.disabled ? 0.7 : 1,
                pointerEvents: portal.disabled ? 'none' : 'auto',
                width: offset === 0 ? 180 : 140,
                height: 44,
                marginTop: 'auto',
              }}
              onClick={() => {
                if (!portal.disabled && onPortalClick) {
                  onPortalClick(portal.key)
                }
              }}
            >
              {portal.cta}
            </Button>
            {portal.disabled && (
              <span
                className="absolute top-4 right-4 bg-slate-900/80 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full coming-soon-badge"
                style={{ opacity: offset === 0 ? 1 : 0.7 }}
              >
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite" />
    </div>
  )
}

export default PortalsCarousel
