import React, { useState, useEffect } from 'react';
import { PORTAL_CONFIGS } from '../config/auth.js';
import { authService } from '../config/auth.js';

const ProfileManager = ({ user, onProfileUpdate, onBack }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    bio: '',
    // Portal-specific fields
    investmentRange: '',
    investmentPreferences: '',
    experience: '',
    genres: '',
    equipment: '',
    skills: '',
    reel: '',
    industry: '',
    products: '',
    budget: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState('');

  const portalConfig = PORTAL_CONFIGS[user.portal];

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        company: user.company || '',
        phone: user.phone || '',
        bio: user.bio || '',
        // Portal-specific fields would be loaded from user data
        investmentRange: user.investmentRange || '',
        investmentPreferences: user.investmentPreferences || '',
        experience: user.experience || '',
        genres: user.genres || '',
        equipment: user.equipment || '',
        skills: user.skills || '',
        reel: user.reel || '',
        industry: user.industry || '',
        products: user.products || '',
        budget: user.budget || ''
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const updateData = {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Company: formData.company,
        Phone: formData.phone,
        Bio: formData.bio,
        // Portal-specific fields
        InvestmentRange: formData.investmentRange,
        InvestmentPreferences: formData.investmentPreferences,
        Experience: formData.experience,
        Genres: formData.genres,
        Equipment: formData.equipment,
        Skills: formData.skills,
        Reel: formData.reel,
        Industry: formData.industry,
        Products: formData.products,
        Budget: formData.budget
      };

      const result = await authService.updateProfile(user.id, updateData);
      
      if (result.success) {
        setUpdateMessage('Profile updated successfully!');
        setIsEditing(false);
        onProfileUpdate(result.user);
        
        // Clear message after 3 seconds
        setTimeout(() => setUpdateMessage(''), 3000);
      } else {
        setErrors({ submit: result.error });
      }
    } catch (error) {
      setErrors({ submit: 'Profile update failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderPortalSpecificFields = () => {
    if (!isEditing) return null;

    switch (user.portal) {
      case 'investor':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Investment Range
              </label>
              <select
                name="investmentRange"
                value={formData.investmentRange}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select investment range</option>
                <option value="under-50k">Under $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k-500k">$100K - $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="over-1m">Over $1M</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Investment Preferences
              </label>
              <textarea
                name="investmentPreferences"
                value={formData.investmentPreferences}
                onChange={handleInputChange}
                placeholder="Describe your investment preferences..."
                rows={3}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>
          </>
        );

      case 'filmmaker':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner (0-2 years)</option>
                <option value="intermediate">Intermediate (2-5 years)</option>
                <option value="experienced">Experienced (5-10 years)</option>
                <option value="veteran">Veteran (10+ years)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Preferred Genres
              </label>
              <input
                type="text"
                name="genres"
                value={formData.genres}
                onChange={handleInputChange}
                placeholder="Drama, Comedy, Thriller..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Equipment & Skills
              </label>
              <textarea
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                placeholder="Describe your equipment and skills..."
                rows={3}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            </div>
          </>
        );

      case 'talent':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Skills & Talents
              </label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="Acting, Singing, Dancing..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Experience Level
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select experience level</option>
                <option value="beginner">New to the industry</option>
                <option value="some">Some experience</option>
                <option value="experienced">Experienced professional</option>
                <option value="veteran">Industry veteran</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Demo Reel / Portfolio URL
              </label>
              <input
                type="url"
                name="reel"
                value={formData.reel}
                onChange={handleInputChange}
                placeholder="https://..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </>
        );

      case 'brand':
        return (
          <>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Industry
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select industry</option>
                <option value="fashion">Fashion & Luxury</option>
                <option value="tech">Technology</option>
                <option value="food">Food & Beverage</option>
                <option value="automotive">Automotive</option>
                <option value="lifestyle">Lifestyle & Wellness</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Products/Services
              </label>
              <input
                type="text"
                name="products"
                value={formData.products}
                onChange={handleInputChange}
                placeholder="Describe your products..."
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Marketing Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10K</option>
                <option value="10k-50k">$10K - $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k-500k">$100K - $500K</option>
                <option value="over-500k">Over $500K</option>
              </select>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-md w-full border border-white/20">
        {/* Header */}
        <div className="text-center mb-6">
          <div className={`w-12 h-12 bg-gradient-to-r ${portalConfig.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
            <span className="text-2xl">{portalConfig.icon}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            My Profile
          </h2>
          <p className="text-indigo-200 text-sm">
            {portalConfig.name}
          </p>
        </div>

        {/* Success Message */}
        {updateMessage && (
          <div className="mb-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
            <p className="text-green-200 text-sm text-center">{updateMessage}</p>
          </div>
        )}

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                First Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.firstName ? 'border-red-400' : 'border-white/20'
                  }`}
                />
              ) : (
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
                  {formData.firstName}
                </div>
              )}
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Last Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.lastName ? 'border-red-400' : 'border-white/20'
                  }`}
                />
              ) : (
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
                  {formData.lastName}
                </div>
              )}
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.email ? 'border-red-400' : 'border-white/20'
                }`}
              />
            ) : (
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
                {formData.email}
              </div>
            )}
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Company/Organization
            </label>
            {isEditing ? (
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Optional"
              />
            ) : (
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
                {formData.company || 'Not specified'}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Optional"
              />
            ) : (
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white">
                {formData.phone || 'Not specified'}
              </div>
            )}
          </div>

          {/* Portal-specific fields */}
          {renderPortalSpecificFields()}

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Bio
            </label>
            {isEditing ? (
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder="Tell us about yourself..."
                rows={3}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
            ) : (
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white min-h-[80px]">
                {formData.bio || 'No bio provided'}
              </div>
            )}
          </div>

          {/* Account Info */}
          <div className="border-t border-white/20 pt-4">
            <div className="text-xs text-indigo-300">
              <div>Member since: {new Date(user.createdDate).toLocaleDateString()}</div>
              <div>Last login: {new Date(user.lastLogin).toLocaleDateString()}</div>
            </div>
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="text-red-400 text-center text-sm">
              {errors.submit}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {isEditing ? (
              <>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`flex-1 bg-gradient-to-r ${portalConfig.color} hover:opacity-90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 text-sm ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setErrors({});
                    // Reset form data to original user data
                    setFormData({
                      firstName: user.firstName || '',
                      lastName: user.lastName || '',
                      email: user.email || '',
                      company: user.company || '',
                      phone: user.phone || '',
                      bio: user.bio || '',
                    });
                  }}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-6 rounded-lg border border-white/20 transition-all duration-200 text-sm"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className={`w-full bg-gradient-to-r ${portalConfig.color} hover:opacity-90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm`}
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>

        {/* Back Button */}
        <div className="text-center mt-6">
          <button
            onClick={onBack}
            className="text-indigo-300 hover:text-white transition-colors text-sm"
          >
            ← Back to Portal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileManager; 