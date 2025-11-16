export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">About Nilkanth Medico</h1>
      <p className="text-gray-600 mt-2">Mission: Digitize hospitals for better care and operational excellence.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Leadership & Team</h3>
          <p className="text-sm text-gray-700 mt-2">Seasoned healthcare technologists and implementers.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Partners</h3>
          <p className="text-sm text-gray-700 mt-2">Technology and implementation partners across India.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Careers</h3>
          <p className="text-sm text-gray-700 mt-2">Join us to build the next‑gen digital hospital platform.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Contact</h3>
          <p className="text-sm text-gray-700 mt-2">Phone, email, and address — see footer or the contact section on the homepage.</p>
        </div>
      </div>
    </div>
  )
}
