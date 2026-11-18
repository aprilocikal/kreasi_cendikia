import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import KciLogo from "./KciLogo";

export function ConversionFooter() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const ctaHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi dan menjadwalkan survei lokasi proyek."
  );

  return (
    <>
      {/* Pre-Footer Conversion Band on Sage Tint */}
      <section className="bg-[var(--bg-canvas)] py-16 lg:py-20 border-t border-[var(--border-warm)]">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-sage)] p-8 sm:p-12 lg:flex-row lg:items-center shadow-xs">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[var(--brand-primary)] uppercase">
                Konsultasi &amp; Survei Lokasi
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)] text-balance">
                Siap Mewujudkan Taman, Hardscape, atau Penghijauan Kawasan Anda?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
                Hubungi tim konsultan dan kontraktor kami langsung melalui WhatsApp untuk
                diskusi kebutuhan ruang, estimasi anggaran, dan jadwal peninjauan lokasi.
              </p>
            </div>

            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-7 py-4 text-base font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 shadow-sm transition-all duration-150 hover:bg-[var(--accent-cta-hover)] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
            >
              <span>Pesan Sekarang</span>
              <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* Quiet Architectural Footer on Clean Canvas */}
      <footer className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-12">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Link to="/" className="inline-block" title="CV. Kreasi Cendekia Indonesia">
                <KciLogo width={58} showText={true} />
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--ink-secondary)]">
                {COMPANY_PROFILE.tagline}. Melayani desain taman, konstruksi lanskap,
                hardscape, vertical garden, perawatan berkala, simulasi 3D, dan penyediaan bibit nursery.
              </p>
            </div>

            <div className="space-y-3 text-sm text-[var(--ink-secondary)] md:col-span-4">
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Kantor &amp; Nursery
              </p>
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                <span>{COMPANY_PROFILE.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--ink-primary)] hover:underline tabular-nums"
                >
                  {COMPANY_PROFILE.phoneDisplay} (WhatsApp / Telepon)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                <a
                  href={`mailto:${COMPANY_PROFILE.email}`}
                  className="font-medium text-[var(--ink-primary)] hover:underline"
                >
                  {COMPANY_PROFILE.email}
                </a>
              </div>
            </div>

            <div className="space-y-2.5 text-sm md:col-span-3">
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Navigasi
              </p>
              <ul className="space-y-2 text-[var(--ink-secondary)]">
                <li>
                  <Link
                    to="/tentang-kami"
                    className="hover:text-[var(--brand-primary)] hover:underline"
                  >
                    Tentang &amp; Visi Misi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/layanan"
                    className="hover:text-[var(--brand-primary)] hover:underline"
                  >
                    Katalog Layanan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portofolio"
                    className="hover:text-[var(--brand-primary)] hover:underline"
                  >
                    Portofolio Proyek
                  </Link>
                </li>
                <li>
                  <Link
                    to="/model-3d"
                    className="hover:text-[var(--brand-primary)] hover:underline"
                  >
                    Simulasi 3D Interaktif
                  </Link>
                </li>
                <li>
                  <Link
                    to="/legalitas"
                    className="hover:text-[var(--brand-primary)] hover:underline"
                  >
                    Legalitas Resmi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kontak"
                    className="hover:text-[var(--brand-primary)] hover:underline"
                  >
                    Kontak &amp; Lokasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border-warm)] pt-6 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_PROFILE.legalName}. Seluruh hak
              cipta dilindungi.
            </p>
            <p className="tabular-nums">
              SK AHU-0004520-AH.01.14 Tahun 2024 · NPWP 99.973.701.8-434.000
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ConversionFooter;
