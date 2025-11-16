import { ArrowRight, CheckCircle2, Shield, Layers, Phone, Mail, MapPin, IndianRupee, Users, Stethoscope, CalendarDays, FlaskConical, FileStack, Pill, Activity, HeartPulse, Building2, Globe, Languages } from 'lucide-react'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-12">
    <div className="mb-8">
      {title && <h2 className="text-2xl font-bold text-gray-900">{title}</h2>}
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
    {children}
  </section>
)

export default function Landing() {
  const features = [
    { label: 'Patient Registration & EMR (structured notes, templates)', icon: Users },
    { label: 'Appointment & Queue Management (token, SMS reminders)', icon: CalendarDays },
    { label: 'Outpatient (OP) & Inpatient (IP) Management', icon: Building2 },
    { label: 'Laboratory Information System (LIS) & Radiology (RIS) integration', icon: FlaskConical },
    { label: 'Billing, Claims & Insurance (PMJAY / TPA workflows)', icon: FileStack },
    { label: 'Pharmacy & Inventory Management (batch, expiry tracking)', icon: Pill },
    { label: 'Operation Theater (OT) scheduling & anesthesia records', icon: HeartPulse },
    { label: 'Reports & Dashboards (finance, utilization, KPIs)', icon: Activity },
    { label: 'Role-based access control & audit logs', icon: Shield },
    { label: 'Integration APIs (ABDM, AYUSH modules, HMIS/ERPs, labs, devices)', icon: Globe },
    { label: 'Mobile-friendly PWA for doctors & nurses', icon: Stethoscope },
  ]

  const modules = [
    { title: 'Patient Portal / EMR', desc: 'Complete digital patient record: demographics, visits, vitals, prescriptions, attachments, and ABHA linking.' },
    { title: 'OP & IP Management', desc: 'Manage appointments, outpatient flows, admissions, transfers, and discharge summary workflows.' },
    { title: 'Laboratory (LIS)', desc: 'Test catalog, sample tracking, configurable result templates, automated report generation (PDF), and HL7/API connectivity.' },
    { title: 'Radiology (RIS) & PACS', desc: 'Order, track, and receive radiology reports; simple integration with common PACS systems.' },
    { title: 'Billing & Financials', desc: 'Patient bills, package management, credit notes, GST-ready invoices, and day-wise financial reports.' },
    { title: 'Pharmacy & Inventory', desc: 'Purchase orders, GRN, stock ledger, batch/expiry control, and auto-reorder alerts.' },
    { title: 'Operation Theatre (OT)', desc: 'OT scheduling, consumables, theatre notes, and costing per procedure.' },
    { title: 'Reports & Analytics', desc: 'Pre-built and custom reports for clinical care, occupancy, revenue, and departmental performance.' },
  ]

  const benefits = [
    'Faster patient flow → reduced wait times',
    'Reduced billing leakage → improved revenue capture',
    'Better clinical documentation → fewer medico-legal risks',
    'Centralized data → easier audits and accreditations',
    'Improved staff productivity → lower operational costs',
  ]

  const faqs = [
    { q: 'Do you provide data migration from old systems?', a: 'Yes — we migrate patient records, billing data, and lab history with validation.' },
    { q: 'Is the solution cloud or on-premise?', a: 'We offer both cloud-hosted and on-premise deployments depending on hospital policy.' },
    { q: 'Do you support GST and insurance claims?', a: 'Yes — GST-ready invoices and insurance/TPA workflows (PMJAY support available).' },
    { q: 'Do you train hospital staff?', a: 'Yes — classroom and on-site training plus user manuals and video guides.' },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                Nilkanth Medico — Smart Hospital Management Software
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                End-to-end HIMS & EMR built for Indian hospitals and clinics — simplify workflows, secure patient data, and increase revenue.
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Complete hospital management — appointments, OP/IP, labs, billing, inventory, and compliance — all in one secure platform.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                  Get a Demo <ArrowRight size={18} />
                </a>
                <a href="#pricing" className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-lg border border-blue-200 hover:bg-blue-50 transition">
                  Request Pricing
                </a>
              </div>
              <div className="mt-6 p-3 rounded-lg bg-white/70 border text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Gujarati:</span> નીલકંઠ મેડિકો — હૉસ્પિટલ મેનેજમેન્ટ સોફ્ટવેર · ભારતીય હોસ્પિટલ માટે સંપૂર્ણ HIMS અને EMR — રોજબરોજના કાર્યો સરળ બનાવો, દર્દી ડેટા સુરક્ષિત રાખો.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1">
                <div className="rounded-2xl bg-white p-6 min-h-[260px] flex flex-col justify-center">
                  <p className="text-gray-700 text-sm">
                    Built for Indian hospitals — OP/IP, AYUSH, government schemes like PMJAY; ABDM-ready. Modular, scalable, secure and compliant.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Role-based access & audit trails</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Encrypted storage & privacy best practices</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Local support & implementation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <Section id="why" title="Why Choose Nilkanth Medico">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-xl border">
            <h3 className="font-semibold text-gray-800">Built for Indian hospitals</h3>
            <p className="text-sm text-gray-600 mt-2">Designed with Indian workflows (OP/IP, AYUSH, government schemes like PMJAY/ABDM-ready).</p>
          </div>
          <div className="p-5 bg-white rounded-xl border">
            <h3 className="font-semibold text-gray-800">Modular & Scalable</h3>
            <p className="text-sm text-gray-600 mt-2">Start small, grow to multispecialty or chain hospitals without re-implementation.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border">
            <h3 className="font-semibold text-gray-800">Secure & Compliant</h3>
            <p className="text-sm text-gray-600 mt-2">Role-based access, audit trails, encrypted storage, and data privacy best practices.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border">
            <h3 className="font-semibold text-gray-800">Local support & implementation</h3>
            <p className="text-sm text-gray-600 mt-2">On-ground training, customization, and timely updates.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border">
            <h3 className="font-semibold text-gray-800">Affordable subscription models</h3>
            <p className="text-sm text-gray-600 mt-2">Transparent pricing for small clinics to large hospitals.</p>
          </div>
          <div className="p-5 bg-white rounded-xl border">
            <h3 className="font-semibold text-gray-800">Integration-first</h3>
            <p className="text-sm text-gray-600 mt-2">ABDM, AYUSH, labs/devices, HMIS/ERP — future-ready APIs.</p>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section id="features" title="Key Features">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="p-4 rounded-xl border bg-white flex items-start gap-3">
              <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center flex-shrink-0">
                <f.icon size={18} />
              </div>
              <p className="text-sm text-gray-700">{f.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules */}
      <Section id="modules" title="Product Modules">
        <div className="grid md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="p-5 rounded-xl border bg-white">
              <h3 className="font-semibold text-gray-800">{m.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section id="benefits" title="Benefits for Hospitals">
        <ul className="space-y-2">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
              <CheckCircle2 className="text-emerald-600 mt-0.5" size={18} /> {b}
            </li>
          ))}
        </ul>
      </Section>

      {/* Integrations & Compliance */}
      <Section id="integrations" title="Integrations & Compliance">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold text-gray-800">Standards & APIs</h3>
            <p className="text-sm text-gray-600 mt-2">HL7, FHIR-ready APIs, secure REST endpoints. ABDM / Health ID (ABHA), PMJAY / Ayushman Bharat claim support.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold text-gray-800">Lab & Device integrations</h3>
            <p className="text-sm text-gray-600 mt-2">Connect analyzers via standard protocols; RIS/PACS connectivity.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold text-gray-800">Data security</h3>
            <p className="text-sm text-gray-600 mt-2">AES encryption, HTTPS, role-based access control, and audit logs.</p>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Pricing" subtitle="Sample subscription tiers — adjust as required">
        <div className="grid md:grid-cols-3 gap-6">
          {[ 
            { name: 'Starter — For small clinics', price: 'Monthly / Annual', points: ['Patient records, OP, basic billing, appointments', '1–2 users, PWA access'] },
            { name: 'Professional — For medium hospitals (recommended)', price: 'Contact for quote', highlight: true, points: ['All Starter + IP, LIS basic, pharmacy, inventory, reporting', 'Up to 20 users, onboarding & training'] },
            { name: 'Enterprise — For multispecialty hospitals & chains', price: 'Tailored plan', points: ['All Professional + advanced LIS/RIS, integrations, customized workflows, dedicated support, SLA', 'Unlimited users, data migration, onsite implementation'] },
          ].map((p, i) => (
            <div key={i} className={`p-6 rounded-2xl border bg-white ${p.highlight ? 'ring-2 ring-blue-600' : ''}`}>
              <h3 className="font-semibold text-gray-900">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2"><CheckCircle2 className="text-emerald-600 mt-0.5" size={18}/> {pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-600">Contact us for a tailored quote. Pricing depends on bed count, modules, and integrations.</div>
      </Section>

      {/* Demo & Implementation */}
      <Section id="process" title="Demo & Implementation Process">
        <ol className="grid md:grid-cols-5 gap-4 list-decimal list-inside">
          <li className="p-4 rounded-xl border bg-white">Discovery call — Understand your workflows & priority modules.</li>
          <li className="p-4 rounded-xl border bg-white">Demo — Role-based demo for admin, doctors, lab, and accounts.</li>
          <li className="p-4 rounded-xl border bg-white">Pilot — 2–4 week pilot in a department (optional).</li>
          <li className="p-4 rounded-xl border bg-white">Implementation — Data migration, integrations, training.</li>
          <li className="p-4 rounded-xl border bg-white">Go-live & Support — Onsite/remote support and iterative improvements.</li>
        </ol>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Testimonials">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border bg-white">
            <p className="text-gray-700">“Nilkanth Medico helped reduce patient waiting time by 40% and made our billing accurate.”</p>
            <p className="mt-3 text-sm text-gray-500">— Dr. [Name], [Hospital]</p>
          </div>
          <div className="p-6 rounded-xl border bg-white">
            <p className="text-gray-700">“Implementation was smooth and our staff adapted quickly with the training provided.”</p>
            <p className="mt-3 text-sm text-gray-500">— [Administrator], [Hospital]</p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">(Add real client testimonials here.)</p>
      </Section>

      {/* FAQs */}
      <Section id="faqs" title="FAQs">
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border bg-white p-4">
              <summary className="font-medium text-gray-800 cursor-pointer flex items-center justify-between">
                {f.q}
                <ArrowRight className="transition-transform group-open:rotate-90 text-gray-400" size={18} />
              </summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get a free demo" subtitle="Fill the form or contact us directly">
        <div className="grid md:grid-cols-2 gap-8">
          <form className="bg-white rounded-xl border p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full border rounded-lg px-3 py-2" placeholder="Full name" />
              <input className="w-full border rounded-lg px-3 py-2" placeholder="Work email" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full border rounded-lg px-3 py-2" placeholder="Phone number" />
              <input className="w-full border rounded-lg px-3 py-2" placeholder="Hospital / Clinic" />
            </div>
            <textarea className="w-full border rounded-lg px-3 py-2" rows="4" placeholder="Tell us your requirements (modules, bed count, timeline)"></textarea>
            <button type="button" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
              Submit Request <ArrowRight size={18} />
            </button>
            <p className="text-xs text-gray-500">This is a demo form. Replace with your preferred form handler.</p>
          </form>
          <div className="bg-white rounded-xl border p-6 space-y-4">
            <div className="flex items-center gap-3 text-gray-700"><Phone size={18} className="text-blue-600"/> [Phone Number]</div>
            <div className="flex items-center gap-3 text-gray-700"><Mail size={18} className="text-blue-600"/> [email@example.com]</div>
            <div className="flex items-center gap-3 text-gray-700"><MapPin size={18} className="text-blue-600"/> Nilkanth Medico Pvt. Ltd. · Address: [Your office address]</div>
            <div className="pt-2 text-sm text-gray-600">Replace placeholders with actual contact details.</div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Nilkanth Medico Pvt. Ltd.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Careers</a>
            <a href="#contact" className="hover:text-blue-600">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
