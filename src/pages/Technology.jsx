export default function Technology() {
  const items = [
    { title: 'Architecture', desc: 'Single data lake with pre‑integrated modules.' },
    { title: 'Security', desc: 'Data privacy, encryption in transit & at rest, RBAC, audit logs.' },
    { title: 'Deployment', desc: 'Cloud or on‑premise with managed services.' },
    { title: 'Integrations', desc: 'APIs, device/lab connectivity, ABDM/PMJAY readiness.' },
    { title: 'Scalability', desc: 'AI‑ready, modular, and future‑proof.' },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Technology & Platform</h1>
      <p className="text-gray-600 mt-2">Enterprise‑grade foundation for digital hospitals.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {items.map((it) => (
          <div key={it.title} className="p-6 rounded-xl border bg-white">
            <h3 className="font-semibold text-gray-900">{it.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
