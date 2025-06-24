import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useScrollToTop } from '../hooks/useScrollToTop'
import LogoutButton from './LogoutButton'

const sidebarItems = [
  'Dashboard',
  'Profile',
  'My Projects',
  'Funding Hub',
  'Investor Relations',
  'Smart Matching',
  'Analytics',
  'Messages',
]

const CreativePortal = ({ user = { profile: { displayName: 'Sarah Chen' } }, onLogout }) => {
  useScrollToTop()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Dashboard')

  const handleSidebarClick = label => {
    setActiveTab(label)
  }

  const handleLogout = () => {
    onLogout && onLogout()
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col py-8 px-4 justify-between">
        <div>
          <div className="mb-10 text-2xl font-extrabold tracking-tight">Filmmakers Portal</div>
          <nav>
            <ul className="space-y-2">
              {sidebarItems.map(label => (
                <li key={label}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === label
                        ? 'bg-purple-700 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                    onClick={() => handleSidebarClick(label)}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8">
          <LogoutButton onClick={handleLogout} />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Dashboard Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {activeTab === 'Dashboard' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
              {/* Active Projects Feed Widget Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">
                    Active Projects Feed
                  </h3>
                  <p className="text-slate-200">
                    Project cards, funding status, progress bars, and deadlines will appear here.
                  </p>
                </div>
                {/* Add more dashboard widgets here as needed */}
              </div>
            </div>
          )}
          {/* Placeholder for other tabs/subpages */}
          {activeTab !== 'Dashboard' && (
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
              <p className="text-slate-200">
                This page is under construction. Content for {activeTab} will be added soon.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default CreativePortal
