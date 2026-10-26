import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/bengkelData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <a href="#home" className="inline-block bg-white p-1 rounded-lg border border-slate-700">
                <img
                  src={BRAND_INFO.logo}
                  alt="Bengkel Las Bercahaya"
                  className="max-h-10 w-auto object-contain"
                />
              </a>
              <div>
                <h4 className="font-extrabold text-white text-base">BENGKEL LAS</h4>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">BERCAHAYA</p>
              </div>
            </div>
            {/* Exact original text */}
            <p className="text-sm text-slate-400 leading-relaxed">
              Bengkel Las Bercahaya Jakarta.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pilihan terpercaya untuk kanopi, pagar minimalis, tangga besi, railing, dan pengelasan presisi sejak tahun 2000.
            </p>
          </div>

          {/* Nav Links Col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#tentang" className="hover:text-blue-400 transition-colors">Tentang Kami</a></li>
              <li><a href="#klien" className="hover:text-blue-400 transition-colors">Klien & Mitra</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Layanan Unggulan</a></li>
              <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portofolio Proyek</a></li>
              <li><a href="#testimonial" className="hover:text-blue-400 transition-colors">Testimonial</a></li>
              <li><a href="#kontak" className="hover:text-blue-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Spesialisasi Las
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Kanopi Alderon & Kaca</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Pagar Minimalis & WPC</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Pagar Besi Tempa Klasik</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Tangga Besi Melayang</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Railing Balkon & Void</a></li>
              <li><a href="#layanan" className="hover:text-blue-400 transition-colors">Teralis & Pintu Nyamuk</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Kontak Kami
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Petukangan Utara - Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  087881947001 (WA)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:info@bengkellasbercahaya.com" className="hover:text-indigo-400 transition-colors">
                  info@bengkellasbercahaya.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-500 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Buka Setiap Hari (Support 24 Jam)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Exact original copyright */}
          <p className="text-xs text-slate-500">
            &copy; 2026 Bengkel Las. Hak Cipta Dilindungi.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
