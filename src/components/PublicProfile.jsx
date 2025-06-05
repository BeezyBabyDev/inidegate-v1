import Card from './Card'
import Button from './Button'

const PublicProfile = ({ userId, onBack }) => {
  // Sample public profile data - this would come from an API based on userId
  const publicProfiles = {
    'sarah-montgomery': {
      id: 'sarah-montgomery',
      name: 'Sarah Montgomery',
      role: 'Executive Producer',
      company: 'Montgomery Entertainment',
      location: 'Beverly Hills, CA',
      memberSince: 'March 2022',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'investor',
      investmentFocus: 'Specializes in documentary films and narrative features with social impact themes. Focus on projects with strong storytelling and market potential.',
      publicStats: {
        forumPosts: 47,
        communityContributions: 23,
        helpfulVotes: 156,
        profileViews: 892
      },
      expertise: ['Documentary Films', 'Social Impact', 'Market Analysis', 'Film Distribution'],
      bio: 'Award-winning executive producer with 15+ years in independent film financing. Passionate about stories that create meaningful change and build connections between audiences and important social issues.'
    },
    'michael-chen': {
      id: 'michael-chen',
      name: 'Michael Chen',
      role: 'Angel Investor',
      company: 'Chen Capital Partners',
      location: 'San Francisco, CA',
      memberSince: 'June 2022',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'investor',
      investmentFocus: 'Technology-forward film projects and innovative distribution platforms. Interested in VR/AR content and streaming technology applications.',
      publicStats: {
        forumPosts: 34,
        communityContributions: 18,
        helpfulVotes: 128,
        profileViews: 743
      },
      expertise: ['Technology Integration', 'Digital Distribution', 'Innovation', 'Streaming Platforms'],
      bio: 'Tech entrepreneur turned film investor. Bringing Silicon Valley innovation to entertainment industry with focus on emerging technologies and new audience engagement methods.'
    },
    'david-park': {
      id: 'david-park',
      name: 'David Park',
      role: 'Family Office',
      company: 'Park Family Investments',
      location: 'New York, NY',
      memberSince: 'February 2023',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'investor',
      investmentFocus: 'Large-scale film investments and franchise development. Focus on established IPs and proven creative teams with track records.',
      publicStats: {
        forumPosts: 29,
        communityContributions: 31,
        helpfulVotes: 201,
        profileViews: 1247
      },
      expertise: ['Large Scale Investments', 'Franchise Development', 'Risk Management', 'IP Strategy'],
      bio: 'Managing film investments for high-net-worth families. Expertise in structuring complex entertainment deals and building sustainable film portfolios.'
    },
    'alex-rivera': {
      id: 'alex-rivera',
      name: 'Alex Rivera',
      role: 'Actor',
      company: 'Independent Talent',
      location: 'Los Angeles, CA',
      memberSince: 'November 2022',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'talent',
      investmentFocus: 'Multi-hyphenate artist with experience in acting, writing, and directing. Passionate about authentic storytelling and diverse representation in film.',
      publicStats: {
        forumPosts: 52,
        communityContributions: 28,
        helpfulVotes: 189,
        profileViews: 634
      },
      expertise: ['Acting', 'Screenwriting', 'Character Development', 'Independent Film'],
      bio: 'Versatile performer and storyteller with credits in independent films and streaming series. Advocate for inclusive casting and authentic representation in entertainment.'
    },
    'maria-santos': {
      id: 'maria-santos',
      name: 'Maria Santos',
      role: 'Director of Photography',
      company: 'Freelance Cinematographer',
      location: 'Austin, TX',
      memberSince: 'September 2022',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'talent',
      investmentFocus: 'Visual storytelling specialist with expertise in both narrative and documentary cinematography. Known for innovative lighting techniques and budget-conscious solutions.',
      publicStats: {
        forumPosts: 38,
        communityContributions: 45,
        helpfulVotes: 167,
        profileViews: 521
      },
      expertise: ['Cinematography', 'Visual Storytelling', 'Equipment', 'Budget Management'],
      bio: 'Award-winning cinematographer with passion for visual storytelling. Specializes in creating cinematic looks on independent budgets while mentoring emerging talent.'
    }
  }

  // Get profile data (fallback to default if not found)
  const profile = publicProfiles[userId] || {
    id: 'unknown',
    name: 'Profile Not Found',
    role: 'Unknown',
    company: 'N/A',
    location: 'Unknown',
    memberSince: 'N/A',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    verified: false,
    userType: 'unknown',
    investmentFocus: 'Profile information not available.',
    publicStats: { forumPosts: 0, communityContributions: 0, helpfulVotes: 0, profileViews: 0 },
    expertise: [],
    bio: 'This profile is not available or the user has restricted public access.'
  }

  const handleBackToForum = () => {
    if (typeof onBack === 'function') {
      onBack()
    } else {
      // Fallback navigation
      window.history.back()
    }
  }

  const getUserTypeColor = () => {
    if (profile.userType === 'investor') {
      return {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        accent: 'text-green-600'
      }
    } else {
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200',
        accent: 'text-purple-600'
      }
    }
  }

  const colors = getUserTypeColor()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Back Navigation */}
        <div className="mb-6">
          <Button
            onClick={handleBackToForum}
            variant="outline"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Community</span>
          </Button>
        </div>

        {/* Public Profile Header */}
        <Card className={`p-8 mb-6 ${colors.bg} ${colors.border} border`}>
          <div className="flex items-start space-x-6">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {profile.verified && (
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
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
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                {profile.verified && (
                  <span className="text-blue-500 text-sm font-medium">Verified</span>
                )}
              </div>
              
              <p className={`text-xl font-semibold ${colors.accent} mb-1`}>{profile.role}</p>
              <p className="text-lg text-gray-700 mb-2">{profile.company}</p>
              
              <div className="flex flex-col space-y-1 text-sm text-gray-600">
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {profile.location}
                </p>
                
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Member since {profile.memberSince}
                </p>
              </div>
            </div>

            <div className={`px-4 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
              <p className="text-sm text-gray-600">Network</p>
              <p className={`font-semibold ${colors.text} capitalize`}>
                {profile.userType === 'investor' ? 'Investor' : 'Talent'}
              </p>
            </div>
          </div>
        </Card>

        {/* Bio & Focus */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
          <p className="text-gray-700 leading-relaxed mb-4">{profile.bio}</p>
          
          <h4 className="font-medium text-gray-900 mb-2">
            {profile.userType === 'investor' ? 'Investment Focus' : 'Professional Focus'}
          </h4>
          <p className="text-gray-600">{profile.investmentFocus}</p>
        </Card>

        {/* Expertise Tags */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {profile.expertise.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Public Activity Stats */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Activity</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>{profile.publicStats.forumPosts}</div>
              <div className="text-sm text-gray-600">Forum Posts</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>{profile.publicStats.communityContributions}</div>
              <div className="text-sm text-gray-600">Contributions</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>{profile.publicStats.helpfulVotes}</div>
              <div className="text-sm text-gray-600">Helpful Votes</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>{profile.publicStats.profileViews}</div>
              <div className="text-sm text-gray-600">Profile Views</div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  )
}

export default PublicProfile 