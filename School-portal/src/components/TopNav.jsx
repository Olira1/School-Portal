import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const TopNav = ({ onToggleSidebar, sidebarOpen = false, portalType = 'student' }) => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  
  const getContextInfo = () => {
    const d = new Date()
    const weekday = d.toLocaleDateString(undefined, { weekday: 'long' })
    
    if (portalType === 'parent') {
      return { 
        weekday, 
        childrenCount: 2, 
        parentName: 'Sarah Johnson',
        homePath: '/parent'
      }
    }
    
    // Default student context
    return { 
      weekday, 
      grade: 'Grade9B', 
      studentName: 'Emma',
      homePath: '/student'
    }
  }

  const { weekday, childrenCount, parentName, grade, studentName, homePath } = getContextInfo()

  return (
    <header
      className="flex items-center justify-between gap-4 px-4 sm:px-6 h-14 bg-white border-b border-slate-200 flex-shrink-0"
      role="navigation"
      aria-label="Top Navigation"
    >
      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 bg-white hover:bg-slate-50 md:hidden"
          aria-label="Open menu"
          aria-expanded={sidebarOpen}
          onClick={onToggleSidebar}
          title="Menu"
        >
          ☰
        </button>
        <Link
          to={homePath}
          className="text-slate-700 hover:text-slate-900 no-underline"
          aria-label="Go to Home"
        >
          🏠 Home
        </Link>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2" aria-label={portalType === 'parent' ? 'Parent context' : 'Student context'}>
        {portalType === 'parent' ? (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              title="Parent Name"
            >
              👨‍👩‍👧‍👦 {parentName}
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              title="Today"
            >
              📅 {weekday}
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              title="Children Count"
            >
              👶 {childrenCount} Children
            </span>
          </>
        ) : (
          <>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              title="Student Name"
            >
              👤 {studentName}
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              title="Today"
            >
              📅 {weekday}
            </span>
            <span
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
              title="Current Grade"
            >
              🎓 {grade}
            </span>
          </>
        )}
        <button
          onClick={() => {
            logout()
            navigate('/auth/login')
          }}
          className="ml-2 inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800"
          aria-label="Log out"
        >
          ⎋ Logout
        </button>
      </div>
    </header>
  )
}

export default TopNav
