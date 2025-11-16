import { Hospital, CalendarDays, Users, Stethoscope } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-600 text-white grid place-items-center">
            <Hospital size={22} />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800 leading-tight">Nilkanth Medico Private Limited</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Hospital Management Software</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#patients" className="hover:text-blue-600 flex items-center gap-1"><Users size={16}/> Patients</a>
          <a href="#doctors" className="hover:text-blue-600 flex items-center gap-1"><Stethoscope size={16}/> Doctors</a>
          <a href="#appointments" className="hover:text-blue-600 flex items-center gap-1"><CalendarDays size={16}/> Appointments</a>
        </nav>
      </div>
    </header>
  )
}
