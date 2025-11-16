const models = [
  {
    name: 'Sport 150',
    price: 'Rp 25.500.000',
    img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
    badge: 'Baru',
  },
  {
    name: 'Street 250',
    price: 'Rp 38.900.000',
    img: 'https://images.unsplash.com/photo-1517423554151-9c5210ca948b?q=80&w=1200&auto=format&fit=crop',
    badge: 'Favorit',
  },
  {
    name: 'Adventure 400',
    price: 'Rp 76.200.000',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    badge: 'Terlaris',
  },
]

export default function Models() {
  return (
    <section id="models" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Model Unggulan</h2>
            <p className="text-gray-600 mt-2">Pilih motor yang sesuai dengan gaya dan kebutuhan Anda.</p>
          </div>
          <a href="#pricing" className="hidden sm:inline-flex text-red-600 hover:text-red-700 font-semibold">Lihat Harga</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {models.map((m) => (
            <div key={m.name} className="group rounded-xl overflow-hidden bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={m.img} alt={m.name} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">{m.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900">{m.name}</h3>
                <p className="text-red-700 font-semibold mt-1">{m.price}</p>
                <div className="mt-4 flex items-center gap-2">
                  <a href="#cta" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold">Tes Ride</a>
                  <button className="ring-1 ring-red-200 text-red-700 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-semibold">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
