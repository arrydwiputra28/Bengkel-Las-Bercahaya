import { useState } from 'react';
import { ArrowUpRight, CheckCircle, Sparkles, PhoneCall } from 'lucide-react';
import { CORE_SERVICES, BRAND_INFO, ServiceItem } from '../data/bengkelData';

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  // The original 3 cards from the website are the first 3
  const displayedServices = showAll ? CORE_SERVICES : CORE_SERVICES.slice(0, 3);

  const getWhatsAppMessage = (title: string) => {
    return `https://wa.me/6287881947001?text=Halo%20Bengkel%20Las%20Bercahaya,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
      title
    )}.%20Mohon%20info%20estimasi%20biaya%20dan%20jadwal%20survei.`;
  };

  return (
    <section id="layanan" className="py-20 bg-slate-100/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>LAYANAN KAMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Pengelasan & Konstruksi Besi
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dapatkan layanan profesional dan Fleksibel dengan jaminan kualitas terbaik.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Service Image with original aspect & zoom effect */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Category/Type Badge on Card */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-sm">
                    {service.title}
                  </span>
                </div>

                {/* Footnote text from original website */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium italic opacity-90 drop-shadow">
                  {service.footnote}
                </div>
              </div>

              {/* Service Details Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {service.title}
                </h3>
                
                {/* Original Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                  {service.desc}
                </p>

                {/* Highlight Features */}
                <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Link */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppMessage(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:shadow-md"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle between 3 original and all 6 services */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm border border-slate-300 shadow-xs transition-colors"
          >
            <span>{showAll ? 'Tampilkan 3 Layanan Utama Saja' : 'Lihat Semua Pilihan Layanan Kami (6 Jenis)'}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
