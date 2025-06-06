import React, { useState } from 'react';
import { PORTAL_TYPES, PORTAL_CONFIGS } from '../config/auth.js';
import AccountRegistration from './AccountRegistration';
import AccountLogin from './AccountLogin';
import { authService } from '../config/auth.js';

const AuthPortalSelection = ({ onBackToWelcome, onAuthSuccess }) => {
  const [currentView, setCurrentView] = useState('selection'); // 'selection', 'register', 'login'
  const [selectedPortal, setSelectedPortal] = useState(null);
  const [authMessage, setAuthMessage] = useState('');

  const handleSelectPortal = (portal, action) => {
    setSelectedPortal(portal);
    setCurrentView(action); // 'register' or 'login'
    setAuthMessage('');
  };

  const handleRegister = async (userData) => {
    try {
      const result = await authService.register(userData);
      if (result.success) {
        setAuthMessage('Account created successfully! Welcome to IndieGate.');
        // Call success handler after a brief delay to show success message
        setTimeout(() => {
          onAuthSuccess(result.user);
        }, 1500);
      }
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const result = await authService.login(email, password);
      if (result.success) {
        setAuthMessage('Login successful! Welcome back.');
        // Call success handler after a brief delay to show success message
        setTimeout(() => {
          onAuthSuccess(result.user);
        }, 1500);
      }
      return result;
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      const result = await authService.resetPassword(email);
      if (result.success) {
        setAuthMessage('Password reset instructions have been sent to your email.');
      } else {
        setAuthMessage('Error sending password reset. Please try again.');
      }
    } catch (error) {
      setAuthMessage('Error sending password reset. Please try again.');
    }
  };

  const handleBack = () => {
    if (currentView === 'selection') {
      onBackToWelcome();
    } else {
      setCurrentView('selection');
      setSelectedPortal(null);
      setAuthMessage('');
    }
  };

  // Show registration form
  if (currentView === 'register' && selectedPortal) {
    return (
      <AccountRegistration
        portal={selectedPortal}
        onRegister={handleRegister}
        onBack={handleBack}
        onSwitchToLogin={() => setCurrentView('login')}
      />
    );
  }

  // Show login form
  if (currentView === 'login' && selectedPortal) {
    return (
      <AccountLogin
        portal={selectedPortal}
        onLogin={handleLogin}
        onBack={handleBack}
        onSwitchToRegister={() => setCurrentView('register')}
        onForgotPassword={handleForgotPassword}
      />
    );
  }

  // Portal selection view
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl w-full border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
            <span className="text-3xl">🎬</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome to IndieGate
          </h1>
          <p className="text-indigo-200 text-lg">
            Choose your portal to get started
          </p>
          {authMessage && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p className="text-green-200 text-sm">{authMessage}</p>
            </div>
          )}
        </div>

        {/* Portal Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries(PORTAL_CONFIGS).map(([portalType, config]) => (
            <div key={portalType} className="space-y-4">
              {/* Portal Info Card */}
              <div className={`bg-gradient-to-r ${config.color} p-6 rounded-xl border border-white/20 shadow-lg`}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">{config.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {config.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {config.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleSelectPortal(portalType, 'register')}
                  className={`bg-gradient-to-r ${config.color} hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm`}
                >
                  Create Account
                </button>
                <button
                  onClick={() => handleSelectPortal(portalType, 'login')}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg border border-white/20 transition-all duration-200 transform hover:scale-105 text-sm"
                >
                  Sign In
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Access Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">
              Demo Access Available
            </h3>
            <p className="text-indigo-200 text-sm mb-4">
              Explore the platform with demo accounts and showcase features
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <code className="text-yellow-300 bg-white/10 px-3 py-1 rounded text-sm">
                DEMO2025
              </code>
              <code className="text-yellow-300 bg-white/10 px-3 py-1 rounded text-sm">
                MULTI-PORTAL
              </code>
              <code className="text-green-300 bg-white/10 px-3 py-1 rounded text-sm">
                SOPHIA-STAR
              </code>
              <code className="text-green-300 bg-white/10 px-3 py-1 rounded text-sm">
                ALEX-DIRECTOR
              </code>
            </div>
            <p className="text-indigo-300 text-xs mt-2">
              Use these codes on the main welcome page for instant demo access
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-indigo-300 text-sm">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1,200+</div>
            <div className="text-indigo-300 text-sm">Creatives</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">$2M+</div>
            <div className="text-indigo-300 text-sm">Funded</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">150+</div>
            <div className="text-indigo-300 text-sm">Investors</div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <button
            onClick={onBackToWelcome}
            className="text-indigo-300 hover:text-white transition-colors text-sm"
          >
            ← Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPortalSelection; 