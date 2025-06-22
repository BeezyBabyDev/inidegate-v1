import { Conversation, Message } from '../types/social'

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  total: number
  limit: number
}

export interface RecentMessage {
  id: string
  userId: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
}

const API_BASE = '/api/messages'

export class MessageService {
  // Conversations
  static async getConversations(userId: string): Promise<Conversation[]> {
    const res = await fetch(`${API_BASE}/conversations/${userId}`)
    if (!res.ok) throw new Error('Failed to fetch conversations')
    const data = await res.json()
    return data.conversations
  }

  static async createConversation(participants: string[]): Promise<Conversation> {
    const res = await fetch(`${API_BASE}/conversations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ participantIds: participants }),
    })
    if (!res.ok) throw new Error('Failed to create conversation')
    const data = await res.json()
    return data.conversation
  }

  static async getConversation(_conversationId: string): Promise<Conversation> {
    // Not implemented in backend, fallback to getConversations and filter
    throw new Error('Not implemented')
  }

  // Messages
  static async sendMessage(
    conversationId: string,
    senderId: string,
    content: string,
    attachments?: string[]
  ): Promise<Message> {
    const res = await fetch(`${API_BASE}/${conversationId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sender: senderId, content, attachments }),
    })
    if (!res.ok) throw new Error('Failed to send message')
    const data = await res.json()
    return data.message
  }

  static async getMessages(conversationId: string, _page = 1): Promise<{ data: Message[] }> {
    const res = await fetch(`${API_BASE}/${conversationId}`)
    if (!res.ok) throw new Error('Failed to fetch messages')
    const data = await res.json()
    return { data: data.messages }
  }

  static async markAsRead(conversationId: string, userId: string): Promise<boolean> {
    const res = await fetch(`${API_BASE}/${conversationId}/read`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId }),
    })
    if (!res.ok) throw new Error('Failed to mark as read')
    return true
  }

  // Permissions and recent messages are not implemented in backend
  static async canUserMessage(_senderId: string, _recipientId: string): Promise<boolean> {
    // Not implemented
    return true
  }

  static async getRecentMessages(_userId: string): Promise<RecentMessage[]> {
    // Not implemented
    return []
  }
}
