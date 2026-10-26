import { CLIENT_LOGOS } from '../data/bengkelData';

export default function ClientCarousel() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="klien" className="py-16 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold tracking-widest uppercase mb-2">
          KLIEN & MITRA KAMI
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Dipercaya Oleh Berbagai Klien & Pengembang Properti
        </h3>
        <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mt-2">
          Telah menyelesaikan berbagai proyek hunian perorangan, perumahan, perkantoran, dan komersial di seluruh wilayah Jabodetabek & Indonesia.
        </p>
      </div>

      {/* Infinite Marquee Carousel Container */}
      <div className="relative w-full overflow-hidden mask-radial">
        {/* Left & Right gradient fades for smooth visual cutoff */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-14 py-4">
          {duplicatedLogos.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center justify-center h-20 w-36 sm:w-44 px-4 py-2 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200/80 shadow-2xs transition-all duration-300 hover:scale-105 shrink-0 group"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="max-h-12 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
