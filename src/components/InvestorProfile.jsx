import { useState } from 'react'
import Card from './Card'
import Button from './Button'

const InvestorProfile = ({ profileData: initialProfileData }) => {
  console.log('InvestorProfile rendering with data:', initialProfileData);
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-purple-600 mb-4">Jourdain Bell - Investor Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-700">✅ InvestorProfile component is now working!</p>
        <p className="text-sm text-gray-500 mt-2">Component successfully loaded and rendering.</p>
      </div>
    </div>
  )
}

export default InvestorProfile
