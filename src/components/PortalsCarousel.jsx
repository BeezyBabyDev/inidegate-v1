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

// Helper to get class for each card position
const getCardPositionClass = (offset, isMobile) => {
  if (offset === 0) return 'center'
  if (offset === -1) return isMobile ? 'adjacent-left' : 'adjacent-left'
  if (offset === 1) return isMobile ? 'adjacent-right' : 'adjacent-right'
  if (offset === -2 && !isMobile) return 'far-left'
  if (offset === 2 && !isMobile) return 'far-right'
  return ''
}

const getCardTransform = (offset, isMobile) => {
  // For center card, always use static transform, no movement
  if (offset === 0) return undefined // Let CSS handle it
  if (offset === -1)
    return isMobile
      ? 'translate(-50%, -50%) translateX(-200px) translateZ(-100px) rotateY(-45deg) scale(0.6)'
      : 'translate(-50%, -50%) translateX(-350px) translateZ(-150px) rotateY(-45deg) scale(0.7)'
  if (offset === 1)
    return isMobile
      ? 'translate(-50%, -50%) translateX(200px) translateZ(-100px) rotateY(45deg) scale(0.6)'
      : 'translate(-50%, -50%) translateX(350px) translateZ(-150px) rotateY(45deg) scale(0.7)'
  if (offset === -2 && !isMobile)
    return 'translate(-50%, -50%) translateX(-550px) translateZ(-300px) rotateY(-75deg) scale(0.4)'
  if (offset === 2 && !isMobile)
    return 'translate(-50%, -50%) translateX(550px) translateZ(-300px) rotateY(75deg) scale(0.4)'
  return 'translate(-50%, -50%) scale(0.1)'
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
      {/* Invisible navigation zones for left/right click */}
      <div className="carousel-navigation-zones">
        <div className="nav-zone nav-zone-left" onClick={() => rotate(-1)} />
        <div className="nav-zone nav-zone-right" onClick={() => rotate(1)} />
      </div>
      {/* 3D Cards */}
      <div
        className="portals-carousel-3d"
        style={{
          width: '100%',
          maxWidth: 1200,
          height: 500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        {getVisibleCards().map(({ portal, offset, idx }) => {
          const positionClass = getCardPositionClass(offset, isMobile)
          const isCenter = offset === 0
          return (
            <div
              key={portal.key}
              className={`portal-card ${positionClass}`}
              style={{
                ...(isCenter
                  ? {
                      // No transform for center card, let CSS handle it
                      top: '50%',
                      left: '50%',
                      position: 'absolute',
                      // No inline transform
                    }
                  : {
                      transform: getCardTransform(offset, isMobile),
                      top: '50%',
                      left: '50%',
                      position: 'absolute',
                    }),
                opacity: portal.disabled ? getComingSoonOpacity(offset) : undefined,
                filter: portal.disabled
                  ? offset === 0
                    ? 'grayscale(0.5) brightness(0.8)'
                    : 'grayscale(0.8) brightness(0.7)'
                  : undefined,
              }}
              tabIndex={isCenter ? 0 : -1}
              aria-hidden={!isCenter}
              aria-label={portal.name + (isCenter ? ' (focused)' : '')}
              onClick={() => {
                if (isCenter && !portal.disabled && onPortalClick) {
                  onPortalClick(portal.key)
                }
              }}
            >
              <h3 className="text-2xl font-bold mb-2">{portal.name}</h3>
              <p
                className="mb-6 text-slate-100 text-base"
                style={{ fontSize: isCenter ? '1.1rem' : '1rem', opacity: isCenter ? 1 : 0.8 }}
              >
                {portal.desc}
              </p>
              <Button
                variant="secondary"
                className={
                  portal.disabled ? 'coming-soon-button portal-button' : 'portal-cta portal-button'
                }
                disabled={portal.disabled}
                style={{
                  fontSize: isCenter ? '1rem' : '0.95rem',
                  opacity: portal.disabled ? 0.7 : 1,
                  width: isCenter ? 220 : 180,
                  minWidth: isCenter ? 220 : 180,
                  height: 44,
                  minHeight: 44,
                  marginTop: 'auto',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: isCenter ? '14px 28px' : '12px 24px',
                }}
                onClick={e => {
                  e.stopPropagation()
                  if (!portal.disabled && onPortalClick && isCenter) {
                    onPortalClick(portal.key)
                  }
                }}
              >
                {portal.cta}
              </Button>
              {portal.disabled && (
                <span
                  className="absolute top-4 right-4 bg-slate-900/80 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full coming-soon-badge"
                  style={{ opacity: isCenter ? 1 : 0.7 }}
                >
                  Coming Soon
                </span>
              )}
            </div>
          )
        })}
      </div>
      {/* Live region for screen readers */}
      <div className="sr-only" aria-live="polite" />
    </div>
  )
}

export default PortalsCarousel
