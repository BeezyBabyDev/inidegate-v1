import { useState } from 'react'
import { useScrollToTop } from '../hooks/useScrollToTop'
import Button from './Button'

// IndieGate.io Logo Component
const IndieGateLogo = ({ className = 'w-48 h-48' }) => (
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

const BrandsPortal = ({ onLogout, onBack }) => {
  // Automatically scroll to top when component mounts
  useScrollToTop()

  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    '🎯 Dashboard',
    '🏢 Brand Profile',
    '🤝 Partnerships',
    '📊 Analytics',
    '🎬 Projects',
  ]

  const renderDashboardTab = () => (
    <div className="space-y-6">
      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Active Campaigns Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Active Campaigns</h3>
          <p className="text-orange-200 mb-4">7 partnerships running</p>
          <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
            Manage Campaigns
          </Button>
        </div>

        {/* ROI Tracking Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
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
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Campaign ROI</h3>
          <p className="text-orange-200 mb-4">+245% average return</p>
          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
            View Analytics
          </Button>
        </div>

        {/* New Opportunities Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">New Opportunities</h3>
          <p className="text-orange-200 mb-4">15 perfect matches</p>
          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
            Browse Projects
          </Button>
        </div>
      </div>

      {/* Featured Opportunities */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">
          Featured Brand Partnership Opportunities
        </h3>
        <div className="space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">
                  &ldquo;Urban Dreams&rdquo; - Tech Startup Integration
                </h4>
                <p className="text-orange-300">Indie Drama • $2.5M Budget • Los Angeles</p>
                <p className="text-orange-200 text-sm mt-2">
                  Looking for emerging tech brands for authentic startup office scenes and mobile
                  app integration
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-full">
                    Tech
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-full">
                    Apps
                  </span>
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-200 text-xs rounded-full">
                    Startups
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-300 font-medium">Equity Partnership</p>
                <p className="text-orange-200 text-sm">2-5% Revenue Share</p>
                <p className="text-orange-200 text-sm">Deadline: Jan 15</p>
                <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
                  92% Match
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm">
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-300 hover:bg-orange-500/20 text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-medium text-white">
                  &ldquo;Midnight Café&rdquo; - Food & Beverage Feature
                </h4>
                <p className="text-orange-300">Romance • $1.8M Budget • Portland</p>
                <p className="text-orange-200 text-sm mt-2">
                  Authentic coffee shop setting needs artisanal coffee brands and local food
                  products
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded-full">
                    Food & Beverage
                  </span>
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded-full">
                    Coffee
                  </span>
                  <span className="px-2 py-1 bg-amber-500/20 text-amber-200 text-xs rounded-full">
                    Local
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-orange-300 font-medium">Product Placement</p>
                <p className="text-orange-200 text-sm">$15K-50K Budget</p>
                <p className="text-orange-200 text-sm">Deadline: Dec 20</p>
                <span className="inline-block mt-2 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                  87% Match
                </span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm">
                Submit Proposal
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-300 hover:bg-orange-500/20 text-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBrandProfileTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Brand Profile</h3>

        {/* Brand Header */}
        <div className="flex items-start space-x-6 mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">TC</span>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white">TechCorp Industries</h4>
            <p className="text-orange-300">Technology & Innovation • San Francisco, CA</p>
            <p className="text-orange-200 mt-2">
              Leading tech company specializing in AI and mobile app development
            </p>
            <div className="flex space-x-2 mt-3">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm">
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-300 hover:bg-orange-500/20 text-sm"
              >
                View Public Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Brand Categories */}
        <div className="mb-6">
          <h5 className="text-lg font-semibold text-white mb-3">Brand Categories</h5>
          <div className="flex flex-wrap gap-2">
            {['Technology', 'Mobile Apps', 'AI/ML', 'Startups', 'Innovation', 'B2B Solutions'].map(
              (category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-500/20 text-orange-200 text-sm rounded-full"
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>

        {/* Recent Partnerships */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-3">Recent Partnerships</h5>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">&ldquo;Silicon Dreams&rdquo; (2024)</h6>
              <p className="text-orange-300 text-sm">
                Product Placement - TechCorp App Integration
              </p>
              <p className="text-orange-200 text-xs">
                ROI: +320% • 2.5M impressions • Featured in Cannes
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <h6 className="font-medium text-white">&ldquo;Future Forward&rdquo; (2023)</h6>
              <p className="text-orange-300 text-sm">Equity Partnership - 3% Revenue Share</p>
              <p className="text-orange-200 text-xs">
                ROI: +185% • International Distribution • Award Winner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPartnershipsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Partnership Dashboard</h3>

        {/* Partnership Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-400">12</p>
            <p className="text-orange-200 text-sm">Active Partnerships</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">$2.4M</p>
            <p className="text-orange-200 text-sm">Total Investment</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-400">245%</p>
            <p className="text-orange-200 text-sm">Avg ROI</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-purple-400">18</p>
            <p className="text-orange-200 text-sm">Film Credits</p>
          </div>
        </div>

        {/* Active Partnerships */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Active Partnerships</h4>
          <div className="space-y-3">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">
                  &ldquo;Urban Dreams&rdquo; - Tech Integration
                </h5>
                <p className="text-orange-300 text-sm">Production Phase • 60% Complete</p>
              </div>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                In Production
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">
                  &ldquo;Midnight Café&rdquo; - Product Placement
                </h5>
                <p className="text-orange-300 text-sm">Post-Production • Editing Phase</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 text-sm rounded-full">
                Post-Production
              </span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center">
              <div>
                <h5 className="font-medium text-white">
                  &ldquo;Drive&rdquo; - Premium Partnership
                </h5>
                <p className="text-orange-300 text-sm">Distribution • Film Festival Circuit</p>
              </div>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                Completed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Brand Analytics</h3>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-orange-400">12.5M</p>
            <p className="text-orange-200 text-sm">Total Impressions</p>
            <p className="text-green-400 text-xs">+45% this quarter</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">245%</p>
            <p className="text-orange-200 text-sm">Average ROI</p>
            <p className="text-green-400 text-xs">+12% vs last year</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-400">4.7</p>
            <p className="text-orange-200 text-sm">Partnership Rating</p>
            <p className="text-green-400 text-xs">Based on 34 projects</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-400">$2.4M</p>
            <p className="text-orange-200 text-sm">Revenue Generated</p>
            <p className="text-green-400 text-xs">+78% year over year</p>
          </div>
        </div>

        {/* Recent Performance */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Recent Performance</h4>
          <div className="space-y-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">
                &ldquo;Silicon Dreams&rdquo; generated{' '}
                <span className="text-orange-400">2.5M impressions</span> at Cannes
              </p>
              <p className="text-orange-300">3 days ago</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm">
              <p className="text-white">
                New partnership opportunity:{' '}
                <span className="text-orange-400">&ldquo;Future Tech&rdquo;</span> - 95% brand match
              </p>
              <p className="text-orange-300">1 week ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProjectsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-6">Project Portfolio</h3>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">&ldquo;Silicon Dreams&rdquo; (2024)</h4>
            <p className="text-orange-300 text-sm mb-3">Tech Drama • $3.2M Budget</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Investment:</span>
                <span className="text-white">$250K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">ROI:</span>
                <span className="text-green-400">+320%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Impressions:</span>
                <span className="text-white">2.5M</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">
              Completed
            </span>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h4 className="font-medium text-white mb-2">&ldquo;Future Forward&rdquo; (2023)</h4>
            <p className="text-orange-300 text-sm mb-3">Sci-Fi Thriller • $4.1M Budget</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Investment:</span>
                <span className="text-white">$180K</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">ROI:</span>
                <span className="text-green-400">+185%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-orange-200">Awards:</span>
                <span className="text-white">3</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
              Award Winner
            </span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="portal-container">
      {/* Header */}
      <header className="portal-header px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IndieGateLogo className="w-48 h-48" />
            <div className="text-white">
              <h1 className="text-3xl font-bold">IndieGate.io</h1>
              <p className="text-xl text-orange-200">Brands Network</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={onBack} className="portal-btn-secondary">
              ← Back to Portal Selection
            </Button>
            <Button onClick={onLogout} className="portal-btn-primary">
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="portal-heading-main portal-fade-in">Welcome to the Brands Network</h2>
            <p className="portal-text-large text-orange-200 mb-8 text-center">
              Discover authentic product placement opportunities and equity partnerships in
              groundbreaking indie films.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-8">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                variant={activeTab === tab ? 'outline' : 'ghost'}
                onClick={() => {
                  setActiveTab(tab)
                }}
                className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20"
              >
                {tab}
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === '🎯 Dashboard' && renderDashboardTab()}
          {activeTab === '🏢 Brand Profile' && renderBrandProfileTab()}
          {activeTab === '🤝 Partnerships' && renderPartnershipsTab()}
          {activeTab === '📊 Analytics' && renderAnalyticsTab()}
          {activeTab === '🎬 Projects' && renderProjectsTab()}
        </div>
      </main>
    </div>
  )
}

export default BrandsPortal
