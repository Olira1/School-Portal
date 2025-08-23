// Parent service for handling parent-related API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export const parentService = {
  // Get parent profile
  async getProfile(parentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/parents/${parentId}`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch parent profile')
      }

      return await response.json()
    } catch (error) {
      console.error('Get parent profile error:', error)
      throw error
    }
  },

  // Get children list
  async getChildren(parentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/parents/${parentId}/children`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch children')
      }

      return await response.json()
    } catch (error) {
      console.error('Get children error:', error)
      throw error
    }
  },

  // Get child grades
  async getChildGrades(parentId, childId, semester = null) {
    try {
      let url = `${API_BASE_URL}/parents/${parentId}/children/${childId}/grades`
      if (semester) {
        url += `?semester=${semester}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch child grades')
      }

      return await response.json()
    } catch (error) {
      console.error('Get child grades error:', error)
      throw error
    }
  },

  // Get child assignments
  async getChildAssignments(parentId, childId, status = null) {
    try {
      let url = `${API_BASE_URL}/parents/${parentId}/children/${childId}/assignments`
      if (status) {
        url += `?status=${status}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch child assignments')
      }

      return await response.json()
    } catch (error) {
      console.error('Get child assignments error:', error)
      throw error
    }
  },

  // Get fee balance
  async getFeeBalance(parentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/parents/${parentId}/fees`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch fee balance')
      }

      return await response.json()
    } catch (error) {
      console.error('Get fee balance error:', error)
      throw error
    }
  },

  // Make fee payment
  async makePayment(parentId, paymentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/parents/${parentId}/payments`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(paymentData),
      })

      if (!response.ok) {
        throw new Error('Payment failed')
      }

      return await response.json()
    } catch (error) {
      console.error('Make payment error:', error)
      throw error
    }
  },

  // Get payment history
  async getPaymentHistory(parentId, year = null) {
    try {
      let url = `${API_BASE_URL}/parents/${parentId}/payments`
      if (year) {
        url += `?year=${year}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch payment history')
      }

      return await response.json()
    } catch (error) {
      console.error('Get payment history error:', error)
      throw error
    }
  },

  // Get child reports
  async getChildReports(parentId, childId, reportType = null) {
    try {
      let url = `${API_BASE_URL}/parents/${parentId}/children/${childId}/reports`
      if (reportType) {
        url += `?type=${reportType}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch child reports')
      }

      return await response.json()
    } catch (error) {
      console.error('Get child reports error:', error)
      throw error
    }
  },

  // Send message to teacher
  async sendMessage(parentId, messageData) {
    try {
      const response = await fetch(`${API_BASE_URL}/parents/${parentId}/messages`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(messageData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      return await response.json()
    } catch (error) {
      console.error('Send message error:', error)
      throw error
    }
  },

  // Get messages
  async getMessages(parentId, teacherId = null) {
    try {
      let url = `${API_BASE_URL}/parents/${parentId}/messages`
      if (teacherId) {
        url += `?teacherId=${teacherId}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch messages')
      }

      return await response.json()
    } catch (error) {
      console.error('Get messages error:', error)
      throw error
    }
  }
}
