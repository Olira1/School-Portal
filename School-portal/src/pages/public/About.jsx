import React from 'react'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We strive for academic excellence and continuous improvement in all aspects of education.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'Embracing technology and modern teaching methods to enhance learning experiences.',
      icon: '🚀'
    },
    {
      title: 'Community',
      description: 'Building strong partnerships between students, parents, teachers, and administrators.',
      icon: '🤝'
    },
    {
      title: 'Growth',
      description: 'Fostering personal and academic growth in a supportive environment.',
      icon: '🌱'
    }
  ]

  const timeline = [
    {
      year: '1999',
      title: 'School Founded',
      description: 'Established with a vision to provide quality education to the community.'
    },
    {
      year: '2005',
      title: 'Technology Integration',
      description: 'Began integrating computers and digital tools into the curriculum.'
    },
    {
      year: '2015',
      title: 'Digital Transformation',
      description: 'Launched the first version of our online student portal.'
    },
    {
      year: '2024',
      title: 'Modern Portal',
      description: 'Comprehensive school management system with role-based access.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated to excellence in education for over 25 years, we provide a nurturing 
            environment where students can thrive academically and personally.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card title="Our Mission" className="bg-blue-50">
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional educational experiences that inspire students to become 
                lifelong learners, critical thinkers, and responsible global citizens. We are 
                committed to fostering academic excellence, character development, and 
                innovative thinking in a supportive and inclusive environment.
              </p>
            </Card>
            
            <Card title="Our Vision" className="bg-green-50">
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution that prepares students for success in 
                an ever-changing world. We envision a community where every student discovers 
                their potential, develops essential skills, and builds a strong foundation 
                for future achievements.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our school's history
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the difference that quality education and modern technology can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth/login">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
            </Link>
            <Link to="/">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
