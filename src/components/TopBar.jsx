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

      <div className="relative z-10 mx-auto flex w-[93%] sm:w-full max-w-[1040px] items-center justify-between gap-3 rounded-full border border-white/80 bg-white/90 px-3 sm:px-5 py-1 sm:py-1.5 shadow-[0_4px_22px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_6px_28px_rgba(0,0,0,0.12)] pointer-events-auto">
        
        {/* Mobile Toggle Button (Left on Mobile - Slim 30px) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          className="inline-flex h-7.5 w-7.5 items-center justify-center rounded-full border border-stone-200/90 bg-stone-100/80 text-stone-800 xl:hidden transition-colors duration-150 hover:bg-stone-200 shadow-2xs"
        >
          {mobileMenuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
        </button>

        {/* Single Brand Logo (Clean vector icon, no text, single element in DOM) */}
        <Link
          to="/"
          className="group flex items-center transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)] shrink-0"
          title="CV. Kreasi Cendekia Indonesia"
          aria-label="Beranda"
        >
          <KciLogo width={38} showText={false} />
        </Link>

        {/* Desktop Navigation Links - Compact & Frameless (No separate box border) */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden xl:flex items-center gap-1.5"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-all duration-150 ${
                  isActive
                    ? "text-[var(--brand-primary)] bg-[var(--brand-tint)] font-bold shadow-2xs"
                    : "text-stone-600 hover:text-[var(--ink-primary)] hover:bg-stone-100/70"
                }`
              }
            >
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons: Compact Neon Orange */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile-only slim "Pesan" button */}
          <a
            href={primaryWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#f0520a] to-[#d84300] px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-[0_2px_8px_rgba(240,82,10,0.35)] xl:hidden active:scale-95 transition-all"
          >
            <span>Pesan</span>
            <ArrowUpRight className="h-3 w-3" strokeWidth={2.2} />
          </a>

          {/* Desktop "Pesan Sekarang" Button (Compact) */}
          <a
            href={primaryWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden xl:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f0520a] to-[#d84300] px-4 py-1.5 text-xs font-semibold text-white shadow-[0_3px_14px_rgba(240,82,10,0.32)] transition-all duration-200 hover:from-[#fa5a16] hover:to-[#f0520a] hover:shadow-[0_5px_20px_rgba(240,82,10,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Pesan Sekarang</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" strokeWidth={2.2} />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Mobile"
          className="relative z-10 mx-auto mt-2 w-[93%] max-w-[1040px] rounded-2xl border border-stone-200/90 bg-white/95 p-3 xl:hidden shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 pointer-events-auto"
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
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f0520a] to-[#d84300] px-4 py-2 text-sm font-semibold text-white shadow-md"
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
