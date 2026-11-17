import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2,
  Trees,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  MapPin
} from 'lucide-react'
import './Portfolio.css'

const portfolioItems = [
  {
    title: 'Desain and Built Rest Area KM 130 A & B Merak',
    client: 'Astra Toll Road',
    category: 'Infrastruktur & Publik',
    year: 'Proyek Strategis',
    desc: 'Perencanaan desain arsitektur lanskap 3D dan pengerjaan konstruksi kanopi, pedestrian, taman penghijauan terpadu.',
    tag: 'Desain & Konstruksi'
  },
  {
    title: 'Desain and Built Rest Area KM 68 A & B Cipali',
    client: 'Astra Toll Road',
    category: 'Infrastruktur & Publik',
    year: 'Proyek Strategis',
    desc: 'Pembuatan master site plan 3D, water pond melingkar, seating area outdoor, dan penghijauan terpadu.',
    tag: 'Masterplan & Built'
  },
  {
    title: 'Konstruksi & Perawatan Taman Golf Karawaci',
    client: 'Bpk. John Riady',
    category: 'Residensial Mewah',
    year: '2021 – Sekarang',
    desc: 'Konstruksi taman lanskap hunian eksklusif, pemasangan rumput sintetis, serta kontrak perawatan rutin berkala.',
    tag: 'Kontrak Maintenance'
  },
  {
    title: 'Konstruksi Taman Goldfinch Summarecon Serpong',
    client: 'Summarecon Serpong',
    category: 'Kawasan Komersial & Residensial',
    year: 'Selesai',
    desc: 'Pembangunan taman modern tropis dengan perpaduan hardscape lampu taman, tanaman hias, dan stepping stone.',
    tag: 'Konstruksi Lanskap'
  },
  {
    title: 'Penghijauan Show Unit Catha Rempoa',
    client: 'Damai Putra Group',
    category: 'Developer & Kawasan',
    year: 'Selesai & Maintenance',
    desc: 'Penghijauan show unit dan perawatan berkelanjutan kawasan residensial Catha Rempoa Ciputat Timur.',
    tag: 'Show Unit & Taman'
  },
  {
    title: 'Show Unit Nismara Kota Harapan Indah',
    client: 'Damai Putra Group',
    category: 'Developer & Kawasan',
    year: 'Selesai',
    desc: 'Pengerjaan Hardscape carport, bangku, planter box, rumput sintetis, rubber flooring & Children Play Ground.',
    tag: 'Hardscape & CPG'
  },
  {
    title: 'Indoor Plant Perbankan (BTN & BRI)',
    client: 'Bank BTN & Bank BRI',
    category: 'Korporasi & Gedung',
    year: 'Multi-Cabang',
    desc: 'Rental dan perawatan tanaman indoor di Kantor BTN Ciputat, BSD, Gading Serpong, Cutruk, serta Bank BRI.',
    tag: 'Rental Tanaman'
  },
  {
    title: 'Jalan Akses Suradita Citra Garden Serpong',
    client: 'Ciputra Group',
    category: 'Developer & Kawasan',
    year: 'Selesai',
    desc: 'Penghijauan dan perapihan koridor jalan akses perumahan Citra Garden Serpong Tangerang.',
    tag: 'Kawasan Terpadu'
  },
  {
    title: 'Vertical Garden Bebek Kaleyo Tebet & Bogor',
    client: 'Bebek Kaleyo',
    category: 'Komersial & Restoran',
    year: 'Selesai',
    desc: 'Instalasi vertical garden tanaman hijau sintetis dan hidup pada area dinding fasad dan koridor restoran.',
    tag: 'Vertical Garden'
  },
  {
    title: 'Penanaman Rumput Harapan Indah Club',
    client: 'Hotel Santika',
    category: 'Komersial & Perhotelan',
    year: 'Selesai',
    desc: 'Penanaman rumput lanskap area club house dan fasilitas outdoor hotel berbintang.',
    tag: 'Penanaman Rumput'
  },
  {
    title: 'Konstruksi & Dekorasi Taman Kering',
    client: 'IPEKA BSD',
    category: 'Institusi & Edukasi',
    year: 'Selesai',
    desc: 'Konstruksi taman sekolah modern dan dekorasi taman kering batu koral estetis ramah anak.',
    tag: 'Taman Kering'
  },
  {
    title: 'Rumput Sintetis Mini Soccer Serpong & Aviciena',
    client: 'Fasilitas Olahraga',
    category: 'Sport Facility',
    year: 'Selesai',
    desc: 'Pemasangan rumput sintetis lapangan futsal dan mini soccer dengan standar ketahanan tinggi.',
    tag: 'Sport Turf'
  }
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const categories = [
    'Semua',
    'Infrastruktur & Publik',
    'Developer & Kawasan',
    'Residensial Mewah',
    'Korporasi & Gedung'
  ]

  const filtered = portfolioItems.filter(item => {
    if (activeCategory === 'Semua') return true
    return item.category === activeCategory
  })

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <div className="section-badge">
            <Building2 size={14} />
            <span>Rekam Jejak Proyek</span>
          </div>
          <h2 className="section-title">Portofolio &amp; Klien Ternama</h2>
          <p className="section-desc">
            Kepercayaan dari pengembang properti terkemuka, BUMN, perbankan, pengelola jalan tol,
            dan pemilik hunian mewah di berbagai kota di Indonesia.
          </p>

          {/* Category Tabs */}
          <div className="portfolio-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`portfolio-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                layout
                key={item.title}
                className="portfolio-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <div className="card-top-info">
                  <span className="client-badge">{item.client}</span>
                  <span className="tag-badge">{item.tag}</span>
                </div>

                <h3 className="project-title">{item.title}</h3>
                <p className="project-desc">{item.desc}</p>

                <div className="card-footer">
                  <div className="cat-indicator">
                    <Trees size={14} />
                    <span>{item.category}</span>
                  </div>
                  <span className="status-indicator">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Client Logos Strip */}
        <div className="client-trust-strip">
          <p className="strip-label">Dipercaya oleh Perusahaan &amp; Institusi Terkemuka:</p>
          <div className="client-pills-row">
            <div className="client-pill">Astra Toll Road</div>
            <div className="client-pill">Damai Putra Group</div>
            <div className="client-pill">Summarecon Serpong</div>
            <div className="client-pill">Ciputra Group</div>
            <div className="client-pill">Bank BTN</div>
            <div className="client-pill">Bank BRI</div>
            <div className="client-pill">Hotel Santika</div>
            <div className="client-pill">Bebek Kaleyo</div>
            <div className="client-pill">IPEKA BSD</div>
          </div>
        </div>
      </div>
    </section>
  )
}
