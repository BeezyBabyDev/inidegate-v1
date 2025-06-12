import { useState } from 'react'
import Card from './Card'
import Button from './Button'
import InvestorProfileEditor from './InvestorProfileEditor'
import CommunityForum from './CommunityForum'
import SmartMatching from './SmartMatching'
import PublicProfile from './PublicProfile'
import MessagingInterface from './MessagingInterface'
import FilmProjectDetail from './FilmProjectDetail'
import { useScrollToTop, scrollToTop } from '../hooks/useScrollToTop'

// IndieGate.io Logo Component - Official Design (Exact same as landing page)
const IndieGateLogo = ({ className = 'w-16 h-16' }) => (
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

const InvestorPortal = ({ onLogout, onBack }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()
  
  const [activeTab, setActiveTab] = useState('👤 Profile')
  const [profileView, setProfileView] = useState('showcase')
  const [showPublicProfile, setShowPublicProfile] = useState(false)
  const [currentPublicProfileId, setCurrentPublicProfileId] = useState(null)
  const [messagingContact, setMessagingContact] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  // Sample investor profile data
  const [profileData, setProfileData] = useState({
    name: 'Jourdain Bell',
    primaryRole: 'Executive Producer',
    secondaryRole: 'Angel Investor',
    additionalRoles: ['Family Office', 'Strategic Partner'],
    location: 'Los Angeles, CA',
    memberSince: 'January 2023',
    bio: 'Experienced film industry executive and entrepreneur with deep expertise in independent film financing and distribution. Co-founder of IndieGate.io, passionate about empowering emerging filmmakers through strategic investment and mentorship.',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    company: 'Bell Entertainment Ventures',
    title: 'Managing Partner & Co-Founder',
    email: 'jourdain@indiegate.io',
    phone: '(310) 555-0123',
    website: 'www.bellentertainment.com',
    linkedin: 'linkedin.com/in/jourdainbell',
    investmentRange: '$250K - $3M',
    totalInvestments: '$12.8M',
    projectsFinanced: 24,
    averageROI: '315%',
    preferredGenres: ['Drama', 'Thriller', 'Documentary', 'Comedy'],
    investmentStage: ['Development', 'Pre-Production', 'Production'],
    budgetRange: { min: '100K', max: '3M' },
    verified: true,
  })

  const handleProfileSave = updatedProfile => {
    setProfileData(updatedProfile)
    setProfileView('showcase')
  }

  const handleProfileCancel = () => {
    setProfileView('showcase')
  }

  // Ensure we have a working back function
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

  // Public Profile Handlers
  const handleShowPublicProfile = userId => {
    setCurrentPublicProfileId(userId)
    setShowPublicProfile(true)
  }

  const handleBackToPortal = () => {
    setShowPublicProfile(false)
    setCurrentPublicProfileId(null)
  }

  const handleOpenMessaging = userId => {
    // Convert userId back to name for messaging
    const publicProfiles = {
      'sarah-montgomery': { name: 'Sarah Montgomery' },
      'michael-chen': { name: 'Michael Chen' },
      'david-park': { name: 'David Park' },
      'alex-rivera': { name: 'Alex Rivera' },
      'maria-santos': { name: 'Maria Santos' },
    }

    const profile = publicProfiles[userId]
    if (profile) {
      setMessagingContact({ userId, name: profile.name })
      setShowPublicProfile(false) // Close public profile when opening messaging
    }
  }

  const handleCloseMessaging = () => {
    setMessagingContact(null)
  }

  const renderProfileTab = () => {
    console.log('Profile tab is being rendered', profileData)

    if (profileView === 'editor') {
      return (
        <InvestorProfileEditor
          initialData={profileData}
          onSave={handleProfileSave}
          onCancel={handleProfileCancel}
        />
      )
    }

    return (
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">My Investor Profile</h2>
            <Button
              onClick={() => setProfileView('editor')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Edit Profile
            </Button>
          </div>

          <div className="flex items-start space-x-6">
            <div className="relative">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-lg text-green-400 font-medium">{profileData.primaryRole}</p>
              <p className="text-purple-200">{profileData.company}</p>
              <p className="text-sm text-gray-300 flex items-center mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {profileData.location}
              </p>
              <p className="text-sm text-gray-300 flex items-center mt-1">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Member since {profileData.memberSince}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">Investment Range</p>
              <p className="text-xl font-bold text-green-400">{profileData.investmentRange}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-200 leading-relaxed">{profileData.bio}</p>
        </div>

        {/* Investment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{profileData.totalInvestments}</div>
            <div className="text-sm text-green-100">Total Invested</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{profileData.projectsFinanced}</div>
            <div className="text-sm text-blue-100">Projects Financed</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{profileData.averageROI}</div>
            <div className="text-sm text-purple-100">Average ROI</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">A+</div>
            <div className="text-sm text-orange-100">Investor Rating</div>
          </div>
        </div>

        {/* Smart Matching Preferences */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">🤖 Smart Matching Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Preferred Genres</h4>
              <div className="flex flex-wrap gap-2">
                {profileData.preferredGenres.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600 text-purple-100 text-sm rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Investment Stages</h4>
              <div className="flex flex-wrap gap-2">
                {profileData.investmentStage.map((stage, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div>
              <h4 className="font-medium text-white mb-2">Budget Range</h4>
              <p className="text-green-400 font-semibold">
                {profileData.budgetRange.min} - {profileData.budgetRange.max}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Geographic Focus</h4>
              <p className="text-blue-400">Global Projects</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Target ROI</h4>
              <p className="text-purple-400">15-25% IRR</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white">{profileData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white">{profileData.phone}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span className="text-white">{profileData.website}</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-white">{profileData.linkedin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Availability */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg border border-green-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">🎯 Current Investment Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">Actively Investing</div>
              <div className="text-sm text-gray-300">Investment Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">$2.5M</div>
              <div className="text-sm text-gray-300">Available Capital</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">Q1 2024</div>
              <div className="text-sm text-gray-300">Next Review Cycle</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderDealFlowTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Active Investment Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 'midnight-brooklyn',
              title: 'Midnight in Brooklyn',
              genre: 'Drama',
              budget: '$2.8M',
              seeking: '$1.2M',
              equity: '15%',
              stage: 'Pre-Production',
              director: 'Sarah Chen',
              roi: 'Est. 280%',
              status: 'Hot Deal',
            },
            {
              id: 'digital-nomad',
              title: 'Digital Nomad',
              genre: 'Thriller',
              budget: '$1.5M',
              seeking: '$750K',
              equity: '12%',
              stage: 'Development',
              director: 'Mike Rodriguez',
              roi: 'Est. 320%',
              status: 'Featured',
            },
            {
              id: 'last-record-store',
              title: 'The Last Record Store',
              genre: 'Documentary',
              budget: '$500K',
              seeking: '$300K',
              equity: '20%',
              stage: 'Production',
              director: 'Alex Kim',
              roi: 'Est. 180%',
              status: 'Limited Time',
            },
          ].map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                  {project.status}
                </span>
              </div>
              <p className="text-green-200 text-sm">
                {project.genre} • {project.stage}
              </p>
              <p className="text-purple-200 text-sm">Director: {project.director}</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Budget:</span>
                  <span className="text-white">{project.budget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Seeking:</span>
                  <span className="text-green-400">{project.seeking}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Equity:</span>
                  <span className="text-blue-400">{project.equity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Est. ROI:</span>
                  <span className="text-green-400">{project.roi}</span>
                </div>
              </div>
              <Button
                size="sm"
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderPortfolioTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Investment Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">$12.8M</h4>
            <p className="text-green-100">Total Invested</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">$15.2M</h4>
            <p className="text-blue-100">Total Commitments</p>
          </div>
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">24</h4>
            <p className="text-indigo-100">Films Financed</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">315%</h4>
            <p className="text-purple-100">Average ROI</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-white mb-4">Recent Investments</h4>

        {/* Enhanced Table Header */}
        <div className="bg-white/5 rounded-lg mb-4">
          <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium text-gray-300 border-b border-white/10">
            <div>Project Name</div>
            <div>Status</div>
            <div>Commitment</div>
            <div>Fees</div>
            <div>Expenses</div>
            <div>Contributions</div>
          </div>

          {/* Investment Rows */}
          <div className="space-y-0">
            {[
              {
                title: 'The Silent Hour',
                stage: 'Completed',
                commitment: '$850K',
                fees: '$42.5K',
                expenses: '$78.2K',
                contributions: '$729.3K',
                status: 'success',
                statusColor: 'text-green-400',
              },
              {
                title: 'City of Dreams',
                stage: 'Post-Production',
                commitment: '$1.2M',
                fees: '$60K',
                expenses: '$124.8K',
                contributions: '$1.015M',
                status: 'pending',
                statusColor: 'text-yellow-400',
              },
              {
                title: 'Broken Chains',
                stage: 'Distribution',
                commitment: '$650K',
                fees: '$32.5K',
                expenses: '$89.7K',
                contributions: '$527.8K',
                status: 'success',
                statusColor: 'text-green-400',
              },
            ].map((investment, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-4 p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
              >
                <div>
                  <h5 className="font-medium text-white">{investment.title}</h5>
                </div>
                <div>
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      investment.status === 'success'
                        ? 'bg-green-900/30 text-green-400 border border-green-700/50'
                        : 'bg-yellow-900/30 text-yellow-400 border border-yellow-700/50'
                    }`}
                  >
                    {investment.stage}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-white">{investment.commitment}</p>
                </div>
                <div>
                  <p className="text-gray-300">{investment.fees}</p>
                </div>
                <div>
                  <p className="text-gray-300">{investment.expenses}</p>
                </div>
                <div>
                  <p className="font-medium text-blue-400">{investment.contributions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-700/30">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-300">Total Commitments</p>
              <p className="text-lg font-semibold text-white">$2.7M</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Total Fees</p>
              <p className="text-lg font-semibold text-yellow-400">$135K</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Total Expenses</p>
              <p className="text-lg font-semibold text-red-400">$292.7K</p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Net Contributions</p>
              <p className="text-lg font-semibold text-green-400">$2.272M</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-12 text-center">
      <div className="text-6xl mb-4">📈</div>
      <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard Coming Soon</h3>
      <p className="text-green-200">
        Advanced portfolio analytics and market insights will be available soon!
      </p>
    </div>
  )

  const renderCommunityTab = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
      <CommunityForum userType="investor" onShowPublicProfile={handleShowPublicProfile} />
    </div>
  )

  const renderSmartMatchingTab = () => (
    <div className="space-y-6">
      <SmartMatching userType="investor" userProfile={profileData} />
    </div>
  )

  // Main render logic - handle different views
  if (selectedProject) {
    return (
      <FilmProjectDetail
        onBack={() => setSelectedProject(null)}
        project={selectedProject}
      />
    )
  }

  if (showPublicProfile && currentPublicProfileId) {
    return (
      <>
        <PublicProfile
          userId={currentPublicProfileId}
          onBack={handleBackToPortal}
          onOpenMessaging={handleOpenMessaging}
        />
        {/* Messaging Interface */}
        {messagingContact && (
          <MessagingInterface
            contactUserId={messagingContact.userId}
            contactName={messagingContact.name}
            onClose={handleCloseMessaging}
          />
        )}
      </>
    )
  }

  // Enhanced IndieGate.io Header Component - Mobile Optimized
  const IndieGateHeader = () => {
    const handleLogoClick = () => {
      console.log('Logo clicked, calling handleBackToHome') // Debug log
      handleBackToHome()
    }

    const handleButtonClick = () => {
      console.log('Back to Home button clicked, calling handleBackToHome') // Debug log
      handleBackToHome()
    }

    return (
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24 lg:h-32">
            {/* Logo + Text Combo - Responsive sizing */}
            <div className="text-gray-900">
              <div
                className="flex items-center space-x-2 md:space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <IndieGateLogo className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                <div>
                  <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
                    IndieGate.<span className="text-blue-600">io</span>
                  </h1>
                  <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-1">Investor Portal</p>
                </div>
              </div>
            </div>

            {/* Navigation Actions - Mobile Optimized */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleButtonClick}
                className="text-xs md:text-sm text-gray-700 border-gray-300 hover:bg-gray-50 font-medium px-2 md:px-4 py-1 md:py-2"
              >
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">← Home</span>
              </Button>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs md:text-sm font-bold">JB</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
      <IndieGateHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Welcome Section - Mobile Optimized */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Welcome to the Investor Network
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-green-200 mb-6 md:mb-8">
            Discover groundbreaking indie film projects, analyze market opportunities, and build your entertainment portfolio with confidence.
          </p>
        </div>

        {/* Mobile-First Navigation Tabs */}
        <div className="mb-6 md:mb-8">
          {/* Mobile: Horizontal Scroll Tabs */}
          <div className="flex space-x-2 md:space-x-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button
              onClick={() => {
                setActiveTab('👤 Profile')
                scrollToTop()
              }}
              className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 ${
                activeTab === '👤 Profile'
                  ? 'bg-white text-green-900 shadow-lg'
                  : 'text-white hover:bg-white/10 bg-white/5'
              }`}
            >
              👤 Profile
            </button>
            <button
              onClick={() => {
                setActiveTab('📊 Portfolio')
                scrollToTop()
              }}
              className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 ${
                activeTab === '📊 Portfolio'
                  ? 'bg-white text-green-900 shadow-lg'
                  : 'text-white hover:bg-white/10 bg-white/5'
              }`}
            >
              📊 Portfolio
            </button>
            <button
              onClick={() => {
                setActiveTab('💰 Deal Flow')
                scrollToTop()
              }}
              className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 ${
                activeTab === '💰 Deal Flow'
                  ? 'bg-white text-green-900 shadow-lg'
                  : 'text-white hover:bg-white/10 bg-white/5'
              }`}
            >
              💰 Deal Flow
            </button>
            <button
              onClick={() => {
                setActiveTab('💬 Community')
                scrollToTop()
              }}
              className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 ${
                activeTab === '💬 Community'
                  ? 'bg-white text-green-900 shadow-lg'
                  : 'text-white hover:bg-white/10 bg-white/5'
              }`}
            >
              💬 Community
            </button>
            <button
              onClick={() => {
                setActiveTab('🤖 Smart Matching')
                scrollToTop()
              }}
              className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 ${
                activeTab === '🤖 Smart Matching'
                  ? 'bg-white text-green-900 shadow-lg'
                  : 'text-white hover:bg-white/10 bg-white/5'
              }`}
            >
              🤖 Smart Matching
            </button>
            <button
              onClick={() => {
                setActiveTab('📈 Analytics')
                scrollToTop()
              }}
              className={`whitespace-nowrap text-xs md:text-sm lg:text-base px-3 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all flex-shrink-0 ${
                activeTab === '📈 Analytics'
                  ? 'bg-white text-green-900 shadow-lg'
                  : 'text-white hover:bg-white/10 bg-white/5'
              }`}
            >
              📈 Analytics
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === '👤 Profile' && renderProfileTab()}
          {activeTab === '📊 Portfolio' && renderPortfolioTab()}
          {activeTab === '💰 Deal Flow' && renderDealFlowTab()}
          {activeTab === '💬 Community' && renderCommunityTab()}
          {activeTab === '🤖 Smart Matching' && renderSmartMatchingTab()}
          {activeTab === '📈 Analytics' && renderAnalyticsTab()}
        </div>
      </div>

      {/* Messaging Interface - Available from main portal */}
      {messagingContact && (
        <MessagingInterface
          contactUserId={messagingContact.userId}
          contactName={messagingContact.name}
          onClose={handleCloseMessaging}
        />
      )}
    </div>
  )
}

export default InvestorPortal
