import React from 'react'
import { useNavigate } from 'react-router-dom'

const DistributorsPlatform = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
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
