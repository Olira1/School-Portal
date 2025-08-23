import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = ({ userRole, userName }) => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const getNavItems = () => {
    if (!isAuthenticated) {
      return [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/auth/login', label: 'Login' }
      ]
    }

    switch (userRole) {
      case 'student':
        return [
          { to: '/student', label: 'Home' },
          { to: '/student/grades', label: 'Grades' },
          { to: '/student/assignments', label: 'Assignments' },
          { to: '/student/resources', label: 'Resources' },
          { to: '/student/schedule', label: 'Schedule' },
          { to: '/student/reports', label: 'Reports' }
        ]
      case 'parent':
        return [
          { to: '/parent', label: 'Home' },
          { to: '/parent/grades', label: 'Grades' },
          { to: '/parent/assignments', label: 'Assignments' },
          { to: '/parent/balance', label: 'Balance' },
          { to: '/parent/reports', label: 'Reports' },
          { to: '/parent/communication', label: 'Communication' }
        ]
      case 'teacher':
        return [
          { to: '/teacher', label: 'Dashboard' },
          { to: '/teacher/assignments', label: 'Assignments' },
          { to: '/teacher/attendance', label: 'Attendance' },
          { to: '/teacher/grades', label: 'Grades' },
          { to: '/teacher/resources', label: 'Resources' }
        ]
      case 'schoolhead':
        return [
          { to: '/schoolhead', label: 'Dashboard' },
          { to: '/schoolhead/reports', label: 'Reports' },
          { to: '/schoolhead/notifications', label: 'Notifications' },
          { to: '/schoolhead/activity-log', label: 'Activity Log' }
        ]
      case 'admin':
        return [
          { to: '/admin', label: 'Dashboard' },
          { to: '/admin/sis', label: 'SIS' },
          { to: '/admin/fee-management', label: 'Fee Management' },
          { to: '/admin/attendance', label: 'Attendance' },
          { to: '/admin/reports', label: 'Reports' },
          { to: '/admin/activity-log', label: 'Activity Log' }
        ]
      default:
        return []
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              School Portal
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {getNavItems().map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm">Welcome, {userName}</span>
                <button 
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth/login"
                className="px-3 py-2 rounded-md text-sm font-medium bg-white text-blue-600 hover:bg-gray-100 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
