import React from 'react'
import Card from '../../components/Card'

const AdminActivityLog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        System Activity Log
      </h1>
      <Card title="Activity Monitoring">
        <p className="text-gray-600">
          This page will display a comprehensive log of all system activities
          and user actions.
        </p>
      </Card>
    </div>
  )
}

export default AdminActivityLog
