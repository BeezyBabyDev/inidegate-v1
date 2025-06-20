import React, { useState, useMemo } from 'react'
import DealFlowFeed from './DealFlowFeed'
import MarketTrends from './MarketTrends'
import PortfolioOverview from './PortfolioOverview'
import { dealFlow } from '../../data/dealFlowData'
import { Deal } from '../../types/deals'
import {
  BookOpen,
  TrendingUp,
  Filter,
  Download,
  CheckCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  Search,
  Bookmark,
  Users,
  Share2,
  FileText,
  File,
  Presentation,
  BarChart,
  Star,
  Info,
} from 'lucide-react'

// Interfaces
interface InvestorProfile {
  id: string
  name: string
  team?: string
  role?: string
  investmentGoals?: string[]
}

interface EducationalResource {
  id: string
  title: string
  category: 'Legal' | 'Tax' | 'Industry'
  format: 'Article' | 'Video' | 'Case Study' | 'Webinar'
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  duration: number // in minutes
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
}

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

interface DashboardProps {
  onSelectDeal: (deal: Deal) => void
}

const InvestorDashboard: React.FC<DashboardProps> = ({ onSelectDeal }) => {
  const [resources, setResources] = useState<EducationalResource[]>(EDUCATIONAL_RESOURCES)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const handleSelectDeal = (dealId: string) => {
    const selected = dealFlow.find(d => d.id === dealId)
    if (selected) {
      onSelectDeal(selected)
    }
  }

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      const filterMatch =
        activeFilters.length === 0 ||
        activeFilters.includes(resource.category) ||
        activeFilters.includes(resource.format) ||
        activeFilters.includes(resource.difficulty)
      return searchMatch && filterMatch
    })
  }, [resources, searchTerm, activeFilters])

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
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0">
            Level Up Your Film Investment Knowledge
          </h3>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300"
              size={20}
            />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              <h4 className="text-lg font-bold text-white mb-2">{resource.title}</h4>
              <p className="text-sm text-purple-300 mb-4">{resource.summary}</p>
              <div className="mt-auto space-y-3">
                <div className="flex justify-between items-center text-xs">
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
                  <span className="text-purple-200">{resource.format}</span>
                </div>
                <button className="w-full bg-purple-600/50 hover:bg-purple-500/50 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard
