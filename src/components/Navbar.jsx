import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur border-b border-red-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-red-600 flex items-center justify-center text-white font-extrabold">M</div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-gray-900">MotoRed</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollTo('models')} className="hover:text-red-600 transition-colors">Model</button>
            <button onClick={() => scrollTo('features')} className="hover:text-red-600 transition-colors">Fitur</button>
            <button onClick={() => scrollTo('pricing')} className="hover:text-red-600 transition-colors">Harga</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-red-600 transition-colors">Kontak</button>
            <button onClick={() => scrollTo('cta')} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm transition-all">Tes Ride</button>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-red-50" onClick={() => setOpen(!open)} aria-label="Open Menu">
            <Menu className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-red-100">
            <div className="grid gap-2 text-sm font-medium">
              <button onClick={() => scrollTo('models')} className="text-left px-1 py-2 rounded hover:bg-red-50">Model</button>
              <button onClick={() => scrollTo('features')} className="text-left px-1 py-2 rounded hover:bg-red-50">Fitur</button>
              <button onClick={() => scrollTo('pricing')} className="text-left px-1 py-2 rounded hover:bg-red-50">Harga</button>
              <button onClick={() => scrollTo('contact')} className="text-left px-1 py-2 rounded hover:bg-red-50">Kontak</button>
              <button onClick={() => scrollTo('cta')} className="text-left px-1 py-2 rounded bg-red-600 text-white">Tes Ride</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
