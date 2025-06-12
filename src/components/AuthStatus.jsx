import React from 'react'
import { authService } from '../config/auth.js'

const AuthStatus = ({ user, onLogout, className = '' }) => {
  if (!user) return null

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      authService.logout()
      if (onLogout) {
        onLogout()
      } else {
        window.location.href = '/'
      }
    }
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* User Avatar */}
      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-bold">
          {user.firstName?.charAt(0)?.toUpperCase() || 'U'}
          {user.lastName?.charAt(0)?.toUpperCase() || ''}
        </span>
      </div>

      {/* User Info */}
      <div className="hidden md:block">
        <p className="text-sm font-medium text-gray-700">
          {user.firstName} {user.lastName}
        </p>
        <p className="text-xs text-gray-500">
          {user.portal?.charAt(0)?.toUpperCase() + user.portal?.slice(1)} Portal
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="text-sm text-gray-600 hover:text-gray-800 transition-colors px-2 py-1 rounded hover:bg-gray-100"
        title="Sign Out"
      >
        Sign Out
      </button>
    </div>
  )
}

export default AuthStatus 