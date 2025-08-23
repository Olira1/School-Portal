import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

const ParentAssignments = () => {
  const [selectedChild, setSelectedChild] = useState(1)
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')

  // Mock data - in real app, this would come from API calls
  const children = [
    { id: 1, name: 'Emma Johnson', grade: '10th Grade', school: 'Lincoln High School' },
    { id: 2, name: 'Lucas Johnson', grade: '8th Grade', school: 'Lincoln Middle School' }
  ]

  const subjects = [
    { id: 'all', name: 'All Subjects', color: 'blue' },
    { id: 'math', name: 'Mathematics', color: 'red' },
    { id: 'science', name: 'Science', color: 'green' },
    { id: 'english', name: 'English Literature', color: 'purple' },
    { id: 'history', name: 'History', color: 'orange' },
    { id: 'art', name: 'Art & Design', color: 'pink' }
  ]

  const statuses = [
    { id: 'all', name: 'All Statuses', color: 'gray' },
    { id: 'not-started', name: 'Not Started', color: 'red' },
    { id: 'in-progress', name: 'In Progress', color: 'yellow' },
    { id: 'submitted', name: 'Submitted', color: 'blue' },
    { id: 'graded', name: 'Graded', color: 'green' }
  ]

  const assignments = [
    {
      id: 1,
      childId: 1,
      subject: 'Mathematics',
      title: 'Algebra Quiz #4',
      description: 'Complete problems 1-20 in Chapter 5. Focus on quadratic equations and factoring.',
      dueDate: '2024-12-20',
      assignedDate: '2024-12-10',
      status: 'not-started',
      type: 'Quiz',
      teacher: 'Ms. Sarah Wilson',
      resources: [
        { id: 1, name: 'Chapter 5 Notes', type: 'PDF', url: '#' },
        { id: 2, name: 'Practice Problems', type: 'Worksheet', url: '#' },
        { id: 3, name: 'Video Tutorial', type: 'Video', url: '#' }
      ],
      submission: null,
      grade: null
    },
    {
      id: 2,
      childId: 1,
      subject: 'Science',
      title: 'Chemistry Lab Report',
      description: 'Write a comprehensive report on the acid-base titration experiment conducted in class.',
      dueDate: '2024-12-18',
      assignedDate: '2024-12-08',
      status: 'in-progress',
      type: 'Lab Report',
      teacher: 'Dr. Michael Chen',
      resources: [
        { id: 4, name: 'Lab Procedure', type: 'PDF', url: '#' },
        { id: 5, name: 'Data Sheet', type: 'Excel', url: '#' },
        { id: 6, name: 'Writing Guidelines', type: 'PDF', url: '#' }
      ],
      submission: {
        id: 1,
        submittedAt: '2024-12-15',
        filePath: 'chemistry_report_draft.pdf',
        status: 'draft'
      },
      grade: null
    },
    {
      id: 3,
      childId: 1,
      subject: 'English Literature',
      title: 'Shakespeare Essay',
      description: 'Analyze the theme of ambition in Macbeth. 1000-1500 words with proper citations.',
      dueDate: '2024-12-15',
      assignedDate: '2024-12-05',
      status: 'graded',
      type: 'Essay',
      teacher: 'Mrs. Jennifer Davis',
      resources: [
        { id: 7, name: 'Macbeth Text', type: 'PDF', url: '#' },
        { id: 8, name: 'Essay Rubric', type: 'PDF', url: '#' },
        { id: 9, name: 'Citation Guide', type: 'PDF', url: '#' }
      ],
      submission: {
        id: 2,
        submittedAt: '2024-12-12',
        filePath: 'macbeth_essay_final.pdf',
        status: 'final'
      },
      grade: {
        score: 95,
        letterGrade: 'A',
        feedback: 'Excellent analysis with strong textual evidence. Well-structured argument.'
      }
    },
    {
      id: 4,
      childId: 2,
      subject: 'Mathematics',
      title: 'Geometry Test',
      description: 'Test covering chapters 3-4: Triangles, quadrilaterals, and area calculations.',
      dueDate: '2024-12-22',
      assignedDate: '2024-12-09',
      status: 'not-started',
      type: 'Test',
      teacher: 'Mr. Robert Smith',
      resources: [
        { id: 10, name: 'Study Guide', type: 'PDF', url: '#' },
        { id: 11, name: 'Practice Test', type: 'PDF', url: '#' },
        { id: 12, name: 'Formula Sheet', type: 'PDF', url: '#' }
      ],
      submission: null,
      grade: null
    },
    {
      id: 5,
      childId: 2,
      subject: 'Science',
      title: 'Biology Project',
      description: 'Create a presentation on an ecosystem of your choice. Include food chains and adaptations.',
      dueDate: '2024-12-25',
      assignedDate: '2024-12-07',
      status: 'submitted',
      type: 'Project',
      teacher: 'Dr. Lisa Thompson',
      resources: [
        { id: 13, name: 'Project Guidelines', type: 'PDF', url: '#' },
        { id: 14, name: 'Research Resources', type: 'Links', url: '#' },
        { id: 15, name: 'Presentation Template', type: 'PowerPoint', url: '#' }
      ],
      submission: {
        id: 3,
        submittedAt: '2024-12-20',
        filePath: 'ecosystem_presentation.pptx',
        status: 'final'
      },
      grade: null
    }
  ]

  const filteredAssignments = assignments.filter(assignment => {
    if (selectedChild && assignment.childId !== selectedChild) return false
    if (selectedStatus !== 'all' && assignment.status !== selectedStatus) return false
    if (selectedSubject !== 'all' && assignment.subject.toLowerCase() !== selectedSubject) return false
    return true
  })

  const getStatusColor = (status) => {
    const colors = {
      'not-started': 'bg-red-100 text-red-800 border-red-200',
      'in-progress': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'submitted': 'bg-blue-100 text-blue-800 border-blue-200',
      'graded': 'bg-green-100 text-green-800 border-green-200'
    }
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getStatusIcon = (status) => {
    const icons = {
      'not-started': '⏰',
      'in-progress': '🔄',
      'submitted': '📤',
      'graded': '✅'
    }
    return icons[status] || '❓'
  }

  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getUrgencyColor = (days) => {
    if (days < 0) return 'text-red-600'
    if (days <= 3) return 'text-orange-600'
    if (days <= 7) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getUrgencyText = (days) => {
    if (days < 0) return 'Overdue'
    if (days === 0) return 'Due today'
    if (days === 1) return 'Due tomorrow'
    if (days <= 7) return `Due in ${days} days`
    return `Due in ${days} days`
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assignments & Projects</h1>
        <p className="text-lg text-gray-600">Monitor your children's academic responsibilities and progress</p>
      </div>

      {/* Child Selection */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {children.map((child) => (
            <button
              key={child.id}
              onClick={() => setSelectedChild(child.id)}
              className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                selectedChild === child.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="text-left">
                <div className="font-medium">{child.name}</div>
                <div className="text-sm">{child.grade}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Subject</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedSubject === subject.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Status</h3>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <button
                key={status.id}
                onClick={() => setSelectedStatus(status.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedStatus === status.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Assignment Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statuses.slice(1).map((status) => {
          const count = assignments.filter(a => 
            a.childId === selectedChild && a.status === status.id
          ).length
          
          return (
            <Card key={status.id} className="text-center">
              <div className="text-3xl mb-2">{getStatusIcon(status.id)}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{count}</div>
              <div className="text-sm text-gray-600">{status.name}</div>
            </Card>
          )
        })}
      </div>

      {/* Assignments List */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
          <Link
            to="/parent/grades"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View Grades →
          </Link>
        </div>

        <div className="space-y-4">
          {filteredAssignments.map((assignment) => {
            const daysUntilDue = getDaysUntilDue(assignment.dueDate)
            
            return (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{assignment.title}</h4>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {assignment.type}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(assignment.status)}`}>
                        {getStatusIcon(assignment.status)} {assignment.status.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <span>📚 {assignment.subject}</span>
                      <span>👨‍🏫 {assignment.teacher}</span>
                      <span>📅 Assigned: {new Date(assignment.assignedDate).toLocaleDateString()}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{assignment.description}</p>

                    {/* Resources */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">📚 Available Resources:</h5>
                      <div className="flex flex-wrap gap-2">
                        {assignment.resources.map((resource) => (
                          <button
                            key={resource.id}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                          >
                            📎 {resource.name} ({resource.type})
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submission Status */}
                    {assignment.submission && (
                      <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">📤 Submission Details:</h5>
                        <div className="text-sm text-gray-600">
                          <p>Submitted: {new Date(assignment.submission.submittedAt).toLocaleDateString()}</p>
                          <p>File: {assignment.submission.filePath}</p>
                          <p>Status: {assignment.submission.status}</p>
                        </div>
                      </div>
                    )}

                    {/* Grade Information */}
                    {assignment.grade && (
                      <div className="mb-4 p-3 bg-green-50 rounded-lg">
                        <h5 className="text-sm font-medium text-gray-900 mb-2">📊 Grade:</h5>
                        <div className="text-sm text-gray-600">
                          <p>Score: {assignment.grade.score}%</p>
                          <p>Grade: {assignment.grade.letterGrade}</p>
                          <p>Feedback: {assignment.grade.feedback}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="ml-6 text-right">
                    <div className={`text-lg font-semibold px-3 py-2 rounded-lg ${getUrgencyColor(daysUntilDue)}`}>
                      {getUrgencyText(daysUntilDue)}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </div>
                    
                    {assignment.status === 'not-started' && daysUntilDue <= 3 && (
                      <div className="mt-3">
                        <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm">
                          ⚠️ Remind Child
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredAssignments.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later</p>
          </Card>
        )}
      </div>

      {/* Quick Actions and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Assignment Insights">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📅</span>
                <span className="text-sm font-medium text-gray-900">Upcoming Deadlines</span>
              </div>
              <span className="text-blue-600 font-semibold">
                {assignments.filter(a => a.childId === selectedChild && getDaysUntilDue(a.dueDate) <= 7).length}
              </span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm font-medium text-gray-900">Completed This Week</span>
              </div>
              <span className="text-green-600 font-semibold">
                {assignments.filter(a => a.childId === selectedChild && a.status === 'graded').length}
              </span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">🔄</span>
                <span className="text-sm font-medium text-gray-900">In Progress</span>
              </div>
              <span className="text-yellow-600 font-semibold">
                {assignments.filter(a => a.childId === selectedChild && a.status === 'in-progress').length}
              </span>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
              📧 Contact Teacher
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-center font-medium">
              📚 View Resources
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium">
              📅 Calendar View
            </button>
            <Link
              to="/parent/grades"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center font-medium block"
            >
              📊 Check Grades
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ParentAssignments
