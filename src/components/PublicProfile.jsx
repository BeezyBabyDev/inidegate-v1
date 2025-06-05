import { useState } from 'react'
import Card from './Card'
import Button from './Button'

const PublicProfile = ({ userId, onBack, onOpenMessaging }) => {
  const [connectionStatus, setConnectionStatus] = useState('none') // none, pending, connected
  const [isFollowing, setIsFollowing] = useState(false)
  const [showInvestmentCriteria, setShowInvestmentCriteria] = useState(false)

  // Sample public profile data - this would come from an API based on userId
  const publicProfiles = {
    'sarah-montgomery': {
      id: 'sarah-montgomery',
      name: 'Sarah Montgomery',
      role: 'Executive Producer',
      company: 'Montgomery Entertainment',
      location: 'Beverly Hills, CA',
      memberSince: 'March 2022',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'investor',
      investmentFocus:
        'Specializes in documentary films and narrative features with social impact themes. Focus on projects with strong storytelling and market potential.',
      publicStats: {
        forumPosts: 47,
        communityContributions: 23,
        helpfulVotes: 156,
        profileViews: 892,
        followers: 234,
        following: 89,
        connections: 156,
      },
      expertise: ['Documentary Films', 'Social Impact', 'Market Analysis', 'Film Distribution'],
      bio: 'Award-winning executive producer with 15+ years in independent film financing. Passionate about stories that create meaningful change and build connections between audiences and important social issues.',
      // New networking data
      investmentCriteria: {
        budgetRange: { min: '$500K', max: '$5M' },
        preferredGenres: ['Documentary', 'Drama', 'Social Impact'],
        investmentStages: ['Development', 'Pre-Production', 'Post-Production'],
        dealStructure: ['Equity Participation', 'Revenue Share'],
        geographicFocus: 'North America, Europe',
        minimumIRR: '15%',
        holdPeriod: '3-5 years',
        contentTypes: ['Feature Films', 'Limited Series'],
        distributionFocus: ['Theatrical', 'Streaming', 'Festival Circuit'],
      },
      referrals: [
        {
          referrer: 'Michael Chen',
          category: 'Deal Flow Quality',
          rating: 5,
          comment:
            'Sarah consistently brings high-quality documentary projects with strong social impact potential.',
          verified: true,
          date: '2023-08-15',
        },
        {
          referrer: 'David Park',
          category: 'Communication & Responsiveness',
          rating: 5,
          comment:
            'Excellent communication throughout our $2.3M co-investment. Always available for key decisions.',
          verified: true,
          date: '2023-06-22',
        },
      ],
      portfolioHighlights: {
        projectsFinanced: 23,
        totalInvested: '$47.2M',
        avgProjectSize: '$2.1M',
        successMetrics: {
          awards: '8 Festival Awards',
          boxOffice: '$156M Combined',
          streaming: '45M+ Views',
        },
        coInvestors: ['David Park', 'Chen Capital', 'Impact Films LLC'],
        recentDeals: [
          { title: 'Climate Stories', budget: '$1.8M', stage: 'Post-Production', year: 2023 },
          { title: 'Voices Unheard', budget: '$950K', stage: 'Distribution', year: 2023 },
        ],
      },
    },
    'michael-chen': {
      id: 'michael-chen',
      name: 'Michael Chen',
      role: 'Angel Investor',
      company: 'Chen Capital Partners',
      location: 'San Francisco, CA',
      memberSince: 'June 2022',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'investor',
      investmentFocus:
        'Technology-forward film projects and innovative distribution platforms. Interested in VR/AR content and streaming technology applications.',
      publicStats: {
        forumPosts: 34,
        communityContributions: 18,
        helpfulVotes: 128,
        profileViews: 743,
        followers: 189,
        following: 124,
        connections: 203,
      },
      expertise: [
        'Technology Integration',
        'Digital Distribution',
        'Innovation',
        'Streaming Platforms',
      ],
      bio: 'Tech entrepreneur turned film investor. Bringing Silicon Valley innovation to entertainment industry with focus on emerging technologies and new audience engagement methods.',
      investmentCriteria: {
        budgetRange: { min: '$250K', max: '$10M' },
        preferredGenres: ['Sci-Fi', 'Thriller', 'Innovation-focused'],
        investmentStages: ['Development', 'Pre-Production', 'Technology Integration'],
        dealStructure: ['Equity Participation', 'Technology Licensing'],
        geographicFocus: 'Global, Silicon Valley focus',
        minimumIRR: '20%',
        holdPeriod: '2-4 years',
        contentTypes: ['Feature Films', 'Series', 'VR/AR Content'],
        distributionFocus: ['Streaming', 'Digital-First', 'Tech Integration'],
      },
      referrals: [
        {
          referrer: 'Sarah Montgomery',
          category: 'Innovation & Technology',
          rating: 5,
          comment:
            'Michael brings invaluable tech perspective to traditional film financing. Great strategic partner.',
          verified: true,
          date: '2023-09-01',
        },
      ],
      portfolioHighlights: {
        projectsFinanced: 15,
        totalInvested: '$28.4M',
        avgProjectSize: '$1.9M',
        successMetrics: {
          awards: '3 Tech Innovation Awards',
          boxOffice: '$89M Combined',
          streaming: '67M+ Views',
        },
        coInvestors: ['Sarah Montgomery', 'Tech Media Fund', 'Innovation Studios'],
        recentDeals: [
          { title: 'Future Lens', budget: '$3.2M', stage: 'Production', year: 2023 },
          { title: 'Digital Frontier', budget: '$1.5M', stage: 'Post-Production', year: 2023 },
        ],
      },
    },
    'david-park': {
      id: 'david-park',
      name: 'David Park',
      role: 'Family Office',
      company: 'Park Family Investments',
      location: 'New York, NY',
      memberSince: 'February 2023',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'investor',
      investmentFocus:
        'Large-scale film investments and franchise development. Focus on established IPs and proven creative teams with track records.',
      publicStats: {
        forumPosts: 29,
        communityContributions: 31,
        helpfulVotes: 201,
        profileViews: 1247,
        followers: 312,
        following: 67,
        connections: 89,
      },
      expertise: [
        'Large Scale Investments',
        'Franchise Development',
        'Risk Management',
        'IP Strategy',
      ],
      bio: 'Managing film investments for high-net-worth families. Expertise in structuring complex entertainment deals and building sustainable film portfolios.',
      investmentCriteria: {
        budgetRange: { min: '$5M', max: '$50M' },
        preferredGenres: ['Action', 'Franchise', 'Proven IP'],
        investmentStages: ['Pre-Production', 'Production', 'Distribution'],
        dealStructure: ['Senior Debt', 'Equity Participation', 'Gap Financing'],
        geographicFocus: 'Global Markets',
        minimumIRR: '12%',
        holdPeriod: '4-7 years',
        contentTypes: ['Feature Films', 'Franchise Development'],
        distributionFocus: ['Theatrical', 'International Sales', 'Franchise Rights'],
      },
      referrals: [
        {
          referrer: 'Sarah Montgomery',
          category: 'Large Scale Financing',
          rating: 5,
          comment:
            'David excels at structuring complex deals. Reliable partner for multi-million dollar projects.',
          verified: true,
          date: '2023-07-18',
        },
      ],
      portfolioHighlights: {
        projectsFinanced: 8,
        totalInvested: '$127.8M',
        avgProjectSize: '$15.9M',
        successMetrics: {
          awards: '12 Major Awards',
          boxOffice: '$847M Combined',
          streaming: '234M+ Views',
        },
        coInvestors: ['Montgomery Entertainment', 'Global Film Partners', 'Apex Capital'],
        recentDeals: [
          { title: 'Blockbuster Sequel', budget: '$25M', stage: 'Production', year: 2023 },
          { title: 'Franchise Reboot', budget: '$18M', stage: 'Pre-Production', year: 2024 },
        ],
      },
    },
    'alex-rivera': {
      id: 'alex-rivera',
      name: 'Alex Rivera',
      role: 'Actor',
      company: 'Independent Talent',
      location: 'Los Angeles, CA',
      memberSince: 'November 2022',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'talent',
      investmentFocus:
        'Multi-hyphenate artist with experience in acting, writing, and directing. Passionate about authentic storytelling and diverse representation in film.',
      publicStats: {
        forumPosts: 52,
        communityContributions: 28,
        helpfulVotes: 189,
        profileViews: 634,
        followers: 445,
        following: 234,
        connections: 178,
      },
      expertise: ['Acting', 'Screenwriting', 'Character Development', 'Independent Film'],
      bio: 'Versatile performer and storyteller with credits in independent films and streaming series. Advocate for inclusive casting and authentic representation in entertainment.',
      portfolioHighlights: {
        creditsCount: 23,
        genreExpertise: ['Drama', 'Comedy', 'Independent'],
        awardsRecognition: ['Sundance Best Actor', '3 Festival Wins'],
        collaborativeProjects: 15,
        mentorshipRole: 'Emerging Actor Program',
      },
    },
    'maria-santos': {
      id: 'maria-santos',
      name: 'Maria Santos',
      role: 'Director of Photography',
      company: 'Freelance Cinematographer',
      location: 'Austin, TX',
      memberSince: 'September 2022',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      userType: 'talent',
      investmentFocus:
        'Visual storytelling specialist with expertise in both narrative and documentary cinematography. Known for innovative lighting techniques and budget-conscious solutions.',
      publicStats: {
        forumPosts: 38,
        communityContributions: 45,
        helpfulVotes: 167,
        profileViews: 521,
        followers: 298,
        following: 156,
        connections: 134,
      },
      expertise: ['Cinematography', 'Visual Storytelling', 'Equipment', 'Budget Management'],
      bio: 'Award-winning cinematographer with passion for visual storytelling. Specializes in creating cinematic looks on independent budgets while mentoring emerging talent.',
      portfolioHighlights: {
        creditsCount: 31,
        genreExpertise: ['Documentary', 'Narrative', 'Commercial'],
        awardsRecognition: ['ASC Award Nominee', '5 Festival Wins'],
        collaborativeProjects: 27,
        equipmentExpertise: 'RED, Alexa, Film',
      },
    },
  }

  // Get profile data (fallback to default if not found)
  const profile = publicProfiles[userId] || {
    id: 'unknown',
    name: 'Profile Not Found',
    role: 'Unknown',
    company: 'N/A',
    location: 'Unknown',
    memberSince: 'N/A',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    verified: false,
    userType: 'unknown',
    investmentFocus: 'Profile information not available.',
    publicStats: { forumPosts: 0, communityContributions: 0, helpfulVotes: 0, profileViews: 0 },
    expertise: [],
    bio: 'This profile is not available or the user has restricted public access.',
  }

  const handleBackToForum = () => {
    if (typeof onBack === 'function') {
      onBack()
    } else {
      // Fallback navigation
      window.history.back()
    }
  }

  const handleConnectionRequest = () => {
    if (connectionStatus === 'none') {
      setConnectionStatus('pending')
      // API call to send connection request
      console.log(`Sending connection request to ${profile.name}`)
    } else if (connectionStatus === 'connected') {
      // Open messaging
      if (onOpenMessaging) {
        onOpenMessaging(userId)
      }
    }
  }

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
    // API call to follow/unfollow
    console.log(`${isFollowing ? 'Unfollowing' : 'Following'} ${profile.name}`)
  }

  const getUserTypeColor = () => {
    if (profile.userType === 'investor') {
      return {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        accent: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
      }
    } else {
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200',
        accent: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
      }
    }
  }

  const colors = getUserTypeColor()

  const getConnectionButtonText = () => {
    switch (connectionStatus) {
      case 'pending':
        return 'Request Pending'
      case 'connected':
        return 'Message'
      default:
        return 'Connect'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button
            onClick={handleBackToForum}
            variant="outline"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Community</span>
          </Button>
        </div>

        {/* Public Profile Header with Networking */}
        <Card className={`p-8 mb-6 ${colors.bg} ${colors.border} border`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-6 flex-1">
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
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                  >
                    {profile.userType === 'investor' ? '🏢 Investor Network' : '🎬 Talent Network'}
                  </div>
                </div>

                <p className={`text-xl font-semibold ${colors.accent} mb-1`}>{profile.role}</p>
                <p className="text-lg text-gray-700 mb-2">{profile.company}</p>

                <div className="flex flex-col space-y-1 text-sm text-gray-600 mb-4">
                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
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
                    {profile.location}
                  </p>

                  <p className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Member since {profile.memberSince}
                  </p>
                </div>

                {/* Network Stats */}
                <div className="flex space-x-6 text-sm">
                  <div className="text-center">
                    <div className={`font-bold ${colors.accent}`}>
                      {profile.publicStats.connections || 0}
                    </div>
                    <div className="text-gray-600">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${colors.accent}`}>
                      {profile.publicStats.followers || 0}
                    </div>
                    <div className="text-gray-600">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${colors.accent}`}>
                      {profile.publicStats.following || 0}
                    </div>
                    <div className="text-gray-600">Following</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Networking Action Buttons */}
            <div className="flex flex-col space-y-3 ml-6">
              <Button
                onClick={handleConnectionRequest}
                className={`${colors.button} text-white px-6 py-2 ${
                  connectionStatus === 'pending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={connectionStatus === 'pending'}
              >
                {connectionStatus === 'connected' && (
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.002 8.002 0 01-7.93-6.93c-.04-.295-.04-.6 0-.895A8.002 8.002 0 0113 4c4.418 0 8 3.582 8 8z"
                    />
                  </svg>
                )}
                {connectionStatus === 'pending' && (
                  <svg
                    className="w-4 h-4 mr-2 animate-spin"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2v4m0 12v4m9-9h-4M5 12H1m15.364-6.364l-2.828 2.828M6.464 6.464L3.636 3.636m12.728 12.728l-2.828-2.828M6.464 17.536L3.636 20.364"
                    />
                  </svg>
                )}
                {connectionStatus === 'none' && (
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                )}
                {getConnectionButtonText()}
              </Button>

              <Button
                onClick={handleFollow}
                variant="outline"
                className={`px-6 py-2 ${isFollowing ? `${colors.text} ${colors.border}` : 'text-gray-600 border-gray-300'}`}
              >
                {isFollowing ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Following
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    Follow
                  </>
                )}
              </Button>

              {profile.userType === 'investor' && (
                <Button
                  onClick={() => setShowInvestmentCriteria(!showInvestmentCriteria)}
                  variant="outline"
                  className="px-6 py-2 text-gray-600 border-gray-300 hover:bg-gray-50"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 00-2 2z"
                    />
                  </svg>
                  Investment Criteria
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Investment Criteria Modal/Expandable Section */}
        {showInvestmentCriteria && profile.investmentCriteria && (
          <Card className="p-6 mb-6 border-2 border-blue-200 bg-blue-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 00-2 2z"
                />
              </svg>
              Investment Criteria & Deal Terms
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Budget Range</h4>
                <p className="text-green-600 font-semibold">
                  {profile.investmentCriteria.budgetRange.min} -{' '}
                  {profile.investmentCriteria.budgetRange.max}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Preferred Genres</h4>
                <div className="flex flex-wrap gap-1">
                  {profile.investmentCriteria.preferredGenres.map((genre, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Investment Stages</h4>
                <div className="flex flex-wrap gap-1">
                  {profile.investmentCriteria.investmentStages.map((stage, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Deal Structure</h4>
                <div className="flex flex-wrap gap-1">
                  {profile.investmentCriteria.dealStructure.map((structure, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                    >
                      {structure}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Target IRR</h4>
                <p className="text-green-600 font-semibold">
                  {profile.investmentCriteria.minimumIRR}
                </p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Hold Period</h4>
                <p className="text-blue-600">{profile.investmentCriteria.holdPeriod}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Content Types</h4>
                <div className="flex flex-wrap gap-1">
                  {profile.investmentCriteria.contentTypes.map((type, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Distribution Focus</h4>
                <div className="flex flex-wrap gap-1">
                  {profile.investmentCriteria.distributionFocus.map((focus, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Geographic Focus</h4>
                <p className="text-gray-700">{profile.investmentCriteria.geographicFocus}</p>
              </div>
            </div>
          </Card>
        )}

        {/* Bio & Focus */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
          <p className="text-gray-700 leading-relaxed mb-4">{profile.bio}</p>

          <h4 className="font-medium text-gray-900 mb-2">
            {profile.userType === 'investor' ? 'Investment Focus' : 'Professional Focus'}
          </h4>
          <p className="text-gray-600">{profile.investmentFocus}</p>
        </Card>

        {/* Professional Endorsements & Referrals */}
        {profile.referrals && profile.referrals.length > 0 && (
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Professional Endorsements
            </h3>

            <div className="space-y-4">
              {profile.referrals.map((referral, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-4 py-2">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-gray-900">{referral.referrer}</h4>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                        {referral.category}
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < referral.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        ))}
                      </div>
                      {referral.verified && (
                        <div className="flex items-center text-green-600 text-xs">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified Deal
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{referral.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm italic">&ldquo;{referral.comment}&rdquo;</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Portfolio & Deal History (for investors) */}
        {profile.portfolioHighlights && profile.userType === 'investor' && (
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 00-2 2z"
                />
              </svg>
              Investment Portfolio & Track Record
            </h3>

            {/* Portfolio Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {profile.portfolioHighlights.projectsFinanced}
                </div>
                <div className="text-sm text-gray-600">Projects Financed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {profile.portfolioHighlights.totalInvested}
                </div>
                <div className="text-sm text-gray-600">Total Invested</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {profile.portfolioHighlights.avgProjectSize}
                </div>
                <div className="text-sm text-gray-600">Avg Project Size</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {profile.portfolioHighlights.successMetrics.awards}
                </div>
                <div className="text-sm text-gray-600">Awards Won</div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Performance Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Combined Box Office:</span>
                    <span className="font-semibold text-green-600">
                      {profile.portfolioHighlights.successMetrics.boxOffice}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Streaming Views:</span>
                    <span className="font-semibold text-blue-600">
                      {profile.portfolioHighlights.successMetrics.streaming}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry Recognition:</span>
                    <span className="font-semibold text-purple-600">
                      {profile.portfolioHighlights.successMetrics.awards}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Recent Deals (2023-2024)</h4>
                <div className="space-y-3">
                  {profile.portfolioHighlights.recentDeals.map((deal, index) => (
                    <div key={index} className="border-l-3 border-green-400 pl-3">
                      <div className="font-medium text-gray-900">{deal.title}</div>
                      <div className="text-sm text-gray-600">
                        {deal.budget} • {deal.stage} • {deal.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Co-Investment Network */}
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Frequent Co-Investors</h4>
              <div className="flex flex-wrap gap-2">
                {profile.portfolioHighlights.coInvestors.map((coInvestor, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {coInvestor}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Talent Portfolio (for talent users) */}
        {profile.portfolioHighlights && profile.userType === 'talent' && (
          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-10 4V3a1 1 0 011-1h8a1 1 0 011 1v3M5 10v10a1 1 0 001 1h8a1 1 0 001-1V10M5 10l3-3h4l3 3"
                />
              </svg>
              Professional Portfolio & Credits
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {profile.portfolioHighlights.creditsCount}
                </div>
                <div className="text-sm text-gray-600">Total Credits</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {profile.portfolioHighlights.collaborativeProjects}
                </div>
                <div className="text-sm text-gray-600">Collaborations</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-600">
                  {profile.portfolioHighlights.awardsRecognition}
                </div>
                <div className="text-sm text-gray-600">Recognition</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-lg font-bold text-orange-600">
                  {profile.portfolioHighlights.mentorshipRole || 'Active'}
                </div>
                <div className="text-sm text-gray-600">Mentorship</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-2">Genre Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {profile.portfolioHighlights.genreExpertise.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Expertise Tags */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Expertise</h3>
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

        {/* Enhanced Community Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Community Activity & Engagement
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>
                {profile.publicStats.forumPosts}
              </div>
              <div className="text-sm text-gray-600">Forum Posts</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>
                {profile.publicStats.communityContributions}
              </div>
              <div className="text-sm text-gray-600">Contributions</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>
                {profile.publicStats.helpfulVotes}
              </div>
              <div className="text-sm text-gray-600">Helpful Votes</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${colors.accent}`}>
                {profile.publicStats.profileViews}
              </div>
              <div className="text-sm text-gray-600">Profile Views</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PublicProfile
