import React from 'react'
import Card from '../../components/Card'

const SchoolHeadActivityLog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Activity Log</h1>
      <Card title="System Activity">
        <p className="text-gray-600">This page will display a log of system activities and user actions.</p>
      </Card>
    </div>
  )
}

export default SchoolHeadActivityLog
