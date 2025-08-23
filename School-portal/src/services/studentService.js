// Student service for handling student-related API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export const studentService = {
  // Get student profile
  async getProfile(studentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch student profile')
      }

      return await response.json()
    } catch (error) {
      console.error('Get student profile error:', error)
      throw error
    }
  },

  // Get student grades
  async getGrades(studentId, semester = null) {
    try {
      let url = `${API_BASE_URL}/students/${studentId}/grades`
      if (semester) {
        url += `?semester=${semester}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch grades')
      }

      return await response.json()
    } catch (error) {
      console.error('Get grades error:', error)
      throw error
    }
  },

  // Get student assignments
  async getAssignments(studentId, status = null) {
    try {
      let url = `${API_BASE_URL}/students/${studentId}/assignments`
      if (status) {
        url += `?status=${status}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch assignments')
      }

      return await response.json()
    } catch (error) {
      console.error('Get assignments error:', error)
      throw error
    }
  },

  // Submit assignment
  async submitAssignment(studentId, assignmentId, submissionData) {
    try {
      const response = await fetch(`${API_BASE_URL}/students/${studentId}/assignments/${assignmentId}/submit`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit assignment')
      }

      return await response.json()
    } catch (error) {
      console.error('Submit assignment error:', error)
      throw error
    }
  },

  // Get student schedule
  async getSchedule(studentId, weekStart = null) {
    try {
      let url = `${API_BASE_URL}/students/${studentId}/schedule`
      if (weekStart) {
        url += `?weekStart=${weekStart}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch schedule')
      }

      return await response.json()
    } catch (error) {
      console.error('Get schedule error:', error)
      throw error
    }
  },

  // Get student resources
  async getResources(studentId, subject = null) {
    try {
      let url = `${API_BASE_URL}/students/${studentId}/resources`
      if (subject) {
        url += `?subject=${subject}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch resources')
      }

      return await response.json()
    } catch (error) {
      console.error('Get resources error:', error)
      throw error
    }
  },

  // Get student reports
  async getReports(studentId, reportType = null) {
    try {
      let url = `${API_BASE_URL}/students/${studentId}/reports`
      if (reportType) {
        url += `?type=${reportType}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch reports')
      }

      return await response.json()
    } catch (error) {
      console.error('Get reports error:', error)
      throw error
    }
  },

  // Get student attendance
  async getAttendance(studentId, month = null) {
    try {
      let url = `${API_BASE_URL}/students/${studentId}/attendance`
      if (month) {
        url += `?month=${month}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch attendance')
      }

      return await response.json()
    } catch (error) {
      console.error('Get attendance error:', error)
      throw error
    }
  }
}
