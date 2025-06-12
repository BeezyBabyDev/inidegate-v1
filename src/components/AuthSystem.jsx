import React, { useState } from 'react'
import AccountLogin from './AccountLogin'
import AccountRegistration from './AccountRegistration'

const AuthSystem = ({ onAuthSuccess, onBack }) => {
  const [currentView, setCurrentView] = useState('login')

  const handleLoginSuccess = user => {
    onAuthSuccess(user)
  }

  const handleRegistrationSuccess = user => {
    onAuthSuccess(user)
  }

  const handleSwitchToRegister = () => {
    setCurrentView('register')
  }

  const handleSwitchToLogin = () => {
    setCurrentView('login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {currentView === 'login' && (
        <AccountLogin
          onLoginSuccess={handleLoginSuccess}
          onSwitchToRegister={handleSwitchToRegister}
          onBack={onBack}
        />
      )}
      {currentView === 'register' && (
        <AccountRegistration
          onRegistrationSuccess={handleRegistrationSuccess}
          onSwitchToLogin={handleSwitchToLogin}
          onBack={onBack}
        />
      )}
    </div>
  )
}

export default AuthSystem
