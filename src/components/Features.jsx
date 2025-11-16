import { ShieldCheck, Gauge, Cog, Zap } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Keamanan Teruji', desc: 'Sistem pengereman ABS, kontrol traksi, dan rangka kokoh untuk berkendara percaya diri.' },
  { icon: Gauge, title: 'Performa Tinggi', desc: 'Mesin efisien dengan akselerasi responsif dan top speed kompetitif di kelasnya.' },
  { icon: Cog, title: 'Teknologi Canggih', desc: 'Panel instrumen digital, riding modes, dan konektivitas smartphone.' },
  { icon: Zap, title: 'Efisiensi Optimal', desc: 'Konsumsi bahan bakar hemat tanpa mengorbankan tenaga.' },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-red-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Fitur Unggulan</h2>
          <p className="text-gray-600 mt-2">Teknologi dan keamanan yang dirancang untuk setiap perjalanan.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="p-6 bg-white rounded-xl border border-red-100 shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-red-100 text-red-700 flex items-center justify-center mb-4">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
