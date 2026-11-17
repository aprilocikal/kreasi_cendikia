import React from 'react'
import PageBanner from '../components/PageBanner'
import Portfolio from '../components/Portfolio'
import { Link } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <PageBanner
        badge="Rekam Jejak Proyek"
        title="Portofolio &amp; Klien Ternama"
        subtitle="Bukti dedikasi dan kualitas kerja kami dalam menangani berbagai proyek berskala strategis di seluruh wilayah Indonesia."
      />

      <Portfolio />

      {/* Bottom CTA */}
      <section style={{ padding: '60px 0', background: 'var(--bg-cream-soft)' }}>
        <div className="container">
          <div className="bottom-cta-card">
            <div>
              <h3>Ingin Proyek Lanskap Anda Ditangani Seperti Klien Kami?</h3>
              <p>Konsultasikan kebutuhan spesifik dan jadwal survei lapangan Anda sekarang.</p>
            </div>
            <Link to="/kontak" className="btn-accent">
              <PhoneCall size={18} />
              <span>Minta Penawaran / Konsultasi</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
