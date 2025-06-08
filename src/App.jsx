import React from 'react'
import { useState, useEffect } from 'react'
import WelcomePage from './components/WelcomePage'
import PortalSelectionPage from './components/PortalSelectionPage'
import CreativePortal from './components/CreativePortal'
import FilmakersPortal from './components/FilmakersPortal'
import InvestorPortal from './components/InvestorPortal'
import TalentPortalComponent from './components/TalentPortalComponent'
import BrandsPortal from './components/BrandsPortal'
import MultiPortalSystem from './components/MultiPortalSystem'
import DemoLandingPage from './components/DemoLandingPage'
import AuthPortalSelection from './components/AuthPortalSelection'
import ProfileManager from './components/ProfileManager'
import FilmProjectDetailDemo from './components/FilmProjectDetailDemo'
import { authService } from './config/auth.js'

function App() {
  const [currentView, setCurrentView] = useState('welcome')
  const [hasValidCode, setHasValidCode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [showAccountSystem, setShowAccountSystem] = useState(false)

  useEffect(() => {
    // Check for existing authentication
    const user = authService.getCurrentUser()
    if (user && authService.isAuthenticated()) {
      setIsAuthenticated(true)
      setCurrentUser(user)
      setCurrentView(user.portal) // Go directly to user's portal
      setHasValidCode(true)
      return
    }

    const urlParams = new URLSearchParams(window.location.search)
    const portal = urlParams.get('portal')
    const hasCode = urlParams.get('code')
    const profile = urlParams.get('profile')
    const multiPortal = urlParams.get('multi-portal')

    // Check for multi-portal system access
    if (multiPortal === 'true') {
      setCurrentView('multi-portal')
      setHasValidCode(true)
      return
    }

    // Check for demo landing page access
    if (multiPortal === 'demo') {
      setCurrentView('demo-landing')
      setHasValidCode(true)
      return
    }

    // Check for direct profile access (persona access codes)
    if (portal && profile && hasCode) {
      setHasValidCode(true)
      setCurrentView(portal)
      
      // Store profile for pre-loading
      sessionStorage.setItem('selectedProfile', profile)
      sessionStorage.setItem('directAccess', 'true')
      return
    }

    // If there's a portal parameter and code, show portal selection or specific portal
    if (hasCode) {
      setHasValidCode(true)
      if (portal && !profile) {
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
    // Enhanced code validation with individual persona access codes
    const validCodes = [
      'INDIEGATE2024',  // Master access code for MVP demo
      'DEMO2025',      // Current demo code - portal selection overview
      'DEMO2024',      // Legacy demo code 
      'INDIE', 
      'FILMMAKER', 
      'INVESTOR', 
      'TALENT', 
      'BRANDS',
      'MULTI-PORTAL'   // New multi-portal system access code
    ]

    // Individual persona access codes for direct portal access
    const personaAccessCodes = {
      // Talent Portal Direct Access
      'SOPHIA-STAR': { portal: 'talent', profile: 'sophia' },
      'MARCUS-VOICE': { portal: 'talent', profile: 'marcus' },
      'ELENA-MODEL': { portal: 'talent', profile: 'elena' },
      'JAMES-SUPPORT': { portal: 'talent', profile: 'james' },
      'ARIA-DANCE': { portal: 'talent', profile: 'aria' },
      
      // Filmmaker Portal Direct Access
      'ALEX-DIRECTOR': { portal: 'filmmaker', profile: 'alex' },
      'RYAN-PRODUCER': { portal: 'filmmaker', profile: 'ryan' },
      'MAYA-CINEMA': { portal: 'filmmaker', profile: 'maya' },
      'DIEGO-EDIT': { portal: 'filmmaker', profile: 'diego' },
      'SARAH-CREW': { portal: 'filmmaker', profile: 'sarah' },
      
      // Investor Portal Direct Access
      'VENTURE-CAPITAL': { portal: 'investor', profile: 'victoria' },
      'ANGEL-FUNDS': { portal: 'investor', profile: 'michael' },
      'STRATEGIC-PARTNER': { portal: 'investor', profile: 'amanda' },
      'HIGH-NET-WORTH': { portal: 'investor', profile: 'robert' },
      'FILM-FINANCE': { portal: 'investor', profile: 'isabella' },
      
      // Brands Portal Direct Access
      'LUXURY-FASHION': { portal: 'brands', profile: 'elegance' },
      'TECH-INNOVATION': { portal: 'brands', profile: 'techflow' },
      'GOURMET-BRANDS': { portal: 'brands', profile: 'artisan' },
      'AUTO-LUXURY': { portal: 'brands', profile: 'premium' },
      'LIFESTYLE-CO': { portal: 'brands', profile: 'urban' }
    }
    
    const upperCode = code.toUpperCase()
    
    // Check for persona access codes first (direct access)
    if (personaAccessCodes[upperCode]) {
      const { portal, profile } = personaAccessCodes[upperCode]
      setHasValidCode(true)
      setCurrentView(portal)
      
      // Store the selected profile for pre-loading
      sessionStorage.setItem('selectedProfile', profile)
      sessionStorage.setItem('directAccess', 'true')
      
      const url = window.location.origin + window.location.pathname + `?portal=${portal}&profile=${profile}&code=${code}`
      window.history.pushState({}, '', url)
      window.scrollTo(0, 0) // Scroll to top on navigation
      return
    }
    
    // Check for standard access codes (overview access)
    if (validCodes.includes(upperCode)) {
      setHasValidCode(true)
      
      // Check for multi-portal system
      if (upperCode === 'MULTI-PORTAL') {
        setCurrentView('demo-landing')
        const url = window.location.origin + window.location.pathname + '?multi-portal=demo'
        window.history.pushState({}, '', url)
        window.scrollTo(0, 0) // Scroll to top on navigation
      } else {
        setCurrentView('portal-selection')
        const url = window.location.origin + window.location.pathname + '?code=' + code
        window.history.pushState({}, '', url)
        window.scrollTo(0, 0) // Scroll to top on navigation
      }
    } else {
      alert('Invalid registrant code. Try: DEMO2025, MULTI-PORTAL, or individual persona codes like SOPHIA-STAR')
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
      // Logout from authentication system
      authService.logout()
      setIsAuthenticated(false)
      setCurrentUser(null)
      setShowAccountSystem(false)

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

  const handleAuthSuccess = (user) => {
    setIsAuthenticated(true)
    setCurrentUser(user)
    setShowAccountSystem(false)
    setCurrentView(user.portal)
    setHasValidCode(true)
    
    // Update URL
    const url = window.location.origin + window.location.pathname + `?portal=${user.portal}&authenticated=true`
    window.history.pushState({}, '', url)
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleShowAccountSystem = () => {
    setShowAccountSystem(true)
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleProfileUpdate = (updatedUser) => {
    setCurrentUser(updatedUser)
  }

  const handleShowFilmDemo = () => {
    setCurrentView('film-detail-demo')
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleSelectPortal = portal => {
    console.log('handleSelectPortal called with portal:', portal)

    try {
      const baseUrl = window.location.origin + window.location.pathname.replace(/\/+$/, '') || ''
      const newUrl = `${baseUrl}?portal=${portal}&code=DEMO2025`
      window.history.pushState({}, '', newUrl)
      setCurrentView(portal)
      window.scrollTo(0, 0) // Scroll to top on navigation
    } catch (error) {
      console.error('Navigation error in handleSelectPortal:', error)
      setCurrentView(portal)
      window.scrollTo(0, 0) // Scroll to top on navigation
    }
  }

  const handleBackToPortalSelection = () => {
    setCurrentView('portal-selection')
    // Update URL to remove portal parameter but keep code
    const url = window.location.origin + window.location.pathname + '?code=DEMO2025'
    window.history.pushState({}, '', url)
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  // Show account system
  if (showAccountSystem) {
    return (
      <AuthPortalSelection 
        onBackToWelcome={handleBackToWelcome}
        onAuthSuccess={handleAuthSuccess}
      />
    )
  }

  // Show profile manager if requested
  if (currentView === 'profile' && isAuthenticated && currentUser) {
    return (
      <ProfileManager
        user={currentUser}
        onProfileUpdate={handleProfileUpdate}
        onBack={() => setCurrentView(currentUser.portal)}
      />
    )
  }

  // Show film project detail demo
  if (currentView === 'film-detail-demo') {
    return <FilmProjectDetailDemo />
  }

  // Welcome page - entry point
  if (currentView === 'welcome') {
    return <WelcomePage onEnterCode={handleEnterCode} onShowAccountSystem={handleShowAccountSystem} onShowFilmDemo={handleShowFilmDemo} />
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
      return <TalentPortalComponent 
        onLogout={handleLogout} 
        onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
        user={currentUser}
        isAuthenticated={isAuthenticated}
      />
    }
    return <CreativePortal 
      onLogout={handleLogout} 
      onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
      user={currentUser}
      isAuthenticated={isAuthenticated}
    />
  }

  if (currentView === 'investor') {
    return <InvestorPortal 
      onLogout={handleLogout} 
      onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
      user={currentUser}
      isAuthenticated={isAuthenticated}
    />
  }

  if (currentView === 'filmmaker') {
    return <CreativePortal 
      onLogout={handleLogout} 
      onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
      user={currentUser}
      isAuthenticated={isAuthenticated}
    />
  }

  if (currentView === 'talent-new') {
    return <TalentPortalComponent 
      onLogout={handleLogout} 
      onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
      user={currentUser}
      isAuthenticated={isAuthenticated}
    />
  }

  if (currentView === 'brand') {
    return <BrandsPortal 
      onLogout={handleLogout} 
      onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
      user={currentUser}
      isAuthenticated={isAuthenticated}
    />
  }

  // Demo Landing Page
  if (currentView === 'demo-landing') {
    return <DemoLandingPage onAccessMultiPortal={() => setCurrentView('multi-portal')} />
  }

  // Multi-Portal System
  if (currentView === 'multi-portal') {
    return <MultiPortalSystem />
  }

  // Default fallback
  return <WelcomePage onEnterCode={handleEnterCode} />
}

export default App
