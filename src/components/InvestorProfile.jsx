import { useState } from 'react'
import Card from './Card'
import Button from './Button'

const InvestorProfile = ({ profileData: initialProfileData }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Default profile data with all the film industry specific fields
  const {
    name = 'Sarah Montgomery',
    company = 'Paramount Ventures',
    role = 'Executive Producer',
    location = 'Beverly Hills, CA',
    avatar = 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=150&h=150&fit=crop&crop=face',
    bio = 'Seasoned executive producer with 15+ years in film financing. Former studio executive turned independent investor, specializing in elevated genre films and documentaries with strong commercial appeal. Known for supporting diverse voices and innovative storytelling that resonates with global audiences.',
    investmentRange = '$500K - $5M',
    totalInvestments = '$24.5M',
    projectsFinanced = '18',
    averageROI = '285%',
    preferredGenres = ['Drama', 'Thriller', 'Documentary', 'Horror'],
    investmentStage = ['Development', 'Pre-Production', 'Post-Production'],

    // Enhanced contact & social information
    email = 'sarah.montgomery@paramountventures.com',
    phone = '(310) 555-0123',
    website = 'https://paramountventures.com',
    linkedin = 'https://linkedin.com/in/sarahmontgomery',
    twitter = 'https://twitter.com/sarahmontgomery',
    instagram = 'https://instagram.com/paramountventures',

    portfolio = [
      {
        title: 'Midnight in Salem',
        year: '2023',
        investment: '$2.8M',
        roi: '340%',
        status: 'Released',
      },
      {
        title: 'The Last Witness',
        year: '2024',
        investment: '$4.2M',
        roi: 'TBD',
        status: 'In Theaters',
      },
      {
        title: "Ocean's Call",
        year: '2022',
        investment: '$1.5M',
        roi: '220%',
        status: 'Released',
      },
    ],
    criteria = {
      minBudget: '$500K',
      maxBudget: '$10M',
      territoryFocus: ['North America', 'International'],
      distributionPreference: ['Theatrical', 'Streaming', 'Hybrid'],
    },
    verified = true,
  } = initialProfileData || {}

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex items-start space-x-6">
          <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-gray-900">{name}</h1>
              {verified && (
                <div className="flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified Investor
                </div>
              )}
            </div>
            <p className="text-lg text-purple-600 font-medium">{role}</p>
            <p className="text-gray-600">{company}</p>
            <p className="text-sm text-gray-500 flex items-center mt-1">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Investment Range</p>
            <p className="text-xl font-bold text-green-600">{investmentRange}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{bio}</p>
      </Card>

      {/* Investment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">{totalInvestments}</div>
          <div className="text-sm text-gray-600">Total Invested</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{projectsFinanced}</div>
          <div className="text-sm text-gray-600">Projects Financed</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-green-600">{averageROI}</div>
          <div className="text-sm text-gray-600">Average ROI</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-orange-600">A+</div>
          <div className="text-sm text-gray-600">Credit Rating</div>
        </Card>
      </div>

      {/* Investment Preferences */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Preferred Genres</h4>
            <div className="flex flex-wrap gap-2">
              {preferredGenres.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Investment Stages</h4>
            <div className="flex flex-wrap gap-2">
              {investmentStage.map((stage, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Contact Information */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media & Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
            <div className="space-y-2">
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">{email}</span>
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-sm">{phone}</span>
                </a>
              )}
              {website && (
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                    />
                  </svg>
                  <span className="text-sm">{website.replace('https://', '')}</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Social Media & Professional</h4>
            <div className="grid grid-cols-2 gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              )}

              {twitter && (
                <a
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.030-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                  Twitter
                </a>
              )}

              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.357C4.267 14.764 3.776 13.613 3.776 12.316s.49-2.448 1.357-3.316C6.001 8.133 7.152 7.643 8.449 7.643s2.448.49 3.316 1.357c.867.868 1.357 2.019 1.357 3.316s-.49 2.448-1.357 3.316c-.868.867-2.019 1.357-3.316 1.357z" />
                  </svg>
                  Instagram
                </a>
              )}

              <a
                href={`https://variety.com/exec/${name.toLowerCase().replace(' ', '-')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-4h2v2h-2zm0-8h2v6h-2z" />
                </svg>
                Industry Profile
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  const renderPortfolio = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Investment Portfolio</h3>
        <div className="space-y-4">
          {portfolio.map((project, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{project.title}</h4>
                  <p className="text-sm text-gray-600">{project.year}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{project.investment}</p>
                  <p
                    className={`text-sm font-medium ${
                      project.roi === 'TBD' ? 'text-gray-500' : 'text-green-600'
                    }`}
                  >
                    ROI: {project.roi}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Released'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Theaters'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {project.status}
                </span>
                <Button size="sm" variant="outline">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

  const renderCriteria = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Investment Criteria</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Budget Range</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Minimum:</span>
                <span className="font-medium">{criteria.minBudget}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maximum:</span>
                <span className="font-medium">{criteria.maxBudget}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Territory Focus</h4>
            <div className="flex flex-wrap gap-2">
              {criteria.territoryFocus.map((territory, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                >
                  {territory}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Distribution Preference</h4>
            <div className="flex flex-wrap gap-2">
              {criteria.distributionPreference.map((dist, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                >
                  {dist}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Deal Structure</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>• Equity participation preferred</div>
              <div>• Revenue sharing models</div>
              <div>• Tax incentive optimization</div>
              <div>• International co-production</div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Due Diligence Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 text-sm">
            <h4 className="font-medium text-gray-900">Required Documents:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Complete script and treatment</li>
              <li>• Detailed budget breakdown</li>
              <li>• Director/producer track record</li>
              <li>• Distribution strategy</li>
              <li>• Market analysis</li>
            </ul>
          </div>
          <div className="space-y-2 text-sm">
            <h4 className="font-medium text-gray-900">Evaluation Timeline:</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Initial review: 7-10 days</li>
              <li>• Due diligence: 30-45 days</li>
              <li>• Decision: 60 days maximum</li>
              <li>• Funding: 30 days post-agreement</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'portfolio'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab('criteria')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'criteria'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Investment Criteria
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'portfolio' && renderPortfolio()}
      {activeTab === 'criteria' && renderCriteria()}
    </div>
  )
}

export default InvestorProfile
