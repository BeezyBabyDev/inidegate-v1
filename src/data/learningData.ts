export interface LearningPath {
  id: string
  title: string
  description: string
}

export interface Resource {
  id: string
  title: string
  description: string
  type: 'Beginner' | 'Intermediate' | 'Advanced'
  format: 'Read' | 'Listen' | 'Watch' | 'Immersive'
  duration: number // in minutes
  isCompleted: boolean
  isBookmarked: boolean
  prerequisites: string[] // array of resource ids
  contentPoints: string[] // detailed points for the course
  relatedResources: string[] // array of resource ids
}

export interface TeamActivity {
  id: string
  user: {
    name: string
    avatar: string
  }
  action: string
}

export const learningPaths: LearningPath[] = [
  {
    id: 'path-1',
    title: 'Film Finance Foundations',
    description: 'Master the fundamentals of film investment, from legal to industry analysis.',
  },
  {
    id: 'path-2',
    title: 'Advanced Tax Strategies',
    description: 'Explore sophisticated tax incentives and investment structures.',
  },
]

export const allResources: Resource[] = [
  {
    id: 'res-1',
    title: 'Film Investment Legal Basics',
    description: 'An overview of the essential legal documents and structures in film financing.',
    type: 'Beginner',
    format: 'Read',
    duration: 25,
    isCompleted: true,
    isBookmarked: false,
    prerequisites: [],
    contentPoints: [
      'Contract structures and investor protections',
      'Due diligence processes for film projects',
      'Key legal documentation (e.g., PPM, Subscription Agreement)',
    ],
    relatedResources: ['res-2'],
  },
  {
    id: 'res-2',
    title: 'Maximizing Film Tax Incentives',
    description: 'A deep dive into state and federal tax credits for film production.',
    type: 'Intermediate',
    format: 'Watch',
    duration: 60,
    isCompleted: false,
    isBookmarked: false,
    prerequisites: ['res-1'],
    contentPoints: [
      'Understanding the Section 181 Deduction for films under $15M',
      'Navigating state-specific tax credit programs and monetization',
      'Using Sale-Leaseback structures for immediate tax benefits',
      'Advanced deal structuring with tax incentives',
    ],
    relatedResources: ['res-1', 'res-3'],
  },
  {
    id: 'res-3',
    title: 'Case Study: The "Indie Hit" Model',
    description: 'Analyzing the financial success of a low-budget, high-return independent film.',
    type: 'Advanced',
    format: 'Watch',
    duration: 45,
    isCompleted: false,
    isBookmarked: true,
    prerequisites: ['res-1', 'res-2'],
    contentPoints: [
      'Financial breakdown of a successful indie film',
      'Marketing and distribution strategies that maximize ROI',
      'Risk assessment in low-budget filmmaking',
      'Identifying key success factors for breakout hits',
    ],
    relatedResources: ['res-2'],
  },
]

export const teamActivity: TeamActivity[] = [
  {
    id: 'act-1',
    user: {
      name: 'Alice',
      avatar: 'https://i.pravatar.cc/150?u=alice',
    },
    action: 'Completed: Maximizing Film Tax Incentives',
  },
  {
    id: 'act-2',
    user: {
      name: 'Bob',
      avatar: 'https://i.pravatar.cc/150?u=bob',
    },
    action: 'Bookmarked: Case Study: The "Indie Hit" Model',
  },
]
