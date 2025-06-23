import React from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import {
  portfolioPerformance,
  marketData,
  genreROI,
  portfolioTimeline,
  portfolioDiversification,
} from '../data/analyticsData.js'
import { TrendingUp, DollarSign, PieChart as PieIcon, BarChart2 } from 'lucide-react'

const formatCurrency = value =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
const formatBillions = value => `$${value}B`

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-700/80 backdrop-blur-sm p-3 rounded-lg border border-slate-600">
        <p className="label text-white font-bold">{`${label}`}</p>
        {payload.map((p, i) => (
          <p key={i} style={{ color: p.color }}>{`${p.name}: ${p.value.toLocaleString()}`}</p>
        ))}
      </div>
    )
  }
  return null
}

const AnalyticsCard = ({ title, children, icon }) => {
  const Icon = icon
  return (
    <div className="bg-slate-800/60 p-6 rounded-lg border border-slate-700/80">
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="text-purple-400" size={20} />}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="h-64">{children}</div>
    </div>
  )
}

const KPI = ({ label, value, icon }) => {
  const Icon = icon
  return (
    <div className="bg-slate-800/60 p-5 rounded-lg border border-slate-700/80">
      <div className="flex items-center gap-4">
        <Icon className="text-purple-400" size={28} />
        <div>
          <p className="text-sm text-slate-400 font-medium">{label}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  )
}

const AnalyticsPage = () => {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042']

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Analytics</h1>
        <p className="text-slate-400 mt-2">
          Insights into market trends and your portfolio performance.
        </p>
      </header>

      {/* Portfolio KPIs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Your Portfolio Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPI
            label="Total Invested"
            value={formatCurrency(portfolioPerformance.totalInvested)}
            icon={DollarSign}
          />
          <KPI
            label="Current Value"
            value={formatCurrency(portfolioPerformance.currentValue)}
            icon={TrendingUp}
          />
          <KPI
            label="Overall Return"
            value={formatCurrency(portfolioPerformance.overallReturn)}
            icon={PieIcon}
          />
          <KPI label="Overall ROI" value={`${portfolioPerformance.overallROI}%`} icon={BarChart2} />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Analytics */}
        <AnalyticsCard title="Indie Film Market Growth (USD Billions)" icon={TrendingUp}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="year" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" tickFormatter={formatBillions} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="marketSize"
                name="Market Size"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </AnalyticsCard>

        {/* Genre ROI */}
        <AnalyticsCard title="Average ROI by Genre" icon={BarChart2}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={genreROI}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="name" stroke="#A0AEC0" />
              <YAxis stroke="#A0AEC0" tickFormatter={value => `${value}%`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="roi" name="Return on Investment" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </AnalyticsCard>

        {/* Portfolio Timeline */}
        <AnalyticsCard title="Your Portfolio Value Over Time" icon={TrendingUp}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={portfolioTimeline}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
              <XAxis dataKey="date" stroke="#A0AEC0" />
              <YAxis
                stroke="#A0AEC0"
                tickFormatter={value => formatCurrency(value / 1000000) + 'M'}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name="Portfolio Value"
                stroke="#ffc658"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </AnalyticsCard>

        {/* Portfolio Diversification */}
        <AnalyticsCard title="Portfolio Diversification by Genre" icon={PieIcon}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioDiversification}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {portfolioDiversification.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </AnalyticsCard>
      </div>
    </div>
  )
}

export default AnalyticsPage
