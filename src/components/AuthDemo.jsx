import React, { useState, useEffect } from 'react'
import { authService } from '../config/auth.js'
import Button from './Button'

const AuthDemo = ({ onClose }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [demoUsers, setDemoUsers] = useState([])
  const [testResults, setTestResults] = useState([])

  useEffect(() => {
    // Check current authentication status
    const user = authService.getCurrentUser()
    setCurrentUser(user)
    setIsAuthenticated(authService.isAuthenticated())

    // Get demo users
    setDemoUsers(authService.getDemoUsers())
  }, [])

  const runAuthTest = async (testName, testFunction) => {
    try {
      const result = await testFunction()
      setTestResults(prev => [...prev, {
        name: testName,
        success: result.success,
        message: result.message || 'Test completed',
        timestamp: new Date().toLocaleTimeString()
      }])
      return result
    } catch (error) {
      setTestResults(prev => [...prev, {
        name: testName,
        success: false,
        message: error.message,
        timestamp: new Date().toLocaleTimeString()
      }])
      return { success: false, error: error.message }
    }
  }

  const testDemoLogin = async (email, password) => {
    return runAuthTest(`Login Test: ${email}`, async () => {
      const result = await authService.login(email, password)
      if (result.success) {
        setCurrentUser(result.user)
        setIsAuthenticated(true)
        return { success: true, message: `Successfully logged in as ${result.user.firstName}` }
      }
      return result
    })
  }

  const testRegistration = async () => {
    const testData = {
      email: `test-${Date.now()}@demo.com`,
      password: 'testpass123',
      firstName: 'Test',
      lastName: 'User',
      portal: 'investor',
      company: 'Test Company'
    }

    return runAuthTest('Registration Test', async () => {
      const result = await authService.register(testData)
      if (result.success) {
        return { success: true, message: `Successfully registered ${testData.email}` }
      }
      return result
    })
  }

  const testLogout = () => {
    runAuthTest('Logout Test', async () => {
      authService.logout()
      setCurrentUser(null)
      setIsAuthenticated(false)
      return { success: true, message: 'Successfully logged out' }
    })
  }

  const testSessionValidation = () => {
    runAuthTest('Session Validation Test', async () => {
      const isValid = authService.isSessionValid()
      return { 
        success: true, 
        message: `Session is ${isValid ? 'valid' : 'invalid'}` 
      }
    })
  }

  const clearTestResults = () => {
    setTestResults([])
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Authentication System Demo</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Current Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Current Authentication Status</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="space-y-2">
                <p><strong>Authenticated:</strong> {isAuthenticated ? '✅ Yes' : '❌ No'}</p>
                {currentUser && (
                  <>
                    <p><strong>User:</strong> {currentUser.firstName} {currentUser.lastName}</p>
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>Portal:</strong> {currentUser.portal}</p>
                    <p><strong>Login Time:</strong> {new Date(currentUser.loginTime).toLocaleString()}</p>
                  </>
                )}
              </div>
            </div>

            {/* Demo Users */}
            <h3 className="text-lg font-semibold text-gray-800">Demo Users</h3>
            <div className="space-y-2">
              {demoUsers.map((user, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-medium">{user.Email}</p>
                    <p className="text-sm text-gray-600">{user.Portal} • Password: {user.Password}</p>
                  </div>
                  <Button
                    onClick={() => testDemoLogin(user.Email, user.Password)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm"
                  >
                    Test Login
                  </Button>
                </div>
              ))}
            </div>

            {/* Authentication Actions */}
            <h3 className="text-lg font-semibold text-gray-800">Authentication Tests</h3>
            <div className="space-y-2">
              <Button
                onClick={testRegistration}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2"
              >
                Test Registration
              </Button>
              <Button
                onClick={testSessionValidation}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2"
              >
                Test Session Validation
              </Button>
              {isAuthenticated && (
                <Button
                  onClick={testLogout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2"
                >
                  Test Logout
                </Button>
              )}
            </div>
          </div>

          {/* Test Results */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Test Results</h3>
              <Button
                onClick={clearTestResults}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 text-sm"
              >
                Clear Results
              </Button>
            </div>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm max-h-96 overflow-y-auto">
              {testResults.length === 0 ? (
                <p className="text-gray-500">No tests run yet. Click the test buttons to see results.</p>
              ) : (
                testResults.map((result, index) => (
                  <div key={index} className="mb-2">
                    <span className="text-gray-400">[{result.timestamp}]</span>{' '}
                    <span className={result.success ? 'text-green-400' : 'text-red-400'}>
                      {result.success ? '✅' : '❌'} {result.name}
                    </span>
                    <br />
                    <span className="text-gray-300 ml-4">{result.message}</span>
                  </div>
                ))
              )}
            </div>

            {/* Authentication Features */}
            <h3 className="text-lg font-semibold text-gray-800">Authentication Features</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ul className="space-y-1 text-sm">
                <li>✅ User Registration with Portal Selection</li>
                <li>✅ Secure Login with Password Hashing</li>
                <li>✅ Session Management (7-day persistence)</li>
                <li>✅ Portal Access Control</li>
                <li>✅ Demo Mode with Local Storage Fallback</li>
                <li>✅ Airtable Database Integration</li>
                <li>✅ Password Reset Functionality</li>
                <li>✅ Profile Management</li>
                <li>✅ Automatic Session Validation</li>
                <li>✅ Cross-Portal Authentication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">How to Use Authentication:</h4>
          <ol className="text-sm text-blue-800 space-y-1">
            <li>1. <strong>New Users:</strong> Click "Create Account or Sign In" on welcome page</li>
            <li>2. <strong>Registration:</strong> Fill out the form and select your portal type</li>
            <li>3. <strong>Login:</strong> Use your email and password to access your portal</li>
            <li>4. <strong>Portal Access:</strong> Only access portals you're registered for</li>
            <li>5. <strong>Session:</strong> Stay logged in for 7 days automatically</li>
            <li>6. <strong>Demo Users:</strong> Use the demo credentials above for testing</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AuthDemo 