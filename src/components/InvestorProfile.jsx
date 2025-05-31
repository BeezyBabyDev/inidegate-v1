import { useState } from 'react'
import Card from './Card'
import Button from './Button'

const InvestorProfile = ({ profileData: initialProfileData }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Default profile data with Jourdain Bell profile
  const {
    name = 'Jourdain Bell',
    title = 'Executive Producer & Film Investor',
    company = 'Bell Capital Entertainment',
    location = 'Beverly Hills, CA',
    avatar = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAEAAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAWgD/2Q==',
    bio = 'Seasoned entertainment executive with 12+ years experience in film financing and production. Passionate about supporting diverse voices in independent cinema and building sustainable creative partnerships.',
    email = 'jourdain.bell@bellcapital.com',
    phone = '+1 (555) 987-6543',
    
    // Investment Profile
    investmentFocus = ['Independent Films', 'Documentaries', 'Diverse Voices', 'Genre Films'],
    budgetRange = '$500K - $5M',
    investmentStage = ['Development', 'Pre-Production', 'Production'],
    portfolioSize = '25+ Films',
    
    // Professional Background
    experience = '12+ years',
    previousRoles = [
      'Senior VP Development - Summit Entertainment',
      'Head of Acquisitions - A24 Films',
      'Investment Partner - Creative Capital Group'
    ],
    
    // Investment Portfolio Highlights
    notableInvestments = [
      {
        title: 'Midnight in Brooklyn',
        year: 2023,
        role: 'Executive Producer',
        budget: '$2.5M',
        status: 'Released',
        performance: 'Profit +40%'
      },
      {
        title: 'The Last Poetry Club',
        year: 2022,
        role: 'Lead Investor',
        budget: '$850K',
        status: 'Festival Circuit',
        performance: 'Sundance Selection'
      },
      {
        title: 'Urban Legends',
        year: 2023,
        role: 'Executive Producer',
        budget: '$1.8M',
        status: 'Streaming',
        performance: 'Netflix Acquisition'
      }
    ],
    
    // Investment Criteria
    investmentCriteria = {
      genres: ['Drama', 'Thriller', 'Documentary', 'Horror', 'Comedy'],
      budgetPreference: '$500K - $5M',
      regionFocus: 'Global',
      diversityCommitment: 'Women & Minority Filmmakers',
      returnExpectation: '15-25% IRR'
    },
    
    // Current Availability
    availability = {
      status: 'Actively Investing',
      lookingFor: 'Feature Films & Limited Series',
      nextReview: 'March 2024',
      fundingAvailable: '$8.5M'
    },
    
    // Professional Achievements
    achievements = [
      'Producer of the Year - Independent Film Alliance 2023',
      'Mentor - Sundance Producer Lab',
      'Board Member - Film Independent',
      'Guest Lecturer - USC Film School'
    ],
    
    // Network & Connections
    network = {
      distributors: ['A24', 'Neon', 'IFC Films', 'Focus Features'],
      salesAgents: ['WME Independent', 'CAA Media Finance'],
      festivals: ['Sundance', 'Cannes', 'Toronto', 'SXSW'],
      streamingContacts: ['Netflix', 'Hulu', 'Amazon Prime', 'Apple TV+']
    },
    
    // Social & Professional Links
    social = {
      linkedin: 'linkedin.com/in/jourdainbell',
      website: 'bellcapitalentertainment.com',
      imdb: 'imdb.com/name/nm123456',
      company: 'bellcapital.com'
    },
  } = initialProfileData || {}

  const IndieGateLogo = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        <svg
          viewBox="0 0 200 50"
          className="h-12 w-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="logoClipInvestor">
              <rect x="0" y="0" width="200" height="50"/>
            </clipPath>
          </defs>
          
          {/* Logo Elements */}
          <g clipPath="url(#logoClipInvestor)">
            {/* Projector (thicker square) */}
            <rect x="8" y="12" width="14" height="14" rx="2" fill="#2563eb" stroke="#60a5fb" strokeWidth="0.5"/>
            <circle cx="15" cy="19" r="3" fill="none" stroke="#60a5fb" strokeWidth="1"/>
            <circle cx="15" cy="19" r="1.5" fill="#60a5fb"/>
            
            {/* Screen (thinner square) */}
            <rect x="26" y="15" width="10" height="8" rx="1" fill="none" stroke="#2563eb" strokeWidth="1.5"/>
            <rect x="27" y="16" width="8" height="6" fill="#60a5fb" opacity="0.3"/>
            
            {/* Connection beam */}
            <path d="M22 19 L26 19" stroke="#60a5fb" strokeWidth="1" opacity="0.6"/>
            <path d="M22 18 L26 18" stroke="#60a5fb" strokeWidth="0.5" opacity="0.4"/>
            <path d="M22 20 L26 20" stroke="#60a5fb" strokeWidth="0.5" opacity="0.4"/>
            
            {/* Text */}
            <text x="44" y="22" className="fill-gray-800 text-lg font-bold">IndieGate</text>
            <text x="44" y="32" className="fill-blue-600 text-sm font-medium">.io</text>
          </g>
        </svg>
      </div>
    </div>
  )

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
              {/* Add verification logic here */}
            </div>
            <p className="text-lg text-purple-600 font-medium">{title}</p>
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
            <p className="text-xl font-bold text-green-600">{budgetRange}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{bio}</p>
      </Card>

      {/* Investment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-purple-600">{portfolioSize}</div>
          <div className="text-sm text-gray-600">Total Invested</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-blue-600">{experience}</div>
          <div className="text-sm text-gray-600">Experience</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-2xl font-bold text-green-600">{availability.fundingAvailable}</div>
          <div className="text-sm text-gray-600">Funding Available</div>
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
              {investmentCriteria.genres.map((genre, index) => (
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
              {social.website && (
                <a
                  href={social.website}
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
                  <span className="text-sm">{social.website.replace('https://', '')}</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Social Media & Professional</h4>
            <div className="grid grid-cols-2 gap-3">
              {social.linkedin && (
                <a
                  href={social.linkedin}
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

              {/* Add Twitter, Instagram, and IMDB links */}
              {/* ... */}
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
          {notableInvestments.map((investment, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{investment.title}</h4>
                  <p className="text-sm text-gray-600">{investment.year}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{investment.budget}</p>
                  <p
                    className={`text-sm font-medium ${
                      investment.performance === 'Sundance Selection' ? 'text-blue-600' : 'text-green-600'
                    }`}
                  >
                    {investment.performance}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    investment.status === 'Released'
                      ? 'bg-green-100 text-green-800'
                      : investment.status === 'Festival Circuit'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {investment.status}
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
                <span className="font-medium">{investmentCriteria.budgetPreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Maximum:</span>
                <span className="font-medium">{investmentCriteria.budgetPreference}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Region Focus</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                {investmentCriteria.regionFocus}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Diversity Commitment</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                {investmentCriteria.diversityCommitment}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Return Expectation</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>{investmentCriteria.returnExpectation}</div>
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
      <IndieGateLogo />
      
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
