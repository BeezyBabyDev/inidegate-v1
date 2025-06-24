import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const DistributorsPlatform = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-500 to-yellow-700 text-white">
      <h2 className="text-4xl font-bold mb-4">Distributors Platform</h2>
      <p className="text-lg mb-8">
        Distribution channels and reach optimization.
        <br />
        (Coming Soon)
      </p>
      <Button
        className="bg-white text-yellow-800 hover:bg-yellow-200"
        onClick={() => navigate('/')}
      >
        Back to Portals
      </Button>
    </div>
  )
}

export default DistributorsPlatform
