import { User } from '../types/user'
import { Follow, Activity } from '../types/social'
import { mockFollows, mockUsers, mockActivities } from '../utils/mockData'

export interface NetworkData {
  followers: User[]
  following: User[]
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export class SocialService {
  // Follow system
  static async followUser(followerId: string, followingId: string): Promise<Follow> {
    await delay(100)
    const exists = mockFollows.find(
      f => f.followerId === followerId && f.followingId === followingId
    )
    if (exists) return exists
    const follow: Follow = {
      id: `follow-${mockFollows.length + 1}`,
      followerId,
      followingId,
      createdAt: new Date(),
    }
    mockFollows.push(follow)
    return follow
  }
  static async unfollowUser(followerId: string, followingId: string): Promise<boolean> {
    await delay(100)
    const idx = mockFollows.findIndex(
      f => f.followerId === followerId && f.followingId === followingId
    )
    if (idx === -1) return false
    mockFollows.splice(idx, 1)
    return true
  }
  static async getFollowers(userId: string): Promise<User[]> {
    await delay(100)
    const followerIds = mockFollows.filter(f => f.followingId === userId).map(f => f.followerId)
    return mockUsers.filter(u => followerIds.includes(u.id))
  }
  static async getFollowing(userId: string): Promise<User[]> {
    await delay(100)
    const followingIds = mockFollows.filter(f => f.followerId === userId).map(f => f.followingId)
    return mockUsers.filter(u => followingIds.includes(u.id))
  }
  static async isFollowing(followerId: string, followingId: string): Promise<boolean> {
    await delay(50)
    return !!mockFollows.find(f => f.followerId === followerId && f.followingId === followingId)
  }

  // Network
  static async getUserNetwork(userId: string): Promise<NetworkData> {
    await delay(100)
    const followers = await this.getFollowers(userId)
    const following = await this.getFollowing(userId)
    return { followers, following }
  }

  // Activity tracking
  static async getActivities(
    userId: string,
    page = 1,
    limit = 20
  ): Promise<{ data: Activity[]; total: number }> {
    await delay(100)
    const activities = mockActivities.filter(
      a => a.actor.id === userId || (a.target && a.target.id === userId)
    )
    const total = activities.length
    const data = activities.slice((page - 1) * limit, page * limit)
    return { data, total }
  }

  static async markActivityAsRead(activityId: string, userId: string): Promise<boolean> {
    await delay(50)
    const activity = mockActivities.find(a => a.id === activityId)
    if (!activity) return false
    activity.read = true
    return true
  }

  static async markAllActivitiesAsRead(): Promise<boolean> {
    await delay(100)
    mockActivities.forEach(activity => {
      if (!activity.read) {
        activity.read = true
      }
    })
    return true
  }

  static async getUnreadActivityCount(userId: string): Promise<number> {
    await delay(50)
    return mockActivities.filter(
      a => (a.actor.id === userId || (a.target && a.target.id === userId)) && !a.read
    ).length
  }

  static async createActivity(
    activity: Omit<Activity, 'id' | 'timestamp' | 'read'>
  ): Promise<Activity> {
    await delay(100)
    const newActivity: Activity = {
      ...activity,
      id: `activity-${mockActivities.length + 1}`,
      timestamp: new Date().toISOString(),
      read: false,
    }
    mockActivities.push(newActivity)
    return newActivity
  }
}
