import React from 'react'
import PageBanner from '../components/PageBanner'
import About from '../components/About'
import CoreValues from '../components/CoreValues'
import { Link } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="about-page">
      <PageBanner
        badge="Tentang Perusahaan"
        title="Profil CV. Kreasi Cendikia Indonesia"
        subtitle="Konsultan dan Kontraktor Landscape profesional yang terkemuka, memadukan keahlian arsitektur hijau dengan integritas kerja terpercaya."
      />

      {/* Profil Perusahaan, Legalitas, Visi & Misi */}
      <About />

      {/* 8 Core Values */}
      <CoreValues />

      {/* Bottom CTA */}
      <section style={{ padding: '60px 0', background: 'var(--bg-cream-soft)' }}>
        <div className="container">
          <div className="bottom-cta-card">
            <div>
              <h3>Ingin Bekerja Sama dengan Tim Profesional Kami?</h3>
              <p>Konsultasikan rencana lanskap hunian atau proyek kawasan Anda bersama kami.</p>
            </div>
            <Link to="/kontak" className="btn-accent">
              <PhoneCall size={18} />
              <span>Hubungi Kami Sekarang</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
