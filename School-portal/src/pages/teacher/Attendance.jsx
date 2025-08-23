import React from 'react'
import Card from '../../components/Card'

const TeacherAttendance = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Attendance Management</h1>
      <Card title="Attendance Tools">
        <p className="text-gray-600">This page will provide tools for taking and managing student attendance.</p>
      </Card>
    </div>
  )
}

export default TeacherAttendance
