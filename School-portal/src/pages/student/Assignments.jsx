import React, { useState } from 'react'

const Assignments = () => {
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedFile, setSelectedFile] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: 'math', name: 'Mathematics' },
    { id: 'english', name: 'English Literature' },
    { id: 'history', name: 'World History' },
    { id: 'science', name: 'Biology' },
  ]

  const assignmentsData = [
    {
      id: 1,
      title: 'Homework 2',
      subject: 'Mathematics',
      dueDate: 'Apr 10',
      status: 'incomplete',
      description: 'Complete problems 1-20 in Chapter 5',
      maxPoints: 100,
      submitted: false,
    },
    {
      id: 2,
      title: 'Essay 3',
      subject: 'English Literature',
      dueDate: 'Apr 3',
      status: 'complete',
      description: "Write a 5-page essay on Shakespeare's themes",
      maxPoints: 150,
      submitted: true,
    },
    {
      id: 3,
      title: 'Lab Report',
      subject: 'Biology',
      dueDate: 'Mar 27',
      status: 'submitted',
      description: 'Complete lab report for photosynthesis experiment',
      maxPoints: 80,
      submitted: true,
    },
    {
      id: 4,
      title: 'Homework 1',
      subject: 'Mathematics',
      dueDate: 'Mar 15',
      status: 'submitted',
      description: 'Algebra problems from textbook',
      maxPoints: 100,
      submitted: true,
    },
  ]

  const filteredAssignments =
    selectedClass === 'all'
      ? assignmentsData
      : assignmentsData.filter((assignment) =>
          assignment.subject.toLowerCase().includes(selectedClass)
        )

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleSubmit = async (assignmentId) => {
    if (!selectedFile) {
      alert('Please select a file to submit')
      return
    }

    setSubmitting(true)

    // Simulate API call to Submission table
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update local state to show submission
      const updatedAssignments = assignmentsData.map((assignment) =>
        assignment.id === assignmentId
          ? { ...assignment, status: 'submitted', submitted: true }
          : assignment
      )

      // In real app, this would update the database
      console.log(
        'File submitted:',
        selectedFile.name,
        'for assignment:',
        assignmentId
      )

      setSelectedFile(null)
      alert('Assignment submitted successfully!')
    } catch (error) {
      alert('Error submitting assignment. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const getStatusBadge = (status) => {
    const statusConfig = {
      incomplete: { label: 'Incomplete', className: 'status-incomplete' },
      complete: { label: 'Complete', className: 'status-complete' },
      submitted: { label: 'Submitted', className: 'status-submitted' },
    }

    const config = statusConfig[status] || statusConfig.incomplete
    return <span className={`status ${config.className}`}>{config.label}</span>
  }

  return (
    <div className="assignments">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-slate-800 m-0">
          Assignments
        </h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">📝</button>
        </div>
      </div>

      {/* Class Selection */}
      <div className="mb-8 max-w-xs">
        <div className="form-group">
          <label htmlFor="class-select" className="form-label">
            Select Class
          </label>
          <select
            id="class-select"
            className="form-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Assignments List */}
      <div className="mb-8">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Current Assignments</h3>
          </div>

          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            }}
          >
            {filteredAssignments.map((assignment) => (
              <div
                key={assignment.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-slate-800 m-0">
                    {assignment.title}
                  </h4>
                  {getStatusBadge(assignment.status)}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-500 uppercase font-medium">
                      Subject:
                    </span>
                    <span className="text-sm text-slate-800 font-medium">
                      {assignment.subject}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-500 uppercase font-medium">
                      Due Date:
                    </span>
                    <span className="text-sm text-slate-800 font-medium">
                      {assignment.dueDate}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-500 uppercase font-medium">
                      Points:
                    </span>
                    <span className="text-sm text-slate-800 font-medium">
                      {assignment.maxPoints}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-slate-600 leading-relaxed mb-6 p-4 bg-slate-50 rounded-md border-l-4 border-blue-500">
                  {assignment.description}
                </div>

                {!assignment.submitted && (
                  <div className="flex flex-col gap-4 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        id={`file-${assignment.id}`}
                        onChange={handleFileSelect}
                        accept=".pdf,.doc,.docx,.txt"
                        className="hidden"
                      />
                      <label
                        htmlFor={`file-${assignment.id}`}
                        className="px-3 py-2 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer text-sm"
                      >
                        📎 Choose File
                      </label>
                      {selectedFile && (
                        <span className="text-sm text-emerald-600 font-medium">
                          {selectedFile.name}
                        </span>
                      )}
                    </div>

                    <button
                      className="btn btn-success"
                      onClick={() => handleSubmit(assignment.id)}
                      disabled={!selectedFile || submitting}
                    >
                      {submitting ? 'Submitting...' : 'Submit Assignment'}
                    </button>
                  </div>
                )}

                {assignment.submitted && (
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="status status-submitted">Submitted</span>
                    <span className="text-sm text-slate-500">
                      Submitted on {assignment.dueDate}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* To-Do List */}
      <div className="mb-8">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">To-Do List</h3>
          </div>

          <div className="flex flex-col gap-3 p-4">
            {filteredAssignments
              .filter((assignment) => !assignment.submitted)
              .map((assignment) => (
                <label
                  key={assignment.id}
                  htmlFor={`todo-${assignment.id}`}
                  className="flex items-center gap-3 p-3 border border-slate-200 rounded-md bg-slate-50 hover:bg-white hover:border-slate-300 transition cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`todo-${assignment.id}`}
                    className="w-4 h-4 accent-blue-600"
                  />
                  <span className="flex-1">
                    <span className="block font-medium text-sm text-slate-800">
                      {assignment.title}
                    </span>
                    <span className="block text-xs text-slate-500">
                      Due: {assignment.dueDate}
                    </span>
                  </span>
                </label>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignments
