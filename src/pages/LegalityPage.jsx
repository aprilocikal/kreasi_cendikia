import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { buildWhatsAppUrl } from "../data/kciData";
import LegalityTrustSection from "../components/LegalityTrustSection";

export default function LegalityPage() {
  const whatsappHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin memverifikasi dokumen legalitas dan meminta company profile resmi."
  );

  return (
    <div className="bg-[var(--bg-canvas)] pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Main Legality Section with Expandable Scan Viewers */}
      <LegalityTrustSection />

      {/* Procurement & Administrative Guarantee Section */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-semibold text-[var(--ink-primary)]">
              Kesiapan Administrasi Pengadaan Korporasi &amp; Swasta
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
              Kami siap melengkapi persyaratan vendor management system (VMS), surat penawaran harga (SPH), rencana anggaran biaya (RAB) terperinci, hingga surat perjanjian kerja sama resmi (SPK).
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 shadow-xs">
              <CheckCircle2 className="h-6 w-6 text-[var(--brand-primary)]" />
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--ink-primary)]">
                Faktur Pajak &amp; NPWP Aktif
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                Tercatat pada KPP Pratama Ciawi dengan kewajiban perpajakan yang tertib dan transparan.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 shadow-xs">
              <CheckCircle2 className="h-6 w-6 text-[var(--brand-primary)]" />
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--ink-primary)]">
                Rekening Bank Perusahaan
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                Seluruh transaksi keuangan menggunakan rekening resmi atas nama CV. Kreasi Cendekia Indonesia.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 shadow-xs">
              <CheckCircle2 className="h-6 w-6 text-[var(--brand-primary)]" />
              <h3 className="mt-3 font-display text-lg font-semibold text-[var(--ink-primary)]">
                Company Profile Resmi (PDF)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[var(--ink-secondary)]">
                Dokumen profil lengkap dengan portofolio proyek rest area tol, developer, dan hunian mewah.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-cta-ink)] hover:bg-[var(--accent-cta-hover)] shadow-sm"
            >
              <span>Minta Dokumen Legalitas / Company Profile PDF</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
