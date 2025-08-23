import React from 'react'
import Card from '../../components/Card'

const AdminReports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">System Reports</h1>
      <Card title="Report Generation">
        <p className="text-gray-600">
          This page will provide tools for generating comprehensive system
          reports.
        </p>
      </Card>
    </div>
  )
}

export default AdminReports
