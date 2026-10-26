import { CheckCircle2, Wrench, Shield, Clock, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/bengkelData';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase mb-4">
              TENTANG KAMI
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Bengkel Las <br />
              <span className="text-blue-600">BERCAHAYA</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Merupakan bengkel las dengan tim yang sudah sangat berpengalaman dalam berbagai proyek, baik proyek besar maupun proyek kecil perorangan. Berdiri sejak tahun 2000, telah melayani ribuan pelanggan seluruh Indonesia dengan rata-rata pelanggan sangat puas.
            </p>

            {/* 3 Core Highlight Points from Original Site */}
            <div className="space-y-5 mb-9">
              {/* Point 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-xs border border-slate-200/80 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Tim Berpengalaman</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tim kami adalah tim berpengalaman dalam bidangnya masing-masing dan memiliki sertifikat sesuai keahlian di bidang las.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-xs border border-slate-200/80 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Peralatan selalalu siap</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tim kami didukung dengan peralatan yang siap kerja dengan maintenance rutin yang ketat.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-xs border border-slate-200/80 hover:border-blue-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">Support 24/7</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tim kami siap membantu kapan saja.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA with original text "Klik Disini" */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="il4gyd"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 text-base"
              >
                <span>Klik Disini</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-700 rounded-xl font-bold border border-slate-300 transition-colors text-base"
              >
                <span>Lihat Alamat Workshop</span>
              </a>
            </div>
          </div>

          {/* Right / Photo Section with original Workshop Photo */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Colored backdrop card */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3" />
              
              {/* Original Workshop Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 transform -rotate-2 hover:rotate-0 transition duration-500">
                <img
                  src={BRAND_INFO.aboutPhoto}
                  alt="Tim Bengkel Las Bercahaya saat pengerjaan proyek"
                  className="w-full h-auto max-h-[460px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-blue-300 font-bold">Dokumentasi Tim & Workshop</p>
                  <p className="text-sm font-semibold text-white drop-shadow">Bengkel Las Bercahaya Jakarta Selatan</p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md">
                  25+
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tahun Berdiri</p>
                  <p className="text-sm font-extrabold text-slate-900">Sejak Thn 2000</p>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg font-bold text-xs flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Teknisi Bersertifikat</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
