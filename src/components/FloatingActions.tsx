import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare, X } from 'lucide-react';
import { BRAND_INFO } from '../data/bengkelData';

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Back-To-Top Button (Left side, matching original #back-to-top) */}
      <button
        id="back-to-top"
        onClick={scrollToTop}
        className={`fixed bottom-7 left-6 z-40 bg-indigo-600 hover:bg-indigo-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none ${
          showBackToTop ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Floating WhatsApp Action (Right side, matching original) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        
        {/* Chat Invitation Bubble */}
        {showTooltip && (
          <div className="mb-2 bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold max-w-[210px] animate-bounce duration-1000 relative">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1.5 -left-1.5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-full p-0.5"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-[11px] text-emerald-600 font-bold mb-0.5">Online Sekarang</p>
            <p className="text-slate-700">Butuh info las / survei gratis? Hubungi kami di WA!</p>
          </div>
        )}

        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 group focus:outline-none"
          aria-label="Chat WhatsApp"
        >
          {/* Notification Ping Ring */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>

          {/* WhatsApp Icon */}
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.98-1.025 1.18-.25.2-.5.225-.8.075-.3-.15-1.267-.467-2.414-1.49-1.077-.96-1.804-2.146-2.016-2.51-.212-.363-.023-.56.128-.71.135-.134.301-.35.451-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.585-.492-.506-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.116 3.23 5.125 4.528 3.01 1.3 3.01.867 3.555.813.546-.054 1.758-.718 2.008-1.413.25-.694.25-1.288.175-1.413-.075-.125-.275-.2-.576-.35z" />
            <path d="M12.004 0C5.373 0 0 5.373 0 12c0 2.115.553 4.103 1.52 5.834L.05 23.364a.75.75 0 00.936.936l5.706-1.503A11.95 11.95 0 0012.004 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 22c-1.86 0-3.61-.505-5.12-1.385l-.367-.213-3.797 1 1-3.722-.232-.375A9.954 9.954 0 012 12c0-5.514 4.486-10 10.004-10 5.514 0 10 4.486 10 10s-4.486 10-10 10z" />
          </svg>
        </a>
      </div>
    </>
  );
}
