export default function Pricing() {
  const tiers = [
    { name: 'Clinic', price: 'Monthly / Annual', points: ['OP, EMR, basic billing', '1–2 users, PWA access'] },
    { name: 'Hospital (recommended)', price: 'Contact for quote', highlight: true, points: ['OP + IP, LIS basic, pharmacy, inventory, reporting', 'Up to 20 users, onboarding & training'] },
    { name: 'Enterprise', price: 'Tailored plan', points: ['Advanced LIS/RIS, integrations, customization, SLA', 'Unlimited users, migration, onsite implementation'] },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Pricing & Plans</h1>
      <p className="text-gray-600 mt-2">Choose a plan that fits your hospital. Contact us for a tailored quote.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tiers.map((p) => (
          <div key={p.name} className={`p-6 rounded-2xl border bg-white ${p.highlight ? 'ring-2 ring-[#1A3B6E]' : ''}`}>
            <h3 className="font-semibold text-gray-900">{p.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {p.points.map((pt) => (<li key={pt}>• {pt}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
