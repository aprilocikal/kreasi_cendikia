import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Box } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import { ResilientImage } from "./ResilientImage";
import KciLogo from "./KciLogo";

export function HeroSection() {
  const heroWhatsAppHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin menjadwalkan konsultasi dan survei proyek taman / lanskap."
  );

  return (
    <section id="beranda" className="bg-[var(--bg-canvas)] pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Two-column equal-height hero split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Typographic hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-hairline)] bg-[var(--brand-tint-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--ink-secondary)]">
                <KciLogo width={26} />
                <span>{COMPANY_PROFILE.legalName}</span>
                <span aria-hidden="true" className="text-[var(--brand-primary)]">·</span>
                <span>Cigombong, Kab. Bogor</span>
              </div>

              <h1 className="mt-5 font-display text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.14] tracking-tight text-[var(--ink-primary)] text-balance">
                Merancang Ruang Hijau yang Terukur, Asri, dan Berkelanjutan.
              </h1>

              <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-[var(--ink-secondary)]">
                Konsultan dan kontraktor lanskap profesional untuk desain taman hunian,
                kawasan perumahan pengembang, infrastruktur rest area jalan tol, hardscape, vertical garden,
                serta perawatan taman dan penyediaan bibit dari nursery mandiri di Bogor.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
              <a
                href={heroWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 shadow-sm transition-all duration-150 hover:bg-[var(--accent-cta-hover)] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>

              <Link
                to="/portofolio"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-elevated)] px-5 py-3.5 text-sm font-medium text-[var(--ink-primary)] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--bg-sage-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="h-4 w-4 text-[var(--ink-muted)]" />
              </Link>

              <Link
                to="/model-3d"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-sage-deep)] px-4 py-3.5 text-sm font-semibold text-[var(--ink-primary)] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--bg-sage)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
              >
                <Box className="h-4 w-4" />
                <span>Simulasi 3D</span>
              </Link>
            </div>
          </div>

          {/* Right column: Dominant 16:9 real photography */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-sage-soft)] shadow-sm lg:min-h-[440px]">
              <ResilientImage
                src="/assets/kci/hero_karawaci.jpg"
                alt="Konstruksi dan perawatan taman tepi danau di Taman Golf Karawaci oleh CV. Kreasi Cendekia Indonesia"
                className="h-full w-full object-cover"
                containerClassName="h-full min-h-[320px] w-full"
                fallbackTitle="Taman Golf Karawaci — Lanskap & Kolam"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-6 text-white">
                <div>
                  <p className="text-xs font-medium tracking-wide text-white/80">
                    Dokumentasi Proyek Unggulan
                  </p>
                  <p className="mt-0.5 font-display text-xl font-medium">
                    Taman Golf Karawaci
                  </p>
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm text-white font-medium">
                  Konstruksi &amp; Perawatan 2021–Sekarang
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
