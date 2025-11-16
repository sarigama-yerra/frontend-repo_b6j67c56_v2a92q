import { useEffect, useState } from 'react'
import { Activity, Users, Stethoscope, CalendarDays } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Stats() {
  const [stats, setStats] = useState({ patients: 0, doctors: 0, appointments: 0 })

  useEffect(() => { fetchStats() }, [])

  const fetchStats = async () => {
    try {
      const [p, d, a] = await Promise.all([
        fetch(`${API_BASE}/api/patients`).then(r => r.json()),
        fetch(`${API_BASE}/api/doctors`).then(r => r.json()),
        fetch(`${API_BASE}/api/appointments`).then(r => r.json()),
      ])
      setStats({
        patients: p.items?.length || 0,
        doctors: d.items?.length || 0,
        appointments: a.items?.length || 0,
      })
    } catch (e) {
      // ignore for now
    }
  }

  const Card = ({ icon: Icon, label, value, color }) => (
    <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
      <div className={`h-10 w-10 rounded-lg grid place-items-center ${color}`}>
        <Icon className="text-white" size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-2xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  )

  return (
    <section className="max-w-6xl mx-auto px-4 py-6" id="stats">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card icon={Users} label="Patients" value={stats.patients} color="bg-blue-600" />
        <Card icon={Stethoscope} label="Doctors" value={stats.doctors} color="bg-emerald-600" />
        <Card icon={CalendarDays} label="Appointments" value={stats.appointments} color="bg-purple-600" />
      </div>
    </section>
  )
}
