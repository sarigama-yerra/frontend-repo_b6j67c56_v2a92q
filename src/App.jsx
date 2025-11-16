import Header from './components/Header'
import QuickCreate from './components/QuickCreate'
import Stats from './components/Stats'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />

      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-600 text-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-bold">Hospital Management Software</h2>
            <p className="text-blue-100 mt-1">Powered by Nilkanth Medico Private Limited</p>
            <div className="mt-4 text-sm text-blue-50">
              Manage patients, doctors, and appointments in one place. This starter includes live stats and quick action shortcuts to add sample records.
            </div>
          </div>
        </div>

        <Stats />
        <QuickCreate />
      </main>
    </div>
  )
}

export default App
