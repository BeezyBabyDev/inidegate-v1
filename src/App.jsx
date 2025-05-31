import { useState, useEffect } from 'react'
import LandingPage from './components/LandingPage'
import CreativePortal from './components/CreativePortal'
import InvestorPortal from './components/InvestorPortal'

function App() {
  const [currentView, setCurrentView] = useState('landing')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const portal = urlParams.get('portal')

    if (portal === 'talent') {
      setCurrentView('talent')
    } else if (portal === 'investor') {
      setCurrentView('investor')
    }
  }, [])

  const handleLogout = () => {
    console.log('handleLogout called - navigating back to landing page')

    try {
      // Clear any URL parameters and go to root
      const url = window.location.origin + window.location.pathname.replace(/\/+$/, '') || '/'
      window.history.pushState({}, '', url)
      setCurrentView('landing')

      // Scroll to top for clean landing
      window.scrollTo(0, 0)
    } catch (error) {
      console.error('Navigation error in handleLogout:', error)
      // Fallback to direct navigation
      window.location.href = '/'
    }
  }

  const handleSelectPortal = portal => {
    console.log('handleSelectPortal called with portal:', portal)

    try {
      const baseUrl = window.location.origin + window.location.pathname.replace(/\/+$/, '') || ''
      const newUrl = `${baseUrl}?portal=${portal}`
      window.history.pushState({}, '', newUrl)
      setCurrentView(portal)
    } catch (error) {
      console.error('Navigation error in handleSelectPortal:', error)
      setCurrentView(portal)
    }
  }

  if (currentView === 'landing') {
    return <LandingPage onSelectPortal={handleSelectPortal} />
  }

  if (currentView === 'talent') {
    return <CreativePortal onLogout={handleLogout} onBack={handleLogout} />
  }

  if (currentView === 'investor') {
    return <InvestorPortal onLogout={handleLogout} onBack={handleLogout} />
  }

  return <LandingPage onSelectPortal={handleSelectPortal} />
}

export default App
