import React from 'react'
import Card from '../../components/Card'

const ParentAssignments = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Children's Assignments</h1>
      <Card title="Assignment Information">
        <p className="text-gray-600">This page will display assignments for all children.</p>
      </Card>
    </div>
  )
}

export default ParentAssignments
