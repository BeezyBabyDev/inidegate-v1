import { useState } from 'react'
import Button from './Button'
import Card from './Card'
import IndieGateLogo from './IndieGateLogo'

const TalentProfile = ({ talent = {}, onEdit, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Default talent data with Marcus Bell profile
  const defaultTalent = {
    name: 'Marcus Bell',
    primaryRole: 'Director',
    secondaryRole: 'Writer',
    role: 'Actor/Director',
    location: 'Los Angeles, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Award-winning director and storyteller with a passion for independent cinema. Co-founder of IndieGate.io, dedicated to creating opportunities for emerging filmmakers and authentic narratives that challenge the status quo.',
    email: 'marcus@indiegate.io',
    phone: '(310) 555-0124',
    website: 'www.marcusbellfilms.com',
    company: 'Bell Films',
    experience: '8+ years',
    height: '6\'1"',
    age: 32,
    union: true,
    verified: true,
    profileCompletion: 95,
    
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
      dayRate: '$2500-3500/day',
      weeklyRate: '$12,500',
      negotiable: true
    },
    
    unions: ['DGA (Directors Guild)', 'WGA (Writers Guild)'],
    unionStatus: 'DGA, WGA',
    
    // Social & Professional Links
    social: {
      instagram: '@marcusbellfilms',
      linkedin: 'linkedin.com/in/marcusbell',
      website: 'www.marcusbellfilms.com',
      reel: 'vimeo.com/marcusbell/reel'
    },
  }

  const talentData = { ...defaultTalent, ...talent }

  const ProfileHeader = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-8 mb-6">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Marcus Bell - Creative Profile</h2>
        <Button
          onClick={onEdit}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3"
        >
          Edit Profile
        </Button>
      </div>
      
      <div className="flex items-start space-x-8">
        <div className="relative">
          <img
            src={talentData.avatar}
            alt={talentData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-3">
            <h1 className="text-3xl font-bold text-white">{talentData.name}</h1>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <p className="text-xl text-purple-200 font-medium mb-2">{talentData.primaryRole || talentData.role}</p>
          <p className="text-lg text-white/80 mb-2">{talentData.company || 'Independent Creative'}</p>
          <p className="text-base text-gray-200 flex items-center mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {talentData.location}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-green-500/20 text-green-200 rounded-full text-base font-medium">
              {talentData.availability?.status || 'Available'}
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full text-base font-medium">
              {talentData.rates?.dayRate || '$2500-3500/day'}
            </span>
            {talentData.unions && talentData.unions.map((union, index) => (
              <span key={index} className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-base font-medium">
                {union}
              </span>
            ))}
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-3xl font-bold text-white mb-1">
            {talentData.profileCompletion || '95'}%
          </div>
          <div className="text-base text-gray-200 mb-3">Profile Complete</div>
          <div className="w-24 h-3 bg-purple-700/50 rounded-full">
            <div
              className="h-full bg-purple-400 rounded-full"
              style={{ width: `${talentData.profileCompletion || 95}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-gray-200 leading-relaxed text-lg">{talentData.bio}</p>
    </div>
  )

  // Creative Statistics Section - Matching Investor Portal Style
  const CreativeStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-center">
        <div className="text-3xl font-bold text-white">24</div>
        <div className="text-base text-purple-100">Projects Completed</div>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
        <div className="text-3xl font-bold text-white">8+</div>
        <div className="text-base text-blue-100">Years Experience</div>
      </div>
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-center">
        <div className="text-3xl font-bold text-white">12</div>
        <div className="text-base text-green-100">Award Nominations</div>
      </div>
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-lg p-6 text-center">
        <div className="text-3xl font-bold text-white">A+</div>
        <div className="text-base text-orange-100">Industry Rating</div>
      </div>
    </div>
  )

  // Smart Matching Preferences Section
  const CreativePreferences = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-semibold text-white mb-6">🎭 Creative Preferences & Expertise</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-medium text-white mb-3">Preferred Genres</h4>
          <div className="flex flex-wrap gap-2">
            {['Drama', 'Thriller', 'Independent', 'Documentary'].map((genre, index) => (
              <span key={index} className="px-3 py-1 bg-purple-600 text-purple-100 text-sm rounded-full">
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium text-white mb-3">Creative Roles</h4>
          <div className="flex flex-wrap gap-2">
            {['Director', 'Writer', 'Producer', 'Editor'].map((role, index) => (
              <span key={index} className="px-3 py-1 bg-blue-600 text-blue-100 text-sm rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div>
          <h4 className="font-medium text-white mb-2">Budget Range</h4>
          <p className="text-purple-400 font-semibold">$100K - $5M</p>
        </div>
        <div>
          <h4 className="font-medium text-white mb-2">Location Preference</h4>
          <p className="text-blue-400">Los Angeles & Global</p>
        </div>
        <div>
          <h4 className="font-medium text-white mb-2">Project Timeline</h4>
          <p className="text-green-400">2-12 months</p>
        </div>
      </div>
    </div>
  )

  // Contact Information Section
  const ContactInfo = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-white">{talentData.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-white">{talentData.phone}</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
            </svg>
            <span className="text-white">{talentData.website}</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.989C24.007 5.367 18.641.001.012.001z"/>
            </svg>
            <span className="text-white">{talentData.social?.instagram}</span>
          </div>
        </div>
      </div>
    </div>
  )

  // Current Availability Status
  const AvailabilityStatus = () => (
    <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-lg border border-green-500/30 rounded-lg p-6 mb-8">
      <h3 className="text-2xl font-semibold text-white mb-6">🎯 Current Creative Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-400">Available</div>
          <div className="text-base text-gray-300">Current Status</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400">Immediate</div>
          <div className="text-base text-gray-300">Next Available</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-400">Q1 2024</div>
          <div className="text-base text-gray-300">Booking Timeline</div>
        </div>
      </div>
    </div>
  )

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Bio */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
        <p className="text-gray-200 leading-relaxed">{talentData.bio}</p>
      </div>

      {/* Current Projects & Availability */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Current Status</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-white mb-3">Current Projects</h4>
            {talentData.currentProjects && talentData.currentProjects.length > 0 ? (
              <div className="space-y-3">
                {talentData.currentProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-purple-400 pl-4">
                    <p className="font-medium text-white">{project.title}</p>
                    <p className="text-sm text-gray-300">
                      {project.role} • {project.status}
                    </p>
                    <p className="text-xs text-gray-400">
                      Started: {new Date(project.startDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No current projects</p>
            )}
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Availability Details</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-300">Next Available:</span>
                <span className="text-sm font-medium text-white">
                  {new Date(
                    talentData.availabilityDetails?.nextAvailable || Date.now()
                  ).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-300">Travel Willing:</span>
                <span className="text-sm font-medium text-white">
                  {talentData.availabilityDetails?.travelWilling ? 'Yes' : 'No'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-300">Remote Capable:</span>
                <span className="text-sm font-medium text-white">
                  {talentData.availabilityDetails?.remoteCapable ? 'Yes' : 'No'}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-300">Preferred Locations:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {talentData.availabilityDetails?.workingLocations?.map((location, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Skills Preview */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Core Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {talentData.coreSkills?.slice(0, 4).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <div>
                <p className="font-medium text-white">{skill.name}</p>
                <p className="text-sm text-gray-300">{skill.years} years experience</p>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  skill.level === 'Expert'
                    ? 'bg-green-500/20 text-green-300'
                    : skill.level === 'Advanced'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-yellow-500/20 text-yellow-300'
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
            className="text-purple-300 hover:text-purple-200 text-sm font-medium"
          >
            View All Skills & Expertise →
          </button>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Recent Achievements</h3>
        <div className="space-y-3">
          {talentData.achievements?.slice(0, 3).map((achievement, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achievement.type === 'Award'
                    ? 'bg-yellow-500/20'
                    : achievement.type === 'Recognition'
                      ? 'bg-purple-500/20'
                      : achievement.type === 'Milestone'
                        ? 'bg-blue-500/20'
                        : 'bg-green-500/20'
                }`}
              >
                <svg
                  className={`w-4 h-4 ${
                    achievement.type === 'Award'
                      ? 'text-yellow-300'
                      : achievement.type === 'Recognition'
                        ? 'text-purple-300'
                        : achievement.type === 'Milestone'
                          ? 'text-blue-300'
                          : 'text-green-300'
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
                <p className="font-medium text-white">{achievement.title}</p>
                <p className="text-sm text-gray-300">
                  {achievement.organization} • {achievement.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industry Links */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Industry Profiles</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {talentData.actorAccess && (
            <a
              href={`https://actorsaccess.com/${talentData.actorAccess}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">AA</span>
              </div>
              <span className="text-sm font-medium text-white">Actors Access</span>
            </a>
          )}

          {talentData.castingNetworks && (
            <a
              href={`https://castingnetworks.com/${talentData.castingNetworks}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">CN</span>
              </div>
              <span className="text-sm font-medium text-white">Casting Networks</span>
            </a>
          )}

          {talentData.imdb && (
            <a
              href={`https://imdb.com/name/${talentData.imdb}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">IMDb</span>
              </div>
              <span className="text-sm font-medium text-white">IMDb Page</span>
            </a>
          )}

          {talentData.website && (
            <a
              href={talentData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
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
              <span className="text-sm font-medium text-white">Website</span>
            </a>
          )}
        </div>
      </div>

      {/* Social Media & Contact */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Social Media & Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-white mb-3">Contact Information</h4>
            <div className="space-y-2">
              {talentData.email && (
                <a
                  href={`mailto:${talentData.email}`}
                  className="flex items-center gap-3 text-gray-200 hover:text-purple-300 transition-colors"
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
                  className="flex items-center gap-3 text-gray-200 hover:text-purple-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">{talentData.phone}</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-3">Social Media</h4>
            <div className="grid grid-cols-2 gap-3">
              {talentData.instagram && (
                <a
                  href={talentData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-200 hover:text-pink-300 hover:bg-pink-500/10 rounded-lg transition-colors"
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
                  className="flex items-center gap-2 p-2 text-sm text-gray-200 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
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
                  className="flex items-center gap-2 p-2 text-sm text-gray-200 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
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
                  className="flex items-center gap-2 p-2 text-sm text-gray-200 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
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
                  className="flex items-center gap-2 p-2 text-sm text-gray-200 hover:text-white hover:bg-gray-500/10 rounded-lg transition-colors"
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
      </div>

      {/* Special Skills (for Actors) */}
      {talentData.specialSkills && (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Special Skills</h3>
          <div className="flex flex-wrap gap-2">
            {talentData.specialSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Awards */}
      {talentData.awards && talentData.awards.length > 0 && (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Awards & Recognition</h3>
          <div className="space-y-3">
            {talentData.awards.map((award, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-white">{award.title}</div>
                  <div className="text-sm text-gray-300">
                    {award.festival} - {award.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const PortfolioTab = () => (
    <div className="space-y-6">
      {/* Demo Reel */}
      {talentData.demoReel && (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Demo Reel</h3>
          <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center border border-white/10">
            <div className="text-center">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
              <p className="text-gray-300">Demo Reel</p>
              <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                Watch Reel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Headshots (for Actors) */}
      {talentData.headshots && (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Headshots</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {talentData.headshots.map((headshot, index) => (
              <div key={index} className="aspect-[4/5] bg-gray-800/50 rounded-lg overflow-hidden border border-white/10">
                <img
                  src={headshot}
                  alt={`Headshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Portfolio Items */}
      {talentData.portfolio && (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {talentData.portfolio.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="aspect-video bg-gray-800/50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700 text-white">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )

  const CreditsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Film & Television Credits</h3>
        <div className="space-y-4">
          {talentData.credits.map((credit, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-medium text-white">{credit.title}</h4>
                  <p className="text-purple-300 font-medium">{credit.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-300">{credit.year}</span>
                  <span
                    className={`block px-2 py-1 mt-1 text-xs rounded-full ${
                      credit.status === 'Released'
                        ? 'bg-green-500/20 text-green-300'
                        : credit.status === 'Streaming'
                          ? 'bg-blue-500/20 text-blue-300'
                          : credit.status === 'Festival Circuit'
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-yellow-500/20 text-yellow-300'
                    }`}
                  >
                    {credit.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-300">Type:</span>
                  <span className="ml-2 font-medium text-white">{credit.type}</span>
                </div>
                <div>
                  <span className="text-gray-300">Director:</span>
                  <span className="ml-2 font-medium text-white">{credit.director}</span>
                </div>
                {credit.platform && (
                  <div>
                    <span className="text-gray-300">Platform:</span>
                    <span className="ml-2 font-medium text-white">{credit.platform}</span>
                  </div>
                )}
              </div>

              {credit.festivals && credit.festivals.length > 0 && (
                <div className="mt-3">
                  <span className="text-sm text-gray-300">Festival Selections:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {credit.festivals.map((festival, festIndex) => (
                      <span
                        key={festIndex}
                        className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full"
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
      </div>

      {/* Awards Section moved here for better organization */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Awards & Recognition</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {talentData.awards.map((award, index) => (
            <div key={index} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">{award.title}</p>
                <p className="text-sm text-gray-300">{award.festival}</p>
                <p className="text-xs text-gray-400">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const SkillsTab = () => (
    <div className="space-y-6">
      {/* Core Acting Skills */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Core Acting Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {talentData.coreSkills?.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg"
            >
              <div>
                <p className="font-medium text-white">{skill.name}</p>
                <p className="text-sm text-gray-300">{skill.years} years experience</p>
              </div>
              <div className="text-right">
                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    skill.level === 'Expert'
                      ? 'bg-green-500/20 text-green-300'
                      : skill.level === 'Advanced'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-yellow-500/20 text-yellow-300'
                  }`}
                >
                  {skill.level}
                </span>
                <div className="w-24 h-2 bg-white/20 rounded-full mt-2">
                  <div
                    className={`h-full rounded-full ${
                      skill.level === 'Expert'
                        ? 'bg-green-400'
                        : skill.level === 'Advanced'
                          ? 'bg-blue-400'
                          : 'bg-yellow-400'
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
      </div>

      {/* Special Skills & Talents */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Special Skills & Talents</h3>
        <div className="flex flex-wrap gap-2">
          {talentData.specialSkills?.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-2 bg-purple-500/20 text-purple-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {talentData.technicalSkills?.map((skill, index) => (
            <div key={index} className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Languages</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {talentData.languages?.map((lang, index) => (
            <div key={index} className="text-center p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="font-medium text-white">{lang.language}</p>
              <span
                className={`inline-block px-2 py-1 mt-2 text-xs rounded-full ${
                  lang.proficiency === 'Native'
                    ? 'bg-green-500/20 text-green-300'
                    : lang.proficiency === 'Fluent'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                }`}
              >
                {lang.proficiency}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">Certifications & Training</h3>
        <div className="space-y-3">
          {talentData.certifications?.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">{cert.name}</p>
                  <p className="text-sm text-gray-300">{cert.issuer}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">{cert.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Achievements */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-white">All Achievements</h3>
        <div className="space-y-4">
          {talentData.achievements?.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-white/5 border border-white/10 rounded-lg"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  achievement.type === 'Award'
                    ? 'bg-yellow-500/20'
                    : achievement.type === 'Recognition'
                      ? 'bg-purple-500/20'
                      : achievement.type === 'Milestone'
                        ? 'bg-blue-500/20'
                        : 'bg-green-500/20'
                }`}
              >
                <svg
                  className={`w-5 h-5 ${
                    achievement.type === 'Award'
                      ? 'text-yellow-300'
                      : achievement.type === 'Recognition'
                        ? 'text-purple-300'
                        : achievement.type === 'Milestone'
                          ? 'text-blue-300'
                          : 'text-green-300'
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
                    <p className="font-medium text-white">{achievement.title}</p>
                    <p className="text-sm text-gray-300">{achievement.organization}</p>
                  </div>
                  <span className="text-sm text-gray-400">{achievement.year}</span>
                </div>
                <span
                  className={`inline-block px-2 py-1 mt-2 text-xs rounded-full ${
                    achievement.type === 'Award'
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : achievement.type === 'Recognition'
                        ? 'bg-purple-500/20 text-purple-300'
                        : achievement.type === 'Milestone'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-green-500/20 text-green-300'
                  }`}
                >
                  {achievement.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Back Button */}
      <div className="p-4">
        <Button variant="outline" onClick={onBack} className="mb-4 bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20">
          ← Back to Talent Network
        </Button>
      </div>

      {/* Profile Container */}
      <div className="max-w-4xl mx-auto pb-8">
        <div className="mb-6 overflow-hidden">
          <IndieGateLogo className="h-10" />
          <ProfileHeader />

          {/* Creative Statistics Section */}
          <CreativeStats />

          {/* Creative Preferences Section */}
          <CreativePreferences />

          {/* Contact Information Section */}
          <ContactInfo />

          {/* Availability Status */}
          <AvailabilityStatus />

          {/* Navigation Tabs */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg mb-6">
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
                      ? 'border-purple-400 text-purple-300'
                      : 'border-transparent text-white/70 hover:text-white hover:border-white/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

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
