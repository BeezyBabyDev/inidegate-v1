import React from 'react'

const PortalCard = ({ portal, onPortalClick }) => (
  <div
    className={`portal-card filmmakers-card${portal.disabled ? ' disabled' : ''}`}
    onClick={() => !portal.disabled && onPortalClick(portal.url)}
    tabIndex={portal.disabled ? -1 : 0}
    role="button"
    aria-disabled={portal.disabled}
    style={{
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
        className="portal-enter-btn filmmakers-btn"
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
