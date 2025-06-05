import { useState } from 'react'
import Button from './Button'

const NotificationCenter = ({ onClose, onAcceptConnection, onOpenMessaging }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  // Sample notifications with film industry context
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'connection_request',
      from: 'Sarah Montgomery',
      fromId: 'sarah-montgomery',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=50&h=50&fit=crop&crop=face',
      message: 'wants to connect with you',
      details: 'Interested in discussing documentary co-investment opportunities',
      timestamp: '2024-01-15T10:30:00Z',
      read: false,
      action: 'connection_request',
    },
    {
      id: 2,
      type: 'message',
      from: 'Michael Chen',
      fromId: 'michael-chen',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      message: 'sent you a message',
      details: 'Hi! I have a tech-forward film project that might interest you...',
      timestamp: '2024-01-15T09:15:00Z',
      read: false,
      action: 'view_message',
    },
    {
      id: 3,
      type: 'deal_alert',
      from: 'IndiGate.io Smart Matching',
      fromId: 'system',
      avatar: '🎬',
      message: 'New deal matches your criteria',
      details: 'Documentary film "Climate Stories" - $1.8M budget, seeking $800K investment',
      timestamp: '2024-01-15T08:45:00Z',
      read: false,
      action: 'view_deal',
    },
    {
      id: 4,
      type: 'follow',
      from: 'Alex Rivera',
      fromId: 'alex-rivera',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      message: 'started following you',
      details: 'Actor interested in your production investments',
      timestamp: '2024-01-14T16:20:00Z',
      read: true,
      action: 'view_profile',
    },
    {
      id: 5,
      type: 'event',
      from: 'Sundance Film Festival',
      fromId: 'event-sundance',
      avatar: '🎪',
      message: 'Industry event reminder',
      details: 'Investor networking breakfast tomorrow at 8:00 AM - RSVP required',
      timestamp: '2024-01-14T14:00:00Z',
      read: true,
      action: 'view_event',
    },
    {
      id: 6,
      type: 'deal_update',
      from: 'David Park',
      fromId: 'david-park',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      message: 'shared deal update',
      details: 'Franchise Reboot project now in pre-production phase, on schedule for Q2 filming',
      timestamp: '2024-01-14T11:30:00Z',
      read: true,
      action: 'view_deal_update',
    },
    {
      id: 7,
      type: 'forum_activity',
      from: 'Maria Santos',
      fromId: 'maria-santos',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b1a8?w=50&h=50&fit=crop&crop=face',
      message: 'mentioned you in a forum post',
      details: 'Great discussion about independent film financing strategies',
      timestamp: '2024-01-13T20:15:00Z',
      read: true,
      action: 'view_forum',
    },
  ])

  const getNotificationIcon = type => {
    switch (type) {
      case 'connection_request':
        return '🤝'
      case 'message':
        return '💬'
      case 'deal_alert':
        return '🚨'
      case 'follow':
        return '👥'
      case 'event':
        return '📅'
      case 'deal_update':
        return '📈'
      case 'forum_activity':
        return '💭'
      default:
        return '🔔'
    }
  }

  const formatTimestamp = timestamp => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now - date

    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago'
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago'
    if (diff < 2592000000) return Math.floor(diff / 86400000) + 'd ago'
    return date.toLocaleDateString()
  }

  const handleNotificationAction = notification => {
    switch (notification.action) {
      case 'connection_request':
        // Handle connection request
        break
      case 'view_message':
        if (onOpenMessaging) {
          onOpenMessaging(notification.fromId)
        }
        break
      case 'view_profile':
        // Handle profile view
        break
      case 'view_deal':
        // Handle deal view
        break
      case 'view_event':
        // Handle event view
        break
      case 'view_deal_update':
        // Handle deal update view
        break
      case 'view_forum':
        // Handle forum view
        break
    }

    // Mark as read
    setNotifications(prev => prev.map(n => (n.id === notification.id ? { ...n, read: true } : n)))
  }

  const handleAcceptConnection = notification => {
    if (onAcceptConnection) {
      onAcceptConnection(notification.fromId)
    }

    // Remove the notification
    setNotifications(prev => prev.filter(n => n.id !== notification.id))
  }

  const handleDeclineConnection = notificationId => {
    setNotifications(prev => prev.filter(n => n.id !== notificationId))
  }

  const filterNotifications = () => {
    if (activeFilter === 'all') return notifications
    return notifications.filter(n => n.type === activeFilter)
  }

  const unreadCount = notifications.filter(n => !n.read).length

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🔔</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
              {unreadCount > 0 && <p className="text-sm text-blue-600">{unreadCount} unread</p>}
            </div>
          </div>

          <Button
            onClick={onClose}
            variant="outline"
            className="p-2 text-gray-600 hover:text-red-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 border-b border-gray-200">
          <div className="flex space-x-2 overflow-x-auto">
            {[
              { key: 'all', label: 'All', icon: '📋' },
              { key: 'connection_request', label: 'Connections', icon: '🤝' },
              { key: 'message', label: 'Messages', icon: '💬' },
              { key: 'deal_alert', label: 'Deals', icon: '🚨' },
              { key: 'event', label: 'Events', icon: '📅' },
            ].map(filter => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                className={`px-3 py-1 text-xs whitespace-nowrap ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 border-gray-300'
                }`}
              >
                <span className="mr-1">{filter.icon}</span>
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filterNotifications().map(notification => (
            <div
              key={notification.id}
              className={`border rounded-lg p-4 transition-all hover:shadow-md ${
                !notification.read ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  {notification.avatar.startsWith('http') ? (
                    <img
                      src={notification.avatar}
                      alt={notification.from}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">{notification.avatar}</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                    <h4 className="font-medium text-gray-900">{notification.from}</h4>
                    <span className="text-sm text-gray-500">{notification.message}</span>
                    {!notification.read && <div className="w-2 h-2 bg-blue-500 rounded-full"></div>}
                  </div>

                  <p className="text-sm text-gray-600 mb-2">{notification.details}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {formatTimestamp(notification.timestamp)}
                    </span>

                    <div className="flex space-x-2">
                      {notification.type === 'connection_request' && (
                        <>
                          <Button
                            onClick={() => handleAcceptConnection(notification)}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs"
                          >
                            Accept
                          </Button>
                          <Button
                            onClick={() => handleDeclineConnection(notification.id)}
                            variant="outline"
                            className="text-gray-600 border-gray-300 px-3 py-1 text-xs"
                          >
                            Decline
                          </Button>
                        </>
                      )}

                      {notification.type === 'message' && (
                        <Button
                          onClick={() => handleNotificationAction(notification)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs"
                        >
                          Reply
                        </Button>
                      )}

                      {notification.type === 'deal_alert' && (
                        <Button
                          onClick={() => handleNotificationAction(notification)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs"
                        >
                          View Deal
                        </Button>
                      )}

                      {['follow', 'forum_activity', 'deal_update'].includes(notification.type) && (
                        <Button
                          onClick={() => handleNotificationAction(notification)}
                          variant="outline"
                          className="text-gray-600 border-gray-300 px-3 py-1 text-xs"
                        >
                          View
                        </Button>
                      )}

                      {notification.type === 'event' && (
                        <Button
                          onClick={() => handleNotificationAction(notification)}
                          className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1 text-xs"
                        >
                          RSVP
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filterNotifications().length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-600">
                {activeFilter === 'all'
                  ? "You're all caught up!"
                  : `No ${activeFilter.replace('_', ' ')} notifications`}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => {
                setNotifications(prev => prev.map(n => ({ ...n, read: true })))
              }}
              variant="outline"
              className="text-sm text-gray-600 border-gray-300"
            >
              Mark all as read
            </Button>

            <p className="text-xs text-gray-500">{notifications.length} total notifications</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationCenter
