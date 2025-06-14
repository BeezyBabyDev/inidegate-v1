import React, { useState } from 'react'
import AccountLogin from './AccountLogin'
import AccountRegistration from './AccountRegistration'

const AuthSystem = ({ portal, onAuthSuccess, onBack }) => {
  const [currentView, setCurrentView] = useState('login')

  const handleLoginSuccess = user => {
    onAuthSuccess && onAuthSuccess(user)
  }

  const handleRegistrationSuccess = user => {
    onAuthSuccess && onAuthSuccess(user)
  }

  const handleSwitchToRegister = () => {
    setCurrentView('register')
  }

  const handleSwitchToLogin = () => {
    setCurrentView('login')
  }

  // Default onLogin for test: always succeed
  const testLogin = async (email, password) => {
    return { success: true, user: { email, portal } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {currentView === 'login' && (
        <AccountLogin
          portal={portal}
          onLogin={testLogin}
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={handleSwitchToRegister}
          onBack={onBack}
        />
      )}
      {currentView === 'register' && (
        <AccountRegistration
          portal={portal}
          onRegistrationSuccess={handleRegistrationSuccess}
          onSwitchToLogin={handleSwitchToLogin}
          onBack={onBack}
        />
      )}
    </div>
  )
}

export default AuthSystem
