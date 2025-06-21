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
  X,
  BookOpen,
  Users,
  Award,
  Youtube,
  Mic,
  FileText,
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
  content: string
  prerequisites?: string[]
}

interface LearningPath {
  id: string
  title: string
  description: string
  resources: string[]
}

interface TeamMemberActivity {
  date: string
  action: string
  resourceId: string
}

interface TeamMember {
  id: string
  name: string
  avatar: string
  activityLog: TeamMemberActivity[]
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
    content: 'Detailed content on legal basics: PPMs, operating agreements, and subscription agreements...'
  },
  {
    id: 'tax-201',
    title: 'Maximizing Film Tax Incentives',
    category: 'Tax',
    format: 'Webinar',
    difficulty: 'Intermediate',
    duration: 60,
    summary: 'A deep dive into state and federal tax credits for film production.',
    content: 'Comprehensive guide to Section 181, state-specific tax credits, and how to apply them.',
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
    content: 'A step-by-step breakdown of the budget, marketing, and distribution strategy of a successful indie film.',
    prerequisites: ['tax-201'],
  },
]

const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'lp-1',
    title: 'Film Finance Foundations',
    description: 'Master the fundamentals of film investment, from legal to industry analysis.',
    resources: ['legal-101', 'tax-201']
  },
  {
    id: 'lp-2',
    title: 'Advanced Tax Strategies',
    description: 'Explore sophisticated tax incentives and investment structures.',
    resources: ['tax-201', 'industry-301']
  }
]

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Alice',
    avatar: 'https://i.pravatar.cc/150?u=alice',
    activityLog: [
      { date: '2024-07-21', action: 'Completed', resourceId: 'tax-201' },
      { date: '2024-07-20', action: 'Bookmarked', resourceId: 'industry-301' },
      { date: '2024-07-19', action: 'Completed', resourceId: 'legal-101' },
    ]
  },
  {
    id: 'tm-2',
    name: 'Bob',
    avatar: 'https://i.pravatar.cc/150?u=bob',
    activityLog: [
      { date: '2024-07-22', action: 'Bookmarked', resourceId: 'industry-301' },
      { date: '2024-07-18', action: 'Started', resourceId: 'legal-101' },
    ]
  },
]

type ModalContent = {
  type: 'resource' | 'path' | 'member'
  data: any
} | null

// MAIN COMPONENT
interface DashboardProps {
  onSelectDeal: (deal: Deal) => void
}

const LEGAL_BASICS_CONTENT = {
    read: {
      ppm: "A Private Placement Memorandum (PPM) is a key legal document presented to prospective investors. It discloses all essential information about the investment opportunity, the company, the management team, and the potential risks involved. Think of it as the business plan and legal disclosure rolled into one.",
      operatingAgreement: "The Operating Agreement outlines the governance and ownership structure of the Limited Liability Company (LLC) formed for the film. It details profit distribution (the 'waterfall'), voting rights, management roles, and procedures for handling disputes or the sale of the company.",
      subscriptionAgreement: "This is the investor's formal application to join the investment. By signing it, the investor agrees to the terms laid out in the PPM and Operating Agreement and confirms they meet the necessary qualifications (e.g., as an accredited investor)."
    },
    watch: {
      ppm: "https://www.youtube.com/embed/example_ppm",
      operatingAgreement: "https://www.youtube.com/embed/example_oa",
      subscriptionAgreement: "https://www.youtube.com/embed/example_sa"
    },
    listen: {
      ppm: "Podcast snippet explaining the critical components of a PPM for film investors.",
      operatingAgreement: "Audio walkthrough of a typical film LLC's operating agreement, highlighting key clauses.",
      subscriptionAgreement: "Expert discussion on what to look for before signing a subscription agreement."
    }
  };

const InvestorDashboard: React.FC<DashboardProps> = ({ onSelectDeal }) => {
  const [completedResources, setCompletedResources] = useState<Set<string>>(new Set(['legal-101']))
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState('resources')
  const [modalContent, setModalContent] = useState<ModalContent>(null)
  const [learningFormat, setLearningFormat] = useState<'read' | 'watch' | 'listen'>('read')
  const [legalTopic, setLegalTopic] = useState<'ppm' | 'operatingAgreement' | 'subscriptionAgreement'>('ppm')

  const progressPercentage = useMemo(
    () => (completedResources.size / EDUCATIONAL_RESOURCES.length) * 100,
    [completedResources]
  )

  const filteredResources = useMemo(() => {
    return EDUCATIONAL_RESOURCES.filter(resource => {
      const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase())
      const filterMatch =
        activeFilters.length === 0 ||
        activeFilters.includes(resource.difficulty)
      return searchMatch && filterMatch
    })
  }, [searchTerm, activeFilters])

  const handleSelectDeal = (deal: Deal) => {
    const selected = dealFlow.find(d => d.id === deal.id)
    if (selected) onSelectDeal(selected)
  }

  const toggleFilter = (filter: string) => {
    setActiveFilters(currentFilters => {
      if (currentFilters.includes(filter)) {
        return []
      }
      return [filter]
    })
  }

  const toggleBookmark = (e: React.MouseEvent, resourceId: string) => {
    e.stopPropagation()
    setBookmarks(prev => {
      const newSet = new Set(prev)
      newSet.has(resourceId) ? newSet.delete(resourceId) : newSet.add(resourceId)
      return newSet
    })
  }

  const toggleComplete = (e: React.MouseEvent, resourceId: string) => {
    e.stopPropagation()
    setCompletedResources(prev => {
      const newSet = new Set(prev)
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId)
      } else {
        newSet.add(resourceId)
        const resource = EDUCATIONAL_RESOURCES.find(r => r.id === resourceId)
        resource?.prerequisites?.forEach(prereqId => newSet.add(prereqId))
      }
      return newSet
    })
  }

  const isPrereqMet = (prerequisites?: string[]) => {
    if (!prerequisites) return true
    return prerequisites.every(prereqId => completedResources.has(prereqId))
  }

  const FilterPill = ({ filter }: { filter: string }) => (
    <button
      onClick={(e) => toggleFilter(filter)}
      className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all border ${
        activeFilters.includes(filter)
          ? 'bg-white/10 border-purple-400 text-white'
          : 'bg-white/5 border-transparent text-purple-200 hover:border-white/20'
      }`}
    >
      {filter}
    </button>
  )

  const renderResourceCard = (resource: EducationalResource) => {
    const isCompleted = completedResources.has(resource.id)
    const isBookmarked = bookmarks.has(resource.id)
    const canView = isPrereqMet(resource.prerequisites)

    return (
      <div
        key={resource.id}
        onClick={() => setModalContent({ type: 'resource', data: resource })}
        className={`bg-white/5 p-6 rounded-2xl border border-transparent hover:border-purple-500 cursor-pointer transition-all duration-300 flex flex-col group ${!canView && 'opacity-50 !cursor-not-allowed'}`}
      >
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-bold text-white pr-4">{resource.title}</h4>
          <button onClick={(e) => toggleBookmark(e, resource.id)} className="text-purple-300 hover:text-white flex-shrink-0 z-10">
            <Bookmark size={20} fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>
        <p className="text-sm text-purple-300 mb-4 flex-grow">{resource.summary}</p>
        <div className="mt-auto space-y-4">
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
            <div className="flex items-center gap-2 text-purple-200">
              <Clock size={14} />
              <span>{resource.duration} min</span>
            </div>
          </div>
          {isCompleted ? (
            <button
              onClick={(e) => toggleComplete(e, resource.id)}
              className="w-full font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 bg-green-500/20 text-green-300 hover:bg-green-500/30 z-10"
            >
              <CheckCircle size={16} /> Mark as Incomplete
            </button>
          ) : (
            <button
              onClick={(e) => canView && toggleComplete(e, resource.id)}
              disabled={!canView}
              className={`w-full font-semibold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 z-10 ${
                canView ? 'bg-purple-600/50 hover:bg-purple-500/50 text-white' : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
              }`}
            >
              Mark as Complete
            </button>
          )}
          {!canView && <div className="text-xs text-yellow-300/80 flex items-center gap-2 pt-1"><Info size={16} /><span>Requires completion of prerequisite courses.</span></div>}
        </div>
      </div>
    )
  }

  const renderModal = () => {
    if (!modalContent) return null

    const getResourceTitle = (id: string) => EDUCATIONAL_RESOURCES.find(r => r.id === id)?.title || 'Unknown Resource'

    const renderLegalBasicsModal = () => {
        const content = LEGAL_BASICS_CONTENT[learningFormat][legalTopic];
        
        const FormatButton = ({ type, icon: Icon, label }: { type: 'read' | 'watch' | 'listen', icon: React.ElementType, label: string }) => (
          <button
            onClick={() => setLearningFormat(type)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-semibold ${learningFormat === type ? 'bg-purple-500/30 text-white' : 'bg-white/5 text-purple-200 hover:bg-white/10'}`}
          >
            <Icon size={16} />
            {label}
          </button>
        );
      
        const TopicButton = ({ topic, label }: { topic: 'ppm' | 'operatingAgreement' | 'subscriptionAgreement', label: string }) => (
            <button 
                onClick={() => setLegalTopic(topic)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${legalTopic === topic ? 'bg-white/10 text-white' : 'bg-transparent text-purple-300 hover:bg-white/5'}`}
            >
                {label}
            </button>
        );

        return (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-purple-400" size={24}/>
              <h3 className="text-2xl font-bold text-white">{modalContent.data.title}</h3>
            </div>
            
            <div className="flex gap-2 mb-4">
                <FormatButton type="read" icon={FileText} label="Read" />
                <FormatButton type="watch" icon={Youtube} label="Watch" />
                <FormatButton type="listen" icon={Mic} label="Listen" />
            </div>

            <div className="bg-black/20 p-4 rounded-lg min-h-[150px]">
                {learningFormat === 'read' && (
                    <>
                        <div className="flex gap-2 mb-3">
                            <TopicButton topic="ppm" label="PPM" />
                            <TopicButton topic="operatingAgreement" label="Operating Agreement" />
                            <TopicButton topic="subscriptionAgreement" label="Subscription Agreement" />
                        </div>
                        <p className="text-purple-200 text-sm">{content}</p>
                    </>
                )}
                 {learningFormat === 'watch' && (
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src={content}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
                {learningFormat === 'listen' && (
                    <div className="text-purple-200 text-sm p-4 bg-white/5 rounded-lg">
                        <p>{content}</p>
                    </div>
                )}
            </div>
          </div>
        );
      };

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={() => setModalContent(null)}>
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 shadow-2xl shadow-purple-500/20" onClick={e => e.stopPropagation()}>
          <button onClick={() => setModalContent(null)} className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors">
            <X size={24} />
          </button>
          
          {modalContent.type === 'resource' && modalContent.data.id === 'legal-101' ? (
            renderLegalBasicsModal()
          ) : modalContent.type === 'resource' ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-purple-400" size={24}/>
                <h3 className="text-2xl font-bold text-white">{modalContent.data.title}</h3>
              </div>
              <p className="text-purple-200">{modalContent.data.content}</p>
            </div>
          ) : modalContent.type === 'path' ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-400" size={24}/>
                <h3 className="text-2xl font-bold text-white">{modalContent.data.title}</h3>
              </div>
              <p className="text-purple-200 mb-6">{modalContent.data.description}</p>
              <ul className="space-y-3">
                {modalContent.data.resources.map((id: string) => (
                  <li key={id} className="bg-white/5 p-4 rounded-lg flex items-center gap-3 text-white border border-transparent hover:border-purple-500 transition-colors">
                    <CheckCircle size={16} className={completedResources.has(id) ? 'text-green-400' : 'text-gray-600'}/>
                    {getResourceTitle(id)}
                  </li>
                ))}
              </ul>
            </div>
          ) : modalContent.type === 'member' ? (
            <div>
                <div className="flex items-center gap-4 mb-6">
                    <img src={modalContent.data.avatar} alt={modalContent.data.name} className="w-16 h-16 rounded-full border-2 border-purple-400" />
                    <div>
                        <h3 className="text-2xl font-bold text-white">{modalContent.data.name}'s Activity</h3>
                        <p className="text-purple-300">Recent logs</p>
                    </div>
                </div>
              <ul className="space-y-3">
                {modalContent.data.activityLog.map((activity: TeamMemberActivity, index: number) => (
                  <li key={index} className="bg-white/5 p-4 rounded-lg flex justify-between items-center text-white">
                    <div>
                        <span className="font-semibold">{activity.action}:</span> {getResourceTitle(activity.resourceId)}
                    </div>
                    <span className="text-sm text-purple-300">{activity.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null }
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {renderModal()}
      {/* Top Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col"><h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3><p className="text-purple-200 mb-6 flex-shrink-0">Swipe to explore active investment opportunities.</p><div className="flex-grow flex flex-col justify-center"><DealFlowFeed onSelectDeal={handleSelectDeal} /></div></div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Investment Portfolio</h3>
            <p className="text-purple-200 mb-6">A summary of your recent investment activity.</p>
            <PortfolioOverview />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8"><MarketTrends /></div>
        </div>
      </div>

      {/* Educational Center Section */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
        <h3 className="text-2xl font-semibold text-white mb-2">Level Up Your Film Investment Knowledge</h3>
        
        <div className="flex justify-between items-center mb-6">
            <p className="text-sm font-medium text-purple-200">Your Learning Progress</p>
            <div className="w-full max-w-xs bg-white/10 rounded-full h-2.5 mx-4"><div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: `${progressPercentage}%` }}></div></div>
            <p className="text-sm font-bold text-white">{Math.round(progressPercentage)}%</p>
        </div>

        <div className="flex space-x-2 border-b border-white/10 mb-6">
            <button onClick={() => setActiveTab('resources')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'resources' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>All Resources</button>
            <button onClick={() => setActiveTab('paths')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'paths' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>Learning Paths</button>
            <button onClick={() => setActiveTab('team')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'team' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>Team Activity</button>
        </div>

        {activeTab === 'resources' && (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
              <div className="relative flex-grow w-full md:w-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300" size={20} />
                <input type="text" placeholder="Search resources..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-white placeholder:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
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

        {activeTab === 'paths' && <div className="space-y-6">{LEARNING_PATHS.map(path => (<div key={path.id} onClick={() => setModalContent({ type: 'path', data: path })} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500 cursor-pointer transition-all"><h4 className="text-lg font-bold text-white mb-2">{path.title}</h4><p className="text-sm text-purple-300 mb-4">{path.description}</p></div>))}</div>}
        
        {activeTab === 'team' && <div className="space-y-4">{TEAM_MEMBERS.map(member => (<div key={member.id} onClick={() => setModalContent({ type: 'member', data: member })} className="flex items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500 cursor-pointer transition-all"><img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full mr-4" /><div className="text-white font-semibold">{member.name}<p className="text-sm text-purple-300 font-normal">{member.activityLog[0].action}: {EDUCATIONAL_RESOURCES.find(r => r.id === member.activityLog[0].resourceId)?.title}</p></div></div>))}</div>}
      </div>
    </div>
  )
}

export default InvestorDashboard