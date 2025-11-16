export default function Solutions() {
  const sections = [
    { title: 'OPD', points: ['Appointments & queue', 'Token & SMS reminders', 'Patient portal'] },
    { title: 'IPD', points: ['ADT & bed management', 'Diet & nursing notes', 'OT scheduling'] },
    { title: 'Billing', points: ['OP/IP billing', 'Insurance claims', 'Doctor payouts'] },
    { title: 'LIS', points: ['Sample tracking', 'Test catalog', 'Report PDFs & analyzer integration'] },
    { title: 'Pharmacy', points: ['Inventory & stock', 'Batch/expiry', 'Purchase & GRN'] },
    { title: 'Telemedicine', points: ['Video consult', 'e‑Prescription', 'Home tests & digital payments'] },
    { title: 'Analytics', points: ['BI dashboards', 'Data lake', 'Predictive analytics'] },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Solutions & Modules</h1>
      <p className="text-gray-600 mt-2">Deep-dive into each module with outcomes and key workflows.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {sections.map((s) => (
          <div key={s.title} className="p-6 rounded-xl border bg-white">
            <h3 className="font-semibold text-gray-900">{s.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {s.points.map((p) => (<li key={p}>• {p}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
