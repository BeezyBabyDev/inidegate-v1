import React, { useEffect, useState } from 'react'
import { User } from '../types/user'
import { SocialService } from '../services/socialService'
import { MessageService } from '../services/messageService'
import ProfileCard from './ProfileCard'
import MessagingInterface from './MessagingInterface'
import ActivityFeed from './ActivityFeed'

interface NetworkDashboardProps {
  currentUserId: string
}

interface RecentMessage {
  id: string
  userId: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
}

const NetworkDashboard: React.FC<NetworkDashboardProps> = ({ currentUserId }) => {
  const [following, setFollowing] = useState<User[]>([])
  const [followers, setFollowers] = useState<User[]>([])
  const [recentMessages, setRecentMessages] = useState<RecentMessage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [messagingOpen, setMessagingOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

  useEffect(() => {
    loadNetworkData()
  }, [currentUserId])

  const loadNetworkData = async () => {
    setLoading(true)
    setError(null)
    try {
      const [followingData, followersData, messagesData] = await Promise.all([
        SocialService.getFollowing(currentUserId),
        SocialService.getFollowers(currentUserId),
        MessageService.getRecentMessages(currentUserId),
      ])
      setFollowing(followingData)
      setFollowers(followersData)
      setRecentMessages(messagesData)
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message || 'Failed to load network data')
      } else {
        setError('Failed to load network data')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleFollow = async (userId: string) => {
    try {
      await SocialService.followUser(currentUserId, userId)
      loadNetworkData()
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message || 'Failed to follow user')
      } else {
        setError('Failed to follow user')
      }
    }
  }

  const handleUnfollow = async (userId: string) => {
    try {
      await SocialService.unfollowUser(currentUserId, userId)
      loadNetworkData()
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message || 'Failed to unfollow user')
      } else {
        setError('Failed to unfollow user')
      }
    }
  }

  const handleMessage = (userId: string) => {
    setSelectedUserId(userId)
    setMessagingOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <ActivityFeed currentUserId={currentUserId} />
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-900/80 rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Network Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-blue-200">Following</span>
              <span className="text-white font-semibold">{following.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-200">Followers</span>
              <span className="text-white font-semibold">{followers.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-blue-200">Recent Messages</span>
              <span className="text-white font-semibold">{recentMessages.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Following Section */}
      <div className="bg-blue-900/80 rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-bold text-white mb-4">Following</h2>
        {loading ? (
          <div className="text-blue-200">Loading...</div>
        ) : error ? (
          <div className="text-red-400">{error}</div>
        ) : following.length === 0 ? (
          <div className="text-blue-200">Not following anyone yet</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {following.map(user => (
              <ProfileCard
                key={user.id}
                user={user}
                currentUserId={currentUserId}
                onFollow={() => handleUnfollow(user.id)}
                onUnfollow={() => handleUnfollow(user.id)}
                onMessage={() => handleMessage(user.id)}
                isFollowing={true}
                canMessage={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Followers Section */}
      <div className="bg-blue-900/80 rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-bold text-white mb-4">Followers</h2>
        {loading ? (
          <div className="text-blue-200">Loading...</div>
        ) : error ? (
          <div className="text-red-400">{error}</div>
        ) : followers.length === 0 ? (
          <div className="text-blue-200">No followers yet</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {followers.map(user => (
              <ProfileCard
                key={user.id}
                user={user}
                currentUserId={currentUserId}
                onFollow={() => handleFollow(user.id)}
                onUnfollow={() => handleUnfollow(user.id)}
                onMessage={() => handleMessage(user.id)}
                isFollowing={following.some(f => f.id === user.id)}
                canMessage={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Recent Messages Section */}
      <div className="bg-blue-900/80 rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-bold text-white mb-4">Recent Messages</h2>
        {loading ? (
          <div className="text-blue-200">Loading...</div>
        ) : error ? (
          <div className="text-red-400">{error}</div>
        ) : recentMessages.length === 0 ? (
          <div className="text-blue-200">No recent messages</div>
        ) : (
          <div className="space-y-4">
            {recentMessages.map(msg => (
              <div
                key={msg.id}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
                onClick={() => handleMessage(msg.userId)}
              >
                <img src={msg.avatar} alt={msg.name} className="w-12 h-12 rounded-full" />
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold">{msg.name}</p>
                  <p className="text-blue-200 text-sm truncate">{msg.lastMessage}</p>
                </div>
                <div className="text-blue-200 text-xs">
                  {new Date(msg.timestamp).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Messaging Modal */}
      {messagingOpen && selectedUserId && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-blue-900 rounded-xl shadow-lg w-full max-w-4xl h-[80vh]">
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Messages</h3>
              <button
                className="text-blue-200 hover:text-white"
                onClick={() => setMessagingOpen(false)}
              >
                ✕
              </button>
            </div>
            <MessagingInterface
              currentUserId={currentUserId}
              initialConversationId={selectedUserId}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default NetworkDashboard
