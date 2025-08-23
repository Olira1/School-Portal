import React from 'react'
import Card from '../../components/Card'

const SchoolHeadDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">School Head Dashboard</h1>
      <Card title="School Overview">
        <p className="text-gray-600">This page will provide an overview of school performance and key metrics.</p>
      </Card>
    </div>
  )
}

export default SchoolHeadDashboard
