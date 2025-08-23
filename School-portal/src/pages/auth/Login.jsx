import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Card from '../../components/Card'
import Button from '../../components/Button'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await login(credentials)
      if (result.success) {
        // Redirect based on user role
        const user = JSON.parse(localStorage.getItem('schoolPortalUser'))
        if (user) {
          navigate(`/${user.role}`)
        }
      } else {
        setError(result.message)
      }
    } catch (err) {
      setError('An error occurred during login')
    } finally {
      setLoading(false)
    }
  }

  const demoAccounts = [
    { role: 'Student', email: 'student@school.com', password: 'password' },
    { role: 'Parent', email: 'parent@school.com', password: 'password' },
    { role: 'Teacher', email: 'teacher@school.com', password: 'password' },
    { role: 'Admin', email: 'admin@school.com', password: 'password' }
  ]

  const fillDemoAccount = (email, password) => {
    setCredentials({ email, password })
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your school portal account
          </p>
        </div>

        <Card>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={credentials.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </div>
          </form>
        </Card>

        {/* Demo Accounts */}
        <Card title="Demo Accounts" className="bg-blue-50">
          <p className="text-sm text-gray-600 mb-4">
            Use these demo accounts to test different portal experiences:
          </p>
          <div className="space-y-2">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => fillDemoAccount(account.email, account.password)}
                className="w-full text-left p-2 rounded border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <div className="font-medium text-blue-900">{account.role}</div>
                <div className="text-xs text-blue-700">{account.email}</div>
              </button>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Contact your school administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
