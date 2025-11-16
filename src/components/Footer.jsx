export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold text-gray-900">MotoRed</h4>
            <p className="text-gray-600 mt-2">Brand kendaraan roda dua untuk kebutuhan harian hingga touring jarak jauh.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Kontak</h5>
            <ul className="mt-3 space-y-1 text-gray-600 text-sm">
              <li>Email: sales@moto.red</li>
              <li>Telepon: 021-123-4567</li>
              <li>Alamat: Jakarta, Indonesia</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Navigasi</h5>
            <ul className="mt-3 space-y-1 text-gray-600 text-sm">
              <li><a href="#models" className="hover:text-red-600">Model</a></li>
              <li><a href="#features" className="hover:text-red-600">Fitur</a></li>
              <li><a href="#pricing" className="hover:text-red-600">Harga</a></li>
              <li><a href="#cta" className="hover:text-red-600">Tes Ride</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-gray-900">Legal</h5>
            <ul className="mt-3 space-y-1 text-gray-600 text-sm">
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-red-100 text-sm text-gray-500 flex flex-wrap items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} MotoRed. All rights reserved.</p>
          <p>Didesain dengan tema merah & putih.</p>
        </div>
      </div>
    </footer>
  )
}
