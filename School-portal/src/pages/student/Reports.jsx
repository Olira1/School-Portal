import React from 'react'

const Reports = () => {
  const kpis = [
    { label: 'Attendance (30d)', value: '94%' },
    { label: 'Average Grade', value: '89%' },
    { label: 'Completed Assignments', value: '27' },
  ]

  const bars = [72, 80, 65, 90, 84, 78, 92]
  const dist = [5, 9, 12, 8, 3]

  return (
    <div className="reports w-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 m-0">Reports</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary">⭳ Download All</button>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm"
          >
            <div className="text-xl font-bold text-slate-800">{k.value}</div>
            <div className="text-slate-500 font-medium">{k.label}</div>
          </div>
        ))}
      </section>

      <div className="grid-2 responsive">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Attendance Trend (Weekly)</h3>
          </div>
          <div className="flex items-end gap-2 h-44 p-2 bg-slate-50 border border-dashed border-slate-300 rounded-md m-4">
            {bars.map((b, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-blue-600"
                style={{ height: `${b}%` }}
              />
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Grades Distribution</h3>
          </div>
          <div className="flex flex-col gap-2 p-4">
            {dist.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <div
                  className="h-3 rounded bg-indigo-500"
                  style={{ width: `${(d / 12) * 100}%` }}
                />
                <span className="text-slate-500">Band {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="card">
        <div className="card-header">
          <h3 className="card-title">Downloads</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-3 border border-slate-200 rounded-lg p-3 bg-white">
            <div className="text-xl">📄</div>
            <div>
              <div className="font-bold text-slate-800">
                Grade Summary (PDF)
              </div>
              <div className="muted">Latest term performance overview</div>
            </div>
            <button className="btn btn-primary">Download</button>
          </div>
          <div className="grid grid-cols-[40px_1fr_auto] items-center gap-3 border border-slate-200 rounded-lg p-3 bg-white">
            <div className="text-xl">🗓️</div>
            <div>
              <div className="font-bold text-slate-800">
                Attendance Report (PDF)
              </div>
              <div className="muted">Absences and lateness by week</div>
            </div>
            <button className="btn btn-primary">Download</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Reports
