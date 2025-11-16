import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SiteNavbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const NavLink = ({ to, label }) => (
    <Link to={to} onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 ${location.pathname === to ? 'text-white' : 'text-white/80'}`}>
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 bg-[#1A3B6E]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded bg-white/10 grid place-items-center font-bold">NM</div>
            <span className="font-semibold">Nilkanth Medico</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <a href="/#features" className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white">Features</a>
            <a href="/#modules" className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white">Modules</a>
            <a href="/#integrations" className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white">Integrations</a>
            <a href="/#pricing" className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white">Pricing</a>
            <NavLink to="/solutions" label="Solutions" />
            <NavLink to="/technology" label="Technology" />
            <NavLink to="/resources" label="Resources" />
            <NavLink to="/about" label="About" />
            <NavLink to="/support" label="Support" />
            <NavLink to="/demo" label="Demo" />
            <a href="/#contact" className="ml-2 inline-flex items-center rounded-md bg-white text-[#1A3B6E] px-3 py-2 text-sm font-semibold hover:bg-white/90">Get Demo</a>
          </nav>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#1A3B6E]">
          <div className="max-w-6xl mx-auto px-4 py-2 grid gap-1">
            <a href="/#features" onClick={() => setOpen(false)} className="text-white/90 py-2">Features</a>
            <a href="/#modules" onClick={() => setOpen(false)} className="text-white/90 py-2">Modules</a>
            <a href="/#integrations" onClick={() => setOpen(false)} className="text-white/90 py-2">Integrations</a>
            <a href="/#pricing" onClick={() => setOpen(false)} className="text-white/90 py-2">Pricing</a>
            <NavLink to="/solutions" label="Solutions" />
            <NavLink to="/technology" label="Technology" />
            <NavLink to="/resources" label="Resources" />
            <NavLink to="/about" label="About" />
            <NavLink to="/support" label="Support" />
            <NavLink to="/demo" label="Demo" />
            <a href="/#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-md bg-white text-[#1A3B6E] px-3 py-2 text-sm font-semibold hover:bg-white/90">Get Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
