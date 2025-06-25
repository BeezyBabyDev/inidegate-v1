import React from 'react'

const PortalCard = ({ portal, onPortalClick }) => (
  <div
    className={`portal-card${portal.disabled ? ' disabled' : ''}`}
    onClick={() => !portal.disabled && onPortalClick(portal.url)}
    tabIndex={portal.disabled ? -1 : 0}
    role="button"
    aria-disabled={portal.disabled}
    style={{ cursor: portal.disabled ? 'not-allowed' : 'pointer' }}
  >
    <h3>{portal.name}</h3>
    <p>{portal.desc}</p>
    {!portal.disabled && (
      <button
        className="portal-enter-btn"
        tabIndex={0}
        onClick={e => {
          e.stopPropagation()
          onPortalClick(portal.url)
        }}
      >
        Enter Portal
      </button>
    )}
    {portal.disabled && <span className="coming-soon-badge">Coming Soon</span>}
  </div>
)

export default PortalCard
