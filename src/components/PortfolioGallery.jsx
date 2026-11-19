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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredGallery = useMemo(() => {
    if (activeCategory === "Semua") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Semua") return PORTFOLIO_PROJECTS;
    return PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProjects, currentPage, itemsPerPage]);

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
    <section id="portofolio" className="bg-[var(--bg-canvas)] py-8 lg:py-14">
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

          {/* Modern Horizontal Pill Filter - Soft green capsule on mobile, clean & transparent on laptop/desktop */}
          <div className="w-full lg:w-auto rounded-2xl bg-[var(--brand-tint)] border border-[var(--border-hairline)] p-1 shadow-2xs sm:bg-transparent sm:border-0 sm:p-0 sm:shadow-none">
            <div
              role="tablist"
              aria-label="Filter Kategori Proyek"
              className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto px-1 py-0.5 sm:px-0 sm:py-0 max-w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap"
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
                    className={`rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-150 border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)] ${
                      isActive
                        ? "bg-[var(--accent-cta)] text-white border-[var(--accent-cta)] shadow-xs font-bold"
                        : "bg-white text-[var(--ink-secondary)] border-transparent sm:border-stone-200/90 hover:text-[var(--brand-primary)] hover:border-emerald-200/60 shadow-2xs"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Media-First Bento Gallery */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {filteredGallery.map((item, idx) => {
            const hasHeroTile = filteredGallery.length >= 4;
            const isHeroTile = idx === 0 && hasHeroTile;
            const isLast = idx === filteredGallery.length - 1 && idx !== 0;
            const isLastAlone = isLast && (hasHeroTile ? (idx - 1) % 2 === 0 : idx % 2 === 0);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)] ${
                  isHeroTile
                    ? "col-span-2 sm:col-span-2 sm:row-span-2"
                    : isLastAlone
                    ? "col-span-2 sm:col-span-1 lg:col-span-1"
                    : ""
                }`}
              >
                <div
                  className={`w-full overflow-hidden bg-[var(--bg-sage-soft)] ${
                    isHeroTile
                      ? "aspect-[16/10] sm:h-full sm:min-h-[360px]"
                      : isLastAlone
                      ? "aspect-[16/9] sm:aspect-[4/3]"
                      : "aspect-[4/3]"
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
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-black/85 via-black/45 to-transparent"
                />

                <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                  <Expand className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-5 text-white">
                  <p className="text-[10px] sm:text-[11px] font-medium text-white/80 line-clamp-1">
                    {item.projectContext}
                  </p>
                  <h3 className="mt-0.5 font-display text-xs sm:text-lg font-medium leading-snug line-clamp-1 sm:line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Consolidated Project Ledger (Daftar Proyek Resmi) */}
        <div className="mt-14 sm:mt-16 overflow-hidden rounded-2xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] shadow-xs">
          <div className="flex flex-col gap-3 border-b border-[var(--border-warm)] bg-[var(--bg-sage-soft)] p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--ink-primary)]">
                Daftar Rekam Jejak Proyek
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
              className="inline-flex items-center gap-1.5 self-start rounded-lg bg-[var(--accent-cta)] px-3.5 py-2 text-xs font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 transition-colors hover:bg-[var(--accent-cta-hover)] sm:self-auto shadow-xs"
            >
              <span>Pesan Sekarang</span>
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </a>
          </div>

          <div className="divide-y divide-[var(--border-warm)]">
            {paginatedProjects.map((project, idx) => {
              const globalIndex = (currentPage - 1) * itemsPerPage + idx;
              return (
                <div
                  key={project.id}
                  className="grid grid-cols-1 gap-1.5 px-4 sm:px-6 py-3.5 sm:py-4 transition-colors hover:bg-[var(--bg-sage-soft)]/60 md:grid-cols-12 md:items-center md:gap-4"
                >
                  <div className="flex items-baseline gap-2.5 md:col-span-5">
                    <span className="text-xs font-bold text-[var(--brand-primary)] tabular-nums">
                      {String(globalIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[var(--ink-primary)]">
                      {project.title}
                    </span>
                  </div>

                  <div className="text-[11px] sm:text-xs font-medium text-[var(--ink-secondary)] md:col-span-3">
                    {project.client}
                    <span className="mx-1.5 text-[var(--ink-muted)]" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[var(--ink-muted)]">{project.location}</span>
                  </div>

                  <div className="text-[11px] sm:text-xs text-[var(--ink-secondary)] md:col-span-4 md:text-right">
                    {project.scopeNote}
                    {project.yearNote ? ` (${project.yearNote})` : ""}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Navigation Controls (Per 5 Proyek) */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 border-t border-[var(--border-warm)] bg-[var(--bg-canvas)]/50 px-4 sm:px-6 py-3">
              <div className="text-[11px] sm:text-xs text-[var(--ink-muted)] text-center sm:text-left">
                Halaman <span className="font-semibold text-[var(--ink-primary)]">{currentPage}</span> dari {totalPages}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="inline-flex h-8 items-center gap-1 rounded-lg border border-[var(--border-warm)] bg-white px-2.5 text-xs font-medium text-[var(--ink-primary)] shadow-2xs transition-all hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Sebelumnya</span>
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold transition-all ${
                        currentPage === page
                          ? "bg-[var(--brand-primary)] text-white shadow-xs"
                          : "border border-transparent text-[var(--ink-secondary)] hover:bg-white hover:border-[var(--border-warm)]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="inline-flex h-8 items-center gap-1 rounded-lg border border-[var(--border-warm)] bg-white px-2.5 text-xs font-medium text-[var(--ink-primary)] shadow-2xs transition-all hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span className="hidden sm:inline">Berikutnya</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
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
