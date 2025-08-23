import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Sidebar = ({ open = true, onNavigate, portalType = 'student' }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuth()

  // Navigation items based on portal type
  const getNavItems = () => {
    if (portalType === 'parent') {
      return [
        { path: '/parent', label: 'Home', icon: '🏠' },
        { path: '/parent/grades', label: 'Grades', icon: '📚' },
        { path: '/parent/assignments', label: 'Assignments', icon: '📝' },
        { path: '/parent/balance', label: 'Fee Balance', icon: '💰' },
        { path: '/parent/communication', label: 'Communication', icon: '💬' },
        { path: '/parent/reports', label: 'Reports', icon: '📑' },
      ]
    }

    // Default student navigation
    return [
      { path: '/student', label: 'Home', icon: '🏠' },
      { path: '/student/grades', label: 'Grades', icon: '📚' },
      { path: '/student/assignments', label: 'Assignments', icon: '📝' },
      { path: '/student/resources', label: 'Resources', icon: '📂' },
      { path: '/student/schedule', label: 'Schedule', icon: '📅' },
      { path: '/student/reports', label: 'Reports', icon: '📑' },
    ]
  }

  const navItems = getNavItems()

  const isActive = (path) => location.pathname === path

  const handleClick = () => {
    if (typeof onNavigate === 'function') onNavigate()
  }

  const handleLogout = () => {
    try {
      logout()
    } finally {
      navigate('/auth/login')
    }
  }

  const getPortalTitle = () => {
    return portalType === 'parent' ? 'Parent Portal' : 'Student Portal'
  }

  const getUserInfo = () => {
    if (portalType === 'parent') {
      return {
        name: 'Parent',
        role: 'Guardian',
        icon: '👨‍👩‍👧‍👦',
      }
    }

    return {
      name: 'Emma',
      role: 'Student',
      icon: '👤',
    }
  }

  const userInfo = getUserInfo()

  return (
    <aside
      className={`w-[280px] bg-white border-r border-slate-200 flex flex-col h-screen flex-shrink-0 transition-transform duration-200 ease-in-out z-50 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:z-auto`}
      aria-hidden={!open}
      aria-label="Sidebar navigation"
    >
      <div className="p-6 pb-6 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800 m-0">
          {getPortalTitle()}
        </h1>
      </div>

      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="list-none m-0 p-0 space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.path)
            return (
              <li key={item.path} className="m-0">
                <Link
                  to={item.path}
                  onClick={handleClick}
                  className={`flex items-center px-6 py-3 rounded-r-lg mr-4 no-underline transition-colors text-sm font-medium ${
                    active
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-slate-500 hover:bg-slate-100 hover:text-slate-600'
                  }`}
                >
                  <span className="text-xl mr-3 w-6 text-center">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-6 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-xl">
            {userInfo.icon}
          </div>
          <div className="flex-1">
            <div className="font-semibold text-slate-800 text-sm">
              {userInfo.name}
            </div>
            <div className="text-slate-500 text-xs uppercase tracking-wider">
              {userInfo.role}
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-red-200 text-red-700 hover:bg-red-50 text-sm font-medium"
          aria-label="Log out"
        >
          ⎋ Logout
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
