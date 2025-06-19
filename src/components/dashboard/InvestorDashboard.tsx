import React, { useState, useEffect } from 'react'
import DealFlowFeed from './DealFlowFeed'
import PortfolioOverview from './PortfolioOverview'
import QuickInsights from './QuickInsights'
import MarketTrends from './MarketTrends'

interface InvestorProfile {
  id: string
  name: string
  team?: string
  role?: string
  investmentGoals?: string[]
}

interface TeamMember {
  id: string
  name: string
  role: string
  completedResources: string[]
  activePathId?: string
}

interface Comment {
  id: string
  resourceId: string
  authorId: string
  authorName: string
  content: string
  createdAt: Date
  replies: Comment[]
  likes: string[]
  isShared?: boolean
}

interface CustomPath {
  id: string
  name: string
  description: string
  creatorId: string
  creatorName: string
  resourceIds: string[]
  isPublic: boolean
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

interface DashboardProps {
  investor: InvestorProfile
}

interface EducationalResource {
  id: string
  title: string
  description: string
  downloadUrl?: string
  completed: boolean
  category: 'legal' | 'tax' | 'industry'
  estimatedReadTime: number
  lastViewed?: Date
  prerequisites?: string[]
  detailedContent?: string
  bookmarked?: boolean
  relatedResourceIds?: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  order: number
  collaborators?: string[]
  exportFormats?: ('pdf' | 'doc' | 'presentation')[]
}

interface LearningPath {
  id: string
  name: string
  description: string
  resourceIds: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'basics',
    name: 'Film Investment Fundamentals',
    description: 'Essential knowledge for new film investors',
    resourceIds: ['inv-agreements', 'rights-ownership', 'tax-incentives'],
    difficulty: 'beginner'
  },
  {
    id: 'advanced-legal',
    name: 'Advanced Legal Framework',
    description: 'Deep dive into legal aspects of film investment',
    resourceIds: ['distribution', 'sec-guidelines', 'intl-coproduction'],
    difficulty: 'advanced'
  },
  {
    id: 'market-analysis',
    name: 'Market Analysis & ROI',
    description: 'Understanding market trends and return on investment',
    resourceIds: ['market-analysis', 'roi-studies', 'industry-trends'],
    difficulty: 'intermediate'
  }
]

const EDUCATIONAL_RESOURCES: EducationalResource[] = [
  {
    id: 'inv-agreements',
    title: 'Investment Agreements',
    description: 'Comprehensive guide to standard film investment agreements and terms.',
    downloadUrl: '/resources/investment-agreements-guide.pdf',
    completed: false,
    category: 'legal',
    estimatedReadTime: 15,
    difficulty: 'beginner',
    order: 1
  },
  {
    id: 'rights-ownership',
    title: 'Rights & Ownership',
    description: 'Understanding intellectual property rights in film investment.',
    downloadUrl: '/resources/film-rights-guide.pdf',
    completed: false,
    category: 'legal',
    estimatedReadTime: 20,
    difficulty: 'beginner',
    order: 2
  },
  {
    id: 'distribution',
    title: 'Distribution Contracts',
    description: 'Key aspects of film distribution agreements and revenue streams.',
    downloadUrl: '/resources/distribution-guide.pdf',
    completed: false,
    category: 'legal',
    estimatedReadTime: 25,
    difficulty: 'beginner',
    order: 3
  },
  {
    id: 'sec-guidelines',
    title: 'SEC Guidelines',
    description: 'Essential SEC regulations for film investment compliance.',
    downloadUrl: '/resources/sec-compliance.pdf',
    completed: false,
    category: 'legal',
    estimatedReadTime: 30,
    difficulty: 'beginner',
    order: 4
  },
  {
    id: 'tax-incentives',
    title: 'Tax Incentives Guide',
    description: 'Complete overview of film investment tax benefits and credits.',
    downloadUrl: '/resources/tax-incentives.pdf',
    completed: false,
    category: 'tax',
    estimatedReadTime: 20,
    difficulty: 'beginner',
    order: 5
  },
  {
    id: 'state-benefits',
    title: 'State-by-State Benefits',
    description: 'Breakdown of film tax incentives by US state.',
    downloadUrl: '/resources/state-tax-benefits.pdf',
    completed: false,
    category: 'tax',
    estimatedReadTime: 25,
    difficulty: 'beginner',
    order: 6
  },
  {
    id: 'intl-coproduction',
    title: 'International Co-Production',
    description: 'Guide to international film financing and tax treaties.',
    downloadUrl: '/resources/international-coproduction.pdf',
    completed: false,
    category: 'tax',
    estimatedReadTime: 35,
    difficulty: 'beginner',
    order: 7
  },
  {
    id: 'roi-studies',
    title: 'ROI Case Studies',
    description: 'Analysis of successful film investments and returns.',
    downloadUrl: '/resources/roi-analysis.pdf',
    completed: false,
    category: 'tax',
    estimatedReadTime: 30,
    difficulty: 'beginner',
    order: 8
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Current state and trends in the film investment market.',
    downloadUrl: '/resources/market-analysis.pdf',
    completed: false,
    category: 'industry',
    estimatedReadTime: 20,
    difficulty: 'beginner',
    order: 9
  },
  {
    id: 'success-stories',
    title: 'Success Stories',
    description: 'Case studies of successful independent film investments.',
    downloadUrl: '/resources/success-stories.pdf',
    completed: false,
    category: 'industry',
    estimatedReadTime: 25,
    difficulty: 'beginner',
    order: 10
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description: 'Framework for evaluating film investment risks.',
    downloadUrl: '/resources/risk-framework.pdf',
    completed: false,
    category: 'industry',
    estimatedReadTime: 30,
    difficulty: 'beginner',
    order: 11
  },
  {
    id: 'industry-trends',
    title: 'Industry Trends',
    description: 'Latest developments in film financing and distribution.',
    downloadUrl: '/resources/industry-trends.pdf',
    completed: false,
    category: 'industry',
    estimatedReadTime: 25,
    difficulty: 'beginner',
    order: 12
  }
]

const INVESTMENT_GOALS = [
  'First-time Film Investment',
  'Portfolio Diversification',
  'Tax Benefits Focus',
  'International Co-Production',
  'Genre-Specific Investment',
  'Long-term Industry Involvement'
]

const MOCK_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Investment Director',
    completedResources: ['inv-agreements', 'tax-incentives'],
    activePathId: 'basics'
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Legal Advisor',
    completedResources: ['rights-ownership', 'distribution'],
    activePathId: 'advanced-legal'
  }
]

const InvestorDashboard: React.FC<DashboardProps> = ({ investor }) => {
  const [resources, setResources] = useState<EducationalResource[]>(EDUCATIONAL_RESOURCES)
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedResource, setSelectedResource] = useState<EducationalResource | null>(null)
  const [recentlyViewed, setRecentlyViewed] = useState<EducationalResource[]>([])
  const [activeCategory, setActiveCategory] = useState<'legal' | 'tax' | 'industry' | 'all'>('all')
  const [notes, setNotes] = useState<Comment[]>([])
  const [activeNote, setActiveNote] = useState('')
  const [selectedPath, setSelectedPath] = useState<string | null>(null)
  const [showPathModal, setShowPathModal] = useState(false)
  const [exportFormat, setExportFormat] = useState<'pdf' | 'doc' | 'presentation'>('pdf')
  const [showTeamDashboard, setShowTeamDashboard] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [activeComment, setActiveComment] = useState('')
  const [customPaths, setCustomPaths] = useState<CustomPath[]>([])
  const [showCustomPathModal, setShowCustomPathModal] = useState(false)
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])

  useEffect(() => {
    // Load saved data from localStorage
    const storedRecent = localStorage.getItem('recentlyViewed')
    const storedNotes = localStorage.getItem('resourceNotes')
    const storedResources = localStorage.getItem('resources')
    
    if (storedRecent) setRecentlyViewed(JSON.parse(storedRecent))
    if (storedNotes) setNotes(JSON.parse(storedNotes))
    if (storedResources) setResources(JSON.parse(storedResources))
  }, [])

  const handleResourceView = (resource: EducationalResource) => {
    setSelectedResource(resource)
    const updatedRecent = [
      resource,
      ...recentlyViewed.filter(r => r.id !== resource.id).slice(0, 4)
    ]
    setRecentlyViewed(updatedRecent)
    saveToLocalStorage('recentlyViewed', updatedRecent)
  }

  const saveToLocalStorage = (key: string, data: unknown): void => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  const handleCreateCustomPath = (path: Partial<CustomPath>): void => {
    const newPath: CustomPath = {
      id: Date.now().toString(),
      name: path.name || 'Custom Path',
      description: path.description || '',
      creatorId: investor.id || 'current-user',
      creatorName: investor.name,
      resourceIds: path.resourceIds || [],
      isPublic: path.isPublic || false,
      tags: path.tags || [],
      difficulty: path.difficulty || 'beginner'
    }
    setCustomPaths(prev => [...prev, newPath])
    setShowCustomPathModal(false)
  }

  const toggleBookmark = (resourceId: string) => {
    const updatedResources = resources.map(resource =>
      resource.id === resourceId
        ? { ...resource, bookmarked: !resource.bookmarked }
        : resource
    )
    setResources(updatedResources)
    saveToLocalStorage('resources', updatedResources)
  }

  const addNote = (resourceId: string, content: string) => {
    const newNote: Comment = {
      id: Date.now().toString(),
      resourceId,
      content,
      createdAt: new Date(),
      replies: [],
      likes: [],
      isShared: false,
      authorId: investor.id || 'current-user',
      authorName: investor.name
    }
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    saveToLocalStorage('resourceNotes', updatedNotes)
    setActiveNote('')
  }

  const getRelatedResources = (resource: EducationalResource): EducationalResource[] => {
    if (!resource.relatedResourceIds) return []
    return resources.filter(r => resource.relatedResourceIds?.includes(r.id))
  }

  const calculateOverallProgress = () => {
    const completed = resources.filter(r => r.completed).length
    return Math.round((completed / resources.length) * 100)
  }

  const getCategoryProgress = () => {
    return {
      legal: calculateCategoryProgress('legal'),
      tax: calculateCategoryProgress('tax'),
      industry: calculateCategoryProgress('industry')
    }
  }

  const handleResourceCompletion = (resourceId: string) => {
    setResources(prevResources =>
      prevResources.map(resource =>
        resource.id === resourceId
          ? { ...resource, completed: !resource.completed }
          : resource
      )
    )
  }

  const getRecommendedResources = (): EducationalResource[] => {
    const incomplete = resources.filter(r => !r.completed)
    const completedIds = resources.filter(r => r.completed).map(r => r.id)
    
    // Prioritize resources where prerequisites are completed
    return incomplete
      .filter(r => !r.prerequisites || r.prerequisites.every(p => completedIds.includes(p)))
      .slice(0, 3)
  }

  const filteredAndSortedResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const calculateCategoryProgress = (category: 'legal' | 'tax' | 'industry'): number => {
    const categoryResources = resources.filter(r => r.category === category)
    const completedResources = categoryResources.filter(r => r.completed)
    return Math.round((completedResources.length / categoryResources.length) * 100)
  }

  const renderResourceList = (category: 'legal' | 'tax' | 'industry') => {
    const categoryResources = resources.filter(r => r.category === category)
    return categoryResources.map(resource => (
      <li
        key={resource.id}
        className="relative group"
        onMouseEnter={() => setActiveTooltip(resource.id)}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-all">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={resource.completed}
              onChange={() => handleResourceCompletion(resource.id)}
              className="w-4 h-4 mr-3 rounded border-white/20 bg-white/5 checked:bg-purple-500"
            />
            <span className={`text-purple-200 ${resource.completed ? 'line-through opacity-70' : ''}`}>
              {resource.title}
            </span>
          </div>
          
          {resource.downloadUrl && (
            <button
              className="ml-2 px-3 py-1 text-sm bg-purple-500/20 hover:bg-purple-500/40 rounded-full text-purple-200 transition-all"
              onClick={(e) => {
                e.stopPropagation()
                window.open(resource.downloadUrl, '_blank')
              }}
            >
              Download
            </button>
          )}
        </div>

        {/* Tooltip */}
        {activeTooltip === resource.id && (
          <div className="absolute z-10 w-64 p-4 mt-2 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl -left-2">
            <h5 className="font-semibold text-white mb-2">{resource.title}</h5>
            <p className="text-sm text-purple-200 mb-2">{resource.description}</p>
            <p className="text-xs text-purple-300">
              Estimated reading time: {resource.estimatedReadTime} minutes
            </p>
          </div>
        )}
      </li>
    ))
  }

  const exportResource = async (resource: EducationalResource, format: 'pdf' | 'doc' | 'presentation') => {
    const downloadFilename = `${resource.title.toLowerCase().replace(/\s+/g, '-')}.${format}`
    // Simulate export preparation
    alert(`Exporting ${resource.title} as ${format.toUpperCase()} to ${downloadFilename}`)
  }

  const shareNote = (noteId: string) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === noteId
          ? { ...note, isShared: !note.isShared }
          : note
      )
    )
    saveToLocalStorage('resourceNotes', notes)
  }

  const getPathProgress = (path: LearningPath): number => {
    const pathResources = resources.filter(r => path.resourceIds.includes(r.id))
    const completed = pathResources.filter(r => r.completed).length
    return Math.round((completed / pathResources.length) * 100)
  }

  const renderLearningPathModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900/95 rounded-2xl border border-white/10 p-8 max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-semibold text-white">Learning Paths</h3>
            <button
              onClick={() => setShowPathModal(false)}
              className="text-purple-200 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARNING_PATHS.map(path => (
            <div
              key={path.id}
              className={`bg-white/5 rounded-lg p-6 border ${
                selectedPath === path.id
                  ? 'border-purple-500'
                  : 'border-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{path.name}</h4>
                  <span className="text-sm text-purple-200">{path.difficulty}</span>
                </div>
                <span className="text-2xl font-bold text-purple-200">
                  {getPathProgress(path)}%
                </span>
              </div>
              
              <p className="text-purple-200 mb-4">{path.description}</p>
              
              <div className="space-y-2">
                {path.resourceIds.map(id => {
                  const resource = resources.find(r => r.id === id)
                  return resource ? (
                    <div
                      key={id}
                      className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                    >
                      <span className="text-sm text-purple-200">{resource.title}</span>
                      {resource.completed && (
                        <span className="text-green-500">✓</span>
                      )}
                    </div>
                  ) : null
                })}
              </div>

              <button
                onClick={() => {
                  setSelectedPath(path.id)
                  setShowPathModal(false)
                  const firstIncomplete = resources.find(
                    r => path.resourceIds.includes(r.id) && !r.completed
                  )
                  if (firstIncomplete) {
                    handleResourceView(firstIncomplete)
                  }
                }}
                className="w-full mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Start Path
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const addComment = (resourceId: string, content: string, parentCommentId?: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      resourceId,
      authorId: investor.id || 'current-user',
      authorName: investor.name,
      content,
      createdAt: new Date(),
      replies: [],
      likes: [],
      isShared: false
    }

    if (parentCommentId) {
      setComments(prevComments =>
        prevComments.map(comment =>
          comment.id === parentCommentId
            ? { ...comment, replies: [...comment.replies, newComment] }
            : comment
        )
      )
    } else {
      setComments(prevComments => [...prevComments, newComment])
    }
  }

  const toggleCommentLike = (commentId: string) => {
    const userId = investor.id || 'current-user'
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId
          ? {
              ...comment,
              likes: comment.likes.includes(userId)
                ? comment.likes.filter(id => id !== userId)
                : [...comment.likes, userId]
            }
          : comment
      )
    )
  }

  const getRecommendedPathsForGoals = (): (LearningPath | CustomPath)[] => {
    const allPaths = [...LEARNING_PATHS, ...customPaths]
    if (!selectedGoals.length) return allPaths

    return allPaths.filter(path => {
      if ('tags' in path && Array.isArray(path.tags)) {
        return path.tags.some((tag: string) => selectedGoals.includes(tag))
      }
      return selectedGoals.some((goal: string) =>
        path.name.toLowerCase().includes(goal.toLowerCase()) ||
        path.description.toLowerCase().includes(goal.toLowerCase())
      )
    })
  }

  const renderTeamDashboard = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900/95 rounded-2xl border border-white/10 p-8 max-w-6xl w-full m-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-semibold text-white">Team Progress Dashboard</h3>
          <button
            onClick={() => setShowTeamDashboard(false)}
            className="text-purple-200 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Overview */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Team Overview</h4>
              <div className="space-y-4">
                {MOCK_TEAM.map(member => (
                  <div key={member.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="text-white font-medium">{member.name}</h5>
                        <p className="text-sm text-purple-200">{member.role}</p>
                      </div>
                      <span className="text-purple-200">
                        {Math.round((member.completedResources.length / resources.length) * 100)}%
                      </span>
                    </div>
                    {member.activePathId && (
                      <p className="text-sm text-purple-300">
                        Currently on: {
                          LEARNING_PATHS.find(p => p.id === member.activePathId)?.name ||
                          customPaths.find(p => p.id === member.activePathId)?.name
                        }
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Team Activity</h4>
              <div className="space-y-3">
                {[...comments]
                  .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                  .slice(0, 5)
                  .map(comment => (
                    <div key={comment.id} className="bg-white/5 rounded-lg p-3">
                      <p className="text-sm text-purple-200">{comment.content}</p>
                      <div className="flex items-center justify-between mt-2 text-xs text-purple-300">
                        <span>{comment.authorName}</span>
                        <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Team Progress */}
          <div className="space-y-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Category Progress</h4>
              {(['legal', 'tax', 'industry'] as const).map(category => (
                <div key={category} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-200 capitalize">{category}</span>
                    <span className="text-sm text-purple-300">
                      {MOCK_TEAM.reduce((acc, member) =>
                        acc + member.completedResources.filter(r =>
                          resources.find(res => res.id === r)?.category === category
                        ).length, 0
                      )} completed
                    </span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all"
                      style={{
                        width: `${Math.round(
                          (MOCK_TEAM.reduce((acc, member) =>
                            acc + member.completedResources.filter(r =>
                              resources.find(res => res.id === r)?.category === category
                            ).length, 0
                          ) / (resources.filter(r => r.category === category).length * MOCK_TEAM.length)) * 100
                        )}%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Custom Learning Paths</h4>
              <div className="space-y-3">
                {customPaths.map(path => (
                  <div key={path.id} className="bg-white/5 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h5 className="text-white font-medium">{path.name}</h5>
                        <p className="text-sm text-purple-200">{path.description}</p>
                      </div>
                      <span className="text-xs text-purple-300">
                        Created by {path.creatorName}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {path.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => setShowCustomPathModal(true)}
                  className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
                >
                  Create Custom Path
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderResourceComments = (resourceId: string) => (
    <div className="space-y-4">
      {comments
        .filter(comment => comment.resourceId === resourceId)
        .map(comment => (
          <div key={comment.id} className="bg-white/5 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <p className="text-purple-200">{comment.content}</p>
              <button
                onClick={() => toggleCommentLike(comment.id)}
                className={`ml-2 ${
                  comment.likes.includes(investor.id || 'current-user')
                    ? 'text-purple-500'
                    : 'text-purple-200'
                }`}
              >
                ♥ {comment.likes.length}
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-purple-300">
              <span>{comment.authorName}</span>
              <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
            </div>
            {comment.replies.length > 0 && (
              <div className="ml-4 mt-2 space-y-2">
                {comment.replies.map(reply => (
                  <div key={reply.id} className="bg-white/5 rounded-lg p-3">
                    <p className="text-sm text-purple-200">{reply.content}</p>
                    <div className="flex items-center justify-between text-xs text-purple-300 mt-1">
                      <span>{reply.authorName}</span>
                      <span>{new Date(reply.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  )

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-3">Deal Flow Feed</h3>
            <p className="text-purple-200 mb-6">
              Active investment opportunities will appear here.
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 mt-auto flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Deal Flow Feed</h4>
              <p className="text-purple-200">Active investment opportunities will appear here.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-3">Portfolio Overview</h3>
            <p className="text-purple-200 mb-6">Your portfolio summary will appear here.</p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 mt-auto flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Portfolio Overview</h4>
              <p className="text-purple-200">Your portfolio summary will appear here.</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all flex flex-col">
            <h3 className="text-xl font-semibold text-white mb-3">Quick Insights & Actions</h3>
            <p className="text-purple-200 mb-6">Key stats and quick actions will appear here.</p>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 mt-auto flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Quick Insights & Actions</h4>
              <p className="text-purple-200">Key stats and quick actions will appear here.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Market Insights & Trending Projects
          </h3>
          <MarketTrends />
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] p-8 hover:bg-white/10 transition-all">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-white">
              Film Investment Education Center
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setShowTeamDashboard(true)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                Team Dashboard
              </button>
              <button
                onClick={() => setShowPathModal(true)}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
              >
                View Learning Paths
              </button>
            </div>
          </div>
          <p className="text-purple-200 text-center mb-8">
            Essential resources and guides for film investment success.
          </p>

          {/* Investment Goals Selection */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Your Investment Goals</h4>
            <div className="flex flex-wrap gap-2">
              {INVESTMENT_GOALS.map(goal => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoals(prev =>
                    prev.includes(goal)
                      ? prev.filter(g => g !== goal)
                      : [...prev, goal]
                  )}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedGoals.includes(goal)
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-purple-200 hover:bg-white/10'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>

          {/* Recommended Paths based on Goals */}
          {selectedGoals.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Recommended for Your Goals</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getRecommendedPathsForGoals().map(path => (
                  <div
                    key={path.id}
                    className="bg-white/5 rounded-lg p-4 border border-purple-500/30"
                  >
                    <h5 className="text-white font-medium mb-2">{path.name}</h5>
                    <p className="text-sm text-purple-200 mb-4">{path.description}</p>
                    <button
                      onClick={() => {
                        setSelectedPath(path.id)
                        const firstResource = resources.find(r =>
                          'resourceIds' in path
                            ? path.resourceIds.includes(r.id)
                            : false
                        )
                        if (firstResource) {
                          handleResourceView(firstResource)
                        }
                      }}
                      className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
                    >
                      Start Path
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress Summary Dashboard */}
          <div className="mb-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-white">Learning Progress</h4>
                <span className="text-2xl font-bold text-purple-200">
                  {calculateOverallProgress()}%
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-purple-200 mb-2">Legal</div>
                  <div className="text-xl font-semibold text-white">{getCategoryProgress().legal}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-purple-200 mb-2">Tax</div>
                  <div className="text-xl font-semibold text-white">{getCategoryProgress().tax}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-purple-200 mb-2">Industry</div>
                  <div className="text-xl font-semibold text-white">{getCategoryProgress().industry}%</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="text-sm text-purple-200 mb-2">Bookmarked</h5>
                  <p className="text-xl font-semibold text-white">
                    {resources.filter(r => r.bookmarked).length}
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="text-sm text-purple-200 mb-2">Notes Created</h5>
                  <p className="text-xl font-semibold text-white">{notes.length}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2">
              {(['all', 'legal', 'tax', 'industry'] as const).map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-purple-200 hover:bg-white/10'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Recently Viewed Section */}
          {recentlyViewed.length > 0 && (
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Recently Viewed</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentlyViewed.map(resource => (
                  <button
                    key={resource.id}
                    onClick={() => handleResourceView(resource)}
                    className="text-left p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                  >
                    <h5 className="text-white font-medium mb-1">{resource.title}</h5>
                    <p className="text-sm text-purple-200">
                      Last viewed: {new Date(resource.lastViewed!).toLocaleDateString()}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Recommended Next Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Recommended Next</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getRecommendedResources().map(resource => (
                <button
                  key={resource.id}
                  onClick={() => handleResourceView(resource)}
                  className="text-left p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-purple-500/30"
                >
                  <h5 className="text-white font-medium mb-2">{resource.title}</h5>
                  <p className="text-sm text-purple-200 mb-2">{resource.description}</p>
                  <span className="text-xs text-purple-300">
                    {resource.estimatedReadTime} min read
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Main Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">Legal Framework</h4>
                <span className="text-sm text-purple-200">
                  {calculateCategoryProgress('legal')}% Complete
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 mb-6">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${calculateCategoryProgress('legal')}%` }}
                />
              </div>
              <ul className="space-y-3">
                {renderResourceList('legal')}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">Tax & Financial</h4>
                <span className="text-sm text-purple-200">
                  {calculateCategoryProgress('tax')}% Complete
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 mb-6">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${calculateCategoryProgress('tax')}%` }}
                />
              </div>
              <ul className="space-y-3">
                {renderResourceList('tax')}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-white">Industry Insights</h4>
                <span className="text-sm text-purple-200">
                  {calculateCategoryProgress('industry')}% Complete
                </span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2 mb-6">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
                  style={{ width: `${calculateCategoryProgress('industry')}%` }}
                />
              </div>
              <ul className="space-y-3">
                {renderResourceList('industry')}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Detailed Resource View Modal */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray-900/95 rounded-2xl border border-white/10 p-8 max-w-4xl w-full m-4 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-semibold text-white">{selectedResource.title}</h3>
                  <button
                    onClick={() => toggleBookmark(selectedResource.id)}
                    className={`text-2xl transition-all ${
                      selectedResource.bookmarked ? 'text-yellow-500' : 'text-purple-200'
                    }`}
                  >
                    ★
                  </button>
                </div>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="text-purple-200 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="col-span-2 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      selectedResource.difficulty === 'beginner'
                        ? 'bg-green-500/20 text-green-300'
                        : selectedResource.difficulty === 'intermediate'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}>
                      {selectedResource.difficulty}
                    </span>
                    <span className="text-purple-200">
                      {selectedResource.estimatedReadTime} min read
                    </span>
                  </div>

                  <div>
                    <p className="text-purple-200 mb-4">{selectedResource.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-purple-300">
                        {selectedResource.estimatedReadTime} min read
                      </span>
                      <span className="text-sm text-purple-300">
                        Category: {selectedResource.category}
                      </span>
                    </div>
                  </div>

                  {selectedResource.detailedContent && (
                    <div className="prose prose-invert max-w-none">
                      <div className="text-purple-200">
                        {selectedResource.detailedContent}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    {selectedResource.downloadUrl && (
                      <button
                        onClick={() => window.open(selectedResource.downloadUrl, '_blank')}
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
                      >
                        Download Resource
                      </button>
                    )}
                    <button
                      onClick={() => handleResourceCompletion(selectedResource.id)}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        selectedResource.completed
                          ? 'bg-green-500/20 text-green-300'
                          : 'bg-white/5 text-purple-200 hover:bg-white/10'
                      }`}
                    >
                      {selectedResource.completed ? 'Completed' : 'Mark as Complete'}
                    </button>
                  </div>

                  {/* Export Options */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <select
                      value={exportFormat}
                      onChange={(e) => setExportFormat(e.target.value as any)}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-purple-200"
                    >
                      {selectedResource.exportFormats?.map(format => (
                        <option key={format} value={format}>
                          Export as {format.toUpperCase()}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => exportResource(selectedResource, exportFormat)}
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
                    >
                      Export
                    </button>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Prerequisites */}
                  {selectedResource.prerequisites && selectedResource.prerequisites.length > 0 && (
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Prerequisites</h4>
                      <div className="space-y-2">
                        {selectedResource.prerequisites.map(prereqId => {
                          const prereq = resources.find(r => r.id === prereqId)
                          return prereq && (
                            <div
                              key={prereqId}
                              className="flex items-center justify-between p-2 bg-white/5 rounded-lg"
                            >
                              <span className="text-sm text-purple-200">{prereq.title}</span>
                              {prereq.completed && (
                                <span className="text-green-500">✓</span>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Collaboration Section */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-4">Collaboration</h4>
                    <div className="space-y-4">
                      {/* Shared Notes */}
                      <div className="space-y-3">
                        {notes
                          .filter(note => note.resourceId === selectedResource.id)
                          .map(note => (
                            <div key={note.id} className="bg-white/5 rounded-lg p-3">
                              <div className="flex justify-between items-start mb-2">
                                <p className="text-purple-200 text-sm">{note.content}</p>
                                <button
                                  onClick={() => shareNote(note.id)}
                                  className={`ml-2 ${
                                    note.isShared ? 'text-purple-500' : 'text-purple-200'
                                  }`}
                                >
                                  {note.isShared ? 'Shared' : 'Share'}
                                </button>
                              </div>
                              <div className="flex items-center justify-between text-xs text-purple-300">
                                <span>{note.authorName || 'You'}</span>
                                <span>{new Date(note.createdAt).toLocaleDateString()}</span>
                              </div>
                            </div>
                          ))}
                      </div>

                      {/* New Note Input */}
                      <textarea
                        value={activeNote}
                        onChange={(e) => setActiveNote(e.target.value)}
                        placeholder="Add a note..."
                        className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <button
                        onClick={() => addNote(selectedResource.id, activeNote)}
                        disabled={!activeNote.trim()}
                        className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Save Note
                      </button>
                    </div>
                  </div>

                  {/* Related Resources */}
                  {getRelatedResources(selectedResource).length > 0 && (
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-white mb-4">Related Resources</h4>
                      <div className="space-y-3">
                        {getRelatedResources(selectedResource).map(resource => (
                          <button
                            key={resource.id}
                            onClick={() => handleResourceView(resource)}
                            className="w-full text-left p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                          >
                            <h5 className="text-white font-medium mb-1">{resource.title}</h5>
                            <p className="text-sm text-purple-200">
                              {resource.estimatedReadTime} min read
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Discussion Section */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Discussion</h4>
                <div className="space-y-4">
                  <textarea
                    value={activeComment}
                    onChange={(e) => setActiveComment(e.target.value)}
                    placeholder="Add to the discussion..."
                    className="w-full h-24 bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    onClick={() => {
                      addComment(selectedResource.id, activeComment)
                      setActiveComment('')
                    }}
                    disabled={!activeComment.trim()}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post Comment
                  </button>
                  {renderResourceComments(selectedResource.id)}
                </div>
              </div>
            </div>
          </div>
        )}

        {showTeamDashboard && renderTeamDashboard()}
        {showPathModal && renderLearningPathModal()}
      </div>
    </>
  )
}

export default InvestorDashboard
