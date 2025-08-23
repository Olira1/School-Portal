// Admin service for handling administrative API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export const adminService = {
  // Get system statistics
  async getSystemStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/stats`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch system statistics')
      }

      return await response.json()
    } catch (error) {
      console.error('Get system stats error:', error)
      throw error
    }
  },

  // Get all users
  async getUsers(userType = null, page = 1, limit = 20) {
    try {
      let url = `${API_BASE_URL}/admin/users?page=${page}&limit=${limit}`
      if (userType) {
        url += `&type=${userType}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }

      return await response.json()
    } catch (error) {
      console.error('Get users error:', error)
      throw error
    }
  },

  // Create new user
  async createUser(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('Failed to create user')
      }

      return await response.json()
    } catch (error) {
      console.error('Create user error:', error)
      throw error
    }
  },

  // Update user
  async updateUser(userId, userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        throw new Error('Failed to update user')
      }

      return await response.json()
    } catch (error) {
      console.error('Update user error:', error)
      throw error
    }
  },

  // Delete user
  async deleteUser(userId) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/users/${userId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to delete user')
      }

      return await response.json()
    } catch (error) {
      console.error('Delete user error:', error)
      throw error
    }
  },

  // Get fee structure
  async getFeeStructure() {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/fees/structure`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch fee structure')
      }

      return await response.json()
    } catch (error) {
      console.error('Get fee structure error:', error)
      throw error
    }
  },

  // Update fee structure
  async updateFeeStructure(feeData) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/fees/structure`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(feeData),
      })

      if (!response.ok) {
        throw new Error('Failed to update fee structure')
      }

      return await response.json()
    } catch (error) {
      console.error('Update fee structure error:', error)
      throw error
    }
  },

  // Get attendance reports
  async getAttendanceReports(date = null, classId = null) {
    try {
      let url = `${API_BASE_URL}/admin/attendance/reports`
      const params = new URLSearchParams()
      if (date) params.append('date', date)
      if (classId) params.append('classId', classId)
      if (params.toString()) url += `?${params.toString()}`

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch attendance reports')
      }

      return await response.json()
    } catch (error) {
      console.error('Get attendance reports error:', error)
      throw error
    }
  },

  // Generate system reports
  async generateReport(reportType, parameters = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/reports/${reportType}`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(parameters),
      })

      if (!response.ok) {
        throw new Error('Failed to generate report')
      }

      return await response.json()
    } catch (error) {
      console.error('Generate report error:', error)
      throw error
    }
  },

  // Get system logs
  async getSystemLogs(logType = null, startDate = null, endDate = null, page = 1) {
    try {
      let url = `${API_BASE_URL}/admin/logs?page=${page}`
      if (logType) url += `&type=${logType}`
      if (startDate) url += `&startDate=${startDate}`
      if (endDate) url += `&endDate=${endDate}`

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch system logs')
      }

      return await response.json()
    } catch (error) {
      console.error('Get system logs error:', error)
      throw error
    }
  },

  // Get system health
  async getSystemHealth() {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/system/health`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch system health')
      }

      return await response.json()
    } catch (error) {
      console.error('Get system health error:', error)
      throw error
    }
  },

  // Backup system
  async backupSystem(backupType = 'full') {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/system/backup`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ type: backupType }),
      })

      if (!response.ok) {
        throw new Error('Failed to create backup')
      }

      return await response.json()
    } catch (error) {
      console.error('Backup system error:', error)
      throw error
    }
  }
}
