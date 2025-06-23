import React, { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'

const CreativePortal = ({ user, onLogout }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeTab] = useState('dashboard')

  // Automatically scroll to top when component mounts
  useScrollToTop()

  // Placeholder data - replace with actual API calls
  const userProfile = {
    name: user?.profile?.displayName || 'Alex Grant',
    title: 'Director & Screenwriter',
    avatarUrl: user?.profile?.avatarUrl || 'https://i.pravatar.cc/150?u=alex-grant',
    bio: 'Award-winning director with a passion for character-driven narratives. Seeking to connect with innovative producers and investors for my next feature film, "The Crimson Script".',
    skills: ['Directing', 'Screenwriting', 'Editing', 'VFX'],
    portfolio: [
      { id: 1, title: 'Echoes of Yesterday', type: 'Short Film', year: 2022 },
      { id: 2, title: 'Neon Dreams', type: 'Music Video', year: 2021 },
    ],
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <div>Dashboard Content</div>
      case 'profile':
        return <div>Profile Content</div>
      case 'projects':
        return <div>Projects Content</div>
      case 'network':
        return <div>Network Content</div>
      default:
        return <div>Dashboard Content</div>
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 transition-all duration-300 ${isSidebarCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Sidebar content here */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
            {/* Menu Icon */}
          </button>
          <div>{userProfile.name}</div>
          <button onClick={onLogout}>Logout</button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  )
}

export default CreativePortal
