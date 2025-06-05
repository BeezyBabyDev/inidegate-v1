import React, { useState } from 'react';
// Simple icon components as fallback since lucide-react isn't installed
const User = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '👤')
const Camera = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '🎬')
const TrendingUp = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '📈')
const Building = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '🏢')
const Copy = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '📋')
const Check = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-green-400` }, '✓')
const ArrowRight = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '→')
const Users = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '👥')
const Star = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '⭐')
const Zap = ({ className }) => React.createElement('div', { className: `${className} flex items-center justify-center text-white` }, '⚡')

const DemoLandingPage = ({ onAccessMultiPortal }) => {
  const [copiedCredential, setCopiedCredential] = useState(null);

  // All 20 demo credentials organized by portal
  const demoCredentials = {
    talent: [
      { username: 'sophia.star', password: 'talent123', name: 'Sophia Martinez', role: 'Lead Actor', location: 'Los Angeles, CA' },
      { username: 'marcus.voice', password: 'talent456', name: 'Marcus Thompson', role: 'Voice Artist', location: 'New York, NY' },
      { username: 'elena.model', password: 'talent789', name: 'Elena Rodriguez', role: 'Model & Influencer', location: 'Miami, FL' },
      { username: 'james.support', password: 'talent321', name: 'James Wilson', role: 'Supporting Actor', location: 'Atlanta, GA' },
      { username: 'aria.dance', password: 'talent654', name: 'Aria Chen', role: 'Background Performer', location: 'Vancouver, BC' }
    ],
    filmmaker: [
      { username: 'alex.director', password: 'film123', name: 'Alexandra Brooks', role: 'Director', location: 'Los Angeles, CA' },
      { username: 'ryan.producer', password: 'film456', name: 'Ryan Mitchell', role: 'Producer', location: 'New York, NY' },
      { username: 'maya.cinema', password: 'film789', name: 'Maya Patel', role: 'Cinematographer', location: 'Toronto, ON' },
      { username: 'diego.edit', password: 'film321', name: 'Diego Santos', role: 'Post Production', location: 'Austin, TX' },
      { username: 'sarah.crew', password: 'film654', name: 'Sarah Johnson', role: 'Production Crew', location: 'Chicago, IL' }
    ],
    investor: [
      { username: 'venture.capital', password: 'invest123', name: 'Victoria Sterling', role: 'VC Partner', location: 'San Francisco, CA' },
      { username: 'angel.funds', password: 'invest456', name: 'Michael Chen', role: 'Angel Investor', location: 'Boston, MA' },
      { username: 'strategic.partner', password: 'invest789', name: 'Amanda Foster', role: 'Strategic Partner', location: 'Seattle, WA' },
      { username: 'high.net.worth', password: 'invest321', name: 'Robert Kim', role: 'HNWI', location: 'Dallas, TX' },
      { username: 'film.finance', password: 'invest654', name: 'Isabella Moore', role: 'Film Financier', location: 'London, UK' }
    ],
    brand: [
      { username: 'luxury.fashion', password: 'brand123', name: 'Elegance & Co', role: 'Fashion & Lifestyle', location: 'New York, NY' },
      { username: 'tech.innovation', password: 'brand456', name: 'TechFlow Solutions', role: 'Technology & Apps', location: 'Silicon Valley, CA' },
      { username: 'gourmet.brands', password: 'brand789', name: 'Artisan Foods Inc', role: 'Food & Beverage', location: 'Portland, OR' },
      { username: 'auto.luxury', password: 'brand321', name: 'Premium Motors', role: 'Automotive', location: 'Detroit, MI' },
      { username: 'lifestyle.co', password: 'brand654', name: 'Urban Living Co', role: 'Lifestyle Brand', location: 'Austin, TX' }
    ]
  };

  const portalConfigs = {
    talent: {
      title: 'Talent Portal',
      description: 'On-camera performers bringing stories to life',
      icon: <User className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-500',
      textColor: 'text-red-300',
      borderColor: 'border-red-500'
    },
    filmmaker: {
      title: 'Filmmaker Portal',
      description: 'Behind-the-camera professionals creating cinematic magic',
      icon: <Camera className="w-6 h-6" />,
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-500',
      textColor: 'text-purple-300',
      borderColor: 'border-purple-500'
    },
    investor: {
      title: 'Investor Network',
      description: 'Discover groundbreaking indie film investment opportunities',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500',
      textColor: 'text-green-300',
      borderColor: 'border-green-500'
    },
    brand: {
      title: 'Brands Portal',
      description: 'Companies seeking authentic product placement partnerships',
      icon: <Building className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500',
      textColor: 'text-orange-300',
      borderColor: 'border-orange-500'
    }
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCredential(id);
      setTimeout(() => setCopiedCredential(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CredentialCard = ({ credential, portal, index }) => {
    const config = portalConfigs[portal];
    const credentialId = `${portal}-${index}`;
    const fullCredential = `${credential.username} / ${credential.password}`;
    
    return (
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center text-white`}>
              {config.icon}
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">{credential.name}</h4>
              <p className={`text-xs ${config.textColor}`}>{credential.role}</p>
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(fullCredential, credentialId)}
            className={`p-2 rounded-lg border ${config.borderColor} border-opacity-30 hover:bg-opacity-20 transition-colors ${config.bgColor} bg-opacity-10`}
            title="Copy credentials"
          >
            {copiedCredential === credentialId ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-blue-200 text-xs">Username:</span>
            <code className="text-white bg-black bg-opacity-30 px-2 py-1 rounded text-xs font-mono">
              {credential.username}
            </code>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-blue-200 text-xs">Password:</span>
            <code className="text-white bg-black bg-opacity-30 px-2 py-1 rounded text-xs font-mono">
              {credential.password}
            </code>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-blue-200 text-xs">Location:</span>
            <span className="text-white text-xs">{credential.location}</span>
          </div>
        </div>
      </div>
    );
  };

  const PortalSection = ({ portalType, credentials }) => {
    const config = portalConfigs[portalType];
    
    return (
      <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
              {config.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{config.title}</h3>
              <p className="text-blue-200 text-sm">{config.description}</p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full ${config.bgColor} bg-opacity-20 ${config.textColor} text-sm font-medium border ${config.borderColor} border-opacity-30`}>
            {credentials.length} Accounts
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {credentials.map((credential, index) => (
            <CredentialCard 
              key={`${portalType}-${index}`}
              credential={credential}
              portal={portalType}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                IndieGate.io
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Multi-Portal Demo Access
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Test our platform with 20 individual persona access codes for direct portal access, 
              or browse all credentials with the multi-portal login system.
            </p>
            
            {/* Quick Access Button */}
            <button
              onClick={onAccessMultiPortal}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              <Zap className="w-6 h-6" />
              <span>Access Demo Login</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Platform Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-1">20</div>
            <div className="text-blue-200 text-sm">Demo Accounts</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-1">4</div>
            <div className="text-blue-200 text-sm">Portal Types</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-blue-200 text-sm">Production Ready</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 text-center border border-white border-opacity-20">
            <div className="text-3xl font-bold text-white mb-1">5</div>
            <div className="text-blue-200 text-sm">Users Per Portal</div>
          </div>
        </div>
      </div>

              {/* Demo Access Methods */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Two Ways to Access Demos</h3>
            <p className="text-blue-200 max-w-3xl mx-auto mb-8">
              Choose your preferred demo method: Individual Access Codes for direct portal entry, 
              or Multi-Portal Login System to browse all credentials.
            </p>
          </div>

          {/* Access Method Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-1 border border-white border-opacity-20">
              <div className="grid grid-cols-2 gap-1">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold">
                  Individual Access Codes
                </button>
                <button 
                  onClick={onAccessMultiPortal}
                  className="px-6 py-3 text-white hover:bg-white hover:bg-opacity-10 rounded-lg font-semibold transition-colors"
                >
                  Multi-Portal Login
                </button>
              </div>
            </div>
          </div>

          {/* Individual Access Codes Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">🚀 Individual Access Codes</h4>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Enter any of these codes on the welcome page for direct portal access with pre-loaded profiles.
              </p>
            </div>
            
            {/* Individual Access Code Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Talent Portal Codes */}
              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white">Talent Portal</h5>
                    <p className="text-red-300 text-sm">Direct access codes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { code: 'SOPHIA-STAR', name: 'Sophia Martinez', role: 'Lead Actor' },
                    { code: 'MARCUS-VOICE', name: 'Marcus Thompson', role: 'Voice Artist' },
                    { code: 'ELENA-MODEL', name: 'Elena Rodriguez', role: 'Model & Influencer' },
                    { code: 'JAMES-SUPPORT', name: 'James Wilson', role: 'Supporting Actor' },
                    { code: 'ARIA-DANCE', name: 'Aria Chen', role: 'Background Performer' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                      <div>
                        <div className="font-mono text-yellow-300 text-sm font-bold">{item.code}</div>
                        <div className="text-white text-xs">{item.name} - {item.role}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.code, item.code)}
                        className="p-2 rounded-lg border border-red-500 border-opacity-30 hover:bg-red-500 hover:bg-opacity-20 transition-colors"
                      >
                        {copiedCredential === item.code ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filmmaker Portal Codes */}
              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white">Filmmaker Portal</h5>
                    <p className="text-purple-300 text-sm">Direct access codes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { code: 'ALEX-DIRECTOR', name: 'Alexandra Brooks', role: 'Director' },
                    { code: 'RYAN-PRODUCER', name: 'Ryan Mitchell', role: 'Producer' },
                    { code: 'MAYA-CINEMA', name: 'Maya Patel', role: 'Cinematographer' },
                    { code: 'DIEGO-EDIT', name: 'Diego Santos', role: 'Post Production' },
                    { code: 'SARAH-CREW', name: 'Sarah Johnson', role: 'Production Crew' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                      <div>
                        <div className="font-mono text-yellow-300 text-sm font-bold">{item.code}</div>
                        <div className="text-white text-xs">{item.name} - {item.role}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.code, item.code)}
                        className="p-2 rounded-lg border border-purple-500 border-opacity-30 hover:bg-purple-500 hover:bg-opacity-20 transition-colors"
                      >
                        {copiedCredential === item.code ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investor Portal Codes */}
              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white">Investor Network</h5>
                    <p className="text-green-300 text-sm">Direct access codes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { code: 'VENTURE-CAPITAL', name: 'Victoria Sterling', role: 'VC Partner' },
                    { code: 'ANGEL-FUNDS', name: 'Michael Chen', role: 'Angel Investor' },
                    { code: 'STRATEGIC-PARTNER', name: 'Amanda Foster', role: 'Strategic Partner' },
                    { code: 'HIGH-NET-WORTH', name: 'Robert Kim', role: 'HNWI' },
                    { code: 'FILM-FINANCE', name: 'Isabella Moore', role: 'Film Financier' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                      <div>
                        <div className="font-mono text-yellow-300 text-sm font-bold">{item.code}</div>
                        <div className="text-white text-xs">{item.name} - {item.role}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.code, item.code)}
                        className="p-2 rounded-lg border border-green-500 border-opacity-30 hover:bg-green-500 hover:bg-opacity-20 transition-colors"
                      >
                        {copiedCredential === item.code ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands Portal Codes */}
              <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-white">Brands Portal</h5>
                    <p className="text-orange-300 text-sm">Direct access codes</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { code: 'LUXURY-FASHION', name: 'Elegance & Co', role: 'Fashion & Lifestyle' },
                    { code: 'TECH-INNOVATION', name: 'TechFlow Solutions', role: 'Technology & Apps' },
                    { code: 'GOURMET-BRANDS', name: 'Artisan Foods Inc', role: 'Food & Beverage' },
                    { code: 'AUTO-LUXURY', name: 'Premium Motors', role: 'Automotive' },
                    { code: 'LIFESTYLE-CO', name: 'Urban Living Co', role: 'Lifestyle Brand' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                      <div>
                        <div className="font-mono text-yellow-300 text-sm font-bold">{item.code}</div>
                        <div className="text-white text-xs">{item.name} - {item.role}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(item.code, item.code)}
                        className="p-2 rounded-lg border border-orange-500 border-opacity-30 hover:bg-orange-500 hover:bg-opacity-20 transition-colors"
                      >
                        {copiedCredential === item.code ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-white" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Multi-Portal Login Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">🔐 Multi-Portal Login System</h4>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Browse all 20 demo accounts with login credentials. Copy any username/password combination for testing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(demoCredentials).map(([portalType, credentials]) => (
                <PortalSection 
                  key={portalType}
                  portalType={portalType}
                  credentials={credentials}
                />
              ))}
            </div>
          </div>

        {/* Quick Access Section */}
        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white border-opacity-20">
          <h4 className="text-2xl font-bold text-white mb-4">Ready to Test?</h4>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
            Copy any credentials above, then click the button below to access the multi-portal login system. 
            Experience personalized dashboards, notifications, and industry-specific features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onAccessMultiPortal}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Users className="w-5 h-5" />
              <span>Enter Multi-Portal System</span>
            </button>
            
            <div className="flex items-center space-x-2 text-blue-200 text-sm">
              <Star className="w-4 h-4" />
              <span>No registration required</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-white mb-2">Personalized Profiles</h5>
            <p className="text-blue-200 text-sm">Each account has unique profile data, avatars, and industry-specific information</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-white mb-2">Real Notifications</h5>
            <p className="text-blue-200 text-sm">Experience realistic notification counts and activity feeds for each user type</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-lg font-semibold text-white mb-2">Instant Access</h5>
            <p className="text-blue-200 text-sm">No setup required - just copy credentials and start exploring the platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoLandingPage; 