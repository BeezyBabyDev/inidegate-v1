import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Button from './Button'
import InvestorProfile from './InvestorProfile'
import InvestorProfileEditor from './InvestorProfileEditor'
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

const InvestorPortal = ({ onLogout, onBack }) => {
  const [activeTab, setActiveTab] = useState('💼 Investments')
  const [profileView, setProfileView] = useState('showcase') // 'showcase' or 'editor'
  const [selectedProject, setSelectedProject] = useState(null)

  // Scroll to top when portal loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Sample investor profile data
  const [profileData, setProfileData] = useState({
    name: 'Sarah Montgomery',
    primaryRole: 'Executive Producer',
    secondaryRole: 'Angel Investor',
    additionalRoles: ['Family Office'],
    location: 'Beverly Hills, CA',
    bio: 'Seasoned entertainment executive with 15+ years funding independent films. Focused on character-driven narratives with commercial appeal.',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
    company: 'Paramount Ventures',
    website: 'www.paramountventures.com',
    linkedin: 'linkedin.com/in/sarahmontgomery',
    investmentRange: '$500K - $5M',
    totalInvestments: '$24.5M',
    projectsFinanced: 18,
    averageROI: '285%',
    preferredGenres: ['Drama', 'Thriller', 'Comedy', 'Documentary'],
    investmentStage: ['Development', 'Pre-Production', 'Post-Production'],
    portfolio: [
      {
        title: 'Midnight in Paris',
        year: '2022',
        investment: '$2.1M',
        roi: '340%',
        status: 'Released',
      },
      {
        title: 'The Last Resort',
        year: '2023',
        investment: '$1.8M',
        roi: '245%',
        status: 'In Theaters',
      },
      {
        title: 'Breaking Point',
        year: '2024',
        investment: '$3.2M',
        roi: 'TBD',
        status: 'Post-Production',
      },
    ],
    verified: true,
  })

  const dealFlow = [
    {
      id: 1,
      title: 'Shadows of Tomorrow',
      genre: 'Sci-Fi Drama',
      budget: '$3.2M',
      seeking: '$1.8M',
      stage: 'Pre-Production',
      director: 'Alex Chen',
      location: 'Vancouver, BC',
      submitted: '2 days ago',
      status: 'Under Review',
    },
    {
      id: 2,
      title: 'The Last Café',
      genre: 'Romance',
      budget: '$1.5M',
      seeking: '$800K',
      stage: 'Development',
      director: 'Maria Rodriguez',
      location: 'Mexico City',
      submitted: '1 week ago',
      status: 'Interested',
    },
    {
      id: 3,
      title: 'Blood Moon',
      genre: 'Horror',
      budget: '$2.8M',
      seeking: '$1.2M',
      stage: 'Production',
      director: 'James Wilson',
      location: 'Atlanta, GA',
      submitted: '3 days ago',
      status: 'Due Diligence',
    },
    {
      id: 4,
      title: 'Growing Up Digital',
      genre: 'Documentary',
      budget: '$450K',
      seeking: '$300K',
      stage: 'Post-Production',
      director: 'Sarah Kim',
      location: 'San Francisco, CA',
      submitted: '5 days ago',
      status: 'Offer Made',
    },
  ]

  const myInvestments = [
    {
      id: 1,
      title: 'The Midnight Hour',
      investment: '$2.1M',
      currentROI: '245%',
      status: 'Released',
      stage: 'Revenue Collection',
      distributor: 'A24',
    },
    {
      id: 2,
      title: 'Desert Dreams',
      investment: '$1.8M',
      currentROI: 'TBD',
      status: 'Post-Production',
      stage: 'Final Cut',
      expectedRelease: 'Q2 2024',
    },
    {
      id: 3,
      title: 'City Lights',
      investment: '$3.2M',
      currentROI: 'TBD',
      status: 'Production',
      stage: 'Principal Photography',
      expectedWrap: 'March 2024',
    },
  ]

  const marketInsights = [
    { metric: 'Average Independent Film ROI', value: '185%', change: '+12%', period: 'YoY' },
    { metric: 'Streaming Revenue Growth', value: '23%', change: '+5%', period: 'Q3 2024' },
    { metric: 'International Sales', value: '$2.8B', change: '+18%', period: 'YTD' },
    { metric: 'Tax Incentive Programs', value: '47', change: '+3', period: 'Active States' },
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
        <InvestorProfileEditor
          initialData={profileData}
          onSave={handleProfileSave}
          onCancel={handleProfileCancel}
        />
      )
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">My Investor Profile</h2>
          <Button
            onClick={() => setProfileView('editor')}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Edit Profile
          </Button>
        </div>
        <InvestorProfile profileData={profileData} />
      </div>
    )
  }

  const renderOpportunitiesTab = () => (
    <div className="space-y-6">
      {/* Market Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {marketInsights.map((insight, index) => (
          <Card key={index} className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-200">{insight.metric}</p>
                <p className="text-2xl font-bold text-white">{insight.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${
                    insight.change.startsWith('+') ? 'text-green-300' : 'text-red-300'
                  }`}
                >
                  {insight.change}
                </p>
                <p className="text-xs text-purple-200">{insight.period}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Deal Flow */}
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">Current Deal Flow</h3>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Advanced Filters
          </Button>
        </div>
        <div className="space-y-4">
          {dealFlow.map(deal => (
            <div
              key={deal.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{deal.title}</h4>
                  <p className="text-green-200">Directed by {deal.director}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white">Seeking: {deal.seeking}</p>
                  <p className="text-sm text-green-200">of {deal.budget} budget</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-green-200">
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
                  {deal.genre}
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {deal.location}
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {deal.stage}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      deal.status === 'Offer Made'
                        ? 'bg-green-500/20 text-green-300'
                        : deal.status === 'Due Diligence'
                          ? 'bg-blue-500/20 text-blue-300'
                          : deal.status === 'Interested'
                            ? 'bg-yellow-500/20 text-yellow-300'
                            : 'bg-gray-500/20 text-gray-300'
                    }`}
                  >
                    {deal.status}
                  </span>
                  <span className="text-sm text-green-200">Submitted {deal.submitted}</span>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-300 hover:bg-green-500/20"
                  >
                    View Details
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Express Interest
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderInvestmentsTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">My Active Investments</h3>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Portfolio Summary
          </Button>
        </div>
        <div className="space-y-4">
          {myInvestments.map(investment => (
            <div
              key={investment.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{investment.title}</h4>
                  <p className="text-green-200">Investment: {investment.investment}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      investment.status === 'Released'
                        ? 'bg-green-500/20 text-green-300'
                        : investment.status === 'Post-Production'
                          ? 'bg-blue-500/20 text-blue-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                    }`}
                  >
                    {investment.status}
                  </span>
                  <p className="text-sm text-green-200 mt-1">Current Stage: {investment.stage}</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex gap-6">
                  <div>
                    <p className="text-sm text-green-200">Current ROI</p>
                    <p
                      className={`font-semibold ${
                        investment.currentROI === 'TBD' ? 'text-gray-400' : 'text-green-300'
                      }`}
                    >
                      {investment.currentROI}
                    </p>
                  </div>
                  {investment.distributor && (
                    <div>
                      <p className="text-sm text-green-200">Distributor</p>
                      <p className="font-medium text-white">{investment.distributor}</p>
                    </div>
                  )}
                  {investment.expectedRelease && (
                    <div>
                      <p className="text-sm text-green-200">Expected Release</p>
                      <p className="font-medium text-white">{investment.expectedRelease}</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-300 hover:bg-green-500/20"
                  >
                    View Reports
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-300 hover:bg-green-500/20"
                  >
                    Contact Producer
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Portfolio Performance</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">$24.5M</div>
            <div className="text-sm text-green-200">Total Invested</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">285%</div>
            <div className="text-sm text-green-200">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">18</div>
            <div className="text-sm text-green-200">Projects Financed</div>
          </div>
        </div>

        {/* Placeholder for charts */}
        <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-green-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p className="text-green-200">Portfolio Analytics Dashboard</p>
            <p className="text-sm text-green-300">
              ROI trends, market analysis, and performance metrics
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-4">Market Trends</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-white mb-2">Top Performing Genres</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-green-200">Drama</span>
                <span className="font-medium text-white">245% avg ROI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200">Thriller</span>
                <span className="font-medium text-white">198% avg ROI</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200">Comedy</span>
                <span className="font-medium text-white">167% avg ROI</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-white mb-2">Distribution Channels</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-green-200">Streaming Platforms</span>
                <span className="font-medium text-white">65%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200">Theatrical</span>
                <span className="font-medium text-white">25%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-200">Hybrid</span>
                <span className="font-medium text-white">10%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  const renderCommunityTab = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
      <CommunityForum userType="investor" userName={profileData.name} />
    </div>
  )

  const renderSmartMatchingTab = () => (
    <div className="space-y-6">
      <SmartMatching userType="investor" userProfile={profileData} />
    </div>
  )

  // Enhanced IndieGate.io Header Component - Matching Landing Page Exactly
  const IndieGateHeader = () => {
    const handleLogoClick = () => {
      window.location.href = 'https://indiegate.io/';
    };

    return (
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo + Text Combo - Exact same as landing page */}
            <div className="text-gray-900">
              <div 
                className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <IndieGateLogo className="w-20 h-20" />
                <div>
                  <h1 className="text-xl font-bold">
                    IndieGate.<span className="text-blue-600">io</span>
                  </h1>
                  <p className="text-xs text-gray-500 mt-1">
                    Investor Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={onBack}
                className="text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                Back to Home
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">JB</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-indigo-900">
      <IndieGateHeader />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8 space-x-1">
          <button
            onClick={() => setActiveTab('💼 Investments')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '💼 Investments'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            💼 Investments
          </button>
          <button
            onClick={() => setActiveTab('🤖 Smart Matching')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '🤖 Smart Matching'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            🤖 Smart Matching
          </button>
          <button
            onClick={() => setActiveTab('📊 My Investments')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '📊 My Investments'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📊 My Investments
          </button>
          <button
            onClick={() => setActiveTab('👤 Profile')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '👤 Profile'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            👤 Profile
          </button>
          <button
            onClick={() => setActiveTab('📈 Analytics')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '📈 Analytics'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📈 Analytics
          </button>
          <button
            onClick={() => setActiveTab('💬 Community')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '💬 Community'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            💬 Community
          </button>
        </div>

        {/* Tab Content */}
        <div className="mb-8">
          {activeTab === '💼 Investments' && renderOpportunitiesTab()}
          {activeTab === '🤖 Smart Matching' && renderSmartMatchingTab()}
          {activeTab === '📊 My Investments' && renderInvestmentsTab()}
          {activeTab === '👤 Profile' && renderProfileTab()}
          {activeTab === '📈 Analytics' && renderAnalyticsTab()}
          {activeTab === '💬 Community' && renderCommunityTab()}
        </div>
      </div>
    </div>
  )
}

export default InvestorPortal
