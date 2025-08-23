import React, { useState } from 'react'

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState('week') // 'day' or 'week'
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Mock data - replace with actual API calls
  const classSchedule = [
    {
      id: 1,
      subject: 'English',
      time: '10:00',
      duration: 60,
      room: 'Room 201',
      teacher: 'Ms. Johnson',
      day: 'Monday',
      type: 'lecture',
    },
    {
      id: 2,
      subject: 'Biology',
      time: '14:00',
      duration: 90,
      room: 'Lab 105',
      teacher: 'Dr. Smith',
      day: 'Monday',
      type: 'lab',
    },
    {
      id: 3,
      subject: 'Mathematics',
      time: '08:00',
      duration: 60,
      room: 'Room 301',
      teacher: 'Mr. Davis',
      day: 'Tuesday',
      type: 'lecture',
    },
    {
      id: 4,
      subject: 'History',
      time: '11:00',
      duration: 60,
      room: 'Room 102',
      teacher: 'Prof. Wilson',
      day: 'Wednesday',
      type: 'lecture',
    },
    {
      id: 5,
      subject: 'Mathematics',
      time: '15:00',
      duration: 60,
      room: 'Room 301',
      teacher: 'Mr. Davis',
      day: 'Thursday',
      type: 'lecture',
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'English TO CU AM',
      time: '10:00',
      date: 'Apr 15',
      type: 'class',
    },
    {
      id: 2,
      title: 'Biology Room PM',
      time: '14:00',
      date: 'Apr 15',
      type: 'lab',
    },
    {
      id: 3,
      title: 'Math',
      time: '08:00',
      date: 'Apr 16',
      type: 'class',
    },
  ]

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const getCurrentMonth = () => {
    return months[currentDate.getMonth()]
  }

  const getCurrentYear = () => {
    return currentDate.getFullYear()
  }

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDay = firstDay.getDay()

    const days = []

    // Add previous month's days
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        isToday: false,
      })
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i)
      const today = new Date()
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        isToday: currentDate.toDateString() === today.toDateString(),
      })
    }

    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i)
      days.push({
        date: nextDate,
        isCurrentMonth: false,
        isToday: false,
      })
    }

    return days
  }

  const getClassesForDay = (date) => {
    const dayName = daysOfWeek[date.getDay()]
    return classSchedule.filter((cls) => cls.day === dayName)
  }

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1)
    } else {
      newDate.setMonth(newDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const formatTime = (time) => {
    return time
  }

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'lecture':
        return '📚'
      case 'lab':
        return '🧪'
      case 'class':
        return '🎓'
      default:
        return '📅'
    }
  }

  return (
    <div className="schedule">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-slate-800 m-0">Schedule</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">⋮</button>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-8">
        <div className="flex bg-slate-200 rounded-lg p-1 gap-1 inline-flex">
          <button
            className={`px-4 py-2 rounded-md font-medium ${viewMode === 'day' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
          <button
            className={`px-4 py-2 rounded-md font-medium ${viewMode === 'week' ? 'bg-white text-slate-800 shadow' : 'text-slate-500'}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
        </div>
      </div>

      {/* Calendar View */}
      <div className="mb-8">
        <div className="card">
          <div className="px-4 py-3 flex items-center justify-between">
            <button
              className="text-xl px-2 py-1 rounded hover:bg-slate-100"
              onClick={() => navigateMonth('prev')}
            >
              ←
            </button>
            <h3 className="text-lg font-semibold text-slate-800 m-0">
              {getCurrentMonth()} {getCurrentYear()}
            </h3>
            <button
              className="text-xl px-2 py-1 rounded hover:bg-slate-100"
              onClick={() => navigateMonth('next')}
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-7 gap-px bg-slate-200 rounded-lg overflow-hidden">
            {/* Days of week header */}
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="bg-slate-50 p-3 text-center font-semibold text-slate-700 text-sm"
              >
                {day.slice(0, 3)}
              </div>
            ))}

            {/* Calendar days */}
            {getDaysInMonth(currentDate).map((day, index) => (
              <div
                key={index}
                className={`bg-white p-3 min-h-[100px] cursor-pointer relative hover:bg-slate-50 ${!day.isCurrentMonth ? 'bg-slate-50 text-slate-400' : ''} ${day.isToday ? 'bg-blue-100 ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedDate(day.date)}
              >
                <span className="font-semibold text-slate-800 block mb-2">
                  {day.date.getDate()}
                </span>
                {day.isToday && (
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs px-1 rounded">
                    Today
                  </span>
                )}

                {/* Show classes for this day */}
                {day.isCurrentMonth &&
                  getClassesForDay(day.date).map((cls) => (
                    <div
                      key={cls.id}
                      className="bg-sky-50 text-sky-700 text-xs px-2 py-1 rounded mt-1 font-medium"
                    >
                      {cls.subject}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Details */}
      <div className="mb-8">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              {viewMode === 'day' ? 'Daily Schedule' : 'Weekly Schedule'} -{' '}
              {daysOfWeek[selectedDate.getDay()]}
            </h3>
          </div>

          <div className="p-4">
            {viewMode === 'day' ? (
              // Day view
              <div className="flex flex-col gap-4">
                {getClassesForDay(selectedDate).map((cls) => (
                  <div
                    key={cls.id}
                    className="flex gap-4 p-4 border border-slate-200 rounded-md bg-slate-50"
                  >
                    <div className="flex flex-col items-center min-w-[80px]">
                      <span className="font-semibold text-slate-800">
                        {cls.time}
                      </span>
                      <span className="text-xs text-slate-500">
                        {cls.duration}min
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xl">
                          {getEventTypeIcon(cls.type)}
                        </span>
                        <h4 className="text-lg font-semibold text-slate-800 m-0">
                          {cls.subject}
                        </h4>
                        <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs font-medium uppercase">
                          {cls.type}
                        </span>
                      </div>
                      <div className="flex gap-4 text-sm text-slate-600">
                        <span>📍 {cls.room}</span>
                        <span>👤 {cls.teacher}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Week view
              <div className="grid grid-cols-5 gap-4">
                {daysOfWeek.slice(1, 6).map((day) => (
                  <div
                    key={day}
                    className="border border-slate-200 rounded-md p-4 bg-slate-50"
                  >
                    <h4 className="text-base font-semibold text-slate-800 m-0 mb-4 text-center">
                      {day}
                    </h4>
                    <div className="flex flex-col gap-2">
                      {getClassesForDay(
                        new Date(
                          selectedDate.getTime() +
                            (daysOfWeek.indexOf(day) - selectedDate.getDay()) *
                              24 *
                              60 *
                              60 *
                              1000
                        )
                      ).map((cls) => (
                        <div
                          key={cls.id}
                          className="bg-white p-2 rounded border border-slate-200 text-sm"
                        >
                          <span className="block font-semibold text-slate-800">
                            {cls.time}
                          </span>
                          <span className="block text-slate-700">
                            {cls.subject}
                          </span>
                          <span className="block text-slate-500 text-xs">
                            {cls.room}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Upcoming Events</h3>
          </div>

          <div className="flex flex-col gap-3 p-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-4 p-4 border border-slate-200 rounded-md bg-slate-50"
              >
                <div className="min-w-[60px] font-semibold text-slate-800">
                  {event.time}
                </div>
                <div className="flex-1">
                  <h4 className="m-0 font-semibold text-slate-800">
                    {event.title}
                  </h4>
                  <span className="text-slate-500 text-sm">{event.date}</span>
                </div>
                <span className="text-xl">{getEventTypeIcon(event.type)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-end gap-4 items-center">
        <div className="flex gap-2">
          <button className="btn btn-secondary">A-</button>
          <button className="btn btn-secondary">A</button>
        </div>
        <div className="flex items-center gap-2">
          <label className="relative inline-block w-[50px] h-6">
            <input type="checkbox" className="peer sr-only" />
            <span className="absolute inset-0 bg-slate-300 rounded-full transition peer-checked:bg-blue-600" />
            <span className="absolute left-0.5 top-0.5 w-[18px] h-[18px] bg-white rounded-full transition peer-checked:translate-x-[26px]" />
          </label>
        </div>
        <div>
          <button className="btn btn-primary">🔌</button>
        </div>
      </div>
    </div>
  )
}

export default Schedule
