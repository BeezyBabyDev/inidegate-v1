import { useState, useEffect, useRef } from 'react'
import Card from './Card'
import Button from './Button'

const MessagingSystem = ({ match, currentUser, onClose }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [onlineStatus, setOnlineStatus] = useState('online')
  const messagesEndRef = useRef(null)

  // Mock messages for demonstration
  useEffect(() => {
    const mockMessages = [
      {
        id: 1,
        senderId: match.id,
        senderName: match.name,
        content: "Hi! I saw your project and I'm really interested. The concept looks amazing! 🎬",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
        read: true,
      },
      {
        id: 2,
        senderId: currentUser.id,
        senderName: currentUser.name,
        content: "Thank you! I'd love to discuss the investment opportunity. When would be a good time to chat?",
        timestamp: new Date(Date.now() - 3000000), // 50 mins ago
        read: true,
      },
      {
        id: 3,
        senderId: match.id,
        senderName: match.name,
        content: "I'm available this week. Could we schedule a call to go over the details? Also, I have some questions about the distribution strategy.",
        timestamp: new Date(Date.now() - 2400000), // 40 mins ago
        read: true,
      },
    ]
    setMessages(mockMessages)
  }, [match.id, currentUser.id])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      senderId: currentUser.id,
      senderName: currentUser.name,
      content: newMessage.trim(),
      timestamp: new Date(),
      read: false,
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')

    // Simulate typing indicator for response
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      // Simulate auto-reply
      if (Math.random() > 0.3) {
        const autoReply = {
          id: messages.length + 2,
          senderId: match.id,
          senderName: match.name,
          content: getAutoReply(newMessage),
          timestamp: new Date(Date.now() + 2000),
          read: false,
        }
        setMessages(prev => [...prev, autoReply])
      }
    }, 2000)
  }

  const getAutoReply = (message) => {
    const replies = [
      "That sounds great! Let me review and get back to you soon 👍",
      "Perfect! I'm excited to move forward with this project 🚀",
      "Thank you for the details. When can we schedule a meeting?",
      "I agree! This has huge potential. Let's discuss next steps 💯",
      "Absolutely! I'll have my team take a look and circle back 📈",
    ]
    return replies[Math.floor(Math.random() * replies.length)]
  }

  const formatTime = (timestamp) => {
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
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isOwn 
          ? 'bg-blue-500 text-white' 
          : 'bg-white border border-gray-200 text-gray-900'
      }`}>
        <p className="text-sm">{message.content}</p>
        <p className={`text-xs mt-1 ${
          isOwn ? 'text-blue-100' : 'text-gray-500'
        }`}>
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
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  onlineStatus === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`} />
                <span className="text-xs text-gray-500 capitalize">{onlineStatus}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">📞 Call</Button>
            <Button size="sm" variant="outline">📹 Video</Button>
            <Button size="sm" variant="outline" onClick={onClose}>✕</Button>
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
          {messages.map(message => (
            <MessageBubble
              key={message.id}
              message={message}
              isOwn={message.senderId === currentUser.id}
            />
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
                <p className="text-xs text-gray-500 mt-1">{match.name} is typing...</p>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <EmojiPicker onEmojiSelect={(emoji) => setNewMessage(prev => prev + emoji)} />
          
          <form onSubmit={handleSendMessage} className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button type="submit" disabled={!newMessage.trim()}>
              Send 📤
            </Button>
          </form>
          
          <div className="mt-2 text-xs text-gray-500 text-center">
            💡 <strong>Pro Tip:</strong> Be specific about your project timeline and budget expectations
          </div>
        </div>
      </Card>
    </div>
  )
}

export default MessagingSystem 