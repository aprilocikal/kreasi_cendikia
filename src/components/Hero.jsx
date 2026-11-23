import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneCall, ArrowRight } from 'lucide-react'
import heroBg from '../assets/hero-bg.webp'
import KciLogo from './KciLogo'
import { buildWhatsAppUrl } from '../data/kciData'
import './Hero.css'

export default function Hero() {
  const whatsappHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi mengenai layanan lanskap."
  )

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
      {/* Balanced radial overlay for center alignment readability */}
      <div className="hero-dark-overlay" />

      <div className="hero-inner-container">
        <div className="hero-text-content">
          {/* Big Official Brand Logo */}
          <div className="hero-logo-wrapper">
            <KciLogo width={105} showText={false} className="hero-big-logo" />
          </div>

          {/* Luxury Editorial Headline with Refined Shimmer */}
          <h1 className="hero-giant-title">
            <span className="title-serif-main glitter-text">Kreasi Cendekia</span>
            <span className="title-serif-sub">Landscape Contractor</span>
          </h1>

          {/* Subtitle Description */}
          <p className="hero-description">
            Konsultan &amp; kontraktor lanskap profesional untuk taman hunian, kawasan publik, dan infrastruktur hijau.
          </p>

          {/* Centered Action Buttons */}
          <div className="hero-buttons-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
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
