import { useState } from 'react'
import Card from './Card'
import CommunityStats from './CommunityStats'
import {
  Users,
  MessageSquare,
  ThumbsUp,
  MessageCircle,
  MoreHorizontal,
  Paperclip,
  Smile,
} from 'lucide-react'

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
  const getUserIdFromName = authorName => {
    // Convert name to userId format (lowercase, replace spaces with hyphens)
    return authorName.toLowerCase().replace(/\s+/g, '-')
  }

  // Helper function to handle profile click
  const handleProfileClick = authorName => {
    if (onShowPublicProfile) {
      const userId = getUserIdFromName(authorName)
      onShowPublicProfile(userId)
    }
  }

  const renderPost = post => (
    <div key={post.id} className="bg-slate-800/60 rounded-lg p-5 mb-4 border border-slate-700/80">
      <div className="flex items-start">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-11 h-11 rounded-full mr-4 cursor-pointer hover:ring-2 hover:ring-purple-400 transition-all"
          onClick={() => handleProfileClick(post.author)}
        />
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <div>
              <p
                className="font-semibold text-white cursor-pointer"
                onClick={() => handleProfileClick(post.author)}
              >
                {post.author}
              </p>
              <p className="text-sm text-slate-400">
                {post.role} · <span className="text-xs">{post.timestamp}</span>
              </p>
            </div>
            <button className="text-slate-400 hover:text-white">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <h3 className="font-bold text-lg my-2 text-white">{post.title}</h3>
          <p className="text-slate-300 text-sm mb-3">{post.content}</p>
          <div className="flex items-center text-slate-400 text-sm">
            <button className="flex items-center gap-1.5 hover:text-purple-400">
              <ThumbsUp size={16} /> {post.likes}
            </button>
            <span className="mx-3">·</span>
            <button className="flex items-center gap-1.5 hover:text-purple-400">
              <MessageCircle size={16} /> {post.replies}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCreatePost = () => (
    <div className="bg-slate-800/60 p-4 rounded-lg mb-6 border border-slate-700/80">
      <h3 className="font-bold text-lg text-white mb-3">Create New Post</h3>
      <textarea
        className="w-full bg-slate-900/80 p-3 rounded-lg border border-slate-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
        rows="3"
        placeholder="Share your thoughts, ask questions, or start a discussion..."
        value={newPostContent}
        onChange={e => setNewPostContent(e.target.value)}
      ></textarea>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 text-slate-400">
          <button className="hover:text-purple-400">
            <Paperclip size={18} />
          </button>
          <button className="hover:text-purple-400">
            <Smile size={18} />
          </button>
        </div>
        <button
          onClick={handleCreatePost}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
        >
          Post to Community
        </button>
      </div>
    </div>
  )

  const renderTabs = () => (
    <div className="mb-6">
      <div className="flex space-x-1 bg-slate-800/60 p-1 rounded-lg max-w-sm">
        <button
          onClick={() => setActiveTab('network')}
          className={`w-full py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
            activeTab === 'network'
              ? 'bg-purple-600 text-white'
              : 'text-slate-300 hover:bg-slate-700/50'
          }`}
        >
          {userType === 'talent' ? 'Talent Network' : 'Investor Network'}
        </button>
        <button
          onClick={() => setActiveTab('cross-network')}
          className={`w-full py-2 px-4 rounded-md text-sm font-semibold transition-colors ${
            activeTab === 'cross-network'
              ? 'bg-purple-600 text-white'
              : 'text-slate-300 hover:bg-slate-700/50'
          } ${!crossNetworkEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!crossNetworkEnabled}
        >
          Cross-Network Forum
        </button>
      </div>
    </div>
  )

  const renderCategoryFilters = () => (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories[activeTab === 'cross-network' ? 'crossNetwork' : userType].map(category => (
        <button
          key={category.id}
          className="px-3 py-1.5 text-xs font-semibold bg-slate-700/80 text-slate-300 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
        >
          {category.name}
        </button>
      ))}
    </div>
  )

  const renderPosts = () => (
    <div>
      {(activeTab === 'network' ? networkPosts[userType] : crossNetworkPosts).map(renderPost)}
    </div>
  )

  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Community</h1>
        <p className="text-slate-400 mt-2">Connect, share knowledge, and grow together</p>
      </header>

      <CommunityStats />

      <div className="flex justify-between items-center mb-4">
        {renderTabs()}
        <div className="flex items-center">
          <span className="mr-3 text-sm text-slate-300">Cross-Network Forum</span>
          <label htmlFor="cross-network-toggle" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="cross-network-toggle"
                type="checkbox"
                className="sr-only"
                checked={crossNetworkEnabled}
                onChange={() => setCrossNetworkEnabled(!crossNetworkEnabled)}
              />
              <div className="block bg-slate-700 w-12 h-6 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"></div>
            </div>
          </label>
        </div>
      </div>

      {renderCategoryFilters()}
      {renderCreatePost()}
      {renderPosts()}

      <style>{`
        input:checked ~ .dot {
          transform: translateX(150%);
          background-color: #8B5CF6; /* purple-500 */
        }
      `}</style>
    </div>
  )
}

export default CommunityForum
