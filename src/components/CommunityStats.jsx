import React from 'react'
import { communityStats } from '../data/communityData'

const StatCard = ({ stat }) => {
  const { Icon, label, value, change, changeType } = stat

  const changeColor = {
    increase: 'text-green-400',
    decrease: 'text-red-400',
    neutral: 'text-slate-400',
  }[changeType]

  return (
    <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700/80 flex items-center gap-4">
      <div className="bg-slate-900 p-3 rounded-full">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div>
        <p className="text-slate-400 text-sm font-medium">{label}</p>
        <p className="text-white text-2xl font-bold">{value}</p>
        <p className={`text-xs ${changeColor}`}>{change}</p>
      </div>
    </div>
  )
}

const CommunityStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {communityStats.map(stat => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  )
}

export default CommunityStats
