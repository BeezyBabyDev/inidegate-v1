import { useState } from 'react'
import Card from './Card'
import Button from './Button'

const InvestorProfile = ({ profileData: initialProfileData }) => {
  const [activeTab, setActiveTab] = useState('overview')

  // Default profile data with Jourdain Bell profile
  const {
    name = 'Jourdain Bell',
    title = 'Executive Producer & Film Investor',
    company = 'Bell Family Capital',
    location = 'Beverly Hills, CA',
    avatar = '/api/placeholder/150/150',
    bio = 'Seasoned entertainment executive with 12+ years experience in film financing and production. Passionate about supporting diverse voices in independent cinema and building sustainable creative partnerships.',
    email = 'jourdain.bell@bellfamilycapital.com',
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
      website: 'bellfamilycapital.com',
      imdb: 'imdb.com/name/nm123456',
      company: 'bellfamilycapital.com'
    },
  } = initialProfileData || {}

  const IndieGateLogo = () => (
    <div className="flex justify-center mb-8">
      <div className="flex items-center">
        <svg className="h-12 w-auto" viewBox="0 0 375 375" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="logoClipInvestor">
              <path d="M 120.957031 164 L 124 164 L 124 246 L 120.957031 246 Z M 120.957031 164 " />
            </clipPath>
            <clipPath id="logoClipInvestor2">
              <path d="M 217 164 L 219.121094 164 L 219.121094 246 L 217 246 Z M 217 164 " />
            </clipPath>
            <clipPath id="logoClipInvestor3">
              <path d="M 129 251 L 211 251 L 211 254.039062 L 129 254.039062 Z M 129 251 " />
            </clipPath>
            <clipPath id="logoClipInvestor4">
              <path d="M 129 155.878906 L 211 155.878906 L 211 159 L 129 159 Z M 129 155.878906 " />
            </clipPath>
            <clipPath id="logoClipInvestor5">
              <path d="M 120.957031 245 L 130 245 L 130 254.039062 L 120.957031 254.039062 Z M 120.957031 245 " />
            </clipPath>
            <clipPath id="logoClipInvestor6">
              <path d="M 210 245 L 219.121094 245 L 219.121094 254.039062 L 210 254.039062 Z M 210 245 " />
            </clipPath>
            <clipPath id="logoClipInvestor7">
              <path d="M 120.957031 155.878906 L 130 155.878906 L 130 165 L 120.957031 165 Z M 120.957031 155.878906 " />
            </clipPath>
            <clipPath id="logoClipInvestor8">
              <path d="M 210 155.878906 L 219.121094 155.878906 L 219.121094 165 L 210 165 Z M 210 155.878906 " />
            </clipPath>
            <clipPath id="logoClipInvestor9">
              <path d="M 120.269531 155.191406 L 220.019531 155.191406 L 220.019531 254.941406 L 120.269531 254.941406 Z M 120.269531 155.191406 " />
            </clipPath>
            <clipPath id="logoClipInvestor10">
              <path d="M 155.878906 129 L 159 129 L 159 211 L 155.878906 211 Z M 155.878906 129 " />
            </clipPath>
            <clipPath id="logoClipInvestor11">
              <path d="M 251 129 L 254.039062 129 L 254.039062 211 L 251 211 Z M 251 129 " />
            </clipPath>
            <clipPath id="logoClipInvestor12">
              <path d="M 164 217 L 246 217 L 246 219.121094 L 164 219.121094 Z M 164 217 " />
            </clipPath>
            <clipPath id="logoClipInvestor13">
              <path d="M 164 120.957031 L 246 120.957031 L 246 124 L 164 124 Z M 164 120.957031 " />
            </clipPath>
            <clipPath id="logoClipInvestor14">
              <path d="M 155.878906 210 L 165 210 L 165 219.121094 L 155.878906 219.121094 Z M 155.878906 210 " />
            </clipPath>
            <clipPath id="logoClipInvestor15">
              <path d="M 245 210 L 254.039062 210 L 254.039062 219.121094 L 245 219.121094 Z M 245 210 " />
            </clipPath>
            <clipPath id="logoClipInvestor16">
              <path d="M 155.878906 120.957031 L 165 120.957031 L 165 130 L 155.878906 130 Z M 155.878906 120.957031 " />
            </clipPath>
            <clipPath id="logoClipInvestor17">
              <path d="M 245 120.957031 L 254.039062 120.957031 L 254.039062 130 L 245 130 Z M 245 120.957031 " />
            </clipPath>
            <clipPath id="logoClipInvestor18">
              <path d="M 155.191406 120.269531 L 254.941406 120.269531 L 254.941406 220.019531 L 155.191406 220.019531 Z M 155.191406 120.269531 " />
            </clipPath>
          </defs>
          <g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 123.25 245.800781 L 120.269531 245.800781 L 120.269531 164.332031 L 123.25 164.332031 Z M 123.25 245.800781 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor2)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 220.019531 245.800781 L 217.039062 245.800781 L 217.039062 164.332031 L 220.019531 164.332031 Z M 220.019531 245.800781 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor3)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 210.878906 254.941406 L 129.410156 254.941406 L 129.410156 251.960938 L 210.878906 251.960938 Z M 210.878906 254.941406 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor4)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 210.878906 158.171875 L 129.410156 158.171875 L 129.410156 155.191406 L 210.878906 155.191406 Z M 210.878906 158.171875 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor5)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 123.25 251.960938 L 123.25 245.800781 L 120.269531 245.800781 L 120.269531 254.941406 L 129.410156 254.941406 L 129.410156 251.960938 Z M 123.25 251.960938 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor6)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 217.039062 251.960938 L 210.878906 251.960938 L 210.878906 254.941406 L 220.019531 254.941406 L 220.019531 245.800781 L 217.039062 245.800781 Z M 217.039062 251.960938 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor7)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 123.25 158.171875 L 129.410156 158.171875 L 129.410156 155.191406 L 120.269531 155.191406 L 120.269531 164.332031 L 123.25 164.332031 Z M 123.25 158.171875 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor8)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#000000', fillOpacity: 1 }}
                d="M 217.039062 158.171875 L 217.039062 164.332031 L 220.019531 164.332031 L 220.019531 155.191406 L 210.878906 155.191406 L 210.878906 158.171875 Z M 217.039062 158.171875 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor9)">
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
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor10)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 158.171875 210.882812 L 155.191406 210.882812 L 155.191406 129.410156 L 158.171875 129.410156 Z M 158.171875 210.882812 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor11)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 254.941406 210.882812 L 251.960938 210.882812 L 251.960938 129.410156 L 254.941406 129.410156 Z M 254.941406 210.882812 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor12)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 245.800781 220.019531 L 164.332031 220.019531 L 164.332031 217.039062 L 245.800781 217.039062 Z M 245.800781 220.019531 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor13)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 245.800781 123.253906 L 164.332031 123.253906 L 164.332031 120.269531 L 245.800781 120.269531 Z M 245.800781 123.253906 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor14)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 158.171875 217.039062 L 158.171875 210.882812 L 155.191406 210.882812 L 155.191406 220.019531 L 164.332031 220.019531 L 164.332031 217.039062 Z M 158.171875 217.039062 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor15)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 251.960938 217.039062 L 245.800781 217.039062 L 245.800781 220.019531 L 254.941406 220.019531 L 254.941406 210.882812 L 251.960938 210.882812 Z M 251.960938 217.039062 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor16)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 158.171875 123.253906 L 164.332031 123.253906 L 164.332031 120.269531 L 155.191406 120.269531 L 155.191406 129.410156 L 158.171875 129.410156 Z M 158.171875 123.253906 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor17)">
              <path
                style={{ stroke: 'none', fillRule: 'nonzero', fill: '#ffffff', fillOpacity: 1 }}
                d="M 251.960938 123.253906 L 251.960938 129.410156 L 254.941406 129.410156 L 254.941406 120.269531 L 245.800781 120.269531 L 245.800781 123.253906 Z M 251.960938 123.253906 "
              />
            </g>
            <g clipRule="nonzero" clipPath="url(#logoClipInvestor18)">
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
