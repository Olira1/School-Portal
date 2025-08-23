import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Layouts
import PublicLayout from '../layouts/PublicLayout'
import StudentLayout from '../layouts/StudentLayout'
import ParentLayout from '../layouts/ParentLayout'
import TeacherLayout from '../layouts/TeacherLayout'
import SchoolHeadLayout from '../layouts/SchoolHeadLayout'
import AdminLayout from '../layouts/AdminLayout'

// Public Pages
import LandingPage from '../pages/public/LandingPage'
import About from '../pages/public/About'

// Authentication Pages
import Login from '../pages/auth/Login'

// Student Pages
import StudentHome from '../pages/student/Home'
import StudentGrades from '../pages/student/Grades'
import StudentAssignments from '../pages/student/Assignments'
import StudentResources from '../pages/student/Resources'
import StudentSchedule from '../pages/student/Schedule'
import StudentReports from '../pages/student/Reports'

// Parent Pages
import ParentHome from '../pages/parent/Home'
import ParentGrades from '../pages/parent/Grades'
import ParentAssignments from '../pages/parent/Assignments'
import ParentBalance from '../pages/parent/Balance'
import ParentReports from '../pages/parent/Reports'
import ParentCommunication from '../pages/parent/Communication'

// Teacher Pages
import TeacherDashboard from '../pages/teacher/Dashboard'
import TeacherAssignments from '../pages/teacher/Assignments'
import TeacherAttendance from '../pages/teacher/Attendance'
import TeacherGrades from '../pages/teacher/Grades'
import TeacherResources from '../pages/teacher/Resources'

// School Head Pages
import SchoolHeadDashboard from '../pages/schoolhead/Dashboard'
import SchoolHeadReports from '../pages/schoolhead/Reports'
import SchoolHeadNotifications from '../pages/schoolhead/Notifications'
import SchoolHeadActivityLog from '../pages/schoolhead/ActivityLog'

// Admin Pages
import AdminDashboard from '../pages/admin/Dashboard'
import AdminSIS from '../pages/admin/SIS'
import AdminFeeManagement from '../pages/admin/FeeManagement'
import AdminAttendance from '../pages/admin/Attendance'
import AdminReports from '../pages/admin/Reports'
import AdminActivityLog from '../pages/admin/ActivityLog'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* Authentication Routes */}
      <Route path="/auth" element={<PublicLayout />}>
        <Route path="login" element={<Login />} />
      </Route>

      {/* Student Routes */}
      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentHome />} />
        <Route path="grades" element={<StudentGrades />} />
        <Route path="assignments" element={<StudentAssignments />} />
        <Route path="resources" element={<StudentResources />} />
        <Route path="schedule" element={<StudentSchedule />} />
        <Route path="reports" element={<StudentReports />} />
      </Route>

      {/* Parent Routes */}
      <Route path="/parent" element={<ParentLayout />}>
        <Route index element={<ParentHome />} />
        <Route path="grades" element={<ParentGrades />} />
        <Route path="assignments" element={<ParentAssignments />} />
        <Route path="balance" element={<ParentBalance />} />
        <Route path="reports" element={<ParentReports />} />
        <Route path="communication" element={<ParentCommunication />} />
      </Route>

      {/* Teacher Routes */}
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherDashboard />} />
        <Route path="assignments" element={<TeacherAssignments />} />
        <Route path="attendance" element={<TeacherAttendance />} />
        <Route path="grades" element={<TeacherGrades />} />
        <Route path="resources" element={<TeacherResources />} />
      </Route>

      {/* School Head Routes */}
      <Route path="/schoolhead" element={<SchoolHeadLayout />}>
        <Route index element={<SchoolHeadDashboard />} />
        <Route path="reports" element={<SchoolHeadReports />} />
        <Route path="notifications" element={<SchoolHeadNotifications />} />
        <Route path="activity-log" element={<SchoolHeadActivityLog />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="sis" element={<AdminSIS />} />
        <Route path="fee-management" element={<AdminFeeManagement />} />
        <Route path="attendance" element={<AdminAttendance />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="activity-log" element={<AdminActivityLog />} />
      </Route>

      {/* 404 Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
