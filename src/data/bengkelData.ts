export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  footnote: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  desc: string;
  coverImage: string;
  images: string[];
  specs?: {
    material: string;
    finishing: string;
    waktuPengerjaan: string;
    garansi: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  project?: string;
  avatar: string;
  text: string;
  rating: number;
}

export const BRAND_INFO = {
  name: 'Bengkel Las Bercahaya',
  shortName: 'Bercahaya',
  legalName: 'Bengkel Las Bercahaya Jakarta',
  tagline: 'Solusi Pengelasan Profesional & Konstruksi Besi Terbaik',
  establishedYear: 2000,
  yearsOfExperience: new Date().getFullYear() - 2000,
  phone: '087881947001',
  phoneDisplay: '0878-8194-7001',
  phoneInternational: '+6287881947001',
  whatsappUrl: 'https://wa.me/6287881947001?text=Halo%20Bengkel%20Las%20Bercahaya,%20saya%20tertarik%20untuk%20konsultasi%20jasa%20pengelasan',
  email: 'info@bengkellasbercahaya.com',
  address: 'Petukangan Utara - Jakarta Selatan',
  fullAddress: 'Jl. Damai Raya, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan, DKI Jakarta 12260',
  serviceArea: 'Jakarta Selatan, Tangerang, Depok, Bogor, Bekasi & Sekitarnya (Jabodetabek)',
  logo: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781973945/ChatGPT_Image_Jun_20__2026__11_44_31_PM.webp',
  aboutPhoto: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781977498/photo_2026_06_21_00_38_11.webp',
  aboutText: 'Merupakan bengkel las dengan tim yang sudah sangat berpengalaman dalam berbagai proyek, baik proyek besar maupun proyek kecil perorangan. Berdiri sejak tahun 2000, telah melayani ribuan pelanggan seluruh Indonesia dengan rata-rata pelanggan sangat puas.',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.838575005828!2d106.74567085!3d-6.2360706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f0e213b10b03%3A0x6e2825442df11666!2sPetukangan%20Utara%2C%20Kec.%20Pesanggrahan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781971150/b4f0c6b4ed5e611acf582073460991cd.webp',
    title: 'Konstruksi Besi Berkualitas & Tahan Lama',
    subtitle: 'Bengkel Las Bercahaya menyediakan layanan pengelasan presisi dengan standar tinggi, material pilihan, dan garansi pengerjaan terbaik.',
    badge: 'Berpengalaman Sejak Tahun 2000',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781971161/4f32f60e3f2dc4178ebccf11eb33539b.webp',
    title: 'Kanopi Industrial & Modern Rumah Mewah',
    subtitle: 'Struktur kokoh tahan segala cuaca menggunakan rangka hollow galvanis atau baja WF dengan atap Alderon, Spandek, maupun Kaca Tempered.',
    badge: 'Spesialis Kanopi & Rangka Baja',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781971169/425351289de44742542f6ea515395e69.webp',
    title: 'Pagar Elegan, Pintu WPC & Tangga Besi',
    subtitle: 'Wujudkan estetika dan keamanan hunian Anda dengan pagar minimalis, besi tempa klasik, kombinasi kayu WPC, serta teralis presisi.',
    badge: 'Desain Custom Sesuai Keinginan',
  },
];

export const CLIENT_LOGOS = [
  { id: 2, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781498385/6.webp', alt: 'Mitra Konstruksi 1' },
  { id: 3, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781498394/7.webp', alt: 'Mitra Konstruksi 2' },
  { id: 4, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781498402/8.webp', alt: 'Mitra Konstruksi 3' },
  { id: 6, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781498430/10.webp', alt: 'Mitra Konstruksi 4' },
  { id: 7, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782064727/pngtree_home_logo_design_vector_illustration_png_image_9095181.webp', alt: 'Home Design Partner' },
  { id: 8, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782064812/OIP.webp', alt: 'Partner Property' },
  { id: 9, url: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782064818/image_13.webp', alt: 'Developer Partner' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'tangga-besi',
    title: 'Tangga Besi',
    desc: 'Pengerjaan Tangga besi oleh tim profesional kami yang selalu siap membantu mempercepat pembangunan anda dengan profesional.',
    footnote: 'Gambar diambil langsung di lokasi proyek.',
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781495674/railing_tangga.webp',
    features: [
      'Struktur rangka kokoh anti goyang',
      'Pilihan anak tangga kayu solid, plat bordes, atau granit',
      'Desain lurus, bordes L, melayang, hingga spiral',
      'Finishing halus anti korosi',
    ],
  },
  {
    id: 'kanopi-industrial',
    title: 'Kanopi Industrial',
    desc: 'Pemasan Kanopi Industrial yang kokoh, presisi dan terjangkau. Pekerjaan dilakukan oleh tim profesional Bengkel Las Maju Jaya.',
    footnote: 'Gambar diambil langsung pada proses pengerjaan. Dok. Tahun 2010',
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781546560/kanopi.webp',
    features: [
      'Rangka besi hollow galvanis tebal & baja WF',
      'Pilihan atap Alderon (UPVC), Solarflat, Spandek, Polycarbonate, & Kaca Tempered',
      'Dilengkapi sistem talang air terintegrasi anti bocor',
      'Perlindungan cat tahan sinar UV dan karat',
    ],
  },
  {
    id: 'pintu-kombinasi',
    title: 'Pengerjaan Pintu Kombinasi',
    desc: 'Pengerjaan Pintu Kombinasi yang dilakukan oleh tim profesional kami, sesuai dengan plan, rapi dan hasilnya sangat memuaskan.',
    footnote: 'Gambar dokumentasi internal tahun 2019',
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781546914/pro.webp',
    features: [
      'Perpaduan elegan rangka besi galvanis & panel kayu WPC tahan air',
      'Tahan rayap, tidak lapuk terkena panas & hujan ekstrem',
      'Kunci pengaman kualitas premium',
      'Roda & rel anti macet dengan garansi',
    ],
  },
  {
    id: 'pagar-minimalis-tempa',
    title: 'Pagar Besi Minimalis & Tempa Klasik',
    desc: 'Pembuatan pagar rumah dengan model minimalis modern, plat cutting laser, maupun besi tempa klasik alferon mewah.',
    footnote: 'Dikerjakan langsung sesuai ukuran lebar lahan Anda.',
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782022104/besitempa_1.webp',
    features: [
      'Material besi galvanis tebal anti karat',
      'Bisa model geser (sliding), lipat (folding), atau swing',
      'Kompatibel dengan sistem motorized remote control',
      'Warna cat tahan pudar puluhan tahun',
    ],
  },
  {
    id: 'teralis-jendela-pintu',
    title: 'Teralis Pengaman & Pintu Kawat Nyamuk',
    desc: 'Proteksi ekstra untuk jendela dan pintu masuk rumah dengan corak minimalis artistik yang memperindah interior rumah.',
    footnote: 'Presisi tinggi mengikuti kusen kayu atau aluminium.',
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781510979/tralis.webp',
    features: [
      'Bahan besi nako solid, pipa hollow, atau plat strip tebal',
      'Finishing semprot halus & rapi',
      'Sirkulasi udara lancar & aman dari resiko bobol',
      'Bisa dipasang kawat baja anti nyamuk magnetik',
    ],
  },
  {
    id: 'railing-balkon',
    title: 'Railing Balkon & Void Pengaman',
    desc: 'Pembatas balkon lantai atas dan void tangga yang kuat, memberikan rasa aman keluarga dengan visual arsitektur mewah.',
    footnote: 'Uji kekuatan beban ketat sebelum serah terima.',
    image: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782021539/tanggabesi_1.webp',
    features: [
      'Tinggi standar keselamatan arsitektur 90-110 cm',
      'Kombinasi besi, stainless, kaca tempered, atau sling baja',
      'Pegangan tangan nyaman & sambungan las gerinda rata',
      'Pemasangan dynabolt beton ekstra kuat',
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-1',
    slug: 'portofolio-kanopi-rooftop-industrial',
    title: 'Kanopi Rooftop Industrial',
    category: 'Kanopi & Atap',
    client: 'Bpk. Hendrawan',
    desc: 'Pemasangan kanopi rooftop menggunakan struktur baja WF dan atap kaca tempered untuk area bersantai. Finishing cat matte black dengan perlindungan anti karat khusus area terbuka.',
    coverImage: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782021342/kanopi_1.webp',
    images: [
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782021342/kanopi_1.webp',
      'https://media-public.dekoruma.com/article/2025/06/Model-kanopi-teras-depan-rumah-terbaru-9.webp',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    ],
    specs: {
      material: 'Baja WF 150 & Kaca Tempered 10mm',
      finishing: 'Epoxy Primer + Matte Black Weather-Shield',
      waktuPengerjaan: '7 Hari Kerja',
      garansi: 'Garansi Kebocoran 1 Tahun & Rangka 3 Tahun',
    },
  },
  {
    id: 'proj-2',
    slug: 'portofolio-gerbang-besi-kayu',
    title: 'Pagar Berbahan WPC',
    category: 'Pagar & Gerbang',
    client: 'Bpk. Tirta',
    desc: 'Pagar WPC dengan bahan berkualitas tinggi, tahan cuaca panas dan hujan, anti keropos, dan memberikan privasi serta estetika modern kontemporer.',
    coverImage: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782019589/pagar_1.webp',
    images: [
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782019589/pagar_1.webp',
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782021132/pagar_2.webp',
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781510979/tralis.webp',
    ],
    specs: {
      material: 'Frame Hollow Galvanis 40x80 + Wood Plastic Composite Board',
      finishing: 'Duco Satin Black Anti Karat',
      waktuPengerjaan: '5 Hari Kerja',
      garansi: 'Garansi Struktur 2 Tahun',
    },
  },
  {
    id: 'proj-3',
    slug: 'portofolio-tangga-besi-melayang',
    title: 'Tangga Besi Melayang Minimalis',
    category: 'Tangga & Konstruksi',
    client: 'Bpk. Aditya Pramana',
    desc: 'Desain dan konstruksi tangga besi melayang (floating stairs) modern dengan rangka baja tersembunyi di dalam dinding. Menggunakan anak tangga kayu solid dan dilengkapi pagar pelindung kawat baja minimalis.',
    coverImage: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782021539/tanggabesi_1.webp',
    images: [
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782021539/tanggabesi_1.webp',
      'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    ],
    specs: {
      material: 'Baja Pelat 10mm + Kayu Kamper Samarinda Oven',
      finishing: 'Polyurethane Clear Doff & Hitam Doff',
      waktuPengerjaan: '10 Hari Kerja',
      garansi: 'Garansi Beban & Rangka 5 Tahun',
    },
  },
  {
    id: 'proj-4',
    slug: 'portofolio-pagar-tempa-klasik',
    title: 'Pagar Besi Tempa Klasik Mewah',
    category: 'Pagar Premium',
    client: 'Bpk. H. Wijaya',
    desc: 'Pembuatan dan pemasangan pagar besi tempa gaya klasik Eropa dengan ornamen alferon mewah. Menggunakan material besi solid tebal dengan finishing cat dekoratif tembaga bakar.',
    coverImage: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782022104/besitempa_1.webp',
    images: [
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782022104/besitempa_1.webp',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    specs: {
      material: 'Besi Ulir Solid 16mm & Ornamen Alferon Cor Klasik',
      finishing: 'Cat Tembaga Antik (Hammered Bronze Effect)',
      waktuPengerjaan: '14 Hari Kerja',
      garansi: 'Garansi Kualitas 3 Tahun',
    },
  },
  {
    id: 'proj-5',
    slug: 'portofolio-kanopi-kaca-tempered',
    title: 'Kanopi Kaca Tempered Premium',
    category: 'Kanopi & Atap',
    client: 'PT. Maju Jaya',
    desc: 'Pemasangan kanopi kaca tempered 8mm dengan rangka baja WF. Memberikan tampilan modern dan perlindungan maksimal terhadap sinar matahari dan hujan.',
    coverImage: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782031939/101883.webp',
    images: [
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782031939/101883.webp',
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782064586/Untitled_design.webp',
    ],
    specs: {
      material: 'Baja WF 100 & Kaca Tempered 8mm Film Sandblast',
      finishing: 'Zincromate + Semi Gloss Dark Grey',
      waktuPengerjaan: '6 Hari Kerja',
      garansi: 'Garansi Sealant & Kaca 1 Tahun',
    },
  },
  {
    id: 'proj-6',
    slug: 'portofolio-pagar-besi',
    title: 'Desain Pagar Besi Minimalis',
    category: 'Pagar & Gerbang',
    client: 'Bpk. Sudirman',
    desc: 'Pengerjaan pagar besi minimalis untuk rumah di kawasan perumahan elit. Bahan menggunakan besi galvanis anti karat dengan kerapatan presisi dan cat tahan cuaca.',
    coverImage: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782031625/101880.webp',
    images: [
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782031625/101880.webp',
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782022291/pagarbesiminimalis_1.webp',
      'https://res.cloudinary.com/dozvwz4qd/image/upload/v1782064389/Untitled_design.webp',
    ],
    specs: {
      material: 'Besi Hollow Galvanis 40x60 & 20x40 Tebal 1.6mm',
      finishing: 'Cat Hitam Doff Anti Gores',
      waktuPengerjaan: '4 Hari Kerja',
      garansi: 'Garansi Roda & Engsel 1 Tahun',
    },
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Nani Sugiarti',
    role: 'Pemilik Rumah Baru',
    project: 'Pagar Minimalis, Teralis & Kanopi',
    avatar: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781973358/pngtree_woman_icon_for_your_project_png_image_1876835.webp',
    text: 'Pengalaman yang saya di bengkel las Bercahaya saya membuat pagar minimalis, tralis, kanopi di rumah baru saya. Dan saya meminta bahan yang saya inginkan ternyata sangat sesuai dengan yang saya harapkan. Terima kasih BENGKEL LAS atas kekonsitenan anda menjaga nama baik.',
    rating: 5,
  },
  {
    id: 'testi-2',
    name: 'Sutisna',
    role: 'Pelanggan Residensial',
    project: 'Kanopi Carport & Railing',
    avatar: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781973365/icon_pria_png_41.webp',
    text: 'Pengerjaan sangat cepat dan rapi. Tukang lasnya profesional dan paham betul apa yang dimau oleh pelanggan. Sangat merekomendasikan jasa bengkel las ini untuk kebutuhan rumah.',
    rating: 5,
  },
  {
    id: 'testi-3',
    name: 'Santi Sinta',
    role: 'Renovasi Rumah',
    project: 'Pintu Kombinasi Besi & Teralis',
    avatar: 'https://res.cloudinary.com/dozvwz4qd/image/upload/v1781973358/pngtree_woman_icon_for_your_project_png_image_1876835.webp',
    text: 'Baru kali ini dapat layanan yang sangat cepat, rapi, dan murah. Pokoknya mantap deh layanan Bengkel Las Bercahaya.',
    rating: 5,
  },
];

export const FAQS = [
  {
    q: 'Apakah bisa survei dan ukur lokasi terlebih dahulu?',
    a: 'Ya, tentu saja! Kami menyediakan layanan konsultasi dan survei pengukuran lokasi secara GRATIS untuk seluruh wilayah Petukangan, Pesanggrahan, Jakarta Selatan, Tangerang, dan sekitarnya.',
  },
  {
    q: 'Berapa lama proses pembuatan kanopi, pagar, atau tangga?',
    a: 'Waktu pengerjaan umumnya berkisar antara 3 hingga 14 hari kerja tergantung pada volume, kompleksitas desain, dan ketersediaan material yang Anda pilih.',
  },
  {
    q: 'Material apa saja yang digunakan di Bengkel Las Bercahaya?',
    a: 'Kami hanya menggunakan material standar SNI berkualitas seperti Besi Hollow Galvanis (anti karat), Baja WF, Plat Besi Laser Cutting, Stainless Steel, Wood Plastic Composite (WPC), serta atap Alderon, Spandek, Polycarbonate, dan Kaca Tempered.',
  },
  {
    q: 'Apakah ada garansi untuk setiap pengerjaan las?',
    a: 'Ada! Kami memberikan garansi struktur dan perawatan untuk menjamin kepuasan dan ketenangan Anda.',
  },
  {
    q: 'Bagaimana sistem pembayaran pemesanan?',
    a: 'Sistem pembayaran transparan dengan uang muka (DP) setelah survei dan kesepakatan desain, serta pelunasan dilakukan setelah pekerjaan selesai terpasang dengan rapi di lokasi Anda.',
  },
];

export const WORK_STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Estimasi',
    desc: 'Hubungi kami via WhatsApp/Telepon untuk mengutarakan kebutuhan, model referensi, dan perkiraan estimasi biaya.',
  },
  {
    step: '02',
    title: 'Survei Lokasi Gratis',
    desc: 'Tim ahli kami datang langsung ke lokasi Anda untuk melakukan pengukuran presisi dan membawakan sampel bahan.',
  },
  {
    step: '03',
    title: 'Fabrikasi Profesional',
    desc: 'Pekerjaan pengelasan dilakukan di bengkel kami oleh tukang las bersertifikat dengan mesin modern berstandar tinggi.',
  },
  {
    step: '04',
    title: 'Pemasangan & Garansi',
    desc: 'Pemasangan rapi dan presisi di lokasi hingga selesai dengan pemeriksaan mutu dan garansi resmi.',
  },
];
