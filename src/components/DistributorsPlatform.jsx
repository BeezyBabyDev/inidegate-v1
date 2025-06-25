import React from 'react'
import { useNavigate } from 'react-router-dom'

const DistributorsPlatform = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 text-white">
      <h1 className="text-3xl font-bold mb-6">Distributors Portal - Coming Soon</h1>
      <button
        className="portal-enter-btn filmmakers-btn"
        style={{ marginTop: 24 }}
        onClick={() => navigate('/')}
      >
        Back to Main Page
      </button>
    </div>
  )
}

export default DistributorsPlatform
