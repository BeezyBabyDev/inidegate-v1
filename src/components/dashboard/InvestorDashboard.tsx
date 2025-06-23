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
  CheckCircle,
  X,
} from 'lucide-react'
import { useDashboard } from '../../context/DashboardContext.tsx'
import { recentInvestments } from '../../data/portfolioData'

const LevelUpKnowledge = () => {
  const [activeTab, setActiveTab] = useState('All Resources')
  const [resources, setResources] = useState(allResources)

  const completedCount = useMemo(() => resources.filter(r => r.isCompleted).length, [resources])
  const progress = useMemo(
    () => Math.round((completedCount / resources.length) * 100),
    [completedCount, resources.length]
  )

  const handleToggleComplete = (id: string) => {
    setResources(prev => prev.map(r => (r.id === id ? { ...r, isCompleted: !r.isCompleted } : r)))
  }

  const handleToggleBookmark = (id: string) => {
    setResources(prev => prev.map(r => (r.id === id ? { ...r, isBookmarked: !r.isBookmarked } : r)))
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'All Resources':
        return (
          <AllResourcesTab
            resources={resources}
            onToggleComplete={handleToggleComplete}
            onToggleBookmark={handleToggleBookmark}
          />
        )
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

interface AllResourcesTabProps {
  resources: Resource[]
  onToggleComplete: (id: string) => void
  onToggleBookmark: (id: string) => void
}

const AllResourcesTab: React.FC<AllResourcesTabProps> = ({
  resources,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [levelFilters, setLevelFilters] = useState<Array<Resource['type']>>([])
  const [formatFilter, setFormatFilter] = useState<Resource['format'] | 'All'>('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleLevelFilter = (level: Resource['type']) => {
    setLevelFilters(prev =>
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    )
  }

  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      const matchesSearch =
        res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLevel = levelFilters.length === 0 || levelFilters.includes(res.type)
      const matchesFormat = formatFilter === 'All' || res.format === formatFilter
      return matchesSearch && matchesLevel && matchesFormat
    })
  }, [searchTerm, levelFilters, formatFilter, resources])

  const resourceLevels: Resource['type'][] = ['Beginner', 'Intermediate', 'Advanced']
  const resourceFormats: Resource['format'][] = ['Read', 'Listen', 'Watch', 'Immersive']
  const formatIcons = {
    Read: <BookOpen size={16} />,
    Listen: <Mic size={16} />,
    Watch: <Video size={16} />,
    Immersive: <Cpu size={16} />,
  }

  const expandedResource = expandedId ? resources.find(r => r.id === expandedId) : null

  return (
    <div className="relative">
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
          <ResourceCard
            key={resource.id}
            resource={resource}
            onToggleComplete={onToggleComplete}
            onToggleBookmark={onToggleBookmark}
            onExpand={() => setExpandedId(resource.id)}
          />
        ))}
      </div>

      {expandedResource && (
        <ResourceDetailView
          resource={expandedResource}
          allResources={resources}
          onExpand={setExpandedId}
          onClose={() => setExpandedId(null)}
        />
      )}
    </div>
  )
}

interface ResourceCardProps {
  resource: Resource
  onToggleComplete: (id: string) => void
  onToggleBookmark: (id: string) => void
  onExpand: () => void
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  resource,
  onToggleComplete,
  onToggleBookmark,
  onExpand,
}) => {
  const levelColor = {
    Beginner: 'text-green-400 bg-green-500/10',
    Intermediate: 'text-yellow-400 bg-yellow-500/10',
    Advanced: 'text-red-400 bg-red-500/10',
  }[resource.type]

  return (
    <div
      className="bg-black/20 p-4 rounded-lg flex flex-col h-full border border-transparent hover:border-purple-500 transition-all cursor-pointer group"
      onClick={onExpand}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${levelColor}`}>
          {resource.type}
        </span>
        <div className="flex items-center gap-2">
          {resource.isCompleted && <CheckCircle size={18} className="text-green-500" />}
          <Bookmark
            onClick={e => {
              e.stopPropagation()
              onToggleBookmark(resource.id)
            }}
            className={`cursor-pointer ${resource.isBookmarked ? 'text-purple-500 fill-current' : 'text-gray-500'}`}
            size={18}
          />
        </div>
      </div>
      <h4 className="font-bold text-white mb-2 flex-grow">{resource.title}</h4>
      <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
        <span className="flex items-center">
          <Clock size={12} className="mr-1" /> {resource.duration} min
        </span>
      </div>
      <button
        onClick={e => {
          e.stopPropagation()
          onToggleComplete(resource.id)
        }}
        className={`w-full py-2 rounded text-sm font-semibold transition-colors ${resource.isCompleted ? 'bg-green-600/50' : 'bg-purple-600 hover:bg-purple-700'}`}
      >
        {resource.isCompleted ? 'Completed' : 'Mark as Complete'}
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

interface ResourceDetailViewProps {
  resource: Resource
  allResources: Resource[]
  onExpand: (id: string) => void
  onClose: () => void
}

const ResourceDetailView: React.FC<ResourceDetailViewProps> = ({
  resource,
  allResources,
  onExpand,
  onClose,
}) => {
  const related = resource.relatedResources
    .map(id => allResources.find(r => r.id === id))
    .filter(Boolean) as Resource[]

  const FormatDisplay = () => {
    switch (resource.format) {
      case 'Watch':
        return (
          <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
            <h3 className="text-2xl text-white">Video Player</h3>
          </div>
        )
      case 'Listen':
        return (
          <div className="bg-black rounded-lg p-8 flex items-center justify-center">
            <h3 className="text-2xl text-white">Audio Player</h3>
          </div>
        )
      case 'Read':
        return (
          <div className="bg-black rounded-lg p-8">
            <p className="text-white">Text-based content goes here...</p>
          </div>
        )
      default:
        return (
          <div className="bg-black rounded-lg p-8 flex items-center justify-center">
            <h3 className="text-2xl text-white">Immersive Simulation</h3>
          </div>
        )
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{resource.title}</h2>
            <p className="text-purple-300">{resource.description}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={28} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FormatDisplay />
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Course Content</h4>
            <ul className="space-y-2 text-sm">
              {resource.contentPoints.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-8 pt-6 border-t border-white/10">
            <h4 className="font-semibold text-white mb-4">Related Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onExpand(rel.id)}
                  className="bg-black/20 p-4 rounded-lg hover:bg-black/40 cursor-pointer"
                >
                  <h5 className="font-bold text-white mb-1">{rel.title}</h5>
                  <p className="text-xs text-purple-300">
                    {rel.type} &bull; {rel.duration} min
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const ExpandedPortfolioView = ({ onClose }: { onClose: () => void }) => {
  // In a real app, you'd fetch this data based on a selected investment
  const investment = recentInvestments[0]

  return (
    <div className="bg-white/10 rounded-2xl w-full max-h-[90vh] p-8 flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {investment.projectName} - Detailed View
          </h2>
          <p className="text-purple-300">Comprehensive performance and financial analysis.</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X size={28} />
        </button>
      </div>
      <div className="overflow-y-auto flex-grow">
        {/* Financial Overview, Transaction History, Cash Flow to be added here */}
      </div>
    </div>
  )
}

const ExpandedViewManager = () => {
  const { expandedSection, setExpandedSection } = useDashboard()

  if (!expandedSection) return null

  const onClose = () => setExpandedSection(null)

  let content = null
  switch (expandedSection) {
    case 'portfolio':
      content = <ExpandedPortfolioView onClose={onClose} />
      break
    case 'deals':
      // Placeholder for deals expansion
      content = <div className="text-white">Deals Expanded View</div>
      break
    case 'market':
      // Placeholder for market expansion
      content = <div className="text-white">Market Expanded View</div>
      break
    default:
      return null
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="w-full max-w-6xl" onClick={e => e.stopPropagation()}>
        {content}
      </div>
    </div>
  )
}

const InvestorDashboard: React.FC = () => {
  const { setExpandedSection } = useDashboard()

  const handleSelectDeal = (deal: Deal) => {
    // In a real app, this would likely navigate to a detail page
    // For now, we'll just log it to show it's working
    console.log('Selected Deal:', deal)
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      <ExpandedViewManager />
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
