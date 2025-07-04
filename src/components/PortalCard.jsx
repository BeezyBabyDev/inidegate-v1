import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const PortalCard = ({ portal }) => {
  const navigate = useNavigate()

  const handlePortalNavigation = portalType => {
    const routes = {
      filmmakers: '/filmmakers/dashboard',
      investors: '/investors/dashboard',
      brands: '/brands/dashboard',
      talent: '/talent/dashboard',
      distributors: '/distributors/dashboard',
    }
    if (routes[portalType]) navigate(routes[portalType])
  }

  return (
    <>
      <h2 className="filmmaker-title" style={{ textAlign: 'center', width: '100%' }}>
        {portal.name}
      </h2>
      <div
        className="filmmaker-desc-wrap"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2.5rem',
          width: '100%',
        }}
      >
        <p className="filmmaker-desc" style={{ flex: 1, textAlign: 'center' }}>
          {portal.desc}
        </p>
        {!portal.disabled && (
          <button
            type="button"
            className="portal-enter-btn filmmakers-btn static-highlight-btn"
            tabIndex={0}
            aria-label={`Enter ${portal.name} Portal`}
            title={`Enter ${portal.name} Portal`}
            style={{
              pointerEvents: 'auto',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 0,
              position: 'static',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onClick={() => {
              handlePortalNavigation(portal.key)
            }}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handlePortalNavigation(portal.key)
              }
            }}
          >
            Enter Portal
          </button>
        )}
        {portal.disabled && (
          <button
            type="button"
            className="portal-enter-btn filmmakers-btn"
            tabIndex={-1}
            aria-label="Coming Soon"
            title="Coming Soon"
            disabled
            style={{
              border: '2px solid #FFD600',
              color: '#FFD600',
              background: 'rgba(139, 92, 246, 0.1)',
              marginTop: 0,
            }}
          >
            Coming Soon
          </button>
        )}
      </div>
    </>
  )
}

export default PortalCard
