import React, { useState } from 'react'
import Button from './Button'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { authService } from '../config/auth.js'

const WelcomePage = ({ onEnterCode, onShowAccountSystem, onGoToPortal }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()

  // Check if user is already authenticated
  const currentUser = authService.getCurrentUser()
  const isAuthenticated = authService.isAuthenticated()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-md w-full text-center border border-white/20">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Ready to Get Started?</h2>

          <div className="space-y-4">
            {isAuthenticated && currentUser ? (
              <>
                <div className="mb-4 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
                  <p className="text-green-300 text-sm font-medium">
                    Welcome back, {currentUser.firstName}!
                  </p>
                  <p className="text-green-200 text-xs mt-1">
                    {currentUser.portal.charAt(0).toUpperCase() + currentUser.portal.slice(1)}{' '}
                    Portal Access
                  </p>
                </div>
                <Button
                  onClick={() => onGoToPortal && onGoToPortal(currentUser.portal)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base"
                >
                  Go to My{' '}
                  {currentUser.portal.charAt(0).toUpperCase() + currentUser.portal.slice(1)} Portal
                </Button>
                <Button
                  onClick={() => {
                    authService.logout()
                    window.location.reload()
                  }}
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 text-sm"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={onShowAccountSystem}
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base"
                >
                  Create Account or Sign In
                </Button>
                <Button
                  onClick={() => onEnterCode('DEMO2025')}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base"
                >
                  View Demo
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
