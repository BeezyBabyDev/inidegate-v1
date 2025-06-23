import React from 'react'
import { X, ExternalLink } from 'lucide-react'

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null

  const formatCurrency = value =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const DetailSection = ({ title, children }) => (
    <div className="mb-6">
      <h4 className="text-lg font-bold text-purple-300 border-b border-purple-300/20 pb-2 mb-3">
        {title}
      </h4>
      {children}
    </div>
  )

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800/90 border border-slate-700 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white">{project.title}</h2>
              <p className="text-slate-400">{project.company}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Synopsis */}
          <DetailSection title="Synopsis">
            <p className="text-slate-300 leading-relaxed">{project.details.synopsis}</p>
          </DetailSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* Budget Breakdown */}
              <DetailSection title="Budget Breakdown">
                <ul className="space-y-2">
                  {project.details.budgetBreakdown.map(item => (
                    <li key={item.item} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">{item.item}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-white">
                          {formatCurrency(item.amount)}
                        </span>
                        <span className="text-xs text-purple-400 w-12 text-right">
                          ({item.percentage}%)
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </DetailSection>

              {/* Key Talent */}
              <DetailSection title="Key Talent/Influencers">
                <ul className="space-y-2">
                  {project.details.keyTalent.map(talent => (
                    <li
                      key={talent.name}
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white"
                    >
                      <a
                        href={talent.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span>
                          <strong>{talent.name}</strong> - {talent.role}
                        </span>
                        <ExternalLink size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            </div>

            <div>
              {/* Brand Placement */}
              <DetailSection title="Brand/Product Placement">
                <div className="flex flex-wrap gap-2">
                  {project.details.brandPlacement.map(brand => (
                    <span
                      key={brand}
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </DetailSection>

              {/* Distribution */}
              <DetailSection title="Distribution Interest">
                <p className="text-slate-300">{project.details.distribution}</p>
              </DetailSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailModal
