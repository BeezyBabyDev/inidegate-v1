import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
import FilmProjectDetailDemo from './components/FilmProjectDetailDemo'
import DiscoverProfiles from './components/DiscoverProfiles'
import NetworkDashboard from './components/NetworkDashboard'
import MessagingPage from './components/MessagingPage'
import ProjectAuroraGate from './components/ProjectAuroraGate'
import { DashboardProvider } from './context/DashboardContext.tsx'
import MainLandingPage from './components/MainLandingPage'
import DistributorsPlatform from './components/DistributorsPlatform'
import FilmakersPortal from './components/FilmakersPortal'

function App() {
  const [currentView, setCurrentView] = useState('aurora-gate')
  const [hasValidCode, setHasValidCode] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [selectedPortal, setSelectedPortal] = useState(null)
  const [hasAuroraAccess, setHasAuroraAccess] = useState(false)
  const [auroraAccessGranted, setAuroraAccessGranted] = useState(() => {
    return sessionStorage.getItem('auroraAccessGranted') === 'true'
  })

  useEffect(() => {
    // Check for existing authentication
    const user = authService.getCurrentUser()
    if (user && authService.isAuthenticated()) {
      setIsAuthenticated(true)
      setCurrentUser(user)
      // Don't automatically redirect to portal - still require Aurora access
      setHasValidCode(true)
      return
    }

    const urlParams = new URLSearchParams(window.location.search)
    const portal = urlParams.get('portal')
    const hasCode = urlParams.get('code')
    const profile = urlParams.get('profile')
    const multiPortal = urlParams.get('multi-portal')

    // Only process these if Aurora access is granted
    if (hasAuroraAccess) {
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

      // Check for direct profile access
      if (portal && profile && hasCode) {
        setHasValidCode(true)
        setCurrentView(portal)
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
      }
    }
  }, [hasAuroraAccess])

  const handleAuroraAccess = () => {
    setHasAuroraAccess(true)
    setCurrentView('welcome')
  }

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
    setCurrentUser(null)
    setHasAuroraAccess(false) // Reset Aurora access on logout
    setCurrentView('aurora-gate') // Return to Aurora gate
    window.location.reload() // Ensure clean state
  }

  const handleLogout = () => {
    authService.logout()
    setIsAuthenticated(false)
    setCurrentUser(null)
    setHasAuroraAccess(false) // Reset Aurora access on logout
    setCurrentView('aurora-gate') // Return to Aurora gate
    window.location.reload() // Ensure clean state
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
      setCurrentView('auth-portal-selection')
      window.scrollTo(0, 0)
    }
  }

  const renderContent = () => {
    // Render based on authentication and view state
    if (currentView === 'aurora-gate') {
      // Show new landing page instead of ProjectAuroraGate
      return <MainLandingPage />
    }

    // After Aurora Gate, check for authentication or valid code
    if (!isAuthenticated && !hasValidCode) {
      return <WelcomePage onEnterCode={handleEnterCode} />
    }

    // Render MessagingPage if authenticated and currentView is 'messaging'
    if (isAuthenticated && currentView === 'messaging') {
      return <MessagingPage onBack={() => setCurrentView('investor')} user={currentUser} />
    }

    // Default fallback
    switch (currentView) {
      case 'welcome':
        return <WelcomePage onEnterCode={handleEnterCode} />
      case 'portal-selection':
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-4xl">
              <PortalSelectionPage
                onSelectPortal={handleSelectPortal}
                onBack={handleBackToWelcome}
              />
            </div>
          </div>
        )
      case 'multi-portal':
        return (
          <MultiPortalSystem
            onLogout={handleLogout}
            onSelectPortal={handleSelectPortal}
            onBack={handleBackToWelcome}
          />
        )
      case 'demo-landing':
        return <DemoLandingPage onSelectPortal={handleSelectPortal} onBack={handleBackToWelcome} />
      case 'auth-portal-selection':
        return (
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-4xl">
              <AuthPortalSelection
                onSelectPortal={handleSelectPortal}
                onBack={handleBackToWelcome}
              />
            </div>
          </div>
        )
      case 'creative':
        return <CreativePortal onLogout={handleLogout} />
      case 'investor':
        return (
          <DashboardProvider>
            <InvestorPortal onLogout={handleLogout} onShowFilmDemo={handleShowFilmDemo} />
          </DashboardProvider>
        )
      case 'talent':
        return <TalentPortalComponent onLogout={handleLogout} />
      case 'brands':
        return <BrandsPortal onLogout={handleLogout} />
      case 'discover':
        return <DiscoverProfiles onBack={() => setCurrentView(selectedPortal || 'investor')} />
      case 'film-detail-demo':
        return <FilmProjectDetailDemo onBack={() => setCurrentView(selectedPortal || 'investor')} />
      case 'network-dashboard':
        return <NetworkDashboard onBack={() => setCurrentView('investor')} />
      case 'distributors':
        return <DistributorsPlatform />
      case 'filmmaker':
        return <FilmakersPortal />
      default:
        return <WelcomePage onEnterCode={handleEnterCode} />
    }
  }

  // Overlay ProjectAuroraGate until access is granted
  if (!auroraAccessGranted) {
    return (
      <ProjectAuroraGate
        onAccessGranted={() => {
          sessionStorage.setItem('auroraAccessGranted', 'true')
          setAuroraAccessGranted(true)
        }}
      />
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route
          path="/portal/investor"
          element={
            <DashboardProvider>
              <InvestorPortal />
            </DashboardProvider>
          }
        />
        <Route
          path="/portal/investors"
          element={
            <DashboardProvider>
              <InvestorPortal />
            </DashboardProvider>
          }
        />
        <Route path="/portal/filmmaker" element={<FilmakersPortal />} />
        <Route path="/portal/brands" element={<BrandsPortal />} />
        <Route path="/portal/talent" element={<TalentPortalComponent />} />
        <Route path="/portal/distributors" element={<DistributorsPlatform />} />
        <Route path="/filmmakers/dashboard" element={<FilmakersPortal />} />
        <Route
          path="/investors/dashboard"
          element={
            <DashboardProvider>
              <InvestorPortal />
            </DashboardProvider>
          }
        />
        <Route path="/brands/dashboard" element={<BrandsPortal />} />
        <Route path="/talent/dashboard" element={<TalentPortalComponent />} />
        <Route path="/distributors/dashboard" element={<DistributorsPlatform />} />
        {/* fallback for unknown routes can be added here */}
      </Routes>
    </Router>
  )
}

export default App
