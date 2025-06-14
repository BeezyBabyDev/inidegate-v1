export type UserRole = 'investor' | 'filmmaker' | 'talent' | 'brand'

export interface User {
  id: string
  email: string
  role: UserRole
  profile: UserProfile
  socialStats: SocialStats
  preferences: UserPreferences
  createdAt: Date
  lastActive: Date
  isOnline?: boolean
}

export interface UserProfile {
  displayName: string
  avatar?: string
  bio: string
  location?: string
  website?: string
  // Role-specific fields - expand based on existing portal data
  roleSpecific: InvestorProfile | FilmmakerProfile | TalentProfile | BrandProfile
}

export interface SocialStats {
  followersCount: number
  followingCount: number
  connectionsCount?: number // for future two-way connections
}

export interface UserPreferences {
  discoverableByRole: UserRole[] // who can discover this user
  allowMessagesFrom: UserRole[] // who can message this user
  showOnlineStatus: boolean
  emailNotifications: boolean
}

// Role-specific profile interfaces
export interface InvestorProfile {
  investmentFocus: string[]
  portfolioSize?: string
  ticketSize?: string
  industries: string[]
}

export interface FilmmakerProfile {
  genres: string[]
  experience: string
  equipment?: string[]
  portfolio: string[]
}

export interface TalentProfile {
  skills: string[]
  experience: string
  availability: string
  reel?: string
}

export interface BrandProfile {
  industry: string
  company: string
  marketingBudget?: string
  targetAudience: string[]
}
