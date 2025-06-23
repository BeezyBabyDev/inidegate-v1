import { MessageService } from './messageService'
import { mockUsers } from '../utils/mockData'

describe('MessageService', () => {
  const userId = mockUsers[0].id
  const otherUserId = mockUsers[1].id
  let conversationId: string

  it('should get conversations for a user', async () => {
    const conversations = await MessageService.getConversations(userId)
    expect(Array.isArray(conversations)).toBe(true)
    expect(conversations.some(c => c.participants.includes(userId))).toBe(true)
    conversationId = conversations[0].id
  })

  it('should send a message in a conversation', async () => {
    const content = 'Test message'
    const msg = await MessageService.sendMessage(conversationId, userId, content)
    expect(msg).toHaveProperty('id')
    expect(msg.content).toBe(content)
    expect(msg.senderId).toBe(userId)
    expect(msg.conversationId).toBe(conversationId)
  })

  it('should get messages for a conversation', async () => {
    const { data } = await MessageService.getMessages(conversationId)
    expect(Array.isArray(data)).toBe(true)
    expect(data.length).toBeGreaterThan(0)
    expect(data[0]).toHaveProperty('conversationId', conversationId)
  })

  it('should mark messages as read', async () => {
    const result = await MessageService.markAsRead(conversationId, userId)
    expect(result).toBe(true)
    // All messages in the conversation should include userId in readBy
    const { data } = await MessageService.getMessages(conversationId)
    data.forEach(msg => {
      expect(msg.readBy.includes(userId)).toBe(true)
    })
  })

  it('should check if a user can message another user', async () => {
    const canMessage = await MessageService.canUserMessage(userId, otherUserId)
    expect(typeof canMessage).toBe('boolean')
  })

  it('should get recent messages for a user', async () => {
    const recent = await MessageService.getRecentMessages(userId)
    expect(Array.isArray(recent)).toBe(true)
    if (recent.length > 0) {
      expect(recent[0]).toHaveProperty('id')
      expect(recent[0]).toHaveProperty('lastMessage')
    }
  })
})
