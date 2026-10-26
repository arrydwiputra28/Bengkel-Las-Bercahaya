import { useState } from 'react';
import { X, Check, ArrowRight, User, Folder, Shield, Calendar, Wrench } from 'lucide-react';
import { PortfolioItem, BRAND_INFO } from '../data/bengkelData';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const [activeImage, setActiveImage] = useState(project.images[0] || project.coverImage);

  const whatsappMessage = `https://wa.me/6287881947001?text=Halo%20Bengkel%20Las%20Bercahaya,%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(
    project.title
  )}%20(${encodeURIComponent(
    project.category
  )}).%20Apakah%20bisa%20konsultasi%20dan%20survei%20untuk%20model%20seperti%20ini?`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-100 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
          
          {/* Left Column: Image Gallery Viewer */}
          <div className="md:col-span-7 bg-slate-950 p-6 flex flex-col justify-between">
            {/* Main Active Photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 flex items-center justify-center border border-slate-800">
              <img
                src={activeImage}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                Dokumentasi Asli Proyek
              </span>
            </div>

            {/* Thumbnail Switcher (Multiple Angles) */}
            {project.images.length > 1 && (
              <div className="mt-4">
                <p className="text-xs text-slate-400 font-medium mb-2">Foto Lainnya ({project.images.length} foto):</p>
                <div className="flex items-center gap-3 overflow-x-auto pb-2">
                  {project.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                        activeImage === img ? 'border-blue-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Project Details & Meta */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold">
                  <Folder className="w-3.5 h-3.5" />
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                {project.title}
              </h3>

              {/* Client Name */}
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-5 pb-4 border-b border-slate-100">
                <User className="w-4 h-4 text-slate-400" />
                <span>Klien: <strong className="text-slate-700">{project.client}</strong></span>
              </div>

              {/* Description from scraped site */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Deskripsi Pengerjaan
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Specifications Table */}
              {project.specs && (
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-6 space-y-2.5 text-xs">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-blue-500" />
                      Material
                    </span>
                    <span className="font-semibold text-slate-800 text-right">{project.specs.material}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-emerald-500" />
                      Finishing
                    </span>
                    <span className="font-semibold text-slate-800 text-right">{project.specs.finishing}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      Estimasi Waktu
                    </span>
                    <span className="font-semibold text-slate-800 text-right">{project.specs.waktuPengerjaan}</span>
                  </div>
                  <div className="flex items-start justify-between gap-2 pt-1 border-t border-slate-200">
                    <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      Garansi
                    </span>
                    <span className="font-bold text-emerald-700 text-right">{project.specs.garansi}</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA in Modal */}
            <div className="pt-2">
              <a
                href={whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-5 rounded-xl shadow-md transition-colors text-sm"
              >
                <span>Pesan Model Seperti Ini di WA</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Gratis survei & pengukuran untuk wilayah Jakarta & sekitarnya
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
