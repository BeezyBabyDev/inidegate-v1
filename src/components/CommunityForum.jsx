import { useState } from 'react'
import Card from './Card'
import Button from './Button'

const CommunityForum = ({ userType = 'talent', onShowPublicProfile }) => {
  const [activeTab, setActiveTab] = useState('network')
  const [crossNetworkEnabled, setCrossNetworkEnabled] = useState(true)
  const [newPostContent, setNewPostContent] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('general')

  // Sample forum data
  const networkPosts = {
    talent: [
      {
        id: 1,
        author: 'Alex Rivera',
        role: 'Actor',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        title: 'Tips for Self-Tape Auditions',
        content: 'Just booked a lead role after following these self-tape techniques...',
        category: 'auditions',
        timestamp: '2 hours ago',
        likes: 24,
        replies: 8,
        tags: ['acting', 'auditions', 'tips'],
      },
      {
        id: 2,
        author: 'Maria Santos',
        role: 'Director of Photography',
        avatar:
          'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=40&h=40&fit=crop&crop=face',
        title: 'Best Budget Camera Equipment for Indies',
        content: "Here's my complete gear list for shooting independent films under $50K...",
        category: 'equipment',
        timestamp: '5 hours ago',
        likes: 42,
        replies: 15,
        tags: ['cinematography', 'equipment', 'budget'],
      },
      {
        id: 3,
        author: 'James Wilson',
        role: 'Sound Engineer',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        title: 'Location Sound Recording Challenges',
        content: 'Working on a documentary in NYC - here are the audio challenges I faced...',
        category: 'technical',
        timestamp: '1 day ago',
        likes: 18,
        replies: 6,
        tags: ['sound', 'documentary', 'location'],
      },
    ],
    investor: [
      {
        id: 1,
        author: 'Sarah Montgomery',
        role: 'Executive Producer',
        avatar:
          'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=40&h=40&fit=crop&crop=face',
        title: 'ROI Analysis: Documentary vs Narrative Features',
        content: "After 18 investments, here's what I've learned about genre performance...",
        category: 'market-analysis',
        timestamp: '3 hours ago',
        likes: 56,
        replies: 22,
        tags: ['ROI', 'market-analysis', 'documentaries'],
      },
      {
        id: 2,
        author: 'Michael Chen',
        role: 'Angel Investor',
        avatar:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        title: 'Tax Incentives: Best States for Film Investment',
        content:
          'Complete breakdown of state tax incentives and how they affect your bottom line...',
        category: 'tax-incentives',
        timestamp: '6 hours ago',
        likes: 73,
        replies: 31,
        tags: ['tax-incentives', 'investment', 'legal'],
      },
      {
        id: 3,
        author: 'David Park',
        role: 'Family Office',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        title: 'Due Diligence Red Flags in Film Investments',
        content: 'Warning signs I look for when evaluating film projects for investment...',
        category: 'due-diligence',
        timestamp: '2 days ago',
        likes: 89,
        replies: 45,
        tags: ['due-diligence', 'investment', 'risk-management'],
      },
    ],
  }

  const crossNetworkPosts = [
    {
      id: 1,
      author: 'Emma Thompson',
      role: 'Director',
      userType: 'talent',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=40&h=40&fit=crop&crop=face',
      title: 'Seeking Executive Producer for Psychological Thriller',
      content:
        'Have a completed script, attached lead actor, looking for $2.5M investment. Previous film won at Sundance...',
      category: 'seeking-investment',
      timestamp: '4 hours ago',
      likes: 67,
      replies: 28,
      tags: ['seeking-investment', 'thriller', 'producer-needed'],
    },
    {
      id: 2,
      author: 'Robert Kim',
      role: 'Executive Producer',
      userType: 'investor',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      title: 'Looking for Experienced Horror Directors',
      content: 'Have $5M budget for horror franchise, seeking director with proven track record...',
      category: 'seeking-talent',
      timestamp: '1 day ago',
      likes: 94,
      replies: 52,
      tags: ['seeking-talent', 'horror', 'director-wanted'],
    },
    {
      id: 3,
      author: 'Lisa Rodriguez',
      role: 'Screenwriter',
      userType: 'talent',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      title: 'Industry Trends: What Investors Want to See in 2024',
      content:
        'Based on conversations with 15+ producers, here are the themes and genres getting funded...',
      category: 'industry-insights',
      timestamp: '3 days ago',
      likes: 156,
      replies: 78,
      tags: ['industry-insights', 'trends', 'market-research'],
    },
  ]

  const categories = {
    talent: [
      { id: 'general', name: 'General Discussion', color: 'bg-purple-100 text-purple-800' },
      { id: 'auditions', name: 'Auditions & Casting', color: 'bg-blue-100 text-blue-800' },
      { id: 'equipment', name: 'Equipment & Gear', color: 'bg-green-100 text-green-800' },
      { id: 'technical', name: 'Technical Discussion', color: 'bg-orange-100 text-orange-800' },
      { id: 'networking', name: 'Networking', color: 'bg-pink-100 text-pink-800' },
      { id: 'career', name: 'Career Advice', color: 'bg-indigo-100 text-indigo-800' },
    ],
    investor: [
      { id: 'general', name: 'General Discussion', color: 'bg-green-100 text-green-800' },
      { id: 'market-analysis', name: 'Market Analysis', color: 'bg-blue-100 text-blue-800' },
      { id: 'tax-incentives', name: 'Tax Incentives', color: 'bg-yellow-100 text-yellow-800' },
      { id: 'due-diligence', name: 'Due Diligence', color: 'bg-red-100 text-red-800' },
      { id: 'roi-discussion', name: 'ROI Discussion', color: 'bg-purple-100 text-purple-800' },
      { id: 'deal-structure', name: 'Deal Structure', color: 'bg-gray-100 text-gray-800' },
    ],
    crossNetwork: [
      {
        id: 'seeking-investment',
        name: 'Seeking Investment',
        color: 'bg-green-100 text-green-800',
      },
      { id: 'seeking-talent', name: 'Seeking Talent', color: 'bg-purple-100 text-purple-800' },
      { id: 'industry-insights', name: 'Industry Insights', color: 'bg-blue-100 text-blue-800' },
      { id: 'collaboration', name: 'Collaboration', color: 'bg-yellow-100 text-yellow-800' },
      { id: 'success-stories', name: 'Success Stories', color: 'bg-pink-100 text-pink-800' },
      { id: 'events', name: 'Events & Meetups', color: 'bg-indigo-100 text-indigo-800' },
    ],
  }

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return

    // This would normally send to backend
    console.log('Creating post:', {
      content: newPostContent,
      category: selectedCategory,
      tab: activeTab,
    })

    setNewPostContent('')
    setSelectedCategory('general')
  }

  // Define CSS classes based on user type
  const getThemeClasses = () => {
    if (userType === 'investor') {
      return {
        primary: 'green',
        focusRing: 'focus:ring-green-500',
        bgPrimary: 'bg-green-600',
        bgPrimaryHover: 'hover:bg-green-700',
        borderPrimary: 'border-green-500',
        textPrimary: 'text-green-600',
        hoverTextPrimary: 'hover:text-green-600',
      }
    } else {
      return {
        primary: 'purple',
        focusRing: 'focus:ring-purple-500',
        bgPrimary: 'bg-purple-600',
        bgPrimaryHover: 'hover:bg-purple-700',
        borderPrimary: 'border-purple-500',
        textPrimary: 'text-purple-600',
        hoverTextPrimary: 'hover:text-purple-600',
      }
    }
  }

  const themeClasses = getThemeClasses()

  // Helper function to get userId from author name
  const getUserIdFromName = (authorName) => {
    // Convert name to userId format (lowercase, replace spaces with hyphens)
    return authorName.toLowerCase().replace(/\s+/g, '-')
  }

  // Helper function to handle profile click
  const handleProfileClick = (authorName) => {
    if (onShowPublicProfile) {
      const userId = getUserIdFromName(authorName)
      onShowPublicProfile(userId)
    }
  }

  const renderPost = post => (
    <Card key={post.id} className="p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img 
          src={post.avatar} 
          alt={post.author} 
          className={`w-12 h-12 rounded-full object-cover ${
            onShowPublicProfile ? 'cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all' : ''
          }`}
          onClick={() => handleProfileClick(post.author)}
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 
              className={`font-semibold text-gray-900 ${
                onShowPublicProfile ? 'cursor-pointer hover:text-blue-600 transition-colors' : ''
              }`}
              onClick={() => handleProfileClick(post.author)}
            >
              {post.author}
            </h4>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                post.userType === 'investor'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {post.role}
            </span>
            {post.userType && (
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  post.userType === 'investor'
                    ? 'bg-green-50 text-green-600'
                    : 'bg-purple-50 text-purple-600'
                }`}
              >
                {post.userType === 'investor' ? 'Investor Network' : 'Talent Network'}
              </span>
            )}
            <span className="text-sm text-gray-500">{post.timestamp}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
          <p className="text-gray-700 mb-3">{post.content}</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <button className={`flex items-center space-x-1 ${themeClasses.hoverTextPrimary}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>{post.likes}</span>
            </button>
            <button className={`flex items-center space-x-1 ${themeClasses.hoverTextPrimary}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.002 8.002 0 01-7.93-6.93c-.04-.295-.04-.6 0-.895A8.002 8.002 0 0113 4c4.418 0 8 3.582 8 8z"
                />
              </svg>
              <span>{post.replies} replies</span>
            </button>
            <button className={`flex items-center space-x-1 ${themeClasses.hoverTextPrimary}`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  )

  const renderCreatePost = () => (
    <Card className="p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Post</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${themeClasses.focusRing}`}
          >
            {categories[activeTab === 'cross-network' ? 'crossNetwork' : userType].map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            value={newPostContent}
            onChange={e => setNewPostContent(e.target.value)}
            placeholder="Share your thoughts, ask questions, or start a discussion..."
            rows={4}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 ${themeClasses.focusRing}`}
          />
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleCreatePost}
            className={`${themeClasses.bgPrimary} ${themeClasses.bgPrimaryHover} text-white`}
          >
            Post to Community
          </Button>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Forum Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Community Forum</h2>
          <p className="text-gray-600">Connect, share knowledge, and grow together</p>
        </div>

        {/* Cross-Network Toggle */}
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-gray-700">Cross-Network Forum</span>
          <button
            onClick={() => setCrossNetworkEnabled(!crossNetworkEnabled)}
            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 ${themeClasses.focusRing} focus:ring-offset-2 ${
              crossNetworkEnabled ? themeClasses.bgPrimary : 'bg-gray-200'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                crossNetworkEnabled ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Forum Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('network')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'network'
                ? `${themeClasses.borderPrimary} ${themeClasses.textPrimary}`
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {userType === 'investor' ? 'Investor Network' : 'Talent Network'}
          </button>
          {crossNetworkEnabled && (
            <button
              onClick={() => setActiveTab('cross-network')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cross-network'
                  ? `${themeClasses.borderPrimary} ${themeClasses.textPrimary}`
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Cross-Network Forum
            </button>
          )}
        </nav>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3">
        {categories[activeTab === 'cross-network' ? 'crossNetwork' : userType].map(category => (
          <button
            key={category.id}
            className={`px-3 py-1 text-sm rounded-full ${category.color} hover:opacity-80`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Create Post */}
      {renderCreatePost()}

      {/* Forum Posts */}
      <div>
        {activeTab === 'network' && networkPosts[userType].map(renderPost)}
        {activeTab === 'cross-network' && crossNetworkEnabled && crossNetworkPosts.map(renderPost)}

        {activeTab === 'cross-network' && !crossNetworkEnabled && (
          <Card className="p-8 text-center">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636"
              />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cross-Network Forum Disabled
            </h3>
            <p className="text-gray-600">
              Enable the cross-network forum to connect with the other network and see collaborative
              discussions.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}

export default CommunityForum
