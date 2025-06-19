import { useState, useEffect, useRef } from 'react'
import Card from './Card'
import Button from './Button'
import { MessageService } from '../services/messageService'

const MessagingSystem = ({ match, currentUser, onClose }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [conversationId, setConversationId] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  // Helper to map backend message to frontend format
  const mapMessageFromBackend = msg => ({
    id: msg._id || msg.id,
    conversationId: msg.conversation?._id || msg.conversationId || msg.conversation,
    senderId: msg.sender?._id || msg.senderId || msg.sender,
    content: msg.content,
    timestamp: msg.createdAt || msg.timestamp,
    status: msg.status,
    read: msg.status === 'read',
  })

  // On mount, create or fetch conversation and load messages
  useEffect(() => {
    setLoading(true)
    setError(null)
    MessageService.createConversation([currentUser.id, match.id])
      .then(conv => {
        setConversationId(conv.id || conv._id)
        return MessageService.getMessages(conv.id || conv._id)
      })
      .then(res => setMessages(res.data.map(mapMessageFromBackend)))
      .catch(e => setError(e.message || 'Failed to load messages'))
      .finally(() => setLoading(false))
  }, [currentUser.id, match.id])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async e => {
    e.preventDefault()
    if (!newMessage.trim() || !conversationId) return
    setLoading(true)
    setError(null)
    try {
      const msg = await MessageService.sendMessage(
        conversationId,
        currentUser.id,
        newMessage.trim()
      )
      setMessages(prev => [...prev, mapMessageFromBackend(msg)])
      setNewMessage('')
    } catch (e) {
      setError(e.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  const formatTime = timestamp => {
    const now = new Date()
    const messageTime = new Date(timestamp)
    const diffInHours = (now - messageTime) / (1000 * 60 * 60)
    if (diffInHours < 1) {
      const diffInMins = Math.floor((now - messageTime) / (1000 * 60))
      return diffInMins < 1 ? 'Just now' : `${diffInMins}m ago`
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`
    } else {
      return messageTime.toLocaleDateString()
    }
  }

  const MessageBubble = ({ message, isOwn }) => (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
          isOwn ? 'bg-blue-500 text-white' : 'bg-white border border-gray-200 text-gray-900'
        }`}
      >
        <p className="text-sm">{message.content}</p>
        <p className={`text-xs mt-1 ${isOwn ? 'text-blue-100' : 'text-gray-500'}`}>
          {formatTime(message.timestamp)}
          {isOwn && <span className="ml-1">✓✓</span>}
        </p>
      </div>
    </div>
  )

  const EmojiPicker = ({ onEmojiSelect }) => {
    const emojis = ['😊', '👍', '❤️', '🎬', '🚀', '💯', '🔥', '👏', '💡', '⭐']
    return (
      <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-lg mb-2">
        {emojis.map(emoji => (
          <button
            key={emoji}
            onClick={() => onEmojiSelect(emoji)}
            className="text-lg hover:bg-gray-200 rounded p-1 transition-colors"
          >
            {emoji}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl h-3/4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img
              src={match.avatar}
              alt={match.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{match.name}</h3>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              📞 Call
            </Button>
            <Button size="sm" variant="outline">
              📹 Video
            </Button>
            <Button size="sm" variant="outline" onClick={onClose}>
              ✕
            </Button>
          </div>
        </div>

        {/* Match Info */}
        <div className="px-4 py-2 bg-purple-50 border-b border-purple-100">
          <div className="flex items-center justify-between text-sm">
            <span className="text-purple-700">
              🎯 <strong>{match.compatibility}%</strong> compatibility match
            </span>
            <span className="text-purple-600">
              {match.role || match.company} • {match.location}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {loading && <div className="text-blue-700">Loading...</div>}
          {error && <div className="text-red-500">{error}</div>}
          {messages.map(message => (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={message.senderId === currentUser.id}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <EmojiPicker onEmojiSelect={emoji => setNewMessage(prev => prev + emoji)} />

          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
            <Button type="submit" disabled={!newMessage.trim() || loading}>
              {loading ? 'Sending...' : 'Send 📤'}
            </Button>
          </form>

          <div className="mt-2 text-xs text-gray-500 text-center">
            💡 <strong>Pro Tip:</strong> Be specific about your project timeline and budget
            expectations
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MessagingSystem
