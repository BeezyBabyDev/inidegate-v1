import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Button from './Button'
import TalentProfile from './TalentProfile'
import TalentProfileEditor from './TalentProfileEditor'
import CommunityForum from './CommunityForum'
import SmartMatching from './SmartMatching'

const TalentPortal = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('opportunities')
  const [profileView, setProfileView] = useState('showcase') // 'showcase' or 'editor'

  // Scroll to top when portal loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample talent profile data
  const [profileData, setProfileData] = useState({
    name: 'Alex Rivera',
    primaryRole: 'Actor',
    secondaryRole: 'Writer',
    additionalRoles: ['Director', 'Producer'],
    location: 'Los Angeles, CA',
    bio: 'Versatile actor with 8+ years of experience in independent film and television. Passionate about character-driven narratives and authentic storytelling.',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    website: 'www.alexrivera.com',
    instagram: '@alexriveraactor',
    actorAccess: 'alex.rivera.aa',
    castingNetworks: 'alex.rivera.cn',
    imdb: 'nm1234567',
    availability: 'Available',
    rates: '$600-800/day',
    unions: ['SAG-AFTRA'],
    specialSkills: ['Spanish (Native)', 'Stage Combat', 'Motorcycles', 'Classical Piano'],
    demoReel: 'https://vimeo.com/alexrivera-reel',
    credits: [
      {
        title: 'The Midnight Hour',
        role: 'Lead',
        type: 'Feature Film',
        year: '2023',
        director: 'Sarah Chen',
      },
      {
        title: 'City Streets',
        role: 'Supporting',
        type: 'TV Series',
        year: '2022',
        director: 'Marcus Johnson',
      },
      {
        title: 'Breaking Dawn',
        role: 'Lead',
        type: 'Short Film',
        year: '2021',
        director: 'Lisa Park',
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
        <TalentProfile profileData={profileData} />
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      <Navbar onLogout={onLogout} isAuthenticated />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Talent Portal</h1>
          <p className="text-blue-100">
            Manage your career, discover opportunities, and connect with the film community
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-1">
          <button
            onClick={() => setActiveTab('opportunities')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'opportunities'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📋 Opportunities
          </button>
          <button
            onClick={() => setActiveTab('smart-matching')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'smart-matching'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🤖 Smart Matching
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'applications'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📝 Applications
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'profile'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            👤 Profile
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'skills'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🎯 Skills
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'community'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            💬 Community
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === 'opportunities' && renderOpportunitiesTab()}
          {activeTab === 'smart-matching' && renderSmartMatchingTab()}
          {activeTab === 'applications' && renderApplicationsTab()}
          {activeTab === 'profile' && renderProfileTab()}
          {activeTab === 'skills' && renderSkillsTab()}
          {activeTab === 'community' && renderCommunityTab()}
        </div>
      </div>
    </div>
  )
}

export default TalentPortal
