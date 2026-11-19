import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import KciLogo from "./KciLogo";

const NAV_LINKS = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/tentang-kami" },
  { label: "Layanan", path: "/layanan" },
  { label: "Portofolio", path: "/portofolio" },
  // { label: "Model 3D", path: "/model-3d", badge: "3D" }, // Hidden per user request
  { label: "Legalitas", path: "/legalitas" },
  { label: "Kontak", path: "/kontak" },
];

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Kunci scroll halaman di belakang saat menu mobile terbuka
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const primaryWhatsAppHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi dan memesan layanan lanskap."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-6 pt-2 sm:pt-3.5 pb-1 sm:pb-2 pointer-events-none transition-all duration-300">
      {/* Full-screen Backdrop Blur Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          onTouchMove={(e) => e.preventDefault()}
          className="fixed inset-0 bg-black/45 backdrop-blur-md pointer-events-auto xl:hidden transition-all duration-300 touch-none"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 mx-auto flex w-[93%] sm:w-full max-w-[1240px] items-center justify-between gap-3 sm:gap-4 rounded-full border border-white/90 bg-white/95 px-3.5 sm:px-6 py-1.5 sm:py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] pointer-events-auto">
        
        {/* Mobile Toggle Button (Left on Mobile - Slim 32px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-stone-100/90 text-stone-800 xl:hidden transition-colors duration-150 hover:bg-stone-200 shadow-2xs"
        >
          {mobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
        </button>

        {/* Mobile Center Brand Wordmark */}
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-tight text-[var(--ink-primary)] xl:hidden transition-opacity hover:opacity-80"
        >
          Cendikia
        </Link>

        {/* Brand & Mobile CTA:
            - Desktop: Left-aligned with Logo + Wordmark text
            - Mobile: Right-aligned with Slim "Pesan" button + Compact Logo Icon */}
        <div className="flex items-center gap-2 sm:gap-3 order-last xl:order-first">
          {/* Mobile-only slim "Pesan" button */}
          <a
            href={primaryWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#0ca74b] to-[#0a8f40] px-2.5 py-1 text-[11px] font-semibold text-white shadow-xs xl:hidden active:scale-95 transition-all"
          >
            <span>Pesan</span>
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} />
          </a>

          <Link
            to="/"
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)]"
            title="CV. Kreasi Cendekia Indonesia"
          >
            <KciLogo
              width={32}
              showText={true}
              light={false}
              textClassName="hidden xl:flex"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden xl:flex items-center gap-1 rounded-full border border-stone-200/70 bg-stone-100/80 p-1 backdrop-blur-sm"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[var(--brand-primary)] shadow-sm border border-stone-200/80"
                    : "text-stone-600 hover:text-[var(--brand-primary)] hover:bg-white/60"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)] shadow-[0_0_6px_rgba(12,167,75,0.6)]" />
                  )}
                  <span>{link.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <a
            href={primaryWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ca74b] to-[#0a8f40] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_18px_rgba(12,167,75,0.35)] transition-all duration-200 hover:from-[#10b952] hover:to-[#0ca74b] hover:shadow-[0_6px_24px_rgba(12,167,75,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Pesan Sekarang</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" strokeWidth={2.2} />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Mobile"
          className="relative z-10 mx-auto mt-2 w-[93%] max-w-[1240px] rounded-2xl border border-stone-200/90 bg-white/95 p-3.5 xl:hidden shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
        >
          <div className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[var(--brand-tint)] text-[var(--brand-primary)] font-bold border border-[var(--border-hairline)]"
                      : "text-stone-700 hover:bg-stone-100 hover:text-[var(--brand-primary)]"
                  }`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            ))}

            <div className="pt-2 mt-1 border-t border-stone-200">
              <a
                href={primaryWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0ca74b] to-[#0a8f40] px-4 py-2 text-sm font-semibold text-white shadow-md"
              >
                <span>Pesan Sekarang</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default TopBar;
