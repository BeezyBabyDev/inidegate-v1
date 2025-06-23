import React, { useEffect, useState, useCallback } from 'react'
import { User } from '../types/user'
import { UserService, UserDiscoveryFilters } from '../services/userService'
import { SocialService } from '../services/socialService'
import { MessageService } from '../services/messageService'
import ProfileFilters from './ProfileFilters'
import ProfileGrid from './ProfileGrid'
import MessagingInterface from './MessagingInterface'

const PAGE_SIZE = 16

const defaultFilters: UserDiscoveryFilters = {
  role: undefined,
  location: undefined,
  interests: [],
  page: 1,
  limit: PAGE_SIZE,
}

const DiscoverProfiles: React.FC = () => {
  const [filters, setFilters] = useState<UserDiscoveryFilters>(defaultFilters)
  const [users, setUsers] = useState<User[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isFollowing, setIsFollowing] = useState<Record<string, boolean>>({})
  const [canMessage, setCanMessage] = useState<Record<string, boolean>>({})
  const [loadingFollow, setLoadingFollow] = useState<Record<string, boolean>>({})
  const [currentUserId] = useState<string>('user-1') // TODO: Replace with real auth
  const [messagingOpen, setMessagingOpen] = useState(false)
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null)

  // Fetch users
  const fetchUsers = useCallback(
    async (reset = false) => {
      setLoading(true)
      setError(null)
      try {
        const resp = await UserService.discoverUsers(filters)
        setUsers(reset ? resp.data : prev => [...prev, ...resp.data])
        setTotal(resp.total)
        // Preload follow/canMessage state
        const followMap: Record<string, boolean> = {}
        const canMsgMap: Record<string, boolean> = {}
        await Promise.all(
          resp.data.map(async user => {
            if (user.id === currentUserId) return
            followMap[user.id] = await SocialService.isFollowing(currentUserId, user.id)
            canMsgMap[user.id] = await MessageService.canUserMessage(currentUserId, user.id)
          })
        )
        setIsFollowing(prev => ({ ...prev, ...followMap }))
        setCanMessage(prev => ({ ...prev, ...canMsgMap }))
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message || 'Failed to load profiles')
        } else {
          setError('Failed to load profiles')
        }
      } finally {
        setLoading(false)
      }
    },
    [filters, currentUserId]
  )

  useEffect(() => {
    setUsers([])
    fetchUsers(true)
    // eslint-disable-next-line
  }, [filters.role, filters.location, filters.interests])

  // Pagination: load more
  const handleLoadMore = () => {
    setFilters(f => ({ ...f, page: (f.page || 1) + 1 }))
  }
  useEffect(() => {
    if (filters.page && filters.page > 1) fetchUsers()
    // eslint-disable-next-line
  }, [filters.page])

  // Follow/unfollow handlers
  const handleFollow = async (userId: string) => {
    setLoadingFollow(f => ({ ...f, [userId]: true }))
    await SocialService.followUser(currentUserId, userId)
    setIsFollowing(f => ({ ...f, [userId]: true }))
    setLoadingFollow(f => ({ ...f, [userId]: false }))
  }
  const handleUnfollow = async (userId: string) => {
    setLoadingFollow(f => ({ ...f, [userId]: true }))
    await SocialService.unfollowUser(currentUserId, userId)
    setIsFollowing(f => ({ ...f, [userId]: false }))
    setLoadingFollow(f => ({ ...f, [userId]: false }))
  }
  const handleMessage = async (userId: string) => {
    try {
      // Logic to find or create a conversation
      const conversation = await MessageService.createConversation([currentUserId, userId])
      setSelectedConversationId(conversation.id)
      setMessagingOpen(true)
    } catch (error) {
      console.error('Failed to create or open conversation', error)
      setError('Could not open conversation.')
    }
  }

  // Collect available locations for filters
  const availableLocations = Array.from(
    new Set(users.map(u => u.profile.location).filter((loc): loc is string => Boolean(loc)))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Discover Profiles
        </h1>
        <ProfileFilters
          value={filters}
          onChange={f => setFilters({ ...defaultFilters, ...f, page: 1 })}
          availableLocations={availableLocations}
        />
        {error && <div className="text-red-400 text-center my-4">{error}</div>}
        {loading && users.length === 0 && (
          <div className="text-blue-200 text-center my-8">Loading profiles...</div>
        )}
        {!loading && users.length === 0 && (
          <div className="text-blue-200 text-center my-8">No profiles found.</div>
        )}
        <ProfileGrid
          users={users.filter(u => u.id !== currentUserId)}
          currentUserId={currentUserId}
          isFollowing={isFollowing}
          canMessage={canMessage}
          loadingFollow={loadingFollow}
          onFollow={handleFollow}
          onUnfollow={handleUnfollow}
          onMessage={handleMessage}
        />
        {users.length < total && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-all"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
      {/* Messaging Modal */}
      {messagingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-full max-w-3xl mx-auto p-4">
            <button
              className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 z-10"
              onClick={() => setMessagingOpen(false)}
              aria-label="Close messaging"
            >
              ✕
            </button>
            <MessagingInterface
              currentUserId={currentUserId}
              initialConversationId={selectedConversationId || undefined}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscoverProfiles
