import { User } from './user'

export interface Follow {
  id: string
  followerId: string
  followingId: string
  createdAt: Date
}

export interface Conversation {
  id: string
  participants: string[] // user IDs
  lastMessage?: Message
  unreadCount: Record<string, number> // per participant
  createdAt: Date
  updatedAt: Date
  title?: string // optional conversation title
}

export type MessageStatus = 'sent' | 'delivered' | 'read'

export interface Message {
  id: string
  conversationId: string
  senderId: string
  content: string
  timestamp: string
  status: MessageStatus
  reactions?: Record<string, string[]> // emoji -> userIds
  attachments?: {
    type: 'image' | 'file'
    url: string
    name: string
    size?: number
  }[]
  readBy: string[] // user IDs who have read
  messageType: 'text' | 'system' // room for future file/media types
  edited?: boolean
  editedAt?: Date
}

export interface MessageNotification {
  id: string
  userId: string
  conversationId: string
  messageId: string
  read: boolean
  createdAt: Date
}

export interface Activity {
  id: string
  type: 'follow' | 'message' | 'like' | 'comment'
  actor: User
  target?: User
  timestamp: string
  content?: string
  read: boolean
}
