import { useState, useEffect } from 'react'
import WelcomePage from './components/WelcomePage'
import PortalSelectionPage from './components/PortalSelectionPage'
import CreativePortal from './components/CreativePortal'
import FilmakersPortal from './components/FilmakersPortal'
import InvestorPortal from './components/InvestorPortal'
import TalentPortalComponent from './components/TalentPortalComponent'
import BrandsPortal from './components/BrandsPortal'

function App() {
  const [currentView, setCurrentView] = useState('welcome')
  const [hasValidCode, setHasValidCode] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const portal = urlParams.get('portal')
    const hasCode = urlParams.get('code')

    // If there's a portal parameter and code, show portal selection or specific portal
    if (hasCode) {
      setHasValidCode(true)
      if (portal) {
        setCurrentView(portal)
      } else {
        setCurrentView('portal-selection')
      }
    } else if (portal) {
      // Legacy URL support - redirect to portal selection
      setCurrentView('portal-selection')
      setHasValidCode(true)
    }
  }, [])

  const handleEnterCode = (code) => {
    // Enhanced code validation for MVP demo
    const validCodes = [
      'INDIEGATE2024',  // Master access code for MVP demo
      'DEMO2024', 
      'INDIE', 
      'FILMMAKER', 
      'INVESTOR', 
      'TALENT', 
      'BRANDS'
    ]
    
    if (validCodes.includes(code.toUpperCase())) {
      setHasValidCode(true)
      setCurrentView('portal-selection')
      
      // Update URL to include code
      const url = window.location.origin + window.location.pathname + '?code=' + code
      window.history.pushState({}, '', url)
    } else {
      alert('Invalid registrant code. Try the demo code: DEMO2024')
    }
  }

  const handleBackToWelcome = () => {
    setCurrentView('welcome')
    setHasValidCode(false)
    // Clear URL parameters
    const url = window.location.origin + window.location.pathname
    window.history.pushState({}, '', url)
    window.scrollTo(0, 0)
  }

  const handleLogout = () => {
    console.log('handleLogout called - navigating back to welcome page')

    try {
      // Clear any URL parameters and go to root
      const url = window.location.origin + window.location.pathname.replace(/\/+$/, '') || '/'
      window.history.pushState({}, '', url)
      setCurrentView('welcome')
      setHasValidCode(false)

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
      const newUrl = `${baseUrl}?portal=${portal}&code=DEMO2024`
      window.history.pushState({}, '', newUrl)
      setCurrentView(portal)
    } catch (error) {
      console.error('Navigation error in handleSelectPortal:', error)
      setCurrentView(portal)
    }
  }

  const handleBackToPortalSelection = () => {
    setCurrentView('portal-selection')
    // Update URL to remove portal parameter but keep code
    const url = window.location.origin + window.location.pathname + '?code=DEMO2024'
    window.history.pushState({}, '', url)
  }

  // Welcome page - entry point
  if (currentView === 'welcome') {
    return <WelcomePage onEnterCode={handleEnterCode} />
  }

  // Portal selection page - after code entry
  if (currentView === 'portal-selection') {
    return (
      <PortalSelectionPage 
        onSelectPortal={handleSelectPortal} 
        onBackToWelcome={handleBackToWelcome}
      />
    )
  }

  // Individual portal views
  if (currentView === 'filmmakers' || currentView === 'talent') {
    // Map 'talent' to CreativePortal for backward compatibility
    if (currentView === 'talent') {
      return <TalentPortalComponent onLogout={handleLogout} onBack={handleBackToPortalSelection} />
    }
    return <CreativePortal onLogout={handleLogout} onBack={handleBackToPortalSelection} />
  }

  if (currentView === 'investor') {
    return <InvestorPortal onLogout={handleLogout} onBack={handleBackToPortalSelection} />
  }

  if (currentView === 'talent-new') {
    return <TalentPortalComponent onLogout={handleLogout} onBack={handleBackToPortalSelection} />
  }

  if (currentView === 'brands') {
    return <BrandsPortal onLogout={handleLogout} onBack={handleBackToPortalSelection} />
  }

  // Default fallback
  return <WelcomePage onEnterCode={handleEnterCode} />
}

export default App
