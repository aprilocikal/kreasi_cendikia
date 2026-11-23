import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  FileCheck2,
  Layers,
  Quote,
  ShieldCheck,
  Sparkles,
  Trees,
} from "lucide-react";
import Hero from "../components/Hero";
import ResilientImage from "../components/ResilientImage";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import { useData } from "../context/DataContext";

export default function Home() {
  const { services, portfolio } = useData();
  const featuredServices = (services || []).slice(0, 4);
  const featuredProjects = (portfolio || []).slice(0, 4);

  return (
    <div className="home-portal-container bg-[var(--bg-canvas)]">
      {/* 1. Hero Section: Full Background Photo, Compact Poppins Typography like Setinggi Langit */}
      <Hero />

      {/* 2. Filosofi & Realita Lanskap -> Gaya Simpel & Tipografi Elegan seperti Setinggi Langit */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[860px] px-5 sm:px-6">
          {/* Eyebrow Tag */}
          <p className="text-[11px] sm:text-xs font-bold tracking-widest text-[var(--brand-primary)] uppercase">
            FILOSOFI &amp; DEDIKASI KAMI
          </p>

          {/* Bold Headline like Setinggi Langit */}
          <h2 className="mt-3 sm:mt-4 font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-bold leading-[1.22] tracking-tight text-[var(--ink-primary)]">
            Tidak semua ruang luar dirancang untuk bertahan lama
          </h2>
          {/* Accent Line Under Headline */}
          <div className="mt-2.5 sm:mt-3 h-1 w-16 sm:w-20 rounded-full bg-[var(--brand-primary)]" />

          {/* Clean Concise Paragraph */}
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-[15px] leading-relaxed text-[var(--ink-secondary)]">
            Banyak taman cepat rusak akibat minimnya perhitungan drainase dan vegetasi yang tidak adaptif. Kreasi Cendekia memadukan arsitektur tropis presisi dan pembibitan mandiri di Bogor untuk ruang hijau yang tumbuh sehat, asri, dan tahan lama.
          </p>

          {/* Quote Card like Setinggi Langit */}
          <div className="relative mt-8 sm:mt-10 rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-5 sm:p-7 shadow-xs">
            {/* Quote Badge on Top Left */}
            <div className="absolute -top-3.5 left-5 sm:left-7 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[var(--brand-primary)] text-white shadow-md">
              <Quote className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-white" />
            </div>

            <blockquote className="mt-1 text-xs sm:text-base italic leading-relaxed text-[var(--ink-primary)] font-serif">
              &ldquo;Lebih dari sekadar menanam, kami merancang ekosistem lanskap yang bernapas dan bertahan lintas waktu.&rdquo;
            </blockquote>

            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 border-t border-[var(--border-warm)] pt-3.5">
              <div>
                <p className="font-display text-xs sm:text-sm font-semibold text-[var(--ink-primary)]">
                  CV. Kreasi Cendekia Indonesia
                </p>
                <p className="text-[11px] sm:text-xs text-[var(--ink-muted)]">
                  Konsultan &amp; Kontraktor Lanskap Profesional · Cigombong, Bogor
                </p>
              </div>

              <Link
                to="/tentang-kami"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--brand-primary)] hover:underline"
              >
                <span>Profil Selengkapnya</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sorotan 3 Layanan Utama -> Menuju /layanan */}
      <section className="border-t border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] py-14 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] uppercase">
                <Layers size={14} />
                <span>Katalog Solusi</span>
              </div>
              <h2 className="mt-1 sm:mt-2 font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
                Layanan Lanskap Terpadu
              </h2>
            </div>
            <Link
              to="/layanan"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--brand-primary)] hover:underline"
            >
              <span>Lihat Semua 6 Layanan</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[var(--bg-sage)]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      containerClassName="h-full w-full"
                      fallbackTitle={service.title}
                    />
                  </div>
                  <div className="p-3 sm:p-5">
                    <span className="font-bold text-[10px] sm:text-xs text-[var(--brand-primary)] tabular-nums">
                      LAYANAN {service.number}
                    </span>
                    <h3 className="mt-0.5 sm:mt-1 font-display text-xs sm:text-base font-semibold text-[var(--ink-primary)] line-clamp-2">
                      {service.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs leading-relaxed text-[var(--ink-secondary)] line-clamp-2 sm:line-clamp-none">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)]/60 px-3 sm:px-6 py-2 sm:py-3.5">
                  <Link
                    to="/layanan"
                    className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-[var(--ink-primary)] hover:text-[var(--brand-primary)]"
                  >
                    <span>Detail Layanan</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sorotan Portofolio Nyata -> Menuju /portofolio */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-14 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--brand-primary)] uppercase">
                <Trees size={14} />
                <span>Rekam Jejak Nyata</span>
              </div>
              <h2 className="mt-1 sm:mt-2 font-display text-[clamp(1.35rem,2.2vw,1.85rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
                Portofolio Proyek Terlaksana
              </h2>
            </div>
            <Link
              to="/portofolio"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--brand-primary)] hover:underline"
            >
              <span>Buka Portofolio Lengkap</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to="/portofolio"
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-2.5 sm:p-4 text-white">
                  <p className="text-[10px] sm:text-[11px] font-medium text-white/80 line-clamp-1">{project.projectContext}</p>
                  <h3 className="mt-0.5 font-display text-xs sm:text-sm font-semibold line-clamp-1">{project.title}</h3>
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
                <h3 className="mt-2.5 font-display text-base sm:text-lg font-semibold leading-snug text-[var(--ink-primary)]">
                  Terdaftar Resmi Kemenkumham RI &amp; Ber-NPWP Aktif
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[var(--ink-secondary)]">
                  SK Kemenkumham: <strong>AHU-0004520-AH.01.14 Tahun 2024</strong> · NPWP Badan: <strong>99.973.701.8-434.000</strong>. Siap mendukung proses lelang &amp; administrasi pengadaan korporasi.
                </p>
              </div>

              <div className="mt-5 pt-1">
                <Link
                  to="/legalitas"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--brand-primary)] bg-[var(--brand-tint)] px-4 py-2 text-xs font-semibold text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white transition-all shadow-xs"
                >
                  <FileCheck2 className="h-4 w-4" />
                  <span>Lihat Dokumen Legalitas</span>
                </Link>
              </div>
            </div>

            {/* Kotak Kanan: Konsultasi & Survei Lokasi */}
            <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-sage)] p-6 sm:p-7 shadow-xs">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[var(--brand-primary)] uppercase">
                  Konsultasi &amp; Survei Lokasi
                </p>
                <h3 className="mt-2.5 font-display text-base sm:text-lg font-semibold leading-snug text-[var(--ink-primary)]">
                  Siap Mewujudkan Taman &amp; Lanskap Impian Anda?
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[var(--ink-secondary)]">
                  Hubungi tim konsultan kami via WhatsApp untuk diskusi kebutuhan ruang, estimasi anggaran (RAB), dan peninjauan survei lokasi.
                </p>
              </div>

              <div className="mt-5 pt-1">
                <a
                  href={buildWhatsAppUrl(
                    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi dan menjadwalkan survei lokasi proyek."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[var(--accent-cta-hover)] hover:shadow"
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
