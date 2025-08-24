import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TeacherHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  const greeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  // Mock data - replace with actual API calls
  const teacherStats = [
    { label: 'Active Classes', value: '4', icon: '👥', color: 'bg-blue-500', textColor: 'text-blue-600' },
    { label: 'Total Students', value: '127', icon: '👨‍🎓', color: 'bg-green-500', textColor: 'text-green-600' },
    { label: 'Pending Grades', value: '23', icon: '📊', color: 'bg-purple-500', textColor: 'text-purple-600' },
    { label: 'Attendance Rate', value: '94%', icon: '✅', color: 'bg-emerald-500', textColor: 'text-emerald-600' }
  ]

  const todaySchedule = [
    {
      time: '08:00 - 09:00',
      subject: 'Mathematics 10A',
      room: 'Room 301',
      students: 25,
      type: 'lecture'
    },
    {
      time: '10:00 - 11:00',
      subject: 'Mathematics 10B',
      room: 'Room 302',
      students: 23,
      type: 'lecture'
    },
    {
      time: '14:00 - 15:30',
      subject: 'Advanced Calculus',
      room: 'Lab 105',
      students: 18,
      type: 'lab'
    }
  ]

  const recentAssignments = [
    {
      id: 1,
      title: 'Calculus Quiz #3',
      subject: 'Advanced Calculus',
      dueDate: 'Tomorrow',
      submissions: 12,
      total: 18,
      status: 'active'
    },
    {
      id: 2,
      title: 'Algebra Homework Set 5',
      subject: 'Mathematics 10A',
      dueDate: 'Next Week',
      submissions: 8,
      total: 25,
      status: 'active'
    }
  ]

  const quickActions = [
    { label: 'Take Attendance', icon: '✅', path: '/teacher/attendance', color: 'bg-green-500 hover:bg-green-600' },
    { label: 'Create Assignment', icon: '📝', path: '/teacher/assignments', color: 'bg-blue-500 hover:bg-blue-600' },
    { label: 'Enter Grades', icon: '📊', path: '/teacher/grades', color: 'bg-purple-500 hover:bg-purple-600' },
    { label: 'Upload Resources', icon: '📂', path: '/teacher/resources', color: 'bg-orange-500 hover:bg-orange-600' }
  ]

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'lecture': return '📚'
      case 'lab': return '🧪'
      default: return '📅'
    }
  }

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'lecture': return 'bg-blue-100 text-blue-800'
      case 'lab': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{greeting()}, Mr. Johnson</h1>
          <p className="text-slate-600 mt-1">
            {currentTime.toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all duration-200">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all duration-200">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {teacherStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white text-xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Today's Schedule */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800">Today's Schedule</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {todaySchedule.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                    <div className="text-center min-w-[80px]">
                      <div className="text-sm font-medium text-slate-600">{item.time}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(item.type)}`}>
                      {getEventTypeIcon(item.type)} {item.type}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800">{item.subject}</h3>
                      <p className="text-sm text-slate-600">📍 {item.room} • 👥 {item.students} students</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                      View Class
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Assignments */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800">Quick Actions</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.path}
                    className={`${action.color} text-white p-4 rounded-lg text-center transition-all duration-200 hover:shadow-md`}
                  >
                    <div className="text-2xl mb-2">{action.icon}</div>
                    <div className="text-sm font-medium">{action.label}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Assignments */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <div className="px-6 py-4 border-b border-slate-200">
              <h2 className="text-xl font-semibold text-slate-800">Recent Assignments</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                    <h3 className="font-medium text-slate-800 mb-2">{assignment.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{assignment.subject}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500">Due: {assignment.dueDate}</span>
                      <span className="text-slate-600">
                        {assignment.submissions}/{assignment.total} submitted
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherHome
