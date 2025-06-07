// Authentication System Configuration for IndieGate
import React from 'react';
import { airtableConfig } from './airtable.js';

// User authentication service
export class AuthService {
  constructor() {
    this.currentUser = null;
    this.initializeSession();
  }

  // Initialize session from localStorage
  initializeSession() {
    const stored = localStorage.getItem('indiegate_user');
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored);
        // Validate session is still valid (within 24 hours)
        if (this.isSessionValid()) {
          return this.currentUser;
        } else {
          this.logout();
        }
      } catch (error) {
        console.error('Session initialization error:', error);
        this.logout();
      }
    }
    return null;
  }

  // Check if current session is valid
  isSessionValid() {
    if (!this.currentUser?.loginTime) return false;
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours
    return (Date.now() - this.currentUser.loginTime) < sessionDuration;
  }

  // Register new user
  async register(userData) {
    try {
      // Validate required fields
      if (!this.validateRegistrationData(userData)) {
        throw new Error('Invalid registration data');
      }

      // Check if user already exists
      const existingUser = await this.findUserByEmail(userData.email);
      if (existingUser) {
        throw new Error('User already exists with this email');
      }

      // Create user record in Airtable
      const userRecord = await this.createUserRecord(userData);
      
      // Auto-login after registration
      const user = this.formatUserData(userRecord);
      this.setCurrentUser(user);
      
      return { success: true, user };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: error.message };
    }
  }

  // Login user
  async login(email, password) {
    try {
      const user = await this.findUserByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }

      // Verify password (in production, this would be hashed)
      if (user.password !== password) {
        throw new Error('Invalid password');
      }

      // Set current user and session
      const formattedUser = this.formatUserData(user);
      this.setCurrentUser(formattedUser);
      
      return { success: true, user: formattedUser };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: error.message };
    }
  }

  // Logout user
  logout() {
    this.currentUser = null;
    localStorage.removeItem('indiegate_user');
    // Clear any session-related data
    sessionStorage.clear();
  }

  // Get current user
  getCurrentUser() {
    return this.currentUser;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.currentUser !== null && this.isSessionValid();
  }

  // Set current user and save to localStorage
  setCurrentUser(user) {
    user.loginTime = Date.now();
    this.currentUser = user;
    localStorage.setItem('indiegate_user', JSON.stringify(user));
  }

  // Validate registration data
  validateRegistrationData(data) {
    const required = ['email', 'password', 'firstName', 'lastName', 'portal'];
    return required.every(field => data[field] && data[field].trim().length > 0);
  }

  // Create user record in Airtable
  async createUserRecord(userData) {
    const url = `https://api.airtable.com/v0/${airtableConfig.baseId}/Users`;
    
    const fields = {
      Email: userData.email,
      Password: userData.password, // In production, hash this
      FirstName: userData.firstName,
      LastName: userData.lastName,
      Portal: userData.portal,
      Company: userData.company || '',
      Phone: userData.phone || '',
      Bio: userData.bio || '',
      CreatedDate: new Date().toISOString(),
      LastLogin: new Date().toISOString(),
      Status: 'Active'
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${airtableConfig.apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields })
    });

    if (!response.ok) {
      throw new Error(`Failed to create user: ${response.status}`);
    }

    return await response.json();
  }

  // Find user by email
  async findUserByEmail(email) {
    const url = `https://api.airtable.com/v0/${airtableConfig.baseId}/Users`;
    const filterFormula = `{Email} = "${email}"`;
    
    const response = await fetch(
      `${url}?filterByFormula=${encodeURIComponent(filterFormula)}`,
      {
        headers: {
          'Authorization': `Bearer ${airtableConfig.apiToken}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to find user: ${response.status}`);
    }

    const data = await response.json();
    return data.records.length > 0 ? data.records[0].fields : null;
  }

  // Format user data for frontend use
  formatUserData(userRecord) {
    const fields = userRecord.fields || userRecord;
    return {
      id: userRecord.id,
      email: fields.Email,
      firstName: fields.FirstName,
      lastName: fields.LastName,
      portal: fields.Portal,
      company: fields.Company || '',
      phone: fields.Phone || '',
      bio: fields.Bio || '',
      createdDate: fields.CreatedDate,
      lastLogin: fields.LastLogin,
      status: fields.Status || 'Active'
    };
  }

  // Update user profile
  async updateProfile(userId, updateData) {
    try {
      const url = `https://api.airtable.com/v0/${airtableConfig.baseId}/Users/${userId}`;
      
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${airtableConfig.apiToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields: updateData })
      });

      if (!response.ok) {
        throw new Error(`Failed to update profile: ${response.status}`);
      }

      const updatedRecord = await response.json();
      const updatedUser = this.formatUserData(updatedRecord);
      
      // Update current user if it's the same user
      if (this.currentUser && this.currentUser.id === userId) {
        this.setCurrentUser(updatedUser);
      }

      return { success: true, user: updatedUser };
    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, error: error.message };
    }
  }

  // Reset password (simplified version)
  async resetPassword(email) {
    try {
      // In a real implementation, this would send an email
      // For now, we'll just log the action
      console.log(`Password reset requested for: ${email}`);
      
      // Could integrate with email service here
      return { success: true, message: 'Password reset instructions sent to email' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Get user by portal type (for admin functions)
  async getUsersByPortal(portal) {
    try {
      const url = `https://api.airtable.com/v0/${airtableConfig.baseId}/Users`;
      const filterFormula = `{Portal} = "${portal}"`;
      
      const response = await fetch(
        `${url}?filterByFormula=${encodeURIComponent(filterFormula)}`,
        {
          headers: {
            'Authorization': `Bearer ${airtableConfig.apiToken}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
      }

      const data = await response.json();
      return data.records.map(record => this.formatUserData(record));
    } catch (error) {
      console.error('Error fetching users by portal:', error);
      return [];
    }
  }
}

// Create singleton instance
export const authService = new AuthService();

// Helper functions for components
export const useAuth = () => {
  const [user, setUser] = React.useState(authService.getCurrentUser());
  
  React.useEffect(() => {
    const checkAuth = () => {
      const currentUser = authService.getCurrentUser();
      if (!authService.isSessionValid() && currentUser) {
        authService.logout();
        setUser(null);
      } else {
        setUser(currentUser);
      }
    };

    // Check auth status periodically
    const interval = setInterval(checkAuth, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  return {
    user,
    isAuthenticated: authService.isAuthenticated(),
    login: async (email, password) => {
      const result = await authService.login(email, password);
      if (result.success) {
        setUser(result.user);
      }
      return result;
    },
    register: async (userData) => {
      const result = await authService.register(userData);
      if (result.success) {
        setUser(result.user);
      }
      return result;
    },
    logout: () => {
      authService.logout();
      setUser(null);
    },
    updateProfile: async (updateData) => {
      if (!user) return { success: false, error: 'Not authenticated' };
      const result = await authService.updateProfile(user.id, updateData);
      if (result.success) {
        setUser(result.user);
      }
      return result;
    }
  };
};

// Portal configuration
export const PORTAL_TYPES = {
  INVESTOR: 'investor',
  FILMMAKER: 'filmmaker', 
  TALENT: 'talent',
  BRAND: 'brand'
};

export const PORTAL_CONFIGS = {
  [PORTAL_TYPES.INVESTOR]: {
    name: 'Investor Portal',
    description: 'Discover and invest in independent film projects',
    color: 'from-green-500 to-emerald-600',
    icon: '📈',
    fields: ['company', 'investmentRange', 'investmentPreferences']
  },
  [PORTAL_TYPES.FILMMAKER]: {
    name: 'Filmmaker Portal',
    description: 'Create, fund, and distribute your independent films',
    color: 'from-purple-500 to-indigo-600',
    icon: '🎬',
    fields: ['experience', 'genres', 'equipment']
  },
  [PORTAL_TYPES.TALENT]: {
    name: 'Talent Portal',
    description: 'Showcase your skills and find opportunities',
    color: 'from-red-500 to-pink-600',
    icon: '👤',
    fields: ['skills', 'experience', 'reel']
  },
  [PORTAL_TYPES.BRAND]: {
    name: 'Brand Portal',
    description: 'Connect with filmmakers for product placement',
    color: 'from-orange-500 to-red-600',
    icon: '🏢',
    fields: ['industry', 'products', 'budget']
  }
}; 