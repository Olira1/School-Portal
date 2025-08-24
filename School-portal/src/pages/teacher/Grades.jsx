import React, { useState } from 'react'

const TeacherGrades = () => {
  const [selectedClass, setSelectedClass] = useState('math10a')
  const [selectedAssignment, setSelectedAssignment] = useState('all')

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'math10a', name: 'Mathematics 10A', students: 25 },
    { id: 'math10b', name: 'Mathematics 10B', students: 23 },
    { id: 'advcalc', name: 'Advanced Calculus', students: 18 },
    { id: 'algebra', name: 'Algebra II', students: 28 }
  ]

  const assignments = [
    { id: 'all', name: 'All Assignments' },
    { id: 'quiz1', name: 'Quiz #1 - Derivatives', maxPoints: 50 },
    { id: 'hw1', name: 'Homework Set 1', maxPoints: 100 },
    { id: 'midterm', name: 'Midterm Exam', maxPoints: 150 }
  ]

  const students = [
    { id: 1, name: 'Alice Johnson', quiz1: 45, hw1: 92, midterm: 138, average: 91.7 },
    { id: 2, name: 'Bob Smith', quiz1: 38, hw1: 85, midterm: 125, average: 82.7 },
    { id: 3, name: 'Carol Davis', quiz1: 42, hw1: 88, midterm: 132, average: 87.3 },
    { id: 4, name: 'David Wilson', quiz1: 35, hw1: 78, midterm: 118, average: 77.0 },
    { id: 5, name: 'Eva Brown', quiz1: 48, hw1: 95, midterm: 145, average: 96.0 }
  ]

  const getGradeColor = (percentage) => {
    if (percentage >= 90) return 'text-green-600'
    if (percentage >= 80) return 'text-blue-600'
    if (percentage >= 70) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getGradeLetter = (percentage) => {
    if (percentage >= 90) return 'A'
    if (percentage >= 80) return 'B'
    if (percentage >= 70) return 'C'
    if (percentage >= 60) return 'D'
    return 'F'
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Grades</h1>
          <p className="text-slate-600 mt-1">Enter and manage student grades and assessments</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Create Assignment
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Export Grades
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>{cls.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Assignment</label>
            <select
              value={selectedAssignment}
              onChange={(e) => setSelectedAssignment(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {assignments.map((assignment) => (
                <option key={assignment.id} value={assignment.id}>{assignment.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Load Grades
            </button>
          </div>
        </div>
      </div>

      {/* Grade Summary */}
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
              <p className="text-2xl font-bold text-green-600">87.1%</p>
              <p className="text-slate-600 text-sm">Class Average</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-blue-600">96.0%</p>
              <p className="text-slate-600 text-sm">Highest Grade</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-yellow-600">77.0%</p>
              <p className="text-slate-600 text-sm">Lowest Grade</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grades Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-semibold text-slate-800">Student Grades</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Student Name</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Quiz #1</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Homework Set 1</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Midterm</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Average</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Grade</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
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
                      <span className="text-slate-600">{student.quiz1}/50</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-slate-600">{student.hw1}/100</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-slate-600">{student.midterm}/150</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`font-medium ${getGradeColor(student.average)}`}>
                        {student.average}%
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getGradeLetter(student.average) === 'A' ? 'bg-green-100 text-green-800' :
                        getGradeLetter(student.average) === 'B' ? 'bg-blue-100 text-blue-800' :
                        getGradeLetter(student.average) === 'C' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {getGradeLetter(student.average)}
                      </span>
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
  )
}

export default TeacherGrades
