import React, { useState, useEffect } from "react";
import { ShieldCheck, Expand, X } from "lucide-react";
import { LEGALITY_DATA } from "../data/kciData";
import { useData } from "../context/DataContext";
import { ResilientImage } from "./ResilientImage";

export function LegalityTrustSection() {
  const { legality } = useData();
  const ahu = legality?.ahu || ahu;
  const npwp = legality?.npwp || npwp;
  const [previewDoc, setPreviewDoc] = useState(null);

  useEffect(() => {
    if (!previewDoc) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setPreviewDoc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewDoc]);

  return (
    <section
      id="legalitas"
      className="bg-transparent"
    >
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--ink-secondary)] uppercase">
            <ShieldCheck className="h-4 w-4 text-[var(--ink-primary)]" strokeWidth={2} />
            <span>Kredibilitas &amp; Legalitas Badan Usaha</span>
          </div>
          <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)] text-balance">
            Terdaftar Resmi dan Siap Mendukung Pengadaan Korporasi maupun Swasta.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
            Seluruh dokumen pendirian badan usaha dan perpajakan CV. Kreasi Cendekia
            Indonesia tercatat secara sah untuk menjamin keamanan administrasi kerja sama.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: SK Kemenkumham AHU */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 sm:p-7 shadow-xs">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 sm:gap-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--ink-muted)]">
                    Kementerian Hukum &amp; HAM RI
                  </p>
                  <h3 className="mt-1 font-display text-base sm:text-lg lg:text-xl font-semibold leading-snug text-[var(--ink-primary)]">
                    {ahu.title}
                  </h3>
                </div>
                <span className="self-start sm:self-auto text-[11px] sm:text-xs font-bold text-[var(--ink-secondary)] tabular-nums whitespace-nowrap bg-[var(--bg-sage)] px-2.5 py-1 rounded-md shrink-0">
                  Terbit {ahu.issuedDate}
                </span>
              </div>

              <dl className="mt-5 divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)] text-sm">
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Nomor SK AHU</dt>
                  <dd className="font-semibold text-[var(--ink-primary)] tabular-nums">
                    {ahu.number}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Akta Pendirian</dt>
                  <dd className="font-medium text-[var(--ink-primary)] tabular-nums">
                    {ahu.deedInfo}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Notaris</dt>
                  <dd className="font-medium text-[var(--ink-primary)]">
                    {ahu.notary}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Kedudukan</dt>
                  <dd className="font-medium text-[var(--ink-primary)]">
                    {ahu.domicile}
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={() =>
                setPreviewDoc({
                  title: ahu.title,
                  subtitle: ahu.number,
                  image: ahu.image,
                })
              }
              className="group mt-6 flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-3 text-left transition-colors hover:bg-[var(--bg-sage-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="h-14 w-16 shrink-0 overflow-hidden rounded-lg border border-[var(--border-warm)] bg-white">
                  <ResilientImage
                    src={ahu.image}
                    alt="Pratinjau Surat Keterangan Terdaftar Kemenkumham RI"
                    className="h-full w-full object-cover object-top"
                    containerClassName="h-full w-full"
                    fallbackTitle="SK AHU"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink-primary)]">
                    Lihat Salinan SK AHU Resmi
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Klik untuk memperbesar dokumen verifikasi
                  </p>
                </div>
              </div>
              <Expand className="h-4 w-4 shrink-0 text-[var(--ink-muted)] transition-transform group-hover:scale-110" />
            </button>
          </div>

          {/* Card 2: NPWP Perusahaan */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 sm:p-7 shadow-xs">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2.5 sm:gap-4">
                <div>
                  <p className="text-xs font-semibold text-[var(--ink-muted)]">
                    Direktorat Jenderal Pajak RI
                  </p>
                  <h3 className="mt-1 font-display text-base sm:text-lg lg:text-xl font-semibold leading-snug text-[var(--ink-primary)]">
                    {npwp.title}
                  </h3>
                </div>
                <span className="self-start sm:self-auto text-[11px] sm:text-xs font-bold text-[var(--ink-secondary)] tabular-nums whitespace-nowrap bg-[var(--bg-sage)] px-2.5 py-1 rounded-md shrink-0">
                  Terdaftar {npwp.registeredDate}
                </span>
              </div>

              <dl className="mt-5 divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)] text-sm">
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Nomor NPWP</dt>
                  <dd className="font-semibold text-[var(--ink-primary)] tabular-nums">
                    {npwp.number}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">NPWP 16 Digit</dt>
                  <dd className="font-medium text-[var(--ink-primary)] tabular-nums">
                    {npwp.npwp16}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Kantor Pajak</dt>
                  <dd className="font-medium text-[var(--ink-primary)]">
                    {npwp.taxOffice}
                  </dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 py-3">
                  <dt className="text-[var(--ink-muted)]">Alamat Terdaftar</dt>
                  <dd className="font-medium text-[var(--ink-primary)] sm:text-right">
                    {npwp.address}
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={() =>
                setPreviewDoc({
                  title: npwp.title,
                  subtitle: npwp.number,
                  image: npwp.image,
                })
              }
              className="group mt-6 flex w-full items-center justify-between gap-4 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] p-3 text-left transition-colors hover:bg-[var(--bg-sage-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
            >
              <div className="flex items-center gap-3.5">
                <div className="h-14 w-16 shrink-0 overflow-hidden rounded-lg border border-[var(--border-warm)] bg-white">
                  <ResilientImage
                    src={npwp.image}
                    alt="Pratinjau Kartu NPWP CV. Kreasi Cendekia Indonesia"
                    className="h-full w-full object-cover"
                    containerClassName="h-full w-full"
                    fallbackTitle="NPWP"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink-primary)]">
                    Lihat Kartu NPWP Badan Resmi
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    Klik untuk memperbesar dokumen perpajakan
                  </p>
                </div>
              </div>
              <Expand className="h-4 w-4 shrink-0 text-[var(--ink-muted)] transition-transform group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>

      {/* Document Lightbox Modal */}
      {previewDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={previewDoc.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setPreviewDoc(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[var(--bg-elevated)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-warm)] px-6 py-4">
              <div>
                <h4 className="font-display text-lg font-semibold text-[var(--ink-primary)]">
                  {previewDoc.title}
                </h4>
                <p className="text-xs text-[var(--ink-muted)] tabular-nums">
                  {previewDoc.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewDoc(null)}
                aria-label="Tutup dokumen"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-warm)] text-[var(--ink-primary)] hover:bg-[var(--bg-sage-soft)]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto bg-[var(--bg-canvas)] p-4 sm:p-6">
              <ResilientImage
                src={previewDoc.image}
                alt={previewDoc.title}
                className="mx-auto max-h-[65vh] w-auto rounded-lg border border-[var(--border-warm)] object-contain"
                containerClassName="h-72 w-full"
                fallbackTitle={previewDoc.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default LegalityTrustSection;
