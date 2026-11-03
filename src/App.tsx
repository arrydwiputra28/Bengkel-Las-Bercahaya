import React from 'react';

export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc', 
      color: '#334155', 
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      margin: 0,
      padding: 0
    }}>
      {/* HERO SECTION */}
      <header style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
        color: '#ffffff', 
        padding: '60px 20px', 
        textAlign: 'center' 
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* LOGO BENGKEL LAS BERCAHAYA */}
          <img 
            src="https://cloudinary.com" 
            alt="Logo Bengkel Las Bercahaya" 
            style={{ width: '220px', height: 'auto', marginBottom: '20px', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '2.5rem', color: '#f59e0b', margin: '0 0 10px 0', fontWeight: '800' }}>
            Bengkel Las Bercahaya
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', margin: 0, fontWeight: '300' }}>
            Solusi Pengelasan Profesional &amp; Konstruksi Besi Berkualitas Sejak Tahun 2000
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1100px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* TENTANG KAMI */}
        <section style={{ 
          backgroundColor: '#ffffff', 
          padding: '30px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
          textAlign: 'center',
          marginBottom: '40px',
          border: '1px solid #f1f5f9'
        }}>
          <h2 style={{ color: '#0f172a', marginBottom: '15px', fontSize: '1.8rem' }}>Tentang Kami</h2>
          <p style={{ color: '#64748b', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
            Kami melayani pengerjaan berbagai macam produk berbahan besi, baja ringan, dan stainless steel. Berbekal pengalaman lebih dari dua dekade, kami menjamin hasil kerja yang presisi, material kokoh, finishing rapi, dan pemasangan yang tepat waktu.
          </p>
        </section>

        {/* PRODUK UNGGULAN & GALERI */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#0f172a', textAlign: 'center', marginBottom: '30px', fontSize: '1.8rem' }}>Produk &amp; Layanan Kami</h2>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '20px',
            justifyContent: 'center'
          }}>
            {/* Kartu Produk 1 (Dengan Foto Kandang Catio) */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '16px', 
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
              overflow: 'hidden',
              width: '320px',
              border: '1px solid #f1f5f9',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#e2e8f0' }}>
                <img 
                  src="https://cloudinary.com" 
                  alt="Kandang Besi Catio Outdoor" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px', flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#4f46e5', textTransform: 'uppercase' }}>Spesialisasi</span>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: '5px 0 10px 0' }}>Kandang Catio &amp; Avuary</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Pembuatan kandang hewan outdoor skala besar (Catio) dengan rangka besi anti-karat bermutu tinggi, kawat ram tebal, dan tingkat keamanan ekstra.
                </p>
              </div>
            </div>

            {/* Kartu Produk 2 */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '16px', 
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
              overflow: 'hidden',
              width: '320px',
              border: '1px solid #f1f5f9',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '220px', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem', padding: '20px', textAlign: 'center' }}>
                Spesialis Kanopi &amp; Rangka
              </div>
              <div style={{ padding: '20px', flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#d97706', textTransform: 'uppercase' }}>Struktur Rumah</span>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: '5px 0 10px 0' }}>Kanopi &amp; Atap Baja</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Pemasangan kanopi minimalis, kanopi alderon, solarflat, serta perakitan konstruksi baja ringan untuk carport berkualitas tinggi.
                </p>
              </div>
            </div>

            {/* Kartu Produk 3 */}
            <div style={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '16px', 
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', 
              overflow: 'hidden',
              width: '320px',
              border: '1px solid #f1f5f9',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ height: '220px', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8', fontWeight: 'bold', fontSize: '1.2rem', padding: '20px', textAlign: 'center' }}>
                Pagar &amp; Pengaman Rumah
              </div>
              <div style={{ padding: '20px', flex: 1 }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#059669', textTransform: 'uppercase' }}>Keamanan</span>
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', margin: '5px 0 10px 0' }}>Pagar, Railing &amp; Teralis</h3>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Pembuatan pagar dorong minimalis, pintu besi kasa nyamuk, teralis jendela anti-maling, serta railing tangga bermotif modern.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section style={{ 
          background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)', 
          color: '#ffffff', 
          borderRadius: '24px', 
          padding: '40px 20px', 
          textAlign: 'center',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', fontWight: '700' }}>Konsultasi Desain &amp; Survei Lokasi Gratis!</h3>
          <p style={{ color: '#c7d2fe', maxWidth: '600px', margin: '0 auto 25px auto', fontSize: '0.95rem', lineHeight: '1.6' }}>
            Punya ide ukuran custom untuk rumah atau kandang peliharaan Anda? Diskusikan rencana anggaran Anda bersama tim ahli kami langsung lewat obrolan WhatsApp.
          </p>
          <a 
            href="https://wa.me/6287881947001" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block',
              backgroundColor: '#10b981', 
              color: '#ffffff', 
              fontWeight: 'bold', 
              padding: '14px 32px', 
              borderRadius: '50px', 
              textDecoration: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)'
            }}
          >
            💬 Hubungi Kami via WhatsApp
          </a>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ 
        borderTop: '1px solid #e2e8f0', 
        backgroundColor: '#ffffff', 
        padding: '20px', 
        textAlign: 'center', 
        fontSize: '0.85rem', 
        color: '#94a3b8',
        marginTop: '40px'
      }}>
        <p>&copy; {new Date().getFullYear()} Bengkel Las Bercahaya Jakarta. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}
