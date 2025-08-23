import React from 'react'
import Card from '../../components/Card'

const ParentReports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Children's Reports</h1>
      <Card title="Report Information">
        <p className="text-gray-600">This page will display reports for all children.</p>
      </Card>
    </div>
  )
}

export default ParentReports
