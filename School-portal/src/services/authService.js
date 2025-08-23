// Authentication service for handling login, logout, and user management

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

export const authService = {
  // Login user with credentials
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },

  // Logout user
  async logout() {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
      }
      
      // Clear local storage
      localStorage.removeItem('token')
      localStorage.removeItem('schoolPortalUser')
    } catch (error) {
      console.error('Logout error:', error)
    }
  },

  // Get current user profile
  async getCurrentUser() {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('No token found')
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to get user profile')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Get current user error:', error)
      throw error
    }
  },

  // Refresh access token
  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        throw new Error('No refresh token found')
      }

      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      })

      if (!response.ok) {
        throw new Error('Token refresh failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.accessToken)
      return data
    } catch (error) {
      console.error('Token refresh error:', error)
      throw error
    }
  },

  // Check if user is authenticated
  isAuthenticated() {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('schoolPortalUser')
    return !!(token && user)
  },

  // Get stored user data
  getStoredUser() {
    try {
      const userData = localStorage.getItem('schoolPortalUser')
      return userData ? JSON.parse(userData) : null
    } catch (error) {
      console.error('Error parsing stored user:', error)
      return null
    }
  }
}
