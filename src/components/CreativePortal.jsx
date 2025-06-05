import { useState, useEffect } from 'react'
import Card from './Card'
import Button from './Button'
import TalentProfile from './TalentProfile'
import TalentProfileEditor from './TalentProfileEditor'
import CommunityForum from './CommunityForum'
import SmartMatching from './SmartMatching'
import PublicProfile from './PublicProfile'
import MessagingInterface from './MessagingInterface'

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

const CreativePortal = ({ onLogout, onBack }) => {
  const [activeTab, setActiveTab] = useState('👤 Profile')
  const [profileView, setProfileView] = useState('showcase')
  const [showPublicProfile, setShowPublicProfile] = useState(false)
  const [currentPublicProfileId, setCurrentPublicProfileId] = useState(null)
  const [messagingContact, setMessagingContact] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  // Scroll to top when portal loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Enhanced filmmaker profile data
  const [profileData, setProfileData] = useState({
    name: 'Marcus Bell',
    primaryRole: 'Director',
    secondaryRole: 'Writer',
    additionalRoles: ['Producer', 'Editor'],
    location: 'Los Angeles, CA',
    memberSince: 'January 2023',
    yearsExperience: '8+ years',
    careerStage: 'Established Independent',
    education: 'USC School of Cinematic Arts',
    bio: 'Award-winning director and storyteller with a passion for independent cinema. Co-founder of IndieGate.io, dedicated to creating opportunities for emerging filmmakers and authentic narratives that challenge the status quo.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    email: 'marcus@indiegate.io',
    phone: '(310) 555-0124',
    website: 'www.marcusbellfilms.com',
    instagram: '@marcusbellfilms',
    imdb: 'nm7654321',
    availability: 'Available for Projects',
    rates: '$2500-3500/day',
    unions: ['DGA (Directors Guild)', 'WGA (Writers Guild)'],
    
    // Skills & Expertise (moved from separate tab)
    primaryRoles: ['Director', 'Writer', 'Producer'],
    genreSpecializations: ['Drama', 'Documentary', 'Thriller', 'Independent'],
    technicalSkills: ['Digital Cinematography', 'Post-Production Workflow', 'Sound Design'],
    productionScale: ['Short Films', 'Features', 'Limited Series'],
    budgetExperience: ['Micro ($0-50K)', 'Low ($50K-1M)', 'Mid ($1M-10M)'],
    
    specialSkills: [
      'Narrative Storytelling',
      'Documentary Style',
      'Digital Cinematography',
      'Post-Production Workflow',
    ],
    equipment: ['RED Digital Cinema Camera', 'DJI Drone System', 'Professional Audio Kit'],
    softwareProficiency: ['Final Cut Pro', 'DaVinci Resolve', 'Pro Tools'],
    genres: ['Drama', 'Documentary', 'Thriller', 'Independent'],
    demoReel: 'https://vimeo.com/marcusbell-directoreel',
    
    // Networking stats
    connections: 142,
    followers: 1847,
    profileViews: 3291,
    verified: true,
    portfolio: [
      {
        id: 1,
        title: 'Silent Echoes',
        type: 'Feature Film',
        year: '2024',
        role: 'Director/Writer',
        description: 'An introspective drama about family secrets',
      },
      {
        id: 2,
        title: 'The Rising Tide',
        type: 'Documentary',
        year: '2023',
        role: 'Director/Producer',
        description: 'Climate change impact on coastal communities',
      },
    ],
    credits: [
      {
        id: 1,
        title: 'Breaking New Ground',
        role: 'Director',
        type: 'Feature Film',
        year: '2024',
        director: 'Self',
      },
      {
        id: 2,
        title: 'Voices Unheard',
        role: 'Writer/Director',
        type: 'Documentary',
        year: '2023',
        director: 'Self',
      },
      {
        id: 3,
        title: 'The Last Mile',
        role: 'Producer/Director',
        type: 'Short Film',
        year: '2022',
        director: 'Self',
      },
    ],
    awards: [
      {
        id: 1,
        title: 'Best Director - Independent Film Festival',
        year: '2024',
        project: 'Breaking New Ground',
      },
      {
        id: 2,
        title: 'Audience Choice Award - Documentary Showcase',
        year: '2023',
        project: 'Voices Unheard',
      },
    ],
  })

  const opportunities = [
    {
      id: 1,
      title: 'Leading Man - Indie Drama',
      company: 'Moonlight Productions',
      location: 'Atlanta, GA',
      type: 'Feature Film',
      rate: '$1000/day',
      deadline: '2 days left',
      status: 'Applied',
      match: '95%',
    },
    {
      id: 2,
      title: 'Recurring Guest Star - Netflix Series',
      company: 'StreamVision Studios',
      location: 'Vancouver, BC',
      type: 'TV Series',
      rate: '$1500/day',
      deadline: '1 week left',
      status: 'Callback Scheduled',
      match: '88%',
    },
    {
      id: 3,
      title: 'Stunt Double - Action Film',
      company: 'ActionFlix Pictures',
      location: 'Los Angeles, CA',
      type: 'Feature Film',
      rate: '$800/day',
      deadline: '3 days left',
      status: 'Booked',
      match: '92%',
    },
    {
      id: 4,
      title: 'Voice Over - Animation',
      company: 'ToonTime Animation',
      location: 'Remote',
      type: 'Animation',
      rate: '$300/session',
      deadline: '5 days left',
      status: 'Contract Negotiation',
      match: '85%',
    },
  ]

  const applications = [
    {
      id: 1,
      project: 'The Last Stand',
      role: 'Detective Morgan',
      submitted: '3 days ago',
      status: 'Under Review',
      response: 'Pending',
    },
    {
      id: 2,
      project: 'Summer Romance',
      role: 'Jake',
      submitted: '1 week ago',
      status: 'Callback Scheduled',
      response: 'March 15th, 2PM',
    },
    {
      id: 3,
      project: 'Night Shift',
      role: 'Dr. Adams',
      submitted: '2 weeks ago',
      status: 'Booked',
      response: 'Congratulations! Contract sent.',
    },
    {
      id: 4,
      project: 'The Documentary Project',
      role: 'Narrator',
      submitted: '1 month ago',
      status: 'Not Selected',
      response: 'Thank you for your submission',
    },
  ]

  const skillsAssessment = [
    { skill: 'Dramatic Acting', level: 95, color: 'bg-purple-500' },
    { skill: 'Comedy', level: 88, color: 'bg-blue-500' },
    { skill: 'Voice Acting', level: 72, color: 'bg-green-500' },
    { skill: 'Stage Combat', level: 85, color: 'bg-orange-500' },
  ]

  const trainingRecommendations = [
    'Advanced Scene Study with Michael Chekhov Technique',
    'On-Camera Commercial Acting Intensive',
    'Voice Acting for Animation Workshop',
    'Stage Combat Certification Level II',
  ]

  const handleProfileSave = updatedProfile => {
    setProfileData(updatedProfile)
    setProfileView('showcase')
  }

  const handleProfileCancel = () => {
    setProfileView('showcase')
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

  const renderProfileTab = () => {
    console.log('🎬 ProfileTab: Rendering filmmaker profile', profileData)

    if (profileView === 'editor') {
      return (
        <TalentProfileEditor
          initialData={profileData}
          onSave={handleProfileSave}
          onCancel={handleProfileCancel}
        />
      )
    }

    return (
      <div className="space-y-6">
        {/* Enhanced Profile Header */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">My Filmmaker Profile</h2>
            <Button
              onClick={() => setProfileView('editor')}
              className="bg-purple-600 hover:bg-purple-700 text-white"
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
              {profileData.verified && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
                {profileData.verified && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-lg text-purple-400 font-medium">{profileData.primaryRole}</p>
              <p className="text-blue-200">{profileData.careerStage || 'Independent Filmmaker'}</p>
              <div className="flex items-center space-x-4 mt-2">
                <p className="text-sm text-gray-300 flex items-center">
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
                <p className="text-sm text-gray-300">{profileData.yearsExperience || '8+ years'}</p>
                <p className="text-sm text-gray-300">{profileData.education || 'Film School Graduate'}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex space-x-2 mb-3">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  Connect
                </Button>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10">
                  Message
                </Button>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/10">
                  Follow
                </Button>
              </div>
              <p className="text-sm text-gray-300">Status: {profileData.availability}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-200 leading-relaxed">{profileData.bio}</p>
        </div>

        {/* Network Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{profileData.connections || 142}</div>
            <div className="text-sm text-purple-100">Connections</div>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{profileData.followers || 1847}</div>
            <div className="text-sm text-blue-100">Followers</div>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{profileData.profileViews || 3291}</div>
            <div className="text-sm text-green-100">Profile Views</div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Primary Roles</h4>
              <div className="flex flex-wrap gap-2">
                {(profileData.primaryRoles || [profileData.primaryRole, profileData.secondaryRole]).filter(Boolean).map((role, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-600 text-purple-100 text-sm rounded-full"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Genre Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {(profileData.genreSpecializations || profileData.genres || ['Drama', 'Documentary']).map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {(profileData.technicalSkills || profileData.specialSkills || ['Digital Cinematography', 'Post-Production']).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-600 text-green-100 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Budget Experience</h4>
              <div className="flex flex-wrap gap-2">
                {(profileData.budgetExperience || ['Micro ($0-50K)', 'Low ($50K-1M)']).map((range, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-orange-600 text-orange-100 text-sm rounded-full"
                  >
                    {range}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Status */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Professional Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-white mb-2">Current Status</h4>
              <p className="text-green-400 font-semibold">{profileData.availability}</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Rate Range</h4>
              <p className="text-blue-400">{profileData.rates}</p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-2">Union Memberships</h4>
              <div className="flex flex-wrap gap-2">
                {(profileData.unions || []).map((union, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-600 text-gray-100 text-xs rounded-full"
                  >
                    {union}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderOpportunitiesTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">Featured Opportunities</h3>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Advanced Filters
          </Button>
        </div>
        <div className="space-y-4">
          {opportunities.map(opportunity => (
            <div
              key={opportunity.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{opportunity.title}</h4>
                  <p className="text-purple-200">{opportunity.company}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">{opportunity.rate}</p>
                  <p className="text-sm text-purple-200">{opportunity.deadline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-purple-200">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
                  {opportunity.location}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0V1a1 1 0 011-1h6a1 1 0 011 1v3"
                    />
                  </svg>
                  {opportunity.type}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19V6l12 7-12 7z"
                    />
                  </svg>
                  {opportunity.match} match
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    opportunity.status === 'Booked'
                      ? 'bg-green-500/20 text-green-300'
                      : opportunity.status === 'Callback Scheduled'
                        ? 'bg-blue-500/20 text-blue-300'
                        : opportunity.status === 'Contract Negotiation'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-purple-500/20 text-purple-300'
                  }`}
                >
                  {opportunity.status}
                </span>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-300 hover:bg-purple-500/20"
                  >
                    View Details
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderApplicationsTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">My Applications</h3>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            Export Report
          </Button>
        </div>
        <div className="space-y-4">
          {applications.map(application => (
            <div
              key={application.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{application.project}</h4>
                  <p className="text-purple-200">Role: {application.role}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      application.status === 'Booked'
                        ? 'bg-green-500/20 text-green-300'
                        : application.status === 'Callback Scheduled'
                          ? 'bg-blue-500/20 text-blue-300'
                          : application.status === 'Not Selected'
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                    }`}
                  >
                    {application.status}
                  </span>
                  <p className="text-sm text-purple-200 mt-1">Submitted {application.submitted}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-purple-200">Response: {application.response}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-300 hover:bg-purple-500/20"
                  >
                    View Application
                  </Button>
                  {application.status === 'Callback Scheduled' && (
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Confirm Callback
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderSkillsTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Skills Assessment</h3>
        <div className="space-y-4">
          {skillsAssessment.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white font-medium">{skill.skill}</span>
                <span className="text-purple-200">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-4">Recommended Training</h3>
        <div className="space-y-3">
          {trainingRecommendations.map((training, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
            >
              <span className="text-purple-200">{training}</span>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderActiveProjectsTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Current Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 'urban-legends-2',
              title: 'Urban Legends 2',
              genre: 'Horror',
              stage: 'Pre-Production',
              fundingStatus: 'Partially Funded',
              budget: '$850K',
              secured: '$620K',
              role: 'Director/Producer',
              timeline: 'Production starts March 2024',
              status: 'On Track',
            },
            {
              id: 'voices-unheard',
              title: 'Voices Unheard',
              genre: 'Documentary',
              stage: 'Development',
              fundingStatus: 'Seeking Investment',
              budget: '$320K',
              secured: '$85K',
              role: 'Director/Writer',
              timeline: 'Pre-production Q2 2024',
              status: 'Funding Required',
            },
            {
              id: 'midnight-shift',
              title: 'Midnight Shift',
              genre: 'Drama',
              stage: 'Post-Production',
              fundingStatus: 'Fully Funded',
              budget: '$1.2M',
              secured: '$1.2M',
              role: 'Executive Producer',
              timeline: 'Festival submissions Q1 2024',
              status: 'On Schedule',
            },
          ].map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <span className={`text-xs px-2 py-1 rounded ${
                  project.status === 'On Track' || project.status === 'On Schedule' ? 'bg-green-600 text-white' :
                  project.status === 'Funding Required' ? 'bg-yellow-600 text-white' : 'bg-blue-600 text-white'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-purple-200 text-sm">
                {project.genre} • {project.stage}
              </p>
              <p className="text-blue-200 text-sm">Role: {project.role}</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Budget:</span>
                  <span className="text-white">{project.budget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Secured:</span>
                  <span className="text-green-400">{project.secured}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Status:</span>
                  <span className={
                    project.fundingStatus === 'Fully Funded' ? 'text-green-400' :
                    project.fundingStatus === 'Partially Funded' ? 'text-yellow-400' : 'text-red-400'
                  }>{project.fundingStatus}</span>
                </div>
              </div>
              <p className="text-sm text-gray-300">{project.timeline}</p>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700 w-full">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderProgressTrackerTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Project Timeline Overview</h3>
        <div className="space-y-6">
          {[
            { project: 'Urban Legends 2', phase: 'Pre-Production', progress: 75, daysLeft: 45 },
            { project: 'Voices Unheard', phase: 'Development', progress: 40, daysLeft: 120 },
            { project: 'Midnight Shift', phase: 'Post-Production', progress: 90, daysLeft: 30 },
          ].map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-white">{item.project}</h4>
                <span className="text-sm text-gray-300">{item.daysLeft} days remaining</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-purple-200">{item.phase}</span>
                <span className="text-sm text-blue-300">{item.progress}% complete</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderFundFinderTab = () => (
    <div className="space-y-6">
      <SmartMatching userType="filmmaker" userProfile={profileData} />
      
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Grant & Competition Opportunities</h3>
        <div className="space-y-4">
          {[
            {
              title: 'Sundance Development Grant',
              amount: '$25,000',
              deadline: 'March 15, 2024',
              type: 'Development Grant',
              match: '95% match',
            },
            {
              title: 'Independent Film Tax Credit',
              amount: 'Up to 30%',
              deadline: 'Ongoing',
              type: 'Tax Incentive',
              match: '87% match',
            },
            {
              title: 'Documentary Fund for Social Impact',
              amount: '$50,000',
              deadline: 'April 30, 2024',
              type: 'Documentary Grant',
              match: '78% match',
            },
          ].map((grant, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <div>
                <h4 className="font-semibold text-white">{grant.title}</h4>
                <p className="text-sm text-gray-300">{grant.type} • Deadline: {grant.deadline}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-400">{grant.amount}</p>
                <p className="text-sm text-blue-300">{grant.match}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderPortfolioTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Portfolio Showcase</h3>
        
        <div className="mb-8">
          <h4 className="text-lg font-medium text-white mb-4">Director's Reel</h4>
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6" />
                </svg>
                <p className="text-gray-400">Director's Reel</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-white mb-4">Completed Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.portfolio?.map((project, index) => (
              <div key={index} className="bg-white/5 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-white">{project.title}</h5>
                  <p className="text-sm text-purple-200">{project.type} • {project.year}</p>
                  <p className="text-sm text-blue-200">Role: {project.role}</p>
                  <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )

  const renderCommunityTab = () => {
    console.log('🎬 CommunityTab: Rendering community tab');
    
    try {
      return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="space-y-6">
            {/* Community Header */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Filmmaker Community</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">1,247 active filmmakers</span>
              </div>
            </div>

            {/* Error Boundary for CommunityForum */}
            <CommunityErrorWrapper>
              <CommunityForum 
                userType="talent" 
                onShowPublicProfile={handleShowPublicProfile} 
              />
            </CommunityErrorWrapper>
          </div>
        </div>
      )
    } catch (error) {
      console.error('🎬 CommunityTab: Render error', error);
      return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Community Temporarily Unavailable</h3>
            <p className="text-gray-300 mb-4">We're working to restore the community features.</p>
            <Button
              onClick={() => window.location.reload()}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      )
    }
  }

  // Error Boundary Component for Community
  const CommunityErrorWrapper = ({ children }) => {
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);

    const handleError = (error, errorInfo) => {
      console.error('🎬 CommunityErrorWrapper: Caught error', error, errorInfo);
      setHasError(true);
      setError(error);
    };

    // Reset error state when component remounts
    const resetError = () => {
      setHasError(false);
      setError(null);
    };

    if (hasError) {
      return (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Community Loading Error</h3>
          <p className="text-gray-300 mb-4">
            Unable to load community forum. Please try refreshing the page.
          </p>
          <div className="space-x-2">
            <Button
              onClick={resetError}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Try Again
            </Button>
            <Button
              onClick={() => window.location.reload()}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Refresh Page
            </Button>
          </div>
          {process.env.NODE_ENV === 'development' && error && (
            <details className="mt-4 text-left">
              <summary className="text-gray-400 cursor-pointer">Error Details (Dev Mode)</summary>
              <pre className="bg-black/50 p-4 rounded mt-2 text-red-300 text-sm overflow-auto">
                {error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    try {
      return children;
    } catch (error) {
      handleError(error);
      return null;
    }
  }

  // Enhanced IndieGate.io Header Component - Matching Landing Page Exactly
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
          <div className="flex justify-between items-center h-32">
            {/* Logo + Text Combo - Triple size with tighter spacing */}
            <div className="text-gray-900">
              <div
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <IndieGateLogo className="w-48 h-48" />
                <div>
                  <h1 className="text-3xl font-bold">
                    IndieGate.<span className="text-blue-600">io</span>
                  </h1>
                  <p className="text-base text-gray-500 mt-1">Filmmaker Portal</p>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleButtonClick}
                className="text-gray-700 border-gray-300 hover:bg-gray-50 font-medium"
              >
                Back to Home
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">MB</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  // Main render logic - handle different views
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <IndieGateHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-1">
          <button
            onClick={() => setActiveTab('👤 Profile')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '👤 Profile'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            👤 Profile
          </button>
          <button
            onClick={() => setActiveTab('🎬 Active Projects')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '🎬 Active Projects'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🎬 Active Projects
          </button>
          <button
            onClick={() => setActiveTab('📈 Progress Tracker')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '📈 Progress Tracker'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📈 Progress Tracker
          </button>
          <button
            onClick={() => setActiveTab('💬 Community')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '💬 Community'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            💬 Community
          </button>
          <button
            onClick={() => setActiveTab('💰 FundFinder')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '💰 FundFinder'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            💰 FundFinder
          </button>
          <button
            onClick={() => setActiveTab('📁 Portfolio')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '📁 Portfolio'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📁 Portfolio
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === '👤 Profile' && renderProfileTab()}
          {activeTab === '🎬 Active Projects' && renderActiveProjectsTab()}
          {activeTab === '📈 Progress Tracker' && renderProgressTrackerTab()}
          {activeTab === '💬 Community' && renderCommunityTab()}
          {activeTab === '💰 FundFinder' && renderFundFinderTab()}
          {activeTab === '📁 Portfolio' && renderPortfolioTab()}
        </div>
      </div>

      {/* Messaging Interface */}
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

export default CreativePortal
