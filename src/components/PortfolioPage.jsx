import { useState } from 'react'
import { portfolioData } from '../data/portfolioData'
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  PieChart,
  Map,
  BarChart,
  ExternalLink,
} from 'lucide-react'

const StatCard = ({ label, value, icon, color }) => {
  const Icon = icon
  return (
    <div className="bg-slate-800 p-4 rounded-lg flex items-center">
      <div className={`mr-4 p-2 rounded-full ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  )
}

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const [activeTab, setActiveTab] = useState('rationale')

  const renderContent = () => {
    switch (activeTab) {
      case 'rationale':
        return (
          <div className="space-y-4">
            <h4 className="font-bold text-purple-400">Why We Invested</h4>
            <p className="text-gray-300">{project.investmentRationale.why}</p>
            <h4 className="font-bold text-purple-400">Market Opportunity</h4>
            <p className="text-gray-300">{project.investmentRationale.marketOpportunity}</p>
            <h4 className="font-bold text-purple-400">Team Assessment</h4>
            <p className="text-gray-300">{project.investmentRationale.teamAssessment}</p>
            <h4 className="font-bold text-purple-400">Risk Factors</h4>
            <p className="text-gray-300">{project.investmentRationale.riskFactors}</p>
          </div>
        )
      case 'details':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <p>
              <strong className="text-gray-400">Genre:</strong> {project.genre}
            </p>
            <p>
              <strong className="text-gray-400">Runtime:</strong> {project.runtime}
            </p>
            <p>
              <strong className="text-gray-400">Target Audience:</strong> {project.targetAudience}
            </p>
            <p>
              <strong className="text-gray-400">Director:</strong> {project.keyPersonnel.director}
            </p>
            <p>
              <strong className="text-gray-400">Cast:</strong>{' '}
              {project.keyPersonnel.cast.join(', ')}
            </p>
            <p>
              <strong className="text-gray-400">Status:</strong> {project.production.timeline}
            </p>
            <p>
              <strong className="text-gray-400">Distribution:</strong>{' '}
              {project.production.distribution}
            </p>
          </div>
        )
      case 'financials':
        return (
          <div className="space-y-4 text-sm">
            <p>
              <strong className="text-gray-400">Initial Investment:</strong> $
              {project.financials.initialInvestment.toLocaleString()}
            </p>
            <p>
              <strong className="text-gray-400">Investment Date:</strong>{' '}
              {project.financials.investmentDate}
            </p>
            <p>
              <strong className="text-gray-400">Terms:</strong> {project.financials.terms}
            </p>
            <p>
              <strong className="text-gray-400">Current Valuation:</strong> $
              {project.financials.currentValuation.toLocaleString()}
            </p>
            <h4 className="font-bold text-purple-400 mt-4">Revenue & ROI</h4>
            <p className="text-gray-300">
              <strong className="text-gray-400">Structure:</strong>{' '}
              {project.financials.revenueStructure}
            </p>
            <p className="text-gray-300">
              <strong className="text-gray-400">Methodology:</strong>{' '}
              {project.financials.roiMethodology}
            </p>
            <h4 className="font-bold text-purple-400 mt-4">Waterfall</h4>
            <p className="text-gray-300">{project.financials.waterfall}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-500 ease-in-out">
      <div className="flex items-center p-4 cursor-pointer" onClick={onToggle}>
        <img
          src={project.posterUrl}
          alt={`${project.title} Poster`}
          className="w-16 h-24 object-cover rounded-md mr-6"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="text-sm text-purple-400">{project.genre}</p>
          <p className="text-xs text-gray-400 mt-1">{project.synopsis.substring(0, 100)}...</p>
        </div>
        <div className="flex items-center text-sm ml-6">
          <div className="text-center mx-4">
            <p className="font-bold text-lg text-green-400">
              ${(project.financials.initialInvestment / 1000000).toFixed(1)}M
            </p>
            <p className="text-xs text-gray-400">Invested</p>
          </div>
          <div className="text-center mx-4">
            <p className="font-bold text-lg text-blue-400">
              {(
                ((project.financials.currentValuation - project.financials.initialInvestment) /
                  project.financials.initialInvestment) *
                100
              ).toFixed(0)}
              %
            </p>
            <p className="text-xs text-gray-400">ROI (Est.)</p>
          </div>
        </div>
        <div className="ml-6">
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
      {isExpanded && (
        <div className="p-6 bg-slate-900/70">
          <div className="flex border-b border-slate-700 mb-4">
            <button
              onClick={() => setActiveTab('rationale')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'rationale' ? 'border-b-2 border-purple-500 text-white' : 'text-gray-400'}`}
            >
              Investment Rationale
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'details' ? 'border-b-2 border-purple-500 text-white' : 'text-gray-400'}`}
            >
              Project Details
            </button>
            <button
              onClick={() => setActiveTab('financials')}
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'financials' ? 'border-b-2 border-purple-500 text-white' : 'text-gray-400'}`}
            >
              Financials
            </button>
          </div>
          {renderContent()}
        </div>
      )}
    </div>
  )
}

const PortfolioPage = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null)

  const toggleProject = id => {
    setExpandedProjectId(expandedProjectId === id ? null : id)
  }

  return (
    <div className="text-white space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-tight">My Investment Portfolio</h1>
        <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg text-sm transition-colors">
          <ExternalLink size={16} className="mr-2" />
          Export Report
        </button>
      </div>

      {/* Enhanced Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Invested" value="$12.8M" icon={Briefcase} color="bg-green-500/30" />
        <StatCard label="Average ROI" value="315%" icon={PieChart} color="bg-blue-500/30" />
        <StatCard label="Projects Financed" value="24" icon={Map} color="bg-purple-500/30" />
        <StatCard label="Investor Rating" value="A+" icon={BarChart} color="bg-yellow-500/30" />
      </div>

      {/* Investment Philosophy */}
      <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-2">My Investment Philosophy</h3>
        <p className="text-gray-300">
          I focus on director-driven stories with unique voices and strong market potential. My
          strategy is to balance a portfolio with a mix of high-concept indie films for commercial
          success and thought-provoking documentaries for cultural impact. I believe in empowering
          filmmakers by providing not just capital, but also strategic mentorship to navigate the
          complex landscape of production and distribution.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white pt-4">Financed Projects</h2>
        {portfolioData.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isExpanded={expandedProjectId === project.id}
            onToggle={() => toggleProject(project.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default PortfolioPage
