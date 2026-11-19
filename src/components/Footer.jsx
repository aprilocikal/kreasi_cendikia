import React from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MessageCircle,
  PhoneCall
} from 'lucide-react'
import KciLogo from './KciLogo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer-setinggi-style">
      <div className="container">
        <div className="footer-main-grid">
          {/* Kolom 1: Brand Logo & Dark Mission Card */}
          <div className="footer-col-brand">
            <Link to="/" className="footer-logo-wrap">
              <KciLogo size={36} showText={true} light={false} />
            </Link>

            {/* Dark Quote Box like Setinggi Langit */}
            <div className="footer-quote-box">
              <p className="quote-main-text">
                Menghadirkan karya arsitektur dan konstruksi lanskap berkualitas, asri,
                serta ramah lingkungan untuk menciptakan ruang hidup yang harmonis di seluruh Indonesia.
              </p>
              <p className="quote-sub-tag">
                : &ldquo;Konsultan &amp; Kontraktor Landscape Profesional&rdquo;
              </p>
            </div>

            {/* Square Rounded Action Icons */}
            <div className="footer-icon-buttons">
              <a
                href="https://wa.me/6281915900782"
                target="_blank"
                rel="noopener noreferrer"
                className="f-icon-btn"
                title="Hubungi via WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="mailto:cvkreasicendekia@gmail.com"
                className="f-icon-btn"
                title="Kirim Email"
              >
                <Mail size={18} />
              </a>

              <a
                href="tel:081915900782"
                className="f-icon-btn"
                title="Telepon Kantor"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Menu Halaman */}
          <div className="footer-col-nav">
            <h4 className="footer-col-label">HALAMAN</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tentang-kami">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/layanan">Layanan</Link>
              </li>
              {/* <li>
                <Link to="/model-3d">Model 3D</Link>
              </li> */}
              <li>
                <Link to="/portofolio">Portofolio</Link>
              </li>
              <li>
                <Link to="/kontak">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Tombol Pesan Sekarang */}
          <div className="footer-col-action">
            <h4 className="footer-col-label">KONTAK &amp; LAYANAN</h4>

            {/* Email Pill Card */}
            <a
              href="mailto:cvkreasicendekia@gmail.com"
              className="footer-contact-pill-card"
            >
              <div className="pill-card-icon">
                <Mail size={18} />
              </div>
              <div className="pill-card-text">
                <span className="pill-card-sub">EMAIL RESMI</span>
                <span className="pill-card-main">cvkreasicendekia@gmail.com</span>
              </div>
            </a>

            {/* Big Orange Pill Button like Setinggi Langit */}
            <a
              href="https://wa.me/6281915900782?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20pesan%20layanan%20landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-orange-pill-btn"
            >
              <PhoneCall size={16} />
              <span>Pesan Sekarang</span>
            </a>
          </div>
        </div>

        {/* Bottom Sub-footer Bar */}
        <div className="footer-bottom-divider" />
        <div className="footer-sub-bar">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} CV. Kreasi Cendikia Indonesia. Dibuat dengan{' '}
            <span style={{ color: '#0ca74b' }}>&#10084;</span> untuk lanskap Indonesia.
          </p>

          <div className="footer-sub-links">
            <Link to="/kontak">Kebijakan Privasi</Link>
            <Link to="/kontak">Syarat &amp; Ketentuan</Link>
            <Link to="/tentang-kami">Legalitas AHU &amp; NPWP</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
