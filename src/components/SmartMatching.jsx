import { useState, useEffect } from 'react'
import Button from './Button'
import Card from './Card'

const SmartMatching = ({ userType = 'talent', userProfile = {} }) => {
  const [matches, setMatches] = useState([])
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0)
  const [filters, setFilters] = useState({
    location: 'all',
    budget: 'all',
    genre: 'all',
    experience: 'all',
    availability: 'all'
  })
  const [viewMode, setViewMode] = useState('cards') // 'cards' or 'list'
  const [likedMatches, setLikedMatches] = useState([])
  const [savedMatches, setSavedMatches] = useState([])
  const [minMatchThreshold, setMinMatchThreshold] = useState(71) // Minimum match percentage

  // Sample matching data - will be replaced with real AI matching
  const generateMatches = () => {
    if (userType === 'talent') {
      return [
        {
          id: 1,
          type: 'project',
          title: 'Indie Drama Feature',
          company: 'Sunset Pictures',
          producer: 'Michael Chen',
          avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
          location: 'Los Angeles, CA',
          budget: '$800K - $1.2M',
          genre: ['Drama', 'Thriller'],
          status: 'Pre-Production',
          startDate: '2024-04-15',
          description: 'Seeking lead actress for psychological drama about identity and memory. Character-driven story requiring emotional range and method acting skills.',
          requirements: {
            role: 'Lead Actress',
            ageRange: '25-35',
            skills: ['Method Acting', 'Emotional Range', 'Stage Combat'],
            experience: 'Advanced',
            union: 'SAG-AFTRA preferred'
          },
          matchScore: 94,
          matchReasons: [
            'Perfect skill match: Method Acting (Expert)',
            'Location compatibility: Los Angeles',
            'Experience level alignment',
            'SAG-AFTRA membership',
            'Available during production window'
          ],
          urgency: 'high',
          applications: 23,
          verified: true
        },
        {
          id: 2,
          type: 'project',
          title: 'Historical Documentary',
          company: 'Truth Films',
          producer: 'Sarah Williams',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=200&h=200&fit=crop&crop=face',
          location: 'New York, NY',
          budget: '$400K - $600K',
          genre: ['Documentary'],
          status: 'Development',
          startDate: '2024-06-01',
          description: 'Voice-over narrator needed for 6-part historical documentary series about immigration in America.',
          requirements: {
            role: 'Voice Over Artist',
            skills: ['Voice Acting', 'Narration', 'Clear Diction'],
            experience: 'Intermediate',
            remote: true
          },
          matchScore: 78,
          matchReasons: [
            'Voice acting skills match',
            'Remote work capability',
            'Documentary experience preferred',
            'Flexible schedule alignment'
          ],
          urgency: 'medium',
          applications: 8,
          verified: true
        },
        {
          id: 3,
          type: 'project',
          title: 'Sci-Fi Short Film',
          company: 'Future Lens Studios',
          producer: 'Alex Rodriguez',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
          location: 'Atlanta, GA',
          budget: '$50K - $100K',
          genre: ['Sci-Fi', 'Action'],
          status: 'Pre-Production',
          startDate: '2024-03-20',
          description: 'Supporting role in futuristic action short. Requires physical performance and green screen experience.',
          requirements: {
            role: 'Supporting Actor',
            skills: ['Green Screen', 'Physical Performance', 'Improvisation'],
            experience: 'Intermediate',
            travel: true
          },
          matchScore: 85,
          matchReasons: [
            'Green screen experience',
            'Travel willingness',
            'Improvisation skills',
            'Action/stunt background'
          ],
          urgency: 'high',
          applications: 15,
          verified: false
        }
      ]
    } else {
      // Investor view - showing talent matches
      return [
        {
          id: 1,
          type: 'talent',
          name: 'Emma Rodriguez',
          role: 'Director',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=200&h=200&fit=crop&crop=face',
          location: 'Los Angeles, CA',
          experience: '8+ years',
          specialties: ['Independent Drama', 'Character-driven Stories'],
          currentProject: 'Post-Production on "Silent Hours"',
          seekingFunding: '$1.2M - $2.5M',
          genre: ['Drama', 'Thriller', 'Documentary'],
          achievements: ['Sundance Alumni', 'SXSW Winner'],
          description: 'Award-winning director seeking funding for next feature film. Strong track record with festival successes and critical acclaim.',
          projectDetails: {
            title: 'Untitled Drama Project',
            stage: 'Development',
            budget: '$1.8M',
            timeline: '6 months pre-production, 4 weeks principal photography',
            distribution: 'Festival circuit + streaming'
          },
          matchScore: 92,
          matchReasons: [
            'Budget range alignment ($1.2M - $2.5M)',
            'Genre preference match: Drama',
            'Strong festival track record',
            'Los Angeles location',
            'Proven ROI potential'
          ],
          verified: true,
          urgency: 'medium'
        },
        {
          id: 2,
          type: 'talent',
          name: 'Marcus Thompson',
          role: 'Producer/Director',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
          location: 'Atlanta, GA',
          experience: '12+ years',
          specialties: ['Horror', 'Thriller', 'Genre Films'],
          currentProject: 'Seeking funding for horror feature',
          seekingFunding: '$800K - $1.5M',
          genre: ['Horror', 'Thriller'],
          achievements: ['Film Independent Finalist', 'Completed 4 features'],
          description: 'Experienced producer with distribution connections. Proven ability to deliver projects on time and under budget.',
          projectDetails: {
            title: 'The Watchers',
            stage: 'Pre-Production',
            budget: '$1.2M',
            timeline: '8 weeks shooting, 6 months post',
            distribution: 'Theatrical + VOD guaranteed'
          },
          matchScore: 87,
          matchReasons: [
            'Horror genre expertise',
            'Budget efficiency track record',
            'Distribution connections',
            'Multiple completed features',
            'Strong commercial potential'
          ],
          verified: true,
          urgency: 'high'
        }
      ]
    }
  }

  useEffect(() => {
    const allMatches = generateMatches()
    // Filter matches based on minimum threshold
    const filteredMatches = allMatches.filter(match => match.matchScore >= minMatchThreshold)
    setMatches(filteredMatches)
  }, [userType, filters, minMatchThreshold])

  const currentMatch = matches[currentMatchIndex]

  const handleLike = (matchId) => {
    setLikedMatches([...likedMatches, matchId])
    nextMatch()
  }

  const handlePass = () => {
    nextMatch()
  }

  const handleSave = (matchId) => {
    if (!savedMatches.includes(matchId)) {
      setSavedMatches([...savedMatches, matchId])
    }
  }

  const nextMatch = () => {
    if (currentMatchIndex < matches.length - 1) {
      setCurrentMatchIndex(currentMatchIndex + 1)
    }
  }

  const previousMatch = () => {
    if (currentMatchIndex > 0) {
      setCurrentMatchIndex(currentMatchIndex - 1)
    }
  }

  const MatchCard = ({ match, isInteractive = true }) => (
    <Card className="max-w-md mx-auto bg-white shadow-lg">
      {/* Match Header */}
      <div className="relative">
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src={match.avatar}
                alt={match.name || match.title}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {match.name || match.title}
                </h3>
                <p className="text-gray-600">
                  {match.role || match.company}
                </p>
              </div>
            </div>
            
            {/* Match Score */}
            <div className="text-center">
              <div className={`text-2xl font-bold ${
                match.matchScore >= 90 ? 'text-green-600' :
                match.matchScore >= 80 ? 'text-blue-600' :
                match.matchScore >= 70 ? 'text-yellow-600' : 'text-gray-600'
              }`}>
                {match.matchScore}%
              </div>
              <div className="text-xs text-gray-500">Match</div>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {match.location}
            </span>
            {match.verified && (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified
              </span>
            )}
            {match.urgency === 'high' && (
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                Urgent
              </span>
            )}
            {match.budget && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                {match.budget}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            {match.description}
          </p>

          {/* Match Reasons */}
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2 text-sm">Why this is a great match:</h4>
            <ul className="space-y-1">
              {match.matchReasons.slice(0, 3).map((reason, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          {match.type === 'project' && (
            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <span className="text-gray-500">Role:</span>
                <span className="ml-1 font-medium text-gray-900">{match.requirements?.role}</span>
              </div>
              <div>
                <span className="text-gray-500">Start:</span>
                <span className="ml-1 font-medium text-gray-900">{new Date(match.startDate).toLocaleDateString()}</span>
              </div>
            </div>
          )}

          {match.type === 'talent' && match.projectDetails && (
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <h5 className="font-medium text-sm text-gray-900 mb-2">Current Project</h5>
              <p className="text-sm text-gray-700 mb-1">{match.projectDetails.title}</p>
              <p className="text-xs text-gray-500">{match.projectDetails.stage} • {match.projectDetails.budget}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        {isInteractive && (
          <div className="flex items-center justify-center space-x-4 p-6 pt-0">
            <button
              onClick={handlePass}
              className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={() => handleSave(match.id)}
              className="w-12 h-12 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            
            <button
              onClick={() => handleLike(match.id)}
              className="w-12 h-12 bg-green-100 hover:bg-green-200 text-green-600 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Card>
  )

  const FilterBar = () => (
    <Card className="p-4 mb-6 bg-white shadow-lg">
      <div className="flex flex-wrap items-center gap-4">
        {/* Match Threshold Control */}
        <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-blue-50 px-3 py-2 rounded-lg border border-purple-200">
          <label className="text-sm font-medium text-gray-700">Min Match:</label>
          <input
            type="range"
            min="50"
            max="95"
            value={minMatchThreshold}
            onChange={(e) => setMinMatchThreshold(parseInt(e.target.value))}
            className="w-20 accent-purple-600"
          />
          <span className="text-sm font-bold text-purple-700 min-w-[45px]">{minMatchThreshold}%</span>
        </div>

        <div className="h-6 w-px bg-gray-300"></div>

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Location:</label>
          <select 
            value={filters.location} 
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-700"
          >
            <option value="all">All Locations</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="new-york">New York</option>
            <option value="atlanta">Atlanta</option>
            <option value="remote">Remote</option>
          </select>
        </div>

        {userType === 'talent' && (
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">Budget:</label>
            <select 
              value={filters.budget} 
              onChange={(e) => setFilters({...filters, budget: e.target.value})}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-700"
            >
              <option value="all">All Budgets</option>
              <option value="micro">Under $100K</option>
              <option value="low">$100K - $500K</option>
              <option value="medium">$500K - $2M</option>
              <option value="high">$2M+</option>
            </select>
          </div>
        )}

        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Genre:</label>
          <select 
            value={filters.genre} 
            onChange={(e) => setFilters({...filters, genre: e.target.value})}
            className="text-sm border border-gray-300 rounded-md px-2 py-1 text-gray-700"
          >
            <option value="all">All Genres</option>
            <option value="drama">Drama</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="horror">Horror</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>

        <div className="flex items-center space-x-2 ml-auto">
          <button
            onClick={() => setViewMode('cards')}
            className={`p-2 rounded-md ${viewMode === 'cards' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🤖 Smart Matching
          </h1>
          <p className="text-gray-600">
            AI-powered matches based on your profile, skills, and preferences
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 text-center bg-white shadow-lg">
            <div className="text-2xl font-bold text-blue-600">{matches.length}</div>
            <div className="text-sm text-gray-600">Quality Matches</div>
            <div className="text-xs text-gray-500 mt-1">≥{minMatchThreshold}% compatibility</div>
          </Card>
          <Card className="p-4 text-center bg-white shadow-lg">
            <div className="text-2xl font-bold text-green-600">{likedMatches.length}</div>
            <div className="text-sm text-gray-600">Liked</div>
          </Card>
          <Card className="p-4 text-center bg-white shadow-lg">
            <div className="text-2xl font-bold text-purple-600">{savedMatches.length}</div>
            <div className="text-sm text-gray-600">Saved</div>
          </Card>
          <Card className="p-4 text-center bg-white shadow-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {matches.length > 0 ? Math.round(matches.reduce((acc, match) => acc + match.matchScore, 0) / matches.length) : 0}%
            </div>
            <div className="text-sm text-gray-600">Avg Match</div>
          </Card>
        </div>

        {/* Filters */}
        <FilterBar />

        {/* Main Matching Interface */}
        {viewMode === 'cards' && currentMatch ? (
          <div className="space-y-6">
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button 
                onClick={previousMatch}
                disabled={currentMatchIndex === 0}
                variant="outline"
                size="sm"
              >
                ← Previous
              </Button>
              <span className="text-sm text-gray-600">
                {currentMatchIndex + 1} of {matches.length} quality matches
              </span>
              <Button 
                onClick={nextMatch}
                disabled={currentMatchIndex === matches.length - 1}
                variant="outline"
                size="sm"
              >
                Next →
              </Button>
            </div>

            {/* Current Match Card */}
            <MatchCard match={currentMatch} />
          </div>
        ) : (
          /* List View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} isInteractive={false} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {matches.length === 0 && (
          <Card className="p-12 text-center bg-white shadow-lg">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No matches meet your criteria</h3>
            <p className="text-gray-600 mb-4">Try lowering your minimum match threshold to {minMatchThreshold - 10}% or adjusting your filters.</p>
            <div className="flex justify-center space-x-3">
              <Button onClick={() => setMinMatchThreshold(Math.max(50, minMatchThreshold - 10))}>
                Lower Threshold to {Math.max(50, minMatchThreshold - 10)}%
              </Button>
              <Button variant="outline">Update Profile</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default SmartMatching 