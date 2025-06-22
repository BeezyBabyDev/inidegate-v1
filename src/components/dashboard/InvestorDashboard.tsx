import React, { useState } from 'react'
import DealFlowFeed from './DealFlowFeed'
import MarketTrends from './MarketTrends'
import PortfolioOverview from './PortfolioOverview'
import { Deal } from '../../types/deals'
import {
  CheckCircle,
  Clock,
  Search,
  Bookmark,
  Info,
  X,
  BookOpen,
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
  },
  {
    id: 'lp-3',
    title: 'Case Studies: From Pitch to Profit',
    description: 'Analyze real-world examples of successful (and unsuccessful) film projects.',
    resources: ['industry-301']
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
  data: EducationalResource | LearningPath | TeamMember
} | null

// MAIN COMPONENT
interface DashboardProps {
  onSelectDeal: (deal: Deal) => void
}

const beginnerCourseContent = [
    {
      category: "Core Investment Basics",
      items: [
        { title: "Equity vs. Debt Investment", description: "Understanding ownership stakes versus loans." },
        { title: "Budget Categories", description: "Above-the-line vs. below-the-line costs." },
        { title: "Revenue Streams", description: "Theatrical, streaming, international sales, merchandising." },
        { title: "Risk Assessment", description: "Why film investing is high-risk, high-reward." }
      ]
    },
    {
      category: "Essential Legal Documents",
      items: [
        { title: "PPM (Private Placement Memorandum)", description: "The investment offering document." },
        { title: "Operating Agreement", description: "How the investment entity operates." },
        { title: "Subscription Agreement", description: "Formal application to invest." },
        { title: "Chain of Title", description: "Proof of legal ownership of film rights." }
      ]
    },
    {
      category: "Basic Financial Terms",
      items: [
        { title: "Recoupment", description: "Getting your investment back first." },
        { title: "Multiple", description: "How many times you multiply your investment (2x, 3x, etc.)." },
        { title: "Minimum Guarantee (MG)", description: "Upfront distributor payments." },
        { title: "Contingency", description: "Reserve funds for unexpected costs (typically 10% of budget)." }
      ]
    },
    {
      category: "Prerequisites to Advance",
      items: [
        { title: "Understand basic investment risk/reward concepts", description: "" },
        { title: "Know the difference between equity and debt financing", description: "" },
        { title: "Familiar with essential legal documents (PPM, Operating Agreement)", description: "" }
      ]
    }
  ];

const intermediateCourseContent = [
    {
        category: "Tax Incentives and Credits",
        items: [
            { title: "Section 181 Deduction", description: "Federal tax benefits for films under $15M" },
            { title: "State Tax Credits", description: "Location-specific incentives and how to monetize them" },
            { title: "Sale-Leaseback Structures", description: "Equipment financing for immediate tax benefits" },
            { title: "Tax Credit Monetization", description: "Selling credits vs. using them directly" }
        ]
    },
    {
        category: "Advanced Deal Structures",
        items: [
            { title: "Waterfall Mechanics", description: "Detailed revenue distribution order" },
            { title: "Gap Financing", description: "Bridging funding gaps with unsold territories" },
            { title: "Mezzanine Financing", description: "Hybrid debt-equity instruments" },
            { title: "Cross-Collateralization", description: "Pooling multiple films for risk management" }
        ]
    },
    {
        category: "Distribution and Sales",
        items: [
            { title: "Pre-sales Strategy", description: "Selling territorial rights before completion" },
            { title: "Negative Pickup Deals", description: "Distributor commitments to purchase completed films" },
            { title: "Revenue Corridors", description: "Analyzing different income streams and timing" },
            { title: "Collection Account Management (CAMA)", description: "Third-party revenue handling" }
        ]
    },
    {
        category: "Prerequisites to Advance",
        items: [
            { title: "Completed beginner level concepts", description: "" },
            { title: "Basic understanding of tax implications in investing", description: "" },
            { title: "Familiarity with film distribution basics", description: "" }
        ]
    }
];

const advancedCourseContent = [
    {
        category: "Complex Financial Instruments",
        items: [
            { title: "Slate Financing", description: "Multi-film portfolio strategies" },
            { title: "Completion Bond Mechanics", description: "Insurance structures and claims processes" },
            { title: "Foreign Co-Production Treaties", description: "International financing advantages" },
            { title: "Structured Products", description: "Creating custom investment vehicles" }
        ]
    },
    {
        category: "Risk Management and Due Diligence",
        items: [
            { title: "Market Analysis", description: "Genre performance, talent bankability, territory values" },
            { title: "Production Risk Assessment", description: "Evaluating teams, schedules, and contingencies" },
            { title: "Legal Risk Mitigation", description: "E&O insurance, rights clearances, union agreements" },
            { title: "Portfolio Construction", description: "Balancing risk across multiple projects" }
        ]
    },
    {
        category: "Case Study Applications",
        items: [
            { title: "\"Indie Hit\" Model Analysis", description: "Low-budget, high-return success factors" },
            { title: "Studio Partnership Deals", description: "Co-financing with major distributors" },
            { title: "International Co-Production", description: "Multi-territory financing structures" },
            { title: "Franchise Development", description: "Building long-term IP value" }
        ]
    },
    {
        category: "Advanced Market Strategies",
        items: [
            { title: "Ancillary Revenue Optimization", description: "Merchandising, licensing, sequels" },
            { title: "Platform Strategy", description: "Theatrical vs. streaming vs. hybrid releases" },
            { title: "Awards Campaign ROI", description: "Marketing spend vs. prestige value" },
            { title: "Exit Strategy Planning", description: "When and how to sell positions" }
        ]
    },
    {
        category: "Performance Metrics and Analysis",
        items: [
            { title: "IRR Calculations", description: "Time-weighted return analysis" },
            { title: "Comparable Analysis", description: "Benchmarking against similar films" },
            { title: "Sensitivity Analysis", description: "Stress-testing financial projections" },
            { title: "Portfolio Performance Tracking", description: "Long-term investment management" }
        ]
    },
    {
        category: "Prerequisites to Advance",
        items: [
            { title: "Completed intermediate level", description: "" },
            { title: "Active involvement in at least one film investment", description: "" },
            { title: "Understanding of complex financial instruments", description: "" },
            { title: "Familiarity with international film markets", description: "" }
        ]
    }
];

const InvestorDashboard: React.FC<DashboardProps> = ({ onSelectDeal }) => {
  const [activeTab, setActiveTab] = useState('All Resources')
  const [completed, setCompleted] = useState<string[]>(['legal-101'])
  const [bookmarked, setBookmarked] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [modalContent, setModalContent] = useState<ModalContent>(null)

  const handleSelectDeal = (deal: Deal) => {
    onSelectDeal(deal)
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
    setBookmarked(prev => {
      const newSet = new Set(prev)
      newSet.has(resourceId) ? newSet.delete(resourceId) : newSet.add(resourceId)
      return Array.from(newSet)
    })
  }

  const toggleComplete = (e: React.MouseEvent, resourceId: string) => {
    e.stopPropagation()
    if (!isPrereqMet(EDUCATIONAL_RESOURCES.find(r => r.id === resourceId)?.prerequisites)) {
      return
    }
    setCompleted(prev =>
      prev.includes(resourceId) ? prev.filter(id => id !== resourceId) : [...prev, resourceId]
    )
  }

  const isPrereqMet = (prerequisites?: string[]) => {
    if (!prerequisites) return true
    return prerequisites.every(prereqId => completed.includes(prereqId))
  }

  const FilterPill = ({ filter }: { filter: string }) => (
    <button
      onClick={() => toggleFilter(filter)}
      className={`px-3 py-1 text-sm font-semibold rounded-full transition-all duration-200 ${
        activeFilters.includes(filter)
          ? 'bg-purple-600 text-white'
          : 'bg-purple-500/20 text-purple-300 hover:bg-purple-500/40'
      }`}
    >
      {filter}
    </button>
  )

  const renderResourceCard = (resource: EducationalResource) => {
    const isCompleted = completed.includes(resource.id)
    const isBookmarked = bookmarked.includes(resource.id)
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
              onClick={(e) => {
                if (canView) {
                  toggleComplete(e, resource.id)
                }
              }}
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

    const getResourceTitle = (id: string) => EDUCATIONAL_RESOURCES.find(r => r.id === id)?.title || 'Unknown Resource';

    const LearningStyleButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
      <button className="flex-1 text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
        <Icon className="mx-auto mb-2" size={24} />
        {label}
      </button>
    );
    
    const renderCourseModal = (courseContent: typeof beginnerCourseContent, level: string, time: string, subtitle: string) => {
        return (
            <div className="text-white">
                 <h3 className="text-2xl font-bold mb-1">{level}</h3>
                 <p className="text-purple-300 mb-4">{time} • {subtitle}</p>

                <div className="flex gap-4 mb-6">
                    <LearningStyleButton icon={Youtube} label="Watch" />
                    <LearningStyleButton icon={Mic} label="Listen" />
                    <LearningStyleButton icon={FileText} label="Read" />
                </div>
                
                <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
                    {courseContent.map(section => (
                        <div key={section.category}>
                            <h4 className="font-semibold text-lg mb-2 text-purple-300">{section.category}</h4>
                            <ul className="space-y-2">
                                {section.items.map(item => (
                                    <li key={item.title} className="bg-white/5 p-3 rounded-lg">
                                        <p className="font-semibold">{item.title}</p>
                                        {item.description && <p className="text-sm text-purple-200">{item.description}</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    const renderContent = () => {
      switch (modalContent.type) {
        case 'resource': {
          const resource = modalContent.data as EducationalResource;
          if (resource.id === 'legal-101') return renderCourseModal(beginnerCourseContent, resource.title, `${resource.duration} min`, resource.difficulty);
          if (resource.id === 'tax-201') return renderCourseModal(intermediateCourseContent, resource.title, `${resource.duration} min`, resource.difficulty);
          if (resource.id === 'industry-301') return renderCourseModal(advancedCourseContent, resource.title, `${resource.duration} min`, resource.difficulty);
          return (
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-purple-300">{resource.content}</p>
            </div>
          );
        }
        case 'path': {
          const path = modalContent.data as LearningPath;
          return (
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{path.title}</h3>
              <p className="text-purple-300 mb-4">{path.description}</p>
              <ul className="space-y-2">
                {path.resources.map((id: string) => (
                  <li key={id} className="bg-white/5 p-4 rounded-lg flex items-center gap-3 text-white border border-transparent hover:border-purple-500 transition-colors">
                    <CheckCircle size={16} className={completed.includes(id) ? 'text-green-400' : 'text-gray-600'}/>
                    {getResourceTitle(id)}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        case 'member': {
          const member = modalContent.data as TeamMember;
          return (
            <div>
              <div className="flex items-center mb-4">
                <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-purple-300">Recent Activity</p>
                </div>
              </div>
              <ul className="space-y-2">
                {member.activityLog.map((log, index) => (
                  <li key={index} className="bg-white/5 p-3 rounded-lg text-sm">
                    <span className={`font-semibold ${log.action === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>{log.action}</span>
                    <span className="text-white mx-2_">&ldquo;{getResourceTitle(log.resourceId)}&rdquo;</span>
                    <span className="text-purple-300 text-xs float-right">{log.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        default:
          return null;
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" onClick={() => setModalContent(null)}>
        <div className="bg-gradient-to-br from-gray-900 to-purple-900/20 border border-white/10 rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col p-8 shadow-2xl shadow-purple-500/20" onClick={e => e.stopPropagation()}>
          <button onClick={() => setModalContent(null)} className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors z-10">
            <X size={24} />
          </button>
          
          <div className="flex-grow overflow-hidden relative">
            {renderContent()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {renderModal()}
      {/* Top Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 flex flex-col"><h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3><p className="text-purple-200 mb-6 flex-shrink-0">Swipe to explore active investment opportunities.</p><div className="flex-grow flex flex-col justify-center"><DealFlowFeed onSelectDeal={handleSelectDeal} /></div></div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Investment Portfolio</h3>
            <p className="text-purple-200 mb-6">A summary of your recent investment activity.</p>
            <PortfolioOverview />
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8"><MarketTrends /></div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Level Up Your Film Investment Knowledge</h3>
            
            <div className="flex justify-between items-center mb-6">
                <p className="text-sm font-medium text-purple-200">Your Learning Progress</p>
                <div className="w-full max-w-xs bg-white/10 rounded-full h-2.5 mx-4"><div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2.5 rounded-full" style={{ width: `${(completed.length / EDUCATIONAL_RESOURCES.length) * 100}%` }}></div></div>
                <p className="text-sm font-bold text-white">{Math.round((completed.length / EDUCATIONAL_RESOURCES.length) * 100)}%</p>
            </div>

            <div className="flex space-x-2 border-b border-white/10 mb-6">
                <button onClick={() => setActiveTab('All Resources')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'All Resources' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>All Resources</button>
                <button onClick={() => setActiveTab('Learning Paths')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'Learning Paths' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>Learning Paths</button>
                <button onClick={() => setActiveTab('team')} className={`px-4 py-2 text-sm font-medium transition-colors ${activeTab === 'team' ? 'text-white border-b-2 border-purple-500' : 'text-purple-300 hover:text-white'}`}>Team Activity</button>
            </div>

            {activeTab === 'All Resources' && (
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
                    {EDUCATIONAL_RESOURCES.filter(resource => {
                      const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase())
                      const filterMatch =
                        activeFilters.length === 0 ||
                        activeFilters.includes(resource.difficulty)
                      return searchMatch && filterMatch
                    }).map(renderResourceCard)}
                </div>
              </>
            )}

            {activeTab === 'Learning Paths' && (
              <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2">
                {LEARNING_PATHS.map(path => (
                  <div
                    key={path.id}
                    onClick={() => setModalContent({ type: 'path', data: path })}
                    className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500 cursor-pointer transition-all"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{path.title}</h4>
                    <p className="text-sm text-purple-300 mb-4">{path.description}</p>
                    <div className="flex items-center text-xs text-purple-300">
                      <BookOpen size={14} className="mr-2" />
                      <span>{path.resources.length} Resources</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'team' && <div className="space-y-4">{TEAM_MEMBERS.map(member => (<div key={member.id} onClick={() => setModalContent({ type: 'member', data: member })} className="flex items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500 cursor-pointer transition-all"><img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full mr-4" /><div className="text-white font-semibold">{member.name}<p className="text-sm text-purple-300 font-normal">{member.activityLog[0].action}: {EDUCATIONAL_RESOURCES.find(r => r.id === member.activityLog[0].resourceId)?.title}</p></div></div>))}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard