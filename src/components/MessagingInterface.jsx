import { useState, useRef } from 'react'
import Button from './Button'

const MessagingInterface = ({ contactUserId, contactName, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: contactUserId,
      senderName: contactName,
      content:
        "Hi! I saw your profile and I'm interested in discussing potential collaboration opportunities.",
      timestamp: '2024-01-15T10:30:00Z',
      type: 'text',
      read: true,
    },
    {
      id: 2,
      senderId: 'current-user',
      senderName: 'You',
      content: "Great to hear from you! I'd love to learn more about what you have in mind.",
      timestamp: '2024-01-15T10:45:00Z',
      type: 'text',
      read: true,
    },
  ])

  const [newMessage, setNewMessage] = useState('')
  const [showTemplates, setShowTemplates] = useState(false)
  const [attachments, setAttachments] = useState([])
  const fileInputRef = useRef(null)

  // Professional message templates for film industry
  const messageTemplates = {
    investor: [
      {
        title: 'Investment Inquiry',
        content:
          "Hi [Name],\n\nI hope this message finds you well. I came across your project and I'm very interested in learning more about the investment opportunity.\n\nCould we schedule a brief call to discuss:\n• Project budget and financing structure\n• Timeline and production schedule\n• Distribution strategy\n• Expected returns and exit strategy\n\nI look forward to hearing from you.\n\nBest regards,",
      },
      {
        title: 'Co-Investment Proposal',
        content:
          "Hello [Name],\n\nI'm reaching out regarding a potential co-investment opportunity. Based on our similar investment criteria and successful track record, I believe we could create significant value together.\n\nProject Details:\n• Budget: [Amount]\n• Genre: [Genre]\n• Stage: [Development/Pre-Production/Production]\n• Expected IRR: [Percentage]\n\nWould you be interested in reviewing the pitch deck?\n\nBest,",
      },
      {
        title: 'Deal Introduction',
        content:
          "Hi [Name],\n\nI wanted to introduce you to an exciting investment opportunity that aligns perfectly with your investment criteria.\n\n• Strong creative team with proven track record\n• Attractive financial terms and solid distribution plan\n• Tax incentives and completion bond in place\n• Timeline for funding: [Date]\n\nHappy to share the executive summary if you're interested.\n\nRegards,",
      },
    ],
    talent: [
      {
        title: 'Collaboration Inquiry',
        content:
          "Hi [Name],\n\nI hope you're doing well. I'm reaching out because I believe we could create something amazing together.\n\nProject Overview:\n• [Brief project description]\n• Budget: [Amount]\n• Timeline: [Dates]\n• My role: [Position]\n\nI'd love to discuss this opportunity further and answer any questions you might have.\n\nBest,",
      },
      {
        title: 'Portfolio Presentation',
        content:
          "Hello [Name],\n\nThank you for your interest in my work. I'm excited to share my portfolio and discuss how I can contribute to your project.\n\nRecent highlights:\n• [Project 1] - [Achievement]\n• [Project 2] - [Achievement]\n• [Project 3] - [Achievement]\n\nI've attached my reel and would welcome the opportunity to discuss your vision.\n\nLooking forward to hearing from you,",
      },
      {
        title: 'Project Pitch',
        content:
          "Hi [Name],\n\nI have an exciting project that I believe would be perfect for your investment portfolio.\n\nLogline: [One sentence description]\n\nKey Details:\n• Genre: [Genre]\n• Budget: [Amount]\n• Attachments: [Talent/Director]\n• Unique selling points: [What makes it special]\n• Market potential: [Target audience/distribution]\n\nI'd love to send you the pitch deck and discuss further.\n\nBest regards,",
      },
    ],
  }

  const handleSendMessage = () => {
    if (!newMessage.trim() && attachments.length === 0) return

    const message = {
      id: Date.now(),
      senderId: 'current-user',
      senderName: 'You',
      content: newMessage,
      timestamp: new Date().toISOString(),
      type: attachments.length > 0 ? 'mixed' : 'text',
      attachments: attachments,
      read: false,
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')
    setAttachments([])
  }

  const handleTemplateSelect = template => {
    setNewMessage(template.content)
    setShowTemplates(false)
  }

  const handleFileUpload = event => {
    const files = Array.from(event.target.files)
    const newAttachments = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }))
    setAttachments(prev => [...prev, ...newAttachments])
  }

  const removeAttachment = attachmentId => {
    setAttachments(prev => prev.filter(att => att.id !== attachmentId))
  }

  const formatFileSize = bytes => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatTimestamp = timestamp => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago'
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago'
    return date.toLocaleDateString()
  }

  const getFileIcon = fileType => {
    if (fileType.includes('pdf')) return '📄'
    if (fileType.includes('video')) return '🎬'
    if (fileType.includes('image')) return '🖼️'
    if (fileType.includes('audio')) return '🎵'
    if (fileType.includes('document') || fileType.includes('word')) return '📝'
    if (fileType.includes('spreadsheet') || fileType.includes('excel')) return '📊'
    return '📎'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {contactName ? contactName.charAt(0).toUpperCase() : 'U'}
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{contactName}</h2>
              <p className="text-sm text-green-600">● Online</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Video Call Button */}
            <Button
              variant="outline"
              className="p-2 text-gray-600 hover:text-blue-600"
              title="Video Call"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </Button>

            {/* Phone Call Button */}
            <Button
              variant="outline"
              className="p-2 text-gray-600 hover:text-green-600"
              title="Voice Call"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </Button>

            {/* Close Button */}
            <Button
              onClick={onClose}
              variant="outline"
              className="p-2 text-gray-600 hover:text-red-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.senderId === 'current-user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.senderId === 'current-user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>

                {/* Attachments */}
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {message.attachments.map(attachment => (
                      <div
                        key={attachment.id}
                        className={`flex items-center space-x-2 p-2 rounded ${
                          message.senderId === 'current-user' ? 'bg-blue-700' : 'bg-gray-200'
                        }`}
                      >
                        <span className="text-lg">{getFileIcon(attachment.type)}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{attachment.name}</p>
                          <p className="text-xs opacity-75">{formatFileSize(attachment.size)}</p>
                        </div>
                        <Button variant="ghost" className="p-1 h-auto text-xs">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs opacity-75">{formatTimestamp(message.timestamp)}</p>
                  {message.senderId === 'current-user' && (
                    <div className="flex items-center text-xs opacity-75">
                      {message.read ? '✓✓' : '✓'}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Attachments Preview */}
        {attachments.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-wrap gap-2">
              {attachments.map(attachment => (
                <div
                  key={attachment.id}
                  className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border"
                >
                  <span className="text-sm">{getFileIcon(attachment.type)}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{attachment.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(attachment.size)}</p>
                  </div>
                  <Button
                    onClick={() => removeAttachment(attachment.id)}
                    variant="ghost"
                    className="p-1 h-auto text-red-600 hover:text-red-800"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Template Selector */}
        {showTemplates && (
          <div className="px-6 py-3 border-t border-gray-200 bg-blue-50">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Professional Templates</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {messageTemplates.investor.concat(messageTemplates.talent).map((template, index) => (
                <Button
                  key={index}
                  onClick={() => handleTemplateSelect(template)}
                  variant="outline"
                  className="text-left p-2 h-auto"
                >
                  <div>
                    <p className="text-sm font-medium">{template.title}</p>
                    <p className="text-xs text-gray-600 truncate">
                      {template.content.substring(0, 50)}...
                    </p>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex items-end space-x-3">
            <div className="flex-1">
              <textarea
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                onKeyPress={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
              />
            </div>

            <div className="flex flex-col space-y-2">
              {/* Attachment Button */}
              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="p-2 text-gray-600 hover:text-blue-600"
                title="Attach File"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
              </Button>

              {/* Templates Button */}
              <Button
                onClick={() => setShowTemplates(!showTemplates)}
                variant="outline"
                className={`p-2 text-gray-600 hover:text-purple-600 ${showTemplates ? 'bg-purple-50' : ''}`}
                title="Message Templates"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </Button>

              {/* Send Button */}
              <Button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2"
                disabled={!newMessage.trim() && attachments.length === 0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </div>
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            multiple
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi,.mp3,.wav"
          />

          {/* Keyboard Shortcut Hint */}
          <p className="text-xs text-gray-500 mt-2">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessagingInterface
