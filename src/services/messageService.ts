import { Conversation, Message } from '../types/social'
import { mockConversations, mockMessages, mockUsers } from '../utils/mockData'

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  total: number
  limit: number
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export interface RecentMessage {
  id: string
  userId: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
}

export class MessageService {
  // Conversations
  static async getConversations(userId: string): Promise<Conversation[]> {
    await delay(100)
    return mockConversations.filter(c => c.participants.includes(userId))
  }
  static async createConversation(participants: string[]): Promise<Conversation> {
    await delay(100)
    const id = `conv-${mockConversations.length + 1}`
    const conv: Conversation = {
      id,
      participants,
      lastMessage: undefined,
      unreadCount: Object.fromEntries(participants.map(pid => [pid, 0])),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    mockConversations.push(conv)
    return conv
  }
  static async getConversation(conversationId: string): Promise<Conversation> {
    await delay(100)
    const conv = mockConversations.find(c => c.id === conversationId)
    if (!conv) throw new Error('Conversation not found')
    return conv
  }

  // Messages
  static async sendMessage(
    conversationId: string,
    senderId: string,
    content: string
  ): Promise<Message> {
    await delay(100)
    const msg: Message = {
      id: `msg-${mockMessages.length + 1}`,
      conversationId,
      senderId,
      content,
      timestamp: new Date().toISOString(),
      status: 'sent',
      readBy: [senderId],
      messageType: 'text',
    }
    mockMessages.push(msg)
    // Update conversation lastMessage and unreadCount
    const conv = mockConversations.find(c => c.id === conversationId)
    if (conv) {
      conv.lastMessage = msg
      conv.updatedAt = new Date()
      conv.participants.forEach(pid => {
        if (pid !== senderId) {
          conv.unreadCount[pid] = (conv.unreadCount[pid] || 0) + 1
        }
      })
    }
    return msg
  }
  static async getMessages(conversationId: string, page = 1): Promise<PaginatedResponse<Message>> {
    await delay(100)
    const all = mockMessages.filter(m => m.conversationId === conversationId)
    const limit = 20
    const total = all.length
    const data = all.slice((page - 1) * limit, page * limit)
    return { data, page, total, limit }
  }
  static async markAsRead(conversationId: string, userId: string): Promise<boolean> {
    await delay(50)
    const conv = mockConversations.find(c => c.id === conversationId)
    if (!conv) return false
    conv.unreadCount[userId] = 0
    mockMessages.forEach(m => {
      if (m.conversationId === conversationId && !m.readBy.includes(userId)) {
        m.readBy.push(userId)
      }
    })
    return true
  }

  // Permissions
  static async canUserMessage(senderId: string, recipientId: string): Promise<boolean> {
    await delay(30)
    const sender = mockUsers.find(u => u.id === senderId)
    const recipient = mockUsers.find(u => u.id === recipientId)
    if (!sender || !recipient) return false
    return recipient.preferences.allowMessagesFrom.includes(sender.role)
  }

  static async getRecentMessages(userId: string): Promise<RecentMessage[]> {
    await delay(150)
    // Mock implementation - in real app, this would fetch from API
    return mockConversations
      .filter(conv => conv.participants.includes(userId))
      .map(conv => {
        let timestamp: string
        const ts = conv.lastMessage?.timestamp
        if (typeof ts === 'string') {
          timestamp = ts
        } else if (ts && Object.prototype.toString.call(ts) === '[object Date]') {
          timestamp = (ts as Date).toISOString()
        } else {
          timestamp = new Date().toISOString()
        }
        return {
          id: conv.id,
          userId: conv.participants.find(p => p !== userId) || '',
          name:
            mockUsers.find(u => u.id === conv.participants.find(p => p !== userId))?.profile
              .displayName || 'Unknown User',
          avatar:
            mockUsers.find(u => u.id === conv.participants.find(p => p !== userId))?.profile
              .avatar || '',
          lastMessage: conv.lastMessage?.content || 'No messages yet',
          timestamp,
        }
      })
      .slice(0, 5) // Return only 5 most recent conversations
  }
}
