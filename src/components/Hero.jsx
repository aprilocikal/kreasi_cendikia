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
          {/* Eyebrow Tag like Setinggi Langit */}
          <p className="hero-eyebrow-tag">
            KONSULTAN &amp; KONTRAKTOR LANDSCAPE PROFESIONAL
          </p>

          {/* Display Headline in Poppins like Setinggi Langit */}
          <h1 className="hero-giant-title">
            <span className="title-line-white">Harmoni</span>
            <span className="title-line-orange-wrap">
              <span className="title-line-orange">Lanskap</span>
              {/* Subtle curved underline accent like Setinggi Langit */}
              <svg
                className="hero-brush-stroke"
                viewBox="0 0 100 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C20 2.5 55 2.5 98 5"
                  stroke="#E8732A"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle Description - Compact & Clean Font */}
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
              <PhoneCall size={15} />
              <span>Pesan Sekarang</span>
            </a>

            <Link
              to="/tentang-kami"
              className="hero-btn-translucent"
            >
              <span>Tentang Kami</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
