import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-red-700 ring-1 ring-red-200">
              Otomotif • Sport • High-energy
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Kecepatan, Teknologi, dan Desain yang Mendorong Adrenalin
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700 bg-white/70 backdrop-blur px-3 py-2 rounded-md inline-block">
              Temukan lini produk motor kami dengan performa tinggi dan fitur canggih. Dirancang untuk jalanan kota hingga petualangan panjang.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#models" className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-semibold shadow">
                Lihat Model
              </a>
              <a href="#cta" className="bg-white/80 hover:bg-white text-red-700 ring-1 ring-red-200 px-5 py-3 rounded-md font-semibold">
                Booking Tes Ride
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
