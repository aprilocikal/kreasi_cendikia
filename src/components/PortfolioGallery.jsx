import React, { useState, useEffect, useMemo } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import {
  GALLERY_ITEMS,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS,
  buildWhatsAppUrl,
} from "../data/kciData";
import { ResilientImage } from "./ResilientImage";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "Semua") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Semua") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const activeLightboxItem =
    lightboxIndex !== null && filteredGallery[lightboxIndex]
      ? filteredGallery[lightboxIndex]
      : null;

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredGallery.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredGallery.length) % filteredGallery.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredGallery.length]);

  return (
    <section id="portofolio" className="bg-[var(--bg-canvas)] py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6">
        {/* Header & Interactive Filter Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
              Portofolio &amp; Dokumentasi Lapangan
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)] text-balance">
              Rekam Jejak Nyata di Hunian, Korporasi, dan Infrastruktur Publik.
            </h2>
          </div>

          {/* Functional Segmented Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter Kategori Proyek"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-sage-soft)] p-1.5"
          >
            {PORTFOLIO_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)] ${
                    isActive
                      ? "bg-[var(--accent-cta)] text-[var(--accent-cta-ink)] shadow-xs"
                      : "text-[var(--ink-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--ink-primary)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media-First Bento Gallery */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredGallery.map((item, idx) => {
            const isHeroTile = idx === 0 && filteredGallery.length >= 4;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)] ${
                  isHeroTile ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div
                  className={`w-full overflow-hidden bg-[var(--bg-sage-soft)] ${
                    isHeroTile ? "aspect-[16/11] sm:h-full sm:min-h-[360px]" : "aspect-[4/3]"
                  }`}
                >
                  <ResilientImage
                    src={item.image}
                    alt={`${item.title} — ${item.projectContext}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    containerClassName="h-full w-full"
                    fallbackTitle={item.title}
                  />
                </div>

                {/* Measured gradient scrim for WCAG contrast */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
                />

                <div className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
                  <p className="text-[11px] font-medium text-white/80">
                    {item.projectContext}
                  </p>
                  <h3 className="mt-0.5 font-display text-base font-medium leading-snug sm:text-lg">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Consolidated Project Ledger (Daftar Proyek Resmi) */}
        <div className="mt-14 rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] shadow-xs">
          <div className="flex flex-col gap-2 border-b border-[var(--border-warm)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--ink-primary)]">
                Daftar Rekam Jejak Proyek ({filteredProjects.length})
              </h3>
              <p className="text-xs text-[var(--ink-muted)]">
                Menampilkan kategori: {activeCategory}
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(
                `Halo CV. Kreasi Cendekia Indonesia, saya telah melihat portofolio kategori ${activeCategory} dan ingin mendiskusikan proyek kami.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-start rounded-lg bg-[var(--accent-cta)] px-4 py-2 text-xs font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 transition-colors hover:bg-[var(--accent-cta-hover)] sm:self-auto shadow-xs"
            >
              <span>Pesan Sekarang</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>

          <div className="divide-y divide-[var(--border-warm)]">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="grid grid-cols-1 gap-2 px-6 py-4 transition-colors hover:bg-[var(--bg-sage-soft)]/60 md:grid-cols-12 md:items-center md:gap-4"
              >
                <div className="flex items-baseline gap-3 md:col-span-5">
                  <span className="text-xs font-bold text-[var(--ink-muted)] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-[var(--ink-primary)]">
                    {project.title}
                  </span>
                </div>

                <div className="text-xs font-medium text-[var(--ink-secondary)] md:col-span-3">
                  {project.client}
                  <span className="mx-1.5 text-[var(--ink-muted)]" aria-hidden="true">
                    ·
                  </span>
                  <span className="text-[var(--ink-muted)]">{project.location}</span>
                </div>

                <div className="text-xs text-[var(--ink-secondary)] md:col-span-4 md:text-right">
                  {project.scopeNote}
                  {project.yearNote ? ` (${project.yearNote})` : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#152019] text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Tutup pratinjau foto"
              className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative flex max-h-[68vh] min-h-[280px] w-full items-center justify-center bg-black">
              <ResilientImage
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[68vh] w-full object-contain"
                containerClassName="h-72 w-full"
                fallbackTitle={activeLightboxItem.title}
              />

              {filteredGallery.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Foto sebelumnya"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredGallery.length) %
                          filteredGallery.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/80"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Foto berikutnya"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/80"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-white/70">
                  {activeLightboxItem.projectContext} · {activeLightboxItem.category}
                </p>
                <h4 className="mt-1 font-display text-xl font-semibold">
                  {activeLightboxItem.title}
                </h4>
                <p className="mt-1.5 text-sm text-white/80">
                  {activeLightboxItem.caption}
                </p>
              </div>

              <a
                href={buildWhatsAppUrl(
                  `Halo CV. Kreasi Cendekia Indonesia, saya tertarik dengan proyek "${activeLightboxItem.title}" (${activeLightboxItem.projectContext}) dan ingin memesan layanan serupa.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start rounded-lg bg-[var(--accent-cta)] px-4 py-2.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[var(--accent-cta-hover)] sm:self-center"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioGallery;
