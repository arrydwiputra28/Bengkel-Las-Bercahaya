import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/bengkelData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Kanopi',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = `Halo Bengkel Las Bercahaya, saya ingin konsultasi pengerjaan las:
- Nama: ${formData.name}
- No. Kontak: ${formData.phone}
- Jenis Pekerjaan: ${formData.service}
- Alamat/Lokasi: ${formData.location || '-'}
- Keterangan: ${formData.message || '-'}`;

    const url = `https://wa.me/6287881947001?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header from website */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight mb-3">
            Hubungi Kami
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Jika ada pertanyaan atau konsultasi, silahkan hubungi kami
          </p>
        </div>

        {/* 3 Contact Cards as in original site */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* 1. Alamat */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 shadow-2xs">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-5 shadow-xs">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">
              Alamat
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
              Petukangan Utara - Jakarta Selatan
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Melayani area Jabodetabek
            </p>
          </div>

          {/* 2. Telepon/WA */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 shadow-2xs">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-5 shadow-xs">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">
              Telepon/WA
            </h3>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-extrabold text-xl tracking-tight transition-colors"
            >
              087881947001
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Bisa Telp / WhatsApp Chat 24/7
            </p>
          </div>

          {/* 3. Email */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 shadow-2xs">
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-3xl mb-5 shadow-xs">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">
              Email
            </h3>
            <a
              href="mailto:info@bengkellasbercahaya.com"
              className="text-slate-600 hover:text-indigo-600 font-medium text-base transition-colors"
            >
              info@bengkellasbercahaya.com
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Surat penawaran & kerja sama proyek
            </p>
          </div>

        </div>

        {/* Map & Consultation Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Interactive Google Map */}
          <div className="lg:col-span-6 bg-slate-100 rounded-3xl overflow-hidden shadow-sm border border-slate-200 relative min-h-[380px] lg:min-h-full flex flex-col">
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">
                  Lokasi: Petukangan Utara, Jakarta Selatan
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Petukangan+Utara+Pesanggrahan+Jakarta+Selatan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 font-semibold hover:underline"
              >
                Buka di Google Maps
              </a>
            </div>

            <iframe
              title="Peta Lokasi Bengkel Las Bercahaya"
              src={BRAND_INFO.mapsEmbedUrl}
              className="w-full flex-1 min-h-[350px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick Consultation Form */}
          <div className="lg:col-span-6 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>FORMULIR KONSULTASI CEPAT</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                Jadwalkan Survei & Konsultasi Gratis
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                Isi form berikut untuk langsung terhubung dengan tim kami via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bpk. Bambang"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Nomor WhatsApp / HP *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Pilihan Layanan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                    >
                      <option value="Kanopi Industrial / Kaca / Spandek">Kanopi Rumah / Carport</option>
                      <option value="Pagar Minimalis / Tempa / WPC">Pagar & Pintu Gerbang</option>
                      <option value="Tangga Besi / Melayang / Putar">Tangga Besi & Railing</option>
                      <option value="Teralis Jendela & Pintu Nyamuk">Teralis Jendela & Pintu</option>
                      <option value="Konstruksi Baja WF / Lainnya">Konstruksi Baja & Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Wilayah / Alamat Rumah
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Bintaro / Jaksel"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Ukuran carport 5x4 meter, ingin pakai atap Alderon..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim & Terhubung ke WhatsApp</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Membuka WhatsApp untuk mengirim data konsultasi Anda...</span>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
