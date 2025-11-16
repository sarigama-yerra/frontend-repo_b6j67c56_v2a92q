export default function Support() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Support</h1>
      <p className="text-gray-600 mt-2">Helpdesk, training, FAQs, and documentation.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Helpdesk</h3>
          <p className="text-sm text-gray-700 mt-2">Raise tickets and track resolution.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Training</h3>
          <p className="text-sm text-gray-700 mt-2">Onsite and remote sessions for all roles.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">FAQs</h3>
          <p className="text-sm text-gray-700 mt-2">Common questions answered with step‑by‑step guides.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Documentation</h3>
          <p className="text-sm text-gray-700 mt-2">User manuals and product documentation.</p>
        </div>
      </div>
    </div>
  )
}
