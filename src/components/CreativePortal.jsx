import { useState } from 'react'
import Card from './Card'
import Button from './Button'
import TalentProfileEditor from './TalentProfileEditor'
import CommunityForum from './CommunityForum'
import SmartMatching from './SmartMatching'
import PublicProfile from './PublicProfile'
import MessagingInterface from './MessagingInterface'
import FilmProjectDetailPage from './FilmProjectDetailPage'
import { useScrollToTop } from '../hooks/useScrollToTop'
import PortalHeader from './PortalHeader'

const CreativePortal = ({ onLogout, onBack }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()

  const [activeTab, setActiveTab] = useState('👤 Profile')
  const [profileView, setProfileView] = useState('showcase')
  const [showPublicProfile, setShowPublicProfile] = useState(false)
  const [currentPublicProfileId, setCurrentPublicProfileId] = useState(null)
  const [messagingContact, setMessagingContact] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [showProjectDetail, setShowProjectDetail] = useState(false)

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

  const handleViewProjectDetails = project => {
    console.log('Viewing project details for:', project.title)
    setSelectedProject(project)
    setShowProjectDetail(true)
  }

  const handleBackToProjects = () => {
    setShowProjectDetail(false)
    setSelectedProject(null)
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
                  {profileData.location}
                </p>
                <p className="text-sm text-gray-300">{profileData.yearsExperience || '8+ years'}</p>
                <p className="text-sm text-gray-300">
                  {profileData.education || 'Film School Graduate'}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex space-x-2 mb-3">
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  Connect
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Message
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
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
                {(profileData.primaryRoles || [profileData.primaryRole, profileData.secondaryRole])
                  .filter(Boolean)
                  .map((role, index) => (
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
                {(
                  profileData.genreSpecializations ||
                  profileData.genres || ['Drama', 'Documentary']
                ).map((genre, index) => (
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
                {(
                  profileData.technicalSkills ||
                  profileData.specialSkills || ['Digital Cinematography', 'Post-Production']
                ).map((skill, index) => (
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
                {(profileData.budgetExperience || ['Micro ($0-50K)', 'Low ($50K-1M)']).map(
                  (range, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-600 text-orange-100 text-sm rounded-full"
                    >
                      {range}
                    </span>
                  )
                )}
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

  const renderActiveProjectsTab = () => (
    <div className="space-y-6">
      <Card className="portal-card">
        <h3 className="portal-heading-section">Current Projects</h3>
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
            <div key={index} className="portal-card-small space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="portal-text-medium font-semibold text-white">{project.title}</h4>
                <span
                  className={`portal-badge ${
                    project.status === 'On Track' || project.status === 'On Schedule'
                      ? 'portal-badge-success'
                      : project.status === 'Funding Required'
                        ? 'portal-badge-warning'
                        : 'portal-badge-info'
                  }`}
                >
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
                  <span
                    className={
                      project.fundingStatus === 'Fully Funded'
                        ? 'text-green-400'
                        : project.fundingStatus === 'Partially Funded'
                          ? 'text-yellow-400'
                          : 'text-red-400'
                    }
                  >
                    {project.fundingStatus}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-300">{project.timeline}</p>
              <Button
                size="sm"
                className="portal-btn-primary w-full"
                onClick={() => handleViewProjectDetails(project)}
              >
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
      <Card className="portal-card">
        <h3 className="portal-heading-section">Project Timeline Overview</h3>
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
              <div className="portal-progress-bar">
                <div className="portal-progress-fill" style={{ width: `${item.progress}%` }} />
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
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white/5 rounded-lg"
            >
              <div>
                <h4 className="font-semibold text-white">{grant.title}</h4>
                <p className="text-sm text-gray-300">
                  {grant.type} • Deadline: {grant.deadline}
                </p>
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
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h6m-3-3v6"
                  />
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
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4">
                  <h5 className="font-semibold text-white">{project.title}</h5>
                  <p className="text-sm text-purple-200">
                    {project.type} • {project.year}
                  </p>
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
    console.log('🎬 CommunityTab: Rendering community tab')

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
              <CommunityForum userType="talent" onShowPublicProfile={handleShowPublicProfile} />
            </CommunityErrorWrapper>
          </div>
        </div>
      )
    } catch (error) {
      console.error('🎬 CommunityTab: Render error', error)
      return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Community Temporarily Unavailable
            </h3>
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
    const [hasError, setHasError] = useState(false)
    const [error, setError] = useState(null)

    const handleError = (error, errorInfo) => {
      console.error('🎬 CommunityErrorWrapper: Caught error', error, errorInfo)
      setHasError(true)
      setError(error)
    }

    // Reset error state when component remounts
    const resetError = () => {
      setHasError(false)
      setError(null)
    }

    if (hasError) {
      return (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
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
      )
    }

    try {
      return children
    } catch (error) {
      handleError(error)
      return null
    }
  }

  // Main render logic - handle different views
  if (showProjectDetail && selectedProject) {
    return <FilmProjectDetailPage onBack={handleBackToProjects} project={selectedProject} />
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

  return (
    <div className="portal-container">
      <PortalHeader
        title="IndieGate.io"
        subtitle="Filmmaker Network"
        onLogout={onLogout}
        onBack={handleBackToHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Welcome Section - Mobile Optimized */}
        <div className="mb-6 md:mb-8">
          <h2 className="portal-heading-main portal-fade-in">Welcome to the Filmmaker Portal</h2>
          <p className="portal-text-large text-purple-200 mb-6 md:mb-8 text-center">
            Manage your projects, connect with investors, and bring your creative vision to life.
          </p>
        </div>

        {/* Mobile-First Navigation Tabs */}
        <div className="mb-6 md:mb-8">
          {/* Mobile: Horizontal Scroll Tabs */}
          <div className="flex space-x-2 md:space-x-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <button
              onClick={() => setActiveTab('👤 Profile')}
              className={`portal-nav-tab whitespace-nowrap flex-shrink-0 ${
                activeTab === '👤 Profile' ? 'active' : ''
              }`}
            >
              👤 Profile
            </button>
            <button
              onClick={() => setActiveTab('🎬 Active Projects')}
              className={`portal-nav-tab whitespace-nowrap flex-shrink-0 ${
                activeTab === '🎬 Active Projects' ? 'active' : ''
              }`}
            >
              🎬 Active Projects
            </button>
            <button
              onClick={() => setActiveTab('📈 Progress Tracker')}
              className={`portal-nav-tab whitespace-nowrap flex-shrink-0 ${
                activeTab === '📈 Progress Tracker' ? 'active' : ''
              }`}
            >
              📈 Progress Tracker
            </button>
            <button
              onClick={() => setActiveTab('💬 Community')}
              className={`portal-nav-tab whitespace-nowrap flex-shrink-0 ${
                activeTab === '💬 Community' ? 'active' : ''
              }`}
            >
              💬 Community
            </button>
            <button
              onClick={() => setActiveTab('💰 FundFinder')}
              className={`portal-nav-tab whitespace-nowrap flex-shrink-0 ${
                activeTab === '💰 FundFinder' ? 'active' : ''
              }`}
            >
              💰 FundFinder
            </button>
            <button
              onClick={() => setActiveTab('📁 Portfolio')}
              className={`portal-nav-tab whitespace-nowrap flex-shrink-0 ${
                activeTab === '📁 Portfolio' ? 'active' : ''
              }`}
            >
              📁 Portfolio
            </button>
          </div>
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
