import React from 'react'
import { Link } from 'react-router-dom'

const QuickActionsCard = ({ actions }) => {
  const getActionIcon = (type) => {
    const icons = {
      grades: '📚',
      assignments: '📝',
      balance: '💰',
      communication: '💬',
      reports: '📑',
      schedule: '📅',
      resources: '📂',
      attendance: '✅',
      default: '⚡'
    }
    return icons[type] || icons.default
  }

  const getActionColor = (type) => {
    const colors = {
      grades: 'bg-blue-600 hover:bg-blue-700',
      assignments: 'bg-green-600 hover:bg-green-700',
      balance: 'bg-purple-600 hover:bg-purple-700',
      communication: 'bg-orange-600 hover:bg-orange-700',
      reports: 'bg-indigo-600 hover:bg-indigo-700',
      schedule: 'bg-pink-600 hover:bg-pink-700',
      resources: 'bg-teal-600 hover:bg-teal-700',
      attendance: 'bg-emerald-600 hover:bg-emerald-700',
      default: 'bg-gray-600 hover:bg-gray-700'
    }
    return colors[type] || colors.default
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <div key={index}>
            {action.type === 'link' ? (
              <Link
                to={action.path}
                className={`${getActionColor(action.actionType)} text-white py-3 px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center text-center hover:shadow-md hover:scale-105 transform`}
              >
                <span className="text-2xl mb-2">{getActionIcon(action.actionType)}</span>
                <span className="text-sm font-medium">{action.label}</span>
              </Link>
            ) : (
              <button
                onClick={action.onClick}
                className={`${getActionColor(action.actionType)} text-white py-3 px-4 rounded-lg transition-all duration-200 flex flex-col items-center justify-center text-center hover:shadow-md hover:scale-105 transform w-full`}
              >
                <span className="text-2xl mb-2">{getActionIcon(action.actionType)}</span>
                <span className="text-sm font-medium">{action.label}</span>
              </button>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Need help? Contact school administration
        </p>
      </div>
    </div>
  )
}

export default QuickActionsCard
