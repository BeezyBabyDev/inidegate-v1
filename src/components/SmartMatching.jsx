import { useState } from 'react'
import { matchingStats, projectMatches } from '../data/matchingData.js'
import {
  ChevronDown,
  ThumbsUp,
  Bookmark,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Info,
  CheckCircle,
  AlertTriangle,
  Star,
} from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProjectDetailModal from './ProjectDetailModal'

// --- Reusable Components ---

const StatCard = ({ label, value, subtext, color = 'text-white' }) => (
  <div className="bg-slate-800/60 p-5 rounded-lg border border-slate-700/80">
    <p className="text-sm text-slate-400 font-medium">{label}</p>
    <p className={`text-3xl font-bold mt-1 ${color}`}>{value}</p>
    {subtext && <p className="text-xs text-slate-500 mt-1">{subtext}</p>}
  </div>
)

const FilterDropdown = ({ label, options }) => (
  <div className="flex items-center gap-2">
    <label className="text-sm font-medium text-slate-300">{label}:</label>
    <button className="flex items-center gap-1.5 bg-slate-700/80 px-3 py-1.5 rounded-md text-sm text-white hover:bg-slate-700">
      All {label}s <ChevronDown size={16} />
    </button>
  </div>
)

const MatchBreakdown = ({ breakdown }) => (
  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
    <p className="font-bold text-white mb-2 text-sm">Match Breakdown</p>
    <ul className="space-y-1.5 text-xs">
      {breakdown.map((item, index) => (
        <li key={index} className="flex justify-between items-center">
          <span className="text-slate-400">{item.reason}</span>
          <span className="font-semibold text-green-400">+{item.value}%</span>
        </li>
      ))}
    </ul>
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-2 h-2 bg-slate-900 transform rotate-45" />
  </div>
)

const MatchCard = ({ match, onInterested }) => (
  <div className="bg-slate-800/60 rounded-lg p-6 border border-slate-700/80 h-full flex flex-col">
    <div className="flex gap-4">
      <div className="text-center relative group shrink-0">
        <p className="text-5xl font-bold text-green-400">{match.match}%</p>
        <p className="text-sm text-slate-400">Match</p>
        <Info size={14} className="absolute top-0 right-[-10px] text-slate-500" />
        <MatchBreakdown breakdown={match.matchBreakdown} />
      </div>
      <div className="border-l border-slate-700 pl-4 flex-grow">
        <h3 className="text-xl font-bold text-white">{match.title}</h3>
        <p className="text-slate-400 mb-2 text-sm">{match.company}</p>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
            {match.location}
          </span>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${match.verified ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'}`}
          >
            {match.verified ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
            {match.verified ? 'Verified' : 'Pending'}
          </span>
          {match.urgent && (
            <span className="text-xs font-semibold bg-red-500/20 text-red-300 px-2 py-1 rounded-full">
              Urgent
            </span>
          )}
        </div>
      </div>
    </div>
    <div className="mt-4 pt-4 border-t border-slate-700/80 flex-grow flex flex-col">
      <p className="text-slate-300 text-sm mb-4 flex-grow">{match.logline}</p>
      <div>
        <p className="text-purple-400 font-semibold mb-4">{match.budget}</p>
        <button
          onClick={() => onInterested(match)}
          className="w-full flex items-center justify-center gap-2 bg-purple-600/80 text-white font-semibold py-2.5 rounded-lg hover:bg-purple-600 transition-colors"
        >
          <Star size={16} />
          Interested
        </button>
      </div>
    </div>
  </div>
)

// --- Main Component ---

const SmartMatching = () => {
  const [minMatch, setMinMatch] = useState(71)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = project => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  }

  return (
    <div>
      {/* Header */}
      <header className="mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Smart Matching</h1>
          <p className="text-slate-400 mt-1">
            AI-powered matches based on your profile, skills, and preferences
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Quality Matches"
          value={matchingStats.qualityMatches}
          subtext={`≥${minMatch}% compatibility`}
        />
        <StatCard label="Liked" value={matchingStats.liked} />
        <StatCard label="Saved" value={matchingStats.saved} />
        <StatCard label="Avg Match" value={`${matchingStats.avgMatch}%`} color="text-green-400" />
      </div>

      {/* Filters */}
      <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700/80 mb-6 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <label
              htmlFor="min-match"
              className="text-sm font-medium text-slate-300 whitespace-nowrap"
            >
              Min Match:
            </label>
            <input
              id="min-match"
              type="range"
              min="50"
              max="100"
              value={minMatch}
              onChange={e => setMinMatch(e.target.value)}
              className="w-32"
            />
            <span className="font-bold text-purple-400">{minMatch}%</span>
          </div>
          <FilterDropdown label="Location" />
          <FilterDropdown label="Budget" />
          <FilterDropdown label="Genre" />
        </div>
      </div>

      {/* Match Carousel */}
      <div className="match-carousel-container">
        <Slider {...sliderSettings}>
          {projectMatches.map(match => (
            <div key={match.id} className="p-2 h-full">
              <MatchCard match={match} onInterested={handleOpenModal} />
            </div>
          ))}
        </Slider>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />

      <style>{`
                .smart-matching-page .slick-slide {
                    padding: 0 10px;
                }
                .smart-matching-page .slick-dots li button:before {
                    color: #fff;
                    font-size: 10px;
                }
                .smart-matching-page .slick-dots li.slick-active button:before {
                    color: #a78bfa; /* purple-400 */
                }
                .smart-matching-page .slick-arrow {
                    color: white;
                    background: rgba(40, 42, 54, 0.7);
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    z-index: 10;
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }
                 .smart-matching-page .slick-prev { left: -50px; }
                 .smart-matching-page .slick-next { right: -50px; }
                 .smart-matching-page .slick-arrow:hover {
                    background: #8B5CF6;
                 }
                .smart-matching-page .slick-slide > div {
                    height: 100%;
                }
                .smart-matching-page .slick-track {
                    display: flex;
                }
            `}</style>
    </div>
  )
}

export default SmartMatching
