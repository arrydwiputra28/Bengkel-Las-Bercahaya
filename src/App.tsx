import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ClientCarousel from './components/ClientCarousel';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import WorkProcessSection from './components/WorkProcessSection';
import TestimonialSection from './components/TestimonialSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Slider with Authentic Backgrounds and CTAs */}
        <HeroSlider />

        {/* Tentang Kami (About) with Original Team Photo and 3 Highlight Points */}
        <AboutSection />

        {/* Klien Kami (Trusted Partners & Clients Carousel) */}
        <ClientCarousel />

        {/* Layanan Kami (Core Services Grid from Website) */}
        <ServicesSection />

        {/* Karya & Portofolio Proyek (With Interactive Lightbox / Modal) */}
        <PortfolioSection />


        {/* Alur Kerja Pengerjaan Las */}
        <WorkProcessSection />

        {/* Testimoni Pelanggan (Original Reviews and Avatars) */}
        <TestimonialSection />

        {/* Pertanyaan Umum (FAQ) */}
        <FaqSection />

        {/* Hubungi Kami (Exact Contact info, Maps & Interactive Form) */}
        <ContactSection />
      </main>

      {/* Footer matching original website branding & copyright */}
      <Footer />

      {/* Floating WhatsApp and Back to Top Buttons */}
      <FloatingActions />
    </div>
  );
}
