import React, { useState } from 'react'
import Button from './Button'
import { useScrollToTop } from '../hooks/useScrollToTop'
import { authService } from '../config/auth.js'
import AuthDemo from './AuthDemo'

const WelcomePage = ({ onEnterCode, onShowAccountSystem, onGoToPortal }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()

  // Check if user is already authenticated
  const currentUser = authService.getCurrentUser()
  const isAuthenticated = authService.isAuthenticated()
  const [showAuthDemo, setShowAuthDemo] = useState(false)

  return React.createElement(
    'div',
    {
      className:
        'min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4',
    },
    React.createElement(
      'div',
      {
        className:
          'bg-white/10 backdrop-blur-lg rounded-xl p-8 max-w-md w-full text-center border border-white/20',
      },
      // Main heading and tagline
      React.createElement(
        'div',
        { className: 'mb-8' },
        // React.createElement(
        //   'h1',
        //   { className: 'text-3xl md:text-4xl font-bold text-white mb-4' },
        //   'Welcome to IndieGate.io'
        // ),
        // React.createElement(
        //   'p',
        //   { className: 'text-lg text-indigo-200 font-medium italic' },
        //   'Have a vision. Build a bridge. Keep it human.'
        // )
      ),

      // Ready to Get Started section
      React.createElement(
        'div',
        { className: 'mb-8' },
        React.createElement(
          'h2',
          { className: 'text-xl font-bold text-white mb-6' },
          'Ready to Get Started?'
        ),

        // Conditional action buttons based on authentication status
        React.createElement(
          'div',
          { className: 'space-y-4' },

          // If user is authenticated, show welcome back message and portal access
          isAuthenticated && currentUser
            ? [
                React.createElement(
                  'div',
                  {
                    key: 'welcome-back',
                    className: 'mb-4 p-4 bg-green-500/20 rounded-lg border border-green-400/30',
                  },
                  React.createElement(
                    'p',
                    { className: 'text-green-300 text-sm font-medium' },
                    `Welcome back, ${currentUser.firstName}!`
                  ),
                  React.createElement(
                    'p',
                    { className: 'text-green-200 text-xs mt-1' },
                    `${currentUser.portal.charAt(0).toUpperCase() + currentUser.portal.slice(1)} Portal Access`
                  )
                ),
                React.createElement(
                  Button,
                  {
                    key: 'go-to-portal',
                    onClick: () => onGoToPortal && onGoToPortal(currentUser.portal),
                    className:
                      'w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base',
                  },
                  `Go to My ${currentUser.portal.charAt(0).toUpperCase() + currentUser.portal.slice(1)} Portal`
                ),
                React.createElement(
                  Button,
                  {
                    key: 'sign-out',
                    onClick: () => {
                      authService.logout()
                      window.location.reload()
                    },
                    className:
                      'w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 text-sm',
                  },
                  'Sign Out'
                ),
              ]
            : [
                // If user is not authenticated, show login/register options
                React.createElement(
                  Button,
                  {
                    key: 'auth-system',
                    onClick: onShowAccountSystem,
                    className:
                      'w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base',
                  },
                  'Create Account or Sign In'
                ),
                React.createElement(
                  Button,
                  {
                    key: 'demo',
                    onClick: () => onEnterCode('DEMO2025'),
                    className:
                      'w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base',
                  },
                  'View Demo'
                ),
                // Authentication Demo Button (always visible for testing)
                React.createElement(
                  Button,
                  {
                    key: 'auth-demo',
                    onClick: () => setShowAuthDemo(true),
                    className:
                      'w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 text-sm',
                  },
                  '🔧 Test Authentication System'
                ),
              ]
        )
      ),

      // Authentication Demo Modal
      showAuthDemo &&
        React.createElement(AuthDemo, {
          onClose: () => setShowAuthDemo(false),
        })
    )
  )
}

export default WelcomePage
