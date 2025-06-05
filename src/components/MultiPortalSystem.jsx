import React, { useState, useEffect } from 'react';
import { User, Camera, TrendingUp, Building, Bell, MessageCircle, Users, Star, ArrowLeft, Settings, LogOut, Eye, EyeOff, Loader2, CheckCircle, AlertCircle, Home } from 'lucide-react';
import { getProfile } from '../data/demoProfiles';

const MultiPortalSystem = () => {
  const [currentView, setCurrentView] = useState('login');
  const [currentUser, setCurrentUser] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginAnimating, setLoginAnimating] = useState(false);

  // Check for direct profile access on component mount
  useEffect(() => {
    const selectedProfile = sessionStorage.getItem('selectedProfile');
    const directAccess = sessionStorage.getItem('directAccess');
    
    if (directAccess === 'true' && selectedProfile) {
      // Determine portal type from URL or stored data
      const urlParams = new URLSearchParams(window.location.search);
      const portal = urlParams.get('portal');
      
      if (portal) {
        // Load the profile data
        const profileData = getProfile(portal, selectedProfile);
        if (profileData) {
          // Convert profile data to user format and set current user
          const user = {
            ...profileData,
            portal: portal
          };
          setCurrentUser(user);
          setCurrentView(portal);
          
          // Clear the session storage after use
          sessionStorage.removeItem('selectedProfile');
          sessionStorage.removeItem('directAccess');
        }
      }
    }
  }, []);

  // Enhanced user database with 20 profiles
  const users = {
    // Talent Profiles (5)
    talent: [
      { 
        id: 't1', 
        username: 'sophia.star', 
        password: 'talent123', 
        name: 'Sophia Martinez', 
        type: 'Lead Actor', 
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=100&h=100&fit=crop&crop=face',
        location: 'Los Angeles, CA',
        experience: '8+ years',
        notifications: { messages: 8, connections: 3, opportunities: 12 } 
      },
      { 
        id: 't2', 
        username: 'marcus.voice', 
        password: 'talent456', 
        name: 'Marcus Thompson', 
        type: 'Voice Artist', 
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        location: 'New York, NY',
        experience: '5+ years',
        notifications: { messages: 5, connections: 7, opportunities: 9 } 
      },
      { 
        id: 't3', 
        username: 'elena.model', 
        password: 'talent789', 
        name: 'Elena Rodriguez', 
        type: 'Model & Influencer', 
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        location: 'Miami, FL',
        experience: '6+ years',
        notifications: { messages: 15, connections: 12, opportunities: 6 } 
      },
      { 
        id: 't4', 
        username: 'james.support', 
        password: 'talent321', 
        name: 'James Wilson', 
        type: 'Supporting Actor', 
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        location: 'Atlanta, GA',
        experience: '4+ years',
        notifications: { messages: 4, connections: 2, opportunities: 8 } 
      },
      { 
        id: 't5', 
        username: 'aria.dance', 
        password: 'talent654', 
        name: 'Aria Chen', 
        type: 'Background Performer', 
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
        location: 'Vancouver, BC',
        experience: '3+ years',
        notifications: { messages: 7, connections: 5, opportunities: 11 } 
      }
    ],
    // Filmmaker Profiles (5)
    filmmaker: [
      { 
        id: 'f1', 
        username: 'alex.director', 
        password: 'film123', 
        name: 'Alexandra Brooks', 
        type: 'Director', 
        avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
        location: 'Los Angeles, CA',
        experience: '10+ years',
        notifications: { messages: 6, connections: 9, projects: 4 } 
      },
      { 
        id: 'f2', 
        username: 'ryan.producer', 
        password: 'film456', 
        name: 'Ryan Mitchell', 
        type: 'Producer', 
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
        location: 'New York, NY',
        experience: '12+ years',
        notifications: { messages: 11, connections: 6, projects: 7 } 
      },
      { 
        id: 'f3', 
        username: 'maya.cinema', 
        password: 'film789', 
        name: 'Maya Patel', 
        type: 'Cinematographer', 
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
        location: 'Toronto, ON',
        experience: '7+ years',
        notifications: { messages: 3, connections: 8, projects: 5 } 
      },
      { 
        id: 'f4', 
        username: 'diego.edit', 
        password: 'film321', 
        name: 'Diego Santos', 
        type: 'Post Production', 
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
        location: 'Austin, TX',
        experience: '6+ years',
        notifications: { messages: 9, connections: 4, projects: 6 } 
      },
      { 
        id: 'f5', 
        username: 'sarah.crew', 
        password: 'film654', 
        name: 'Sarah Johnson', 
        type: 'Production Crew', 
        avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
        location: 'Chicago, IL',
        experience: '5+ years',
        notifications: { messages: 7, connections: 11, projects: 3 } 
      }
    ],
    // Investor Profiles (5)
    investor: [
      { 
        id: 'i1', 
        username: 'venture.capital', 
        password: 'invest123', 
        name: 'Victoria Sterling', 
        type: 'VC Partner', 
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
        location: 'San Francisco, CA',
        experience: 'Managing Partner',
        notifications: { messages: 12, deals: 8, analytics: 15 } 
      },
      { 
        id: 'i2', 
        username: 'angel.funds', 
        password: 'invest456', 
        name: 'Michael Chen', 
        type: 'Angel Investor', 
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        location: 'Boston, MA',
        experience: 'Serial Entrepreneur',
        notifications: { messages: 6, deals: 12, analytics: 9 } 
      },
      { 
        id: 'i3', 
        username: 'strategic.partner', 
        password: 'invest789', 
        name: 'Amanda Foster', 
        type: 'Strategic Partner', 
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
        location: 'Seattle, WA',
        experience: 'Investment Director',
        notifications: { messages: 9, deals: 5, analytics: 11 } 
      },
      { 
        id: 'i4', 
        username: 'high.net.worth', 
        password: 'invest321', 
        name: 'Robert Kim', 
        type: 'HNWI', 
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        location: 'Dallas, TX',
        experience: 'Private Investor',
        notifications: { messages: 4, deals: 9, analytics: 7 } 
      },
      { 
        id: 'i5', 
        username: 'film.finance', 
        password: 'invest654', 
        name: 'Isabella Moore', 
        type: 'Film Financier', 
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=100&h=100&fit=crop&crop=face',
        location: 'London, UK',
        experience: 'Film Fund Manager',
        notifications: { messages: 8, deals: 6, analytics: 13 } 
      }
    ],
    // Brand Profiles (5)
    brand: [
      { 
        id: 'b1', 
        username: 'luxury.fashion', 
        password: 'brand123', 
        name: 'Elegance & Co', 
        type: 'Fashion & Lifestyle', 
        avatar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=face',
        location: 'New York, NY',
        experience: 'Luxury Brand',
        notifications: { messages: 10, partnerships: 7, campaigns: 5 } 
      },
      { 
        id: 'b2', 
        username: 'tech.innovation', 
        password: 'brand456', 
        name: 'TechFlow Solutions', 
        type: 'Technology & Apps', 
        avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face',
        location: 'Silicon Valley, CA',
        experience: 'Tech Startup',
        notifications: { messages: 14, partnerships: 4, campaigns: 9 } 
      },
      { 
        id: 'b3', 
        username: 'gourmet.brands', 
        password: 'brand789', 
        name: 'Artisan Foods Inc', 
        type: 'Food & Beverage', 
        avatar: 'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?w=100&h=100&fit=crop&crop=face',
        location: 'Portland, OR',
        experience: 'Artisan Brand',
        notifications: { messages: 6, partnerships: 11, campaigns: 8 } 
      },
      { 
        id: 'b4', 
        username: 'auto.luxury', 
        password: 'brand321', 
        name: 'Premium Motors', 
        type: 'Automotive', 
        avatar: 'https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?w=100&h=100&fit=crop&crop=face',
        location: 'Detroit, MI',
        experience: 'Luxury Automotive',
        notifications: { messages: 8, partnerships: 6, campaigns: 12 } 
      },
      { 
        id: 'b5', 
        username: 'lifestyle.co', 
        password: 'brand654', 
        name: 'Urban Living Co', 
        type: 'Lifestyle Brand', 
        avatar: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=100&h=100&fit=crop&crop=face',
        location: 'Austin, TX',
        experience: 'Lifestyle Company',
        notifications: { messages: 12, partnerships: 9, campaigns: 4 } 
      }
    ]
  };

  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);

  // Auto-populate demo credentials with animation
  const populateDemo = (type) => {
    const demoCredentials = {
      talent: { username: 'sophia.star', password: 'talent123' },
      filmmaker: { username: 'alex.director', password: 'film123' },
      investor: { username: 'venture.capital', password: 'invest123' },
      brand: { username: 'luxury.fashion', password: 'brand123' }
    };
    
    setLoginAnimating(true);
    setLoginError('');
    setLoginSuccess('Demo credentials loaded!');
    
    setTimeout(() => {
      setLoginData(demoCredentials[type]);
      setLoginAnimating(false);
      setTimeout(() => setLoginSuccess(''), 2000);
    }, 500);
  };

  // Remember me functionality
  useEffect(() => {
    const savedCredentials = localStorage.getItem('multiPortalCredentials');
    if (savedCredentials) {
      const { username, password, remember } = JSON.parse(savedCredentials);
      if (remember) {
        setLoginData({ username, password });
        setRememberMe(true);
      }
    }
  }, []);

  const saveCredentials = (credentials, remember) => {
    if (remember) {
      localStorage.setItem('multiPortalCredentials', JSON.stringify({
        ...credentials,
        remember: true
      }));
    } else {
      localStorage.removeItem('multiPortalCredentials');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess('');
    setIsLoading(true);
    setLoginAttempts(prev => prev + 1);
    
    // Enhanced loading simulation with validation
    setTimeout(() => {
      // Search all user types for matching credentials
      let foundUser = null;
      let userType = null;
      
      for (const [type, userList] of Object.entries(users)) {
        const user = userList.find(u => u.username === loginData.username && u.password === loginData.password);
        if (user) {
          foundUser = user;
          userType = type;
          break;
        }
      }
      
      if (foundUser) {
        setLoginSuccess('Login successful! Redirecting...');
        saveCredentials(loginData, rememberMe);
        
        setTimeout(() => {
          setCurrentUser({ ...foundUser, portalType: userType });
          setCurrentView('portal-entry');
          if (!rememberMe) {
            setLoginData({ username: '', password: '' });
          }
          setIsLoading(false);
        }, 1000);
      } else {
        const errorMessages = [
          'Invalid username or password. Try the demo accounts below.',
          'Authentication failed. Please check your credentials.',
          'Unable to authenticate. Use demo accounts for testing.'
        ];
        setLoginError(errorMessages[Math.min(loginAttempts, errorMessages.length - 1)]);
        setIsLoading(false);
      }
    }, 1200);
  };

  const getPortalConfig = (type) => {
    const configs = {
      talent: {
        title: 'Talent Portal',
        subtitle: 'On-camera performers bringing stories to life. Showcase your talent, audition for roles, and connect with casting directors in the indie film community.',
        icon: <User className="w-8 h-8 text-white" />,
        color: 'from-red-500 to-pink-600',
        bgColor: 'bg-red-500',
        textColor: 'text-red-300',
        network: ['Lead & Supporting Actors', 'Voice Artists', 'Background Performers', 'Models & Influencers', 'Stunt Performers', 'Child Actors'],
        features: ['Create compelling casting profiles', 'Connect directly with casting directors', 'AI-Powered role matching system']
      },
      filmmaker: {
        title: 'Filmmakers Portal',
        subtitle: 'Behind-the-camera professionals creating cinematic magic. Connect with projects, showcase your work, and build your film career.',
        icon: <Camera className="w-8 h-8 text-white" />,
        color: 'from-purple-500 to-indigo-600',
        bgColor: 'bg-purple-500',
        textColor: 'text-purple-300',
        network: ['Directors & Producers', 'Cinematographers', 'Production Crew', 'Post Production Artists', 'Sound Engineers', 'Art Directors'],
        features: ['Build comprehensive professional profiles', 'AI-Powered project matching', 'Connect with funding opportunities']
      },
      investor: {
        title: 'Investor Network',
        subtitle: 'Discover groundbreaking indie film projects, analyze market opportunities, and build your entertainment portfolio with confidence.',
        icon: <TrendingUp className="w-8 h-8 text-white" />,
        color: 'from-green-500 to-emerald-600',
        bgColor: 'bg-green-500',
        textColor: 'text-green-300',
        network: ['Angel Investors', 'VC Partners', 'HNWIs', 'Strategic Partners', 'Film Funds', 'Media Companies'],
        features: ['Exclusive film project deal flow', 'AI-Powered ROI predictions', 'Industry network access']
      },
      brand: {
        title: 'Brands Portal',
        subtitle: 'Companies seeking authentic product placement opportunities and equity partnerships in groundbreaking indie films for maximum brand impact.',
        icon: <Building className="w-8 h-8 text-white" />,
        color: 'from-orange-500 to-red-600',
        bgColor: 'bg-orange-500',
        textColor: 'text-orange-300',
        network: ['Fashion & Lifestyle', 'Technology & Apps', 'Food & Beverage', 'Automotive', 'Luxury Goods', 'Local Businesses'],
        features: ['Authentic product placement opportunities', 'Equity partnership deals', 'AI-Powered brand matching']
      }
    };
    return configs[type];
  };

  const getTotalNotifications = (user) => {
    if (!user || !user.notifications) return 0;
    return Object.values(user.notifications).reduce((sum, count) => sum + count, 0);
  };

  const NotificationPanel = ({ user, onClose }) => {
    const config = getPortalConfig(user.portalType);
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl border border-white border-opacity-20 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 bg-gradient-to-r ${config.color} rounded-lg flex items-center justify-center text-white`}>
                <Bell className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Notifications</h3>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none p-1 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ×
            </button>
          </div>
          
          <div className="space-y-4">
            {Object.entries(user.notifications).map(([type, count]) => (
              <div key={type} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  {type === 'messages' && <MessageCircle className="w-6 h-6 text-blue-500" />}
                  {type === 'connections' && <Users className="w-6 h-6 text-green-500" />}
                  {(type === 'opportunities' || type === 'projects' || type === 'deals' || type === 'partnerships' || type === 'campaigns') && <Star className="w-6 h-6 text-yellow-500" />}
                  {type === 'analytics' && <TrendingUp className="w-6 h-6 text-purple-500" />}
                  <span className="capitalize text-gray-700 font-medium">{type}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${config.bgColor} text-white min-w-[2rem] text-center`}>
                  {count}
                </span>
              </div>
            ))}
          </div>
          
          <button
            onClick={onClose}
            className={`w-full mt-6 py-3 px-4 bg-gradient-to-r ${config.color} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity`}
          >
            Continue to Portal
          </button>
        </div>
      </div>
    );
  };

  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl border border-white border-opacity-20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">IndieGate.io</h1>
            <h2 className="text-xl font-semibold text-white mb-2">Multi-Portal Access</h2>
            <p className="text-blue-200">Sign in to your specialized portal</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className={`transition-all duration-300 ${loginAnimating ? 'scale-105' : 'scale-100'}`}>
              <input
                type="text"
                placeholder="Username"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white focus:border-opacity-50 focus:bg-opacity-30 transition-all"
                required
              />
            </div>
            
            <div className={`relative transition-all duration-300 ${loginAnimating ? 'scale-105' : 'scale-100'}`}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="w-full px-4 py-3 pr-12 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-white focus:border-opacity-50 focus:bg-opacity-30 transition-all"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 text-blue-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-white border-opacity-30"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="text-blue-300 hover:text-white transition-colors"
                onClick={() => alert('Demo system - password reset not available')}
              >
                Forgot password?
              </button>
            </div>
            
            {loginError && (
              <div className="p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-30 rounded-lg flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-300 flex-shrink-0" />
                <p className="text-red-300 text-sm">{loginError}</p>
              </div>
            )}

            {loginSuccess && (
              <div className="p-3 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                <p className="text-green-300 text-sm">{loginSuccess}</p>
              </div>
            )}
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <User className="w-5 h-5" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg border border-white border-opacity-20">
            <p className="text-blue-200 text-sm text-center mb-4 font-medium">Demo Accounts - Click to auto-fill:</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => populateDemo('talent')}
                className="p-2 text-xs bg-red-500 bg-opacity-20 text-red-300 rounded-lg hover:bg-opacity-30 transition-all border border-red-500 border-opacity-30"
              >
                <span className="font-semibold">Talent</span><br />
                sophia.star
              </button>
              <button
                onClick={() => populateDemo('filmmaker')}
                className="p-2 text-xs bg-purple-500 bg-opacity-20 text-purple-300 rounded-lg hover:bg-opacity-30 transition-all border border-purple-500 border-opacity-30"
              >
                <span className="font-semibold">Filmmaker</span><br />
                alex.director
              </button>
              <button
                onClick={() => populateDemo('investor')}
                className="p-2 text-xs bg-green-500 bg-opacity-20 text-green-300 rounded-lg hover:bg-opacity-30 transition-all border border-green-500 border-opacity-30"
              >
                <span className="font-semibold">Investor</span><br />
                venture.capital
              </button>
              <button
                onClick={() => populateDemo('brand')}
                className="p-2 text-xs bg-orange-500 bg-opacity-20 text-orange-300 rounded-lg hover:bg-opacity-30 transition-all border border-orange-500 border-opacity-30"
              >
                <span className="font-semibold">Brand</span><br />
                luxury.fashion
              </button>
            </div>
          </div>

          {/* Back to Demo Landing */}
          <div className="text-center mt-6">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-blue-300 hover:text-white transition-colors mx-auto"
            >
              <Home className="w-4 h-4" />
              <span>Back to Demo Landing</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'portal-entry' && currentUser) {
    const config = getPortalConfig(currentUser.portalType);
    const totalNotifications = getTotalNotifications(currentUser);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        {showNotifications && (
          <NotificationPanel 
            user={currentUser} 
            onClose={() => setShowNotifications(false)} 
          />
        )}
        
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-2xl shadow-2xl border border-white border-opacity-20">
          {/* Header with user info and logout */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-12 h-12 rounded-full border-2 border-white border-opacity-30"
              />
              <div className="text-white">
                <p className="text-sm opacity-80">Welcome back,</p>
                <p className="font-semibold text-lg">{currentUser.name}</p>
                <p className="text-sm opacity-60">{currentUser.type}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCurrentView('profile')}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                title="Profile Settings"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  setCurrentView('login');
                  setShowNotifications(false);
                }}
                className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Portal Icon */}
          <div className={`w-20 h-20 bg-gradient-to-r ${config.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
            {config.icon}
          </div>
          
          {/* Portal Title */}
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            {config.title}
          </h1>
          
          {/* Portal Description */}
          <p className="text-blue-200 text-center mb-8 leading-relaxed">
            {config.subtitle}
          </p>
          
          {/* Network Includes */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-4 text-center">Network Includes:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {config.network.slice(0, 4).map((item, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 bg-white bg-opacity-20 ${config.textColor} text-sm rounded-full border border-white border-opacity-30`}
                >
                  {item}
                </span>
              ))}
              <span className="px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-full font-medium">
                +{config.network.length - 4} more
              </span>
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-8">
            {config.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 mb-3">
                <div className={`w-2 h-2 bg-gradient-to-r ${config.color} rounded-full`}></div>
                <span className="text-blue-200">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Notification Button */}
          {totalNotifications > 0 && (
            <button
              onClick={() => setShowNotifications(true)}
              className="w-full mb-4 py-3 px-4 bg-white bg-opacity-20 text-white rounded-lg font-medium hover:bg-opacity-30 transition-all flex items-center justify-center space-x-2 border border-white border-opacity-20"
            >
              <Bell className="w-5 h-5" />
              <span>View Notifications</span>
              <span className={`px-2 py-1 ${config.bgColor} text-white text-xs rounded-full ml-2 font-bold min-w-[1.5rem] text-center`}>
                {totalNotifications}
              </span>
            </button>
          )}
          
          {/* Enter Portal Button */}
          <button
            onClick={() => setCurrentView('portal-dashboard')}
            className={`w-full py-4 px-6 bg-gradient-to-r ${config.color} text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg`}
          >
            Enter {config.title}
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'profile' && currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl border border-white border-opacity-20">
          <div className="flex items-center mb-6">
            <button
              onClick={() => setCurrentView('portal-entry')}
              className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg mr-3 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold text-white">Profile Settings</h2>
          </div>
          
          <div className="flex items-center space-x-4 mb-6 p-4 bg-white bg-opacity-10 rounded-lg">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-16 h-16 rounded-full border-2 border-white border-opacity-30"
            />
            <div>
              <h3 className="text-white font-semibold">{currentUser.name}</h3>
              <p className="text-blue-200 text-sm">{currentUser.type}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-blue-200 text-sm mb-2 font-medium">Name</label>
              <input
                type="text"
                value={currentUser.name}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-opacity-50"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-blue-200 text-sm mb-2 font-medium">Username</label>
              <input
                type="text"
                value={currentUser.username}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-opacity-50"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-blue-200 text-sm mb-2 font-medium">Type</label>
              <input
                type="text"
                value={currentUser.type}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-opacity-50"
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-blue-200 text-sm mb-2 font-medium">Portal</label>
              <input
                type="text"
                value={currentUser.portalType.charAt(0).toUpperCase() + currentUser.portalType.slice(1)}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-opacity-50"
                readOnly
              />
            </div>

            <div>
              <label className="block text-blue-200 text-sm mb-2 font-medium">Location</label>
              <input
                type="text"
                value={currentUser.location}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-opacity-50"
                readOnly
              />
            </div>

            <div>
              <label className="block text-blue-200 text-sm mb-2 font-medium">Experience</label>
              <input
                type="text"
                value={currentUser.experience}
                className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:border-opacity-50"
                readOnly
              />
            </div>
          </div>
          
          <button
            onClick={() => setCurrentView('portal-entry')}
            className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Portal Entry
          </button>
        </div>
      </div>
    );
  }

  if (currentView === 'portal-dashboard' && currentUser) {
    const config = getPortalConfig(currentUser.portalType);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-xl border border-white border-opacity-20">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  {config.icon}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{config.title} Dashboard</h1>
                  <p className="text-blue-200">Welcome back, {currentUser.name}</p>
                </div>
              </div>
              <button
                onClick={() => setCurrentView('portal-entry')}
                className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-colors"
                title="Back to Portal Entry"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Dashboard Content */}
          <div className="text-center text-white bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 shadow-xl border border-white border-opacity-20">
            <div className={`w-16 h-16 bg-gradient-to-r ${config.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
              {config.icon}
            </div>
            <h2 className="text-3xl font-bold mb-4">Portal Dashboard</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              This is where your personalized {currentUser.portalType} dashboard would be displayed with all relevant tools, connections, and opportunities specific to your role in the indie film industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-colors border border-white border-opacity-20">
                <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Messages</h3>
                <p className="text-blue-200 text-sm">Connect with your network</p>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-blue-400">
                    {currentUser.notifications.messages || 0}
                  </span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-colors border border-white border-opacity-20">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Network</h3>
                <p className="text-blue-200 text-sm">Expand your connections</p>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-green-400">
                    {currentUser.notifications.connections || 0}
                  </span>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-colors border border-white border-opacity-20">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Opportunities</h3>
                <p className="text-blue-200 text-sm">Discover new projects</p>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-yellow-400">
                    {Object.values(currentUser.notifications).filter((_, index) => index === 2)[0] || 0}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('portal-entry')}
              className={`mt-8 py-3 px-6 bg-gradient-to-r ${config.color} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg`}
            >
              Return to Portal Entry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MultiPortalSystem; 