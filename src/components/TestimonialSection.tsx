import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/bengkelData';

export default function TestimonialSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTesti = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTesti = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTesti, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonial" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative radial gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 text-blue-400 text-xs font-extrabold tracking-widest uppercase mb-3 border border-blue-400/30">
            TESTIMONI
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="mt-3 text-slate-400 text-base">
            Kepuasan ribuan pelanggan adalah bukti komitmen kualitas Bengkel Las Bercahaya.
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 relative shadow-2xl backdrop-blur-md">
          {/* Quote Icon */}
          <div className="absolute top-6 left-8 text-blue-500/20">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* User Avatar */}
            <div className="relative mb-6">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-blue-500/40 p-1 bg-slate-800 shadow-xl"
              />
              <div className="absolute bottom-0 right-0 bg-emerald-500 text-white p-1 rounded-full border-2 border-slate-900">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote Text from original website */}
            <p className="text-lg sm:text-2xl text-slate-200 italic font-medium leading-relaxed max-w-3xl mb-8">
              "{current.text}"
            </p>

            {/* Customer Details */}
            <h3 className="text-xl font-bold text-white tracking-tight">
              {current.name}
            </h3>
            {current.project && (
              <p className="text-sm text-blue-400 font-medium mt-1">
                Pengerjaan: {current.project}
              </p>
            )}
          </div>

          {/* Slider Prev & Next Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800/80">
            <button
              onClick={prevTesti}
              className="p-2.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? 'w-8 bg-blue-500' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTesti}
              className="p-2.5 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Testimonials Grid Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                activeIdx === idx
                  ? 'bg-blue-950/40 border-blue-500/60 shadow-lg'
                  : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-slate-700"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.project}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 line-clamp-3 italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
