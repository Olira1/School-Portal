import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'

const ParentCommunication = () => {
  const [selectedTab, setSelectedTab] = useState('inbox')
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [showComposeModal, setShowComposeModal] = useState(false)
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [composeForm, setComposeForm] = useState({
    recipient: '',
    subject: '',
    message: '',
    priority: 'normal',
  })

  // Mock data - in real app, this would come from API calls
  const messages = [
    {
      id: 1,
      type: 'message',
      sender: 'Ms. Sarah Wilson',
      senderRole: 'Mathematics Teacher',
      recipient: 'Parent',
      subject: "Emma's Progress in Algebra",
      content:
        "Dear Parent, I wanted to update you on Emma's excellent progress in Algebra this semester. She has shown remarkable improvement in solving quadratic equations and has consistently scored above 90% on all quizzes. Her analytical thinking skills are developing well. I would like to schedule a brief meeting to discuss how we can further challenge her in advanced topics. Please let me know your availability.",
      timestamp: '2024-12-18T10:30:00',
      isRead: false,
      priority: 'high',
      category: 'academic',
      attachments: ['progress_report.pdf'],
      canReply: true,
    },
    {
      id: 2,
      type: 'announcement',
      sender: 'School Administration',
      senderRole: 'Principal',
      recipient: 'All Parents',
      subject: 'Parent-Teacher Conference Schedule',
      content:
        "Dear Parents, We are pleased to announce that our annual Parent-Teacher Conference will be held on January 15-16, 2025. This is a great opportunity to discuss your child's academic progress and address any concerns. Please book your preferred time slot through the parent portal. Individual meetings will be 15 minutes long. We look forward to seeing you all.",
      timestamp: '2024-12-17T14:00:00',
      isRead: true,
      priority: 'normal',
      category: 'event',
      attachments: ['conference_schedule.pdf', 'booking_instructions.pdf'],
      canReply: false,
    },
    {
      id: 3,
      type: 'message',
      sender: 'Dr. Michael Chen',
      senderRole: 'Science Teacher',
      recipient: 'Parent',
      subject: 'Science Fair Project Support',
      content:
        "Hello! Lucas has shown great interest in the upcoming Science Fair. His project idea about renewable energy is quite innovative. I would appreciate if you could help him gather some materials and supervise his experiments at home. The project is due in 3 weeks, and I'm available for consultation if needed. Let me know if you have any questions.",
      timestamp: '2024-12-16T16:45:00',
      isRead: false,
      priority: 'normal',
      category: 'academic',
      attachments: ['project_guidelines.pdf', 'materials_list.pdf'],
      canReply: true,
    },
    {
      id: 4,
      type: 'announcement',
      sender: 'School Administration',
      senderRole: 'Vice Principal',
      recipient: 'All Parents',
      subject: 'Winter Break Reminder',
      content:
        'As we approach the winter break, we want to remind all parents that school will be closed from December 23, 2024, to January 5, 2025. Classes will resume on January 6, 2025. We wish all families a wonderful and safe holiday season. Please ensure your children complete their holiday assignments and return to school refreshed and ready to learn.',
      timestamp: '2024-12-15T09:00:00',
      isRead: true,
      priority: 'normal',
      category: 'general',
      attachments: ['holiday_assignments.pdf'],
      canReply: false,
    },
    {
      id: 5,
      type: 'message',
      sender: 'Mrs. Jennifer Davis',
      senderRole: 'English Literature Teacher',
      recipient: 'Parent',
      subject: 'Reading Assignment Extension',
      content:
        "I hope this message finds you well. Emma has requested a short extension for her Shakespeare essay due to some technical difficulties with her computer. I've granted her an additional 2 days to submit the assignment. This won't affect her grade, and I appreciate her proactive communication about the issue. Please let me know if you need any clarification.",
      timestamp: '2024-12-14T11:20:00',
      isRead: true,
      priority: 'low',
      category: 'academic',
      attachments: [],
      canReply: true,
    },
  ]

  const announcements = messages.filter((m) => m.type === 'announcement')
  const personalMessages = messages.filter((m) => m.type === 'message')

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      normal: 'bg-blue-100 text-blue-800 border-blue-200',
      low: 'bg-gray-100 text-gray-800 border-gray-200',
    }
    return colors[priority] || colors.normal
  }

  const getPriorityIcon = (priority) => {
    const icons = {
      high: '🔴',
      normal: '🔵',
      low: '⚪',
    }
    return icons[priority] || icons.normal
  }

  const getCategoryIcon = (category) => {
    const icons = {
      academic: '📚',
      event: '📅',
      general: '📢',
      behavior: '🎯',
      financial: '💰',
    }
    return icons[category] || '📄'
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))

    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return 'Yesterday'
    return date.toLocaleDateString()
  }

  const handleComposeSubmit = (e) => {
    e.preventDefault()
    console.log('Composing message:', composeForm)
    setShowComposeModal(false)
    setComposeForm({
      recipient: '',
      subject: '',
      message: '',
      priority: 'normal',
    })
  }

  const handleReply = (message) => {
    setSelectedMessage(message)
    setComposeForm({
      recipient: message.sender,
      subject: `Re: ${message.subject}`,
      message: '',
      priority: 'normal',
    })
    setShowReplyModal(true)
  }

  const markAsRead = (messageId) => {
    // In real app, this would update the message status via API
    console.log('Marking message as read:', messageId)
  }

  const renderMessageList = (messageList) => (
    <div className="space-y-3">
      {messageList.map((message) => (
        <div
          key={message.id}
          className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
            message.isRead
              ? 'bg-white border-gray-200'
              : 'bg-blue-50 border-blue-200'
          }`}
          onClick={() => {
            setSelectedMessage(message)
            if (!message.isRead) markAsRead(message.id)
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(message.priority)}`}
                >
                  {getPriorityIcon(message.priority)} {message.priority}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  {getCategoryIcon(message.category)} {message.category}
                </span>
                {!message.isRead && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
              </div>

              <h4 className="font-semibold text-gray-900 mb-1">
                {message.subject}
              </h4>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span>
                  👤 {message.sender} ({message.senderRole})
                </span>
                <span>📅 {formatTimestamp(message.timestamp)}</span>
              </div>

              <p className="text-gray-700 text-sm line-clamp-2">
                {message.content}
              </p>

              {message.attachments.length > 0 && (
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">📎 Attachments:</span>
                  {message.attachments.map((attachment, index) => (
                    <span
                      key={index}
                      className="text-xs text-blue-600 hover:underline cursor-pointer"
                    >
                      {attachment}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="ml-4 flex flex-col items-end gap-2">
              {message.canReply && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleReply(message)
                  }}
                  className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  💬 Reply
                </button>
              )}

              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200 transition-colors">
                📥 Download
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Communication Center
        </h1>
        <p className="text-lg text-gray-600">
          Stay connected with teachers and school administration
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          onClick={() => setShowComposeModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          ✉️ Compose Message
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
          📅 Schedule Meeting
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium">
          📞 Contact Directory
        </button>
        <Link
          to="/parent/grades"
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
        >
          📊 View Grades
        </Link>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setSelectedTab('inbox')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedTab === 'inbox'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📥 Inbox ({personalMessages.filter((m) => !m.isRead).length})
          </button>
          <button
            onClick={() => setSelectedTab('announcements')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              selectedTab === 'announcements'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            📢 Announcements ({announcements.length})
          </button>
        </div>
      </div>

      {/* Message List */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {selectedTab === 'inbox'
              ? 'Personal Messages'
              : 'School Announcements'}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {selectedTab === 'inbox'
                ? `${personalMessages.filter((m) => !m.isRead).length} unread`
                : `${announcements.length} total`}
            </span>
          </div>
        </div>

        {selectedTab === 'inbox'
          ? renderMessageList(personalMessages)
          : renderMessageList(announcements)}
      </div>

      {/* Quick Actions and Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Communication Insights">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">📥</span>
                <span className="text-sm font-medium text-gray-900">
                  Unread Messages
                </span>
              </div>
              <span className="text-blue-600 font-semibold">
                {personalMessages.filter((m) => !m.isRead).length}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-green-600">📢</span>
                <span className="text-sm font-medium text-gray-900">
                  Recent Announcements
                </span>
              </div>
              <span className="text-green-600 font-semibold">
                {
                  announcements.filter((m) => {
                    const hours = Math.floor(
                      (new Date() - new Date(m.timestamp)) / (1000 * 60 * 60)
                    )
                    return hours < 24
                  }).length
                }
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-purple-600">💬</span>
                <span className="text-sm font-medium text-gray-900">
                  Teachers Contacted
                </span>
              </div>
              <span className="text-purple-600 font-semibold">
                {new Set(personalMessages.map((m) => m.sender)).size}
              </span>
            </div>
          </div>
        </Card>

        <Card title="Quick Actions">
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium">
              ✉️ Send Message
            </button>
            <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-center font-medium">
              📅 Book Meeting
            </button>
            <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center font-medium">
              📞 Call Teacher
            </button>
            <Link
              to="/parent/reports"
              className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors text-center font-medium block"
            >
              📑 Request Report
            </Link>
          </div>
        </Card>
      </div>

      {/* Compose Message Modal */}
      {showComposeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Compose New Message
              </h3>
              <button
                onClick={() => setShowComposeModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleComposeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient
                </label>
                <select
                  value={composeForm.recipient}
                  onChange={(e) =>
                    setComposeForm({
                      ...composeForm,
                      recipient: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select recipient...</option>
                  <option value="teacher">Teacher</option>
                  <option value="principal">Principal</option>
                  <option value="counselor">School Counselor</option>
                  <option value="admin">Administration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={composeForm.subject}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, subject: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter message subject..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  value={composeForm.priority}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, priority: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="low">Low</option>
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={composeForm.message}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, message: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows={6}
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowComposeModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Reply to Message
              </h3>
              <button
                onClick={() => setShowReplyModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">
                Original Message:
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                <strong>From:</strong> {selectedMessage.sender} (
                {selectedMessage.senderRole})
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Subject:</strong> {selectedMessage.subject}
              </p>
              <p className="text-sm text-gray-700">{selectedMessage.content}</p>
            </div>

            <form onSubmit={handleComposeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={composeForm.subject}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, subject: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={composeForm.message}
                  onChange={(e) =>
                    setComposeForm({ ...composeForm, message: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows={6}
                  placeholder="Type your reply here..."
                  required
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowReplyModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Send Reply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default ParentCommunication
