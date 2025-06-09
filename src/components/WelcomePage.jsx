import React from 'react'
import Button from './Button'
import { useScrollToTop } from '../hooks/useScrollToTop'

const WelcomePage = ({ onEnterCode, onShowAccountSystem, onShowFilmDemo }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()

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
        React.createElement(
          'h1',
          { className: 'text-3xl md:text-4xl font-bold text-white mb-4' },
          'Welcome to IndieGate.io'
        ),
        React.createElement(
          'p',
          { className: 'text-lg text-indigo-200 font-medium italic' },
          'Have a vision. Build a bridge. Keep it human.'
        )
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
        
        // Two main action buttons
        React.createElement(
          'div',
          { className: 'space-y-4' },
          React.createElement(
            Button,
            {
              onClick: onShowAccountSystem,
              className:
                'w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base',
            },
            'Create Account or Sign In'
          ),
          React.createElement(
            Button,
            {
              onClick: () => onEnterCode('DEMO2025'),
              className:
                'w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-base',
            },
            'View Demo'
          )
        )
      )
    )
  )
}

export default WelcomePage
