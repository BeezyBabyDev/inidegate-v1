import { useState, useEffect } from 'react'
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
      setTestResults(prev => [
        ...prev,
        {
          name: testName,
          success: result.success,
          message: result.message || 'Test completed',
          timestamp: new Date().toLocaleTimeString(),
        },
      ])
      return result
    } catch (error) {
      setTestResults(prev => [
        ...prev,
        {
          name: testName,
          success: false,
          message: error.message,
          timestamp: new Date().toLocaleTimeString(),
        },
      ])
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
      company: 'Test Company',
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
        message: `Session is ${isValid ? 'valid' : 'invalid'}`,
      }
    })
  }

  const clearTestResults = () => {
    setTestResults([])
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-2 md:p-4 z-50">
      <div className="bg-white rounded-xl p-4 md:p-6 max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center mb-4 md:mb-6 border-b pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Authentication System Demo
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
          {/* Current Status */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Current Authentication Status
            </h3>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg border">
              <div className="space-y-2 text-sm md:text-base">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-medium">Authenticated:</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${isAuthenticated ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {isAuthenticated ? '✅ Yes' : '❌ No'}
                  </span>
                </div>
                {currentUser && (
                  <>
                    <div className="flex flex-wrap gap-1">
                      <span className="font-medium">User:</span> {currentUser.firstName}{' '}
                      {currentUser.lastName}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="font-medium">Email:</span>{' '}
                      <span className="break-all">{currentUser.email}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="font-medium">Portal:</span>{' '}
                      <span className="capitalize">{currentUser.portal}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <span className="font-medium">Login Time:</span>{' '}
                      <span className="text-xs md:text-sm">
                        {new Date(currentUser.loginTime).toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Demo Users */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Demo Users
            </h3>
            <div className="space-y-2 md:space-y-3">
              {demoUsers.map((user, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm md:text-base break-all">{user.Email}</p>
                    <p className="text-xs md:text-sm text-gray-600">
                      <span className="capitalize">{user.Portal}</span> • Password:{' '}
                      <span className="font-mono">{user.Password}</span>
                    </p>
                  </div>
                  <Button
                    onClick={() => testDemoLogin(user.Email, user.Password)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-xs md:text-sm rounded-md transition-colors flex-shrink-0"
                  >
                    Test Login
                  </Button>
                </div>
              ))}
            </div>

            {/* Authentication Actions */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Authentication Tests
            </h3>
            <div className="space-y-2 md:space-y-3">
              <Button
                onClick={testRegistration}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 md:py-3 text-sm md:text-base rounded-md transition-colors"
              >
                Test Registration
              </Button>
              <Button
                onClick={testSessionValidation}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 md:py-3 text-sm md:text-base rounded-md transition-colors"
              >
                Test Session Validation
              </Button>
              {isAuthenticated && (
                <Button
                  onClick={testLogout}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 md:py-3 text-sm md:text-base rounded-md transition-colors"
                >
                  Test Logout
                </Button>
              )}
            </div>
          </div>

          {/* Test Results */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <h3 className="text-base md:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2 sm:border-b-0 sm:pb-0">
                Test Results
              </h3>
              <Button
                onClick={clearTestResults}
                className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 text-xs md:text-sm rounded-md transition-colors flex-shrink-0"
              >
                Clear Results
              </Button>
            </div>
            <div className="bg-gray-900 text-green-400 p-3 md:p-4 rounded-lg font-mono text-xs md:text-sm max-h-64 md:max-h-96 overflow-y-auto border">
              {testResults.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  No tests run yet. Click the test buttons to see results.
                </p>
              ) : (
                testResults.map((result, index) => (
                  <div
                    key={index}
                    className="mb-3 p-2 bg-gray-800 rounded border-l-4 border-l-blue-500"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-gray-400 text-xs">[{result.timestamp}]</span>
                      <span
                        className={`font-medium ${result.success ? 'text-green-400' : 'text-red-400'}`}
                      >
                        {result.success ? '✅' : '❌'} {result.name}
                      </span>
                    </div>
                    <div className="text-gray-300 text-xs md:text-sm ml-2 break-words">
                      {result.message}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Authentication Features */}
            <h3 className="text-base md:text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Authentication Features
            </h3>
            <div className="bg-green-50 p-3 md:p-4 rounded-lg border border-green-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>User Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Secure Login/Logout</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Password Hashing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Session Management (7 days)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Portal Access Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Demo Mode Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Airtable Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 text-sm">✅</span>
                  <span>Profile Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2 text-sm md:text-base">
            How to Use Authentication:
          </h4>
          <ol className="text-xs md:text-sm text-blue-800 space-y-1 grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2">
            <li className="flex gap-2">
              <span className="font-bold">1.</span>{' '}
              <span>
                <strong>New Users:</strong> Click "Create Account or Sign In"
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">2.</span>{' '}
              <span>
                <strong>Registration:</strong> Fill form and select portal type
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">3.</span>{' '}
              <span>
                <strong>Login:</strong> Use email and password
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">4.</span>{' '}
              <span>
                <strong>Portal Access:</strong> Access only your registered portal
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">5.</span>{' '}
              <span>
                <strong>Session:</strong> Stay logged in for 7 days
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">6.</span>{' '}
              <span>
                <strong>Demo Users:</strong> Use demo credentials above
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AuthDemo
