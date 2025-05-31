import { useState } from 'react'
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
  const [activeTab, setActiveTab] = useState('💰 Deal Flow')
  const [profileView, setProfileView] = useState('showcase')
  
  // Sample investor profile data
  const [profileData, setProfileData] = useState({
    name: 'Jourdain Bell',
    primaryRole: 'Executive Producer',
    secondaryRole: 'Angel Investor',
    additionalRoles: ['Family Office', 'Strategic Partner'],
    location: 'Los Angeles, CA',
    bio: 'Experienced film industry executive and entrepreneur with deep expertise in independent film financing and distribution. Co-founder of IndieGate.io, passionate about empowering emerging filmmakers through strategic investment and mentorship.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    company: 'Bell Entertainment Ventures',
    title: 'Managing Partner & Co-Founder',
    email: 'jourdain@indiegate.io',
    phone: '(310) 555-0123',
    website: 'www.bellentertainment.com',
    linkedin: 'linkedin.com/in/jourdainbell',
    investmentRange: '$250K - $3M',
    totalInvestments: '$12.8M',
    projectsFinanced: 24,
    averageROI: '315%',
    preferredGenres: ['Drama', 'Thriller', 'Documentary', 'Comedy'],
    investmentStage: ['Development', 'Pre-Production', 'Production'],
    budgetRange: { min: '100K', max: '3M' },
    verified: true,
  })

  const handleProfileSave = updatedProfile => {
    setProfileData(updatedProfile)
    setProfileView('showcase')
  }

  const handleProfileCancel = () => {
    setProfileView('showcase')
  }

  const renderProfileTab = () => {
    console.log('Profile tab is being rendered', profileData);
    
    return (
      <div className="space-y-6">
        {/* Emergency Test Message */}
        <div className="bg-green-600 text-white p-4 rounded-lg mb-4">
          <h2 className="text-xl font-bold">✅ Profile Tab is Working!</h2>
          <p>This is a test message. Profile data is loading for: {profileData.name}</p>
          <p>Current tab: {activeTab}</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">My Investor Profile</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-white">Profile Information</h3>
              <p className="text-green-200">Name: {profileData.name}</p>
              <p className="text-green-200">Role: {profileData.primaryRole}</p>
              <p className="text-green-200">Company: {profileData.company}</p>
              <p className="text-green-200">Location: {profileData.location}</p>
            </div>
            <Button
              onClick={() => setProfileView('editor')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Edit Profile (Test)
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const renderDealFlowTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Active Investment Opportunities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Midnight in Brooklyn",
              genre: "Drama",
              budget: "$2.8M",
              seeking: "$1.2M",
              stage: "Pre-Production",
              director: "Sarah Chen",
              roi: "Est. 280%",
              status: "Hot Deal"
            },
            {
              title: "Digital Nomad",
              genre: "Thriller",
              budget: "$1.5M",
              seeking: "$750K",
              stage: "Development",
              director: "Mike Rodriguez",
              roi: "Est. 320%",
              status: "Featured"
            },
            {
              title: "The Last Record Store",
              genre: "Documentary",
              budget: "$500K",
              seeking: "$300K",
              stage: "Production",
              director: "Alex Kim",
              roi: "Est. 180%",
              status: "Limited Time"
            }
          ].map((project, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                  {project.status}
                </span>
              </div>
              <p className="text-green-200 text-sm">{project.genre} • {project.stage}</p>
              <p className="text-purple-200 text-sm">Director: {project.director}</p>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Budget:</span>
                  <span className="text-white">{project.budget}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Seeking:</span>
                  <span className="text-green-400">{project.seeking}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Est. ROI:</span>
                  <span className="text-green-400">{project.roi}</span>
                </div>
              </div>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderPortfolioTab = () => (
    <div className="space-y-6">
      <Card className="p-6 bg-white/10 backdrop-blur-lg border border-white/20">
        <h3 className="text-lg font-semibold text-white mb-6">Investment Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">$12.8M</h4>
            <p className="text-green-100">Total Invested</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">24</h4>
            <p className="text-blue-100">Projects Financed</p>
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-center">
            <h4 className="text-2xl font-bold text-white">315%</h4>
            <p className="text-purple-100">Average ROI</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold text-white mb-4">Recent Investments</h4>
        <div className="space-y-4">
          {[
            {
              title: "The Silent Hour",
              amount: "$850K",
              stage: "Completed",
              roi: "+420%",
              status: "success"
            },
            {
              title: "City of Dreams",
              amount: "$1.2M",
              stage: "Post-Production",
              roi: "Pending",
              status: "pending"
            },
            {
              title: "Broken Chains",
              amount: "$650K",
              stage: "Distribution",
              roi: "+280%",
              status: "success"
            }
          ].map((investment, index) => (
            <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <div>
                <h5 className="font-medium text-white">{investment.title}</h5>
                <p className="text-sm text-gray-300">{investment.stage}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">{investment.amount}</p>
                <p className={`text-sm ${
                  investment.status === 'success' ? 'text-green-400' : 'text-yellow-400'
                }`}>
                  {investment.roi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-12 text-center">
      <div className="text-6xl mb-4">📈</div>
      <h3 className="text-2xl font-bold text-white mb-4">Analytics Dashboard Coming Soon</h3>
      <p className="text-green-200">Advanced portfolio analytics and market insights will be available soon!</p>
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
            onClick={() => setActiveTab('💰 Deal Flow')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '💰 Deal Flow'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            💰 Deal Flow
          </button>
          <button
            onClick={() => setActiveTab('📊 Portfolio')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === '📊 Portfolio'
                ? 'bg-white text-green-900 shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            📊 Portfolio
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
          {activeTab === '💰 Deal Flow' && renderDealFlowTab()}
          {activeTab === '📊 Portfolio' && renderPortfolioTab()}
          {activeTab === '🤖 Smart Matching' && renderSmartMatchingTab()}
          {activeTab === '👤 Profile' && renderProfileTab()}
          {activeTab === '📈 Analytics' && renderAnalyticsTab()}
          {activeTab === '💬 Community' && renderCommunityTab()}
        </div>
      </div>
    </div>
  )
}

export default InvestorPortal
