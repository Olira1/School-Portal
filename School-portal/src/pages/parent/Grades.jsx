import React from 'react'
import Card from '../../components/Card'

const ParentGrades = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Children's Grades
      </h1>
      <Card title="Grade Information">
        <p className="text-gray-600">
          This page will display grades for all children.
        </p>
      </Card>
    </div>
  )
}

export default ParentGrades
