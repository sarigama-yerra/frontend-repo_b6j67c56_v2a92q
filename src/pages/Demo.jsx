export default function Demo() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Book a Live Demo</h1>
      <p className="text-gray-600 mt-2">Request a pilot or schedule a walkthrough with our team.</p>
      <form className="bg-white rounded-xl border p-6 space-y-4 mt-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Full name" />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Work email" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Phone number" />
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Hospital / Clinic" />
        </div>
        <textarea className="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Preferred date/time, department, modules"></textarea>
        <button type="button" className="inline-flex items-center gap-2 bg-[#1A3B6E] text-white px-5 py-3 rounded-lg hover:bg-[#17406a]">Request Demo</button>
        <p className="text-xs text-gray-500">We can wire this to save submissions to the backend.</p>
      </form>
    </div>
  )
}
