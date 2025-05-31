import { useState, useEffect } from 'react'
import Card from './Card'
import Button from './Button'
import TalentProfile from './TalentProfile'
import TalentProfileEditor from './TalentProfileEditor'
import CommunityForum from './CommunityForum'
import SmartMatching from './SmartMatching'

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
  const [activeTab, setActiveTab] = useState('🎬 Opportunities')
  const [profileView, setProfileView] = useState('showcase') // 'showcase' or 'editor'

  // Scroll to top when portal loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample talent profile data
  const [profileData, setProfileData] = useState({
    name: 'Marcus Bell',
    primaryRole: 'Director',
    secondaryRole: 'Writer',
    additionalRoles: ['Producer', 'Editor'],
    location: 'Los Angeles, CA',
    bio: 'Award-winning director and storyteller with a passion for independent cinema. Co-founder of IndieGate.io, dedicated to creating opportunities for emerging filmmakers and authentic narratives that challenge the status quo.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    email: 'marcus@indiegate.io',
    phone: '(310) 555-0124',
    website: 'www.marcusbellfilms.com',
    instagram: '@marcusbellfilms',
    actorAccess: '',
    castingNetworks: '',
    imdb: 'nm7654321',
    availability: 'Available',
    rates: '$2500-3500/day',
    unions: ['DGA (Directors Guild)', 'WGA (Writers Guild)'],
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
    verified: true,
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
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">My Talent Profile</h2>
          <Button
            onClick={() => setProfileView('editor')}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Edit Profile
          </Button>
        </div>
        <TalentProfile talent={profileData} />
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

  const renderCommunityTab = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
      <CommunityForum userType="talent" userName={profileData.name} />
    </div>
  )

  const renderSmartMatchingTab = () => (
    <div className="space-y-6">
      <SmartMatching userType="talent" userProfile={profileData} />
    </div>
  )

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
                  <p className="text-base text-gray-500 mt-1">Creative Portal</p>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <IndieGateHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-1">
          <button
            onClick={() => setActiveTab('🎬 Opportunities')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '🎬 Opportunities'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🎬 Opportunities
          </button>
          <button
            onClick={() => setActiveTab('🤖 Smart Matching')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '🤖 Smart Matching'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🤖 Smart Matching
          </button>
          <button
            onClick={() => setActiveTab('📝 Applications')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '📝 Applications'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📝 Applications
          </button>
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
            onClick={() => setActiveTab('🎯 Skills')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '🎯 Skills'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🎯 Skills
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
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === '🎬 Opportunities' && renderOpportunitiesTab()}
          {activeTab === '🤖 Smart Matching' && renderSmartMatchingTab()}
          {activeTab === '📝 Applications' && renderApplicationsTab()}
          {activeTab === '👤 Profile' && renderProfileTab()}
          {activeTab === '🎯 Skills' && renderSkillsTab()}
          {activeTab === '💬 Community' && renderCommunityTab()}
        </div>
      </div>
    </div>
  )
}

export default CreativePortal
