import React from 'react'
import Card from '../../components/Card'

const ParentBalance = () => {
  const feeDetails = [
    {
      child: 'John Smith',
      item: 'Tuition Fee',
      amount: 500.00,
      dueDate: '2024-01-31',
      status: 'Pending'
    },
    {
      child: 'John Smith',
      item: 'Library Fee',
      amount: 25.00,
      dueDate: '2024-01-31',
      status: 'Paid'
    },
    {
      child: 'Sarah Smith',
      item: 'Tuition Fee',
      amount: 450.00,
      dueDate: '2024-01-31',
      status: 'Pending'
    }
  ]

  const getStatusBadge = (status) => {
    if (status === 'Paid') {
      return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Paid</span>
    }
    return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Pending</span>
  }

  const totalPending = feeDetails
    .filter(fee => fee.status === 'Pending')
    .reduce((sum, fee) => sum + fee.amount, 0)

  const totalPaid = feeDetails
    .filter(fee => fee.status === 'Paid')
    .reduce((sum, fee) => sum + fee.amount, 0)

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Fee Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Fee Details">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Child
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {feeDetails.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {fee.child}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {fee.item}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${fee.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {fee.dueDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {getStatusBadge(fee.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        <div>
          <Card title="Payment Summary">
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">${totalPending.toFixed(2)}</div>
                <div className="text-sm text-gray-600">Total Pending</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Paid:</span>
                  <span className="text-sm font-medium text-green-600">${totalPaid.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <span className="text-sm font-medium">${(totalPending + totalPaid).toFixed(2)}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Make Payment
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ParentBalance
