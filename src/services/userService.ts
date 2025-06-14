import { User, UserProfile, UserPreferences, UserRole } from '../types/user'
export type { UserRole } from '../types/user'
import { mockUsers } from '../utils/mockData'

export interface UserDiscoveryFilters {
  role?: UserRole
  location?: string
  interests?: string[]
  page?: number
  limit?: number
}

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  total: number
  limit: number
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export class UserService {
  // Profile management
  static async getUserById(id: string): Promise<User> {
    await delay(100)
    const user = mockUsers.find(u => u.id === id)
    if (!user) throw new Error('User not found')
    return user
  }
  static async updateUserProfile(id: string, profile: Partial<UserProfile>): Promise<User> {
    await delay(100)
    const idx = mockUsers.findIndex(u => u.id === id)
    if (idx === -1) throw new Error('User not found')
    mockUsers[idx].profile = { ...mockUsers[idx].profile, ...profile }
    return mockUsers[idx]
  }
  static async updateUserPreferences(
    id: string,
    preferences: Partial<UserPreferences>
  ): Promise<User> {
    await delay(100)
    const idx = mockUsers.findIndex(u => u.id === id)
    if (idx === -1) throw new Error('User not found')
    mockUsers[idx].preferences = { ...mockUsers[idx].preferences, ...preferences }
    return mockUsers[idx]
  }

  // Discovery
  static async discoverUsers(filters: UserDiscoveryFilters): Promise<PaginatedResponse<User>> {
    await delay(150)
    let filtered = mockUsers
    if (filters.role) filtered = filtered.filter(u => u.role === filters.role)
    if (filters.location) filtered = filtered.filter(u => u.profile.location === filters.location)
    // For interests, just match if any genre/industry/skill matches (simple demo logic)
    if (filters.interests && filters.interests.length > 0) {
      filtered = filtered.filter(u => {
        const rs = u.profile.roleSpecific
        if (u.role === 'investor' && 'industries' in rs)
          return rs.industries.some((i: string) => filters.interests!.includes(i))
        if (u.role === 'filmmaker' && 'genres' in rs)
          return rs.genres.some((g: string) => filters.interests!.includes(g))
        if (u.role === 'talent' && 'skills' in rs)
          return rs.skills.some((s: string) => filters.interests!.includes(s))
        if (u.role === 'brand' && 'industry' in rs) return filters.interests!.includes(rs.industry)
        return false
      })
    }
    const page = filters.page || 1
    const limit = filters.limit || 20
    const total = filtered.length
    const data = filtered.slice((page - 1) * limit, page * limit)
    return { data, page, total, limit }
  }
  static async searchUsers(query: string, role?: UserRole): Promise<User[]> {
    await delay(100)
    let filtered = mockUsers
    if (role) filtered = filtered.filter(u => u.role === role)
    if (query) {
      const q = query.toLowerCase()
      filtered = filtered.filter(
        u =>
          u.profile.displayName.toLowerCase().includes(q) ||
          u.profile.bio.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      )
    }
    return filtered
  }
}
