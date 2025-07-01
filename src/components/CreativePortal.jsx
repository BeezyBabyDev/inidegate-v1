import { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Sidebar from './Sidebar'
import Card from './Card'

const CreativePortal = ({ onLogout }) => {
  useScrollToTop()
  const [activeTab, setActiveTab] = useState('Dashboard')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const handleSidebarClick = label => {
    setActiveTab(label)
  }

  const handleLogout = () => {
    onLogout && onLogout()
  }

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
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
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
          {/* Placeholder for other tabs/subpages */}
          {activeTab === 'Investors' && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-0 md:p-8 text-left max-w-6xl mx-auto w-full shadow-xl">
              {/* Filmmaker Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 border-b border-slate-700/50">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                  JB
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Joe Bell</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                      <span
                        key={role}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4">
                    Creative visionary with expertise across multiple filmmaking disciplines.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                    Message Joe
                  </button>
                </div>
              </div>
              {/* Project Filters (future) */}
              {/* Featured Projects Grid */}
              <div className="py-8">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Tentative Feelings</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Romantic Comedy
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        In Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Modern romantic comedy exploring authentic connections in the digital dating
                      era.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Lead romantic interests (ages 25-35)</li>
                        <li>Supporting comedic roles</li>
                        <li>Social media influencer cameos</li>
                        <li>Tech industry characters</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Dating app partnerships</li>
                        <li>Coffee shops/restaurants</li>
                        <li>Fashion/lifestyle brands</li>
                        <li>Technology companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$2.5M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Streaming rights, theatrical release, brand partnerships
                      </span>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Traded</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sports Drama
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Pre-Production
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Intense drama following a professional athlete through career-defining trades.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Professional athlete lead (ages 25-40)</li>
                        <li>Sports agents/managers</li>
                        <li>Coaches and team staff</li>
                        <li>Sports media personalities</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Sports equipment manufacturers</li>
                        <li>Athletic apparel brands</li>
                        <li>Energy drinks/supplements</li>
                        <li>Sports broadcasting networks</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$8M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Theatrical release, international sales, merchandising
                      </span>
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">The Lambs</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sci-Fi Psychological Thriller
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Script Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Mind-bending thriller exploring memory manipulation technology and reality
                      perception.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Complex lead protagonist (ages 30-45)</li>
                        <li>Mysterious scientist/antagonist</li>
                        <li>Tech industry whistleblower</li>
                        <li>Ensemble supporting cast</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Technology companies (subtle integration)</li>
                        <li>Medical device manufacturers</li>
                        <li>VR/AR technology brands</li>
                        <li>Pharmaceutical companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$12M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Premium content with franchise potential, international
                        appeal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collaboration & Contact Section */}
              <div className="py-8 border-t border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Contact</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Collaboration Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 text-sm mb-2">
                      <li>Open to co-writing, producing, and directing partnerships</li>
                      <li>Seeking talent, brands, and investors for current projects</li>
                      <li>Available for speaking engagements and panels</li>
                      <li>Interested in cross-industry innovation</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start justify-between">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Contact & Connect
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Connect with Joe Bell directly through IndieGate.io's messaging system for
                      collaboration, investment, or project inquiries.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                      Message Joe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Brands' && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-0 md:p-8 text-left max-w-6xl mx-auto w-full shadow-xl">
              {/* Filmmaker Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 border-b border-slate-700/50">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                  JB
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Joe Bell</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                      <span
                        key={role}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4">
                    Creative visionary with expertise across multiple filmmaking disciplines.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                    Message Joe
                  </button>
                </div>
              </div>
              {/* Project Filters (future) */}
              {/* Featured Projects Grid */}
              <div className="py-8">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Tentative Feelings</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Romantic Comedy
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        In Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Modern romantic comedy exploring authentic connections in the digital dating
                      era.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Lead romantic interests (ages 25-35)</li>
                        <li>Supporting comedic roles</li>
                        <li>Social media influencer cameos</li>
                        <li>Tech industry characters</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Dating app partnerships</li>
                        <li>Coffee shops/restaurants</li>
                        <li>Fashion/lifestyle brands</li>
                        <li>Technology companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$2.5M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Streaming rights, theatrical release, brand partnerships
                      </span>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Traded</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sports Drama
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Pre-Production
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Intense drama following a professional athlete through career-defining trades.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Professional athlete lead (ages 25-40)</li>
                        <li>Sports agents/managers</li>
                        <li>Coaches and team staff</li>
                        <li>Sports media personalities</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Sports equipment manufacturers</li>
                        <li>Athletic apparel brands</li>
                        <li>Energy drinks/supplements</li>
                        <li>Sports broadcasting networks</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$8M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Theatrical release, international sales, merchandising
                      </span>
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">The Lambs</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sci-Fi Psychological Thriller
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Script Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Mind-bending thriller exploring memory manipulation technology and reality
                      perception.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Complex lead protagonist (ages 30-45)</li>
                        <li>Mysterious scientist/antagonist</li>
                        <li>Tech industry whistleblower</li>
                        <li>Ensemble supporting cast</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Technology companies (subtle integration)</li>
                        <li>Medical device manufacturers</li>
                        <li>VR/AR technology brands</li>
                        <li>Pharmaceutical companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$12M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Premium content with franchise potential, international
                        appeal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collaboration & Contact Section */}
              <div className="py-8 border-t border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Contact</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Collaboration Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 text-sm mb-2">
                      <li>Open to co-writing, producing, and directing partnerships</li>
                      <li>Seeking talent, brands, and investors for current projects</li>
                      <li>Available for speaking engagements and panels</li>
                      <li>Interested in cross-industry innovation</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start justify-between">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Contact & Connect
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Connect with Joe Bell directly through IndieGate.io's messaging system for
                      collaboration, investment, or project inquiries.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                      Message Joe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Influencers' && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-0 md:p-8 text-left max-w-6xl mx-auto w-full shadow-xl">
              {/* Filmmaker Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 border-b border-slate-700/50">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                  JB
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Joe Bell</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                      <span
                        key={role}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4">
                    Creative visionary with expertise across multiple filmmaking disciplines.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                    Message Joe
                  </button>
                </div>
              </div>
              {/* Project Filters (future) */}
              {/* Featured Projects Grid */}
              <div className="py-8">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Tentative Feelings</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Romantic Comedy
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        In Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Modern romantic comedy exploring authentic connections in the digital dating
                      era.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Lead romantic interests (ages 25-35)</li>
                        <li>Supporting comedic roles</li>
                        <li>Social media influencer cameos</li>
                        <li>Tech industry characters</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Dating app partnerships</li>
                        <li>Coffee shops/restaurants</li>
                        <li>Fashion/lifestyle brands</li>
                        <li>Technology companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$2.5M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Streaming rights, theatrical release, brand partnerships
                      </span>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Traded</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sports Drama
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Pre-Production
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Intense drama following a professional athlete through career-defining trades.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Professional athlete lead (ages 25-40)</li>
                        <li>Sports agents/managers</li>
                        <li>Coaches and team staff</li>
                        <li>Sports media personalities</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Sports equipment manufacturers</li>
                        <li>Athletic apparel brands</li>
                        <li>Energy drinks/supplements</li>
                        <li>Sports broadcasting networks</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$8M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Theatrical release, international sales, merchandising
                      </span>
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">The Lambs</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sci-Fi Psychological Thriller
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Script Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Mind-bending thriller exploring memory manipulation technology and reality
                      perception.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Complex lead protagonist (ages 30-45)</li>
                        <li>Mysterious scientist/antagonist</li>
                        <li>Tech industry whistleblower</li>
                        <li>Ensemble supporting cast</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Technology companies (subtle integration)</li>
                        <li>Medical device manufacturers</li>
                        <li>VR/AR technology brands</li>
                        <li>Pharmaceutical companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$12M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Premium content with franchise potential, international
                        appeal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collaboration & Contact Section */}
              <div className="py-8 border-t border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Contact</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Collaboration Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 text-sm mb-2">
                      <li>Open to co-writing, producing, and directing partnerships</li>
                      <li>Seeking talent, brands, and investors for current projects</li>
                      <li>Available for speaking engagements and panels</li>
                      <li>Interested in cross-industry innovation</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start justify-between">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Contact & Connect
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Connect with Joe Bell directly through IndieGate.io's messaging system for
                      collaboration, investment, or project inquiries.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                      Message Joe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Distributors' && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-0 md:p-8 text-left max-w-6xl mx-auto w-full shadow-xl">
              {/* Filmmaker Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 border-b border-slate-700/50">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                  JB
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Joe Bell</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                      <span
                        key={role}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4">
                    Creative visionary with expertise across multiple filmmaking disciplines.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                    Message Joe
                  </button>
                </div>
              </div>
              {/* Project Filters (future) */}
              {/* Featured Projects Grid */}
              <div className="py-8">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Tentative Feelings</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Romantic Comedy
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        In Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Modern romantic comedy exploring authentic connections in the digital dating
                      era.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Lead romantic interests (ages 25-35)</li>
                        <li>Supporting comedic roles</li>
                        <li>Social media influencer cameos</li>
                        <li>Tech industry characters</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Dating app partnerships</li>
                        <li>Coffee shops/restaurants</li>
                        <li>Fashion/lifestyle brands</li>
                        <li>Technology companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$2.5M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Streaming rights, theatrical release, brand partnerships
                      </span>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Traded</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sports Drama
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Pre-Production
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Intense drama following a professional athlete through career-defining trades.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Professional athlete lead (ages 25-40)</li>
                        <li>Sports agents/managers</li>
                        <li>Coaches and team staff</li>
                        <li>Sports media personalities</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Sports equipment manufacturers</li>
                        <li>Athletic apparel brands</li>
                        <li>Energy drinks/supplements</li>
                        <li>Sports broadcasting networks</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$8M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Theatrical release, international sales, merchandising
                      </span>
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">The Lambs</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sci-Fi Psychological Thriller
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Script Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Mind-bending thriller exploring memory manipulation technology and reality
                      perception.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Complex lead protagonist (ages 30-45)</li>
                        <li>Mysterious scientist/antagonist</li>
                        <li>Tech industry whistleblower</li>
                        <li>Ensemble supporting cast</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Technology companies (subtle integration)</li>
                        <li>Medical device manufacturers</li>
                        <li>VR/AR technology brands</li>
                        <li>Pharmaceutical companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$12M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Premium content with franchise potential, international
                        appeal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collaboration & Contact Section */}
              <div className="py-8 border-t border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Contact</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Collaboration Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 text-sm mb-2">
                      <li>Open to co-writing, producing, and directing partnerships</li>
                      <li>Seeking talent, brands, and investors for current projects</li>
                      <li>Available for speaking engagements and panels</li>
                      <li>Interested in cross-industry innovation</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start justify-between">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Contact & Connect
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Connect with Joe Bell directly through IndieGate.io's messaging system for
                      collaboration, investment, or project inquiries.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                      Message Joe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Community' && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-0 md:p-8 text-left max-w-6xl mx-auto w-full shadow-xl">
              {/* Filmmaker Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 border-b border-slate-700/50">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                  JB
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Joe Bell</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                      <span
                        key={role}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4">
                    Creative visionary with expertise across multiple filmmaking disciplines.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                    Message Joe
                  </button>
                </div>
              </div>
              {/* Project Filters (future) */}
              {/* Featured Projects Grid */}
              <div className="py-8">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Tentative Feelings</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Romantic Comedy
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        In Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Modern romantic comedy exploring authentic connections in the digital dating
                      era.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Lead romantic interests (ages 25-35)</li>
                        <li>Supporting comedic roles</li>
                        <li>Social media influencer cameos</li>
                        <li>Tech industry characters</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Dating app partnerships</li>
                        <li>Coffee shops/restaurants</li>
                        <li>Fashion/lifestyle brands</li>
                        <li>Technology companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$2.5M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Streaming rights, theatrical release, brand partnerships
                      </span>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Traded</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sports Drama
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Pre-Production
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Intense drama following a professional athlete through career-defining trades.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Professional athlete lead (ages 25-40)</li>
                        <li>Sports agents/managers</li>
                        <li>Coaches and team staff</li>
                        <li>Sports media personalities</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Sports equipment manufacturers</li>
                        <li>Athletic apparel brands</li>
                        <li>Energy drinks/supplements</li>
                        <li>Sports broadcasting networks</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$8M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Theatrical release, international sales, merchandising
                      </span>
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">The Lambs</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sci-Fi Psychological Thriller
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Script Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Mind-bending thriller exploring memory manipulation technology and reality
                      perception.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Complex lead protagonist (ages 30-45)</li>
                        <li>Mysterious scientist/antagonist</li>
                        <li>Tech industry whistleblower</li>
                        <li>Ensemble supporting cast</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Technology companies (subtle integration)</li>
                        <li>Medical device manufacturers</li>
                        <li>VR/AR technology brands</li>
                        <li>Pharmaceutical companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$12M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Premium content with franchise potential, international
                        appeal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collaboration & Contact Section */}
              <div className="py-8 border-t border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Contact</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Collaboration Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 text-sm mb-2">
                      <li>Open to co-writing, producing, and directing partnerships</li>
                      <li>Seeking talent, brands, and investors for current projects</li>
                      <li>Available for speaking engagements and panels</li>
                      <li>Interested in cross-industry innovation</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start justify-between">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Contact & Connect
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Connect with Joe Bell directly through IndieGate.io's messaging system for
                      collaboration, investment, or project inquiries.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                      Message Joe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'Messages' && (
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-0 md:p-8 text-left max-w-6xl mx-auto w-full shadow-xl">
              {/* Filmmaker Header Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 border-b border-slate-700/50">
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
                  JB
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-extrabold text-white mb-2">Joe Bell</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Writer', 'Producer', 'Director', 'Actor'].map(role => (
                      <span
                        key={role}
                        className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="text-purple-100 mb-4">
                    Creative visionary with expertise across multiple filmmaking disciplines.
                  </p>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                    Message Joe
                  </button>
                </div>
              </div>
              {/* Project Filters (future) */}
              {/* Featured Projects Grid */}
              <div className="py-8">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Project 1 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Tentative Feelings</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Romantic Comedy
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        In Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Modern romantic comedy exploring authentic connections in the digital dating
                      era.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Lead romantic interests (ages 25-35)</li>
                        <li>Supporting comedic roles</li>
                        <li>Social media influencer cameos</li>
                        <li>Tech industry characters</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Dating app partnerships</li>
                        <li>Coffee shops/restaurants</li>
                        <li>Fashion/lifestyle brands</li>
                        <li>Technology companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$2.5M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Streaming rights, theatrical release, brand partnerships
                      </span>
                    </div>
                  </div>
                  {/* Project 2 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">Traded</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sports Drama
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Pre-Production
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Intense drama following a professional athlete through career-defining trades.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Professional athlete lead (ages 25-40)</li>
                        <li>Sports agents/managers</li>
                        <li>Coaches and team staff</li>
                        <li>Sports media personalities</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Sports equipment manufacturers</li>
                        <li>Athletic apparel brands</li>
                        <li>Energy drinks/supplements</li>
                        <li>Sports broadcasting networks</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$8M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Theatrical release, international sales, merchandising
                      </span>
                    </div>
                  </div>
                  {/* Project 3 */}
                  <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-xl transition-all border border-slate-700/50">
                    <h4 className="text-xl font-bold text-purple-200 mb-2">The Lambs</h4>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                        Sci-Fi Psychological Thriller
                      </span>
                      <span className="bg-indigo-700/30 text-indigo-100 px-2 py-1 rounded-full text-xs">
                        Script Development
                      </span>
                    </div>
                    <p className="text-purple-100 text-sm mb-3">
                      Mind-bending thriller exploring memory manipulation technology and reality
                      perception.
                    </p>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">
                        Character Opportunities:
                      </span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Complex lead protagonist (ages 30-45)</li>
                        <li>Mysterious scientist/antagonist</li>
                        <li>Tech industry whistleblower</li>
                        <li>Ensemble supporting cast</li>
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold text-white text-xs">Brand Placement:</span>
                      <ul className="list-disc list-inside text-purple-200 text-xs mt-1">
                        <li>Technology companies (subtle integration)</li>
                        <li>Medical device manufacturers</li>
                        <li>VR/AR technology brands</li>
                        <li>Pharmaceutical companies</li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="text-xs text-purple-300">
                        Investment Needs: <span className="font-bold text-green-300">$12M</span>
                      </span>
                      <span className="text-xs text-purple-300">
                        ROI Potential: Premium content with franchise potential, international
                        appeal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Collaboration & Contact Section */}
              <div className="py-8 border-t border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration & Contact</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Collaboration Opportunities
                    </h4>
                    <ul className="list-disc list-inside text-purple-200 text-sm mb-2">
                      <li>Open to co-writing, producing, and directing partnerships</li>
                      <li>Seeking talent, brands, and investors for current projects</li>
                      <li>Available for speaking engagements and panels</li>
                      <li>Interested in cross-industry innovation</li>
                    </ul>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-start justify-between">
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Contact & Connect
                    </h4>
                    <p className="text-purple-100 text-sm mb-4">
                      Connect with Joe Bell directly through IndieGate.io's messaging system for
                      collaboration, investment, or project inquiries.
                    </p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all">
                      Message Joe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default CreativePortal
