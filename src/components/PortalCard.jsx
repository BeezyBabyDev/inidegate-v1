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
    <div
      className={`portal-card filmmakers-card${portal.disabled ? ' disabled' : ''}`}
      tabIndex={portal.disabled ? -1 : 0}
      role="region"
      aria-disabled={portal.disabled}
      style={{
        pointerEvents: 'auto',
        cursor: portal.disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h2 className="filmmaker-title" style={{ textAlign: 'center', width: '100%' }}>
        {portal.name}
      </h2>
      <div className="filmmaker-desc-wrap">
        <p className="filmmaker-desc">{portal.desc}</p>
      </div>
      {!portal.disabled && (
        <button
          type="button"
          className="portal-enter-btn filmmakers-btn"
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
            marginTop: '1.5rem',
            position: 'static',
          }}
          onClick={() => {
            console.log('Button clicked', portal.key)
            alert('Button clicked: ' + portal.key)
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
      {portal.disabled && <span className="coming-soon-badge">Coming Soon</span>}
    </div>
  )
}

export default PortalCard
