import { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />
      case 'demo':
        return (
          <div className="space-y-8">
            {/* Demo Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Interactive Demo Components
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                These components showcase React state management and Tailwind styling
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Counter Card */}
              <Card>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Interactive Counter
                </h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {count}
                  </div>
                  <div className="space-x-4">
                    <Button onClick={() => setCount(count + 1)}>
                      Increment
                    </Button>
                    <Button 
                      variant="danger"
                      onClick={() => setCount(count - 1)}
                    >
                      Decrement
                    </Button>
                    <Button 
                      variant="secondary"
                      onClick={() => setCount(0)}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Toggle Card */}
              <Card>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Toggle Visibility
                </h3>
                <div className="text-center">
                  <Button 
                    variant="success"
                    onClick={() => setIsVisible(!isVisible)}
                    className="mb-4"
                  >
                    {isVisible ? 'Hide' : 'Show'} Message
                  </Button>
                  {isVisible && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-green-800">
                        🎉 This message can be toggled on and off!
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Button Showcase */}
            <Card>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Button Component Variants
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-700 mb-4">Different Sizes:</h4>
                <div className="flex items-center space-x-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </Card>
          </div>
        )
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600">
              This section is under development
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  currentView === 'dashboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('demo')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  currentView === 'demo'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Interactive Demo
              </button>
              <button
                onClick={() => setCurrentView('projects')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  currentView === 'projects'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setCurrentView('analytics')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  currentView === 'analytics'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Analytics
              </button>
            </nav>
          </div>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </main>
    </div>
  )
}

export default App
