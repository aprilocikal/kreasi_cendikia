import React, { useState } from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  PhoneCall,
  MessageSquare
} from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Desain & Konstruksi Taman',
    location: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 900)
  }

  const sendWhatsApp = () => {
    const text = `Halo CV. Kreasi Cendikia Indonesia,%0A%0ASaya: ${form.name || 'Calon Klien'}%0ANo Telp: ${form.phone || '-'}%0ALayanan: ${form.service}%0ALokasi: ${form.location || '-' } %0APesan: ${form.message || 'Saya ingin konsultasi proyek landscape'}`
    window.open(`https://wa.me/6281212126595?text=${text}`, '_blank')
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>Hubungi Kami</span>
          </div>
          <h2 className="section-title">Mulai Konsultasi &amp; Penawaran Proyek</h2>
          <p className="section-desc">
            Diskusikan rencana taman hunian, penghijauan kawasan, vertical garden, atau proyek rest area Anda bersama tim kami.
            Kami siap memberikan estimasi anggaran dan survei lokasi.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Info Card */}
          <div className="contact-info-panel">
            <h3 className="panel-title">Informasi Kantor &amp; Layanan</h3>
            <p className="panel-desc">
              Silakan hubungi kontak resmi CV. Kreasi Cendikia Indonesia di bawah ini:
            </p>

            <div className="info-cards-list">
              <div className="c-info-card">
                <div className="c-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="c-label">Telepon / WhatsApp</span>
                  <p className="c-val">0812-1212-6595</p>
                  <span className="c-sub">Fast response via WhatsApp</span>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="c-label">Alamat E-mail</span>
                  <p className="c-val">jk.suma88@gmail.com</p>
                  <span className="c-sub">Untuk pengiriman dokumen tender &amp; penawaran</span>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="c-label">Alamat Kantor &amp; Workshop</span>
                  <p className="c-val">JL. Raya Sukabumi Km 21 RT.013 RW.004</p>
                  <span className="c-sub">Cigombong, Kabupaten Bogor, Jawa Barat</span>
                </div>
              </div>

              <div className="c-info-card">
                <div className="c-icon-box">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="c-label">Jam Operasional</span>
                  <p className="c-val">Senin &ndash; Sabtu: 08.00 &ndash; 17.00 WIB</p>
                  <span className="c-sub">Konsultasi WhatsApp aktif setiap hari</span>
                </div>
              </div>
            </div>

            {/* Quick WA CTA button (10% Soft Orange) */}
            <button
              onClick={sendWhatsApp}
              className="btn-accent wa-direct-btn"
            >
              <PhoneCall size={18} />
              <span>Chat Langsung ke WhatsApp</span>
            </button>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            {isSuccess ? (
              <div className="form-success-box">
                <CheckCircle2 size={54} className="success-icon" />
                <h3>Permintaan Terkirim!</h3>
                <p>
                  Terima kasih telah menghubungi CV. Kreasi Cendikia Indonesia.
                  Tim kami akan segera menghubungi nomor Anda dalam waktu 1x24 jam kerja.
                </p>
                <div className="success-actions">
                  <button
                    className="btn-accent"
                    onClick={sendWhatsApp}
                  >
                    <PhoneCall size={16} />
                    <span>Lanjutkan ke WhatsApp</span>
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => setIsSuccess(false)}
                  >
                    Kirim Form Baru
                  </button>
                </div>
              </div>
            ) : (
              <form className="project-form" onSubmit={handleSubmit}>
                <h3 className="form-head">Formulir Survei &amp; Konsultasi</h3>
                <p className="form-note">Isi detail kebutuhan Anda untuk mendapatkan estimasi penawaran terbaik.</p>

                <div className="form-grid-2">
                  <div className="f-group">
                    <label>Nama Lengkap / Instansi</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bpk. John / Damai Putra Group"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="f-group">
                    <label>Nomor WhatsApp Aktif</label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-xxxx-xxxx"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="f-group">
                    <label>Email Perusahaan / Pribadi</label>
                    <input
                      type="email"
                      placeholder="email@perusahaan.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="f-group">
                    <label>Layanan yang Dibutuhkan</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                    >
                      <option>Desain &amp; Konstruksi Taman</option>
                      <option>Pekerjaan Hardscape &amp; Gazebo</option>
                      <option>Vertical Garden &amp; Rental Tanaman</option>
                      <option>Taman Kering &amp; Rumput Sintetis</option>
                      <option>Perawatan Rutin Taman / Maintenance</option>
                      <option>Pengadaan Tanaman Nursery / Hidroponik</option>
                    </select>
                  </div>
                </div>

                <div className="f-group">
                  <label>Lokasi Proyek (Kota / Kawasan)</label>
                  <input
                    type="text"
                    placeholder="Contoh: BSD Serpong / Bogor / Karawaci / Jakarta"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>

                <div className="f-group">
                  <label>Deskripsi Kebutuhan Proyek</label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan perkiraan luas lahan, konsep taman yang diinginkan, atau jadwal survei lokasi..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-accent form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Memproses...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Kirim Pesan &amp; Minta Penawaran</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
