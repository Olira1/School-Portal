import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(t)
  }, [])

  // Keep only Attendance in KPI cards
  const kpis = [{ label: 'Attendance', value: '96%', tone: 'success' }]

  const schedule = [
    {
      time: '08:00',
      subject: 'Mathematics',
      room: 'Room 301',
      teacher: 'Mr. Davis',
      color: 'var(--success)',
    },
    {
      time: '10:00',
      subject: 'English',
      room: 'Room 201',
      teacher: 'Ms. Johnson',
      color: 'var(--primary)',
    },
    {
      time: '14:00',
      subject: 'Biology Lab',
      room: 'Lab 105',
      teacher: 'Dr. Smith',
      color: 'var(--secondary)',
    },
  ]

  const announcements = [
    { id: 1, title: 'New Semester Calendar', priority: 'High', date: 'Mar 15' },
    {
      id: 2,
      title: 'Library: New Digital Resources',
      priority: 'Medium',
      date: 'Mar 12',
    },
    {
      id: 3,
      title: 'Sports Day Registration',
      priority: 'Low',
      date: 'Mar 10',
    },
  ]

  const greeting = () => {
    const h = now.getHours()
    if (h < 12) return 'Good morning'
    if (h < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{greeting()}, Emma</h1>
          <p className="text-slate-500">
            {now.toLocaleDateString(undefined, {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 bg-white hover:bg-slate-50">
            🔔
          </button>
          <button className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-300 bg-white hover:bg-slate-50">
            👤
          </button>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="relative rounded-lg border border-slate-200 bg-white overflow-hidden"
          >
            <div
              className="absolute left-0 top-0 h-full w-1"
              style={{ backgroundColor: `var(--${k.tone})` }}
            />
            <div className="p-4 pl-6">
              <div className="text-2xl font-semibold">{k.value}</div>
              <div className="text-slate-500">{k.label}</div>
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200">
            <span className="font-medium">Quick Actions</span>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            <Link
              className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 no-underline"
              to="/assignments"
            >
              View Assignments
            </Link>
            <Link
              className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 no-underline"
              to="/grades"
            >
              Check Grades
            </Link>
            <Link
              className="inline-flex items-center justify-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700 no-underline"
              to="/reports"
            >
              Download Report
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
        <section className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200">
            <h3 className="font-medium">Today’s Schedule</h3>
          </div>
          <div className="p-4">
            {schedule.map((s) => (
              <div
                key={s.time}
                className="grid grid-cols-[64px_16px_1fr] items-start gap-3 py-3"
              >
                <div className="text-slate-600">
                  <span className="font-medium">{s.time}</span>
                </div>
                <div
                  className="w-4 h-4 rounded-full mt-1"
                  style={{ backgroundColor: s.color }}
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium" style={{ color: s.color }}>
                      {s.subject}
                    </span>
                    <span className="text-slate-500">📍 {s.room}</span>
                  </div>
                  <div className="text-slate-600">👤 {s.teacher}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-slate-200 bg-white overflow-hidden">
          <div className="px-4 py-3 border-b border-slate-200">
            <h3 className="font-medium">Announcements</h3>
          </div>
          <div className="p-4 space-y-3">
            {announcements.map((a) => (
              <div
                key={a.id}
                className="p-3 rounded-md border border-slate-200"
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      a.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : a.priority === 'Medium'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {a.priority}
                  </span>
                  <span className="text-slate-500 text-sm">{a.date}</span>
                </div>
                <div className="font-medium">{a.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
