import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageSquare,
} from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import PageHeader from "../components/PageHeader";
import KciLogo from "../components/KciLogo";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    serviceType: "Desain & Konstruksi Taman",
    customService: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalService =
      formState.serviceType === "Lainnya" && formState.customService.trim()
        ? formState.customService.trim()
        : formState.serviceType;

    const text = `Halo CV. Kreasi Cendekia Indonesia,\nNama: ${formState.name}\nLayanan: ${finalService}\nLokasi Proyek: ${formState.location}\nKebutuhan: ${formState.message}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner with Photography Background */}
      <PageHeader
        bgImage="/assets/kci/dekorasi_indoor.webp"
        badgeIcon={<MessageSquare size={14} className="text-[#75dc66]" />}
        badgeText="Kontak & Penawaran"
        title="Hubungi Konsultan Kami"
        subtitle="Jadwalkan survei peninjauan lokasi, konsultasikan estimasi anggaran, atau pesan suplai tanaman langsung dari nursery kami di Cigombong, Bogor."
      />

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

                {/* Compact Google Maps Widget */}
                <div className="relative mt-5 overflow-hidden rounded-xl border border-[var(--border-warm)] shadow-2xs">
                  <iframe
                    title="Lokasi Kantor & Kebun Pembibitan CV. Kreasi Cendekia Indonesia"
                    src="https://maps.google.com/maps?q=Cigombong%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="h-44 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href="https://maps.google.com/?q=Cigombong,+Kabupaten+Bogor,+Jawa+Barat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-md border border-stone-200/80 bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-[var(--ink-primary)] shadow-sm backdrop-blur-sm transition-colors hover:bg-stone-50"
                  >
                    <span>Buka di Maps</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--brand-primary)]" />
                  </a>
                </div>

                <div className="mt-6 border-t border-[var(--border-warm)] pt-5">
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
                      placeholder="Nama atau instansi Anda"
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
                      <option value="Lainnya">Lainnya (Tulis Sendiri)</option>
                    </select>

                    {formState.serviceType === "Lainnya" && (
                      <div className="mt-2.5 animate-in fade-in slide-in-from-top-1 duration-200">
                        <input
                          type="text"
                          required
                          placeholder="Tuliskan kebutuhan layanan Anda..."
                          value={formState.customService}
                          onChange={(e) => setFormState({ ...formState, customService: e.target.value })}
                          className="w-full rounded-lg border border-[var(--brand-primary)] bg-[var(--bg-canvas)] px-4 py-2.5 text-sm text-[var(--ink-primary)] focus:border-[var(--accent-cta)] focus:outline-none focus:ring-1 focus:ring-[var(--brand-primary)]"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                      Lokasi / Wilayah Proyek
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kota atau wilayah proyek"
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
                      placeholder="Perkiraan luas atau konsep taman yang diinginkan..."
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

              {/* Service Guarantees Card - Balances the Legal Badge on the Left */}
              <div className="mt-6 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] p-6">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-primary)]" />
                  <span className="font-display text-sm font-bold text-[var(--ink-primary)]">
                    Jaminan Mutu &amp; Komitmen Layanan
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[var(--ink-secondary)]">
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] font-bold text-sm">✓</span>
                    <span><strong>Garansi Tanaman:</strong> Jaminan hidup selama masa adaptasi awal proyek.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] font-bold text-sm">✓</span>
                    <span><strong>RAB Transparan:</strong> Rincian spesifikasi terukur tanpa biaya tersembunyi.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[var(--brand-primary)] font-bold text-sm">✓</span>
                    <span><strong>Survei Cepat:</strong> Peninjauan lokasi fleksibel oleh tim arsitek lanskap.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
