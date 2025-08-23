import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('schoolPortalUser')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('schoolPortalUser')
      }
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      // Simulate API call
      const response = await simulateLogin(credentials)
      
      if (response.success) {
        const userData = {
          id: response.user.id,
          username: response.user.username,
          email: response.user.email,
          role: response.user.role,
          name: response.user.name,
          token: response.token
        }
        
        setUser(userData)
        localStorage.setItem('schoolPortalUser', JSON.stringify(userData))
        return { success: true }
      } else {
        return { success: false, message: response.message }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, message: 'An error occurred during login' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('schoolPortalUser')
  }

  const updateUser = (userData) => {
    setUser(userData)
    localStorage.setItem('schoolPortalUser', JSON.stringify(userData))
  }

  const hasRole = (requiredRole) => {
    if (!user) return false
    return user.role === requiredRole
  }

  const hasAnyRole = (requiredRoles) => {
    if (!user) return false
    return requiredRoles.includes(user.role)
  }

  const value = {
    user,
    loading,
    login,
    logout,
    updateUser,
    hasRole,
    hasAnyRole,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Simulate login API call
const simulateLogin = async (credentials) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock user data based on credentials
  const mockUsers = {
    'student@school.com': {
      id: 1,
      username: 'student1',
      email: 'student@school.com',
      role: 'student',
      name: 'John Student'
    },
    'parent@school.com': {
      id: 2,
      username: 'parent1',
      email: 'parent@school.com',
      role: 'parent',
      name: 'Jane Parent'
    },
    'teacher@school.com': {
      id: 3,
      username: 'teacher1',
      email: 'teacher@school.com',
      role: 'teacher',
      name: 'Mr. Johnson'
    },
    'admin@school.com': {
      id: 4,
      username: 'admin1',
      email: 'admin@school.com',
      role: 'admin',
      name: 'Admin User'
    }
  }
  
  const user = mockUsers[credentials.email]
  
  if (user && credentials.password === 'password') {
    return {
      success: true,
      user,
      token: 'mock-jwt-token-' + Date.now()
    }
  }
  
  return {
    success: false,
    message: 'Invalid credentials'
  }
}
