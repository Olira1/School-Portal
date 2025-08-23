import React, { useState } from 'react'

const allTags = [
  'Math',
  'English',
  'Biology',
  'PDF',
  'Slides',
  'Link',
  'Mr. Davis',
  'Ms. Johnson',
]

const initialResources = [
  {
    id: 1,
    title: 'Math Chapter 5 - Algebra',
    type: 'PDF',
    subject: 'Math',
    teacher: 'Mr. Davis',
    date: 'Mar 10',
  },
  {
    id: 2,
    title: 'English: Shakespeare Themes',
    type: 'Slides',
    subject: 'English',
    teacher: 'Ms. Johnson',
    date: 'Mar 12',
  },
  {
    id: 3,
    title: 'Biology Lab Guide',
    type: 'PDF',
    subject: 'Biology',
    teacher: 'Dr. Smith',
    date: 'Mar 14',
  },
  {
    id: 4,
    title: 'Math Problem Set Links',
    type: 'Link',
    subject: 'Math',
    teacher: 'Mr. Davis',
    date: 'Mar 15',
  },
]

const typeColor = (type) => {
  switch (type) {
    case 'PDF':
      return '#ef4444'
    case 'Slides':
      return '#a855f7'
    case 'Link':
      return '#0ea5e9'
    default:
      return 'var(--primary)'
  }
}

const Resources = () => {
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState([])

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const filtered = initialResources.filter((r) => {
    const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase())
    const matchesTags =
      activeTags.length === 0 ||
      activeTags.every((t) => [r.subject, r.type, r.teacher].includes(t))
    return matchesQuery && matchesTags
  })

  return (
    <div className="resources w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 m-0">Resources</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">➕ Upload</button>
        </div>
      </div>

      <div className="card mb-6">
        <div className="p-4">
          <div className="mb-3">
            <input
              className="form-input"
              placeholder="Search resources (e.g., Math Chapter 5 PDF)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map((t) => (
              <button
                key={t}
                className={`tag ${activeTags.includes(t) ? 'active' : ''}`}
                onClick={() => toggleTag(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((r) => (
          <div
            key={r.id}
            className="relative bg-white border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <div
              className="absolute top-3 right-3 text-white text-xs font-bold px-2 py-0.5 rounded"
              style={{ backgroundColor: typeColor(r.type) }}
            >
              {r.type}
            </div>
            <h3 className="mt-1 mb-3 font-bold text-slate-800">{r.title}</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="chip">{r.subject}</span>
              <span className="chip">{r.teacher}</span>
              <span className="muted">{r.date}</span>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-primary">Open</button>
              <button className="btn btn-secondary">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
