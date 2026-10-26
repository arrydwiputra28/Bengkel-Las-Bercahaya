import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { HERO_SLIDES, BRAND_INFO } from '../data/bengkelData';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px]">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with Dark & Gradient Overlay */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

              {/* Slide Content */}
              <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div className="max-w-2xl text-white">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/30 backdrop-blur-md border border-blue-400/40 text-blue-200 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fadeIn">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>{slide.badge}</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none mb-4 sm:mb-6 text-white drop-shadow-sm">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 drop-shadow">
                    {slide.subtitle}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={BRAND_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-900/40 transition-all duration-200 hover:-translate-y-0.5 text-sm sm:text-base"
                    >
                      <span>PESAN SEKARANG</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="#portfolio"
                      className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all duration-200 text-sm sm:text-base"
                    >
                      <span>Lihat Hasil Proyek</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Prev & Next Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-blue-600 text-white backdrop-blur-md transition-all duration-200 border border-white/10 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-blue-600 text-white backdrop-blur-md transition-all duration-200 border border-white/10 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trust Highlights Strip below Hero */}
      <div className="relative z-20 bg-slate-950 border-t border-slate-800 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <Award className="w-5 h-5 text-blue-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium leading-none">Pengalaman Sejak</p>
                <p className="text-sm font-bold text-white mt-1">Tahun 2000 (25+ Thn)</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium leading-none">Jaminan Kualitas</p>
                <p className="text-sm font-bold text-white mt-1">Garansi Pengerjaan</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <Clock className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium leading-none">Respon Cepat</p>
                <p className="text-sm font-bold text-white mt-1">Support 24/7 Siap</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-medium leading-none">Layanan Spesial</p>
                <p className="text-sm font-bold text-white mt-1">Survei Lokasi GRATIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
