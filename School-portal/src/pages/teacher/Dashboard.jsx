import React from 'react'
import Card from '../../components/Card'

const TeacherDashboard = () => {
  const classes = [
    { name: 'Mathematics 10A', students: 25, period: '1st Period', room: 'Room 101' },
    { name: 'Mathematics 10B', students: 23, period: '2nd Period', room: 'Room 102' },
    { name: 'Advanced Math', students: 18, period: '3rd Period', room: 'Room 103' }
  ]

  const recentActivities = [
    { type: 'Grade Updated', class: 'Mathematics 10A', student: 'John Smith', time: '2 hours ago' },
    { type: 'Assignment Posted', class: 'Mathematics 10B', student: 'All Students', time: '4 hours ago' },
    { type: 'Attendance Marked', class: 'Advanced Math', student: 'All Students', time: '1 day ago' }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-blue-50">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">3</div>
            <div className="text-sm text-gray-600">Active Classes</div>
          </div>
        </Card>
        
        <Card className="bg-green-50">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">66</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </div>
        </Card>
        
        <Card className="bg-purple-50">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Pending Assignments</div>
          </div>
        </Card>
        
        <Card className="bg-orange-50">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">95%</div>
            <div className="text-sm text-gray-600">Attendance Rate</div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="My Classes">
          <div className="space-y-4">
            {classes.map((classItem, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{classItem.name}</h3>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                  <div>
                    <span className="font-medium">Students:</span> {classItem.students}
                  </div>
                  <div>
                    <span className="font-medium">Period:</span> {classItem.period}
                  </div>
                  <div>
                    <span className="font-medium">Room:</span> {classItem.room}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                    View Class
                  </button>
                  <button className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                    Take Attendance
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card title="Recent Activities">
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p className="text-sm text-gray-600">{activity.class}</p>
                  <p className="text-xs text-gray-500">{activity.student} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default TeacherDashboard
