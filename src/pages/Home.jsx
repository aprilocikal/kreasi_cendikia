import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import {
  Compass,
  Layers,
  Trees,
  Box,
  Building2,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page-container">
      {/* 1. Hero Section (Setinggi Langit Model) */}
      <Hero />

      {/* 2. Quick Highlight Intro */}
      <section className="home-intro-section">
        <div className="container">
          <div className="home-intro-grid">
            <div className="home-intro-text">
              <div className="section-badge">
                <Compass size={14} />
                <span>Konsultan &amp; Kontraktor Landscape</span>
              </div>
              <h2 className="section-title">
                Mewujudkan Harmoni Lanskap Berkualitas &amp; Berkelanjutan
              </h2>
              <p className="section-desc">
                CV. Kreasi Cendikia Indonesia menghadirkan solusi lanskap menyeluruh:
                dari perencanaan 3D, konstruksi hardscape, taman residensial &amp; komersial,
                hingga pengelolaan kota mandiri dan rest area jalan tol.
              </p>

              <div className="home-intro-points">
                <div className="intro-point">
                  <ShieldCheck size={20} className="point-icon" />
                  <div>
                    <h4>Legalitas Kemenkumham RI</h4>
                    <p>Terdaftar resmi dengan komitmen mutu &amp; transparansi penuh.</p>
                  </div>
                </div>

                <div className="intro-point">
                  <Box size={20} className="point-icon" />
                  <div>
                    <h4>Simulasi 3D Sebelum Konstruksi</h4>
                    <p>Memastikan setiap detail tata ruang terukur presisi.</p>
                  </div>
                </div>
              </div>

              <Link to="/tentang-kami" className="btn-secondary intro-more-btn">
                <span>Pelajari Profil Perusahaan Selengkapnya</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="home-intro-stats-cards">
              <div className="home-stat-box">
                <span className="h-stat-num">10+</span>
                <span className="h-stat-title">Tahun Pengalaman</span>
                <p className="h-stat-desc">Melayani proyek residensial mewah &amp; korporasi.</p>
              </div>

              <div className="home-stat-box accent-box">
                <span className="h-stat-num">100%</span>
                <span className="h-stat-title">Komitmen &amp; Kualitas</span>
                <p className="h-stat-desc">Didukung tim arsitek lanskap &amp; tukang ahli.</p>
              </div>

              <div className="home-stat-box">
                <span className="h-stat-num">Astra</span>
                <span className="h-stat-title">Toll Road Partner</span>
                <p className="h-stat-desc">Rest Area KM 130 Merak &amp; KM 68 Cipali.</p>
              </div>

              <div className="home-stat-box">
                <span className="h-stat-num">Nursery</span>
                <span className="h-stat-title">Kebun Tanaman Sendiri</span>
                <p className="h-stat-desc">Suplai pohon pelindung &amp; tanaman segar terjamin.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Preview */}
      <section className="home-featured-services">
        <div className="container">
          <div className="featured-head">
            <div>
              <div className="section-badge">
                <Trees size={14} />
                <span>Layanan Utama</span>
              </div>
              <h2 className="section-title">Solusi Lanskap Menyeluruh</h2>
            </div>
            <Link to="/layanan" className="view-all-link">
              <span>Lihat Semua Layanan (6 Kategori)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-services-grid">
            <div className="home-svc-card">
              <div className="home-svc-icon">
                <Compass size={24} />
              </div>
              <h3>Desain Taman &amp; 3D Masterplan</h3>
              <p>Perancangan 2D site plan dan simulasi 3D arsitektur lanskap untuk hunian, kantor, dan fasilitas publik.</p>
              <Link to="/layanan" className="card-link">Detail Layanan &rarr;</Link>
            </div>

            <div className="home-svc-card">
              <div className="home-svc-icon">
                <Layers size={24} />
              </div>
              <h3>Konstruksi Hardscape &amp; Gazebo</h3>
              <p>Pembangunan kolam buatan, air mancur, lampu taman, bangku, signed plang, dan canopy pavilion rest area.</p>
              <Link to="/layanan" className="card-link">Detail Layanan &rarr;</Link>
            </div>

            <div className="home-svc-card">
              <div className="home-svc-icon">
                <Trees size={24} />
              </div>
              <h3>Vertical Garden &amp; Rental Tanaman</h3>
              <p>Taman dinding hijau sistem irigasi otomatis serta penyewaan indoor plant untuk gedung kantor &amp; perbankan.</p>
              <Link to="/layanan" className="card-link">Detail Layanan &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 3D Model Teaser Banner */}
      <section className="home-3d-teaser">
        <div className="container">
          <div className="teaser-box-3d">
            <div className="teaser-text">
              <div className="section-badge">
                <Box size={14} />
                <span>Fitur Khusus</span>
              </div>
              <h2>Eksplorasi Simulasi 3 Dimensi</h2>
              <p>
                Lihat model 3D interaktif Canopy Pavilion &amp; Water Basin yang kami rancang
                untuk Rest Area Astra Toll Road secara langsung di browser Anda.
              </p>
              <Link to="/model-3d" className="btn-accent">
                <Box size={18} />
                <span>Buka Halaman Model 3D</span>
              </Link>
            </div>
            <div className="teaser-badge-visual">
              <Sparkles size={32} />
              <span>Rotasi 360&deg; &bull; Mode Siang / Malam &bull; Zoom Detail</span>
            </div>
          </div>
        </div>
      </section>


      {/* 6. Quick CTA Banner */}
      <section className="home-bottom-cta">
        <div className="container">
          <div className="bottom-cta-card">
            <div>
              <h3>Konsultasikan Proyek Lanskap Anda Hari Ini</h3>
              <p>Tim CV. Kreasi Cendikia Indonesia siap melakukan survei lokasi dan penyusunan RAB.</p>
            </div>
            <Link to="/kontak" className="btn-accent">
              <PhoneCall size={18} />
              <span>Hubungi Kami / Konsultasi</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
