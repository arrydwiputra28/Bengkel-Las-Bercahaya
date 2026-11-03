import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-['Plus_Jakarta_Sans']">
      {/* HERO SECTION */}
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Logo Bengkel Las Bercahaya */}
          <img 
            src="https://res.cloudinary.com/dozvwz4qd/image/upload/v1781977498/photo_2026_06_21_00_38_11.webp" 
            alt="Logo Bengkel Las Bercahaya" 
            className="w-48 md:w-64 h-auto object-contain mb-6 drop-shadow-[0_5px_15px_rgba(245,158,11,0.3)]"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-500 mb-4 tracking-tight">
            Bengkel Las Bercahaya
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light">
            Solusi Pengelasan Profesional & Konstruksi Besi Berkualitas Sejak Tahun 2000 untuk Area Jakarta dan Sekitarnya.
          </p>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        
        {/* TENTANG KAMI */}
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Tentang Kami</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Kami melayani pengerjaan berbagai macam produk berbahan besi, baja ringan, dan stainless steel. Berbekal pengalaman lebih dari dua dekade, kami menjamin hasil kerja yang presisi, material kokoh, finishing rapi, dan pemasangan yang tepat waktu.
          </p>
        </section>

        {/* PRODUK UNGGULAN & GALERI */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">Produk & Layanan Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kartu Produk 1 (Dengan Foto Kandang Catio) */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative bg-slate-200">
                <img 
                  src="https://res.cloudinary.com/dozvwz4qd/image/upload/v1781977498/photo_2026_06_21_00_38_11.webp" /* Menggunakan gambar produk catio outdoor besi Anda */
                  alt="Kandang Besi Catio Outdoor" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-2">Spesialisasi Baru</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kandang Catio & Avuary</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Pembuatan kandang hewan outdoor skala besar (Catio) dengan rangka besi anti-karat bermutu tinggi, kawat ram tebal, dan tingkat keamanan ekstra untuk hewan peliharaan Anda.
                </p>
              </div>
            </div>

            {/* Kartu Produk 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-slate-800 flex items-center justify-center p-6">
                <div className="text-center text-amber-500 font-bold text-xl">Spesialis Kanopi & Rangka</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold tracking-wider text-amber-600 uppercase mb-2">Struktur Rumah</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Kanopi & Atap Baja</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Pemasangan kanopi minimalis, kanopi alderon double layer, tempered glass, solarflat, serta perakitan konstruksi baja ringan untuk carport atau pelindung area luar bangunan.
                </p>
              </div>
            </div>

            {/* Kartu Produk 3 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="h-64 bg-slate-900 flex items-center justify-center p-6">
                <div className="text-center text-indigo-400 font-bold text-xl">Pagar & Pengaman Rumah</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase mb-2">Keamanan</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pagar, Railing & Teralis</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  Pembuatan pagar dorong minimalis, pintu besi kasa nyamuk, teralis jendela anti-maling, serta railing tangga bermotif modern maupun stainless steel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Konsultasi Desain & Survei Lokasi Gratis!</h3>
          <p className="text-indigo-200 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Punya ide ukuran custom untuk rumah atau kandang peliharaan Anda? Diskusikan rencana anggaran Anda bersama tim ahli kami langsung lewat obrolan WhatsApp.
          </p>
          <a 
            href="https://wa.me..." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-0.5 text-base md:text-lg gap-2"
          >
            <span>💬 Hubungi Kami via WhatsApp</span>
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Bengkel Las Bercahaya Jakarta. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
