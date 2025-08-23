import React from 'react'
import { Link } from 'react-router-dom'

const StudentProfileCard = ({ student, onViewProfile }) => {
  const getGradeColor = (grade) => {
    if (grade >= 90) return 'text-green-600 bg-green-100'
    if (grade >= 80) return 'text-blue-600 bg-blue-100'
    if (grade >= 70) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getAttendanceColor = (attendance) => {
    if (attendance >= 95) return 'text-green-600 bg-green-100'
    if (attendance >= 90) return 'text-blue-600 bg-blue-100'
    if (attendance >= 85) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-lg font-semibold">
            {student.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
            <p className="text-sm text-gray-600">{student.grade} • {student.school}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {student.status || 'Active'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">GPA</p>
          <p className={`text-lg font-bold ${getGradeColor(student.gpa)} px-2 py-1 rounded-lg`}>
            {student.gpa}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Attendance</p>
          <p className={`text-lg font-bold ${getAttendanceColor(student.attendance)} px-2 py-1 rounded-lg`}>
            {student.attendance}%
          </p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Upcoming Assignments:</span>
          <span className="font-medium text-gray-900">{student.upcomingAssignments}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Recent Grades:</span>
          <span className="font-medium text-gray-900">{student.recentGrades}</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => onViewProfile(student.id)}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Progress
        </button>
        <Link
          to={`/parent/balance?student=${student.id}`}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium text-center"
        >
          Fee Balance
        </Link>
      </div>
    </div>
  )
}

export default StudentProfileCard
