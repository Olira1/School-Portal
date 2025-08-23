import React from 'react'

const NotificationCard = ({ notification, onMarkAsRead }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-red-200 bg-red-50'
      case 'medium':
        return 'border-yellow-200 bg-yellow-50'
      case 'low':
        return 'border-blue-200 bg-blue-50'
      default:
        return 'border-gray-200 bg-gray-50'
    }
  }

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return '🔴'
      case 'medium':
        return '🟡'
      case 'low':
        return '🔵'
      default:
        return '📢'
    }
  }

  const formatTime = (timestamp) => {
    const now = new Date()
    const time = new Date(timestamp)
    const diffInHours = Math.floor((now - time) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    return time.toLocaleDateString()
  }

  return (
    <div className={`bg-white rounded-xl border ${getPriorityColor(notification.priority)} p-4 shadow-sm hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <span className="text-lg">{getPriorityIcon(notification.priority)}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {notification.title}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {notification.message}
              </p>
              
              {notification.student && (
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs text-gray-500">For:</span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {notification.student}
                  </span>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {formatTime(notification.timestamp)}
                </span>
                {notification.category && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {notification.category}
                  </span>
                )}
              </div>
            </div>
            
            {!notification.isRead && (
              <button
                onClick={() => onMarkAsRead(notification.id)}
                className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Mark as read"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full block"></span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationCard
