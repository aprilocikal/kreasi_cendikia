import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_PROFILE } from "../data/kciData";

export function AboutVisionSection({ showFullLink = false }) {
  return (
    <section id="tentang" className="bg-[var(--bg-canvas)] py-10 lg:py-16">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
              Profil &amp; Komitmen
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)] text-balance">
              Integritas dalam Setiap Desain dan Konstruksi Lanskap.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
              Berbasis di Cigombong, Kabupaten Bogor, {COMPANY_PROFILE.legalName} melayani
              perencanaan, pembangunan, serta perawatan ruang hijau untuk hunian pribadi,
              kawasan perumahan pengembang ternama, hingga fasilitas komersial dan jalan tol.
            </p>

            <div className="mt-6 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-5">
              <h4 className="font-display text-sm font-semibold text-[var(--ink-primary)]">
                Keunggulan Nursery Mandiri
              </h4>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-secondary)]">
                Lahan pembibitan mandiri di Cigombong menjamin kontinuitas suplai tanaman hias, semak tropis, hingga pohon pelindung berukuran besar dengan mutu yang terkontrol langsung tanpa perantara.
              </p>
            </div>

            {showFullLink && (
              <div className="mt-6">
                <Link
                  to="/tentang-kami"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink-primary)] underline decoration-[var(--accent-cta)] underline-offset-4 hover:text-[var(--accent-cta)]"
                >
                  <span>Baca Selengkapnya Tentang Kami</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          {/* Visi & Misi editorial column */}
          <div className="space-y-8 lg:col-span-7">
            <div className="rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] p-7 shadow-xs">
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Visi Perusahaan
              </p>
              <blockquote className="mt-3 font-display text-lg font-medium leading-relaxed text-[var(--ink-primary)] sm:text-xl">
                &ldquo;{COMPANY_PROFILE.vision}&rdquo;
              </blockquote>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Misi Kami
              </p>
              <ol className="mt-4 divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)]">
                {COMPANY_PROFILE.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-4 py-3.5">
                    <span className="mt-0.5 font-sans text-xs font-bold text-[var(--accent-cta)] tabular-nums">
                      0{idx + 1}.
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--ink-secondary)]">
                      {mission}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Core Values 8-item architectural grid */}
        <div className="mt-16 pt-12 border-t border-[var(--border-warm)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Nilai Inti Kerja
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-[var(--ink-primary)]">
                Delapan Prinsip Core Value
              </h3>
            </div>
            <p className="text-xs text-[var(--ink-muted)]">
              Standar operasional tim desain, arsitek lapangan, dan perawatan berkala kami.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border-warm)] bg-[var(--border-warm)] sm:grid-cols-2 lg:grid-cols-4 shadow-xs">
            {COMPANY_PROFILE.coreValues.map((value) => (
              <div
                key={value.index}
                className="bg-[var(--bg-elevated)] p-3.5 sm:p-6 transition-colors duration-150 hover:bg-[var(--bg-sage-soft)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-[var(--brand-primary)] tabular-nums">
                    {value.index}
                  </span>
                  <h4 className="mt-1 sm:mt-2 font-display text-xs sm:text-lg font-semibold text-[var(--ink-primary)]">
                    {value.title}
                  </h4>
                  <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-sm leading-relaxed text-[var(--ink-secondary)]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVisionSection;
