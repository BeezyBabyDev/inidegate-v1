// Demo profile data for direct access codes
export const demoProfiles = {
  // TALENT PORTAL PROFILES
  talent: {
    sophia: {
      id: 't1',
      name: 'Sophia Martinez',
      username: 'sophia.star',
      type: 'Lead Actor',
      location: 'Los Angeles, CA',
      experience: '8+ years',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'March 2019',
      bio: 'Versatile lead actress specializing in independent dramatic roles with theater background.',
      specialties: ['Drama', 'Independent Film', 'Theater', 'Character Development'],
      achievements: ['Best Actress - IndieFest 2023', 'SAG Member', 'Yale Drama Graduate'],
      stats: {
        projects: 24,
        connections: 142,
        followers: 1847,
        profileViews: 3291
      },
      notifications: { messages: 8, connections: 3, opportunities: 12 },
      recentActivity: [
        'Booked lead role in "Urban Legends 2"',
        'Connected with 3 new casting directors',
        'Profile viewed by major production company'
      ]
    },
    marcus: {
      id: 't2',
      name: 'Marcus Thompson',
      username: 'marcus.voice',
      type: 'Voice Artist',
      location: 'New York, NY',
      experience: '5+ years',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'June 2020',
      bio: 'Professional voice artist with home studio, specializing in character voices and narration.',
      specialties: ['Character Voices', 'Narration', 'Commercial VO', 'Animation'],
      achievements: ['Voice Over Award 2022', 'Home Studio Certified', '500+ Projects'],
      stats: {
        projects: 47,
        connections: 89,
        followers: 623,
        profileViews: 1456
      },
      notifications: { messages: 5, connections: 7, opportunities: 9 },
      recentActivity: [
        'Completed voice work for animated series',
        'Added new demo reel',
        'Received 5-star client review'
      ]
    },
    elena: {
      id: 't3',
      name: 'Elena Rodriguez',
      username: 'elena.model',
      type: 'Model & Influencer',
      location: 'Miami, FL',
      experience: '6+ years',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'January 2018',
      bio: 'Fashion model and social media influencer transitioning into film and commercial work.',
      specialties: ['Fashion Modeling', 'Commercial Work', 'Social Media', 'Brand Partnerships'],
      achievements: ['100K+ Instagram Followers', 'Fashion Week Regular', 'Brand Ambassador'],
      stats: {
        projects: 18,
        connections: 234,
        followers: 2841,
        profileViews: 5672
      },
      notifications: { messages: 15, connections: 12, opportunities: 6 },
      recentActivity: [
        'Featured in luxury brand campaign',
        'Booking inquiries for film roles',
        'New brand partnership signed'
      ]
    },
    james: {
      id: 't4',
      name: 'James Wilson',
      username: 'james.support',
      type: 'Supporting Actor',
      location: 'Atlanta, GA',
      experience: '4+ years',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: false,
      memberSince: 'September 2021',
      bio: 'Character actor with strong improvisation skills, specializing in supporting roles.',
      specialties: ['Supporting Roles', 'Improvisation', 'Comedy', 'Method Acting'],
      achievements: ['Atlanta Film Scene Regular', 'Improv Training', 'Regional Theater'],
      stats: {
        projects: 12,
        connections: 67,
        followers: 298,
        profileViews: 842
      },
      notifications: { messages: 4, connections: 2, opportunities: 8 },
      recentActivity: [
        'Auditioned for Netflix series',
        'Completed acting workshop',
        'Updated headshots portfolio'
      ]
    },
    aria: {
      id: 't5',
      name: 'Aria Chen',
      username: 'aria.dance',
      type: 'Background Performer',
      location: 'Vancouver, BC',
      experience: '3+ years',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      verified: false,
      memberSince: 'May 2022',
      bio: 'Professional dancer and background performer with extensive movement training.',
      specialties: ['Background Work', 'Dance', 'Movement', 'Crowd Scenes'],
      achievements: ['Professional Dance Training', 'Film Set Regular', 'Stunt Work Certified'],
      stats: {
        projects: 31,
        connections: 56,
        followers: 187,
        profileViews: 634
      },
      notifications: { messages: 7, connections: 5, opportunities: 11 },
      recentActivity: [
        'Booked background role in major film',
        'Completed stunt training course',
        'Featured in music video'
      ]
    }
  },

  // FILMMAKER PORTAL PROFILES
  filmmaker: {
    alex: {
      id: 'f1',
      name: 'Alexandra Brooks',
      username: 'alex.director',
      type: 'Director',
      location: 'Los Angeles, CA',
      experience: '10+ years',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'February 2017',
      bio: 'Award-winning indie film director with focus on character-driven narratives.',
      specialties: ['Narrative Film', 'Character Development', 'Independent Cinema', 'Actor Direction'],
      achievements: ['Sundance Selection 2023', 'DGA Member', 'Film School Graduate'],
      stats: {
        projects: 8,
        connections: 156,
        followers: 892,
        profileViews: 2341
      },
      notifications: { messages: 6, connections: 9, projects: 4 },
      activeProjects: [
        { name: 'Urban Legends 2', status: 'Pre-Production', budget: '$850K', role: 'Director' },
        { name: 'Voices Unheard', status: 'Development', budget: '$1.2M', role: 'Writer/Director' }
      ],
      recentActivity: [
        'Secured funding for next project',
        'Completed script revision',
        'Meeting with potential cast'
      ]
    },
    ryan: {
      id: 'f2',
      name: 'Ryan Mitchell',
      username: 'ryan.producer',
      type: 'Producer',
      location: 'New York, NY',
      experience: '12+ years',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'October 2015',
      bio: 'Experienced producer specializing in independent film financing and distribution.',
      specialties: ['Film Financing', 'Distribution', 'Project Management', 'Investor Relations'],
      achievements: ['PGA Member', '15+ Feature Films', 'Festival Circuit Expert'],
      stats: {
        projects: 23,
        connections: 289,
        followers: 1456,
        profileViews: 4123
      },
      notifications: { messages: 11, connections: 6, projects: 7 },
      activeProjects: [
        { name: 'Midnight Shift', status: 'Post-Production', budget: '$2.1M', role: 'Executive Producer' },
        { name: 'The Last Record Store', status: 'Financing', budget: '$750K', role: 'Producer' }
      ],
      recentActivity: [
        'Closed financing deal',
        'Signed distribution agreement',
        'Connected with new investors'
      ]
    },
    maya: {
      id: 'f3',
      name: 'Maya Patel',
      username: 'maya.cinema',
      type: 'Cinematographer',
      location: 'Toronto, ON',
      experience: '7+ years',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'August 2018',
      bio: 'Cinematographer with expertise in natural lighting and handheld camera work.',
      specialties: ['Natural Lighting', 'Handheld Camera', 'Color Grading', 'Digital Cinema'],
      achievements: ['Cinematography Award', 'IATSE Member', 'Film Festival Regular'],
      stats: {
        projects: 19,
        connections: 134,
        followers: 567,
        profileViews: 1789
      },
      notifications: { messages: 3, connections: 8, projects: 5 },
      activeProjects: [
        { name: 'Digital Nomad', status: 'Principal Photography', budget: '$950K', role: 'DP' }
      ],
      recentActivity: [
        'Wrapped principal photography',
        'Updated equipment list',
        'Received project inquiry'
      ]
    },
    diego: {
      id: 'f4',
      name: 'Diego Santos',
      username: 'diego.edit',
      type: 'Post Production',
      location: 'Austin, TX',
      experience: '6+ years',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
      verified: false,
      memberSince: 'March 2020',
      bio: 'Editor and post-production supervisor with expertise in narrative storytelling.',
      specialties: ['Film Editing', 'Color Correction', 'Sound Design', 'Post Supervision'],
      achievements: ['Avid Certified', 'Post Facility Owner', 'Award-Winning Editor'],
      stats: {
        projects: 27,
        connections: 98,
        followers: 345,
        profileViews: 1123
      },
      notifications: { messages: 9, connections: 4, projects: 6 },
      activeProjects: [
        { name: 'Indie Thriller', status: 'Post-Production', budget: '$400K', role: 'Editor' }
      ],
      recentActivity: [
        'Delivered final cut',
        'Color grading session',
        'New project consultation'
      ]
    },
    sarah: {
      id: 'f5',
      name: 'Sarah Johnson',
      username: 'sarah.crew',
      type: 'Production Crew',
      location: 'Chicago, IL',
      experience: '5+ years',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      verified: false,
      memberSince: 'November 2019',
      bio: 'First Assistant Director with strong organizational skills and set management experience.',
      specialties: ['Assistant Directing', 'Set Management', 'Scheduling', 'Safety Coordination'],
      achievements: ['DGA Trainee', 'Safety Certified', 'Union Member'],
      stats: {
        projects: 22,
        connections: 178,
        followers: 234,
        profileViews: 896
      },
      notifications: { messages: 7, connections: 11, projects: 3 },
      activeProjects: [
        { name: 'Chicago Stories', status: 'Pre-Production', budget: '$650K', role: '1st AD' }
      ],
      recentActivity: [
        'Scheduled production timeline',
        'Crew meeting completed',
        'Location scouting update'
      ]
    }
  },

  // INVESTOR PORTAL PROFILES
  investor: {
    victoria: {
      id: 'i1',
      name: 'Victoria Sterling',
      username: 'venture.capital',
      type: 'VC Partner',
      location: 'San Francisco, CA',
      experience: 'Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'April 2016',
      bio: 'Managing Partner at Sterling Ventures, specializing in entertainment and media investments.',
      specialties: ['Entertainment Tech', 'Media Investments', 'Venture Capital', 'Growth Strategy'],
      achievements: ['$50M+ Deployed', 'TechCrunch Speaker', 'Industry Expert'],
      stats: {
        portfolioValue: '$12.5M',
        activeInvestments: 8,
        connections: 456,
        profileViews: 2890
      },
      notifications: { messages: 12, deals: 8, analytics: 15 },
      investment_preferences: {
        stage: ['Seed', 'Series A'],
        sectors: ['Film Tech', 'Distribution', 'Production Tools'],
        ticket_size: '$100K - $2M'
      },
      recent_deals: [
        { project: 'StreamTech Platform', amount: '$1.5M', stage: 'Series A' },
        { project: 'Indie Film Fund', amount: '$500K', stage: 'Seed' }
      ]
    },
    michael: {
      id: 'i2',
      name: 'Michael Chen',
      username: 'angel.funds',
      type: 'Angel Investor',
      location: 'Boston, MA',
      experience: 'Serial Entrepreneur',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'July 2017',
      bio: 'Former tech entrepreneur turned angel investor with focus on creative industries.',
      specialties: ['Angel Investing', 'Startup Mentoring', 'Technology', 'Creative Industries'],
      achievements: ['Exit: $50M Company', 'Angel Group Member', 'Mentor Program'],
      stats: {
        portfolioValue: '$3.2M',
        activeInvestments: 12,
        connections: 234,
        profileViews: 1567
      },
      notifications: { messages: 6, deals: 12, analytics: 9 },
      investment_preferences: {
        stage: ['Pre-Seed', 'Seed'],
        sectors: ['Film Tech', 'Content Creation', 'Digital Media'],
        ticket_size: '$25K - $250K'
      },
      recent_deals: [
        { project: 'VR Film Studio', amount: '$100K', stage: 'Seed' },
        { project: 'Creator Tools App', amount: '$75K', stage: 'Pre-Seed' }
      ]
    },
    amanda: {
      id: 'i3',
      name: 'Amanda Foster',
      username: 'strategic.partner',
      type: 'Strategic Partner',
      location: 'Seattle, WA',
      experience: 'Investment Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'December 2018',
      bio: 'Investment Director at MediaCorp, focusing on strategic partnerships and content investments.',
      specialties: ['Strategic Partnerships', 'Content Investment', 'Media Strategy', 'Deal Structuring'],
      achievements: ['Fortune 500 Experience', 'Media Executive', 'Deal Flow Expert'],
      stats: {
        portfolioValue: '$8.7M',
        activeInvestments: 6,
        connections: 189,
        profileViews: 2134
      },
      notifications: { messages: 9, deals: 5, analytics: 11 },
      investment_preferences: {
        stage: ['Growth', 'Series B+'],
        sectors: ['Content Production', 'Distribution', 'Media Tech'],
        ticket_size: '$500K - $5M'
      },
      recent_deals: [
        { project: 'Streaming Content Fund', amount: '$2M', stage: 'Growth' },
        { project: 'Production Company', amount: '$1.2M', stage: 'Series B' }
      ]
    },
    robert: {
      id: 'i4',
      name: 'Robert Kim',
      username: 'high.net.worth',
      type: 'HNWI',
      location: 'Dallas, TX',
      experience: 'Private Investor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'January 2019',
      bio: 'High net worth individual with passion for supporting independent film projects.',
      specialties: ['Private Investment', 'Film Financing', 'Arts Philanthropy', 'Portfolio Diversification'],
      achievements: ['Film Industry Patron', 'Arts Board Member', 'Philanthropy Award'],
      stats: {
        portfolioValue: '$5.8M',
        activeInvestments: 4,
        connections: 123,
        profileViews: 876
      },
      notifications: { messages: 4, deals: 9, analytics: 7 },
      investment_preferences: {
        stage: ['Any Stage'],
        sectors: ['Independent Film', 'Documentary', 'Art House'],
        ticket_size: '$50K - $1M'
      },
      recent_deals: [
        { project: 'Documentary Series', amount: '$300K', stage: 'Production' },
        { project: 'Art House Film', amount: '$150K', stage: 'Development' }
      ]
    },
    isabella: {
      id: 'i5',
      name: 'Isabella Moore',
      username: 'film.finance',
      type: 'Film Financier',
      location: 'London, UK',
      experience: 'Film Fund Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'September 2017',
      bio: 'Film fund manager with extensive experience in international co-productions.',
      specialties: ['Film Financing', 'International Co-Productions', 'Tax Incentives', 'Distribution'],
      achievements: ['Film Fund Manager', 'International Experience', 'Tax Incentive Expert'],
      stats: {
        portfolioValue: '$15.2M',
        activeInvestments: 10,
        connections: 267,
        profileViews: 3456
      },
      notifications: { messages: 8, deals: 6, analytics: 13 },
      investment_preferences: {
        stage: ['Production', 'Post-Production'],
        sectors: ['Feature Films', 'Co-Productions', 'International Projects'],
        ticket_size: '$200K - $3M'
      },
      recent_deals: [
        { project: 'UK-Canada Co-Production', amount: '$1.8M', stage: 'Production' },
        { project: 'International Thriller', amount: '$950K', stage: 'Post' }
      ]
    }
  },

  // BRAND PORTAL PROFILES
  brands: {
    elegance: {
      id: 'b1',
      name: 'Elegance & Co',
      username: 'luxury.fashion',
      type: 'Fashion & Lifestyle',
      location: 'New York, NY',
      experience: 'Luxury Brand',
      avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'May 2018',
      bio: 'Luxury fashion brand seeking authentic product placement in high-end film productions.',
      specialties: ['Luxury Fashion', 'Product Placement', 'Brand Integration', 'High-End Marketing'],
      achievements: ['Fashion Week Regular', 'Celebrity Clientele', 'Award-Winning Campaigns'],
      stats: {
        campaigns: 24,
        partnerships: 18,
        reach: '2.5M',
        engagement: '8.4%'
      },
      notifications: { messages: 10, partnerships: 7, campaigns: 5 },
      brand_requirements: {
        genres: ['Drama', 'Romance', 'Lifestyle'],
        demographics: ['18-35', 'High Income', 'Fashion Forward'],
        placement_types: ['Wardrobe', 'Set Decoration', 'Character Integration']
      },
      recent_campaigns: [
        { project: 'Romantic Drama Feature', type: 'Wardrobe', budget: '$50K' },
        { project: 'Fashion Documentary', type: 'Brand Integration', budget: '$75K' }
      ]
    },
    techflow: {
      id: 'b2',
      name: 'TechFlow Solutions',
      username: 'tech.innovation',
      type: 'Technology & Apps',
      location: 'Silicon Valley, CA',
      experience: 'Tech Startup',
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'August 2020',
      bio: 'Innovative tech company developing productivity tools for creative professionals.',
      specialties: ['Tech Products', 'App Integration', 'Digital Innovation', 'Creative Tools'],
      achievements: ['App Store Featured', 'Tech Award Winner', 'Venture Funded'],
      stats: {
        campaigns: 15,
        partnerships: 12,
        reach: '1.8M',
        engagement: '12.7%'
      },
      notifications: { messages: 14, partnerships: 4, campaigns: 9 },
      brand_requirements: {
        genres: ['Sci-Fi', 'Thriller', 'Contemporary'],
        demographics: ['22-40', 'Tech Savvy', 'Professionals'],
        placement_types: ['Device Integration', 'App Usage', 'Tech Consultation']
      },
      recent_campaigns: [
        { project: 'Tech Thriller Series', type: 'App Integration', budget: '$40K' },
        { project: 'Startup Documentary', type: 'Tech Consultation', budget: '$25K' }
      ]
    },
    artisan: {
      id: 'b3',
      name: 'Artisan Foods Inc',
      username: 'gourmet.brands',
      type: 'Food & Beverage',
      location: 'Portland, OR',
      experience: 'Artisan Brand',
      avatar: 'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=150&h=150&fit=crop&crop=face',
      verified: false,
      memberSince: 'February 2021',
      bio: 'Artisan food company specializing in organic, locally-sourced gourmet products.',
      specialties: ['Organic Food', 'Local Sourcing', 'Gourmet Products', 'Sustainable Practices'],
      achievements: ['Organic Certified', 'Local Awards', 'Sustainable Practices'],
      stats: {
        campaigns: 8,
        partnerships: 15,
        reach: '750K',
        engagement: '15.2%'
      },
      notifications: { messages: 6, partnerships: 11, campaigns: 8 },
      brand_requirements: {
        genres: ['Drama', 'Comedy', 'Documentary'],
        demographics: ['25-45', 'Health Conscious', 'Foodie Culture'],
        placement_types: ['Food Styling', 'Restaurant Scenes', 'Catering']
      },
      recent_campaigns: [
        { project: 'Chef Documentary', type: 'Food Styling', budget: '$20K' },
        { project: 'Family Drama', type: 'Restaurant Scenes', budget: '$15K' }
      ]
    },
    premium: {
      id: 'b4',
      name: 'Premium Motors',
      username: 'auto.luxury',
      type: 'Automotive',
      location: 'Detroit, MI',
      experience: 'Luxury Automotive',
      avatar: 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?w=150&h=150&fit=crop&crop=face',
      verified: true,
      memberSince: 'October 2019',
      bio: 'Luxury automotive dealership with premium vehicle fleet for film productions.',
      specialties: ['Luxury Vehicles', 'Vehicle Rentals', 'Automotive Consulting', 'Picture Cars'],
      achievements: ['Premium Dealer', 'Film Industry Partner', 'Luxury Specialist'],
      stats: {
        campaigns: 19,
        partnerships: 8,
        reach: '1.2M',
        engagement: '6.8%'
      },
      notifications: { messages: 8, partnerships: 6, campaigns: 12 },
      brand_requirements: {
        genres: ['Action', 'Thriller', 'Drama'],
        demographics: ['25-55', 'Affluent', 'Car Enthusiasts'],
        placement_types: ['Hero Vehicles', 'Background Cars', 'Chase Scenes']
      },
      recent_campaigns: [
        { project: 'Action Thriller', type: 'Hero Vehicle', budget: '$80K' },
        { project: 'Luxury Drama', type: 'Background Cars', budget: '$35K' }
      ]
    },
    urban: {
      id: 'b5',
      name: 'Urban Living Co',
      username: 'lifestyle.co',
      type: 'Lifestyle Brand',
      location: 'Austin, TX',
      experience: 'Lifestyle Company',
      avatar: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=150&h=150&fit=crop&crop=face',
      verified: false,
      memberSince: 'June 2022',
      bio: 'Urban lifestyle brand focused on modern living, home décor, and city culture.',
      specialties: ['Home Décor', 'Urban Lifestyle', 'Modern Design', 'City Culture'],
      achievements: ['Design Awards', 'Urban Focus', 'Modern Aesthetic'],
      stats: {
        campaigns: 12,
        partnerships: 11,
        reach: '950K',
        engagement: '11.3%'
      },
      notifications: { messages: 12, partnerships: 9, campaigns: 4 },
      brand_requirements: {
        genres: ['Drama', 'Romance', 'Contemporary'],
        demographics: ['22-40', 'Urban Dwellers', 'Design Conscious'],
        placement_types: ['Set Decoration', 'Location Styling', 'Prop Integration']
      },
      recent_campaigns: [
        { project: 'Urban Romance', type: 'Set Decoration', budget: '$30K' },
        { project: 'City Drama Series', type: 'Location Styling', budget: '$45K' }
      ]
    }
  }
};

// Helper function to get profile by portal and key
export const getProfile = (portal, profileKey) => {
  return demoProfiles[portal]?.[profileKey] || null;
};

// Helper function to get all profiles for a portal
export const getPortalProfiles = (portal) => {
  return demoProfiles[portal] || {};
}; 