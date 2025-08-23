// Teacher service for handling teacher-related API calls

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

const getAuthHeaders = () => {
  const token = localStorage.getItem('token')
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  }
}

export const teacherService = {
  // Get teacher profile
  async getProfile(teacherId) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch teacher profile')
      }

      return await response.json()
    } catch (error) {
      console.error('Get teacher profile error:', error)
      throw error
    }
  },

  // Get teacher classes
  async getClasses(teacherId, semester = null) {
    try {
      let url = `${API_BASE_URL}/teachers/${teacherId}/classes`
      if (semester) {
        url += `?semester=${semester}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch classes')
      }

      return await response.json()
    } catch (error) {
      console.error('Get classes error:', error)
      throw error
    }
  },

  // Get class students
  async getClassStudents(teacherId, classId) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/students`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch class students')
      }

      return await response.json()
    } catch (error) {
      console.error('Get class students error:', error)
      throw error
    }
  },

  // Create assignment
  async createAssignment(teacherId, classId, assignmentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/assignments`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(assignmentData),
      })

      if (!response.ok) {
        throw new Error('Failed to create assignment')
      }

      return await response.json()
    } catch (error) {
      console.error('Create assignment error:', error)
      throw error
    }
  },

  // Update assignment
  async updateAssignment(teacherId, classId, assignmentId, assignmentData) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/assignments/${assignmentId}`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(assignmentData),
      })

      if (!response.ok) {
        throw new Error('Failed to update assignment')
      }

      return await response.json()
    } catch (error) {
      console.error('Update assignment error:', error)
      throw error
    }
  },

  // Delete assignment
  async deleteAssignment(teacherId, classId, assignmentId) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/assignments/${assignmentId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to delete assignment')
      }

      return await response.json()
    } catch (error) {
      console.error('Delete assignment error:', error)
      throw error
    }
  },

  // Take attendance
  async takeAttendance(teacherId, classId, attendanceData) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/attendance`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(attendanceData),
      })

      if (!response.ok) {
        throw new Error('Failed to take attendance')
      }

      return await response.json()
    } catch (error) {
      console.error('Take attendance error:', error)
      throw error
    }
  },

  // Get attendance history
  async getAttendanceHistory(teacherId, classId, date = null) {
    try {
      let url = `${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/attendance`
      if (date) {
        url += `?date=${date}`
      }

      const response = await fetch(url, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch attendance history')
      }

      return await response.json()
    } catch (error) {
      console.error('Get attendance history error:', error)
      throw error
    }
  },

  // Update grades
  async updateGrades(teacherId, classId, gradesData) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/grades`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify(gradesData),
      })

      if (!response.ok) {
        throw new Error('Failed to update grades')
      }

      return await response.json()
    } catch (error) {
      console.error('Update grades error:', error)
      throw error
    }
  },

  // Upload resource
  async uploadResource(teacherId, classId, resourceData) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/resources`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(resourceData),
      })

      if (!response.ok) {
        throw new Error('Failed to upload resource')
      }

      return await response.json()
    } catch (error) {
      console.error('Upload resource error:', error)
      throw error
    }
  },

  // Get class resources
  async getClassResources(teacherId, classId) {
    try {
      const response = await fetch(`${API_BASE_URL}/teachers/${teacherId}/classes/${classId}/resources`, {
        headers: getAuthHeaders(),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch class resources')
      }

      return await response.json()
    } catch (error) {
      console.error('Get class resources error:', error)
      throw error
    }
  }
}
