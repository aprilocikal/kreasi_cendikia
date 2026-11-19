import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  FileCheck2,
  Layers,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";
import Hero from "../components/Hero";
import ResilientImage from "../components/ResilientImage";
import { COMPANY_PROFILE, SERVICES, GALLERY_ITEMS, buildWhatsAppUrl } from "../data/kciData";

export default function Home() {
  const featuredServices = SERVICES.slice(0, 3);
  const featuredProjects = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="home-portal-container bg-[var(--bg-canvas)]">
      {/* 1. Hero Section: Full Background Photo, Compact Poppins Typography like Setinggi Langit */}
      <Hero />

      {/* 2. Cuplikan Profil & Integritas Kerja -> Menuju /tentang-kami */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] px-3.5 py-1 text-xs font-semibold text-[var(--brand-primary)] uppercase">
                <Compass size={14} />
                <span>Profil &amp; Filosofi Kerja</span>
              </div>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
                Integritas dalam Setiap Desain dan Konstruksi Lanskap.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--ink-secondary)]">
                Berpusat di Cigombong, Kabupaten Bogor, {COMPANY_PROFILE.legalName} berdedikasi menciptakan ruang luar yang estetis, terencana secara teknik sipil lanskap, dan berdaya tahan tinggi dengan dukungan kebun nursery mandiri.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-4 shadow-xs">
                  <h4 className="font-display text-sm font-semibold text-[var(--ink-primary)]">
                    Visi Terpercaya
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--ink-secondary)]">
                    Reputasi dan keunggulan yang dapat dipertanggungjawabkan serta transparan.
                  </p>
                </div>
                <div className="rounded-xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-4 shadow-xs">
                  <h4 className="font-display text-sm font-semibold text-[var(--ink-primary)]">
                    Nursery Cigombong
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--ink-secondary)]">
                    Kemandirian stok bibit pohon peneduh &amp; semak tropis langsung dari kebun sendiri.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/tentang-kami"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-elevated)] px-5 py-3 text-sm font-semibold text-[var(--ink-primary)] hover:bg-[var(--bg-sage-soft)] transition-colors"
                >
                  <span>Pelajari Profil Perusahaan &amp; 8 Core Values</span>
                  <ArrowRight className="h-4 w-4 text-[var(--brand-primary)]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-warm)] shadow-sm">
                <div className="aspect-[4/3] w-full bg-[var(--bg-sage-soft)]">
                  <ResilientImage
                    src="/assets/kci/nursery_cigombong.jpg"
                    alt="Lahan Pembibitan Nursery Cigombong CV. Kreasi Cendekia Indonesia"
                    className="h-full w-full object-cover"
                    containerClassName="h-full w-full"
                    fallbackTitle="Nursery Cigombong"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                  <p className="text-xs font-medium text-white/80">Nursery Mandiri</p>
                  <p className="font-display text-base font-semibold">Cigombong, Kabupaten Bogor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sorotan 3 Layanan Utama -> Menuju /layanan */}
      <section className="border-t border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] uppercase">
                <Layers size={14} />
                <span>Katalog Solusi</span>
              </div>
              <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
                Layanan Lanskap Terpadu
              </h2>
            </div>
            <Link
              to="/layanan"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
            >
              <span>Lihat Semua 6 Layanan &amp; Alur Kerja</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[var(--bg-sage)]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      containerClassName="h-full w-full"
                      fallbackTitle={service.title}
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-bold text-xs text-[var(--brand-primary)] tabular-nums">
                      LAYANAN {service.number}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-[var(--ink-primary)]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)]/60 px-6 py-3.5">
                  <Link
                    to="/layanan"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ink-primary)] hover:text-[var(--brand-primary)]"
                  >
                    <span>Detail Layanan &amp; Cakupan</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sorotan Portofolio Nyata -> Menuju /portofolio */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] uppercase">
                <Trees size={14} />
                <span>Rekam Jejak Nyata</span>
              </div>
              <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
                Portofolio Proyek Terlaksana
              </h2>
            </div>
            <Link
              to="/portofolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-primary)] hover:underline"
            >
              <span>Buka Portofolio Lengkap &amp; Ledger Proyek</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to="/portofolio"
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--bg-sage-soft)]">
                  <ResilientImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    containerClassName="h-full w-full"
                    fallbackTitle={project.title}
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 text-white">
                  <p className="text-[11px] font-medium text-white/80">{project.projectContext}</p>
                  <h3 className="mt-0.5 font-display text-sm font-semibold">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dual Card: Legalitas (Kiri) & Konsultasi/CTA (Kanan) -> Kompak & Kiri-Kanan */}
      <section className="border-t border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] py-14 lg:py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-stretch">
            {/* Kotak Kiri: Legalitas Hukum Resmi */}
            <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-7 sm:p-8 shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] uppercase">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Kredibilitas Hukum Resmi</span>
                </div>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold leading-snug text-[var(--ink-primary)]">
                  Terdaftar Resmi Kemenkumham RI &amp; Ber-NPWP Aktif
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)]">
                  SK Kemenkumham: <strong>AHU-0004520-AH.01.14 Tahun 2024</strong> · NPWP Badan: <strong>99.973.701.8-434.000</strong>. Siap mendukung proses lelang &amp; administrasi pengadaan korporasi.
                </p>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  to="/legalitas"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--brand-primary)] bg-[var(--brand-tint)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white transition-all shadow-xs"
                >
                  <FileCheck2 className="h-4 w-4" />
                  <span>Lihat Dokumen Legalitas</span>
                </Link>
              </div>
            </div>

            {/* Kotak Kanan: Konsultasi & Survei Lokasi */}
            <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-sage)] p-7 sm:p-8 shadow-xs">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[var(--brand-primary)] uppercase">
                  Konsultasi &amp; Survei Lokasi
                </p>
                <h3 className="mt-3 font-display text-xl sm:text-2xl font-semibold leading-snug text-[var(--ink-primary)]">
                  Siap Mewujudkan Taman &amp; Lanskap Impian Anda?
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)]">
                  Hubungi tim konsultan kami via WhatsApp untuk diskusi kebutuhan ruang, estimasi anggaran (RAB), dan peninjauan survei lokasi.
                </p>
              </div>

              <div className="mt-6 pt-2">
                <a
                  href={buildWhatsAppUrl(
                    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi dan menjadwalkan survei lokasi proyek."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:bg-[var(--accent-cta-hover)] hover:shadow"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
