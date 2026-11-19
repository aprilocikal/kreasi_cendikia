import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, X } from "lucide-react";
import { SERVICES, buildWhatsAppUrl } from "../data/kciData";
import { ResilientImage } from "./ResilientImage";

export function ServicesCatalog() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (!selectedService) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <section
      id="layanan"
      className="bg-[var(--bg-canvas)] py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[var(--ink-secondary)] uppercase">
              Katalog Layanan Terpadu
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)] text-balance">
              Dari Konsep Desain hingga Perawatan Berkala dan Suplai Nursery.
            </h2>
          </div>

          <a
            href={buildWhatsAppUrl(
              "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi mengenai kebutuhan layanan taman / hardscape."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-lg bg-[var(--accent-cta)] px-5 py-3 text-sm font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 shadow-sm transition-all duration-150 hover:bg-[var(--accent-cta-hover)] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)] lg:self-auto"
          >
            <span>Pesan Sekarang</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        {/* Asymmetric Bento Grid: 2-column on mobile, responsive on desktop */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service) => {
            const isFeatured = Boolean(service.featured);
            return (
              <article
                key={service.id}
                className={`group flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isFeatured ? "lg:col-span-3" : "lg:col-span-3 xl:col-span-3"
                }`}
              >
                <div>
                  <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border-b border-[var(--border-hairline)] bg-[var(--bg-sage-soft)]">
                    <ResilientImage
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      containerClassName="h-full w-full"
                      fallbackTitle={service.title}
                    />
                  </div>

                  <div className="p-3 sm:p-7">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium text-[var(--ink-muted)]">
                      <span className="font-bold text-[var(--accent-cta)] tabular-nums">
                        {service.number}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="line-clamp-1">{service.subtitle}</span>
                    </div>

                    <h3 className="mt-1 sm:mt-2 font-display text-xs sm:text-2xl font-semibold tracking-tight text-[var(--ink-primary)] line-clamp-2">
                      {service.title}
                    </h3>

                    <ul className="hidden sm:block mt-5 space-y-2 border-t border-[var(--border-warm)] pt-4">
                      {service.scope.slice(0, 4).map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-[var(--ink-primary)]"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-cta)]"
                            strokeWidth={2.2}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                      {service.scope.length > 4 && (
                        <li className="text-xs font-medium text-[var(--ink-muted)] pl-6">
                          +{service.scope.length - 4} cakupan pekerjaan lainnya
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-warm)] bg-[var(--bg-canvas)]/60 px-3 py-2.5 sm:px-7 sm:py-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-[11px] sm:text-sm font-semibold text-[var(--ink-primary)] underline-offset-4 hover:underline whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)]"
                  >
                    Detail Cakupan
                  </button>

                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md sm:rounded-lg bg-[var(--accent-cta)] px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--accent-cta-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
                  >
                    <span>Pesan</span>
                    <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-elevated)] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Tutup jendela rincian layanan"
              className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-warm)] text-[var(--ink-primary)] transition-colors hover:bg-[var(--bg-sage-soft)]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent-cta)]">
              <span>LAYANAN {selectedService.number}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--ink-muted)]">{selectedService.subtitle}</span>
            </div>

            <h3
              id="service-modal-title"
              className="mt-2 font-display text-2xl font-semibold tracking-tight text-[var(--ink-primary)]"
            >
              {selectedService.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
              {selectedService.summary}
            </p>

            <div className="mt-6 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-sage-soft)] p-4">
              <p className="text-xs font-semibold text-[var(--ink-muted)] uppercase">
                Rekomendasi Penerapan
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--ink-primary)]">
                {selectedService.idealFor}
              </p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Daftar Ruang Lingkup Pekerjaan
              </p>
              <ul className="mt-3 divide-y divide-[var(--border-warm)] border-y border-[var(--border-warm)]">
                {selectedService.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 py-3 text-sm text-[var(--ink-primary)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-cta)]" strokeWidth={2.2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[var(--border-warm)]">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded-lg border border-[var(--border-hairline)] px-5 py-2.5 text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--bg-sage-soft)]"
              >
                Tutup
              </button>
              <a
                href={buildWhatsAppUrl(selectedService.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-5 py-2.5 text-sm font-semibold text-[var(--accent-cta-ink)] hover:bg-[var(--accent-cta-hover)] shadow-sm"
              >
                <span>Konsultasikan Layanan Ini</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesCatalog;
