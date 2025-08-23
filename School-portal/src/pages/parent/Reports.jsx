import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

const ParentReports = () => {
  const [selectedChild, setSelectedChild] = useState(1)
  const [selectedReportType, setSelectedReportType] = useState('progress')
  const [selectedPeriod, setSelectedPeriod] = useState('semester')
  const [showCustomReportModal, setShowCustomReportModal] = useState(false)

  // Mock data - in real app, this would come from API calls
  const children = [
    { id: 1, name: 'Emma Johnson', grade: '10th Grade', school: 'Lincoln High School' },
    { id: 2, name: 'Lucas Johnson', grade: '8th Grade', school: 'Lincoln Middle School' }
  ]

  const reportTypes = [
    { id: 'progress', name: 'Progress Report', icon: '📊', description: 'Academic performance and grades' },
    { id: 'attendance', name: 'Attendance Report', icon: '✅', description: 'Attendance records and patterns' },
    { id: 'financial', name: 'Financial Report', icon: '💰', description: 'Fee payments and balances' },
    { id: 'behavior', name: 'Behavior Report', icon: '🎯', description: 'Conduct and disciplinary records' },
    { id: 'custom', name: 'Custom Report', icon: '🔧', description: 'Generate specific reports' }
  ]

  const periods = [
    { id: 'month', name: 'This Month', value: 'month' },
    { id: 'quarter', name: 'This Quarter', value: 'quarter' },
    { id: 'semester', name: 'This Semester', value: 'semester' },
    { id: 'year', name: 'This Year', value: 'year' },
    { id: 'custom', name: 'Custom Range', value: 'custom' }
  ]

  const availableReports = [
    {
      id: 1,
      childId: 1,
      type: 'progress',
      title: 'Semester 1 Progress Report',
      period: 'August - December 2024',
      generatedDate: '2024-12-15',
      fileSize: '2.4 MB',
      format: 'PDF',
      status: 'ready',
      downloadUrl: '#'
    },
    {
      id: 2,
      childId: 1,
      type: 'attendance',
      title: 'Attendance Summary Report',
      period: 'August - December 2024',
      generatedDate: '2024-12-10',
      fileSize: '1.8 MB',
      format: 'PDF',
      status: 'ready',
      downloadUrl: '#'
    },
    {
      id: 3,
      childId: 1,
      type: 'financial',
      title: 'Financial Statement',
      period: 'August - December 2024',
      generatedDate: '2024-12-05',
      fileSize: '3.1 MB',
      format: 'PDF',
      status: 'ready',
      downloadUrl: '#'
    },
    {
      id: 4,
      childId: 2,
      type: 'progress',
      title: 'Semester 1 Progress Report',
      period: 'August - December 2024',
      generatedDate: '2024-12-15',
      fileSize: '2.2 MB',
      format: 'PDF',
      status: 'ready',
      downloadUrl: '#'
    },
    {
      id: 5,
      childId: 2,
      type: 'attendance',
      title: 'Attendance Summary Report',
      period: 'August - December 2024',
      generatedDate: '2024-12-10',
      fileSize: '1.6 MB',
      format: 'PDF',
      status: 'ready',
      downloadUrl: '#'
    }
  ]

  const pendingReports = [
    {
      id: 6,
      childId: 1,
      type: 'behavior',
      title: 'Behavior Assessment Report',
      period: 'August - December 2024',
      requestedDate: '2024-12-18',
      estimatedCompletion: '2024-12-20',
      status: 'processing'
    },
    {
      id: 7,
      childId: 2,
      type: 'custom',
      title: 'Math Performance Analysis',
      period: 'Last 3 months',
      requestedDate: '2024-12-19',
      estimatedCompletion: '2024-12-21',
      status: 'queued'
    }
  ]

  const filteredReports = availableReports.filter(report => {
    if (selectedChild && report.childId !== selectedChild) return false
    if (selectedReportType !== 'all' && report.type !== selectedReportType) return false
    return true
  })

  const getReportIcon = (type) => {
    const icons = {
      'progress': '📊',
      'attendance': '✅',
      'financial': '💰',
      'behavior': '🎯',
      'custom': '🔧'
    }
    return icons[type] || '📄'
  }

  const getReportColor = (type) => {
    const colors = {
      'progress': 'bg-blue-100 text-blue-800 border-blue-200',
      'attendance': 'bg-green-100 text-green-800 border-green-200',
      'financial': 'bg-purple-100 text-purple-800 border-purple-200',
      'behavior': 'bg-orange-100 text-orange-800 border-orange-200',
      'custom': 'bg-gray-100 text-gray-800 border-gray-200'
    }
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getStatusColor = (status) => {
    const colors = {
      'ready': 'bg-green-100 text-green-800',
      'processing': 'bg-yellow-100 text-yellow-800',
      'queued': 'bg-blue-100 text-blue-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  const getStatusIcon = (status) => {
    const icons = {
      'ready': '✅',
      'processing': '🔄',
      'queued': '⏳'
    }
    return icons[status] || '❓'
  }

  const generateReport = (type, childId, period) => {
    console.log(`Generating ${type} report for child ${childId} for period ${period}`)
    // In real app, this would trigger an API call to generate the report
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-lg text-gray-600">Access comprehensive reports about your children's academic and financial progress</p>
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

      {/* Report Type Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Report Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTypes.map((reportType) => (
            <button
              key={reportType.id}
              onClick={() => setSelectedReportType(reportType.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedReportType === reportType.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-3xl mb-2">{reportType.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{reportType.name}</h4>
              <p className="text-sm text-gray-600">{reportType.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Period Selection */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Time Period</h3>
        <div className="flex flex-wrap gap-2">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.value)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedPeriod === period.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period.name}
            </button>
          ))}
        </div>
      </div>

      {/* Generate Report Button */}
      <div className="mb-8">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Generate New Report</h3>
              <p className="text-gray-600">
                Create a {selectedReportType.replace('-', ' ')} report for {children.find(c => c.id === selectedChild)?.name} 
                covering {periods.find(p => p.value === selectedPeriod)?.name.toLowerCase()}
              </p>
            </div>
            <button
              onClick={() => generateReport(selectedReportType, selectedChild, selectedPeriod)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              🚀 Generate Report
            </button>
          </div>
        </Card>
      </div>

      {/* Available Reports */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Available Reports</h2>
          <button
            onClick={() => setShowCustomReportModal(true)}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            🔧 Custom Report
          </button>
        </div>

        <div className="space-y-4">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">{getReportIcon(report.type)}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>📅 {report.period}</span>
                      <span>📊 Generated: {new Date(report.generatedDate).toLocaleDateString()}</span>
                      <span>💾 {report.fileSize}</span>
                      <span>📄 {report.format}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                    {getStatusIcon(report.status)} {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>
                  
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    📥 Download
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📄</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reports available</h3>
            <p className="text-gray-500">Generate a new report or check back later</p>
          </Card>
        )}
      </div>

      {/* Pending Reports */}
      {pendingReports.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports in Progress</h2>
          <div className="space-y-4">
            {pendingReports.map((report) => (
              <Card key={report.id} className="bg-yellow-50 border-yellow-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">{getReportIcon(report.type)}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>📅 {report.period}</span>
                        <span>📊 Requested: {new Date(report.requestedDate).toLocaleDateString()}</span>
                        <span>⏰ Estimated: {new Date(report.estimatedCompletion).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {getStatusIcon(report.status)} {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                    </span>
                    
                    <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                      🔄 Check Status
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Report Insights">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📊</span>
                <span className="text-sm font-medium text-gray-900">Total Reports</span>
              </div>
              <span className="text-blue-600 font-semibold">{availableReports.length}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm font-medium text-gray-900">Ready for Download</span>
              </div>
              <span className="text-green-600 font-semibold">
                {availableReports.filter(r => r.status === 'ready').length}
              </span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">🔄</span>
                <span className="text-sm font-medium text-gray-900">In Progress</span>
              </div>
              <span className="text-yellow-600 font-semibold">{pendingReports.length}</span>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
              📊 Generate Progress Report
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-center font-medium">
              ✅ Generate Attendance Report
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium">
              💰 Generate Financial Report
            </button>
            <Link
              to="/parent/grades"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center font-medium block"
            >
              📚 View Grades
            </Link>
          </div>
        </Card>
      </div>

      {/* Custom Report Modal */}
      {showCustomReportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Generate Custom Report</h3>
              <button
                onClick={() => setShowCustomReportModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Report Type
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Academic Performance</option>
                  <option>Subject Analysis</option>
                  <option>Attendance Pattern</option>
                  <option>Behavior Summary</option>
                  <option>Financial Summary</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Range
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Last 30 days</option>
                  <option>Last 3 months</option>
                  <option>Last 6 months</option>
                  <option>Last year</option>
                  <option>Custom range</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Include Charts
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" defaultChecked />
                    <span className="text-sm">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">No</span>
                  </label>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowCustomReportModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentReports
