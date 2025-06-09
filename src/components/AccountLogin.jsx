import React, { useState } from 'react';
import { PORTAL_TYPES, PORTAL_CONFIGS } from '../config/auth.js';
import AuthDebugPanel from './AuthDebugPanel.jsx';

const AccountLogin = ({ portal, onLogin, onBack, onSwitchToRegister, onForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDebugPanel, setShowDebugPanel] = useState(false);

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
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

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
      const result = await onLogin(formData.email, formData.password);
      if (!result.success) {
        setErrors({ submit: result.error });
      }
    } catch (error) {
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    if (!formData.email.trim()) {
      setErrors({ email: 'Please enter your email address first' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    onForgotPassword(formData.email);
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
            Welcome Back
          </h2>
          <p className="text-indigo-200 text-sm">
            Sign in to your {portalConfig.name}
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Email Address
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
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-indigo-200 mb-1">
              Password
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
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-indigo-300 hover:text-white transition-colors"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-indigo-200">
              <input
                type="checkbox"
                className="mr-2 rounded bg-white/10 border-white/20 text-indigo-600 focus:ring-indigo-500"
              />
              Remember me
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-indigo-300 hover:text-white transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="text-red-400 text-center text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
              <div className="mb-2">{errors.submit}</div>
              {(errors.submit.includes('403') || errors.submit.includes('Database') || errors.submit.includes('access denied')) && (
                <button
                  type="button"
                  onClick={() => setShowDebugPanel(true)}
                  className="text-xs text-yellow-300 hover:text-yellow-100 underline"
                >
                  Troubleshoot Authentication Issues
                </button>
              )}
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
            {isLoading ? 'Signing In...' : `Sign In to ${portalConfig.name}`}
          </button>

          {/* Switch to Register */}
          <div className="text-center mt-4">
            <p className="text-indigo-300 text-sm">
              New to IndieGate?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="text-white hover:underline font-medium"
              >
                Create Account
              </button>
            </p>
          </div>
        </form>

        {/* Demo Access Notice */}
        <div className="mt-6 p-4 bg-indigo-500/20 rounded-lg border border-indigo-400/30">
          <div className="text-center">
            <p className="text-indigo-200 text-sm mb-2">
              <span className="font-medium">Demo Access Available</span>
            </p>
            <p className="text-indigo-300 text-xs mb-2">
              Try these demo credentials:
            </p>
            <div className="text-xs text-indigo-200 space-y-1">
              <div>investor@demo.com / demo123</div>
              <div>filmmaker@demo.com / demo123</div>
            </div>
            <button
              type="button"
              onClick={() => setShowDebugPanel(true)}
              className="text-xs text-yellow-300 hover:text-yellow-100 underline mt-2"
            >
              Need help? View setup guide
            </button>
          </div>
        </div>

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

      {/* Debug Panel */}
      {showDebugPanel && (
        <AuthDebugPanel onClose={() => setShowDebugPanel(false)} />
      )}
    </div>
  );
};

export default AccountLogin; 