import { useState } from 'react'
import {
  Briefcase,
  MapPin,
  Calendar,
  CheckCircle,
  Star,
  Mail,
  Phone,
  Link as LinkIcon,
  Linkedin,
  DollarSign,
  BarChart2,
  PieChart,
  Target,
} from 'lucide-react'

const InvestorProfile = () => {
  const [viewMode, setViewMode] = useState('manager') // 'manager' or 'public'

  const profileData = {
    name: 'Jourdain Bell',
    title: 'Executive Producer',
    company: 'Bell Entertainment Ventures',
    location: 'Los Angeles, CA',
    memberSince: 'January 2023',
    investmentRange: '$250K - $3M',
    avatar: 'https://i.pravatar.cc/150?u=jourdainbell',
    bio: 'Jourdain Bell is a seasoned Executive Producer with a keen eye for compelling narratives and a proven track record of bringing successful independent films to market. With over a decade of experience in film finance and production, Jourdain has been instrumental in the success of numerous projects, championing diverse voices and innovative storytelling. At Bell Entertainment Ventures, the focus is on identifying and nurturing talent to create impactful and commercially viable cinema.',
    metrics: {
      totalInvested: '$12.8M',
      projectsFinanced: '24',
      averageROI: '315%',
      investorRating: 'A+',
    },
    preferences: {
      genres: ['Drama', 'Thriller', 'Documentary', 'Comedy'],
      stages: ['Development', 'Pre-Production', 'Production'],
      budget: '$100K - $3M',
      geo: 'Global Projects',
      roi: '15-25% IRR',
    },
    contact: {
      email: 'jourdain@indiegate.io',
      phone: '(310) 555-0123',
      website: 'bellentertainment.com',
      linkedin: 'linkedin.com/in/jourdainbell',
    },
    status: {
      current: 'Actively Investing',
      capital: '$2.5M',
      cycle: 'Q1 2024',
    },
  }

  const isManagerView = viewMode === 'manager'

  const ToggleSwitch = () => (
    <div className="flex items-center p-1 bg-gray-700 rounded-full">
      <button
        onClick={() => setViewMode('manager')}
        className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${isManagerView ? 'bg-purple-600 text-white' : 'text-gray-300'}`}
      >
        Manager View
      </button>
      <button
        onClick={() => setViewMode('public')}
        className={`px-4 py-1 text-sm font-medium rounded-full transition-colors ${!isManagerView ? 'bg-purple-600 text-white' : 'text-gray-300'}`}
      >
        Public View
      </button>
    </div>
  )

  const Section = ({ title, children, isPrivate = false }) => {
    if (!isManagerView && isPrivate) return null
    return (
      <div
        className={`bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 ${isPrivate && 'relative overflow-hidden'}`}
      >
        {isPrivate && (
          <div className="absolute top-2 right-2 text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
            Private
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        {children}
      </div>
    )
  }

  const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center text-gray-300">
      <Icon size={16} className="text-purple-400 mr-3" />
      <span className="text-sm">{label}:</span>
      <span className="text-sm font-semibold text-white ml-2">{value}</span>
    </div>
  )

  const MetricCard = ({ icon: Icon, label, value, colorClass = 'text-green-400' }) => (
    <div className="bg-slate-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-slate-700/50">
      <Icon size={24} className="text-purple-400 mb-2" />
      <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  )

  const Tag = ({ children }) => (
    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm font-medium rounded-full">
      {children}
    </span>
  )

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Investor Profile</h1>
        <div className="flex items-center gap-4">
          <ToggleSwitch />
          <button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-sm transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Profile Header Card */}
      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-8">
        <div className="flex items-start">
          <div className="relative mr-8">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-32 h-32 rounded-full ring-4 ring-purple-500/50"
            />
            <CheckCircle
              size={24}
              className="absolute bottom-1 right-1 bg-slate-800 text-green-400 rounded-full"
            />
          </div>
          <div className="flex-grow">
            <div className="flex items-baseline gap-3">
              <h2 className="text-4xl font-extrabold text-white">{profileData.name}</h2>
              <span className="text-lg font-medium text-purple-400">{profileData.title}</span>
            </div>
            <p className="text-xl text-gray-300 mt-1">{profileData.company}</p>
            <div className="flex items-center gap-6 mt-4 text-gray-400 text-sm">
              <span className="flex items-center">
                <MapPin size={14} className="mr-2" /> {profileData.location}
              </span>
              <span className="flex items-center">
                <Calendar size={14} className="mr-2" /> Member since {profileData.memberSince}
              </span>
            </div>
            <p className="mt-4 text-gray-300 max-w-3xl">{profileData.bio}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">Investment Range</p>
            <p className="text-2xl font-bold text-green-400 mt-1">{profileData.investmentRange}</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <Section title="Key Metrics">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <MetricCard
                icon={DollarSign}
                label="Total Invested"
                value={profileData.metrics.totalInvested}
              />
              <MetricCard
                icon={Briefcase}
                label="Projects Financed"
                value={profileData.metrics.projectsFinanced}
                colorClass="text-blue-400"
              />
              <MetricCard
                icon={BarChart2}
                label="Average ROI"
                value={profileData.metrics.averageROI}
              />
              <MetricCard
                icon={Star}
                label="Investor Rating"
                value={profileData.metrics.investorRating}
                colorClass="text-yellow-400"
              />
            </div>
          </Section>
          <Section title="Smart Matching Preferences">
            <div className="space-y-4">
              <div className="flex items-center">
                <h4 className="w-40 text-sm text-gray-400 font-medium">Preferred Genres</h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.preferences.genres.map(g => (
                    <Tag key={g}>{g}</Tag>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <h4 className="w-40 text-sm text-gray-400 font-medium">Investment Stages</h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.preferences.stages.map(s => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>
              <InfoItem
                icon={PieChart}
                label="Budget Range"
                value={profileData.preferences.budget}
              />
              <InfoItem
                icon={MapPin}
                label="Geographic Focus"
                value={profileData.preferences.geo}
              />
              <InfoItem icon={Target} label="Target ROI" value={profileData.preferences.roi} />
            </div>
          </Section>
        </div>
        {/* Right Column (Sidebar) */}
        <div className="space-y-8">
          <Section title="Contact Information" isPrivate={true}>
            <div className="space-y-3">
              <InfoItem icon={Mail} label="Email" value={profileData.contact.email} />
              <InfoItem icon={Phone} label="Phone" value={profileData.contact.phone} />
              <InfoItem icon={LinkIcon} label="Website" value={profileData.contact.website} />
              <InfoItem icon={Linkedin} label="LinkedIn" value={profileData.contact.linkedin} />
            </div>
          </Section>
          <Section title="Current Investment Status" isPrivate={true}>
            <div className="space-y-3">
              <InfoItem icon={DollarSign} label="Status" value={profileData.status.current} />
              <InfoItem
                icon={Briefcase}
                label="Available Capital"
                value={profileData.status.capital}
              />
              <InfoItem
                icon={Calendar}
                label="Next Review Cycle"
                value={profileData.status.cycle}
              />
            </div>
          </Section>
        </div>
      </div>
    </>
  )
}

export default InvestorProfile
