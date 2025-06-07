import React, { useState } from 'react';
import { PORTAL_TYPES, PORTAL_CONFIGS } from '../config/auth.js';

const AccountRegistration = ({ portal, onRegister, onBack, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    phone: '',
    bio: '',
    portal: portal,
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
  const [showPassword, setShowPassword] = useState(false);

  const portalConfig = PORTAL_CONFIGS[portal];

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
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Password confirmation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      const result = await onRegister(formData);
      if (!result.success) {
        setErrors({ submit: result.error });
      }
    } catch (error) {
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const renderPortalSpecificFields = () => {
    switch (portal) {
      case PORTAL_TYPES.INVESTOR:
        return (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
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
                <label className="block text-sm font-medium text-indigo-200 mb-2">
                  Investment Preferences
                </label>
                <textarea
                  name="investmentPreferences"
                  value={formData.investmentPreferences}
                  onChange={handleInputChange}
                  placeholder="Describe your investment preferences, genres, and criteria..."
                  rows={3}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>
            </div>
          </>
        );

      case PORTAL_TYPES.FILMMAKER:
        return (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
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
                <label className="block text-sm font-medium text-indigo-200 mb-2">
                  Preferred Genres
                </label>
                <input
                  type="text"
                  name="genres"
                  value={formData.genres}
                  onChange={handleInputChange}
                  placeholder="Drama, Comedy, Thriller, Documentary..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
                  Equipment & Skills
                </label>
                <textarea
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleInputChange}
                  placeholder="Describe your equipment, technical skills, and specializations..."
                  rows={3}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>
            </div>
          </>
        );

      case PORTAL_TYPES.TALENT:
        return (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
                  Skills & Talents
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Acting, Singing, Dancing, Voice-over..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
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
                <label className="block text-sm font-medium text-indigo-200 mb-2">
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
            </div>
          </>
        );

      case PORTAL_TYPES.BRAND:
        return (
          <>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
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
                <label className="block text-sm font-medium text-indigo-200 mb-2">
                  Products/Services
                </label>
                <input
                  type="text"
                  name="products"
                  value={formData.products}
                  onChange={handleInputChange}
                  placeholder="Describe your main products or services..."
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-indigo-200 mb-2">
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
            Join {portalConfig.name}
          </h2>
          <p className="text-indigo-200 text-sm">
            {portalConfig.description}
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.firstName ? 'border-red-400' : 'border-white/20'
                }`}
                placeholder="First name"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.lastName ? 'border-red-400' : 'border-white/20'
                }`}
                placeholder="Last name"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.email ? 'border-red-400' : 'border-white/20'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.password ? 'border-red-400' : 'border-white/20'
                }`}
                placeholder="Create a secure password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-indigo-300 hover:text-white"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 bg-white/10 border rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.confirmPassword ? 'border-red-400' : 'border-white/20'
              }`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Company (optional) */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Company/Organization
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Optional"
            />
          </div>

          {/* Portal-specific fields */}
          {renderPortalSpecificFields()}

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="Tell us about yourself..."
              rows={3}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="text-red-400 text-center text-sm">
              {errors.submit}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r ${portalConfig.color} hover:opacity-90 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Creating Account...' : `Create ${portalConfig.name} Account`}
          </button>

          {/* Switch to Login */}
          <div className="text-center mt-4">
            <p className="text-indigo-300 text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToLogin}
                className="text-white hover:underline font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>

        {/* Back Button */}
        <div className="text-center mt-4">
          <button
            onClick={onBack}
            className="text-indigo-300 hover:text-white transition-colors text-sm"
          >
            ← Back to Portal Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountRegistration; 