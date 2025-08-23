import React from 'react'
import Card from '../../components/Card'

const ParentHome = () => {
  const children = [
    { name: 'John Smith', grade: '10th Grade', school: 'High School' },
    { name: 'Sarah Smith', grade: '8th Grade', school: 'Middle School' }
  ]

  const recentActivities = [
    { child: 'John Smith', activity: 'Grade updated in Mathematics', time: '2 hours ago' },
    { child: 'Sarah Smith', activity: 'New assignment posted', time: '4 hours ago' },
    { child: 'John Smith', activity: 'Attendance marked', time: '1 day ago' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome, Parent!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="My Children" className="bg-blue-50">
          <div className="space-y-4">
            {children.map((child, index) => (
              <div key={index} className="border border-blue-200 rounded-lg p-3 bg-white">
                <h3 className="font-medium text-gray-900">{child.name}</h3>
                <p className="text-sm text-gray-600">{child.grade}</p>
                <p className="text-sm text-gray-600">{child.school}</p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 px-3 rounded-md hover:bg-blue-700 transition-colors text-sm">
                  View Progress
                </button>
              </div>
            ))}
          </div>
        </Card>
        
        <Card title="Recent Activities" className="bg-green-50">
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.child}</p>
                  <p className="text-sm text-gray-600">{activity.activity}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card title="Quick Actions" className="bg-purple-50">
          <div className="space-y-3">
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              View Grades
            </button>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Check Balance
            </button>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Contact Teachers
            </button>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
              View Reports
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ParentHome
