import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

const ParentGrades = () => {
  const [selectedChild, setSelectedChild] = useState(1)
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

  const grades = [
    {
      id: 1,
      childId: 1,
      subject: 'Mathematics',
      assignment: 'Algebra Quiz #3',
      score: 92,
      grade: 'A-',
      feedback: 'Excellent work on solving quadratic equations. Your understanding of the quadratic formula is solid. Consider practicing more word problems to improve application skills.',
      teacher: 'Ms. Sarah Wilson',
      date: '2024-12-10',
      type: 'Quiz'
    },
    {
      id: 2,
      childId: 1,
      subject: 'Science',
      assignment: 'Chemistry Lab Report',
      score: 88,
      grade: 'B+',
      feedback: 'Good lab work and analysis. Your hypothesis was well-formed and your conclusions were logical. Try to include more detailed observations in future reports.',
      teacher: 'Dr. Michael Chen',
      date: '2024-12-08',
      type: 'Lab Report'
    },
    {
      id: 3,
      childId: 1,
      subject: 'English Literature',
      assignment: 'Shakespeare Essay',
      score: 95,
      grade: 'A',
      feedback: 'Outstanding analysis of Macbeth\'s character development. Your use of textual evidence is exemplary. The thesis statement was clear and well-supported throughout.',
      teacher: 'Mrs. Jennifer Davis',
      date: '2024-12-05',
      type: 'Essay'
    },
    {
      id: 4,
      childId: 2,
      subject: 'Mathematics',
      assignment: 'Geometry Test',
      score: 85,
      grade: 'B',
      feedback: 'Good understanding of basic geometric concepts. You showed strong problem-solving skills. Focus on memorizing formulas for better performance.',
      teacher: 'Mr. Robert Smith',
      date: '2024-12-09',
      type: 'Test'
    },
    {
      id: 5,
      childId: 2,
      subject: 'Science',
      assignment: 'Biology Project',
      score: 90,
      grade: 'A-',
      feedback: 'Creative project presentation on ecosystems. Your research was thorough and well-organized. Great use of visual aids to explain complex concepts.',
      teacher: 'Dr. Lisa Thompson',
      date: '2024-12-07',
      type: 'Project'
    }
  ]

  const gpaData = [
    { month: 'Aug', gpa: 3.4 },
    { month: 'Sep', gpa: 3.6 },
    { month: 'Oct', gpa: 3.5 },
    { month: 'Nov', gpa: 3.7 },
    { month: 'Dec', gpa: 3.8 }
  ]

  const filteredGrades = grades.filter(grade => {
    if (selectedChild && grade.childId !== selectedChild) return false
    if (selectedSubject !== 'all' && grade.subject.toLowerCase() !== selectedSubject) return false
    return true
  })

  const getGradeColor = (grade) => {
    if (grade >= 90) return 'text-green-600 bg-green-100'
    if (grade >= 80) return 'text-blue-600 bg-blue-100'
    if (grade >= 70) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const getLetterGradeColor = (letterGrade) => {
    if (letterGrade.includes('A')) return 'text-green-600 bg-green-100'
    if (letterGrade.includes('B')) return 'text-blue-600 bg-blue-100'
    if (letterGrade.includes('C')) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const calculateGPA = (childId) => {
    const childGrades = grades.filter(g => g.childId === childId)
    if (childGrades.length === 0) return 0
    const total = childGrades.reduce((sum, g) => sum + g.score, 0)
    return (total / childGrades.length / 25).toFixed(1) // Convert percentage to 4.0 scale
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Performance</h1>
        <p className="text-lg text-gray-600">Track your children's grades and progress over time</p>
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

      {/* GPA Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {children.map((child) => {
          const gpa = calculateGPA(child.id)
          const childGrades = grades.filter(g => g.childId === child.id)
          const recentGrades = childGrades.slice(0, 3)
          
          return (
            <Card key={child.id} className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{child.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{gpa}</div>
                <p className="text-sm text-gray-600 mb-4">Current GPA</p>
                
                <div className="space-y-2">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{grade.subject}</span>
                      <span className={`px-2 py-1 rounded ${getLetterGradeColor(grade.grade)}`}>
                        {grade.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Subject Filter */}
      <div className="mb-6">
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

      {/* GPA Trend Chart */}
      <div className="mb-8">
        <Card title="GPA Progress Over Time">
          <div className="h-64 flex items-end justify-between space-x-2">
            {gpaData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-blue-100 rounded-t-lg transition-all duration-300 hover:bg-blue-200"
                     style={{ height: `${(data.gpa / 4) * 200}px` }}>
                </div>
                <div className="text-xs text-gray-600 mt-2">{data.month}</div>
                <div className="text-xs font-medium text-gray-900">{data.gpa}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-gray-600">
            GPA trend showing consistent improvement over the semester
          </div>
        </Card>
      </div>

      {/* Grades Breakdown */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Grades Breakdown</h2>
          <Link
            to="/parent/reports"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Download Full Report →
          </Link>
        </div>

        <div className="space-y-4">
          {filteredGrades.map((grade) => (
            <Card key={grade.id} className="hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{grade.assignment}</h4>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                      {grade.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span>📚 {grade.subject}</span>
                    <span>👨‍🏫 {grade.teacher}</span>
                    <span>📅 {new Date(grade.date).toLocaleDateString()}</span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-medium">Teacher Feedback:</span>
                    </p>
                    <p className="text-sm text-gray-600 italic">"{grade.feedback}"</p>
                  </div>
                </div>

                <div className="ml-6 text-right">
                  <div className={`text-2xl font-bold px-3 py-2 rounded-lg ${getGradeColor(grade.score)}`}>
                    {grade.score}%
                  </div>
                  <div className={`text-lg font-semibold px-2 py-1 rounded mt-2 ${getLetterGradeColor(grade.grade)}`}>
                    {grade.grade}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredGrades.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📊</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No grades found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later</p>
          </Card>
        )}
      </div>

      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Performance Insights">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-600">📈</span>
                <span className="text-sm font-medium text-gray-900">Strongest Subject</span>
              </div>
              <span className="text-green-600 font-semibold">English Literature</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🎯</span>
                <span className="text-sm font-medium text-gray-900">Areas for Improvement</span>
              </div>
              <span className="text-blue-600 font-semibold">Science Lab Reports</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-purple-600">📚</span>
                <span className="text-sm font-medium text-gray-900">Total Assignments</span>
              </div>
              <span className="text-purple-600 font-semibold">{filteredGrades.length}</span>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
              📧 Contact Teacher
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-center font-medium">
              📊 Generate Progress Report
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium">
              📅 Schedule Parent Meeting
            </button>
            <Link
              to="/parent/assignments"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center font-medium block"
            >
              📝 View Assignments
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ParentGrades
