import { MessageCircle, Ruler, Hammer, ShieldCheck } from 'lucide-react';
import { WORK_STEPS } from '../data/bengkelData';

export default function WorkProcessSection() {
  const icons = [
    <MessageCircle className="w-6 h-6 text-blue-600" />,
    <Ruler className="w-6 h-6 text-emerald-600" />,
    <Hammer className="w-6 h-6 text-amber-600" />,
    <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-3.5 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold tracking-widest uppercase mb-3">
            ALUR KERJA
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Cara Mudah Pesan Jasa Las di Bercahaya
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Proses terstruktur, transparan, tepat waktu, dan bergaransi penuh untuk kenyamanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs relative flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center gap-1">
                <span>Langkah {idx + 1} dari 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
