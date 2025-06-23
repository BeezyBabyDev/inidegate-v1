import React, { useState, useMemo } from 'react'
import DealFlowFeed from './DealFlowFeed'
import MarketTrends from './MarketTrends'
import PortfolioOverview from './PortfolioOverview'
import { Deal } from '../../types/deals'
import { allResources, learningPaths, teamActivity, Resource } from '../../data/learningData.ts'
import {
  BookOpen,
  TrendingUp,
  Briefcase,
  Film,
  Search,
  Bookmark,
  Clock,
  Mic,
  Video,
  Cpu,
  Expand,
} from 'lucide-react'
import { useDashboard } from '../../context/DashboardContext.tsx'

const LevelUpKnowledge = () => {
  const [activeTab, setActiveTab] = useState('All Resources')

  const completedCount = useMemo(() => allResources.filter(r => r.isCompleted).length, [])
  const progress = useMemo(
    () => Math.round((completedCount / allResources.length) * 100),
    [completedCount]
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'All Resources':
        return <AllResourcesTab />
      case 'Learning Paths':
        return <LearningPathsTab />
      case 'Team Activity':
        return <TeamActivityTab />
      default:
        return null
    }
  }

  return (
    <div className="bg-white/5 rounded-2xl p-6 h-full flex flex-col">
      <div className="mb-6">
        <p className="text-purple-300">Your Learning Progress</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-full bg-black/20 rounded-full h-2.5">
            <div
              className="bg-purple-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="font-bold text-white">{progress}%</span>
        </div>
      </div>

      <div className="flex border-b border-white/10 mb-6">
        {['All Resources', 'Learning Paths', 'Team Activity'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? 'border-b-2 border-purple-500 text-white' : 'text-gray-400'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-grow">{renderContent()}</div>
    </div>
  )
}

const AllResourcesTab = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilters, setLevelFilters] = useState<Array<Resource['type']>>([])
  const [formatFilter, setFormatFilter] = useState<Resource['format'] | 'All'>('All')

  const handleLevelFilter = (level: Resource['type']) => {
    setLevelFilters(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    )
  }

  const filteredResources = useMemo(() => {
    return allResources.filter(res => {
      const matchesSearch =
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLevel = levelFilters.length === 0 || levelFilters.includes(res.type)
      const matchesFormat = formatFilter === 'All' || res.format === formatFilter
      return matchesSearch && matchesLevel && matchesFormat
    })
  }, [searchTerm, levelFilters, formatFilter])

  const resourceLevels: Resource['type'][] = ['Beginner', 'Intermediate', 'Advanced']
  const resourceFormats: Resource['format'][] = ['Read', 'Listen', 'Watch', 'Immersive']
  const formatIcons = {
    Read: <BookOpen size={16} />,
    Listen: <Mic size={16} />,
    Watch: <Video size={16} />,
    Immersive: <Cpu size={16} />,
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-black/20 pl-10 pr-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center gap-2">
          {resourceLevels.map(level => (
            <button
              key={level}
              onClick={() => handleLevelFilter(level)}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${levelFilters.includes(level) ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-300'}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 mb-6 border-b border-t border-white/10 py-3">
        <button
          onClick={() => setFormatFilter('All')}
          className={`px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${formatFilter === 'All' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-300'}`}
        >
          All Formats
        </button>
        {resourceFormats.map(format => (
          <button
            key={format}
            onClick={() => setFormatFilter(format)}
            className={`px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-2 ${formatFilter === format ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-300'}`}
          >
            {formatIcons[format]} {format}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  )
}

interface ResourceCardProps {
  resource: Resource
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const levelColor = {
    Beginner: 'text-green-400 bg-green-500/10',
    Intermediate: 'text-yellow-400 bg-yellow-500/10',
    Advanced: 'text-red-400 bg-red-500/10',
  }[resource.type]

  return (
    <div className="bg-white/5 p-4 rounded-lg flex flex-col h-full border border-transparent hover:border-purple-500 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${levelColor}`}>
          {resource.type}
        </span>
        <Bookmark
          className={`cursor-pointer ${resource.isBookmarked ? 'text-purple-500 fill-current' : 'text-gray-500'}`}
          size={18}
        />
      </div>
      <h4 className="font-bold text-white mb-2 flex-grow">{resource.title}</h4>
      <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
        <span className="flex items-center">
          <Clock size={12} className="mr-1" /> {resource.duration} min
        </span>
      </div>
      <button
        className={`w-full py-2 rounded text-sm font-semibold transition-colors ${resource.isCompleted ? 'bg-gray-600' : 'bg-purple-600'}`}
      >
        {resource.isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
      </button>
    </div>
  )
}

const LearningPathsTab = () => (
  <div className="space-y-4">
    {learningPaths.map(path => (
      <div
        key={path.id}
        className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
      >
        <h4 className="font-bold text-white text-lg mb-1">{path.title}</h4>
        <p className="text-purple-300">{path.description}</p>
      </div>
    ))}
  </div>
)

const TeamActivityTab = () => (
  <div className="space-y-4">
    {teamActivity.map(activity => (
      <div key={activity.id} className="flex items-center bg-white/5 p-4 rounded-lg">
        <img
          src={activity.user.avatar}
          alt={activity.user.name}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="text-white font-semibold">{activity.user.name}</p>
          <p className="text-gray-400 text-sm">{activity.action}</p>
        </div>
      </div>
    ))}
  </div>
)

const InvestorDashboard: React.FC = () => {
  const { setExpandedSection } = useDashboard()

  const handleSelectDeal = (deal: Deal) => {
    // In a real app, this would likely navigate to a detail page
    // For now, we'll just log it to show it's working
    console.log('Selected Deal:', deal)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Deal Flow Feed */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Film className="w-6 h-6 mr-3 text-purple-400" />
                Deal Flow Feed
              </h2>
              <button
                onClick={() => setExpandedSection('deals')}
                className="text-purple-300 hover:text-white"
              >
                <Expand size={24} />
              </button>
            </div>
            <div className="h-[300px]">
              <DealFlowFeed onSelectDeal={handleSelectDeal} />
            </div>
          </div>
          {/* Investment Portfolio */}
          <div className="flex-grow flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-purple-400" />
                Investment Portfolio
              </h2>
              <button
                onClick={() => setExpandedSection('portfolio')}
                className="text-purple-300 hover:text-white"
              >
                <Expand size={24} />
              </button>
            </div>
            <div className="flex-grow">
              <PortfolioOverview />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <TrendingUp className="w-6 h-6 mr-3 text-purple-400" />
              Market Insights & Trends
            </h2>
            <button
              onClick={() => setExpandedSection('market')}
              className="text-purple-300 hover:text-white"
            >
              <Expand size={24} />
            </button>
          </div>
          <div className="h-full">
            <MarketTrends />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-purple-400" />
            Level Up Your Film Investment Knowledge
          </h2>
          <button
            onClick={() => setExpandedSection('learning')}
            className="text-purple-300 hover:text-white"
          >
            <Expand size={24} />
          </button>
        </div>
        <LevelUpKnowledge />
      </div>
    </div>
  )
}

export default InvestorDashboard
