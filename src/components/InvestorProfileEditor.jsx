import { useState } from 'react';
import Button from './Button';
import Card from './Card';

const InvestorProfileEditor = ({ initialData = {}, onSave, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    primaryRole: '',
    secondaryRole: '',
    additionalRoles: [],
    location: '',
    bio: '',
    avatar: '',
    
    // Company & Contact
    company: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    
    // Investment Profile
    investmentRange: '',
    totalInvestments: '',
    projectsFinanced: 0,
    averageROI: '',
    
    // Investment Preferences
    preferredGenres: [],
    investmentStage: [],
    budgetRange: {
      min: '',
      max: ''
    },
    territoryFocus: [],
    distributionPreference: [],
    
    // Portfolio & Experience
    portfolio: [],
    dealStructurePreference: [],
    dueDiligenceRequirements: [],
    
    // Verification
    verified: false,
    ...initialData
  });

  const [newGenre, setNewGenre] = useState('');
  const [newPortfolioItem, setNewPortfolioItem] = useState({
    title: '',
    year: '',
    investment: '',
    roi: '',
    status: 'Released'
  });

  const investorRoles = [
    'Executive Producer',
    'Producer',
    'Angel Investor',
    'Venture Capitalist', 
    'Family Office',
    'High-Net-Worth Individual',
    'Entertainment Attorney',
    'Distribution Executive',
    'Sales Agent',
    'Film Fund Manager',
    'Investment Banker',
    'Private Equity',
    'Studio Executive',
    'Completion Bond Provider',
    'Gap Financier',
    'Other'
  ];

  const filmRoles = [
    'Actor',
    'Director',
    'Writer',
    'Producer',
    'Director of Photography',
    'Sound Engineer',
    'Editor',
    'Art Director',
    'Costume Designer',
    'Casting Director',
    'Other'
  ];

  const allGenres = ['Drama', 'Comedy', 'Thriller', 'Horror', 'Action', 'Romance', 'Documentary', 'Animation', 'Sci-Fi', 'Fantasy'];
  const investmentStages = ['Development', 'Pre-Production', 'Production', 'Post-Production', 'Distribution'];
  const territories = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'International'];
  const distributionOptions = ['Theatrical', 'Streaming', 'VOD', 'Hybrid', 'Television'];

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addGenre = () => {
    if (newGenre.trim() && !formData.preferredGenres.includes(newGenre.trim())) {
      updateFormData('preferredGenres', [...formData.preferredGenres, newGenre.trim()]);
      setNewGenre('');
    }
  };

  const removeGenre = (genreToRemove) => {
    updateFormData('preferredGenres', formData.preferredGenres.filter(genre => genre !== genreToRemove));
  };

  const addPortfolioItem = () => {
    if (newPortfolioItem.title && newPortfolioItem.year && newPortfolioItem.investment) {
      updateFormData('portfolio', [...formData.portfolio, { ...newPortfolioItem, id: Date.now() }]);
      setNewPortfolioItem({ title: '', year: '', investment: '', roi: '', status: 'Released' });
    }
  };

  const removePortfolioItem = (itemId) => {
    updateFormData('portfolio', formData.portfolio.filter(item => item.id !== itemId));
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => updateFormData('company', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Paramount Ventures"
          />
        </div>
      </div>

      {/* Multi-Role Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Role Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Role *
            </label>
            <select
              value={formData.primaryRole}
              onChange={(e) => updateFormData('primaryRole', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select primary role</option>
              {investorRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Role (Optional)
            </label>
            <select
              value={formData.secondaryRole}
              onChange={(e) => updateFormData('secondaryRole', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select secondary role</option>
              {[...investorRoles, ...filmRoles].map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Roles
            </label>
            <select
              multiple
              value={formData.additionalRoles}
              onChange={(e) => updateFormData('additionalRoles', Array.from(e.target.selectedOptions, option => option.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 h-20"
              size={3}
            >
              {[...investorRoles, ...filmRoles].map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Hold Cmd/Ctrl to select multiple</p>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => updateFormData('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="e.g., Beverly Hills, CA"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Professional Bio
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => updateFormData('bio', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Describe your investment experience, focus areas, and what you bring to film projects..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
    </div>
  );

  const renderCompanyProfile = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateFormData('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Managing Partner, Investment Director"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Website
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData('website', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="www.yourcompany.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          LinkedIn Profile
        </label>
        <input
          type="text"
          value={formData.linkedin}
          onChange={(e) => updateFormData('linkedin', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="linkedin.com/in/yourprofile"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Range
          </label>
          <select
            value={formData.investmentRange}
            onChange={(e) => updateFormData('investmentRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select range</option>
            <option value="$50K - $250K">$50K - $250K</option>
            <option value="$250K - $1M">$250K - $1M</option>
            <option value="$1M - $5M">$1M - $5M</option>
            <option value="$5M - $25M">$5M - $25M</option>
            <option value="$25M+">$25M+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Total Investments (Optional)
          </label>
          <input
            type="text"
            value={formData.totalInvestments}
            onChange={(e) => updateFormData('totalInvestments', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="e.g., $24.5M"
          />
        </div>
      </div>
    </div>
  );

  const renderInvestmentPreferences = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Genres
        </label>
        <div className="flex gap-2 mb-3">
          <select
            value={newGenre}
            onChange={(e) => setNewGenre(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select a genre</option>
            {allGenres.map(genre => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
          <Button onClick={addGenre} size="sm">Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.preferredGenres.map((genre, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-2"
            >
              {genre}
              <button
                onClick={() => removeGenre(genre)}
                className="text-green-600 hover:text-green-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Investment Stages
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {investmentStages.map(stage => (
            <label key={stage} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.investmentStage.includes(stage)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData('investmentStage', [...formData.investmentStage, stage]);
                  } else {
                    updateFormData('investmentStage', formData.investmentStage.filter(s => s !== stage));
                  }
                }}
                className="mr-2"
              />
              <span className="text-sm">{stage}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget Range Preference
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Minimum Budget</label>
            <input
              type="text"
              value={formData.budgetRange.min}
              onChange={(e) => updateFormData('budgetRange', { ...formData.budgetRange, min: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., $250K"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Maximum Budget</label>
            <input
              type="text"
              value={formData.budgetRange.max}
              onChange={(e) => updateFormData('budgetRange', { ...formData.budgetRange, max: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="e.g., $10M"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Territory Focus
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {territories.map(territory => (
            <label key={territory} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.territoryFocus.includes(territory)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData('territoryFocus', [...formData.territoryFocus, territory]);
                  } else {
                    updateFormData('territoryFocus', formData.territoryFocus.filter(t => t !== territory));
                  }
                }}
                className="mr-2"
              />
              <span className="text-sm">{territory}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Distribution Preference
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {distributionOptions.map(option => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.distributionPreference.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData('distributionPreference', [...formData.distributionPreference, option]);
                  } else {
                    updateFormData('distributionPreference', formData.distributionPreference.filter(d => d !== option));
                  }
                }}
                className="mr-2"
              />
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Investment Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Project Title"
            value={newPortfolioItem.title}
            onChange={(e) => setNewPortfolioItem({...newPortfolioItem, title: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Year"
            value={newPortfolioItem.year}
            onChange={(e) => setNewPortfolioItem({...newPortfolioItem, year: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            min="1900"
            max="2030"
          />
          <input
            type="text"
            placeholder="Investment Amount"
            value={newPortfolioItem.investment}
            onChange={(e) => setNewPortfolioItem({...newPortfolioItem, investment: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="ROI (Optional)"
            value={newPortfolioItem.roi}
            onChange={(e) => setNewPortfolioItem({...newPortfolioItem, roi: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={newPortfolioItem.status}
            onChange={(e) => setNewPortfolioItem({...newPortfolioItem, status: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="Released">Released</option>
            <option value="In Theaters">In Theaters</option>
            <option value="Post-Production">Post-Production</option>
            <option value="Production">Production</option>
            <option value="Development">Development</option>
          </select>
          <Button onClick={addPortfolioItem} className="px-6">Add Investment</Button>
        </div>

        {formData.portfolio.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Your Portfolio:</h4>
            {formData.portfolio.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{item.title} ({item.year})</div>
                  <div className="text-sm text-gray-600">Investment: {item.investment}</div>
                  {item.roi && <div className="text-sm text-green-600">ROI: {item.roi}</div>}
                  <div className="text-sm text-gray-500">Status: {item.status}</div>
                </div>
                <button
                  onClick={() => removePortfolioItem(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderCriteria = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Investment Criteria & Process</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deal Structure Preferences
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Equity Participation', 'Revenue Sharing', 'Gap Financing', 'Tax Incentive Optimization', 'International Co-Production', 'Completion Bond'].map(structure => (
                <label key={structure} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.dealStructurePreference.includes(structure)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateFormData('dealStructurePreference', [...formData.dealStructurePreference, structure]);
                      } else {
                        updateFormData('dealStructurePreference', formData.dealStructurePreference.filter(d => d !== structure));
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">{structure}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due Diligence Requirements
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {['Complete Script', 'Detailed Budget', 'Director Track Record', 'Distribution Strategy', 'Market Analysis', 'Legal Documents'].map(requirement => (
                <label key={requirement} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.dueDiligenceRequirements.includes(requirement)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateFormData('dueDiligenceRequirements', [...formData.dueDiligenceRequirements, requirement]);
                      } else {
                        updateFormData('dueDiligenceRequirements', formData.dueDiligenceRequirements.filter(r => r !== requirement));
                      }
                    }}
                    className="mr-2"
                  />
                  <span className="text-sm">{requirement}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const steps = [
    { number: 1, title: 'Basic Information', component: renderBasicInfo },
    { number: 2, title: 'Company Profile', component: renderCompanyProfile },
    { number: 3, title: 'Investment Preferences', component: renderInvestmentPreferences },
    { number: 4, title: 'Portfolio', component: renderPortfolio },
    { number: 5, title: 'Investment Criteria', component: renderCriteria },
  ];

  const handleSave = () => {
    if (!formData.name || !formData.primaryRole) {
      alert('Please fill in required fields (Name and Primary Role)');
      return;
    }
    
    onSave(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <Card className="overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">
              {initialData.name ? 'Edit Your Investor Profile' : 'Create Your Investor Profile'}
            </h1>
            <p className="text-green-100">
              Build your professional investment profile to connect with film opportunities
            </p>
          </div>

          {/* Step Navigation */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep >= step.number ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-px mx-4 ${
                      currentStep > step.number ? 'bg-green-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {steps[currentStep - 1].component()}
          </div>

          {/* Navigation Buttons */}
          <div className="border-t border-gray-200 p-6 flex justify-between">
            <div>
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Previous
                </Button>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              
              {currentStep < steps.length ? (
                <Button onClick={() => setCurrentStep(currentStep + 1)}>
                  Next
                </Button>
              ) : (
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  Save Profile
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InvestorProfileEditor; 