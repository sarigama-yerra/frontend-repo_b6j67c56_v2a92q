export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
      <p className="text-gray-600 mt-2">Blogs, case studies, brochures, whitepapers, and demo videos.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Blog</h3>
          <p className="text-sm text-gray-700 mt-2">Healthcare trends, HIMS benefits, digital hospital best practices.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Case Studies</h3>
          <p className="text-sm text-gray-700 mt-2">Stories from hospitals that improved operations with our platform.</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Whitepapers</h3>
          <p className="text-sm text-gray-700 mt-2">Download product brochures and architecture overviews (PDF).</p>
        </div>
        <div className="p-6 rounded-xl border bg-white">
          <h3 className="font-semibold text-gray-900">Demo Videos</h3>
          <p className="text-sm text-gray-700 mt-2">Short walkthroughs of modules and processes.</p>
        </div>
      </div>
    </div>
  )
}
