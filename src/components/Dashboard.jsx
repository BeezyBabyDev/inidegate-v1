import { useState } from 'react'
import Card from './Card'
import Button from './Button'
import { BookOpen, CheckCircle, Clock } from 'lucide-react'

function Dashboard() {
  const [stats] = useState({
    totalUsers: 1247,
    activeProjects: 23,
    completedTasks: 156,
    revenue: 45280,
  })

  const [recentActivity] = useState([
    { id: 1, action: 'New user registered', time: '2 minutes ago', type: 'user' },
    { id: 2, action: "Project 'Website Redesign' completed", time: '1 hour ago', type: 'project' },
    { id: 3, action: 'Payment received from Client A', time: '3 hours ago', type: 'payment' },
    { id: 4, action: 'New task assigned to team', time: '5 hours ago', type: 'task' },
  ])

  // Filmmakers Learning Section State
  const [learningResources, setLearningResources] = useState([
    {
      id: '1',
      title: 'Understanding Indie Filmmaking Basics',
      type: 'Beginner',
      duration: 20,
      isCompleted: false,
    },
    {
      id: '2',
      title: 'Film Incentives and How to Leverage Them',
      type: 'Intermediate',
      duration: 35,
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Production Phases Breakdown (Pre-production, Production, Post-production)',
      type: 'Beginner',
      duration: 30,
      isCompleted: false,
    },
    {
      id: '4',
      title: 'Brand and Product Placement Strategies',
      type: 'Intermediate',
      duration: 25,
      isCompleted: false,
    },
    {
      id: '5',
      title: 'Influencer Role Positioning in Film Projects',
      type: 'Advanced',
      duration: 30,
      isCompleted: false,
    },
    {
      id: '6',
      title: 'Strategic Investors for Filmmaking',
      type: 'Intermediate',
      duration: 25,
      isCompleted: false,
    },
    {
      id: '7',
      title: 'Distribution Channels and Strategies',
      type: 'Advanced',
      duration: 40,
      isCompleted: false,
    },
    {
      id: '8',
      title: 'Ownership Rights and Legal Considerations',
      type: 'Advanced',
      duration: 30,
      isCompleted: false,
    },
  ])

  const completedCount = learningResources.filter(r => r.isCompleted).length
  const progress = Math.round((completedCount / learningResources.length) * 100)

  const handleToggleComplete = id => {
    setLearningResources(prev =>
      prev.map(r => (r.id === id ? { ...r, isCompleted: !r.isCompleted } : r))
    )
  }

  const levelColor = {
    Beginner: 'text-green-400 bg-green-500/10',
    Intermediate: 'text-yellow-400 bg-yellow-500/10',
    Advanced: 'text-red-400 bg-red-500/10',
  }

  const getActivityIcon = type => {
    switch (type) {
      case 'user':
        return '👤'
      case 'project':
        return '📁'
      case 'payment':
        return '💰'
      case 'task':
        return '✅'
      default:
        return '📋'
    }
  }

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">👥</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers.toLocaleString()}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">📊</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 text-lg">✅</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed Tasks</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedTasks}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-lg">💰</span>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.revenue.toLocaleString()}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map(activity => (
                <div
                  key={activity.id}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <span className="text-xl">{getActivityIcon(activity.type)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">➕</span>
                Create New Project
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">👤</span>
                Add Team Member
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">📊</span>
                Generate Report
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <span className="mr-2">⚙️</span>
                Settings
              </Button>
            </div>
          </Card>

          {/* Progress Card */}
          <Card className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Website Redesign</span>
                  <span className="text-gray-900">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Mobile App</span>
                  <span className="text-gray-900">62%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">API Development</span>
                  <span className="text-gray-900">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Filmmakers Learning Section */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-purple-400" />
            Level Up Your Filmmaking Knowledge
          </h2>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 flex flex-col">
          <div className="mb-6">
            <p className="text-purple-300">Your Learning Progress</p>
            <div className="flex items-center gap-4 mt-2">
              <div className="w-full bg-black/20 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="font-bold text-white">{progress}%</span>
            </div>
          </div>
          <div className="flex border-b border-white/10 mb-6">
            <button className="px-4 py-2 text-sm font-medium border-b-2 border-purple-500 text-white">
              All Resources
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map(resource => (
              <div
                key={resource.id}
                className="bg-black/20 p-4 rounded-lg flex flex-col h-full border border-transparent hover:border-purple-500 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${levelColor[resource.type]}`}
                  >
                    {resource.type}
                  </span>
                  {resource.isCompleted && <CheckCircle size={18} className="text-green-500" />}
                </div>
                <h4 className="font-bold text-white mb-2 flex-grow">{resource.title}</h4>
                <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                  <span className="flex items-center">
                    <Clock size={12} className="mr-1" /> {resource.duration} min
                  </span>
                </div>
                <button
                  onClick={() => handleToggleComplete(resource.id)}
                  className={`w-full py-2 rounded text-sm font-semibold transition-colors ${resource.isCompleted ? 'bg-green-600/50' : 'bg-purple-600 hover:bg-purple-700'} text-white`}
                >
                  {resource.isCompleted ? 'Completed' : 'Mark as Complete'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
