import { ArrowRight, Film, Award, BarChart2 } from 'lucide-react'

const MarketTrends = () => {
  const globalStat = {
    label: 'Global Film Market',
    value: '$417.99B',
    trend: '+6.2%',
    by: 'by 2029',
  }

  const stats = [
    {
      label: 'Indie Film Market',
      value: '$12.8B',
      trend: '+25% by 2027',
      color: 'green',
    },
    {
      label: 'Festival Acquisitions',
      value: '150+',
      trend: 'deals/year',
      color: 'purple',
    },
    {
      label: 'Indie Streaming Revenue',
      value: '$4.2B',
      trend: '+18% YoY',
      color: 'green',
    },
    {
      label: 'Production Cost',
      value: '60%',
      trend: 'lower than studio',
      color: 'blue',
    },
  ]

  const festivalHighlights = [
    {
      title: 'Sundance 2025: "Hal & Harper"',
      description: 'Acquired by MUBI for a TV series deal, showcasing new distribution paths.',
    },
    {
      title: "Tribeca Films' Spree",
      description: 'Acquired 15 titles in under a year from major festivals.',
    },
    {
      title: 'Roadside/Lionsgate',
      description: 'Made major indie acquisitions at Sundance 2025, signaling market confidence.',
    },
    {
      title: 'Broad Distribution Strategy',
      description: 'Aiming for 25 titles/year from Sundance, Cannes, TIFF, and Berlin.',
    },
  ]

  return (
    <div className="bg-white/5 rounded-2xl p-6 h-full flex flex-col">
      <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-4">
        <p className="text-sm text-purple-200 mb-1">{globalStat.label}</p>
        <div className="flex justify-between items-end">
          <p className="text-3xl font-bold text-white">{globalStat.value}</p>
          <div className="text-right">
            <p className="font-semibold text-blue-400">{globalStat.trend}</p>
            <p className="text-xs text-gray-400">{globalStat.by}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm text-purple-200 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
            <div className="flex items-center text-xs mt-2">
              <span
                className={`font-semibold ${
                  stat.color === 'green'
                    ? 'text-green-400'
                    : stat.color === 'blue'
                      ? 'text-blue-400'
                      : 'text-purple-400'
                }`}
              >
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
        <h4 className="font-semibold text-white mb-3 flex items-center">
          <BarChart2 size={16} className="mr-2 text-green-400" /> ROI Advantage
        </h4>
        <div className="flex items-end gap-4">
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-white">280%</p>
            <div className="h-12 bg-gradient-to-t from-green-500/50 to-green-500 rounded-t-sm"></div>
            <p className="text-xs text-purple-200 mt-1 font-semibold">INDEPENDENT</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-2xl font-bold text-gray-400">120%</p>
            <div className="h-5 bg-gradient-to-t from-gray-500/50 to-gray-500 rounded-t-sm"></div>
            <p className="text-xs text-gray-400 mt-1">STUDIO</p>
          </div>
        </div>
      </div>

      <h4 className="font-semibold text-white mb-4 flex items-center">
        <Award className="mr-3 text-purple-400" />
        Recent Festival Success Stories
      </h4>
      <div className="flex flex-col gap-3">
        {festivalHighlights.map((highlight, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-xl border-l-4 border-purple-400 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start">
              <div>
                <h5 className="font-bold text-white flex items-center">
                  <Film size={14} className="mr-2 text-purple-300" />
                  {highlight.title}
                </h5>
                <p className="text-sm text-purple-200 mt-1 pl-6">{highlight.description}</p>
              </div>
              <ArrowRight
                className="text-purple-300 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2"
                size={16}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketTrends
