import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StatCard from '../../components/StatCard'
import StudentProfileCard from '../../components/StudentProfileCard'
import NotificationCard from '../../components/NotificationCard'
import QuickActionsCard from '../../components/QuickActionsCard'
import Card from '../../components/Card'

const ParentHome = () => {
  const [notifications, setNotifications] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [activeSection, setActiveSection] = useState('overview')

  // Mock data - in real app, this would come from API calls
  const children = [
    {
      id: 1,
      name: 'Emma Johnson',
      grade: '10th Grade',
      school: 'Lincoln High School',
      gpa: 3.8,
      attendance: 96,
      upcomingAssignments: 3,
      recentGrades: 2,
      status: 'Active'
    },
    {
      id: 2,
      name: 'Lucas Johnson',
      grade: '8th Grade',
      school: 'Lincoln Middle School',
      gpa: 3.6,
      attendance: 92,
      upcomingAssignments: 5,
      recentGrades: 1,
      status: 'Active'
    }
  ]

  const mockNotifications = [
    {
      id: 1,
      title: 'New Assignment Posted',
      message: 'Mathematics assignment #15 has been posted for Emma. Due date: Friday, Dec 15',
      priority: 'medium',
      category: 'Assignment',
      student: 'Emma Johnson',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      isRead: false
    },
    {
      id: 2,
      title: 'Grade Update',
      message: 'Emma received an A- in Science. Check the detailed feedback.',
      priority: 'low',
      category: 'Grade',
      student: 'Emma Johnson',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      isRead: false
    },
    {
      id: 3,
      title: 'Attendance Alert',
      message: 'Lucas was absent yesterday. Please provide a note if applicable.',
      priority: 'high',
      category: 'Attendance',
      student: 'Lucas Johnson',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      isRead: true
    },
    {
      id: 4,
      title: 'School Event Reminder',
      message: 'Parent-Teacher Conference scheduled for next week. Check your email for details.',
      priority: 'medium',
      category: 'Event',
      student: null,
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      isRead: true
    }
  ]

  const quickActions = [
    { type: 'link', path: '/parent/grades', label: 'View Grades', actionType: 'grades' },
    { type: 'link', path: '/parent/assignments', label: 'Assignments', actionType: 'assignments' },
    { type: 'link', path: '/parent/balance', label: 'Fee Balance', actionType: 'balance' },
    { type: 'link', path: '/parent/communication', label: 'Messages', actionType: 'communication' },
    { type: 'link', path: '/parent/reports', label: 'Reports', actionType: 'reports' },
    { type: 'button', onClick: () => window.open('mailto:admin@school.com'), label: 'Contact Admin', actionType: 'communication' }
  ]

  useEffect(() => {
    setNotifications(mockNotifications)
  }, [])

  const handleMarkAsRead = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, isRead: true }
          : notif
      )
    )
  }

  const handleViewProfile = (studentId) => {
    const student = children.find(child => child.id === studentId)
    setSelectedStudent(student)
    // In real app, this would navigate to a detailed student profile page
    console.log('Viewing profile for:', student)
  }

  const totalGPA = children.reduce((sum, child) => sum + child.gpa, 0) / children.length
  const totalAttendance = children.reduce((sum, child) => sum + child.attendance, 0) / children.length
  const totalAssignments = children.reduce((sum, child) => sum + child.upcomingAssignments, 0)
  const unreadNotifications = notifications.filter(n => !n.isRead).length

  const navigationSections = [
    {
      id: 'overview',
      label: 'Overview',
      icon: '📊',
      color: 'blue',
      description: 'Quick stats and summary'
    },
    {
      id: 'children',
      label: 'Your Children',
      icon: '👶',
      color: 'green',
      description: 'Student profiles and progress'
    },
    {
      id: 'notifications',
      label: 'Notifications & Announcements',
      icon: '🔔',
      color: 'orange',
      description: 'Important updates and alerts'
    },
    {
      id: 'activities',
      label: 'Recent Activities',
      icon: '📅',
      color: 'purple',
      description: 'Timeline of recent events'
    },
    {
      id: 'fees',
      label: 'Fee Summary',
      icon: '💰',
      color: 'indigo',
      description: 'Financial overview and balances'
    }
  ]

  const renderSection = () => {
    switch (activeSection) {
      case 'children':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Your Children</h2>
              <Link
                to="/parent/reports"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All Reports →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {children.map((child) => (
                <StudentProfileCard
                  key={child.id}
                  student={child}
                  onViewProfile={handleViewProfile}
                />
              ))}
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Notifications & Announcements</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Mark All Read
              </button>
            </div>
            
            <div className="space-y-4">
              {notifications.map((notification) => (
                <NotificationCard
                  key={notification.id}
                  notification={notification}
                  onMarkAsRead={handleMarkAsRead}
                />
              ))}
            </div>
            
            {notifications.length === 0 && (
              <Card className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔔</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                <p className="text-gray-500">You're all caught up!</p>
              </Card>
            )}
          </div>
        )

      case 'activities':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
            <Card>
              <div className="space-y-4">
                {[
                  { time: '2 hours ago', activity: 'Emma submitted Math assignment #14', child: 'Emma' },
                  { time: '4 hours ago', activity: 'New grade posted for Lucas in Science', child: 'Lucas' },
                  { time: '1 day ago', activity: 'Attendance marked for both children', child: 'Both' },
                  { time: '2 days ago', activity: 'Parent-Teacher conference scheduled', child: 'Both' },
                  { time: '3 days ago', activity: 'Fee payment received for Emma', child: 'Emma' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{item.activity}</p>
                      <p className="text-xs text-gray-500">{item.child} • {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )

      case 'fees':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Fee Summary</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Fee Overview" className="bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="space-y-4">
                  {children.map((child) => (
                    <div key={child.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200">
                      <div>
                        <p className="font-medium text-gray-900">{child.name}</p>
                        <p className="text-sm text-gray-600">{child.grade}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-purple-600">$0.00</p>
                        <p className="text-xs text-gray-500">Paid in full</p>
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/parent/balance"
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium"
                  >
                    View Detailed Balance
                  </Link>
                </div>
              </Card>
              
              <Card title="Payment History">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Tuition Fee - Emma</p>
                      <p className="text-sm text-gray-600">September 2024</p>
                    </div>
                    <span className="text-green-600 font-medium">$500.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Activity Fee - Lucas</p>
                      <p className="text-sm text-gray-600">August 2024</p>
                    </div>
                    <span className="text-green-600 font-medium">$150.00</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )

      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="Quick Summary">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Children:</span>
                    <span className="font-semibold">{children.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Average GPA:</span>
                    <span className="font-semibold">{totalGPA.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Total Assignments Due:</span>
                    <span className="font-semibold">{totalAssignments}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Unread Notifications:</span>
                    <span className="font-semibold">{unreadNotifications}</span>
                  </div>
                </div>
              </Card>
              
              <QuickActionsCard actions={quickActions} />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Welcome back, Sarah! 👋
        </h1>
        <p className="text-lg text-gray-600">
          Here's what's happening with your children today
        </p>
      </div>

      {/* Quick Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Average GPA"
          value={totalGPA.toFixed(1)}
          subtitle="Across all children"
          icon="📊"
          color="blue"
          trend={2.1}
        />
        <StatCard
          title="Average Attendance"
          value={`${totalAttendance.toFixed(1)}%`}
          subtitle="This month"
          icon="✅"
          color="green"
          trend={-0.5}
        />
        <StatCard
          title="Upcoming Assignments"
          value={totalAssignments}
          subtitle="Due this week"
          icon="📝"
          color="purple"
        />
        <StatCard
          title="New Notifications"
          value={unreadNotifications}
          subtitle="Unread messages"
          icon="🔔"
          color="orange"
        />
      </div>

      {/* Navigation Sections */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                activeSection === section.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <div className="text-left">
                <div className="font-medium">{section.label}</div>
                <div className="text-xs text-gray-500">{section.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        {renderSection()}
      </div>
    </div>
  )
}

export default ParentHome
