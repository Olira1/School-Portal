import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const TopNav = ({
  onToggleSidebar,
  sidebarOpen = false,
  portalType = 'student',
}) => {
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
        homePath: '/parent',
      }
    }

    if (portalType === 'teacher') {
      return {
        weekday,
        classesCount: 4,
        teacherName: 'Mr. Johnson',
        homePath: '/teacher',
      }
    }

    // Default student context
    return {
      weekday,
      grade: 'Grade9B',
      studentName: 'Emma',
      homePath: '/student',
    }
  }

  const { weekday, childrenCount, parentName, grade, studentName, homePath, classesCount, teacherName } =
    getContextInfo()

  return (
    <header
      className="flex items-center justify-between gap-4 px-4 sm:px-6 h-16 bg-white border-b border-slate-200 flex-shrink-0 shadow-sm"
      role="navigation"
      aria-label="Top Navigation"
    >
      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm transition-all duration-200"
          aria-label="Open menu"
          aria-expanded={sidebarOpen}
          onClick={onToggleSidebar}
          title="Menu"
        >
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link
          to={homePath}
          className="text-slate-700 hover:text-slate-900 no-underline font-medium flex items-center gap-2"
          aria-label="Go to Home"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Link>
      </div>
      <div className="flex-1" />
      <div
        className="flex items-center gap-2"
        aria-label={
          portalType === 'parent' ? 'Parent context' : 
          portalType === 'teacher' ? 'Teacher context' : 'Student context'
        }
      >
        {portalType === 'parent' ? (
          <>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-50 text-purple-700 text-sm font-medium border border-purple-200"
              title="Parent Name"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {parentName}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200"
              title="Today"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {weekday}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-orange-50 text-orange-700 text-sm font-medium border border-orange-200"
              title="Children Count"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              {childrenCount} Children
            </span>
          </>
        ) : portalType === 'teacher' ? (
          <>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-200"
              title="Teacher Name"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {teacherName}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200"
              title="Today"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {weekday}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium border border-emerald-200"
              title="Classes Count"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {classesCount} Classes
            </span>
          </>
        ) : (
          <>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium border border-blue-200"
              title="Student Name"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {studentName}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-700 text-sm font-medium border border-red-200"
              title="Today"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {weekday}
            </span>
            <span
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-green-50 text-green-700 text-sm font-medium border border-green-200"
              title="Current Grade"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              {grade}
            </span>
          </>
        )}
        <button
          onClick={() => {
            logout()
            navigate('/auth/login')
          }}
          className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:shadow-md transition-all duration-200"
          aria-label="Log out"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </header>
  )
}

export default TopNav
