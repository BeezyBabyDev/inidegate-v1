import React from 'react'
import { useState } from 'react'
import Button from './Button'
const WelcomePage = ({ onEnterCode }) => {
  const [registrantCode, setRegistrantCode] = useState('')
  const [error, setError] = useState('')
  const [showAccessRequest, setShowAccessRequest] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    if (!registrantCode.trim()) {
      setError('Please enter your registrant code')
      return
    }
    const validDemoCodes = ['Demo2025', 'DEMO2025', 'demo2025']
    if (validDemoCodes.includes(registrantCode) || registrantCode.length >= 4) {
      setError('')
      onEnterCode(registrantCode)
    } else {
      setError('Invalid registrant code')
    }
  }
  if (showAccessRequest) {
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
            'bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full border border-white/20',
        },
        React.createElement(
          'div',
          { className: 'text-center mb-8' },
          React.createElement(
            'h2',
            { className: 'text-3xl font-bold text-white mb-4' },
            'Ready to Get Started?'
          ),
          React.createElement(
            'p',
            { className: 'text-indigo-200' },
            'Request access to the IndieGate.io platform'
          )
        ),
        React.createElement(
          'form',
          { action: 'https://formspree.io/f/mldneoov', method: 'POST', className: 'space-y-6' },
          React.createElement('input', {
            type: 'text',
            name: 'name',
            placeholder: 'Full Name *',
            className:
              'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            required: true,
          }),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            placeholder: 'Email Address *',
            className:
              'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            required: true,
          }),
          React.createElement('input', {
            type: 'text',
            name: 'company',
            placeholder: 'Company/Organization',
            className:
              'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
          }),
          React.createElement(
            'select',
            {
              name: 'role',
              className:
                'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
            },
            React.createElement('option', { value: '' }, 'Select Your Role'),
            React.createElement('option', { value: 'Investor' }, 'Investor'),
            React.createElement('option', { value: 'Filmmaker' }, 'Filmmaker'),
            React.createElement('option', { value: 'Talent' }, 'Talent'),
            React.createElement('option', { value: 'Brand Partner' }, 'Brand Partner')
          ),
          React.createElement('textarea', {
            name: 'message',
            placeholder: 'Tell us about your interest in IndieGate.io...',
            rows: 4,
            className:
              'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none',
          }),
          React.createElement(
            'button',
            {
              type: 'submit',
              className:
                'w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105',
            },
            'Submit Access Request'
          )
        ),
        React.createElement(
          'div',
          { className: 'text-center mt-6' },
          React.createElement(
            'button',
            {
              onClick: () => setShowAccessRequest(false),
              className: 'text-indigo-300 hover:text-white transition-colors',
            },
            '← Back to Code Entry'
          )
        )
      )
    )
  }
  return React.createElement(
    'div',
    {
      className:
        'min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex flex-col',
    },
    React.createElement(
      'div',
      { className: 'text-center pt-20 md:pt-24 pb-12' },
      React.createElement(
        'h1',
        { className: 'text-4xl md:text-6xl font-bold text-white mb-6' },
        'Welcome to IndieGate.io'
      )
    ),
    React.createElement(
      'div',
      { className: 'flex-1 flex items-center justify-center px-4' },
      React.createElement(
        'div',
        {
          className:
            'bg-white/10 backdrop-blur-lg rounded-3xl p-12 max-w-md w-full text-center border border-white/20',
        },
        React.createElement(
          'h2',
          { className: 'text-3xl font-bold text-white mb-8' },
          'Ready to Get Started?'
        ),
        React.createElement(
          'p',
          { className: 'text-indigo-200 mb-8' },
          'Enter your registrant code to access your portal'
        ),
        React.createElement(
          'form',
          { onSubmit: handleSubmit, className: 'space-y-6' },
          React.createElement('input', {
            type: 'text',
            placeholder: 'Enter registrant code',
            value: registrantCode,
            onChange: e => setRegistrantCode(e.target.value),
            className:
              'w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
          }),
          error &&
            React.createElement('div', { className: 'text-red-400 text-center text-sm' }, error),
          React.createElement(
            Button,
            {
              type: 'submit',
              className:
                'w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105',
            },
            'Access Platform'
          )
        ),
        React.createElement(
          'div',
          { className: 'mt-8 pt-6 border-t border-white/20' },
          React.createElement(
            'p',
            { className: 'text-indigo-300 mb-4' },
            "Don't have a registrant code?"
          ),
          React.createElement(
            Button,
            {
              onClick: () => setShowAccessRequest(true),
              className:
                'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105',
            },
            'Request Access Code'
          )
        )
      )
    )
  )
}
export default WelcomePage
