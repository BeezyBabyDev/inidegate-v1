import React, { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Button from './Button'
import TalentProfile from './TalentProfile'

// IndieGate.io Logo Component
const IndieGateLogo = ({ className = 'w-48 h-48' }) => (
  <svg className={className} viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="6a8c5b7ec9">
        <path d="M 120.957031 164 L 124 164 L 124 246 L 120.957031 246 Z M 120.957031 164 " />
      </clipPath>
      <clipPath id="4fc7104db6">
        <path d="M 217 164 L 219.121094 164 L 219.121094 246 L 217 246 Z M 217 164 " />
      </clipPath>
      <clipPath id="31d04d5236">
        <path d="M 129 251 L 211 251 L 211 254.039062 L 129 254.039062 Z M 129 251 " />
      </clipPath>
      <clipPath id="3ab85030a2">
        <path d="M 129 155.878906 L 211 155.878906 L 211 159 L 129 159 Z M 129 155.878906 " />
      </clipPath>
      <clipPath id="2cd0506edc">
        <path d="M 120.957031 245 L 130 245 L 130 254.039062 L 120.957031 254.039062 Z M 120.957031 245 " />
      </clipPath>
      <clipPath id="18c0799585">
        <path d="M 210 245 L 219.121094 245 L 219.121094 254.039062 L 210 254.039062 Z M 210 245 " />
      </clipPath>
      <clipPath id="ffe0e1546e">
        <path d="M 120.957031 155.878906 L 130 155.878906 L 130 165 L 120.957031 165 Z M 120.957031 155.878906 " />
      </clipPath>
      <clipPath id="a1166b37d2">
        <path d="M 210 155.878906 L 219.121094 155.878906 L 219.121094 165 L 210 165 Z M 210 155.878906 " />
      </clipPath>
      <clipPath id="d5b4ee2942">
        <path d="M 120.269531 155.191406 L 220.019531 155.191406 L 220.019531 254.941406 L 120.269531 254.941406 Z M 120.269531 155.191406 " />
      </clipPath>
      <clipPath id="2e51468ce6">
        <path d="M 155.878906 129 L 159 129 L 159 211 L 155.878906 211 Z M 155.878906 129 " />
      </clipPath>
      <clipPath id="b450a7bc7c">
        <path d="M 251 129 L 254.039062 129 L 254.039062 211 L 251 211 Z M 251 129 " />
      </clipPath>
      <clipPath id="2af6826ec6">
        <path d="M 164 217 L 246 217 L 246 219.121094 L 164 219.121094 Z M 164 217 " />
      </clipPath>
      <clipPath id="3a953b2d9d">
        <path d="M 164 120.957031 L 246 120.957031 L 246 124 L 164 124 Z M 164 120.957031 " />
      </clipPath>
      <clipPath id="f41a1ae786">
        <path d="M 155.878906 210 L 165 210 L 165 219.121094 L 155.878906 219.121094 Z M 155.878906 210 " />
      </clipPath>
      <clipPath id="132ac97bf0">
        <path d="M 245 210 L 254.039062 210 L 254.039062 219.121094 L 245 219.121094 Z M 245 210 " />
      </clipPath>
      <clipPath id="8041a60365">
        <path d="M 155.878906 120.957031 L 165 120.957031 L 165 130 L 155.878906 130 Z M 155.878906 120.957031 " />
      </clipPath>
      <clipPath id="de6ad0538d">
        <path d="M 245 120.957031 L 254.039062 120.957031 L 254.039062 130 L 245 130 Z M 245 120.957031 " />
      </clipPath>
      <clipPath id="6565f7c627">
        <path d="M 155.191406 120.269531 L 254.941406 120.269531 L 254.941406 220.019531 L 155.191406 220.019531 Z M 155.191406 120.269531 " />
      </clipPath>
    </defs>
    <g id="c9d97b454b">
      <g clipRule="nonzero" clipPath="url(#6a8c5b7ec9)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 123.25 245.800781 L 120.269531 245.800781 L 120.269531 164.332031 L 123.25 164.332031 Z M 123.25 245.800781 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#4fc7104db6)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 220.019531 245.800781 L 217.039062 245.800781 L 217.039062 164.332031 L 220.019531 164.332031 Z M 220.019531 245.800781 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#31d04d5236)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 210.878906 254.941406 L 129.410156 254.941406 L 129.410156 251.960938 L 210.878906 251.960938 Z M 210.878906 254.941406 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#3ab85030a2)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 210.878906 158.171875 L 129.410156 158.171875 L 129.410156 155.191406 L 210.878906 155.191406 Z M 210.878906 158.171875 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#2cd0506edc)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 123.25 251.960938 L 123.25 245.800781 L 120.269531 245.800781 L 120.269531 254.941406 L 129.410156 254.941406 L 129.410156 251.960938 Z M 123.25 251.960938 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#18c0799585)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 217.039062 251.960938 L 210.878906 251.960938 L 210.878906 254.941406 L 220.019531 254.941406 L 220.019531 245.800781 L 217.039062 245.800781 Z M 217.039062 251.960938 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#ffe0e1546e)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 123.25 158.171875 L 129.410156 158.171875 L 129.410156 155.191406 L 120.269531 155.191406 L 120.269531 164.332031 L 123.25 164.332031 Z M 123.25 158.171875 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#a1166b37d2)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
          d="M 217.039062 158.171875 L 217.039062 164.332031 L 220.019531 164.332031 L 220.019531 155.191406 L 210.878906 155.191406 L 210.878906 158.171875 Z M 217.039062 158.171875 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#d5b4ee2942)">
        <path
          style={{
            fill: 'none',
            strokeWidth: 30,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            stroke: '#2563eb',
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M 0.000475139 -0.00143315 L 0.000475139 133.279818 L 133.281727 133.279818 L 133.281727 -0.00143315 L 0.000475139 -0.00143315 "
          transform="matrix(-0.748417,0,0,-0.748417,220.019887,254.940334)"
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#2e51468ce6)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 158.171875 210.882812 L 155.191406 210.882812 L 155.191406 129.410156 L 158.171875 129.410156 Z M 158.171875 210.882812 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#b450a7bc7c)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 254.941406 210.882812 L 251.960938 210.882812 L 251.960938 129.410156 L 254.941406 129.410156 Z M 254.941406 210.882812 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#2af6826ec6)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 245.800781 220.019531 L 164.332031 220.019531 L 164.332031 217.039062 L 245.800781 217.039062 Z M 245.800781 220.019531 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#3a953b2d9d)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 245.800781 123.253906 L 164.332031 123.253906 L 164.332031 120.269531 L 245.800781 120.269531 Z M 245.800781 123.253906 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#f41a1ae786)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 158.171875 217.039062 L 158.171875 210.882812 L 155.191406 210.882812 L 155.191406 220.019531 L 164.332031 220.019531 L 164.332031 217.039062 Z M 158.171875 217.039062 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#132ac97bf0)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 251.960938 217.039062 L 245.800781 217.039062 L 245.800781 220.019531 L 254.941406 220.019531 L 254.941406 210.882812 L 251.960938 210.882812 Z M 251.960938 217.039062 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#8041a60365)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 158.171875 123.253906 L 164.332031 123.253906 L 164.332031 120.269531 L 155.191406 120.269531 L 155.191406 129.410156 L 158.171875 129.410156 Z M 158.171875 123.253906 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#de6ad0538d)">
        <path
          style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
          d="M 251.960938 123.253906 L 251.960938 129.410156 L 254.941406 129.410156 L 254.941406 120.269531 L 245.800781 120.269531 L 245.800781 123.253906 Z M 251.960938 123.253906 "
        />
      </g>
      <g clipRule="nonzero" clipPath="url(#6565f7c627)">
        <path
          style={{
            fill: 'none',
            strokeWidth: 80,
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            stroke: '#60a5fb',
            strokeOpacity: 1,
            strokeMiterlimit: 4,
          }}
          d="M -0.00146561 0.000449885 L -0.00146561 133.281701 L 133.279786 133.281701 L 133.279786 0.000449885 L -0.00146561 0.000449885 "
          transform="matrix(-0.748417,0,0,-0.748417,254.940309,220.019868)"
        />
      </g>
    </g>
  </svg>
)

const TalentPortalComponent = ({ onLogout, onBack }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()
  
  // Inject clean button styles
  React.useEffect(() => {
    const styleElement = document.createElement('style')
    styleElement.textContent = mobileStyles
    document.head.appendChild(styleElement)
    
    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])
  
  const [activeTab, setActiveTab] = useState('👤 Profile')
  const [currentView, setCurrentView] = useState('dashboard')
  const [selectedProfile, setSelectedProfile] = useState(null)

  const tabs = ['👤 Profile', '🎯 Dashboard', '🎬 Auditions', '🌐 Network', '📊 Analytics']

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile)
    setCurrentView('profile')
  }

  const handleBackToDashboard = () => {
    setSelectedProfile(null)
    setCurrentView('dashboard')
  }

  const handleBackToHome = () => {
    console.log('handleBackToHome called') // Debug log

    // Multiple fallback strategies for reliable navigation
    try {
      // Method 1: Use provided callback
      if (typeof onBack === 'function') {
        console.log('Using onBack callback')
        onBack()
        return
      }

      // Method 2: Use onLogout if available
      if (typeof onLogout === 'function') {
        console.log('Using onLogout callback')
        onLogout()
        return
      }

      // Method 3: Direct window navigation
      console.log('Using direct navigation')
      window.location.href = '/'
    } catch (error) {
      console.error('Navigation error:', error)
      // Final fallback
      window.location.href = '/'
    }
  }

  const renderDashboardTab = () => (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Auditions Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Active Auditions</h3>
          <p className="text-pink-200 mb-4">5 pending applications</p>
          <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
            View Applications
          </Button>
        </div>

        {/* Profile Views Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Profile Views</h3>
          <p className="text-pink-200 mb-4">347 views this month</p>
          <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">
            View Analytics
          </Button>
        </div>

        {/* Network Growth Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Network Growth</h3>
          <p className="text-pink-200 mb-4">23 new connections</p>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Expand Network
          </Button>
        </div>
      </div>

      {/* Recent Casting Opportunities */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Recent Casting Opportunities</h3>
        <div className="space-y-4">
          {/* Sample casting opportunities */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">"Midnight Dreams" - Lead Role</h4>
                <p className="text-pink-300">Indie Drama • Los Angeles</p>
                <p className="text-pink-200 text-sm mt-2">Female, 25-35, looking for emotionally complex lead character</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-200 text-xs rounded-full">Drama</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-200 text-xs rounded-full">Lead Role</span>
                  <span className="px-2 py-1 bg-pink-500/20 text-pink-200 text-xs rounded-full">Female</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-pink-300 font-medium">$2,500/day</p>
                <p className="text-pink-200 text-sm">Closes: Dec 15</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">95% Match</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">
                Apply Now
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-300 hover:bg-pink-500/20 text-sm">
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">"Urban Legends" - Supporting Actor</h4>
                <p className="text-pink-300">Thriller • Atlanta</p>
                <p className="text-pink-200 text-sm mt-2">Male, 30-40, charismatic supporting character with depth</p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-rose-500/20 text-rose-200 text-xs rounded-full">Thriller</span>
                  <span className="px-2 py-1 bg-rose-500/20 text-rose-200 text-xs rounded-full">Supporting</span>
                  <span className="px-2 py-1 bg-rose-500/20 text-rose-200 text-xs rounded-full">Male</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-pink-300 font-medium">$1,800/day</p>
                <p className="text-pink-200 text-sm">Closes: Dec 20</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">87% Match</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">
                Apply Now
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-300 hover:bg-pink-500/20 text-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Talent Profile</h3>
        
        {/* Profile Header */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">JD</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">Jane Doe</h4>
            <p className="text-pink-300">Lead Actress • Los Angeles, CA</p>
            <p className="text-pink-200 mt-2">Versatile performer with 8+ years experience in independent film and theater</p>
            <div className="flex space-x-2 mt-3">
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">Edit Profile</Button>
              <Button variant="outline" className="border-pink-500 text-pink-300 hover:bg-pink-500/20 text-sm">View Public Profile</Button>
            </div>
          </div>
        </div>

        {/* Skills & Specialties */}
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-white mb-3">Skills & Specialties</h5>
          <div className="flex flex-wrap gap-2">
            {['Drama', 'Comedy', 'Action', 'Voice Acting', 'Stage Combat', 'Method Acting', 'Improvisation'].map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-pink-500/20 text-pink-200 text-sm rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Recent Credits */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Recent Credits</h5>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">"Silent Waters" (2024)</h6>
              <p className="text-pink-300 text-sm">Lead Role - Sarah Mitchell</p>
              <p className="text-pink-200 text-xs">Dir. Michael Chen • Awarded Best Actress at Sundance</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">"City Dreams" (2023)</h6>
              <p className="text-pink-300 text-sm">Supporting Role - Emma Rodriguez</p>
              <p className="text-pink-200 text-xs">Dir. Lisa Park • Selected for Cannes Film Festival</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAuditionsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Audition Dashboard</h3>
        
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">12</p>
            <p className="text-pink-200 text-sm">Active Applications</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">8</p>
            <p className="text-pink-200 text-sm">Callbacks</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">3</p>
            <p className="text-pink-200 text-sm">Booked Roles</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">89%</p>
            <p className="text-pink-200 text-sm">Success Rate</p>
          </div>
        </div>

        {/* Application Status */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Recent Applications</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">"Midnight Dreams" - Lead Role</h5>
                <p className="text-pink-300 text-sm">Applied 3 days ago</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">Under Review</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">"Urban Legends" - Supporting</h5>
                <p className="text-pink-300 text-sm">Applied 1 week ago</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">Callback Scheduled</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">"The Voice Within" - Voice Over</h5>
                <p className="text-pink-300 text-sm">Applied 2 weeks ago</p>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">Booked!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderNetworkTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Professional Network</h3>
        
        {/* Network Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">156</p>
            <p className="text-pink-200 text-sm">Connections</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">23</p>
            <p className="text-pink-200 text-sm">Casting Directors</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">45</p>
            <p className="text-pink-200 text-sm">Fellow Actors</p>
          </div>
        </div>

        {/* Suggested Connections */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Suggested Connections</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">MC</span>
                </div>
                <div>
                  <h5 className="font-medium text-white">Michael Chen</h5>
                  <p className="text-pink-300 text-sm">Director • 2 mutual connections</p>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">Connect</Button>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-white">LP</span>
                </div>
                <div>
                  <h5 className="font-medium text-white">Lisa Park</h5>
                  <p className="text-pink-300 text-sm">Casting Director • 5 mutual connections</p>
                </div>
              </div>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white text-sm">Connect</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Performance Analytics</h3>
        
        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-pink-400">347</p>
            <p className="text-pink-200 text-sm">Profile Views</p>
            <p className="text-green-400 text-xs">+23% this month</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">89%</p>
            <p className="text-pink-200 text-sm">Callback Rate</p>
            <p className="text-green-400 text-xs">+15% vs industry avg</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">4.8</p>
            <p className="text-pink-200 text-sm">Rating</p>
            <p className="text-green-400 text-xs">Based on 42 reviews</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-400">$45K</p>
            <p className="text-pink-200 text-sm">Avg Annual Earnings</p>
            <p className="text-green-400 text-xs">+35% year over year</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
          <div className="space-y-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">Profile viewed by <span className="text-pink-400">Sarah Wilson (Casting Director)</span></p>
              <p className="text-pink-300">2 hours ago</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">Callback scheduled for <span className="text-pink-400">"Midnight Dreams"</span></p>
              <p className="text-pink-300">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (currentView === 'profile' && selectedProfile) {
    return (
      <TalentProfile
        talentData={selectedProfile}
        onBack={handleBackToDashboard}
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-900 to-purple-900">
      {/* Enhanced Mobile Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo + Text Combo - Mobile Optimized */}
            <div className="text-gray-900">
              <div className="flex items-center space-x-2 md:space-x-3">
                <IndieGateLogo className="w-12 h-12 md:w-16 md:h-16" />
                <div>
                  <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
                    IndieGate.<span className="text-blue-600">io</span>
                  </h1>
                  <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1">Talent Network</p>
                </div>
              </div>
            </div>

            {/* Navigation Actions - Mobile Optimized */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleBackToHome}
                className="text-xs md:text-sm text-gray-700 border-gray-300 hover:bg-gray-50 font-medium px-2 md:px-4 py-1 md:py-2"
              >
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">← Home</span>
              </Button>
              <Button
                onClick={onLogout}
                className="text-xs md:text-sm bg-pink-600 hover:bg-pink-700 text-white px-2 md:px-4 py-1 md:py-2"
              >
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Exit</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 md:px-6 py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section - Mobile Optimized */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Welcome to the Talent Network
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-pink-200 mb-6 md:mb-8">
              Connect with casting directors, audition for roles, and showcase your talent to the indie film community.
            </p>
          </div>

          {/* Mobile-First Tab Navigation */}
          <div className="mb-6 md:mb-8">
            {/* Mobile: Horizontal Scroll Tabs */}
            <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 border-0 outline-none focus:outline-none focus:ring-0 ${
                    activeTab === tab
                      ? 'bg-white text-pink-900 shadow-lg'
                      : 'bg-white/10 backdrop-blur-lg text-white hover:bg-white/20'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content with Mobile Optimization */}
          <div className="mb-6 md:mb-8">
            {activeTab === '👤 Profile' && renderProfileTab()}
            {activeTab === '🎯 Dashboard' && renderDashboardTab()}
            {activeTab === '🎬 Auditions' && renderAuditionsTab()}
            {activeTab === '🌐 Network' && renderNetworkTab()}
            {activeTab === '📊 Analytics' && renderAnalyticsTab()}
          </div>
        </div>
      </main>
    </div>
  )
}

// Add mobile-specific styles and clean button styling
const mobileStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Clean button styling - remove all default browser outlines */
  button:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  
  button:focus-visible {
    outline: none !important;
    box-shadow: none !important;
  }
  
  button:active {
    outline: none !important;
    box-shadow: none !important;
  }
  
  @media (max-width: 768px) {
    .mobile-card {
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .mobile-text-lg {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }
    
    .mobile-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`

export default TalentPortalComponent 