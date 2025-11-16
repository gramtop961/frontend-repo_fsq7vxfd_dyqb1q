import { useState } from 'react'

export default function CTA() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      phone: form.get('phone'),
      model: form.get('model'),
      preferred_date: form.get('preferred_date') || null,
      notes: form.get('notes') || null,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/testride`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error(`Gagal: ${res.status}`)
      const data = await res.json()
      setStatus({ ok: true, id: data.id })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="cta" className="py-16 bg-red-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Booking Tes Ride</h2>
            <p className="text-red-50 mt-2">Isi data Anda untuk merasakan langsung performa motor pilihan.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Nama Lengkap</label>
                <input name="name" required className="mt-1 w-full px-3 py-2 rounded-md ring-1 ring-red-200 focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">No. Telepon / WA</label>
                <input name="phone" required className="mt-1 w-full px-3 py-2 rounded-md ring-1 ring-red-200 focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-semibold text-gray-700">Model</label>
                <select name="model" className="mt-1 w-full px-3 py-2 rounded-md ring-1 ring-red-200 focus:ring-2 focus:ring-red-500 outline-none">
                  <option>Sport 150</option>
                  <option>Street 250</option>
                  <option>Adventure 400</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Tanggal Preferensi</label>
                <input type="date" name="preferred_date" className="mt-1 w-full px-3 py-2 rounded-md ring-1 ring-red-200 focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">Catatan</label>
                <input name="notes" className="mt-1 w-full px-3 py-2 rounded-md ring-1 ring-red-200 focus:ring-2 focus:ring-red-500 outline-none" />
              </div>
            </div>
            <button disabled={loading} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors">
              {loading ? 'Mengirim...' : 'Booking Sekarang'}
            </button>
            {status && (
              <p className={`mt-3 text-sm ${status.ok ? 'text-green-700' : 'text-red-800'}`}>
                {status.ok ? `Berhasil! ID: ${status.id}` : `Gagal: ${status.message}`}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
