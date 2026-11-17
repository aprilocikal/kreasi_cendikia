import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneCall, ArrowRight } from 'lucide-react'
import heroBg from '../assets/hero-bg.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Dark gradient overlay for high contrast readability like Setinggi Langit */}
      <div className="hero-dark-overlay" />

      <div className="hero-inner-container">
        <div className="hero-text-content">
          {/* Small Top Tagline */}
          <p className="hero-eyebrow-tag">
            KONSULTAN &amp; KONTRAKTOR LANDSCAPE PROFESIONAL
          </p>

          {/* Giant Display Headline like Setinggi Langit */}
          <h1 className="hero-giant-title">
            <span className="title-line-white">Harmoni</span>
            <span className="title-line-orange">Lanskap</span>
          </h1>

          {/* Subtitle Description */}
          <p className="hero-description">
            CV. Kreasi Cendikia Indonesia menghadirkan solusi lanskap menyeluruh:
            mulai dari perencanaan masterplan 3D, pembangunan taman residensial &amp;
            komersial, vertical garden, nursery, hingga proyek kawasan publik dan
            rest area jalan tol.
          </p>

          {/* Action Buttons like Setinggi Langit */}
          <div className="hero-buttons-row">
            <a
              href="https://wa.me/6281212126595?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-orange"
            >
              <PhoneCall size={16} />
              <span>Pesan Sekarang</span>
            </a>

            <Link
              to="/tentang-kami"
              className="hero-btn-translucent"
            >
              <span>Tentang Kami</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
