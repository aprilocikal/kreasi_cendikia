import React from 'react'
import { motion } from 'framer-motion'
import {
  Compass,
  CheckCircle2,
  FileText,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Eye,
  Target
} from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Story & Legalitas */}
          <div className="about-left">
            <div className="section-badge">
              <Compass size={14} />
              <span>Tentang Perusahaan</span>
            </div>
            
            <h2 className="section-title">
              CV. Kreasi Cendikia Indonesia
            </h2>

            <p className="about-lead">
              Mitra terpercaya dalam perencanaan, desain, konstruksi, serta pemeliharaan lanskap berkelanjutan di Indonesia.
            </p>

            <p className="about-text">
              Berbasis di Cigombong, Kabupaten Bogor, CV. Kreasi Cendikia Indonesia berdiri dengan komitmen
              menghadirkan karya lanskap bernilai estetika tinggi, fungsional, dan berwawasan lingkungan.
              Dengan pengalaman menangani berbagai proyek prestisius—mulai dari perumahan mewah, instansi perbankan,
              hingga rest area jalan tol nasional—kami memadukan keahlian teknis arsitektur lanskap dengan manajemen proyek yang jujur dan profesional.
            </p>

            {/* Official Legalitas & Data Card */}
            <div className="about-legal-card">
              <div className="legal-header">
                <ShieldCheck size={20} className="legal-icon" />
                <h4>Legalitas Resmi Badan Usaha</h4>
              </div>

              <div className="legal-items">
                <div className="legal-item">
                  <span className="legal-label">SK Kemenkumham RI:</span>
                  <span className="legal-val">AHU-0004520-AH.01.14 Tahun 2024</span>
                </div>
                <div className="legal-item">
                  <span className="legal-label">Nomor Pokok Wajib Pajak (NPWP):</span>
                  <span className="legal-val">99.973.701.8-434.000</span>
                </div>
                <div className="legal-item">
                  <span className="legal-label">Domisili Kantor:</span>
                  <span className="legal-val">JL. Raya Sukabumi Km 21 RT.013 RW.004 Cigombong, Kab. Bogor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visi & Misi */}
          <div className="about-right">
            {/* Visi Card */}
            <div className="visi-card">
              <div className="vm-badge">
                <Eye size={18} />
                <span>Visi Perusahaan</span>
              </div>
              <h3 className="vm-title">Konsultan &amp; Kontraktor Landscape Terkemuka</h3>
              <p className="vm-text">
                &ldquo;Menjadi Konsultan dan Kontraktor Landscape profesional yang terkemuka serta mempunyai
                reputasi dan keunggulan yang dapat dipertanggungjawabkan serta jujur.&rdquo;
              </p>
            </div>

            {/* Misi Card */}
            <div className="misi-card">
              <div className="vm-badge orange">
                <Target size={18} />
                <span>Misi Perusahaan</span>
              </div>
              
              <ul className="misi-list">
                <li>
                  <CheckCircle2 size={18} className="misi-icon" />
                  <span>
                    <strong>Karya Berkualitas:</strong> Mengembangkan karya terbaik dalam Desain dan Konstruksi Landscape di Indonesia yang berkualitas tinggi.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="misi-icon" />
                  <span>
                    <strong>Komitmen &amp; Kepercayaan:</strong> Memberikan solusi terbaik dengan memegang teguh kepercayaan dan komitmen dalam memenuhi kebutuhan serta keinginan klien.
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="misi-icon" />
                  <span>
                    <strong>Layanan Berkesinambungan:</strong> Memberikan layanan yang profesional, terstruktur, dan berkelanjutan (maintenance jangka panjang).
                  </span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="misi-icon" />
                  <span>
                    <strong>Kreativitas &amp; Nilai Sosial:</strong> Memberdayakan pengetahuan, pengalaman, kreativitas, inovasi, dan kenyamanan tim kerja demi tujuan bisnis dan pengabdian profesi.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
