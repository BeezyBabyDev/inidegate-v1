import { useState } from 'react'
import Button from './Button'
import Card from './Card'

const TalentProfile = ({ talent = {}, onEdit, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Default talent data with Joe Bell profile
  const defaultTalent = {
    name: 'Joe Bell',
    role: 'Actor/Director',
    location: 'Los Angeles, CA',
    avatar: '/api/placeholder/150/150',
    bio: 'Multi-talented actor and director with a passion for authentic storytelling. Specializes in character-driven narratives and has extensive experience in both independent films and commercial projects. Known for bringing depth and nuance to every role.',
    email: 'joe.bell@indiegate.io',
    phone: '+1 (555) 123-4567',
    experience: '6+ years',
    height: '5\'10"',
    age: 28,
    union: true,
    verified: true,
    
    // Skills & Expertise
    coreSkills: [
      'Method Acting',
      'Character Development', 
      'Directing',
      'Improvisation',
      'Voice Work',
      'Physical Theater'
    ],
    
    languages: ['English (Native)', 'Spanish (Conversational)'],
    
    specialties: [
      'Urban Drama',
      'Character Studies',
      'Independent Films',
      'Commercial Work'
    ],
    
    // Experience & Background
    experienceLevel: 'Experienced',
    training: [
      'Meisner Technique - Neighborhood Playhouse',
      'Film Directing Workshop - UCLA',
      'Voice & Speech - RADA'
    ],
    
    // Portfolio
    portfolio: [
      {
        type: 'Feature Film',
        title: 'Urban Stories',
        role: 'Lead Actor/Director',
        year: 2023,
        description: 'Gritty urban drama exploring family dynamics in contemporary Los Angeles'
      },
      {
        type: 'Commercial',
        title: 'Nike Campaign',
        role: 'Lead Actor',
        year: 2023,
        description: 'National commercial campaign showcasing athletic determination'
      },
      {
        type: 'Short Film',
        title: 'Crossroads',
        role: 'Director/Writer',
        year: 2022,
        description: 'Award-winning short about second chances and redemption'
      }
    ],
    
    // Current Projects
    currentProjects: [
      {
        title: 'The Corner Store Chronicles',
        role: 'Director/Producer',
        status: 'Pre-Production',
        description: 'Web series exploring community stories through neighborhood connections'
      }
    ],
    
    // Achievements
    achievements: [
      'Best Actor - LA Indie Film Festival 2023',
      'Audience Choice Award - Urban Stories',
      'Featured in Variety "Rising Talent" 2023'
    ],
    
    // Availability
    availability: {
      status: 'Available',
      timeframe: 'Immediate',
      workType: ['Film', 'Television', 'Commercial', 'Theater'],
      locationFlexibility: 'Willing to travel'
    },
    
    // Rates & Union
    rates: {
      dayRate: '$850',
      weeklyRate: '$4,250',
      negotiable: true
    },
    
    unionStatus: 'SAG-AFTRA',
    
    // Social & Professional Links
    social: {
      instagram: '@joebell.creates',
      linkedin: 'linkedin.com/in/joebellactor',
      website: 'joebell.com',
      reel: 'vimeo.com/joebell/reel'
    },
  }

  const talentData = { ...defaultTalent, ...talent }

  const IndieGateLogo = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        <svg className="h-12 w-auto" viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="logoClipTalent">
              <path d="M 120.957031 164 L 124 164 L 124 246 L 120.957031 246 Z M 120.957031 164 " />
            </clipPath>
            <clipPath id="logoClipTalent2">
              <path d="M 217 164 L 219.121094 164 L 219.121094 246 L 217 246 Z M 217 164 " />
            </clipPath>
            <clipPath id="logoClipTalent3">
              <path d="M 129 251 L 211 251 L 211 254.039062 L 129 254.039062 Z M 129 251 " />
            </clipPath>
            <clipPath id="logoClipTalent4">
              <path d="M 129 155.878906 L 211 155.878906 L 211 159 L 129 159 Z M 129 155.878906 " />
            </clipPath>
            <clipPath id="logoClipTalent5">
              <path d="M 120.957031 245 L 130 245 L 130 254.039062 L 120.957031 254.039062 Z M 120.957031 245 " />
            </clipPath>
            <clipPath id="logoClipTalent6">
              <path d="M 210 245 L 219.121094 245 L 219.121094 254.039062 L 210 254.039062 Z M 210 245 " />
            </clipPath>
            <clipPath id="logoClipTalent7">
              <path d="M 120.957031 155.878906 L 130 155.878906 L 130 165 L 120.957031 165 Z M 120.957031 155.878906 " />
            </clipPath>
            <clipPath id="logoClipTalent8">
              <path d="M 210 155.878906 L 219.121094 155.878906 L 219.121094 165 L 210 165 Z M 210 155.878906 " />
            </clipPath>
            <clipPath id="logoClipTalent9">
              <path d="M 120.269531 155.191406 L 220.019531 155.191406 L 220.019531 254.941406 L 120.269531 254.941406 Z M 120.269531 155.191406 " />
            </clipPath>
            <clipPath id="logoClipTalent10">
              <path d="M 155.878906 129 L 159 129 L 159 211 L 155.878906 211 Z M 155.878906 129 " />
            </clipPath>
            <clipPath id="logoClipTalent11">
              <path d="M 251 129 L 254.039062 129 L 254.039062 211 L 251 211 Z M 251 129 " />
            </clipPath>
            <clipPath id="logoClipTalent12">
              <path d="M 164 217 L 246 217 L 246 219.121094 L 164 219.121094 Z M 164 217 " />
            </clipPath>
            <clipPath id="logoClipTalent13">
              <path d="M 164 120.957031 L 246 120.957031 L 246 124 L 164 124 Z M 164 120.957031 " />
            </clipPath>
            <clipPath id="logoClipTalent14">
              <path d="M 155.878906 210 L 165 210 L 165 219.121094 L 155.878906 219.121094 Z M 155.878906 210 " />
            </clipPath>
            <clipPath id="logoClipTalent15">
              <path d="M 245 210 L 254.039062 210 L 254.039062 219.121094 L 245 219.121094 Z M 245 210 " />
            </clipPath>
            <clipPath id="logoClipTalent16">
              <path d="M 155.878906 120.957031 L 165 120.957031 L 165 130 L 155.878906 130 Z M 155.878906 120.957031 " />
            </clipPath>
            <clipPath id="logoClipTalent17">
              <path d="M 245 120.957031 L 254.039062 120.957031 L 254.039062 130 L 245 130 Z M 245 120.957031 " />
            </clipPath>
            <clipPath id="logoClipTalent18">
              <path d="M 155.191406 120.269531 L 254.941406 120.269531 L 254.941406 220.019531 L 155.191406 220.019531 Z M 155.191406 120.269531 " />
            </clipPath>
          </defs>
          <g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 123.25 245.800781 L 120.269531 245.800781 L 120.269531 164.332031 L 123.25 164.332031 Z M 123.25 245.800781 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent2)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 220.019531 245.800781 L 217.039062 245.800781 L 217.039062 164.332031 L 220.019531 164.332031 Z M 220.019531 245.800781 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent3)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 210.878906 254.941406 L 129.410156 254.941406 L 129.410156 251.960938 L 210.878906 251.960938 Z M 210.878906 254.941406 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent4)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 210.878906 158.171875 L 129.410156 158.171875 L 129.410156 155.191406 L 210.878906 155.191406 Z M 210.878906 158.171875 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent5)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 123.25 251.960938 L 123.25 245.800781 L 120.269531 245.800781 L 120.269531 254.941406 L 129.410156 254.941406 L 129.410156 251.960938 Z M 123.25 251.960938 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent6)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 217.039062 251.960938 L 210.878906 251.960938 L 210.878906 254.941406 L 220.019531 254.941406 L 220.019531 245.800781 L 217.039062 245.800781 Z M 217.039062 251.960938 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent7)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 123.25 158.171875 L 129.410156 158.171875 L 129.410156 155.191406 L 120.269531 155.191406 L 120.269531 164.332031 L 123.25 164.332031 Z M 123.25 158.171875 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent8)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 217.039062 158.171875 L 217.039062 164.332031 L 220.019531 164.332031 L 220.019531 155.191406 L 210.878906 155.191406 L 210.878906 158.171875 Z M 217.039062 158.171875 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent9)">
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
            <g clipRule="nonzero" clipPath="url(#logoClipTalent10)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 158.171875 210.882812 L 155.191406 210.882812 L 155.191406 129.410156 L 158.171875 129.410156 Z M 158.171875 210.882812 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent11)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 254.941406 210.882812 L 251.960938 210.882812 L 251.960938 129.410156 L 254.941406 129.410156 Z M 254.941406 210.882812 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent12)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 245.800781 220.019531 L 164.332031 220.019531 L 164.332031 217.039062 L 245.800781 217.039062 Z M 245.800781 220.019531 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent13)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 245.800781 123.253906 L 164.332031 123.253906 L 164.332031 120.269531 L 245.800781 120.269531 Z M 245.800781 123.253906 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent14)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 158.171875 217.039062 L 158.171875 210.882812 L 155.191406 210.882812 L 155.191406 220.019531 L 164.332031 220.019531 L 164.332031 217.039062 Z M 158.171875 217.039062 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent15)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 251.960938 217.039062 L 245.800781 217.039062 L 245.800781 220.019531 L 254.941406 220.019531 L 254.941406 210.882812 L 251.960938 210.882812 Z M 251.960938 217.039062 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent16)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 158.171875 123.253906 L 164.332031 123.253906 L 164.332031 120.269531 L 155.191406 120.269531 L 155.191406 129.410156 L 158.171875 129.410156 Z M 158.171875 123.253906 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent17)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 251.960938 123.253906 L 251.960938 129.410156 L 254.941406 129.410156 L 254.941406 120.269531 L 245.800781 120.269531 L 245.800781 123.253906 Z M 251.960938 123.253906 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipTalent18)">
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
      </div>
    </div>
  )

  const ProfileHeader = () => (
    <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-t-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <img
            src={talentData.avatar}
            alt={talentData.name}
            className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
          />
          {talentData.verified && (
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
          <h1 className="text-3xl font-bold mb-2">{talentData.name}</h1>
          <p className="text-xl text-purple-100 mb-2">{talentData.role}</p>
          <p className="text-purple-200 mb-4">{talentData.location}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                talentData.availability === 'Available'
                  ? 'bg-green-500/20 text-green-100'
                  : 'bg-red-500/20 text-red-100'
              }`}
            >
              {talentData.availability}
            </span>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-100 rounded-full text-sm">
              {talentData.rates}
            </span>
            {talentData.unions && talentData.unions.map((union, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-500/20 text-blue-100 rounded-full text-sm"
              >
                {union}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={onEdit} className="bg-white text-purple-700 hover:bg-gray-100">
              Edit Profile
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700"
            >
              Contact
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-700"
            >
              Share Profile
            </Button>
          </div>
        </div>

        <div className="text-right">
          <div className="text-2xl font-bold">{talentData.profileCompletion}%</div>
          <div className="text-sm text-purple-200">Profile Complete</div>
          <div className="w-20 h-2 bg-purple-700 rounded-full mt-2">
            <div
              className="h-full bg-white rounded-full"
              style={{ width: `${talentData.profileCompletion}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Bio */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <p className="text-gray-700 leading-relaxed">{talentData.bio}</p>
      </Card>

      {/* Current Projects & Availability */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Current Status</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Current Projects</h4>
            {talentData.currentProjects && talentData.currentProjects.length > 0 ? (
              <div className="space-y-3">
                {talentData.currentProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-purple-400 pl-4">
                    <p className="font-medium text-gray-900">{project.title}</p>
                    <p className="text-sm text-gray-600">
                      {project.role} • {project.status}
                    </p>
                    <p className="text-xs text-gray-500">
                      Started: {new Date(project.startDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No current projects</p>
            )}
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Availability Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Next Available:</span>
                <span className="text-sm font-medium">
                  {new Date(
                    talentData.availabilityDetails?.nextAvailable || Date.now()
                  ).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Travel Willing:</span>
                <span className="text-sm font-medium">
                  {talentData.availabilityDetails?.travelWilling ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Remote Capable:</span>
                <span className="text-sm font-medium">
                  {talentData.availabilityDetails?.remoteCapable ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-600">Preferred Locations:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {talentData.availabilityDetails?.workingLocations?.map((location, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Core Skills Preview */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Core Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {talentData.coreSkills?.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{skill.name}</p>
                <p className="text-sm text-gray-600">{skill.years} years experience</p>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  skill.level === 'Expert'
                    ? 'bg-green-100 text-green-800'
                    : skill.level === 'Advanced'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {skill.level}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => setActiveTab('skills')}
            className="text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            View All Skills & Expertise →
          </button>
        </div>
      </Card>

      {/* Recent Achievements */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          {talentData.achievements?.slice(0, 3).map((achievement, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achievement.type === 'Award'
                    ? 'bg-yellow-100'
                    : achievement.type === 'Recognition'
                      ? 'bg-purple-100'
                      : achievement.type === 'Milestone'
                        ? 'bg-blue-100'
                        : 'bg-green-100'
                }`}
              >
                <svg
                  className={`w-4 h-4 ${
                    achievement.type === 'Award'
                      ? 'text-yellow-600'
                      : achievement.type === 'Recognition'
                        ? 'text-purple-600'
                        : achievement.type === 'Milestone'
                          ? 'text-blue-600'
                          : 'text-green-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">{achievement.title}</p>
                <p className="text-sm text-gray-600">
                  {achievement.organization} • {achievement.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Industry Links */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Industry Profiles</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {talentData.actorAccess && (
            <a
              href={`https://actorsaccess.com/${talentData.actorAccess}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AA</span>
              </div>
              <span className="text-sm font-medium">Actors Access</span>
            </a>
          )}

          {talentData.castingNetworks && (
            <a
              href={`https://castingnetworks.com/${talentData.castingNetworks}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">CN</span>
              </div>
              <span className="text-sm font-medium">Casting Networks</span>
            </a>
          )}

          {talentData.imdb && (
            <a
              href={`https://imdb.com/name/${talentData.imdb}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">IMDb</span>
              </div>
              <span className="text-sm font-medium">IMDb Page</span>
            </a>
          )}

          {talentData.website && (
            <a
              href={talentData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118C6.004 6.177 4.842 7.504 4.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118C13.996 6.177 15.158 7.504 15.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946c-.759 1.496-1.921 2.823-2.783 4.118zm-6.268 0C6.004 13.823 4.842 12.496 4.083 11h1.946c.089 1.546.383 2.97.837 4.118z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">Website</span>
            </a>
          )}
        </div>
      </Card>

      {/* Social Media & Contact */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Social Media & Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
            <div className="space-y-2">
              {talentData.email && (
                <a
                  href={`mailto:${talentData.email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{talentData.email}</span>
                </a>
              )}
              {talentData.phone && (
                <a
                  href={`tel:${talentData.phone}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">{talentData.phone}</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Social Media</h4>
            <div className="grid grid-cols-2 gap-3">
              {talentData.instagram && (
                <a
                  href={talentData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.357C4.267 14.764 3.776 13.613 3.776 12.316s.49-2.448 1.357-3.316C6.001 8.133 7.152 7.643 8.449 7.643s2.448.49 3.316 1.357c.867.868 1.357 2.019 1.357 3.316s-.49 2.448-1.357 3.316c-.868.867-2.019 1.357-3.316 1.357zm7.718 0c-1.297 0-2.448-.49-3.316-1.357-.867-.868-1.357-2.019-1.357-3.316s.49-2.448 1.357-3.316c.868-.867 2.019-1.357 3.316-1.357s2.448.49 3.316 1.357c.867.868 1.357 2.019 1.357 3.316s-.49 2.448-1.357 3.316c-.868.867-2.019 1.357-3.316 1.357z" />
                  </svg>
                  Instagram
                </a>
              )}

              {talentData.twitter && (
                <a
                  href={talentData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.030-.916-.086.631 1.953 2.445 2.37 3.377 2.37 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  Twitter
                </a>
              )}

              {talentData.linkedin && (
                <a
                  href={talentData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}

              {talentData.youtube && (
                <a
                  href={talentData.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
              )}

              {talentData.tiktok && (
                <a
                  href={talentData.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  TikTok
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Special Skills (for Actors) */}
      {talentData.specialSkills && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Special Skills</h3>
          <div className="flex flex-wrap gap-2">
            {talentData.specialSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      )}

      {/* Awards */}
      {talentData.awards && talentData.awards.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Awards & Recognition</h3>
          <div className="space-y-3">
            {talentData.awards.map((award, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium">{award.title}</div>
                  <div className="text-sm text-gray-600">
                    {award.festival} - {award.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )

  const PortfolioTab = () => (
    <div className="space-y-6">
      {/* Demo Reel */}
      {talentData.demoReel && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Demo Reel</h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <p className="text-gray-600">Demo Reel</p>
              <Button size="sm" className="mt-2">
                Watch Reel
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Headshots (for Actors) */}
      {talentData.headshots && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Headshots</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {talentData.headshots.map((headshot, index) => (
              <div key={index} className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={headshot}
                  alt={`Headshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Portfolio Items */}
      {talentData.portfolio && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {talentData.portfolio.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{item.title}</h4>
                  <Button size="sm" className="mt-2">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )

  const CreditsTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Film & Television Credits</h3>
        <div className="space-y-4">
          {talentData.credits.map((credit, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{credit.title}</h4>
                  <p className="text-purple-600 font-medium">{credit.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">{credit.year}</span>
                  <span
                    className={`block px-2 py-1 mt-1 text-xs rounded-full ${
                      credit.status === 'Released'
                        ? 'bg-green-100 text-green-800'
                        : credit.status === 'Streaming'
                          ? 'bg-blue-100 text-blue-800'
                          : credit.status === 'Festival Circuit'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {credit.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Type:</span>
                  <span className="ml-2 font-medium">{credit.type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Director:</span>
                  <span className="ml-2 font-medium">{credit.director}</span>
                </div>
                {credit.platform && (
                  <div>
                    <span className="text-gray-600">Platform:</span>
                    <span className="ml-2 font-medium">{credit.platform}</span>
                  </div>
                )}
              </div>

              {credit.festivals && credit.festivals.length > 0 && (
                <div className="mt-3">
                  <span className="text-sm text-gray-600">Festival Selections:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {credit.festivals.map((festival, festIndex) => (
                      <span
                        key={festIndex}
                        className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                      >
                        {festival}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Awards Section moved here for better organization */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Awards & Recognition</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {talentData.awards.map((award, index) => (
            <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">{award.title}</p>
                <p className="text-sm text-gray-600">{award.festival}</p>
                <p className="text-xs text-gray-500">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const SkillsTab = () => (
    <div className="space-y-6">
      {/* Core Acting Skills */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Core Acting Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {talentData.coreSkills?.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{skill.name}</p>
                <p className="text-sm text-gray-600">{skill.years} years experience</p>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    skill.level === 'Expert'
                      ? 'bg-green-100 text-green-800'
                      : skill.level === 'Advanced'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {skill.level}
                </span>
                <div className="w-24 h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className={`h-full rounded-full ${
                      skill.level === 'Expert'
                        ? 'bg-green-500'
                        : skill.level === 'Advanced'
                          ? 'bg-blue-500'
                          : 'bg-yellow-500'
                    }`}
                    style={{
                      width:
                        skill.level === 'Expert'
                          ? '100%'
                          : skill.level === 'Advanced'
                            ? '75%'
                            : '50%',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Special Skills & Talents */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Special Skills & Talents</h3>
        <div className="flex flex-wrap gap-2">
          {talentData.specialSkills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-purple-100 text-purple-800 text-sm rounded-lg border border-purple-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>

      {/* Technical Skills */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {talentData.technicalSkills?.map((skill, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
              <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900">{skill}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Languages */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Languages</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {talentData.languages?.map((lang, index) => (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
              <p className="font-medium text-gray-900">{lang.language}</p>
              <span
                className={`inline-block px-2 py-1 mt-2 text-xs rounded-full ${
                  lang.proficiency === 'Native'
                    ? 'bg-green-100 text-green-800'
                    : lang.proficiency === 'Fluent'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Certifications */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Certifications & Training</h3>
        <div className="space-y-3">
          {talentData.certifications?.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{cert.name}</p>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{cert.year}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* All Achievements */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">All Achievements</h3>
        <div className="space-y-4">
          {talentData.achievements?.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.type === 'Award'
                    ? 'bg-yellow-100'
                    : achievement.type === 'Recognition'
                      ? 'bg-purple-100'
                      : achievement.type === 'Milestone'
                        ? 'bg-blue-100'
                        : 'bg-green-100'
                }`}
              >
                <svg
                  className={`w-5 h-5 ${
                    achievement.type === 'Award'
                      ? 'text-yellow-600'
                      : achievement.type === 'Recognition'
                        ? 'text-purple-600'
                        : achievement.type === 'Milestone'
                          ? 'text-blue-600'
                          : 'text-green-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-sm text-gray-600">{achievement.organization}</p>
                  </div>
                  <span className="text-sm text-gray-500">{achievement.year}</span>
                </div>
                <span
                  className={`inline-block px-2 py-1 mt-2 text-xs rounded-full ${
                    achievement.type === 'Award'
                      ? 'bg-yellow-100 text-yellow-800'
                      : achievement.type === 'Recognition'
                        ? 'bg-purple-100 text-purple-800'
                        : achievement.type === 'Milestone'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                  }`}
                >
                  {achievement.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="p-4">
        <Button variant="outline" onClick={onBack} className="mb-4">
          ← Back to Talent Network
        </Button>
      </div>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto pb-8">
        <Card className="mb-6 overflow-hidden">
          <IndieGateLogo />
          <ProfileHeader />

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'portfolio', label: 'Portfolio & Reel' },
                { key: 'credits', label: 'Credits' },
                { key: 'skills', label: 'Skills & Expertise' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </Card>

        {/* Tab Content */}
        <div className="px-6">
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'portfolio' && <PortfolioTab />}
          {activeTab === 'credits' && <CreditsTab />}
          {activeTab === 'skills' && <SkillsTab />}
        </div>
      </div>
    </div>
  )
}

export default TalentProfile
