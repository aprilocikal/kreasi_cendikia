import React from "react";
import { Trees } from "lucide-react";
import PortfolioGallery from "../components/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner */}
      <section className="border-b border-[var(--border-warm)] bg-[var(--bg-sage-soft)] py-14 lg:py-18">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-1 text-xs font-semibold text-[var(--ink-secondary)] uppercase">
              <Trees size={14} className="text-[var(--accent-cta)]" />
              <span>Dokumentasi Nyata</span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
              Portofolio &amp; Rekam Jejak Lapangan
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-secondary)]">
              Dokumentasi proyek nyata yang telah diselesaikan untuk korporasi jalan tol (Astra), pengembang kawasan ternama (Damai Putra, Ciputra, Summarecon), perbankan, restoran, serta hunian residensial mewah.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Gallery with Lightbox & Ledger */}
      <PortfolioGallery />
    </div>
  );
}
