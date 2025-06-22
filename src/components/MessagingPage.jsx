import { useEffect, useState } from 'react'
import TopBar from './TopBar'
import { MessageService } from '../services/messageService'

export default function MessagingPage({ onBack, user }) {
  const [conversations, setConversations] = useState([])
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messages, setMessages] = useState([])
  const [diagnostics, setDiagnostics] = useState({
    api: false,
    conversations: false,
    messages: false,
  })
  const [loading, setLoading] = useState(false)

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

  // Fetch conversations on mount
  useEffect(() => {
    setLoading(true)
    MessageService.getConversations(user.id)
      .then(data => {
        setConversations(data)
        setDiagnostics(d => ({ ...d, api: true, conversations: true }))
        setLoading(false)
      })
      .catch(() => {
        setDiagnostics(d => ({ ...d, api: false, conversations: false }))
        setLoading(false)
      })
  }, [user.id])

  // Fetch messages for selected conversation
  useEffect(() => {
    if (!selectedConversation) return
    setLoading(true)
    MessageService.getMessages(selectedConversation.id || selectedConversation._id)
      .then(res => {
        setMessages(res.data.map(mapMessageFromBackend))
        setDiagnostics(d => ({ ...d, messages: true }))
        setLoading(false)
      })
      .catch(() => {
        setDiagnostics(d => ({ ...d, messages: false }))
        setLoading(false)
      })
  }, [selectedConversation])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <TopBar onBack={onBack} user={user} />
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div
          className="w-full max-w-4xl rounded-2xl shadow-2xl p-8 backdrop-blur-xl bg-white/20 border border-white/30 relative min-h-[60vh] bg-blue-900/80"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">Messaging System Diagnostics</h2>
            <button
              onClick={onBack}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
            >
              Back
            </button>
          </div>
          <div className="mb-6 flex space-x-4">
            <div
              className={`px-4 py-2 rounded-lg font-semibold ${diagnostics.api ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}
            >
              API {diagnostics.api ? 'Online' : 'Offline'}
            </div>
            <div
              className={`px-4 py-2 rounded-lg font-semibold ${diagnostics.conversations ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}
            >
              Conversations {diagnostics.conversations ? 'OK' : 'Error'}
            </div>
            <div
              className={`px-4 py-2 rounded-lg font-semibold ${diagnostics.messages ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}
            >
              Messages {diagnostics.messages ? 'OK' : 'Error'}
            </div>
          </div>
          {!diagnostics.api && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
              Unable to connect to the backend messaging API. Please ensure the backend server is
              running.
              <br />
              Run <code>node server/index.js</code> in your <b>/server</b> directory.
            </div>
          )}
          <div className="flex gap-8">
            {/* Conversation List */}
            <div className="w-1/3 bg-white/30 rounded-xl p-4 backdrop-blur-md border border-white/20 shadow-lg">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Conversations</h3>
              {loading && <div className="text-blue-700">Loading...</div>}
              {conversations.map(conv => (
                <div
                  key={conv.id || conv._id}
                  className={`p-3 rounded-lg mb-2 cursor-pointer transition-all ${selectedConversation && (selectedConversation.id || selectedConversation._id) === (conv.id || conv._id) ? 'bg-blue-500/30 text-white' : 'hover:bg-blue-200/40 text-blue-900'}`}
                  onClick={() => setSelectedConversation(conv)}
                >
                  <div className="font-semibold">{(conv.participants || []).join(' & ')}</div>
                  <div className="text-xs text-blue-200">{conv.lastMessage?.content}</div>
                </div>
              ))}
            </div>
            {/* Message Thread */}
            <div className="flex-1 bg-white/30 rounded-xl p-4 backdrop-blur-md border border-white/20 shadow-lg min-h-[300px]">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Messages</h3>
              {loading && <div className="text-blue-700">Loading...</div>}
              {messages.length === 0 && (
                <div className="text-blue-200">Select a conversation to view messages.</div>
              )}
              <div className="space-y-4">
                {messages.map(msg => (
                  <div key={msg.id} className="p-3 rounded-lg bg-white/60 shadow text-blue-900">
                    <div className="font-semibold">{msg.senderId}</div>
                    <div>{msg.content}</div>
                    <div className="text-xs text-blue-500 mt-1">
                      {msg.status} • {new Date(msg.timestamp).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
