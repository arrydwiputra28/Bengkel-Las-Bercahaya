import { useState } from 'react';
import { Eye, Folder, User, Sparkles } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioItem } from '../data/bengkelData';
import ProjectDetailModal from './ProjectDetailModal';

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const categories = ['Semua', 'Kanopi & Atap', 'Pagar & Gerbang', 'Tangga & Konstruksi', 'Pagar Premium'];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-extrabold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTOFOLIO RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Karya & Proyek Kami
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Berbagai pengerjaan konstruksi baja dan las yang telah kami selesaikan.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold border border-white/10">
                    <Folder className="w-3 h-3 text-blue-400" />
                    {project.category}
                  </span>
                </div>

                {/* Quick Client Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1.5 font-medium drop-shadow">
                    <User className="w-3.5 h-3.5 text-blue-300" />
                    {project.client}
                  </span>
                  <span className="bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {project.images.length} Foto
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                {/* "Lihat Detail Proyek" Button as in original site */}
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-bold text-sm border border-slate-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Lihat Detail Proyek</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for active project */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}
