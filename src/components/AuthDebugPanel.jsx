import React, { useState, useEffect } from 'react';
import { authService } from '../config/auth.js';

const AuthDebugPanel = ({ onClose }) => {
  const [connectionStatus, setConnectionStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [setupInstructions, setSetupInstructions] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    setIsLoading(true);
    try {
      const result = await authService.testDatabaseConnection();
      setConnectionStatus(result);
      if (!result.success) {
        setSetupInstructions(authService.getDatabaseSetupInstructions());
      }
    } catch (error) {
      setConnectionStatus({
        success: false,
        error: 'Failed to test connection',
        details: error.message
      });
    }
    setIsLoading(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Authentication Setup & Debug
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Connection Status */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Database Connection Status
            </h3>
            
            {isLoading ? (
              <div className="flex items-center text-blue-600">
                <div className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full mr-2"></div>
                Testing connection...
              </div>
            ) : (
              <div className={`p-4 rounded-lg ${
                connectionStatus?.success 
                  ? 'bg-green-100 border border-green-200' 
                  : 'bg-red-100 border border-red-200'
              }`}>
                <div className={`font-medium ${
                  connectionStatus?.success ? 'text-green-800' : 'text-red-800'
                }`}>
                  {connectionStatus?.success ? '✅ Connected' : '❌ Connection Failed'}
                </div>
                <div className={`text-sm mt-1 ${
                  connectionStatus?.success ? 'text-green-700' : 'text-red-700'
                }`}>
                  {connectionStatus?.message || connectionStatus?.error}
                </div>
                {connectionStatus?.instructions && (
                  <div className="text-sm text-red-600 mt-2">
                    {connectionStatus.instructions}
                  </div>
                )}
              </div>
            )}

            <button
              onClick={testConnection}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Test Again
            </button>
          </div>

          {/* Demo Credentials */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Demo User Credentials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { email: 'investor@demo.com', portal: 'Investor', color: 'bg-green-100 border-green-200' },
                { email: 'filmmaker@demo.com', portal: 'Filmmaker', color: 'bg-purple-100 border-purple-200' },
                { email: 'talent@demo.com', portal: 'Talent', color: 'bg-red-100 border-red-200' },
                { email: 'brand@demo.com', portal: 'Brand', color: 'bg-orange-100 border-orange-200' }
              ].map(({ email, portal, color }) => (
                <div key={email} className={`p-3 rounded-lg border ${color}`}>
                  <div className="font-medium text-gray-800">{portal} Portal</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Email: <code className="bg-white px-1 rounded">{email}</code>
                  </div>
                  <div className="text-sm text-gray-600">
                    Password: <code className="bg-white px-1 rounded">demo123</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`${email}\ndemo123`)}
                    className="text-xs text-blue-600 hover:text-blue-800 mt-1"
                  >
                    Copy credentials
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Setup Instructions */}
          {setupInstructions && !connectionStatus?.success && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                {setupInstructions.title}
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  {setupInstructions.steps.map((step, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Current Authentication State */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Current Authentication State
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-700">
                <div>Authenticated: {authService.isAuthenticated() ? '✅ Yes' : '❌ No'}</div>
                <div>Current User: {authService.getCurrentUser()?.email || 'None'}</div>
                <div>Session Valid: {authService.isSessionValid() ? '✅ Yes' : '❌ No'}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                authService.logout();
                window.location.reload();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear Session & Reload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthDebugPanel; 