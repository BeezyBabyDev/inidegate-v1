import React from 'react'
import { User } from '../types/user'
import ProfileCard from './ProfileCard'

interface ProfileGridProps {
  users: User[]
  isFollowing: Record<string, boolean>
  canMessage: Record<string, boolean>
  loadingFollow?: Record<string, boolean>
  onFollow: (userId: string) => void
  onUnfollow: (userId: string) => void
  onMessage: (userId: string) => void
}

export const ProfileGrid: React.FC<ProfileGridProps> = ({
  users,
  isFollowing,
  canMessage,
  loadingFollow = {},
  onFollow,
  onUnfollow,
  onMessage,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {users.map(user => (
        <ProfileCard
          key={user.id}
          user={user}
          isFollowing={!!isFollowing[user.id]}
          canMessage={!!canMessage[user.id]}
          loadingFollow={!!loadingFollow[user.id]}
          onFollow={onFollow}
          onUnfollow={onUnfollow}
          onMessage={onMessage}
        />
      ))}
    </div>
  )
}

export default ProfileGrid
