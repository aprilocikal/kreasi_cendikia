import React from 'react'
import {
  Award,
  ShieldCheck,
  Sparkles,
  Lightbulb,
  Fingerprint,
  HeartHandshake,
  Zap,
  Target
} from 'lucide-react'
import './CoreValues.css'

const coreValues = [
  {
    icon: Award,
    title: 'Profesional',
    desc: 'Bekerja dengan standar kompetensi tinggi, disiplin waktu, dan etika kerja terbaik.'
  },
  {
    icon: Target,
    title: 'Excellence',
    desc: 'Menghadirkan hasil pengerjaan terbaik melebihi ekspektasi klien di setiap detail lanskap.'
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Menjunjung kejujuran, transparansi anggaran, dan komitmen penuh terhadap janji proyek.'
  },
  {
    icon: Sparkles,
    title: 'Creative',
    desc: 'Menciptakan rancangan lanskap yang segar, artistik, dan selaras dengan karakter lokasi.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Terus mengadopsi teknologi 3D, irigasi modern, dan metode konstruksi ramah lingkungan.'
  },
  {
    icon: Fingerprint,
    title: 'Unique',
    desc: 'Menghasilkan desain lanskap kustom yang memiliki ciri khas dan keunikan tersendiri.'
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focus',
    desc: 'Mendengarkan kebutuhan klien secara seksama untuk memberikan solusi paling tepat.'
  },
  {
    icon: Zap,
    title: 'Fast Respon',
    desc: 'Tanggap dan sigap dalam komunikasi, konsultasi, hingga penanganan di lapangan.'
  }
]

export default function CoreValues() {
  return (
    <section id="values" className="values-section">
      <div className="container">
        <div className="values-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Budaya Kerja</span>
          </div>
          <h2 className="section-title">Nilai Utama (Core Values)</h2>
          <p className="section-desc">
            Prinsip fundamental yang menjadi pedoman CV. Kreasi Cendikia Indonesia dalam setiap perancangan,
            pengerjaan, dan pelayanan terhadap seluruh mitra dan klien.
          </p>
        </div>

        <div className="values-grid">
          {coreValues.map((val, idx) => {
            const Icon = val.icon
            return (
              <div key={val.title} className="val-card">
                <div className="val-icon-box">
                  <Icon size={22} />
                </div>
                <h3 className="val-title">{val.title}</h3>
                <p className="val-desc">{val.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
