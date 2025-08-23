import React from 'react'
import HeroSection from '../../components/HeroSection'
import Card from '../../components/Card'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const features = [
    {
      title: 'Student Portal',
      description: 'Access grades, assignments, resources, and track your academic progress.',
      icon: '🎓',
      link: '/auth/login',
      color: 'bg-blue-50'
    },
    {
      title: 'Parent Portal',
      description: 'Monitor your child\'s education, view grades, and manage payments.',
      icon: '👨‍👩‍👧‍👦',
      link: '/auth/login',
      color: 'bg-green-50'
    },
    {
      title: 'Teacher Portal',
      description: 'Manage classes, grades, attendance, and share resources with students.',
      icon: '👨‍🏫',
      link: '/auth/login',
      color: 'bg-purple-50'
    },
    {
      title: 'Admin Portal',
      description: 'Comprehensive system management, reporting, and administrative tools.',
      icon: '⚙️',
      link: '/auth/login',
      color: 'bg-orange-50'
    }
  ]

  const stats = [
    { label: 'Students', value: '1,250+' },
    { label: 'Teachers', value: '85+' },
    { label: 'Classes', value: '45+' },
    { label: 'Years', value: '25+' }
  ]

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive school portal provides tailored experiences for every member of the educational community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className={`${feature.color} text-center hover:shadow-lg transition-shadow`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link to={feature.link}>
                  <Button variant="primary" size="small" className="w-full">
                    Access Portal
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our digital learning community and experience the future of education management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/login">
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-blue-600">
                Sign In Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="large" className="text-white hover:bg-blue-700">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
