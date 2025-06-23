import React, { useState } from 'react'
import {
  conversations,
  notifications,
  recommendedInvestors,
  recommendedFilmmakers,
} from '../data/messagesData.js'
import { Send, Bell, Users, Film } from 'lucide-react'
import ScheduleCallModal from './ScheduleCallModal'
import PlaceInvestmentModal from './PlaceInvestmentModal'

const MessagesPage = () => {
  const [selectedId, setSelectedId] = useState(conversations[0].id)
  const selectedConv = conversations.find(c => c.id === selectedId)
  const [input, setInput] = useState('')
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [showInvestmentModal, setShowInvestmentModal] = useState(false)

  const handleSend = () => {
    if (input.trim()) {
      // In a real app, this would update backend/state
      selectedConv.messages.push({ from: 'me', text: input, time: 'Now' })
      setInput('')
    }
  }

  return (
    <div className="flex h-[calc(100vh-0px)] bg-slate-900 text-white">
      {/* Left: Conversation List */}
      <aside className="w-72 border-r border-slate-800 bg-slate-900/80 p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Conversations</h2>
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <div
              key={conv.id}
              onClick={() => setSelectedId(conv.id)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer mb-2 transition-colors ${selectedId === conv.id ? 'bg-purple-600/40' : 'hover:bg-slate-800/60'}`}
            >
              <img
                src={conv.avatar}
                alt={conv.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="font-semibold">{conv.name}</div>
                <div className="text-xs text-slate-400 truncate max-w-[120px]">
                  {conv.lastMessage}
                </div>
              </div>
              {conv.unread > 0 && (
                <span className="bg-purple-500 text-xs px-2 py-0.5 rounded-full font-bold">
                  {conv.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Center: Chat Window */}
      <main className="flex-1 flex flex-col h-full">
        <div className="border-b border-slate-800 px-8 py-4 flex items-center gap-4 bg-slate-900/80">
          <img
            src={selectedConv.avatar}
            alt={selectedConv.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-bold text-lg">{selectedConv.name}</div>
            <div className="text-xs text-slate-400">
              {selectedConv.type === 'investor' ? 'Investor' : 'Filmmaker'}
            </div>
          </div>
          <div className="flex gap-2 ml-6">
            <button
              onClick={() => setShowScheduleModal(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-colors"
            >
              Schedule Call
            </button>
            <button
              onClick={() => setShowInvestmentModal(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-colors"
            >
              Place Investment
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4 bg-slate-900">
          {selectedConv.messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-lg px-4 py-2 rounded-2xl ${msg.from === 'me' ? 'bg-purple-600/80 text-white' : 'bg-slate-800/80 text-slate-200'}`}
              >
                {msg.text}
                <span className="block text-xs text-slate-400 mt-1 text-right">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 px-8 py-4 bg-slate-900/80 flex items-center gap-3">
          <input
            className="flex-1 bg-slate-800/60 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </main>

      {/* Right: Notifications & Recommendations */}
      <aside className="w-80 border-l border-slate-800 bg-slate-900/80 p-4 flex flex-col gap-8">
        {/* Notifications */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Bell className="text-purple-400" size={18} />
            <h3 className="font-bold text-md">Notifications</h3>
          </div>
          <ul className="space-y-2">
            {notifications.map(n => (
              <li
                key={n.id}
                className="text-sm text-slate-300 bg-slate-800/60 rounded-lg px-3 py-2 flex justify-between items-center"
              >
                <span>{n.text}</span>
                <span className="text-xs text-slate-500 ml-2">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Recommended Investors */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="text-purple-400" size={18} />
            <h3 className="font-bold text-md">Recommended Investors</h3>
          </div>
          <ul className="space-y-2">
            {recommendedInvestors.map(inv => (
              <li
                key={inv.id}
                className="flex items-center gap-3 bg-slate-800/60 rounded-lg px-3 py-2"
              >
                <img
                  src={inv.avatar}
                  alt={inv.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{inv.name}</div>
                  <div className="text-xs text-slate-400">{inv.specialty}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Recommended Filmmakers */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Film className="text-purple-400" size={18} />
            <h3 className="font-bold text-md">Recommended Filmmakers</h3>
          </div>
          <ul className="space-y-2">
            {recommendedFilmmakers.map(fm => (
              <li
                key={fm.id}
                className="flex items-center gap-3 bg-slate-800/60 rounded-lg px-3 py-2"
              >
                <img src={fm.avatar} alt={fm.name} className="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm">{fm.name}</div>
                  <div className="text-xs text-slate-400">{fm.project}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {showScheduleModal && (
        <ScheduleCallModal onClose={() => setShowScheduleModal(false)} name={selectedConv.name} />
      )}
      {showInvestmentModal && (
        <PlaceInvestmentModal
          onClose={() => setShowInvestmentModal(false)}
          name={selectedConv.name}
        />
      )}
    </div>
  )
}

export default MessagesPage
