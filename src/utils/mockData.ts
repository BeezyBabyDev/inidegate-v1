import {
  User,
  UserRole,
  InvestorProfile,
  FilmmakerProfile,
  TalentProfile,
  BrandProfile,
} from '../types/user'
import { Follow, Conversation, Message, Activity } from '../types/social'

// Helper for random date
const randomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))

// Sample industries, genres, skills, etc.
const industries = ['Film', 'Tech', 'Fashion', 'Food', 'Automotive', 'Finance', 'Media']
const genres = ['Drama', 'Comedy', 'Action', 'Documentary', 'Sci-Fi', 'Horror', 'Romance']
const skills = ['Acting', 'Singing', 'Dancing', 'Stunts', 'Voiceover', 'Modeling']
const companies = [
  'CineWave',
  'Brandify',
  'TalentX',
  'InvestPro',
  'FilmMakers Inc',
  'StarBrands',
  'NextGen Films',
]
const locations = ['Los Angeles', 'New York', 'London', 'Berlin', 'Paris', 'Toronto', 'Sydney']
const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/men/76.jpg',
  'https://randomuser.me/api/portraits/women/12.jpg',
]

// Generate 50+ users
export const mockUsers: User[] = Array.from({ length: 54 }, (_, i) => {
  const role: UserRole = ['investor', 'filmmaker', 'talent', 'brand'][i % 4] as UserRole
  const id = `user-${i + 1}`
  const displayName =
    role === 'investor'
      ? `Investor ${i + 1}`
      : role === 'filmmaker'
        ? `Filmmaker ${i + 1}`
        : role === 'talent'
          ? `Talent ${i + 1}`
          : `Brand ${i + 1}`
  const email = `${displayName.toLowerCase().replace(/ /g, '')}@demo.com`
  const createdAt = randomDate(new Date(2022, 0, 1), new Date())
  const lastActive = randomDate(createdAt, new Date())
  const isOnline = Math.random() > 0.7
  const avatar = avatars[i % avatars.length]
  const location = locations[i % locations.length]
  const bio = `This is a sample bio for ${displayName}. Passionate about the ${role} industry.`
  const website = `https://www.${displayName.toLowerCase().replace(/ /g, '')}.com`
  // Preferences
  const preferences = {
    discoverableByRole: ['investor', 'filmmaker', 'talent', 'brand'] as UserRole[],
    allowMessagesFrom: ['investor', 'filmmaker', 'talent', 'brand'] as UserRole[],
    showOnlineStatus: true,
    emailNotifications: Math.random() > 0.5,
  }
  // Social stats
  const followersCount = Math.floor(Math.random() * 1000)
  const followingCount = Math.floor(Math.random() * 500)
  // Role-specific
  let roleSpecific: InvestorProfile | FilmmakerProfile | TalentProfile | BrandProfile
  if (role === 'investor') {
    roleSpecific = {
      investmentFocus: [industries[i % industries.length]],
      portfolioSize: `$${Math.floor(Math.random() * 10) + 1}M`,
      ticketSize: `$${Math.floor(Math.random() * 500) + 50}K`,
      industries: [
        industries[(i + 1) % industries.length],
        industries[(i + 2) % industries.length],
      ],
    }
  } else if (role === 'filmmaker') {
    roleSpecific = {
      genres: [genres[i % genres.length], genres[(i + 1) % genres.length]],
      experience: `${Math.floor(Math.random() * 20) + 1} years`,
      equipment: ['Camera', 'Lighting', 'Sound'],
      portfolio: [`https://filmportfolio.com/${id}`],
    }
  } else if (role === 'talent') {
    roleSpecific = {
      skills: [skills[i % skills.length], skills[(i + 1) % skills.length]],
      experience: `${Math.floor(Math.random() * 15) + 1} years`,
      availability: Math.random() > 0.5 ? 'Available' : 'Booked',
      reel: `https://talentreels.com/${id}`,
    }
  } else {
    // brand
    roleSpecific = {
      industry: industries[i % industries.length],
      company: companies[i % companies.length],
      marketingBudget: `$${Math.floor(Math.random() * 5) + 1}M`,
      targetAudience: ['18-24', '25-34', '35-44'],
    }
  }
  return {
    id,
    email,
    role,
    profile: {
      displayName,
      avatar,
      bio,
      location,
      website,
      roleSpecific,
    },
    socialStats: {
      followersCount,
      followingCount,
      connectionsCount: Math.floor(Math.random() * 100),
    },
    preferences,
    createdAt,
    lastActive,
    isOnline,
  }
})

// Sample follows (first 10 users follow next 10)
export const mockFollows: Follow[] = Array.from({ length: 20 }, (_, i) => ({
  id: `follow-${i + 1}`,
  followerId: mockUsers[i].id,
  followingId: mockUsers[(i + 10) % mockUsers.length].id,
  createdAt: randomDate(new Date(2023, 0, 1), new Date()),
}))

// Sample conversations (between first 4 users)
export const mockConversations: Conversation[] = [
  {
    id: 'conv-1',
    participants: [mockUsers[0].id, mockUsers[1].id],
    lastMessage: undefined,
    unreadCount: {
      [mockUsers[0].id]: 0,
      [mockUsers[1].id]: 1,
    },
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    updatedAt: new Date(),
    title: 'Investor & Filmmaker',
  },
  {
    id: 'conv-2',
    participants: [mockUsers[2].id, mockUsers[3].id],
    lastMessage: undefined,
    unreadCount: {
      [mockUsers[2].id]: 2,
      [mockUsers[3].id]: 0,
    },
    createdAt: randomDate(new Date(2023, 0, 1), new Date()),
    updatedAt: new Date(),
    title: 'Talent & Brand',
  },
]

// Sample messages for conversations
export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    conversationId: 'conv-1',
    senderId: mockUsers[0].id,
    content: 'Hi, I am interested in your latest project!',
    timestamp: randomDate(new Date(2023, 0, 1), new Date()).toISOString(),
    status: 'sent',
    readBy: [mockUsers[0].id],
    messageType: 'text',
  },
  {
    id: 'msg-2',
    conversationId: 'conv-1',
    senderId: mockUsers[1].id,
    content: 'Thank you! Let me know if you have any questions.',
    timestamp: randomDate(new Date(2023, 0, 1), new Date()).toISOString(),
    status: 'sent',
    readBy: [mockUsers[0].id, mockUsers[1].id],
    messageType: 'text',
  },
  {
    id: 'msg-3',
    conversationId: 'conv-2',
    senderId: mockUsers[2].id,
    content: 'Are you looking for new talent for your campaign?',
    timestamp: randomDate(new Date(2023, 0, 1), new Date()).toISOString(),
    status: 'sent',
    readBy: [mockUsers[2].id],
    messageType: 'text',
  },
  {
    id: 'msg-4',
    conversationId: 'conv-2',
    senderId: mockUsers[3].id,
    content: 'Yes! Please send your reel and portfolio.',
    timestamp: randomDate(new Date(2023, 0, 1), new Date()).toISOString(),
    status: 'sent',
    readBy: [mockUsers[2].id, mockUsers[3].id],
    messageType: 'text',
  },
]

export const mockActivities: Activity[] = [
  {
    id: 'activity-1',
    type: 'follow',
    actor: mockUsers[1],
    target: mockUsers[0],
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    read: false,
  },
  {
    id: 'activity-2',
    type: 'message',
    actor: mockUsers[2],
    target: mockUsers[0],
    content: 'Hey, I saw your latest project. Would love to discuss!',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    read: true,
  },
  {
    id: 'activity-3',
    type: 'like',
    actor: mockUsers[3],
    target: mockUsers[0],
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    read: false,
  },
]
