import React from 'react'

const PortalCard = ({ portal, onPortalClick }) => {
  const isFilmmaker = portal.key === 'filmmakers'
  return (
    <div
      className={`portal-card${portal.disabled ? ' disabled' : ''}${isFilmmaker ? ' filmmakers-card' : ''}`}
      onClick={() => !portal.disabled && onPortalClick(portal.url)}
      tabIndex={portal.disabled ? -1 : 0}
      role="button"
      aria-disabled={portal.disabled}
      style={{
        cursor: portal.disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isFilmmaker ? 'space-between' : 'center',
        alignItems: 'center',
        height: isFilmmaker ? '100%' : undefined,
      }}
    >
      {isFilmmaker ? (
        <>
          <h3 className="filmmaker-title">{portal.name}</h3>
          <div
            className="filmmaker-desc-wrap"
            style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%' }}
          >
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
        </>
      ) : (
        <>
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
        </>
      )}
      {portal.disabled && <span className="coming-soon-badge">Coming Soon</span>}
    </div>
  )
}

export default PortalCard
