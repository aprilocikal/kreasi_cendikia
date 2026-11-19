import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneCall, ArrowRight } from 'lucide-react'
import heroBg from '../assets/hero-bg.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Balanced radial overlay for center alignment readability */}
      <div className="hero-dark-overlay" />

      <div className="hero-inner-container">
        <div className="hero-text-content">
          {/* Luxury Editorial Headline with Glitter Shimmer & Twinkling Sparkles */}
          <div className="hero-title-wrapper">
            <span className="sparkle-star sparkle-top-left" aria-hidden="true">✦</span>
            <span className="sparkle-star sparkle-top-right" aria-hidden="true">✧</span>
            <span className="sparkle-star sparkle-bottom-left" aria-hidden="true">⋆</span>
            <span className="sparkle-star sparkle-bottom-right" aria-hidden="true">✦</span>

            <h1 className="hero-giant-title">
              <span className="title-serif-main glitter-text">Harmoni Lanskap</span>
              <span className="title-serif-sub">Ruang Hidup Tropis Berkelas</span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="hero-description">
            CV. Kreasi Cendikia Indonesia memadukan seni rancang arsitektur hijau, konstruksi presisi,
            dan pembibitan mandiri untuk mewujudkan taman residensial eksklusif, kawasan publik,
            hingga lanskap komersial berdaya tahan lama.
          </p>

          {/* Centered Action Buttons */}
          <div className="hero-buttons-row">
            <a
              href="https://wa.me/6281212126595?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              <PhoneCall size={16} />
              <span>Konsultasi Proyek</span>
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
