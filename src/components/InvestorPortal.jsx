import { useState } from 'react'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import InvestorDashboard from './dashboard/InvestorDashboard'
import InvestorProfile from './InvestorProfile'
import CommunityForum from './CommunityForum'
import SmartMatching from './SmartMatching'
import PortfolioPage from './PortfolioPage' // Import the new page
import DealFlowPage from './DealFlowPage' // Import the Deal Flow page
import AnalyticsPage from './AnalyticsPage' // Import the Analytics page
import MessagesPage from './MessagesPage' // Import the Messages page
import { useScrollToTop } from '../hooks/useScrollToTop'
import { useNavigate } from 'react-router-dom'

const InvestorPortal = () => {
  useScrollToTop()

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activeTab, setActiveTab] = useState('Dashboard')
  const navigate = useNavigate()

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  const handleLogout = () => {
    navigate('/')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <InvestorDashboard onSelectDeal={() => {}} />
      case 'Profile':
        return <InvestorProfile />
      case 'Portfolio':
        return <PortfolioPage /> // Render the new page here
      case 'Deal Flow':
        return <DealFlowPage />
      case 'Community':
        return <CommunityForum />
      case 'Smart Matching':
        return <SmartMatching />
      case 'Analytics':
        return <AnalyticsPage />
      case 'Messages':
        return <MessagesPage />
      default:
        return <InvestorDashboard onSelectDeal={() => {}} />
    }
  }

  return (
    <div className="flex bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white min-h-screen">
      <div className="fixed top-0 left-0 h-full z-30">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onLogout={handleLogout}
        />
      </div>
      <div
        className={`flex-1 flex flex-col h-screen transition-all duration-300 ${isSidebarCollapsed ? 'pl-20' : 'pl-64'}`}
      >
        <TopBar />
        <main className="flex-1 overflow-y-auto p-8">{renderContent()}</main>
      </div>
    </div>
  )
}

export default InvestorPortal
