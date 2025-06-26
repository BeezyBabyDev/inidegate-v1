import { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Sidebar from './Sidebar'

const CreativePortal = ({ onLogout }) => {
  useScrollToTop()
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const handleSidebarClick = label => {
    setActiveTab(label)
  }

  const handleLogout = () => {
    onLogout && onLogout()
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        activeTab={activeTab}
        onTabClick={handleSidebarClick}
        onLogout={handleLogout}
        portalType="filmmaker"
      />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}
      >
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
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
