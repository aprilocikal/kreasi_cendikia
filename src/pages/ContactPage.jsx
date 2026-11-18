import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Send,
  MessageSquare,
} from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import KciLogo from "../components/KciLogo";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    serviceType: "Desain & Konstruksi Taman",
    location: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo CV. Kreasi Cendekia Indonesia,\nNama: ${formState.name}\nLayanan: ${formState.serviceType}\nLokasi Proyek: ${formState.location}\nKebutuhan: ${formState.message}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner */}
      <section className="border-b border-[var(--border-warm)] bg-[var(--bg-sage-soft)] py-14 lg:py-18">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-1 text-xs font-semibold text-[var(--ink-secondary)] uppercase">
              <MessageSquare size={14} className="text-[var(--accent-cta)]" />
              <span>Kontak &amp; Penawaran</span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
              Hubungi Konsultan Kami
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-secondary)]">
              Jadwalkan survei peninjauan lokasi, konsultasikan estimasi anggaran, atau pesan suplai tanaman langsung dari nursery kami di Cigombong, Bogor.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Direct Info Cards */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-7 shadow-xs">
                <KciLogo width={48} className="mb-4" />
                <h3 className="font-display text-xl font-semibold text-[var(--ink-primary)]">
                  Kantor &amp; Kebun Pembibitan
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                  Pusat operasional dan lahan pembibitan tanaman CV. Kreasi Cendekia Indonesia.
                </p>

                <div className="mt-6 space-y-4 text-sm text-[var(--ink-secondary)]">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-cta)]" />
                    <div>
                      <strong className="text-[var(--ink-primary)]">Alamat Lengkap:</strong>
                      <p className="mt-0.5">{COMPANY_PROFILE.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-cta)]" />
                    <div>
                      <strong className="text-[var(--ink-primary)]">Telepon / WhatsApp:</strong>
                      <p className="mt-0.5">
                        <a
                          href={buildWhatsAppUrl("Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi mengenai proyek lanskap.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[var(--ink-primary)] hover:underline tabular-nums"
                        >
                          {COMPANY_PROFILE.phoneDisplay}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-cta)]" />
                    <div>
                      <strong className="text-[var(--ink-primary)]">Email Korespondensi:</strong>
                      <p className="mt-0.5">
                        <a
                          href={`mailto:${COMPANY_PROFILE.email}`}
                          className="text-[var(--ink-primary)] hover:underline"
                        >
                          {COMPANY_PROFILE.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-cta)]" />
                    <div>
                      <strong className="text-[var(--ink-primary)]">Jam Operasional:</strong>
                      <p className="mt-0.5">Senin – Sabtu: 08:00 – 17:00 WIB</p>
                      <p className="text-xs text-[var(--ink-muted)]">Survei lokasi dapat dijadwalkan sesuai kesepakatan.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--border-warm)] pt-6">
                  <a
                    href={buildWhatsAppUrl("Halo CV. Kreasi Cendekia Indonesia, saya ingin memesan jadwal survei.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent-cta)] px-5 py-3 text-sm font-semibold text-[var(--accent-cta-ink)] hover:bg-[var(--accent-cta-hover)] shadow-sm"
                  >
                    <span>Hubungi via WhatsApp Cepat</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Legal Badge Card */}
              <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] p-6">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-[var(--accent-cta)]" />
                  <span className="font-display text-sm font-bold text-[var(--ink-primary)]">
                    Legalitas Badan Usaha Terverifikasi
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                  SK Kemenkumham RI: <strong>AHU-0004520-AH.01.14 Tahun 2024</strong>
                  <br />
                  NPWP Badan: <strong>99.973.701.8-434.000</strong>
                </p>
              </div>
            </div>

            {/* Right Column: Direct WhatsApp Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-7 sm:p-9 shadow-xs">
                <h3 className="font-display text-2xl font-semibold text-[var(--ink-primary)]">
                  Formulir Konsultasi &amp; Estimasi Proyek
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-secondary)]">
                  Isi rincian rencana proyek Anda di bawah ini untuk langsung terhubung ke konsultan teknis kami di WhatsApp.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                      Nama Lengkap / Instansi
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bpk. Hendra / Damai Putra Group"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-3 text-sm text-[var(--ink-primary)] focus:border-[var(--accent-cta)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                      Kategori Layanan yang Dibutuhkan
                    </label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-3 text-sm text-[var(--ink-primary)] focus:border-[var(--accent-cta)] focus:outline-none"
                    >
                      <option>Desain &amp; Konstruksi Taman</option>
                      <option>Hardscape &amp; Kolam Buatan (Pond)</option>
                      <option>Vertical Garden &amp; Rental Tanaman Indoor</option>
                      <option>Taman Kering &amp; Rumput Sintetis</option>
                      <option>Perawatan Berkala &amp; Spesialis Bonsai</option>
                      <option>Suplai Bibit Nursery / Hidroponik / Aviary</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                      Lokasi / Wilayah Proyek
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: BSD Serpong / Karawaci / Sentul / Bekasi"
                      value={formState.location}
                      onChange={(e) => setFormState({ ...formState, location: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-3 text-sm text-[var(--ink-primary)] focus:border-[var(--accent-cta)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                      Deskripsi Kebutuhan &amp; Catatan Tambahan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Jelaskan perkiraan luas area, konsep taman yang diinginkan, atau rencana waktu pengerjaan..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-4 py-3 text-sm text-[var(--ink-primary)] focus:border-[var(--accent-cta)] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent-cta)] px-6 py-3.5 text-base font-semibold text-[var(--accent-cta-ink)] hover:bg-[var(--accent-cta-hover)] shadow-sm transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim &amp; Hubungkan ke WhatsApp Konsultan</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
