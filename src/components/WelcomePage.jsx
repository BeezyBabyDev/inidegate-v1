import React from 'react'
import { useState } from 'react'
import Button from './Button'

// Simple icon components as fallback since lucide-react isn't installed
const User = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '👤')
const Camera = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '🎬')
const TrendingUp = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '📈')
const Building = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '🏢')
const ArrowRight = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '→')
const Zap = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '⚡')

const WelcomePage = ({ onEnterCode, onShowAccountSystem, onShowFilmDemo }) => {
  const [registrantCode, setRegistrantCode] = useState('')
  const [error, setError] = useState('')
  const [showAccessRequest, setShowAccessRequest] = useState(false)
  const [selectedPortal, setSelectedPortal] = useState(null)
  const [showPortalSelection, setShowPortalSelection] = useState(false)
  
  // Debug log to confirm component is loading
  console.log('WelcomePage loaded with portal selection interface - FIXED ICON ISSUE')
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
            'bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md w-full border border-white/20',
        },
        React.createElement(
          'div',
          { className: 'text-center mb-6' },
          React.createElement(
            'h2',
            { className: 'text-2xl font-bold text-white mb-4' },
            'Ready to Get Started?'
          ),
          React.createElement(
            'p',
            { className: 'text-indigo-200 text-sm' },
            'Request access to the IndieGate.io platform'
          )
        ),
        React.createElement(
          'form',
          { action: 'https://formspree.io/f/mldneoov', method: 'POST', className: 'space-y-4' },
          React.createElement('input', {
            type: 'text',
            name: 'name',
            placeholder: 'Full Name *',
            className:
              'w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            required: true,
          }),
          React.createElement('input', {
            type: 'email',
            name: 'email',
            placeholder: 'Email Address *',
            className:
              'w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            required: true,
          }),
          React.createElement('input', {
            type: 'text',
            name: 'company',
            placeholder: 'Company/Organization',
            className:
              'w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500',
          }),
          React.createElement(
            'select',
            {
              name: 'role',
              className:
                'w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500',
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
            rows: 3,
            className:
              'w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none',
          }),
          React.createElement(
            'button',
            {
              type: 'submit',
              className:
                'w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm',
            },
            'Submit Access Request'
          )
        ),
        React.createElement(
          'div',
          { className: 'text-center mt-4' },
          React.createElement(
            'button',
            {
              onClick: () => setShowAccessRequest(false),
              className: 'text-indigo-300 hover:text-white transition-colors text-sm',
            },
            '← Back to Code Entry'
          )
        )
      )
    )
  }

  // Portal Selection View
  if (showPortalSelection && selectedPortal) {
    const portalConfig = {
      talent: {
        title: 'Talent Portal',
        color: 'from-red-500 to-pink-600',
        icon: User,
        codes: ['SOPHIA-STAR', 'MARCUS-VOICE', 'ELENA-MODEL', 'JAMES-SUPPORT', 'ARIA-DANCE'],
        description: 'Access your talent profile, auditions, and career opportunities'
      },
      filmmaker: {
        title: 'Filmmaker Portal',
        color: 'from-purple-500 to-indigo-600',
        icon: Camera,
        codes: ['ALEX-DIRECTOR', 'RYAN-PRODUCER', 'MAYA-CINEMA', 'DIEGO-EDIT', 'SARAH-CREW'],
        description: 'Manage your projects, find crew, and connect with investors'
      },
      investor: {
        title: 'Investor Network',
        color: 'from-green-500 to-emerald-600',
        icon: TrendingUp,
        codes: ['VENTURE-CAPITAL', 'ANGEL-FUNDS', 'STRATEGIC-PARTNER', 'HIGH-NET-WORTH', 'FILM-FINANCE'],
        description: 'Discover investment opportunities and manage your portfolio'
      },
      brands: {
        title: 'Brands Portal',
        color: 'from-orange-500 to-red-600',
        icon: Building,
        codes: ['LUXURY-FASHION', 'TECH-INNOVATION', 'GOURMET-BRANDS', 'AUTO-LUXURY', 'LIFESTYLE-CO'],
        description: 'Find product placement and brand partnership opportunities'
      }
    };

    const config = portalConfig[selectedPortal];
    const IconComponent = config.icon;

    return React.createElement(
      'div',
      {
        className: 'min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4'
      },
      React.createElement(
        'div',
        {
          className: 'bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md w-full border border-white/20'
        },
        React.createElement(
          'div',
          { className: 'text-center mb-6' },
          React.createElement(
            'div',
            { className: `w-12 h-12 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl` },
            React.createElement(IconComponent, { className: 'w-6 h-6 text-white' })
          ),
          React.createElement(
            'h2',
            { className: 'text-2xl font-bold text-white mb-4' },
            config.title
          ),
          React.createElement(
            'p',
            { className: 'text-indigo-200 text-sm' },
            config.description
          )
        ),

        React.createElement(
          'div',
          { className: 'space-y-4 mb-6' },
          React.createElement(
            'div',
            {},
            React.createElement(
              'p',
              { className: 'text-indigo-300 mb-2 text-sm font-medium' },
              'Enter your portal access code:'
            ),
            React.createElement(
              'form',
              { 
                onSubmit: (e) => {
                  e.preventDefault();
                  if (registrantCode.trim()) {
                    onEnterCode(registrantCode);
                  }
                },
                className: 'space-y-4' 
              },
              React.createElement('input', {
                type: 'text',
                placeholder: 'Enter portal access code',
                value: registrantCode,
                onChange: (e) => setRegistrantCode(e.target.value),
                className: 'w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              }),
              error && React.createElement('div', { className: 'text-red-400 text-center text-sm' }, error),
              React.createElement(
                'button',
                {
                  type: 'submit',
                  className: `w-full bg-gradient-to-r ${config.color} hover:opacity-90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm`
                },
                React.createElement('span', {}, `Enter ${config.title}`),
                React.createElement(ArrowRight, { className: 'w-4 h-4' })
              )
            )
          ),

          React.createElement(
            'div',
            {},
            React.createElement(
              'p',
              { className: 'text-indigo-300 mb-2 text-sm font-medium' },
              'Demo access codes:'
            ),
            React.createElement(
              'div',
              { className: 'grid grid-cols-1 gap-2' },
              config.codes.map((code, index) => 
                React.createElement(
                  'button',
                  {
                    key: index,
                    onClick: () => {
                      setRegistrantCode(code);
                      onEnterCode(code);
                    },
                    className: 'text-left p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group'
                  },
                  React.createElement(
                    'div',
                    { className: 'flex items-center justify-between' },
                    React.createElement(
                      'code',
                      { className: 'text-yellow-300 text-sm font-mono' },
                      code
                    ),
                    React.createElement(Zap, { className: 'w-4 h-4 text-indigo-300 group-hover:text-white transition-colors' })
                  )
                )
              )
            )
          )
        ),

        React.createElement(
          'div',
          { className: 'text-center mt-4' },
          React.createElement(
            'button',
            {
              onClick: () => {
                setShowPortalSelection(false);
                setSelectedPortal(null);
                setRegistrantCode('');
                setError('');
              },
              className: 'text-indigo-300 hover:text-white transition-colors text-sm'
            },
            '← Back to Portal Selection'
          )
        )
      )
    );
  }

  return React.createElement(
    'div',
    {
      className:
        'min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex flex-col',
    },
    React.createElement(
      'div',
      { className: 'text-center pt-6 md:pt-8 pb-3' },
      React.createElement(
        'h1',
        { className: 'text-lg md:text-2xl font-bold text-white mb-1' },
        'Welcome to IndieGate.io'
      ),
      React.createElement(
        'p',
        { className: 'text-sm md:text-base text-indigo-200 font-medium italic' },
        'Have a vision. Build a bridge. Keep it human.'
      )
    ),
    React.createElement(
      'div',
      { className: 'flex-1 flex items-start justify-center px-2 pt-2 pb-10' },
      React.createElement(
        'div',
        {
          className:
            'bg-white/10 backdrop-blur-lg rounded-xl p-3 max-w-xl w-full text-center border border-white/20',
        },
        React.createElement(
          'h2',
          { className: 'text-sm font-bold text-white mb-2' },
          'Ready to Get Started?'
        ),
        React.createElement(
          'p',
          { className: 'text-indigo-200 mb-2 text-sm' },
          'Enter your registrant code to access your portal'
        ),
                  React.createElement(
            'form',
            { onSubmit: handleSubmit, className: 'space-y-2' },
                      React.createElement('input', {
              type: 'text',
              placeholder: 'Enter registrant code',
              value: registrantCode,
              onChange: e => setRegistrantCode(e.target.value),
              className:
                'w-full px-2 py-1 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-500',
            }),
          error &&
            React.createElement('div', { className: 'text-red-400 text-center text-xs' }, error),
                      React.createElement(
              Button,
              {
                type: 'submit',
                className:
                  'w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-1 px-3 rounded-md transition-all duration-200 transform hover:scale-105 text-sm',
              },
              'Access Platform'
            )
        ),
                  React.createElement(
            'div',
            { className: 'mt-4 pt-3 border-t border-white/20' },
          React.createElement(
            'div',
            { className: 'space-y-2' },
            React.createElement(
              'div',
              {},
              React.createElement(
                'p',
                { className: 'text-indigo-300 mb-2 text-xs' },
                "Select your portal or enter an access code:"
              ),
              
              // Portal Selection Buttons
              React.createElement(
                'div',
                { className: 'grid grid-cols-2 gap-1 mb-3' },
                
                // Talent Portal Button
                React.createElement(
                  'button',
                  {
                    onClick: () => {
                      setSelectedPortal('talent');
                      setShowPortalSelection(true);
                    },
                    className: 'group bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white py-1 px-1.5 rounded-md transition-all duration-200 transform hover:scale-105 border border-white/20'
                  },
                  React.createElement(
                    'div',
                    { className: 'flex flex-col items-center space-y-0.5' },
                    React.createElement(User, { className: 'w-2 h-2' }),
                    React.createElement(
                      'span',
                      { className: 'text-xs font-semibold' },
                      'Talent'
                    )
                  )
                ),
                
                // Filmmaker Portal Button
                React.createElement(
                  'button',
                  {
                    onClick: () => {
                      setSelectedPortal('filmmaker');
                      setShowPortalSelection(true);
                    },
                    className: 'group bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white py-1 px-1.5 rounded-md transition-all duration-200 transform hover:scale-105 border border-white/20'
                  },
                  React.createElement(
                    'div',
                    { className: 'flex flex-col items-center space-y-0.5' },
                    React.createElement(Camera, { className: 'w-2 h-2' }),
                    React.createElement(
                      'span',
                      { className: 'text-xs font-semibold' },
                      'Filmmaker'
                    )
                  )
                ),
                
                // Investor Portal Button
                React.createElement(
                  'button',
                  {
                    onClick: () => {
                      setSelectedPortal('investor');
                      setShowPortalSelection(true);
                    },
                    className: 'group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-1 px-1.5 rounded-md transition-all duration-200 transform hover:scale-105 border border-white/20'
                  },
                  React.createElement(
                    'div',
                    { className: 'flex flex-col items-center space-y-0.5' },
                    React.createElement(TrendingUp, { className: 'w-2 h-2' }),
                    React.createElement(
                      'span',
                      { className: 'text-xs font-semibold' },
                      'Investor'
                    )
                  )
                ),
                
                // Brands Portal Button
                React.createElement(
                  'button',
                  {
                    onClick: () => {
                      setSelectedPortal('brands');
                      setShowPortalSelection(true);
                    },
                    className: 'group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-1 px-1.5 rounded-md transition-all duration-200 transform hover:scale-105 border border-white/20'
                  },
                  React.createElement(
                    'div',
                    { className: 'flex flex-col items-center space-y-0.5' },
                    React.createElement(Building, { className: 'w-2 h-2' }),
                    React.createElement(
                      'span',
                      { className: 'text-xs font-semibold' },
                      'Brands'
                    )
                  )
                )
              ),
              
              React.createElement(
                'div',
                { className: 'text-center space-y-1' },
                React.createElement(
                  'p',
                  { className: 'text-indigo-300 text-xs mb-1' },
                  "Quick demo codes:"
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap justify-center gap-1' },
                  React.createElement(
                    'code',
                    { className: 'text-yellow-300 bg-white/10 px-1 py-0.5 rounded text-xs cursor-pointer hover:bg-white/20 transition-colors',
                      onClick: () => { setRegistrantCode('DEMO2025'); } },
                    'DEMO2025'
                  ),
                  React.createElement(
                    'code',
                    { className: 'text-yellow-300 bg-white/10 px-1 py-0.5 rounded text-xs cursor-pointer hover:bg-white/20 transition-colors',
                      onClick: () => { setRegistrantCode('SOPHIA-STAR'); } },
                    'SOPHIA-STAR'
                  ),
                  React.createElement(
                    'code',
                    { className: 'text-yellow-300 bg-white/10 px-1 py-0.5 rounded text-xs cursor-pointer hover:bg-white/20 transition-colors',
                      onClick: () => { setRegistrantCode('ALEX-DIRECTOR'); } },
                    'ALEX-DIRECTOR'
                  ),
                  React.createElement(
                    'code',
                    { className: 'text-green-300 bg-white/10 px-1 py-0.5 rounded text-xs cursor-pointer hover:bg-white/20 transition-colors',
                      onClick: () => { setRegistrantCode('MULTI-PORTAL'); } },
                    'MULTI-PORTAL'
                  )
                )
              )
            ),
            React.createElement(
              'p',
              { className: 'text-indigo-300 mb-2 text-xs' },
              "Don't have a registrant code?"
            ),
            React.createElement(
              Button,
              {
                onClick: () => setShowAccessRequest(true),
                className:
                  'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-1 px-3 rounded-md transition-all duration-200 transform hover:scale-105 mb-2 text-sm',
              },
              'Request Access Code'
            ),
            React.createElement(
              'div',
              { className: 'text-center mt-2 pt-2 border-t border-white/20' },
              React.createElement(
                'p',
                { className: 'text-indigo-300 mb-2 text-xs' },
                "Ready to join IndieGate?"
              ),
                             React.createElement(
                 Button,
                 {
                   onClick: onShowAccountSystem,
                   className:
                     'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-1 px-3 rounded-md transition-all duration-200 transform hover:scale-105 text-sm mb-2',
                 },
                 'Create Account or Sign In'
               ),
               onShowFilmDemo && React.createElement(
                 Button,
                 {
                   onClick: onShowFilmDemo,
                   className:
                     'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-1 px-3 rounded-md transition-all duration-200 transform hover:scale-105 text-sm',
                 },
                 '🎬 View Film Investment Demo'
               )
            )
          )
        )
      )
    )
  )
}
export default WelcomePage
