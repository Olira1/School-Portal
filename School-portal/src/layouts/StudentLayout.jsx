import React, { useState, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/TopNav'
import Sidebar from '../components/Sidebar'

const StudentLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev)
  }, [])

  const handleNavigateFromSidebar = useCallback(() => {
    // Close sidebar on small screens after navigation
    setSidebarOpen(false)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav onToggleSidebar={handleToggleSidebar} sidebarOpen={sidebarOpen} />
      <div className="flex">
        <Sidebar open={sidebarOpen} onNavigate={handleNavigateFromSidebar} />
        <main className="flex-1 p-4 md:p-6 md:ml-0 ml-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default StudentLayout
