import React, { useState } from 'react'

const TeacherAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('math10a')
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  )
  const [attendanceData, setAttendanceData] = useState({})

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'math10a', name: 'Mathematics 10A', students: 25 },
    { id: 'math10b', name: 'Mathematics 10B', students: 23 },
    { id: 'advcalc', name: 'Advanced Calculus', students: 18 },
    { id: 'algebra', name: 'Algebra II', students: 28 },
  ]

  const students = [
    { id: 1, name: 'Alice Johnson', status: 'present' },
    { id: 2, name: 'Bob Smith', status: 'present' },
    { id: 3, name: 'Carol Davis', status: 'absent' },
    { id: 4, name: 'David Wilson', status: 'late' },
    { id: 5, name: 'Eva Brown', status: 'present' },
  ]

  const handleAttendanceChange = (studentId, status) => {
    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: status,
    }))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'absent':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'late':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200'
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'present':
        return 'Present'
      case 'absent':
        return 'Absent'
      case 'late':
        return 'Late'
      default:
        return 'Not Marked'
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Attendance</h1>
          <p className="text-slate-600 mt-1">
            Mark and review student attendance records
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <svg
              className="w-4 h-4 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Save Attendance
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Class
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg
                className="w-4 h-4 inline mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Load Class
            </button>
          </div>
        </div>
      </div>

      {/* Attendance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-slate-800">25</p>
              <p className="text-slate-600 text-sm">Total Students</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-green-600">22</p>
              <p className="text-slate-600 text-sm">Present</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-red-600">2</p>
              <p className="text-slate-600 text-sm">Absent</p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">❌</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-yellow-600">1</p>
              <p className="text-slate-600 text-sm">Late</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800">
            Student Attendance
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-3">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-slate-600">
                      {student.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <span className="font-medium text-slate-800">
                    {student.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleAttendanceChange(student.id, 'present')
                    }
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                      (attendanceData[student.id] || student.status) ===
                      'present'
                        ? 'bg-green-100 text-green-800 border-green-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-green-50'
                    }`}
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleAttendanceChange(student.id, 'absent')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                      (attendanceData[student.id] || student.status) ===
                      'absent'
                        ? 'bg-red-100 text-red-800 border-red-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-red-50'
                    }`}
                  >
                    Absent
                  </button>
                  <button
                    onClick={() => handleAttendanceChange(student.id, 'late')}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                      (attendanceData[student.id] || student.status) === 'late'
                        ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                        : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-yellow-50'
                    }`}
                  >
                    Late
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherAttendance
