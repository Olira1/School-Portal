import React from 'react'
import Card from '../../components/Card'

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '1,250', change: '+12%', color: 'blue' },
    { label: 'Total Teachers', value: '85', change: '+5%', color: 'green' },
    { label: 'Total Classes', value: '45', change: '+8%', color: 'purple' },
    { label: 'Attendance Rate', value: '94%', change: '+2%', color: 'orange' }
  ]

  const recentActivities = [
    { type: 'New Student Registration', user: 'John Doe', time: '2 hours ago', status: 'Completed' },
    { type: 'Fee Payment', user: 'Parent Smith', time: '4 hours ago', status: 'Completed' },
    { type: 'Grade Update', user: 'Teacher Johnson', time: '6 hours ago', status: 'Completed' },
    { type: 'System Maintenance', user: 'Admin', time: '1 day ago', status: 'Scheduled' }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-600',
      green: 'bg-green-50 text-green-600',
      purple: 'bg-purple-50 text-purple-600',
      orange: 'bg-orange-50 text-orange-600'
    }
    return colors[color] || 'bg-gray-50 text-gray-600'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className={getColorClasses(stat.color)}>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm mb-1">{stat.label}</div>
              <div className="text-xs font-medium">{stat.change}</div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="System Overview">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Database Status</span>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Healthy</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Server Load</span>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Normal</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Backup Status</span>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Up to Date</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium">Security Status</span>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Secure</span>
            </div>
          </div>
        </Card>
        
        <Card title="Recent Activities">
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p className="text-sm text-gray-600">{activity.user}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">{activity.time}</p>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {activity.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card title="Quick Actions">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Manage Users
            </button>
            <button className="bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors">
              System Settings
            </button>
            <button className="bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Generate Reports
            </button>
            <button className="bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors">
              Backup System
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboard
