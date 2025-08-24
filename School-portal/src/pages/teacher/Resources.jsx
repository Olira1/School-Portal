import React, { useState } from 'react'

const TeacherResources = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showUploadForm, setShowUploadForm] = useState(false)

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: 'math10a', name: 'Mathematics 10A' },
    { id: 'math10b', name: 'Mathematics 10B' },
    { id: 'advcalc', name: 'Advanced Calculus' },
    { id: 'algebra', name: 'Algebra II' },
  ]

  const resourceTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'lecture', name: 'Lecture Notes' },
    { id: 'practice', name: 'Practice Exercises' },
    { id: 'video', name: 'Video Tutorials' },
    { id: 'reference', name: 'Reference Materials' },
  ]

  const resources = [
    {
      id: 1,
      title: 'Derivatives Lecture Notes',
      type: 'lecture',
      class: 'Advanced Calculus',
      subject: 'Mathematics',
      teacher: 'Mr. Johnson',
      date: '2024-04-01',
      size: '2.4 MB',
      downloads: 45,
      description:
        'Comprehensive notes covering derivative rules and applications',
    },
    {
      id: 2,
      title: 'Integration Practice Problems',
      type: 'practice',
      class: 'Advanced Calculus',
      subject: 'Mathematics',
      teacher: 'Mr. Johnson',
      date: '2024-04-02',
      size: '1.8 MB',
      downloads: 38,
      description: 'Set of practice problems with step-by-step solutions',
    },
    {
      id: 3,
      title: 'Algebra Fundamentals Video',
      type: 'video',
      class: 'Algebra II',
      subject: 'Mathematics',
      teacher: 'Mr. Johnson',
      date: '2024-04-03',
      size: '15.2 MB',
      downloads: 52,
      description: 'Video tutorial covering basic algebraic concepts',
    },
    {
      id: 4,
      title: 'Math Formula Sheet',
      type: 'reference',
      class: 'Mathematics 10A',
      subject: 'Mathematics',
      teacher: 'Mr. Johnson',
      date: '2024-04-04',
      size: '0.8 MB',
      downloads: 67,
      description: 'Quick reference sheet with common mathematical formulas',
    },
  ]

  const filteredResources = resources.filter((resource) => {
    const classMatch =
      selectedClass === 'all' ||
      resource.class === classes.find((c) => c.id === selectedClass)?.name
    const typeMatch = selectedType === 'all' || resource.type === selectedType
    const searchMatch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    return classMatch && typeMatch && searchMatch
  })

  const getTypeIcon = (type) => {
    switch (type) {
      case 'lecture':
        return '📝'
      case 'practice':
        return '📚'
      case 'video':
        return '🎥'
      case 'reference':
        return '📖'
      default:
        return '📄'
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-100 text-blue-800'
      case 'practice':
        return 'bg-green-100 text-green-800'
      case 'video':
        return 'bg-purple-100 text-purple-800'
      case 'reference':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-slate-100 text-slate-800'
    }
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Resources</h1>
          <p className="text-slate-600 mt-1">
            Upload and manage educational materials for your classes
          </p>
        </div>
        <button
          onClick={() => setShowUploadForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
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
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          Upload Resource
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {resourceTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Search
            </label>
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-end">
            <button className="w-full px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
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
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(resource.type)}`}
                >
                  {resourceTypes.find((t) => t.id === resource.type)?.name}
                </span>
              </div>

              <h3 className="font-semibold text-slate-800 mb-2 text-lg">
                {resource.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {resource.description}
              </p>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">📚</span>
                  <span className="text-slate-700">{resource.class}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">👨‍🏫</span>
                  <span className="text-slate-700">{resource.teacher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">📅</span>
                  <span className="text-slate-700">
                    {new Date(resource.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">💾</span>
                  <span className="text-slate-700">{resource.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">⬇️</span>
                  <span className="text-slate-700">
                    {resource.downloads} downloads
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">
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
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  Edit
                </button>
                <button className="px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-slate-200 transition-colors">
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
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

      {/* Upload Resource Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">
                  Upload New Resource
                </h2>
                <button
                  onClick={() => setShowUploadForm(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Resource Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter resource title"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Class
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select a class</option>
                      {classes.slice(1).map((cls) => (
                        <option key={cls.id} value={cls.id}>
                          {cls.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Type
                    </label>
                    <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select type</option>
                      {resourceTypes.slice(1).map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter resource description..."
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    File
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                    <svg
                      className="w-12 h-12 text-slate-400 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-slate-600 mb-2">
                      Drag and drop your file here, or click to browse
                    </p>
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Choose File
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowUploadForm(false)}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Upload Resource
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

export default TeacherResources
