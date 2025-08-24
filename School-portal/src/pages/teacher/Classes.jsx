import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Classes = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data - replace with actual API calls
  const classes = [
    {
      id: 'math10a',
      name: 'Mathematics 10A',
      subject: 'Mathematics',
      period: '1st Period (8:00-9:00)',
      room: 'Room 301',
      students: 25,
      grade: 'Grade 10',
      teacher: 'Mr. Johnson',
      schedule: 'Mon, Wed, Fri'
    },
    {
      id: 'math10b',
      name: 'Mathematics 10B',
      subject: 'Mathematics',
      period: '2nd Period (10:00-11:00)',
      room: 'Room 302',
      students: 23,
      grade: 'Grade 10',
      teacher: 'Mr. Johnson',
      schedule: 'Mon, Wed, Fri'
    },
    {
      id: 'advcalc',
      name: 'Advanced Calculus',
      subject: 'Mathematics',
      period: '3rd Period (14:00-15:30)',
      room: 'Lab 105',
      students: 18,
      grade: 'Grade 12',
      teacher: 'Mr. Johnson',
      schedule: 'Tue, Thu'
    },
    {
      id: 'algebra',
      name: 'Algebra II',
      subject: 'Mathematics',
      period: '4th Period (15:45-16:45)',
      room: 'Room 303',
      students: 28,
      grade: 'Grade 11',
      teacher: 'Mr. Johnson',
      schedule: 'Mon, Wed, Fri'
    }
  ]

  const studentRoster = [
    { id: 1, name: 'Alice Johnson', grade: 'A', attendance: '95%', lastActive: '2 days ago' },
    { id: 2, name: 'Bob Smith', grade: 'B+', attendance: '88%', lastActive: '1 day ago' },
    { id: 3, name: 'Carol Davis', grade: 'A-', attendance: '92%', lastActive: '3 days ago' },
    { id: 4, name: 'David Wilson', grade: 'B', attendance: '85%', lastActive: '1 week ago' },
    { id: 5, name: 'Eva Brown', grade: 'A+', attendance: '98%', lastActive: 'Today' }
  ]

  const filteredClasses = selectedClass === 'all' 
    ? classes 
    : classes.filter(cls => cls.id === selectedClass)

  const selectedClassData = classes.find(cls => cls.id === selectedClass)

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Classes & Subjects</h1>
          <p className="text-slate-600 mt-1">Manage your assigned classes and view student rosters</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Class
          </button>
        </div>
      </div>

      {/* Class Selection */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedClass === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
            }`}
          >
            All Classes
          </button>
          {classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setSelectedClass(cls.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedClass === cls.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 border border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cls.name}
            </button>
          ))}
        </div>
      </div>

      {/* Class Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {filteredClasses.map((cls) => (
          <div key={cls.id} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                Active
              </span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">{cls.name}</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>📍 {cls.room}</p>
              <p>⏰ {cls.period}</p>
              <p>👥 {cls.students} students</p>
              <p>📅 {cls.schedule}</p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                View Class
              </button>
              <button className="px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors">
                ⋮
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Class Details and Student Roster */}
      {selectedClass !== 'all' && selectedClassData && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Class Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200">
                <h2 className="text-xl font-semibold text-slate-800">Class Details</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-slate-600">Class Name</label>
                    <p className="text-slate-800 font-medium">{selectedClassData.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Subject</label>
                    <p className="text-slate-800">{selectedClassData.subject}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Schedule</label>
                    <p className="text-slate-800">{selectedClassData.schedule}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Room</label>
                    <p className="text-slate-800">{selectedClassData.room}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-600">Total Students</label>
                    <p className="text-slate-800">{selectedClassData.students}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Take Attendance
                  </button>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Assignment
                  </button>
                  <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    View Grades
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Student Roster */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="px-6 py-4 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-slate-800">Student Roster</h2>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors">
                      Export
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Student Name</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Current Grade</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Attendance</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Last Active</th>
                        <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentRoster.map((student) => (
                        <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-slate-600">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <span className="font-medium text-slate-800">{student.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              student.grade === 'A+' || student.grade === 'A' ? 'bg-green-100 text-green-800' :
                              student.grade === 'A-' || student.grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {student.grade}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-slate-600">{student.attendance}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="text-slate-500 text-sm">{student.lastActive}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1 text-slate-400 hover:text-blue-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                </svg>
                              </button>
                              <button className="p-1 text-slate-400 hover:text-green-600 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Classes
