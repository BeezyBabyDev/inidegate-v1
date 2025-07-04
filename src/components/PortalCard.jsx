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
      <div className="filmmaker-desc-wrap">
        <p className="filmmaker-desc">{portal.desc}</p>
      </div>
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
            marginTop: '1.5rem',
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
            pointerEvents: 'none',
            cursor: 'not-allowed',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '1.5rem',
            position: 'static',
            transition: 'box-shadow 0.2s, border-color 0.2s',
            background: '#1a1625',
            border: '2px solid #FFD600',
            color: '#FFD600',
            fontWeight: 600,
            fontSize: '1.125rem',
            borderRadius: '9999px',
            width: '100%',
            maxWidth: '220px',
            height: '48px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Coming Soon
        </button>
      )}
    </>
  )
}

export default PortalCard
