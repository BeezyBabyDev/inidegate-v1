import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import CreativePortal from './components/CreativePortal'
import InvestorPortal from './components/InvestorPortal'
import TalentPortalComponent from './components/TalentPortalComponent'
import BrandsPortal from './components/BrandsPortal'
import { authService } from './config/auth'
import './styles/portal-styles.css'
import WelcomePage from './components/WelcomePage'
import PortalSelectionPage from './components/PortalSelectionPage'
import MultiPortalSystem from './components/MultiPortalSystem'
import DemoLandingPage from './components/DemoLandingPage'
import AuthPortalSelection from './components/AuthPortalSelection'
import ProfileManager from './components/ProfileManager'
import FilmProjectDetailDemo from './components/FilmProjectDetailDemo'
import DiscoverProfiles from './components/DiscoverProfiles'
import NetworkDashboard from './components/NetworkDashboard'
import MessagingPage from './components/MessagingPage'

function App() {
  const [currentView, setCurrentView] = useState('welcome')
  const [hasValidCode, setHasValidCode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [showAccountSystem, setShowAccountSystem] = useState(false)
  const [selectedPortal, setSelectedPortal] = useState(null)

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

  const handleEnterCode = code => {
    // Enhanced code validation with individual persona access codes
    const validCodes = [
      'INDIEGATE2024', // Master access code for MVP demo
      'DEMO2025', // Current demo code - portal selection overview
      'DEMO2024', // Legacy demo code
      'INDIE',
      'FILMMAKER',
      'INVESTOR',
      'TALENT',
      'BRANDS',
      'MULTI-PORTAL', // New multi-portal system access code
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
      'LIFESTYLE-CO': { portal: 'brands', profile: 'urban' },
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

      const url =
        window.location.origin +
        window.location.pathname +
        `?portal=${portal}&profile=${profile}&code=${code}`
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
      alert(
        'Invalid registrant code. Try: DEMO2025, MULTI-PORTAL, or individual persona codes like SOPHIA-STAR'
      )
    }
  }

  const handleBackToWelcome = () => {
    setCurrentView('welcome')
    setHasValidCode(false)
    setShowAccountSystem(false) // Reset account system state
    setSelectedPortal(null) // Reset selected portal
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
      setSelectedPortal(null)

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

  const handleAuthSuccess = user => {
    setIsAuthenticated(true)
    setCurrentUser(user)
    setShowAccountSystem(false)
    setCurrentView(user.portal)
    setHasValidCode(true)

    // Update URL
    const url =
      window.location.origin +
      window.location.pathname +
      `?portal=${user.portal}&authenticated=true`
    window.history.pushState({}, '', url)
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleShowAccountSystem = () => {
    setShowAccountSystem(true)
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleGoToPortal = portal => {
    setCurrentView(portal)
    setHasValidCode(true)
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleProfileUpdate = updatedUser => {
    setCurrentUser(updatedUser)
  }

  const handleShowFilmDemo = () => {
    setCurrentView('film-detail-demo')
    window.scrollTo(0, 0) // Scroll to top on navigation
  }

  const handleSelectPortal = portal => {
    console.log('handleSelectPortal called with portal:', portal)

    // Check if this is demo access (has valid code but no authentication)
    if (hasValidCode && !isAuthenticated) {
      // Allow demo access without authentication
      try {
        const baseUrl = window.location.origin + window.location.pathname.replace(/\/+$/, '') || ''
        const newUrl = `${baseUrl}?portal=${portal}&code=DEMO2025`
        window.history.pushState({}, '', newUrl)
        setCurrentView(portal)
        window.scrollTo(0, 0)
      } catch (error) {
        console.error('Navigation error in handleSelectPortal:', error)
        setCurrentView(portal)
        window.scrollTo(0, 0)
      }
      return
    }

    // Check if user is authenticated
    if (isAuthenticated && currentUser) {
      // If authenticated, check if user has access to this portal
      if (currentUser.portal === portal) {
        // User has access to this portal, navigate directly
        try {
          const baseUrl =
            window.location.origin + window.location.pathname.replace(/\/+$/, '') || ''
          const newUrl = `${baseUrl}?portal=${portal}&authenticated=true`
          window.history.pushState({}, '', newUrl)
          setCurrentView(portal)
          window.scrollTo(0, 0)
        } catch (error) {
          console.error('Navigation error in handleSelectPortal:', error)
          setCurrentView(portal)
          window.scrollTo(0, 0)
        }
      } else {
        // User doesn't have access to this portal, show message and redirect to their portal
        alert(
          `You are registered for the ${currentUser.portal} portal. Redirecting you to your portal.`
        )
        setCurrentView(currentUser.portal)
        window.scrollTo(0, 0)
      }
    } else {
      // User not authenticated, show authentication system for selected portal
      setSelectedPortal(portal)
      setShowAccountSystem(true)
      window.scrollTo(0, 0)
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
        selectedPortal={selectedPortal}
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
    return (
      <WelcomePage
        onEnterCode={handleEnterCode}
        onShowAccountSystem={handleShowAccountSystem}
        onShowFilmDemo={handleShowFilmDemo}
        onGoToPortal={handleGoToPortal}
      />
    )
  }

  // Portal selection page - after code entry
  if (currentView === 'portal-selection') {
    return (
      <>
        <PortalSelectionPage
          onSelectPortal={handleSelectPortal}
          onBackToWelcome={handleBackToWelcome}
        />
      </>
    )
  }

  // Individual portal views - Allow demo access or require authentication
  if (currentView === 'filmmakers' || currentView === 'talent') {
    // Allow demo access with valid code, or require authentication
    if (!isAuthenticated && !hasValidCode) {
      setSelectedPortal(currentView === 'talent' ? 'talent' : 'filmmaker')
      setShowAccountSystem(true)
      return null
    }

    // If authenticated, check if user has access to this specific portal
    // Allow demo users to access all portals for demonstration purposes
    const requiredPortal = currentView === 'talent' ? 'talent' : 'filmmaker'
    const isDemoUser = currentUser && currentUser.email && currentUser.email.includes('@demo.com')
    if (isAuthenticated && currentUser && currentUser.portal !== requiredPortal && !isDemoUser) {
      alert(`Access denied. You are registered for the ${currentUser.portal} portal.`)
      setCurrentView(currentUser.portal)
      return null
    }

    // Map 'talent' to CreativePortal for backward compatibility
    if (currentView === 'talent') {
      return (
        <>
          <TalentPortalComponent
            onLogout={handleLogout}
            onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
            user={currentUser}
            isAuthenticated={isAuthenticated}
          />
          <div className="fixed bottom-6 right-6 z-50 flex space-x-4">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
              onClick={() => setCurrentView('discover-profiles')}
              aria-label="Discover Profiles"
            >
              Discover Profiles
            </button>
          </div>
        </>
      )
    }
    return (
      <>
        <CreativePortal
          onLogout={handleLogout}
          onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
          user={currentUser}
          isAuthenticated={isAuthenticated}
        />
        <div className="fixed bottom-6 right-6 z-50 flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            onClick={() => setCurrentView('discover-profiles')}
            aria-label="Discover Profiles"
          >
            Discover Profiles
          </button>
        </div>
      </>
    )
  }

  if (currentView === 'investor') {
    // Allow demo access with valid code, or require authentication
    if (!isAuthenticated && !hasValidCode) {
      setSelectedPortal('investor')
      setShowAccountSystem(true)
      return null
    }

    // If authenticated, check if user has access to this specific portal
    // Allow demo users to access all portals for demonstration purposes
    const isDemoUser = currentUser && currentUser.email && currentUser.email.includes('@demo.com')
    if (isAuthenticated && currentUser && currentUser.portal !== 'investor' && !isDemoUser) {
      alert(`Access denied. You are registered for the ${currentUser.portal} portal.`)
      setCurrentView(currentUser.portal)
      return null
    }

    return (
      <>
        <InvestorPortal
          onLogout={handleLogout}
          onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
          user={currentUser}
          isAuthenticated={isAuthenticated}
          onShowMessages={() => setCurrentView('messages')}
        />
        <div className="fixed bottom-6 right-6 z-50 flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            onClick={() => setCurrentView('discover-profiles')}
            aria-label="Discover Profiles"
          >
            Discover Profiles
          </button>
        </div>
      </>
    )
  }

  if (currentView === 'filmmaker') {
    // Allow demo access with valid code, or require authentication
    if (!isAuthenticated && !hasValidCode) {
      setSelectedPortal('filmmaker')
      setShowAccountSystem(true)
      return null
    }

    // If authenticated, check if user has access to this specific portal
    // Allow demo users to access all portals for demonstration purposes
    const isDemoUser = currentUser && currentUser.email && currentUser.email.includes('@demo.com')
    if (isAuthenticated && currentUser && currentUser.portal !== 'filmmaker' && !isDemoUser) {
      alert(`Access denied. You are registered for the ${currentUser.portal} portal.`)
      setCurrentView(currentUser.portal)
      return null
    }

    return (
      <>
        <CreativePortal
          onLogout={handleLogout}
          onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
          user={currentUser}
          isAuthenticated={isAuthenticated}
        />
        <div className="fixed bottom-6 right-6 z-50 flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            onClick={() => setCurrentView('discover-profiles')}
            aria-label="Discover Profiles"
          >
            Discover Profiles
          </button>
        </div>
      </>
    )
  }

  if (currentView === 'talent-new') {
    // Allow demo access with valid code, or require authentication
    if (!isAuthenticated && !hasValidCode) {
      setSelectedPortal('talent')
      setShowAccountSystem(true)
      return null
    }

    // If authenticated, check if user has access to this specific portal
    // Allow demo users to access all portals for demonstration purposes
    const isDemoUser = currentUser && currentUser.email && currentUser.email.includes('@demo.com')
    if (isAuthenticated && currentUser && currentUser.portal !== 'talent' && !isDemoUser) {
      alert(`Access denied. You are registered for the ${currentUser.portal} portal.`)
      setCurrentView(currentUser.portal)
      return null
    }

    return (
      <>
        <TalentPortalComponent
          onLogout={handleLogout}
          onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
          user={currentUser}
          isAuthenticated={isAuthenticated}
        />
        <div className="fixed bottom-6 right-6 z-50 flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            onClick={() => setCurrentView('discover-profiles')}
            aria-label="Discover Profiles"
          >
            Discover Profiles
          </button>
        </div>
      </>
    )
  }

  if (currentView === 'brands' || currentView === 'brand') {
    // Allow demo access with valid code, or require authentication
    if (!isAuthenticated && !hasValidCode) {
      setSelectedPortal('brand')
      setShowAccountSystem(true)
      return null
    }

    // If authenticated, check if user has access to this specific portal
    // Allow demo users to access all portals for demonstration purposes
    const isDemoUser = currentUser && currentUser.email && currentUser.email.includes('@demo.com')
    if (isAuthenticated && currentUser && currentUser.portal !== 'brand' && !isDemoUser) {
      alert(`Access denied. You are registered for the ${currentUser.portal} portal.`)
      setCurrentView(currentUser.portal)
      return null
    }

    return (
      <>
        <BrandsPortal
          onLogout={handleLogout}
          onBack={isAuthenticated ? () => setCurrentView('profile') : handleBackToPortalSelection}
          user={currentUser}
          isAuthenticated={isAuthenticated}
        />
        <div className="fixed bottom-6 right-6 z-50 flex space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all"
            onClick={() => setCurrentView('discover-profiles')}
            aria-label="Discover Profiles"
          >
            Discover Profiles
          </button>
        </div>
      </>
    )
  }

  // Demo Landing Page
  if (currentView === 'demo-landing') {
    return <DemoLandingPage onAccessMultiPortal={() => setCurrentView('multi-portal')} />
  }

  // Multi-Portal System
  if (currentView === 'multi-portal') {
    return <MultiPortalSystem />
  }

  // Render DiscoverProfiles page
  if (currentView === 'discover-profiles') {
    return (
      <>
        <DiscoverProfiles />
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-gray-700 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-all"
            onClick={() => setCurrentView('portal-selection')}
          >
            Back to Portal Selection
          </button>
        </div>
      </>
    )
  }

  // Render NetworkDashboard page
  if (currentView === 'network-dashboard') {
    return (
      <>
        <NetworkDashboard currentUserId={currentUser?.id || 'user-1'} />
        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-gray-700 text-white px-6 py-2 rounded font-semibold hover:bg-gray-800 transition-all"
            onClick={() => setCurrentView('portal-selection')}
          >
            Back to Portal Selection
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition-all"
            onClick={() => setCurrentView('discover-profiles')}
          >
            Discover Profiles
          </button>
        </div>
      </>
    )
  }

  // Render MessagingPage
  if (currentView === 'messages') {
    return <MessagingPage onBack={() => setCurrentView('investor')} user={currentUser} />
  }

  // Default fallback
  return <WelcomePage onEnterCode={handleEnterCode} />
}

export default App
