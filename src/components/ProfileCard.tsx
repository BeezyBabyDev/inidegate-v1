import React, { useState } from 'react'
import { User } from '../types/user'

export interface ProfileCardProps {
  user: User
  currentUserId: string
  isFollowing: boolean
  canMessage: boolean
  loadingFollow?: boolean
  onFollow: (userId: string) => void
  onUnfollow: (userId: string) => void
  onMessage: (userId: string) => void
}

const roleColors: Record<string, string> = {
  investor: 'bg-green-600 text-white',
  filmmaker: 'bg-purple-600 text-white',
  talent: 'bg-pink-600 text-white',
  brand: 'bg-orange-500 text-white',
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  user,
  currentUserId,
  isFollowing,
  canMessage,
  loadingFollow = false,
  onFollow,
  onUnfollow,
  onMessage,
}) => {
  const [hover, setHover] = useState(false)
  const isCurrentUser = user.id === currentUserId
  const roleColor = roleColors[user.role] || 'bg-gray-400 text-white'

  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 flex flex-col items-center shadow-md transition-all hover:scale-105 w-full max-w-xs mx-auto">
      <div className="relative mb-3">
        <img
          src={user.profile.avatar}
          alt={user.profile.displayName}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
        />
        {user.isOnline && (
          <span
            className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"
            title="Online"
          />
        )}
      </div>
      <div className="flex items-center space-x-2 mb-1">
        <span className={`px-2 py-1 rounded text-xs font-semibold capitalize ${roleColor}`}>
          {user.role}
        </span>
        <span className="font-bold text-lg text-white">{user.profile.displayName}</span>
      </div>
      <p className="text-blue-100 text-sm text-center mb-2 line-clamp-2">{user.profile.bio}</p>
      <div className="flex items-center space-x-4 mb-3">
        <div className="text-center">
          <span className="block text-white font-bold text-lg">
            {user.socialStats.followersCount}
          </span>
          <span className="text-xs text-blue-200">Followers</span>
        </div>
        {/* Add more role-specific highlights here if needed */}
      </div>
      <div className="flex w-full space-x-2 mt-auto">
        {!isCurrentUser && (
          <>
            <button
              className={`flex-1 py-2 rounded font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
                ${
                  isFollowing
                    ? hover
                      ? 'bg-red-600 text-white' // Unfollow state
                      : 'bg-gray-200 text-gray-800 border border-gray-300' // Following state
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }
                ${loadingFollow ? 'opacity-60 cursor-not-allowed' : ''}`}
              disabled={loadingFollow}
              onClick={() => (isFollowing ? onUnfollow(user.id) : onFollow(user.id))}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              aria-label={isFollowing ? (hover ? 'Unfollow' : 'Following') : 'Follow'}
            >
              {loadingFollow ? (
                <span className="animate-spin">⏳</span>
              ) : isFollowing ? (
                hover ? (
                  'Unfollow'
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-1">✔</span> Following
                  </span>
                )
              ) : (
                'Follow'
              )}
            </button>
            <button
              className={`flex-1 py-2 rounded font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
                ${canMessage ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}`}
              disabled={!canMessage}
              onClick={() => canMessage && onMessage(user.id)}
              aria-label={canMessage ? 'Message' : 'Messaging not allowed'}
            >
              Message
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
