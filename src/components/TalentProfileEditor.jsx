import { useState } from 'react';
import Button from './Button';
import Card from './Card';

const TalentProfileEditor = ({ initialData = {}, onSave, onCancel }) => {
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
    
    // Contact & Social
    email: '',
    phone: '',
    website: '',
    instagram: '',
    
    // Industry Links
    actorAccess: '',
    castingNetworks: '',
    imdb: '',
    
    // Professional Info
    availability: 'Available',
    rates: '',
    unions: [],
    
    // Role-specific fields
    specialSkills: [],
    equipment: [],
    softwareProficiency: [],
    genres: [],
    
    // Media & Portfolio
    demoReel: '',
    headshots: [],
    portfolio: [],
    audioSamples: [],
    
    // Credits & Experience
    credits: [],
    awards: [],
    
    // Verification
    verified: false,
    ...initialData
  });

  const [newSkill, setNewSkill] = useState('');
  const [newCredit, setNewCredit] = useState({
    title: '',
    role: '',
    type: 'Feature Film',
    year: '',
    director: ''
  });

  const filmRoles = [
    'Actor',
    'Director of Photography',
    'Director',
    'Sound Engineer',
    'Sound Mixer',
    'Boom Operator',
    'Editor',
    'Assistant Editor',
    'Art Director',
    'Set Decorator',
    'Costume Designer',
    'Stylist',
    'Wardrobe Supervisor',
    'Hair & Makeup Artist',
    'Production Sound Mixer',
    'Utility Sound Tech',
    'Sound Coordinator',
    'Stunt Performer',
    'Casting Director',
    'Casting Assistant',
    'Producer',
    'Executive Producer',
    'Line Producer',
    'Script Supervisor',
    'Gaffer',
    'Key Grip',
    'Camera Operator',
    'Focus Puller',
    'Other'
  ];

  const unionOptions = [
    'SAG-AFTRA',
    'DGA (Directors Guild)',
    'IATSE',
    'WGA (Writers Guild)',
    'PGA (Producers Guild)',
    'Non-Union'
  ];

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !formData.specialSkills.includes(newSkill.trim())) {
      updateFormData('specialSkills', [...formData.specialSkills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    updateFormData('specialSkills', formData.specialSkills.filter(skill => skill !== skillToRemove));
  };

  const addCredit = () => {
    if (newCredit.title && newCredit.role && newCredit.year) {
      updateFormData('credits', [...formData.credits, { ...newCredit, id: Date.now() }]);
      setNewCredit({ title: '', role: '', type: 'Feature Film', year: '', director: '' });
    }
  };

  const removeCredit = (creditId) => {
    updateFormData('credits', formData.credits.filter(credit => credit.id !== creditId));
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateFormData('avatar', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getFieldsForRole = (role) => {
    const baseFields = ['specialSkills', 'demoReel', 'portfolio', 'credits', 'awards'];
    
    switch (role) {
      case 'Actor':
        return [...baseFields, 'headshots', 'actorAccess', 'castingNetworks'];
      case 'Director of Photography':
        return [...baseFields, 'equipment', 'genres'];
      case 'Director':
        return [...baseFields, 'genres', 'treatments'];
      case 'Sound Engineer':
      case 'Sound Mixer':
        return [...baseFields, 'equipment', 'softwareProficiency', 'audioSamples'];
      default:
        return baseFields;
    }
  };

  const renderBasicInfo = () => (
    <div className="space-y-6">
      {/* Profile Image Upload */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-4">
          <img
            src={formData.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-lg"
          />
          <label className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full cursor-pointer transition-colors shadow-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        <p className="text-sm text-gray-600 text-center">
          Click the + button to upload your professional headshot
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Primary Role *
          </label>
          <select
            value={formData.primaryRole}
            onChange={(e) => updateFormData('primaryRole', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select your primary role</option>
            {filmRoles.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Multi-Role Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Roles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Role (Optional)
            </label>
            <select
              value={formData.secondaryRole}
              onChange={(e) => updateFormData('secondaryRole', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select secondary role</option>
              {filmRoles.map(role => (
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-20"
              size={3}
            >
              {filmRoles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Hold Cmd/Ctrl to select multiple</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Many film professionals wear multiple hats. This helps with better project matching.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => updateFormData('location', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="e.g., Los Angeles, CA"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Tell us about your experience, specialties, and what makes you unique..."
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
    </div>
  );

  const renderIndustryLinks = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Personal Website
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => updateFormData('website', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="www.yourname.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instagram Handle
          </label>
          <input
            type="text"
            value={formData.instagram}
            onChange={(e) => updateFormData('instagram', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="@yourusername"
          />
        </div>
      </div>

      {(formData.primaryRole === 'Actor' || getFieldsForRole(formData.primaryRole).includes('actorAccess')) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Actors Access Profile
            </label>
            <input
              type="text"
              value={formData.actorAccess}
              onChange={(e) => updateFormData('actorAccess', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your.actorsaccess.username"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Casting Networks Profile
            </label>
            <input
              type="text"
              value={formData.castingNetworks}
              onChange={(e) => updateFormData('castingNetworks', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="your.castingnetworks.username"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          IMDb Profile
        </label>
        <input
          type="text"
          value={formData.imdb}
          onChange={(e) => updateFormData('imdb', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="nm1234567 (your IMDb ID)"
        />
      </div>
    </div>
  );

  const renderProfessionalInfo = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Availability Status
          </label>
          <select
            value={formData.availability}
            onChange={(e) => updateFormData('availability', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Available">Available</option>
            <option value="Busy">Currently Busy</option>
            <option value="Limited">Limited Availability</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Day Rate
          </label>
          <input
            type="text"
            value={formData.rates}
            onChange={(e) => updateFormData('rates', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g., $500-800/day"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Union Memberships
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {unionOptions.map(union => (
            <label key={union} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.unions.includes(union)}
                onChange={(e) => {
                  if (e.target.checked) {
                    updateFormData('unions', [...formData.unions, union]);
                  } else {
                    updateFormData('unions', formData.unions.filter(u => u !== union));
                  }
                }}
                className="mr-2"
              />
              <span className="text-sm">{union}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Special Skills */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Skills {formData.primaryRole === 'Actor' && '(Accents, Languages, Sports, etc.)'}
        </label>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Type a skill and press Enter"
          />
          <Button onClick={addSkill} size="sm">Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.specialSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center gap-2"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMediaPortfolio = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Demo Reel URL
        </label>
        <input
          type="url"
          value={formData.demoReel}
          onChange={(e) => updateFormData('demoReel', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="https://vimeo.com/your-reel"
        />
      </div>

      {formData.primaryRole === 'Actor' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Headshots
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p className="text-gray-600 mb-2">Upload your headshots</p>
            <Button variant="outline" size="sm">Choose Files</Button>
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Portfolio Items
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-600 mb-2">Add portfolio videos, images, or other work samples</p>
          <Button variant="outline" size="sm">Add Portfolio Item</Button>
        </div>
      </div>
    </div>
  );

  const renderCredits = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Add Film & TV Credits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Project Title"
            value={newCredit.title}
            onChange={(e) => setNewCredit({...newCredit, title: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Your Role"
            value={newCredit.role}
            onChange={(e) => setNewCredit({...newCredit, role: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <select
            value={newCredit.type}
            onChange={(e) => setNewCredit({...newCredit, type: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="Feature Film">Feature Film</option>
            <option value="Short Film">Short Film</option>
            <option value="TV Series">TV Series</option>
            <option value="TV Movie">TV Movie</option>
            <option value="Documentary">Documentary</option>
            <option value="Commercial">Commercial</option>
            <option value="Music Video">Music Video</option>
          </select>
          <input
            type="number"
            placeholder="Year"
            value={newCredit.year}
            onChange={(e) => setNewCredit({...newCredit, year: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            min="1900"
            max="2030"
          />
          <input
            type="text"
            placeholder="Director"
            value={newCredit.director}
            onChange={(e) => setNewCredit({...newCredit, director: e.target.value})}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Button onClick={addCredit} className="px-6">Add Credit</Button>
        </div>

        {formData.credits.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium">Your Credits:</h4>
            {formData.credits.map((credit) => (
              <div key={credit.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{credit.title} ({credit.year})</div>
                  <div className="text-sm text-gray-600">{credit.role} • {credit.type}</div>
                  {credit.director && <div className="text-sm text-gray-500">Directed by {credit.director}</div>}
                </div>
                <button
                  onClick={() => removeCredit(credit.id)}
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

  const steps = [
    { number: 1, title: 'Basic Information', component: renderBasicInfo },
    { number: 2, title: 'Industry Links', component: renderIndustryLinks },
    { number: 3, title: 'Professional Info', component: renderProfessionalInfo },
    { number: 4, title: 'Media & Portfolio', component: renderMediaPortfolio },
    { number: 5, title: 'Credits & Experience', component: renderCredits },
  ];

  const handleSave = () => {
    // Validation logic here
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
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">
              {initialData.name ? 'Edit Your Profile' : 'Create Your Talent Profile'}
            </h1>
            <p className="text-purple-100">
              Build your professional film industry profile to connect with opportunities
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
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    currentStep >= step.number ? 'text-purple-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-px mx-4 ${
                      currentStep > step.number ? 'bg-purple-600' : 'bg-gray-200'
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
                <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
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

export default TalentProfileEditor; 