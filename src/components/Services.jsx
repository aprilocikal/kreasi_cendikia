import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Trees,
  Compass,
  Layers,
  Scissors,
  Droplets,
  Sprout,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import './Services.css'

const servicesData = [
  {
    id: 'desain',
    icon: Compass,
    title: 'Desain Taman & Landscape',
    category: 'Perencanaan & Desain',
    desc: 'Perancangan arsitektur lanskap 2D site plan dan 3D visual realistis untuk hunian, korporasi, hingga ruang terbuka hijau.',
    subItems: [
      'Desain Taman Rumah Pribadi',
      'Desain Taman Perkantoran & Komersial',
      'Desain Taman Lingkungan & Kawasan Perumahan',
      'Desain Taman Indoor & Courtyard'
    ],
    highlight: 'Dilengkapi gambar kerja teknis & simulasi 3D',
  },
  {
    id: 'hardscape',
    icon: Layers,
    title: 'Konstruksi Hardscape',
    category: 'Struktur & Fasilitas',
    desc: 'Pengerjaan elemen fisik penunjang taman yang kokoh, estetis, dan tahan cuaca dengan material berkualitas premium.',
    subItems: [
      'Lampu Taman & Sistem Pencahayaan',
      'Bangku Taman (Bench) & Custom Planter Box',
      'Air Mancur & Kolam Buatan (Pond)',
      'Pagar, Gerbang & Signed Plang Kawasan',
      'Children Play Ground (CPG) & Rubber Flooring',
      'Jalur Pedestrian & Paving Block Berkualitas'
    ],
    highlight: 'Pengerjaan presisi oleh tukang berpengalaman',
  },
  {
    id: 'vertical',
    icon: Trees,
    title: 'Vertical Garden & Indoor Plant',
    category: 'Penghijauan Vertikal',
    desc: 'Solusi taman vertikal untuk lahan terbatas serta layanan rental tanaman indoor untuk mempercantik interior gedung & kantor.',
    subItems: [
      'Vertical Garden Tanaman Hidup dengan Irigasi Otomatis',
      'Vertical Garden Sintetis untuk Koridor & Indoor',
      'Indoor Plant Rent untuk Gedung Bank, Hotel & Perkantoran',
      'Dekorasi Rangkaian Bunga & Tanaman Meja / Lobby'
    ],
    highlight: 'Digunakan oleh Bank BTN, Bank BRI, Bebek Kaleyo',
  },
  {
    id: 'kering-rumput',
    icon: Sparkles,
    title: 'Taman Kering & Rumput Sintetis',
    category: 'Taman Modern & Sport',
    desc: 'Pembuatan taman minimalis bebas becek serta instalasi rumput sintetis berstandar tinggi untuk hunian maupun sarana olahraga.',
    subItems: [
      'Taman Kering Jepang dengan Taburan Batu Koral & Stepping Stone',
      'Pemasangan Rumput Sintetis Hunian & Taman Golf Karawaci',
      'Rumput Sintetis Lapangan Futsal & Mini Soccer',
      'Drainage Cell & Geotextile untuk Anti Genangan'
    ],
    highlight: 'Mudah dirawat dan selalu hijau sepanjang tahun',
  },
  {
    id: 'perawatan',
    icon: Scissors,
    title: 'Perawatan Lanskap & Bonsai',
    category: 'Maintenance & Konservasi',
    desc: 'Layanan rutin pemeliharaan tanaman, pemupukan, pengendalian hama, pemangkasan bonsai seni, hingga perawatan skala kota terpadu.',
    subItems: [
      'Perawatan Berkala Taman Rumah Mewah & Residensial',
      'Pemangkasan & Pembentukan Bonsai Koleksi Bernilai Tinggi',
      'Perawatan Taman Kawasan Skala Besar (Kota Terpadu)',
      'Manajemen Kebersihan & Pemotongan Rumput Luas'
    ],
    highlight: 'Dipercaya merawat Taman Golf Karawaci sejak 2021',
  },
  {
    id: 'nursery',
    icon: Sprout,
    title: 'Nursery & Sistem Hidroponik',
    category: 'Budidaya & Kebun',
    desc: 'Penyediaan aneka bibit tanaman hias unggul, pohon peneduh, rumput hidup, serta instalasi sistem pertanian hidroponik modern.',
    subItems: [
      'Kebun Nursery Bibit Tanaman Segar & Terawat',
      'Penyediaan Pohon Pelindung & Tanaman Semak Eksotis',
      'Instalasi Rak & Pipa Hidroponik Skala Rumah / Komersial',
      'Pelatihan & Suplai Nutrisi Tanaman Hidroponik'
    ],
    highlight: 'Sumber bibit tanaman langsung dari kebun sendiri',
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  const filterTabs = [
    { key: 'all', label: 'Semua Layanan' },
    { key: 'desain', label: 'Desain & Hardscape' },
    { key: 'vertical', label: 'Vertical & Nursery' },
    { key: 'perawatan', label: 'Perawatan & Rumput' },
  ]

  const filteredServices = servicesData.filter((svc) => {
    if (activeTab === 'all') return true
    if (activeTab === 'desain') return svc.id === 'desain' || svc.id === 'hardscape'
    if (activeTab === 'vertical') return svc.id === 'vertical' || svc.id === 'nursery'
    if (activeTab === 'perawatan') return svc.id === 'perawatan' || svc.id === 'kering-rumput'
    return true
  })

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-badge">
            <Trees size={14} />
            <span>Layanan Terpadu</span>
          </div>
          <h2 className="section-title">Layanan Landscape &amp; Hardscape Lengkap</h2>
          <p className="section-desc">
            Dari konsepsi sketsa ide, pengerjaan konstruksi, hingga perawatan jangka panjang,
            kami menghadirkan standar mutu terbaik untuk menciptakan ruang hijau impian Anda.
          </p>

          {/* Filter Pills */}
          <div className="services-filter-bar">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                className={`filter-pill ${activeTab === tab.key ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-card-grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((svc) => {
              const IconComp = svc.icon
              return (
                <motion.div
                  layout
                  key={svc.id}
                  className="service-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="svc-top">
                    <div className="svc-icon-box">
                      <IconComp size={24} />
                    </div>
                    <span className="svc-category">{svc.category}</span>
                  </div>

                  <h3 className="svc-name">{svc.title}</h3>
                  <p className="svc-desc">{svc.desc}</p>

                  <div className="svc-items-box">
                    <span className="svc-sub-title">Cakupan Pekerjaan:</span>
                    <ul className="svc-checklist">
                      {svc.subItems.map((item, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="svc-check" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="svc-footer">
                    <span className="svc-highlight-tag">
                      <Sparkles size={13} />
                      {svc.highlight}
                    </span>

                    <a
                      href={`https://wa.me/6281212126595?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20pesan%20layanan:%20${encodeURIComponent(svc.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="svc-order-btn"
                    >
                      <span>Pesan Layanan</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="services-banner">
          <div>
            <h3>Butuh Layanan Kustom Sesuai Rancangan Anggaran (RAB)?</h3>
            <p>Konsultasikan kebutuhan spesifik proyek Anda secara gratis bersama tim ahli kami.</p>
          </div>
          <a
            href="https://wa.me/6281212126595?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20konsultasi%20penawaran%20RAB%20landscape"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            <PhoneCall size={18} />
            <span>Pesan Sekarang (WhatsApp)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
