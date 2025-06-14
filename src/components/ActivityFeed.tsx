import React, { useEffect, useState } from 'react'
import { User } from '../types/user'
import { SocialService } from '../services/socialService'
import { MessageService } from '../services/messageService'
import { Activity } from '../types/social'

interface ActivityFeedProps {
  currentUserId: string
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ currentUserId }) => {
  const [activities, setActivities] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [unreadCount, setUnreadCount] = useState(0)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    loadActivities()
    loadUnreadCount()
  }, [currentUserId])

  const loadActivities = async (pageNum = 1) => {
    if (pageNum === 1) {
      setLoading(true)
    } else {
      setLoadingMore(true)
    }
    setError(null)
    try {
      const { data, total } = await SocialService.getActivities(currentUserId, pageNum)
      if (pageNum === 1) {
        setActivities(data)
      } else {
        setActivities(prev => [...prev, ...data])
      }
      setHasMore(activities.length < total)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message || 'Failed to load activities')
      } else {
        setError('Failed to load activities')
      }
    } finally {
      if (pageNum === 1) {
        setLoading(false)
      } else {
        setLoadingMore(false)
      }
    }
  }

  const loadUnreadCount = async () => {
    try {
      const count = await SocialService.getUnreadActivityCount(currentUserId)
      setUnreadCount(count)
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error('Failed to load unread count:', e)
      } else {
        console.error('Failed to load unread count')
      }
    }
  }

  const markAsRead = async (activityId: string) => {
    try {
      await SocialService.markActivityAsRead(activityId, currentUserId)
      setActivities(prev => prev.map(a => (a.id === activityId ? { ...a, read: true } : a)))
      setUnreadCount(prev => Math.max(0, prev - 1))
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error('Failed to mark activity as read:', e)
      } else {
        console.error('Failed to mark activity as read')
      }
    }
  }

  const markAllAsRead = async () => {
    try {
      await SocialService.markAllActivitiesAsRead(currentUserId)
      setActivities(prev => prev.map(a => ({ ...a, read: true })))
      setUnreadCount(0)
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error('Failed to mark all activities as read:', e)
      } else {
        console.error('Failed to mark all activities as read')
      }
    }
  }

  const loadMore = () => {
    if (!hasMore || loadingMore) return
    const nextPage = page + 1
    setPage(nextPage)
    loadActivities(nextPage)
  }

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'follow':
        return '👥'
      case 'message':
        return '💬'
      case 'like':
        return '❤️'
      case 'comment':
        return '💭'
      default:
        return '📌'
    }
  }

  const getActivityText = (activity: Activity) => {
    switch (activity.type) {
      case 'follow':
        return `${activity.actor.profile.displayName} started following you`
      case 'message':
        return `${activity.actor.profile.displayName} sent you a message: "${activity.content}"`
      case 'like':
        return `${activity.actor.profile.displayName} liked your profile`
      case 'comment':
        return `${activity.actor.profile.displayName} commented on your profile: "${activity.content}"`
      default:
        return 'New activity'
    }
  }

  return (
    <div className="bg-blue-900/80 rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-white">Activity Feed</h2>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-200 hover:text-white transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {loading && activities.length === 0 ? (
        <div className="text-blue-200">Loading activities...</div>
      ) : error ? (
        <div className="text-red-400">{error}</div>
      ) : activities.length === 0 ? (
        <div className="text-blue-200">No activities yet</div>
      ) : (
        <div className="space-y-4">
          {activities.map(activity => (
            <div
              key={activity.id}
              className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${
                activity.read ? 'bg-white/5' : 'bg-white/10'
              }`}
              onClick={() => !activity.read && markAsRead(activity.id)}
            >
              <div className="text-2xl">{getActivityIcon(activity.type)}</div>
              <div className="flex-1 min-w-0">
                <p className="text-white">{getActivityText(activity)}</p>
                <p className="text-blue-200 text-sm">
                  {new Date(activity.timestamp).toLocaleString()}
                </p>
              </div>
              {!activity.read && <div className="w-2 h-2 rounded-full bg-green-500" />}
            </div>
          ))}

          {hasMore && (
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="w-full py-2 text-blue-200 hover:text-white transition-colors disabled:opacity-50"
            >
              {loadingMore ? 'Loading more...' : 'Load more'}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default ActivityFeed
