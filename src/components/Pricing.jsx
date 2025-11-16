const tiers = [
  { name: 'Sport 150', price: 'Rp 25,5 jt', perks: ['ABS Single Channel', 'LCD Cluster', 'LED Lighting'] },
  { name: 'Street 250', price: 'Rp 38,9 jt', perks: ['Dual Disc Brake', 'Assist & Slipper', 'USD Fork'] },
  { name: 'Adventure 400', price: 'Rp 76,2 jt', perks: ['Ride-by-Wire', 'Traction Control', 'GPS Ready'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Harga</h2>
          <p className="text-gray-600 mt-2">Harga kompetitif dengan fitur terbaik di kelasnya.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-red-100 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
              <p className="text-3xl font-extrabold text-red-700 mt-2">{t.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-semibold">Tes Ride</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
