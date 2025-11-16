import { useState } from 'react'
import { Plus, UserPlus, Stethoscope, CalendarPlus } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function QuickCreate() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const createPatient = async () => {
    setLoading(true); setMessage('')
    try {
      const res = await fetch(`${API_BASE}/api/patients`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: 'Walk-in Patient', age: 30, gender: 'Other' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setMessage(`Patient created: ${data.inserted_id}`)
    } catch (e) {
      setMessage(`Error: ${e.message}`)
    } finally { setLoading(false) }
  }

  const createDoctor = async () => {
    setLoading(true); setMessage('')
    try {
      const res = await fetch(`${API_BASE}/api/doctors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name: 'On-call Doctor', specialization: 'General' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setMessage(`Doctor created: ${data.inserted_id}`)
    } catch (e) {
      setMessage(`Error: ${e.message}`)
    } finally { setLoading(false) }
  }

  const createAppointment = async () => {
    setLoading(true); setMessage('')
    try {
      // For demo: use placeholder patient/doctor IDs; in real use select from lists
      const res = await fetch(`${API_BASE}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patient_id: 'patient-id', doctor_id: 'doctor-id', date_time: new Date().toISOString(), reason: 'Consultation' })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed')
      setMessage(`Appointment created: ${data.inserted_id}`)
    } catch (e) {
      setMessage(`Error: ${e.message}`)
    } finally { setLoading(false) }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-6" id="quick">
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Quick actions</h2>
          <Plus className="text-gray-400" size={20} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button onClick={createPatient} disabled={loading} className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:border-blue-500 hover:bg-blue-50 transition">
            <UserPlus className="text-blue-600"/> New Patient
          </button>
          <button onClick={createDoctor} disabled={loading} className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:border-emerald-500 hover:bg-emerald-50 transition">
            <Stethoscope className="text-emerald-600"/> New Doctor
          </button>
          <button onClick={createAppointment} disabled={loading} className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:border-purple-500 hover:bg-purple-50 transition">
            <CalendarPlus className="text-purple-600"/> New Appointment
          </button>
        </div>
        {message && (
          <div className="mt-4 text-sm text-gray-700 bg-gray-50 p-2 rounded">{message}</div>
        )}
      </div>
    </section>
  )
}
