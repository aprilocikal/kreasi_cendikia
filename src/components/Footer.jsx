import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck,
  Trees
} from 'lucide-react'
import KciLogo from './KciLogo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="kci-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/">
              <KciLogo size={40} showText={true} light={true} />
            </Link>
            
            <p className="footer-company-desc">
              CV. Kreasi Cendikia Indonesia adalah konsultan dan kontraktor lanskap profesional.
              Menyediakan solusi komprehensif mulai dari desain masterplan 3D, pembangunan hardscape,
              taman residensial &amp; komersial, vertical garden, nursery, hingga pemeliharaan kawasan terpadu.
            </p>

            <div className="footer-legal-badge">
              <ShieldCheck size={16} />
              <span>SK AHU-0004520-AH.01.14 Tahun 2024 &bull; NPWP: 99.973.701.8-434.000</span>
            </div>
          </div>

          {/* Navigasi Layanan */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Halaman Layanan</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Katalog Layanan Lengkap</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Desain Taman 2D &amp; 3D</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Konstruksi Hardscape &amp; Gazebo</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Vertical Garden &amp; Rental Tanaman</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Taman Kering &amp; Rumput Sintetis</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Perawatan Lanskap &amp; Bonsai</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigasi Halaman Utama */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Navigasi Halaman</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/">
                  <ChevronRight size={14} />
                  <span>Home (Beranda)</span>
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami">
                  <ChevronRight size={14} />
                  <span>Tentang Kami &amp; Legalitas</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan">
                  <ChevronRight size={14} />
                  <span>Daftar Layanan</span>
                </Link>
              </li>
              <li>
                <Link to="/model-3d">
                  <ChevronRight size={14} />
                  <span>Fitur 3D Interaktif</span>
                </Link>
              </li>
              <li>
                <Link to="/portofolio">
                  <ChevronRight size={14} />
                  <span>Portofolio &amp; Klien</span>
                </Link>
              </li>
              <li>
                <Link to="/kontak">
                  <ChevronRight size={14} />
                  <span>Hubungi Kami / Konsultasi</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak Langsung */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Kontak Resmi</h4>
            <div className="footer-contact-items">
              <div className="fc-item">
                <Phone size={16} className="fc-icon" />
                <div>
                  <span className="fc-title">Telepon / WhatsApp</span>
                  <a href="https://wa.me/6281212126595" target="_blank" rel="noopener noreferrer" className="fc-link">
                    0812-1212-6595
                  </a>
                </div>
              </div>

              <div className="fc-item">
                <Mail size={16} className="fc-icon" />
                <div>
                  <span className="fc-title">Email</span>
                  <a href="mailto:jk.suma88@gmail.com" className="fc-link">jk.suma88@gmail.com</a>
                </div>
              </div>

              <div className="fc-item">
                <MapPin size={16} className="fc-icon" />
                <div>
                  <span className="fc-title">Alamat Kantor</span>
                  <p className="fc-text">
                    JL. Raya Sukabumi Km 21 RT.013 RW.004, Cigombong, Kab. Bogor, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copy-text">
            &copy; {new Date().getFullYear()} CV. Kreasi Cendikia Indonesia. All rights reserved.
          </p>
          <div className="bottom-links">
            <span>Konsultan &amp; Kontraktor Landscape</span>
            <span>&bull;</span>
            <span>Kabupaten Bogor, Jawa Barat</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
