import { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Button from './Button';

const InvestorPortal = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('deals');

  const dealOpportunities = [
    { id: 1, company: 'TechFlow AI', sector: 'Artificial Intelligence', stage: 'Series A', amount: '$2.5M', valuation: '$15M', status: 'Active' },
    { id: 2, company: 'GreenEnergy Labs', sector: 'Clean Tech', stage: 'Seed', amount: '$800K', valuation: '$5M', status: 'New' },
    { id: 3, company: 'HealthTech Plus', sector: 'Healthcare', stage: 'Series B', amount: '$5M', valuation: '$35M', status: 'Due Diligence' },
    { id: 4, company: 'FinScope Analytics', sector: 'FinTech', stage: 'Series A', amount: '$3.2M', valuation: '$20M', status: 'Active' },
  ];

  const portfolioCompanies = [
    { id: 1, company: 'DataViz Pro', invested: '$500K', currentValue: '$1.2M', growth: '+140%', lastUpdate: '2 days ago' },
    { id: 2, company: 'CloudSync', invested: '$750K', currentValue: '$1.8M', growth: '+140%', lastUpdate: '1 week ago' },
    { id: 3, company: 'AI Assistant', invested: '$300K', currentValue: '$650K', growth: '+117%', lastUpdate: '3 days ago' },
  ];

  const renderDealsTab = () => (
    <div className="space-y-6">
      {/* Deal Flow Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Deals</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Investment</p>
              <p className="text-2xl font-bold text-gray-900">$12.5M</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Portfolio Value</p>
              <p className="text-2xl font-bold text-gray-900">$28.7M</p>
            </div>
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">ROI</p>
              <p className="text-2xl font-bold text-green-600">+129%</p>
            </div>
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </Card>
      </div>

      {/* Deal Opportunities */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Deal Opportunities</h3>
          <Button size="sm">View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Company</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Sector</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Stage</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Valuation</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {dealOpportunities.map((deal) => (
                <tr key={deal.id} className="border-b border-gray-100">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-900">{deal.company}</div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{deal.sector}</td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {deal.stage}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-medium text-gray-900">{deal.amount}</td>
                  <td className="py-4 px-4 text-gray-600">{deal.valuation}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      deal.status === 'Active' ? 'bg-green-100 text-green-800' :
                      deal.status === 'New' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {deal.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Button size="sm" variant="outline">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );

  const renderPortfolioTab = () => (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Portfolio Companies</h3>
          <Button size="sm">Add Investment</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <Card key={company.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-semibold text-gray-900">{company.company}</h4>
                <span className="text-xs text-gray-500">{company.lastUpdate}</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Invested</span>
                  <span className="font-medium">{company.invested}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current Value</span>
                  <span className="font-medium">{company.currentValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Growth</span>
                  <span className="font-medium text-green-600">{company.growth}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button size="sm" variant="outline" className="w-full">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        title="Investor Portal"
        onLogout={onLogout}
        user={{ name: "Alex Johnson", role: "Investor" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Investment Dashboard</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your deal flow, track portfolio performance, and discover new opportunities.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('deals')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'deals'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Deal Flow
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'portfolio'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Analytics
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'network'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Network
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'deals' && renderDealsTab()}
        {activeTab === 'portfolio' && renderPortfolioTab()}
        {activeTab === 'analytics' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Analytics</h3>
            <p className="text-gray-600">Advanced analytics and reporting coming soon...</p>
          </Card>
        )}
        {activeTab === 'network' && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Investor Network</h3>
            <p className="text-gray-600">Connect with other investors and industry experts...</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InvestorPortal; 