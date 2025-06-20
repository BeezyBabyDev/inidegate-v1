import React, { useState, useMemo } from 'react'
import DealFlowFeed from './DealFlowFeed'
import MarketTrends from './MarketTrends'
import PortfolioOverview from './PortfolioOverview'
import { dealFlow } from '../../data/dealFlowData'
import { Deal } from '../../types/deals'
import {
  CheckCircle,
  Clock,
  Search,
  Bookmark,
  Info,
} from 'lucide-react'

// INTERFACES (Should be in /types)
interface EducationalResource {
  id: string
  title: string
  category: 'Legal' | 'Tax' | 'Industry'
  format: 'Article' | 'Video' | 'Case Study' | 'Webinar'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: number
  summary: string
  contentUrl: string
  prerequisites?: string[]
}

interface LearningPath {
  id: string
  title: string
  description: string
  resources: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

interface TeamMember {
  id: string
  name: string
  avatar: string
  lastActivity: string
}

// MOCK DATA (Should be in /data)
const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    id: 'legal-101',
    title: 'Film Investment Legal Basics',
    category: 'Legal',
    format: 'Article',
    difficulty: 'Beginner',
    duration: 25,
    summary: 'An overview of the essential legal documents and structures in film financing.',
    contentUrl: '#',
  },
  {
    id: 'tax-201',
    title: 'Maximizing Film Tax Incentives',
    category: 'Tax',
    format: 'Webinar',
    difficulty: 'Intermediate',
    duration: 60,
    summary: 'A deep dive into state and federal tax credits for film production.',
    contentUrl: '#',
    prerequisites: ['legal-101'],
  },
  {
    id: 'industry-301',
    title: 'Case Study: The "Indie Hit" Model',
    category: 'Industry',
    format: 'Case Study',
    difficulty: 'Advanced',
    duration: 45,
    summary: 'Analyzing the financial success of a low-budget, high-return independent film.',
    contentUrl: '#',
    prerequisites: ['tax-201'],
  },
]

const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'lp-1',
    title: 'Film Finance Foundations',
    description: 'Master the fundamentals of film investment from legal to industry analysis.',
    resources: ['legal-101', 'tax-201', 'industry-301'],
    difficulty: 'Intermediate',
  },
]

const TEAM_MEMBERS: TeamMember[] = [
  { id: 'tm-1', name: 'Alice', avatar: 'https://i.pravatar.cc/150?u=alice', lastActivity: "Completed 'Maximizing Film Tax Incentives'" },
  { id: 'tm-2', name: 'Bob', avatar: 'https://i.pravatar.cc/150?u=bob', lastActivity: "Bookmarked 'Case Study: The \"Indie Hit\" Model'" },
]


// MAIN COMPONENT
interface DashboardProps {
  onSelectDeal: (deal: Deal) => void
}

const InvestorDashboard: React.FC<DashboardProps> = ({ onSelectDeal }) => {
  const [resources] = useState<EducationalResource[]>(EDUCATIONAL_RESOURCES)
  const [completedResources, setCompletedResources] = useState<Set<string>>(new Set(['legal-101']))
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('resources')

  const progressPercentage = useMemo(
    () => (completedResources.size / resources.length) * 100,
    [completedResources, resources]
  )

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      const filterMatch =
        activeFilters.length === 0 ||
        activeFilters.includes(resource.difficulty)
      return searchMatch && filterMatch
    })
  }, [resources, searchTerm, activeFilters])

  const handleSelectDeal = (dealId: string) => {
    const selected = dealFlow.find(d => d.id === dealId)
    if (selected) onSelectDeal(selected)
  }

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(filter)) {
        newFilters.delete(filter);
      } else {
        // This logic allows only one filter at a time from a category, can be adjusted
        newFilters.clear(); // Example: Clears other filters
        newFilters.add(filter);
      }
      return Array.from(newFilters);
    });
  };

  const toggleBookmark = (resourceId: string) => {
    setBookmarks(prev => {
      const newSet = new Set(prev)
      newSet.has(resourceId) ? newSet.delete(resourceId) : newSet.add(resourceId)
      return newSet
    })
  }

  const toggleComplete = (resourceId: string) => {
    setCompletedResources(prev => {
      const newSet = new Set(prev)
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId)
      } else {
        newSet.add(resourceId)
        // Auto-complete prerequisites if any for a better user experience
        const resource = resources.find(r => r.id === resourceId)
        resource?.prerequisites?.forEach(prereqId => newSet.add(prereqId))
      }
      return newSet
    })
  }

  const isPrereqMet = (prerequisites?: string[]) => {
    if (!prerequisites || prerequisites.length === 0) return true
    return prerequisites.every(prereqId => completedResources.has(prereqId))
  }

  const renderResourceCard = (resource: EducationalResource) => {
    const isCompleted = completedResources.has(resource.id)
    const isBookmarked = bookmarks.has(resource.id)
    const canView = isPrereqMet(resource.prerequisites)

    return (
      <div
        key={resource.id}
        className={`bg-white/5 p-6 rounded-2xl border border-white/10 transition-all duration-300 flex flex-col group ${!canView && 'opacity-50'}`}
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold text-white pr-4">{resource.title}</h4>
          <button onClick={() => toggleBookmark(resource.id)} className="text-purple-300 hover:text-white flex-shrink-0">
            <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
        <p className="text-sm text-purple-300 mb-4 flex-grow">{resource.summary}</p>
        <div className="mt-auto space-y-4">
          <div className="flex items-center text-xs space-x-4">
            <span
              className={`font-semibold px-2 py-1 rounded-full ${
                resource.difficulty === 'Beginner'
                  ? 'bg-green-500/20 text-green-300'
                  : resource.difficulty === 'Intermediate'
                  ? 'bg-yellow-500/20 text-yellow-300'
                  : 'bg-red-500/20 text-red-300'
              }`}
            >
              {resource.difficulty}
            </span>
            <div className="flex items-center gap-2 text-purple-200">
              <Clock size={14} />
              <span>{resource.duration} min</span>
            </div>
          </div>
          {isCompleted ? (
            <button
              onClick={() => toggleComplete(resource.id)}
              className="w-full font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 bg-green-500/20 text-green-300 hover:bg-green-500/30"
            >
              <CheckCircle size={16} /> Mark as Incomplete
            </button>
          ) : (
            <button
              onClick={() => canView && toggleComplete(resource.id)}
              disabled={!canView}
              className={`w-full font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                canView ? 'bg-purple-600/50 hover:bg-purple-500/50 text-white' : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
              }`}
            >
              Mark as Complete
            </button>
          )}
          {!canView && (
            <div className="text-xs text-yellow-300/80 flex items-center gap-2 mt-2">
              <Info size={16} />
              <span>Requires completion of prerequisite courses.</span>
            </div>
          )}
        </div>
      </div>
    )
  }
  
  const FilterPill = ({ filter }: { filter: string }) => {
    const isActive = activeFilters.includes(filter)
    return (
      <button
        onClick={() => toggleFilter(filter)}
        className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
          isActive
            ? 'bg-purple-400/20 border-purple-400 text-white'
            : 'bg-white/5 border-white/10 text-purple-200 hover:bg-white/10'
        }`}
      >
        {filter}
      </button>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
          <p className="text-purple-200 mb-6 flex-shrink-0">
            Swipe to explore active investment opportunities.
          </p>
          <div className="flex-grow flex flex-col justify-center">
            <DealFlowFeed onSelectDeal={handleSelectDeal} />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <PortfolioOverview />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <MarketTrends />
          </div>
        </div>
      </div>

      {/* Educational Center Section */}
      <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
          <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0">
            Level Up Your Film Investment Knowledge
          </h3>
        </div>
        
        <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-purple-200">Your Learning Progress</p>
                <p className="text-sm font-bold text-white">{Math.round(progressPercentage)}%</p>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div>
            </div>
        </div>

        <div className="flex space-x-2 border-b border-white/10 mb-6">
            <button onClick={() => setActiveTab('resources')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'resources' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>All Resources</button>
            <button onClick={() => setActiveTab('paths')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'paths' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>Learning Paths</button>
            <button onClick={() => setActiveTab('team')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'team' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>Team Activity</button>
        </div>

        {activeTab === 'resources' && (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                <FilterPill filter="Beginner" />
                <FilterPill filter="Intermediate" />
                <FilterPill filter="Advanced" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map(renderResourceCard)}
            </div>
          </>
        )}

        {activeTab === 'paths' && (
          <div className="space-y-6">
            {LEARNING_PATHS.map(path => (
               <div key={path.id} className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="text-lg font-bold text-white mb-2">{path.title}</h4>
                  <p className="text-sm text-purple-300 mb-4">{path.description}</p>
               </div>
            ))}
          </div>
        )}
        
        {activeTab === 'team' && (
           <div className="space-y-4">
              {TEAM_MEMBERS.map(member => (
                 <div key={member.id} className="flex items-center bg-white/5 p-4 rounded-xl border border-white/10">
                    <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full mr-4" />
                    <div>
                       <p className="text-white font-semibold">{member.name}</p>
                       <p className="text-sm text-purple-300">{member.lastActivity}</p>
                    </div>
                 </div>
              ))}
           </div>
        )}
      </div>
    </div>
  )
}

export default InvestorDashboard

