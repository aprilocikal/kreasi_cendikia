export const WHATSAPP_NUMBER = "6281915900782";

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const COMPANY_PROFILE = {
  legalName: "CV. Kreasi Cendekia Indonesia",
  shortName: "Kreasi Cendekia",
  tagline: "Konsultan & Kontraktor Landscape Profesional",
  address:
    "Jl. Raya Sukabumi Km 21 RT.013 RW.004, Cigombong, Kabupaten Bogor, Jawa Barat",
  phoneDisplay: "+62 819-1590-0782",
  email: "cvkreasicendekia@gmail.com",
  establishedYear: "2024",
  vision:
    "Menjadi Konsultan dan Kontraktor Landscape profesional yang terkemuka serta mempunyai reputasi dan keunggulan yang dapat dipertanggungjawabkan serta jujur.",
  missions: [
    "Mengembangkan karya baik dalam Desain dan Konstruksi Landscape di Indonesia yang berkualitas.",
    "Memberikan solusi terbaik dengan memegang kepercayaan dan komitmen dalam memenuhi kebutuhan dan keinginan klien.",
    "Memberikan layanan yang profesional dan berkesinambungan.",
    "Memberdayakan pengetahuan, pengalaman, kreativitas, inovasi dan rasa nyaman dari anggota perusahaan, bagi tujuan bisnis dan pengabdian profesi dan sosial.",
  ],
  coreValues: [
    {
      index: "01",
      title: "Profesional",
      description: "Eksekusi kerja terstruktur sesuai standar teknik lanskap.",
    },
    {
      index: "02",
      title: "Excellence",
      description: "Ketelitian pada detail tanaman, material, dan finishing.",
    },
    {
      index: "03",
      title: "Integrity",
      description: "Transparansi spesifikasi, jadwal, dan pertanggungjawaban.",
    },
    {
      index: "04",
      title: "Creative",
      description: "Gagasan tata ruang hijau yang selaras dengan arsitektur.",
    },
    {
      index: "05",
      title: "Innovation",
      description: "Adaptif terhadap sistem vertical garden, hidroponik, dan drainase.",
    },
    {
      index: "06",
      title: "Unique",
      description: "Karakter taman yang dirancang khusus sesuai identitas lokasi.",
    },
    {
      index: "07",
      title: "Customer Focus",
      description: "Solusi yang berorientasi pada kebutuhan dan kenyamanan klien.",
    },
    {
      index: "08",
      title: "Fast Respon",
      description: "Komunikasi survei, penawaran, dan perawatan yang tanggap.",
    },
  ],
  stats: [
    {
      value: "26+",
      label: "Proyek Terlaksana",
      detail: "Hunian, kawasan perumahan, bank & rest area tol",
    },
    {
      value: "12+",
      label: "Layanan Terpadu",
      detail: "Desain, konstruksi, hardscape hingga perawatan",
    },
    {
      value: "AHU 2024",
      label: "Legalitas Resmi",
      detail: "Terdaftar di Kemenkumham RI & ber-NPWP aktif",
    },
    {
      value: "Cigombong",
      label: "Nursery Mandiri",
      detail: "Pembibitan & stok tanaman langsung dari Kabupaten Bogor",
    },
  ],
};

export const SERVICES = [
  {
    id: "desain-konstruksi-taman",
    number: "01",
    title: "Desain & Konstruksi Taman",
    subtitle: "Hunian Pribadi · Kantor · Lingkungan · Indoor",
    summary:
      "Perencanaan konsep tata hijau hingga pelaksanaan penanaman lengkap untuk hunian pribadi, perkantoran, ruang dalam bangunan, dan lanskap kawasan terpadu.",
    scope: [
      "Desain Taman Rumah Pribadi",
      "Desain Taman Kantor & Korporasi",
      "Desain Taman Lingkungan & Cluster",
      "Desain Taman Indoor & Courtyard",
      "Penataan kontur tanah, sistem resapan & saluran",
    ],
    idealFor: "Rumah tinggal, show unit properti, gedung kantor, dan area publik.",
    image: "/assets/kci/hunian_goldfinch_serpong.webp",
    imageAlt: "Konstruksi taman tropis dengan pencahayaan batu alam di Goldfinch Summarecon Serpong",
    whatsappMessage:
      "Halo CV. Kreasi Cendekia Indonesia, saya tertarik berkonsultasi mengenai layanan Desain & Konstruksi Taman.",
    featured: true,
  },
  {
    id: "hardscape-kolam",
    number: "02",
    title: "Hardscape & Kolam Buatan",
    subtitle: "Kolam Pond · Air Mancur · Pedestrian · CPG",
    summary:
      "Pengerjaan elemen struktural taman yang memadukan estetika arsitektural, daya tahan material luar ruang, dan kenyamanan sirkulasi pengunjung.",
    scope: [
      "Kolam Buatan (Pond) & Air Mancur",
      "Lampu Taman & Bangku Taman (Planter & Bench)",
      "Pedestrian, Jalur Batu Alam & Carport",
      "Pagar, Gerbang & Sign Plang Kawasan",
      "Children Play Ground (CPG) & Rubber Flooring",
      "Pekerjaan Saluran Drainase Lanskap",
    ],
    idealFor: "Kawasan komersial, cluster perumahan, rest area, dan villa pribadi.",
    image: "/assets/kci/hardscape_planter_bench.webp",
    imageAlt: "Konstruksi planter box dan bangku kayu taman arsitektural",
    whatsappMessage:
      "Halo CV. Kreasi Cendekia Indonesia, saya ingin menanyakan penawaran untuk pekerjaan Hardscape & Kolam Buatan.",
    featured: true,
  },
  {
    id: "vertical-garden-indoor",
    number: "03",
    title: "Vertical Garden & Indoor Plant",
    subtitle: "Dinding Hijau Alami · Sintetis · Rental Tanaman",
    summary:
      "Solusi penghijauan vertikal hemat ruang untuk fasad gedung, interior restoran, maupun pengadaan dan sewa tanaman hias perkantoran.",
    scope: [
      "Vertical Garden Tanaman Hidup + Sistem Irigasi",
      "Vertical Garden Sintetis untuk Interior & Komersial",
      "Indoor Plant Rent (Perbankan, Lobi Gedung & Kantor)",
      "Dekorasi Tanaman Acara & Ruang Rapat",
    ],
    idealFor: "Perbankan, restoran, lobi perkantoran, dan dinding batas hunian.",
    image: "/assets/kci/vertical_garden_gedung.webp",
    imageAlt: "Pemasangan vertical garden modular pada struktur bangunan",
    whatsappMessage:
      "Halo CV. Kreasi Cendekia Indonesia, saya ingin memesan layanan Vertical Garden / Indoor Plant.",
  },
  {
    id: "taman-kering-rumput-sintetis",
    number: "04",
    title: "Taman Kering & Rumput Sintetis",
    subtitle: "Minim Perawatan · Lapangan Futsal · Area Bermain",
    summary:
      "Penataan taman kering dengan komposisi batu koral serta pemasangan rumput sintetis berstandar rapi untuk halaman rumah hingga lapangan mini soccer.",
    scope: [
      "Dekorasi Taman Kering & Batu Alam",
      "Pemasangan Rumput Sintetis Halaman & Rooftop",
      "Pemasangan Rumput Sintetis Lapangan Futsal / Mini Soccer",
      "Alas Drainase Cell & Perataan Lahan",
    ],
    idealFor: "Teras indoor, rooftop, sekolah, sarana olahraga, dan taman minim perawatan.",
    image: "/assets/kci/rumput_sintetis_futsal.webp",
    imageAlt: "Pemasangan rumput sintetis standar lapangan mini soccer dan futsal",
    whatsappMessage:
      "Halo CV. Kreasi Cendekia Indonesia, saya membutuhkan informasi jasa Taman Kering atau Rumput Sintetis.",
  },
  {
    id: "perawatan-taman-bonsai",
    number: "05",
    title: "Perawatan Taman & Bonsai",
    subtitle: "Rumah Pribadi · Bonsai · Kawasan Kota Terpadu",
    summary:
      "Pemeliharaan berkala oleh tenaga ahli untuk menjaga kesuburan tanah, bentuk tajuk pohon, kerapian rumput, dan kesehatan tanaman koleksi bernilai tinggi.",
    scope: [
      "Perawatan Taman Rumah Pribadi Berkala",
      "Pemangkasan & Pembentukan Bonsai Koleksi",
      "Perawatan Taman Kawasan / Kota Terpadu & Turap",
      "Pemupukan, pengendalian hama & peremajaan tanaman",
    ],
    idealFor: "Hunian mewah, pengelola kawasan kota mandiri, hotel, dan area publik.",
    image: "/assets/kci/perawatan_bonsai.webp",
    imageAlt: "Tim ahli melakukan pemangkasan dan perawatan bonsai taman",
    whatsappMessage:
      "Halo CV. Kreasi Cendekia Indonesia, saya ingin menjadwalkan layanan Perawatan Taman atau Bonsai.",
  },
  {
    id: "hidroponik-nursery-aviary",
    number: "06",
    title: "Hidroponik, Nursery & Aviary",
    subtitle: "Instalasi Hidroponik · Pembibitan Bogor · Taman Aviary",
    summary:
      "Didukung lahan nursery mandiri di Cigombong, kami melayani pengadaan bibit tanaman skala proyek, instalasi pertanian hidroponik, serta taman aviary tematik.",
    scope: [
      "Instalasi Sistem Hidroponik Vertikal & NFT",
      "Suplai Tanaman & Pohon Pelindung dari Nursery Sendiri",
      "Desain & Pembuatan Taman Aviary Natural",
      "Penghijauan Akses Jalan & Infrastruktur Tol",
    ],
    idealFor: "Proyek developer skala besar, institusi pendidikan, wisata edukasi, dan kolektor.",
    image: "/assets/kci/nursery_cigombong.webp",
    imageAlt: "Area pembibitan dan stok tanaman di nursery CV. Kreasi Cendekia Indonesia",
    whatsappMessage:
      "Halo CV. Kreasi Cendekia Indonesia, saya tertarik dengan layanan Hidroponik / Suplai Nursery / Taman Aviary.",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "Semua",
  "Hunian & Taman",
  "Komersial & Publik",
  "Kawasan & Developer",
  "Hardscape & Sintetis",
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "p-01",
    title: "Desain & Built Rest Area KM 130 A & B",
    client: "Astra Toll Road",
    location: "Tol Merak",
    category: "Komersial & Publik",
    scopeNote: "Desain & konstruksi lanskap serta area pembibitan",
  },
  {
    id: "p-02",
    title: "Desain & Built Rest Area KM 68 A & 68 B",
    client: "Astra Toll Road",
    location: "Tol Cipali",
    category: "Komersial & Publik",
    scopeNote: "Masterplan tata hijau, plaza air mancur & area komersial",
  },
  {
    id: "p-03",
    title: "Konstruksi Taman Hunian Taman Golf Karawaci",
    client: "Bpk. John Riady",
    location: "Lippo Karawaci, Tangerang",
    category: "Hunian & Taman",
    scopeNote: "Konstruksi lanskap tepi danau & courtyard residensial",
  },
  {
    id: "p-04",
    title: "Perawatan Taman Taman Golf Karawaci",
    client: "Bpk. John Riady",
    location: "Lippo Karawaci, Tangerang",
    category: "Hunian & Taman",
    scopeNote: "Kontrak perawatan taman berkelanjutan",
    yearNote: "2021 – Sekarang",
  },
  {
    id: "p-05",
    title: "Konstruksi Taman Goldfinch",
    client: "Summarecon Serpong",
    location: "Serpong, Tangerang",
    category: "Hunian & Taman",
    scopeNote: "Penataan taman tropis, batu alam & lampu taman",
  },
  {
    id: "p-06",
    title: "Konstruksi Taman & Dekorasi Taman Kering IPEKA",
    client: "Sekolah IPEKA BSD",
    location: "BSD City, Tangerang",
    category: "Komersial & Publik",
    scopeNote: "Konstruksi taman luar dan dekorasi taman kering indoor",
  },
  {
    id: "p-07",
    title: "Indoor Plant Rent & Perawatan Tanaman Bank",
    client: "Bank BTN & Bank BRI",
    location: "Ciputat, BSD, Gading Serpong & Cutruk",
    category: "Komersial & Publik",
    scopeNote: "Penyewaan & penataan tanaman hias lobi perbankan",
  },
  {
    id: "p-08",
    title: "Pemasangan Vertical Garden Bebek Kaleyo",
    client: "Restoran Bebek Kaleyo",
    location: "Tebet (Jakarta) & Bogor Pakuan",
    category: "Hardscape & Sintetis",
    scopeNote: "Dinding vertical garden tematik untuk area makan",
  },
  {
    id: "p-09",
    title: "Pemasangan Rumput Sintetis Lapangan Futsal",
    client: "Mini Soccer Serpong & Sekolah Aviciena",
    location: "Serpong & Tangerang",
    category: "Hardscape & Sintetis",
    scopeNote: "Rumput sintetis standar olahraga & garis lapangan",
  },
  {
    id: "p-10",
    title: "Pemasangan Rumput Sintetis Taman Golf Karawaci",
    client: "Residensial Karawaci",
    location: "Karawaci, Tangerang",
    category: "Hardscape & Sintetis",
    scopeNote: "Pemasangan rumput sintetis area luar ruang & tepi kolam",
  },
  {
    id: "p-11",
    title: "Penghijauan & Perawatan Show Unit Catha Rempoa",
    client: "Damai Putra Group",
    location: "Rempoa, Tangerang Selatan",
    category: "Kawasan & Developer",
    scopeNote: "Penghijauan show unit, area junction & maintenance rutin",
  },
  {
    id: "p-12",
    title: "Penghijauan, Hardscape & CPG Show Unit Nismara",
    client: "Damai Putra Group",
    location: "Kota Harapan Indah, Bekasi",
    category: "Kawasan & Developer",
    scopeNote: "Penghijauan, carport, bangku, planter, rumput sintetis & rubber flooring CPG",
  },
  {
    id: "p-13",
    title: "Penghijauan Marketing Gallery Meli Melo 3",
    client: "Damai Putra Group",
    location: "Kota Harapan Indah, Bekasi",
    category: "Kawasan & Developer",
    scopeNote: "Tata lanskap kawasan marketing gallery",
  },
  {
    id: "p-14",
    title: "Penghijauan Planting Turap Royal Residence",
    client: "Damai Putra Group",
    location: "Kota Harapan Indah, Bekasi",
    category: "Kawasan & Developer",
    scopeNote: "Penanaman penguatan lanskap area turap residensial",
  },
  {
    id: "p-15",
    title: "Penanaman Rumput Harapan Indah Club",
    client: "Hotel Santika",
    location: "Kota Harapan Indah, Bekasi",
    category: "Komersial & Publik",
    scopeNote: "Penanaman hamparan rumput area club & perhotelan",
  },
  {
    id: "p-16",
    title: "Penghijauan Cluster Feia Extension, Amara Green Ara, Ruko Anagata & Cluster Hortensia",
    client: "Damai Putra Group",
    location: "Bekasi & Jabodetabek",
    category: "Kawasan & Developer",
    scopeNote: "Penghijauan multi-cluster perumahan dan area ruko komersial",
  },
  {
    id: "p-17",
    title: "Penghijauan & Perapihan Jalan Akses Suradita",
    client: "Ciputra Group",
    location: "Citra Garden Serpong, Tangerang",
    category: "Kawasan & Developer",
    scopeNote: "Penghijauan koridor jalan akses & penataan median",
  },
];

export const GALLERY_ITEMS = [
  {
    id: "g-01",
    title: "Lanskap & Kolam Tepi Danau Taman Golf",
    projectContext: "Taman Golf Karawaci · Bpk. John Riady",
    category: "Hunian & Taman",
    image: "/assets/kci/hero_karawaci.webp",
    caption:
      "Penataan lanskap halaman luas, jalur stepping stone batu alam, dan perawatan taman tepi danau di Karawaci.",
  },
  {
    id: "g-02",
    title: "Masterplan Rest Area KM 68 A & B",
    projectContext: "Astra Toll Road · Tol Cipali",
    category: "Komersial & Publik",
    image: "/assets/kci/komersial_cipali_restarea.webp",
    caption:
      "Desain and built ruang terbuka hijau, plaza air mancur bundar, dan area istirahat pengendara di Tol Cipali.",
  },
  {
    id: "g-03",
    title: "Taman Tropis & Batu Alam Goldfinch",
    projectContext: "Summarecon Serpong · Tangerang",
    category: "Hunian & Taman",
    image: "/assets/kci/hunian_goldfinch_serpong.webp",
    caption:
      "Kombinasi bromelia, tanaman semak berbunga, batu koral putih, dan lampu taman arsitektural.",
  },
  {
    id: "g-04",
    title: "Planter Box & Bangku Kayu Arsitektural",
    projectContext: "Proyek Hardscape Komersial",
    category: "Hardscape & Sintetis",
    image: "/assets/kci/hardscape_planter_bench.webp",
    caption:
      "Konstruksi planter baja berlapis aksen kayu dengan bangku duduk terintegrasi dan vegetasi palem.",
  },
  {
    id: "g-05",
    title: "Show Unit & Playground Catha Rempoa",
    projectContext: "Damai Putra Group · Tangerang Selatan",
    category: "Kawasan & Developer",
    image: "/assets/kci/kawasan_catha_rempoa.webp",
    caption:
      "Penghijauan area bermain anak, jalur pedestrian, dan taman show unit di kawasan Catha Rempoa.",
  },
  {
    id: "g-06",
    title: "Perawatan Kawasan Segara City",
    projectContext: "Kota Harapan Indah · Bekasi",
    category: "Kawasan & Developer",
    image: "/assets/kci/kawasan_segara_city.webp",
    caption:
      "Pemeliharaan taman gerbang kawasan, median jalan, dan ruang terbuka hijau klaster perumahan.",
  },
  {
    id: "g-07",
    title: "Vertical Garden Modular Gedung",
    projectContext: "Proyek Fasad & Struktur Komersial",
    category: "Hardscape & Sintetis",
    image: "/assets/kci/vertical_garden_gedung.webp",
    caption:
      "Pemasangan panel vertical garden rangka besi gantung untuk menyegarkan fasad bangunan.",
  },
  {
    id: "g-08",
    title: "Vertical Garden Sintetis Bebek Kaleyo",
    projectContext: "Restoran Bebek Kaleyo · Tebet & Bogor",
    category: "Hardscape & Sintetis",
    image: "/assets/kci/vertical_garden_bebek_kaleyo.webp",
    caption:
      "Dinding tanaman sintetis rapat dengan komposisi warna dedaunan tropis sebagai latar signage restoran.",
  },
  {
    id: "g-09",
    title: "Lapangan Mini Soccer Rumput Sintetis",
    projectContext: "Mini Soccer Serpong & Sekolah Aviciena",
    category: "Hardscape & Sintetis",
    image: "/assets/kci/rumput_sintetis_futsal.webp",
    caption:
      "Pemasangan karpet rumput sintetis olahraga lengkap dengan garis lapangan dan sistem drainase bawah.",
  },
  {
    id: "g-10",
    title: "Kolam Buatan & Pond Skala Kawasan",
    projectContext: "Konstruksi Kolam & Geomembran",
    category: "Hardscape & Sintetis",
    image: "/assets/kci/kolam_buatan_pond.webp",
    caption:
      "Pembuatan kolam buatan menggunakan pelapis kedap air, pengerasan tepi batu, dan ekosistem ikan koi.",
  },
  {
    id: "g-11",
    title: "Perawatan Bonsai & Taman Lobi",
    projectContext: "Perawatan Spesialis Bonsai",
    category: "Hunian & Taman",
    image: "/assets/kci/perawatan_bonsai.webp",
    caption:
      "Pemangkasan presisi dan pembentukan cabang bonsai koleksi di area taman dan lobi gedung.",
  },
  {
    id: "g-12",
    title: "Indoor Plant Rent Perkantoran & Bank",
    projectContext: "Bank BTN & Bank BRI · Jabodetabek",
    category: "Komersial & Publik",
    image: "/assets/kci/indoor_plant_rent.webp",
    caption:
      "Penataan pot keramik dan tanaman indoor pilihan dengan jadwal rotasi perawatan berkala.",
  },
  {
    id: "g-13",
    title: "Dekorasi Taman Kering & Indoor Event",
    projectContext: "Sekolah IPEKA BSD & Ruang Rapat",
    category: "Komersial & Publik",
    image: "/assets/kci/dekorasi_indoor.webp",
    caption:
      "Kreasi taman kering dalam ruangan dengan hamparan batu koral putih dan tanaman tropis rendah cahaya.",
  },
  {
    id: "g-14",
    title: "Taman Aviary Natural & Jalur Batu",
    projectContext: "Konstruksi Taman Aviary",
    category: "Hunian & Taman",
    image: "/assets/kci/taman_aviary.webp",
    caption:
      "Penataan habitat aviary dengan struktur kandang tinggi, pohon peneduh, batu alam, dan kendi air.",
  },
  {
    id: "g-15",
    title: "Instalasi Kebun Hidroponik Vertikal",
    projectContext: "Divisi Hidroponik KCI",
    category: "Komersial & Publik",
    image: "/assets/kci/hidroponik_farm.webp",
    caption:
      "Pembangunan green house dan instalasi menara serta pipa hidroponik produktif siap panen.",
  },
  {
    id: "g-16",
    title: "Lahan Pembibitan Nursery Cigombong",
    projectContext: "Nursery Mandiri · Kabupaten Bogor",
    category: "Kawasan & Developer",
    image: "/assets/kci/nursery_cigombong.webp",
    caption:
      "Stok ribuan tanaman semak, penutup tanah, dan pohon pelindung yang siap dikirim ke lokasi proyek.",
  },
];

export const LEGALITY_DATA = {
  ahu: {
    title: "Surat Keterangan Terdaftar Kemenkumham RI",
    number: "AHU-0004520-AH.01.14 Tahun 2024",
    issuedDate: "17 Januari 2024",
    deedInfo: "Akta Nomor 01 tanggal 11 Januari 2024",
    notary: "Notaris Lia Herawati, S.H., M.Kn. (Kab. Sukabumi)",
    domicile: "Berkedudukan di Kabupaten Bogor, Jawa Barat",
    image: "/assets/kci/legalitas_ahu.webp",
  },
  npwp: {
    title: "Nomor Pokok Wajib Pajak (NPWP) Badan",
    number: "99.973.701.8-434.000",
    npwp16: "0999 7370 1843 4000",
    registeredDate: "18 Januari 2024",
    taxOffice: "KPP Pratama Ciawi",
    address: "Raya Bogor Sukabumi Km 21 RT. 013 RW. 004, Cigombong, Kab. Bogor",
    image: "/assets/kci/legalitas_npwp.webp",
  },
};
