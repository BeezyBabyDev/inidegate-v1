import React, { useEffect, useState, useRef } from 'react'
import { MessageService } from '../services/messageService'
import { Conversation, Message } from '../types/social'

interface MessagingInterfaceProps {
  currentUserId: string
  initialConversationId?: string
}

const MessagingInterface: React.FC<MessagingInterfaceProps> = ({
  currentUserId,
  initialConversationId,
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [selectedConvId, setSelectedConvId] = useState<string | null>(initialConversationId || null)
  const [messages, setMessages] = useState<Message[]>([])
  const [loadingConvs, setLoadingConvs] = useState(false)
  const [loadingMsgs, setLoadingMsgs] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isTyping, setIsTyping] = useState<Record<string, boolean>>({})
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Group conversations by date
  const groupedConversations = conversations.reduce(
    (groups, conv) => {
      const date = new Date(conv.lastMessage?.timestamp || conv.createdAt).toLocaleDateString()
      if (!groups[date]) groups[date] = []
      groups[date].push(conv)
      return groups
    },
    {} as Record<string, Conversation[]>
  )

  // Mapping functions for backend data to frontend types
  function mapMessageFromBackend(msg: Record<string, unknown>, currentUserId: string): Message {
    return {
      id: (msg._id as string) || (msg.id as string),
      conversationId:
        ((msg.conversation && typeof msg.conversation === 'object' && 'id' in msg.conversation
          ? (msg.conversation as Record<string, unknown>).id
          : msg.conversation) as string) || (msg.conversationId as string),
      senderId:
        ((msg.sender && typeof msg.sender === 'object' && 'id' in msg.sender
          ? (msg.sender as Record<string, unknown>).id
          : msg.sender) as string) || (msg.senderId as string),
      content: msg.content as string,
      timestamp: (msg.createdAt as string) || (msg.timestamp as string),
      status: msg.status as Message['status'],
      reactions: (msg.reactions as Message['reactions']) || {},
      attachments: (msg.attachments as Message['attachments']) || [],
      readBy: (msg.readBy as string[]) || (msg.status === 'read' ? [currentUserId] : []),
      messageType: (msg.messageType as Message['messageType']) || 'text',
      edited: msg.edited as boolean,
      editedAt: msg.editedAt as Date,
    }
  }

  function mapConversationFromBackend(
    conv: Record<string, unknown>,
    currentUserId: string
  ): Conversation {
    let unreadCount: Record<string, number> = (conv.unreadCount as Record<string, number>) || {}
    if (!unreadCount[currentUserId]) {
      unreadCount[currentUserId] = 0
    }
    return {
      id: (conv._id as string) || (conv.id as string),
      participants: ((conv.participants as unknown[]) || []).map((p: unknown) =>
        typeof p === 'object' && p !== null && 'id' in p
          ? ((p as Record<string, unknown>).id as string)
          : (p as string)
      ),
      lastMessage: conv.lastMessage
        ? mapMessageFromBackend(conv.lastMessage as Record<string, unknown>, currentUserId)
        : undefined,
      unreadCount,
      createdAt: conv.createdAt as Date,
      updatedAt: conv.updatedAt as Date,
      title: conv.title as string,
    }
  }

  // Fetch conversations
  useEffect(() => {
    setLoadingConvs(true)
    MessageService.getConversations(currentUserId)
      .then((data: unknown[]) =>
        setConversations(
          data.map(c => mapConversationFromBackend(c as Record<string, unknown>, currentUserId))
        )
      )
      .catch(e => setError(e.message || 'Failed to load conversations'))
      .finally(() => setLoadingConvs(false))
  }, [currentUserId, mapConversationFromBackend])

  // Fetch messages for selected conversation & mark as read
  useEffect(() => {
    if (!selectedConvId) return
    setLoadingMsgs(true)
    MessageService.getMessages(selectedConvId)
      .then((res: { data: unknown[] }) =>
        setMessages(
          res.data.map(m => mapMessageFromBackend(m as Record<string, unknown>, currentUserId))
        )
      )
      .catch(e => setError(e.message || 'Failed to load messages'))
      .finally(() => setLoadingMsgs(false))
    // Mark as read
    MessageService.markAsRead(selectedConvId, currentUserId).catch(() => {})
  }, [selectedConvId, currentUserId, mapMessageFromBackend])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Select first conversation by default
  useEffect(() => {
    if (conversations.length > 0 && !selectedConvId) {
      setSelectedConvId(conversations[0].id)
    }
  }, [conversations, selectedConvId])

  // Simulate typing indicator
  useEffect(() => {
    if (!selectedConvId) return
    const typingTimeout = setTimeout(() => {
      setIsTyping(prev => ({ ...prev, [selectedConvId]: false }))
    }, 3000)
    return () => clearTimeout(typingTimeout)
  }, [selectedConvId])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    // TODO: Implement file upload
    console.log('File selected:', file.name)
  }

  const handleReaction = (messageId: string, reaction: string) => {
    // TODO: Implement reaction
    console.log('Reaction:', reaction, 'on message:', messageId)
  }

  const filteredConversations = searchQuery
    ? conversations.filter(
        conv =>
          conv.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          conv.lastMessage?.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : conversations

  return (
    <div className="flex flex-col md:flex-row min-h-[80vh] bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-xl shadow-lg overflow-hidden">
      {/* Conversation List */}
      <aside className="w-full md:w-1/3 bg-blue-900/80 border-r border-white/10 overflow-y-auto">
        <div className="sticky top-0 bg-blue-900/90 p-4 border-b border-white/10">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        {loadingConvs && <div className="text-blue-200 px-4 py-2">Loading...</div>}
        {error && <div className="text-red-400 px-4 py-2">{error}</div>}
        {!loadingConvs && filteredConversations.length === 0 && (
          <div className="text-blue-200 px-4 py-2">No conversations found.</div>
        )}
        <div className="divide-y divide-white/10">
          {Object.entries(groupedConversations).map(([date, convs]) => (
            <div key={date}>
              <div className="px-4 py-2 text-xs text-blue-200 bg-blue-900/50">{date}</div>
              {convs.map(conv => (
                <button
                  key={conv.id}
                  className={`w-full text-left px-4 py-3 hover:bg-blue-800/60 focus:bg-blue-800/80 transition-all ${
                    selectedConvId === conv.id
                      ? 'bg-blue-800/80 text-white font-bold'
                      : 'text-blue-100'
                  }`}
                  onClick={() => setSelectedConvId(conv.id)}
                  aria-current={selectedConvId === conv.id}
                >
                  <div className="flex justify-between items-center">
                    <span>{conv.title || 'Conversation'}</span>
                    {conv.unreadCount[currentUserId] > 0 && (
                      <span className="bg-green-500 text-white text-xs rounded-full px-2 py-0.5 ml-2">
                        {conv.unreadCount[currentUserId]}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-blue-200 truncate">
                    {conv.lastMessage ? conv.lastMessage.content : 'No messages yet.'}
                  </div>
                  {isTyping[conv.id] && (
                    <div className="text-xs text-green-400 mt-1">Typing...</div>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>

      {/* Message Thread */}
      <main className="flex-1 flex flex-col bg-blue-950/80">
        {selectedConvId ? (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {loadingMsgs ? (
                <div className="text-blue-200">Loading messages...</div>
              ) : messages.length === 0 ? (
                <div className="text-blue-200">No messages yet.</div>
              ) : (
                <ul className="space-y-2">
                  {messages.map(msg => (
                    <li
                      key={msg.id}
                      className={`flex ${msg.senderId === currentUserId ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className="group relative">
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg shadow ${
                            msg.senderId === currentUserId
                              ? 'bg-green-600 text-white'
                              : 'bg-white/20 text-white'
                          }`}
                        >
                          <span>{msg.content}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-blue-200">
                              {new Date(msg.timestamp).toLocaleTimeString()}
                            </span>
                            {msg.senderId === currentUserId && (
                              <span className="text-xs">
                                {msg.status === 'read'
                                  ? '✓✓'
                                  : msg.status === 'delivered'
                                    ? '✓✓'
                                    : '✓'}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            className="text-blue-200 hover:text-white"
                            onClick={() => setSelectedMessage(msg)}
                          >
                            😀
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                  <div ref={messagesEndRef} />
                </ul>
              )}
            </div>

            {/* Message Composer */}
            <MessageComposer
              conversationId={selectedConvId}
              currentUserId={currentUserId}
              onSend={msg => setMessages(m => [...m, msg])}
              onTyping={() => setIsTyping(prev => ({ ...prev, [selectedConvId]: true }))}
              fileInputRef={fileInputRef}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-blue-200">
            Select a conversation
          </div>
        )}
      </main>

      {/* Reaction Picker */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-blue-900 p-4 rounded-lg shadow-lg">
            <div className="flex space-x-2">
              {['👍', '❤️', '😂', '😮', '😢', '🙏'].map(emoji => (
                <button
                  key={emoji}
                  className="text-2xl hover:scale-125 transition-transform"
                  onClick={() => {
                    handleReaction(selectedMessage.id, emoji)
                    setSelectedMessage(null)
                  }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileSelect}
        accept="image/*,.pdf,.doc,.docx"
      />
    </div>
  )
}

// Enhanced MessageComposer
interface MessageComposerProps {
  conversationId: string
  currentUserId: string
  onSend: (msg: Message) => void
  onTyping: () => void
  fileInputRef: React.RefObject<HTMLInputElement | null>
}

const MessageComposer: React.FC<MessageComposerProps> = ({
  conversationId,
  currentUserId,
  onSend,
  onTyping,
  fileInputRef,
}) => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return
    setLoading(true)
    setError(null)
    try {
      const msg = await MessageService.sendMessage(conversationId, currentUserId, value.trim())
      onSend(msg)
      setValue('')
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message || 'Failed to send message')
      } else {
        setError('Failed to send message')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend(e)
    } else {
      onTyping()
    }
  }

  return (
    <form
      className="flex items-center border-t border-white/10 p-2 bg-blue-950/90"
      onSubmit={handleSend}
    >
      <button
        type="button"
        className="p-2 text-blue-200 hover:text-white transition-colors"
        onClick={() => fileInputRef.current?.click()}
      >
        📎
      </button>
      <textarea
        className="flex-1 rounded px-3 py-2 bg-white/20 text-white focus:outline-none resize-none"
        placeholder="Type your message..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
        rows={1}
        aria-label="Type your message"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700 transition-all disabled:opacity-60"
        disabled={loading || !value.trim()}
      >
        {loading ? 'Sending...' : 'Send'}
      </button>
      {error && <span className="text-red-400 ml-4 text-xs">{error}</span>}
    </form>
  )
}

export default MessagingInterface
