import React, { useState } from 'react'
import DealFlowFeed from './DealFlowFeed'
import MarketTrends from './MarketTrends'
import PortfolioOverview from './PortfolioOverview'
import { Deal } from '../../types/deals'
import {
  CheckCircle,
  Clock,
  Bookmark,
  Info,
  X,
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
  const [completed] = useState<string[]>(['legal-101'])
  const [modalContent, setModalContent] = useState<ModalContent>(null)

  const handleSelectDeal = (deal: Deal) => {
    onSelectDeal(deal)
  }

  const renderModal = () => {
    if (!modalContent) return null

    const getResourceTitle = (id: string) => EDUCATIONAL_RESOURCES.find(r => r.id === id)?.title || 'Unknown Resource'

    const LearningStyleButton = ({ icon: Icon, label }: { icon: React.ElementType, label: string }) => (
      <button className="flex-1 text-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
        <Icon className="mx-auto mb-2" size={24} />
        {label}
      </button>
    )
    
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
    <div>
      {renderModal()}
      {/* Final Dashboard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Main Content: Vertically Stacked Sections */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* 1. Deal Flow Feed */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
            <p className="text-purple-200 mb-6">
              Swipe to explore active investment opportunities.
            </p>
            <DealFlowFeed onSelectDeal={handleSelectDeal} />
          </div>

          {/* 2. Investment Portfolio */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-white mb-3">Investment Portfolio</h3>
            <p className="text-purple-200 mb-6">A summary of your recent investment activity.</p>
            <PortfolioOverview />
          </div>
        </div>

        {/* Right Sidebar: Market Insights */}
        <div className="lg:col-span-1 h-full">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 sticky top-8 h-full">
            <MarketTrends />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorDashboard