import React, { useState } from 'react'

const TeacherAssignments = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: 'math10a', name: 'Mathematics 10A' },
    { id: 'math10b', name: 'Mathematics 10B' },
    { id: 'advcalc', name: 'Advanced Calculus' },
    { id: 'algebra', name: 'Algebra II' }
  ]

  const assignments = [
    {
      id: 1,
      title: 'Calculus Quiz #3',
      subject: 'Advanced Calculus',
      class: 'Advanced Calculus',
      dueDate: '2024-04-15',
      maxPoints: 50,
      status: 'published',
      submissions: 12,
      totalStudents: 18,
      description: 'Quiz covering derivatives and applications',
      createdAt: '2024-04-01'
    },
    {
      id: 2,
      title: 'Algebra Homework Set 5',
      subject: 'Mathematics',
      class: 'Mathematics 10A',
      dueDate: '2024-04-20',
      maxPoints: 100,
      status: 'published',
      submissions: 8,
      totalStudents: 25,
      description: 'Complete problems 1-20 in Chapter 5',
      createdAt: '2024-04-03'
    },
    {
      id: 3,
      title: 'Integration Practice',
      subject: 'Mathematics',
      class: 'Advanced Calculus',
      dueDate: '2024-04-25',
      maxPoints: 75,
      status: 'draft',
      submissions: 0,
      totalStudents: 18,
      description: 'Practice problems on integration techniques',
      createdAt: '2024-04-05'
    }
  ]

  const filteredAssignments = assignments.filter(assignment => {
    const classMatch = selectedClass === 'all' || assignment.class === classes.find(c => c.id === selectedClass)?.name
    const statusMatch = selectedStatus === 'all' || assignment.status === selectedStatus
    const searchMatch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       assignment.description.toLowerCase().includes(searchTerm.toLowerCase())
    return classMatch && statusMatch && searchMatch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-yellow-100 text-yellow-800'
      case 'archived': return 'bg-gray-100 text-gray-800'
      default: return 'bg-slate-100 text-slate-800'
    }
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case 'published': return 'Published'
      case 'draft': return 'Draft'
      case 'archived': return 'Archived'
      default: return 'Unknown'
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Assignments</h1>
          <p className="text-slate-600 mt-1">Create, manage, and track student assignments</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Assignment
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
            <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search assignments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAssignments.map((assignment) => (
          <div key={assignment.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(assignment.status)}`}>
                  {getStatusLabel(assignment.status)}
                </span>
              </div>
              
              <h3 className="font-semibold text-slate-800 mb-2 text-lg">{assignment.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{assignment.description}</p>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">📚</span>
                  <span className="text-slate-700">{assignment.class}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">📅</span>
                  <span className="text-slate-700">Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">🎯</span>
                  <span className="text-slate-700">{assignment.maxPoints} points</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">👥</span>
                  <span className="text-slate-700">{assignment.submissions}/{assignment.totalStudents} submitted</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>Submissions</span>
                  <span>{Math.round((assignment.submissions / assignment.totalStudents) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(assignment.submissions / assignment.totalStudents) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
                  View Submissions
                </button>
                <button className="px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors">
                  ⋮
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Assignment Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">Create New Assignment</h2>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Assignment Title</label>
                  <input
                    type="text"
                    placeholder="Enter assignment title"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Class</label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select a class</option>
                    {classes.slice(1).map((cls) => (
                      <option key={cls.id} value={cls.id}>{cls.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Due Date</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Max Points</label>
                    <input
                      type="number"
                      placeholder="100"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <textarea
                    rows={4}
                    placeholder="Enter assignment description..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Publish Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeacherAssignments
