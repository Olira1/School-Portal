import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

const ParentBalance = () => {
  const [selectedChild, setSelectedChild] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  // Mock data - in real app, this would come from API calls
  const children = [
    { id: 1, name: 'Emma Johnson', grade: '10th Grade', school: 'Lincoln High School' },
    { id: 2, name: 'Lucas Johnson', grade: '8th Grade', school: 'Lincoln Middle School' }
  ]

  const categories = [
    { id: 'all', name: 'All Categories', color: 'blue' },
    { id: 'tuition', name: 'Tuition', color: 'red' },
    { id: 'library', name: 'Library', color: 'green' },
    { id: 'exam', name: 'Examination', color: 'purple' },
    { id: 'activity', name: 'Activities', color: 'orange' },
    { id: 'transport', name: 'Transportation', color: 'indigo' }
  ]

  const fees = [
    {
      id: 1,
      childId: 1,
      category: 'tuition',
      description: 'Semester 1 Tuition Fee',
      amount: 500.00,
      dueDate: '2024-12-31',
      status: 'paid',
      paidAmount: 500.00,
      paidDate: '2024-11-15',
      receiptUrl: '#',
      paymentMethod: 'Online Banking'
    },
    {
      id: 2,
      childId: 1,
      category: 'library',
      description: 'Library Membership Fee',
      amount: 25.00,
      dueDate: '2024-12-15',
      status: 'overdue',
      paidAmount: 0.00,
      paidDate: null,
      receiptUrl: null,
      paymentMethod: null
    },
    {
      id: 3,
      childId: 1,
      category: 'exam',
      description: 'Final Examination Fee',
      amount: 75.00,
      dueDate: '2025-01-15',
      status: 'pending',
      paidAmount: 0.00,
      paidDate: null,
      receiptUrl: null,
      paymentMethod: null
    },
    {
      id: 4,
      childId: 2,
      category: 'tuition',
      description: 'Semester 1 Tuition Fee',
      amount: 450.00,
      dueDate: '2024-12-31',
      status: 'paid',
      paidAmount: 450.00,
      paidDate: '2024-11-20',
      receiptUrl: '#',
      paymentMethod: 'Credit Card'
    },
    {
      id: 5,
      childId: 2,
      category: 'activity',
      description: 'Sports Club Membership',
      amount: 60.00,
      dueDate: '2024-12-20',
      status: 'pending',
      paidAmount: 0.00,
      paidDate: null,
      receiptUrl: null,
      paymentMethod: null
    },
    {
      id: 6,
      childId: 2,
      category: 'transport',
      description: 'Bus Transportation Fee',
      amount: 120.00,
      dueDate: '2024-12-25',
      status: 'pending',
      paidAmount: 0.00,
      paidDate: null,
      receiptUrl: null,
      paymentMethod: null
    }
  ]

  const payments = [
    {
      id: 1,
      feeId: 1,
      amount: 500.00,
      date: '2024-11-15',
      method: 'Online Banking',
      status: 'completed',
      receiptUrl: '#',
      reference: 'TXN-001234'
    },
    {
      id: 2,
      feeId: 4,
      amount: 450.00,
      date: '2024-11-20',
      method: 'Credit Card',
      status: 'completed',
      receiptUrl: '#',
      reference: 'TXN-001235'
    }
  ]

  const filteredFees = fees.filter(fee => {
    if (selectedChild && fee.childId !== selectedChild) return false
    if (selectedCategory !== 'all' && fee.category !== selectedCategory) return false
    return true
  })

  const getStatusColor = (status) => {
    const colors = {
      'paid': 'bg-green-100 text-green-800 border-green-200',
      'pending': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'overdue': 'bg-red-100 text-red-800 border-red-200'
    }
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200'
  }

  const getStatusIcon = (status) => {
    const icons = {
      'paid': '✅',
      'pending': '⏰',
      'overdue': '⚠️'
    }
    return icons[status] || '❓'
  }

  const getCategoryIcon = (category) => {
    const icons = {
      'tuition': '🎓',
      'library': '📚',
      'exam': '📝',
      'activity': '⚽',
      'transport': '🚌'
    }
    return icons[category] || '💰'
  }

  const getDaysUntilDue = (dueDate) => {
    const today = new Date()
    const due = new Date(dueDate)
    const diffTime = due - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const getUrgencyColor = (days) => {
    if (days < 0) return 'text-red-600'
    if (days <= 3) return 'text-orange-600'
    if (days <= 7) return 'text-yellow-600'
    return 'text-green-600'
  }

  const calculateOutstandingBalance = (childId) => {
    const childFees = fees.filter(f => f.childId === childId && f.status !== 'paid')
    return childFees.reduce((sum, fee) => sum + fee.amount, 0)
  }

  const calculateTotalPaid = (childId) => {
    const childFees = fees.filter(f => f.childId === childId && f.status === 'paid')
    return childFees.reduce((sum, fee) => sum + fee.paidAmount, 0)
  }

  const getOverdueFees = (childId) => {
    return fees.filter(f => f.childId === childId && f.status === 'overdue')
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fee Management</h1>
        <p className="text-lg text-gray-600">Track payments, view balances, and manage school fees</p>
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

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-bold text-green-600 mb-1">
              ${calculateTotalPaid(selectedChild).toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Total Paid</div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-pink-50">
          <div className="text-center">
            <div className="text-3xl mb-2">⚠️</div>
            <div className="text-2xl font-bold text-red-600 mb-1">
              ${calculateOutstandingBalance(selectedChild).toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">Outstanding Balance</div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {getOverdueFees(selectedChild).length}
            </div>
            <div className="text-sm text-gray-600">Overdue Fees</div>
          </div>
        </Card>
      </div>

      {/* Overdue Alerts */}
      {getOverdueFees(selectedChild).length > 0 && (
        <div className="mb-6">
          <Card className="bg-red-50 border-red-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚨</span>
              <div className="flex-1">
                <h3 className="font-semibold text-red-800 mb-1">Overdue Fee Alert</h3>
                <p className="text-red-700 text-sm">
                  You have {getOverdueFees(selectedChild).length} overdue fee(s) totaling $
                  {getOverdueFees(selectedChild).reduce((sum, fee) => sum + fee.amount, 0).toFixed(2)}.
                  Please make payment as soon as possible to avoid additional charges.
                </p>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                Pay Now
              </button>
            </div>
          </Card>
        </div>
      )}

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {getCategoryIcon(category.id)} {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Fees List */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Fee Details</h2>
          <button
            onClick={() => setShowPaymentModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            💳 Make Payment
          </button>
        </div>

        <div className="space-y-4">
          {filteredFees.map((fee) => {
            const daysUntilDue = getDaysUntilDue(fee.dueDate)
            
            return (
              <Card key={fee.id} className="hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{fee.description}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(fee.status)}`}>
                        {getStatusIcon(fee.status)} {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {getCategoryIcon(fee.category)} {fee.category.charAt(0).toUpperCase() + fee.category.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <span>💰 Amount: ${fee.amount.toFixed(2)}</span>
                      <span>📅 Due: {new Date(fee.dueDate).toLocaleDateString()}</span>
                      {fee.status === 'paid' && (
                        <span>✅ Paid: {new Date(fee.paidDate).toLocaleDateString()}</span>
                      )}
                    </div>

                    {fee.status === 'paid' && (
                      <div className="bg-green-50 p-3 rounded-lg mb-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-green-700">
                            <span className="font-medium">Payment Method:</span> {fee.paymentMethod}
                          </div>
                          <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                            📥 Download Receipt
                          </button>
                        </div>
                      </div>
                    )}

                    {fee.status === 'overdue' && (
                      <div className="bg-red-50 p-3 rounded-lg mb-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-red-700">
                            <span className="font-medium">⚠️ Overdue by {Math.abs(daysUntilDue)} days</span>
                          </div>
                          <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                            💳 Pay Now
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="ml-6 text-right">
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      ${fee.status === 'paid' ? fee.paidAmount : fee.amount}
                    </div>
                    <div className={`text-sm font-medium ${getUrgencyColor(daysUntilDue)}`}>
                      {daysUntilDue < 0 ? 'Overdue' : `Due in ${daysUntilDue} days`}
                    </div>
                    
                    {fee.status === 'pending' && (
                      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        💳 Pay Now
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {filteredFees.length === 0 && (
          <Card className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">💰</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No fees found</h3>
            <p className="text-gray-500">Try adjusting your filters or check back later</p>
          </Card>
        )}
      </div>

      {/* Payment History */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment History</h2>
        <Card>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✅</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Payment #{payment.reference}</div>
                    <div className="text-sm text-gray-600">
                      {new Date(payment.date).toLocaleDateString()} • {payment.method}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">${payment.amount.toFixed(2)}</div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm">
                    📥 Download Receipt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Financial Insights">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📊</span>
                <span className="text-sm font-medium text-gray-900">Total Outstanding</span>
              </div>
              <span className="text-blue-600 font-semibold">
                ${fees.filter(f => f.status !== 'paid').reduce((sum, fee) => sum + fee.amount, 0).toFixed(2)}
              </span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span className="text-sm font-medium text-gray-900">Successfully Paid</span>
              </div>
              <span className="text-green-600 font-semibold">
                ${fees.filter(f => f.status === 'paid').reduce((sum, fee) => sum + fee.paidAmount, 0).toFixed(2)}
              </span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600">⏰</span>
                <span className="text-sm font-medium text-gray-900">Due This Week</span>
              </div>
              <span className="text-yellow-600 font-semibold">
                ${fees.filter(f => {
                  const days = getDaysUntilDue(f.dueDate)
                  return days >= 0 && days <= 7 && f.status !== 'paid'
                }).reduce((sum, fee) => sum + fee.amount, 0).toFixed(2)}
              </span>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
              💳 Make Payment
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-center font-medium">
              📊 Download Statement
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium">
              📧 Contact Billing
            </button>
            <Link
              to="/parent/reports"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center font-medium block"
            >
              📑 View Reports
            </Link>
          </div>
        </Card>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Make Payment</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Fee to Pay
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Select a fee...</option>
                  {filteredFees.filter(f => f.status !== 'paid').map(fee => (
                    <option key={fee.id} value={fee.id}>
                      {fee.description} - ${fee.amount}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>Online Banking</option>
                  <option>Bank Transfer</option>
                </select>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentBalance
