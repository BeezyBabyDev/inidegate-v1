import { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Sidebar from './Sidebar'
import Card from './Card'
import Button from './Button'

const CreativePortal = ({ onLogout }) => {
  useScrollToTop()
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [profileView, setProfileView] = useState('public') // 'public' or 'editor'
  const [scriptFile, setScriptFile] = useState(null)
  const [scriptAnalysis, setScriptAnalysis] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  // Dummy project data for demonstration
  const projects = [
    {
      id: 1,
      title: 'Tentative Feelings',
      genre: 'Romantic Comedy',
      status: 'In Development',
      synopsis: 'Modern romantic comedy exploring authentic connections in the digital dating era.',
      matches: {
        brands: [
          'Dating app partnerships',
          'Coffee shops/restaurants',
          'Fashion/lifestyle brands',
          'Technology companies',
        ],
        investors: ['Victoria Sterling', 'Michael Chen'],
        influencers: ['Sophie Lin', 'Carlos Rivera'],
        potential: ['Tech industry characters', 'Social media influencer cameos'],
      },
    },
    {
      id: 2,
      title: 'Traded',
      genre: 'Sports Drama',
      status: 'Pre-Production',
      synopsis: 'Intense drama following a professional athlete through career-defining trades.',
      matches: {
        brands: ['Sports equipment manufacturers', 'Athletic apparel brands'],
        investors: ['Amanda Foster'],
        influencers: ['Carlos Rivera'],
        potential: ['Sports media personalities'],
      },
    },
    {
      id: 3,
      title: 'The Lambs',
      genre: 'Sci-Fi Psychological Thriller',
      status: 'Script Development',
      synopsis:
        'Mind-bending thriller exploring memory manipulation technology and reality perception.',
      matches: {
        brands: ['Technology companies', 'Medical device manufacturers'],
        investors: ['Michael Chen'],
        influencers: ['Maya Patel'],
        potential: ['Tech industry whistleblower'],
      },
    },
  ]

  const handleSidebarClick = label => {
    setActiveTab(label)
    setExpandedProject(null)
  }

  const handleLogout = () => {
    onLogout && onLogout()
  }

  const handleScriptUpload = e => {
    const file = e.target.files[0]
    setScriptFile(file)
    // Stub: Simulate script analysis
    setTimeout(() => {
      setScriptAnalysis({
        products: ['BrandX', 'BrandY'],
        locations: ['Los Angeles', 'New York'],
        characters: ['Lead Protagonist', 'Tech CEO'],
        brands: ['BrandX'],
        influencers: ['InfluencerA'],
        investors: ['InvestorA'],
      })
    }, 1000)
  }

  // Toggle for public/editor view
  const ProfileViewToggle = () => (
    <div className="flex items-center p-1 bg-gray-700 rounded-full">
      <button
        onClick={() => setProfileView('public')}
        className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${profileView === 'public' ? 'bg-purple-600 text-white' : 'text-gray-300'}`}
      >
        Public View
      </button>
      <button
        onClick={() => setProfileView('editor')}
        className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${profileView === 'editor' ? 'bg-purple-600 text-white' : 'text-gray-300'}`}
      >
        Editor View
      </button>
    </div>
  )

  // Profile page layout
  const renderProfilePage = () => (
    <div className="max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
            JB
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-1">Joe Bell</h2>
            <div className="flex flex-wrap gap-2 mb-1">
              {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                <span
                  key={role}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {role}
                </span>
              ))}
            </div>
            <p className="text-purple-100 text-sm">
              Creative visionary with expertise across multiple filmmaking disciplines.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:items-end gap-2">
          <ProfileViewToggle />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white mt-2 w-full md:w-auto">
            Edit Profile
          </Button>
        </div>
      </div>
      {/* Script Upload */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <label className="block text-sm font-medium text-purple-200">
          Upload Script for Analysis:
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleScriptUpload}
          className="text-white"
        />
        {scriptFile && <span className="text-purple-300 text-xs">{scriptFile.name}</span>}
        {scriptAnalysis && (
          <span className="text-green-400 text-xs">Script analyzed! Matches generated.</span>
        )}
      </div>
      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map(project => (
          <Card
            key={project.id}
            className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all"
          >
            <h4 className="text-xl font-bold text-purple-200 mb-2">{project.title}</h4>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                {project.genre}
              </span>
              <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                {project.status}
              </span>
            </div>
            <p className="text-purple-100 text-sm mb-3">{project.synopsis}</p>
            <Button
              size="sm"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-auto"
              onClick={() => setExpandedProject(project.id)}
            >
              View More
            </Button>
            {/* Expanded Project View */}
            {expandedProject === project.id && (
              <div className="mt-4 bg-slate-900/80 rounded-xl p-4 border border-purple-700">
                <h5 className="text-lg font-bold text-white mb-2">Project Matches</h5>
                <div className="mb-2">
                  <span className="font-semibold text-purple-300">Brand Matches:</span>
                  <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                    {project.matches.brands.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-purple-300">Investor Matches:</span>
                  <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                    {project.matches.investors.map((inv, i) => (
                      <li key={i}>{inv}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-purple-300">Influencer Matches:</span>
                  <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                    {project.matches.influencers.map((inf, i) => (
                      <li key={i}>{inf}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-purple-300">Potential Matches:</span>
                  <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                    {project.matches.potential.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  size="sm"
                  className="mt-2 bg-purple-700 hover:bg-purple-800 text-white"
                  onClick={() => setExpandedProject(null)}
                >
                  Close
                </Button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )

  // Placeholder for not-yet-built tabs
  const renderComingSoon = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-3xl font-bold text-white mb-4">This section is coming soon.</h2>
      <p className="text-purple-200 text-lg mb-6">Stay tuned for updates!</p>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div
        className={`fixed top-0 left-0 h-screen z-30`}
        style={{ width: isSidebarCollapsed ? '5rem' : '16rem' }}
      >
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          activeTab={activeTab}
          onTabClick={handleSidebarClick}
          onLogout={handleLogout}
          portalType="filmmaker"
        />
      </div>
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarCollapsed ? 'ml-20' : 'ml-64'}`}
      >
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {activeTab === 'Dashboard' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
              {/* Active Projects Feed Widget Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">
                    Active Projects Feed
                  </h3>
                  <p className="text-slate-200">
                    Project cards, funding status, progress bars, and deadlines will appear here.
                  </p>
                </div>
                {/* Add more dashboard widgets here as needed */}
              </div>
              {/* New Matching Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {/* Section 1: Potential Investor Matches */}
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-bold">Potential Investor Matches</h3>
                    <a href="#" className="ml-auto text-purple-300 text-sm hover:underline">
                      View All
                    </a>
                  </div>
                  {/* Mock Data */}
                  {[
                    {
                      name: 'Victoria Sterling',
                      focus: 'Drama, Indie',
                      range: '$100K-$1M',
                      score: 92,
                      criteria: 'Genre, Budget, Stage',
                    },
                    {
                      name: 'Michael Chen',
                      focus: 'Documentary, Social Impact',
                      range: '$50K-$500K',
                      score: 88,
                      criteria: 'Genre, Budget',
                    },
                    {
                      name: 'Amanda Foster',
                      focus: 'Animation, Family',
                      range: '$200K-$2M',
                      score: 85,
                      criteria: 'Genre, Stage',
                    },
                  ].map((inv, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">{inv.name}</div>
                          <div className="text-purple-200 text-xs">{inv.focus}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-300 text-sm font-bold">{inv.range}</div>
                          <div className="text-purple-400 text-xs">{inv.score}% match</div>
                        </div>
                      </div>
                      <div className="text-xs text-purple-200 mb-2">Criteria: {inv.criteria}</div>
                      <div className="flex gap-2">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
                          View Details
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded text-xs border border-white/20">
                          Connect
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* Empty/Loading state example */}
                  {/* <div className="text-purple-200 text-sm text-center py-4">No matches found. Try adjusting your filters.</div> */}
                </Card>
                {/* Section 2: Potential Brand Partners */}
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-bold">Potential Brand Partners</h3>
                    <a href="#" className="ml-auto text-purple-300 text-sm hover:underline">
                      View All
                    </a>
                  </div>
                  {[
                    {
                      name: 'Elegance & Co',
                      industry: 'Fashion',
                      type: 'Product Placement',
                      score: 90,
                      desc: 'Luxury fashion brand seeking indie film partnerships.',
                    },
                    {
                      name: 'TechFlow Solutions',
                      industry: 'Technology',
                      type: 'App Integration',
                      score: 87,
                      desc: 'Innovative tech company interested in app showcases.',
                    },
                    {
                      name: 'Artisan Foods Inc',
                      industry: 'Food & Beverage',
                      type: 'Culinary Feature',
                      score: 84,
                      desc: 'Gourmet food brand for on-screen product features.',
                    },
                  ].map((brand, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center">
                            🏢
                          </div>
                          <div>
                            <div className="font-semibold text-white">{brand.name}</div>
                            <div className="text-purple-200 text-xs">{brand.industry}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-purple-400 text-xs">{brand.score}% relevance</div>
                        </div>
                      </div>
                      <div className="text-xs text-purple-200 mb-2">
                        {brand.type} - {brand.desc}
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
                          Explore Partnership
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded text-xs border border-white/20">
                          Save for Later
                        </button>
                      </div>
                    </div>
                  ))}
                </Card>
                {/* Section 3: Potential Influencer Pairings */}
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-bold">Potential Influencer Pairings</h3>
                    <a href="#" className="ml-auto text-purple-300 text-sm hover:underline">
                      View All
                    </a>
                  </div>
                  {[
                    {
                      name: 'Sophie Lin',
                      platform: 'Instagram',
                      followers: '120K',
                      engagement: '4.2%',
                      category: 'Lifestyle',
                    },
                    {
                      name: 'Carlos Rivera',
                      platform: 'YouTube',
                      followers: '85K',
                      engagement: '5.1%',
                      category: 'Film & Reviews',
                    },
                    {
                      name: 'Maya Patel',
                      platform: 'TikTok',
                      followers: '200K',
                      engagement: '6.8%',
                      category: 'Comedy',
                    },
                  ].map((inf, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-700/30 rounded-full flex items-center justify-center">
                            👤
                          </div>
                          <div>
                            <div className="font-semibold text-white">{inf.name}</div>
                            <div className="text-purple-200 text-xs">{inf.platform}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-purple-400 text-xs">{inf.followers} followers</div>
                          <div className="text-purple-300 text-xs">{inf.engagement} engagement</div>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-2">
                        <span className="bg-purple-600/20 text-purple-200 text-xs rounded-full px-2 py-1">
                          {inf.category}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
                          View Profile
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded text-xs border border-white/20">
                          Propose Collaboration
                        </button>
                      </div>
                    </div>
                  ))}
                </Card>
                {/* Section 4: Potential Distributor Pairings */}
                <Card className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl">
                  <div className="flex items-center mb-4">
                    <h3 className="text-lg font-bold">Potential Distributor Pairings</h3>
                    <a href="#" className="ml-auto text-purple-300 text-sm hover:underline">
                      View All
                    </a>
                  </div>
                  {[
                    {
                      name: 'Global Indie Distribution',
                      channels: 'Theatrical, Streaming',
                      territory: 'North America, Europe',
                      previous: '"Sunset Stories" (2022)',
                      metrics: '92% success',
                    },
                    {
                      name: 'Festiva Media',
                      channels: 'Festival, Digital',
                      territory: 'Global',
                      previous: '"Dreamers" (2023)',
                      metrics: '88% success',
                    },
                    {
                      name: 'Urban Screens',
                      channels: 'TV, Streaming',
                      territory: 'US, Canada',
                      previous: '"City Lights" (2021)',
                      metrics: '85% success',
                    },
                  ].map((dist, i) => (
                    <div
                      key={i}
                      className="mb-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition flex flex-col gap-2"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-white">{dist.name}</div>
                          <div className="text-purple-200 text-xs">{dist.channels}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-purple-400 text-xs">{dist.territory}</div>
                        </div>
                      </div>
                      <div className="text-xs text-purple-200 mb-2">
                        Prev: {dist.previous} • {dist.metrics}
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
                          Learn More
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded text-xs border border-white/20">
                          Submit Project
                        </button>
                      </div>
                    </div>
                  ))}
                </Card>
              </div>
            </div>
          )}
          {activeTab === 'Profile' && renderProfilePage()}
          {['Investors', 'Brands', 'Influencers', 'Distributors', 'Community', 'Messages'].includes(
            activeTab
          ) && renderComingSoon()}
        </main>
      </div>
    </div>
  )
}

export default CreativePortal
