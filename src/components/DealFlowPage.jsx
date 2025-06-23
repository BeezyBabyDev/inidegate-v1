import React from 'react'
import { Search as SearchIcon, Filter, Settings, Eye } from 'lucide-react'
import { dealFlowProjects } from '../data/dealFlowDashboardData.js'

const ProjectCard = ({ project }) => {
  const { title, genre, director, budget, seeking, equity, estROI, status, statusColor } = project

  const formatCurrency = value =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const STATUS_COLORS = {
    red: 'bg-red-500/20 text-red-300 border-red-500/30',
    blue: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    orange: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  }

  return (
    <div className="bg-slate-800/60 rounded-lg p-4 flex flex-col border border-slate-700/80 hover:border-purple-500/60 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-white">{title}</h3>
        <span
          className={`px-2 py-1 text-xs font-bold rounded-full border ${STATUS_COLORS[statusColor]}`}
        >
          {status}
        </span>
      </div>
      <p className="text-sm text-slate-400 mb-1">{genre}</p>
      <p className="text-sm text-slate-400 mb-4">Director: {director}</p>

      <div className="space-y-2 text-sm mt-auto mb-4">
        <div className="flex justify-between">
          <span className="text-slate-400">Budget:</span>{' '}
          <span className="font-semibold text-white">{formatCurrency(budget)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Seeking:</span>{' '}
          <span className="font-bold text-purple-400">{formatCurrency(seeking)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Equity:</span>{' '}
          <span className="font-semibold text-white">{equity}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Est. ROI:</span>{' '}
          <span className="font-semibold text-white">{estROI}%</span>
        </div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 bg-purple-600/80 text-white font-semibold py-2 rounded-lg hover:bg-purple-600 transition-colors">
        <Eye size={16} />
        View Project Details
      </button>
    </div>
  )
}

const DealFlowPage = () => {
  return (
    <div className="max-w-full mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Deal Flow</h1>
        <p className="text-slate-400 mt-2">
          Discover and invest in the next generation of film projects
        </p>
      </header>
      <div className="flex gap-4 mb-6">
        <div className="relative flex-grow">
          <SearchIcon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search projects, people, and more..."
            className="w-full bg-slate-800/60 border border-slate-700 rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button className="flex items-center gap-2 bg-slate-800/60 border border-slate-700 text-white font-semibold px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <Filter size={16} />
          Advanced Filters
        </button>
        <button className="flex items-center gap-2 bg-purple-600/80 text-white font-semibold px-4 py-3 rounded-lg hover:bg-purple-600 transition-colors">
          <Settings size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {dealFlowProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default DealFlowPage
