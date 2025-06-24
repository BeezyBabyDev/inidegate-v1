import React from 'react'
import Button from './Button'

const PortalCard = ({ portal }) => (
  <div className="portal-card">
    <h3 className="text-2xl font-bold mb-2 text-white text-center">{portal.name}</h3>
    <p className="mb-6 text-slate-100 text-base text-center">{portal.desc}</p>
    <Button
      variant="secondary"
      className={portal.disabled ? 'coming-soon-button portal-button' : 'portal-cta portal-button'}
      disabled={portal.disabled}
      style={{
        fontSize: '1rem',
        opacity: portal.disabled ? 0.7 : 1,
        width: 180,
        minWidth: 180,
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
        padding: '12px 24px',
      }}
    >
      {portal.cta}
    </Button>
    {portal.disabled && (
      <span
        className="absolute top-4 right-4 bg-slate-900/80 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full coming-soon-badge"
        style={{ opacity: 1 }}
      >
        Coming Soon
      </span>
    )}
  </div>
)

export default PortalCard
