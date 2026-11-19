import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import KciLogo from "./KciLogo";

const NAV_LINKS = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/tentang-kami" },
  { label: "Layanan", path: "/layanan" },
  { label: "Portofolio", path: "/portofolio" },
  { label: "Model 3D", path: "/model-3d", badge: "3D" },
  { label: "Legalitas", path: "/legalitas" },
  { label: "Kontak", path: "/kontak" },
];

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryWhatsAppHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi dan memesan layanan lanskap."
  );

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 pt-3 pb-1 transition-all duration-300">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-2xl border border-white/80 bg-white/85 px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
        {/* Brand with Official Vector Logo & Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)]"
          title="CV. Kreasi Cendekia Indonesia"
        >
          <KciLogo width={50} showText={true} />
        </Link>

        {/* Desktop Navigation Links - Modern Tactile Pill Tabs */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden xl:flex items-center gap-1.5 rounded-full border border-stone-200/60 bg-stone-50/70 p-1 backdrop-blur-sm"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-white text-[var(--brand-primary)] shadow-xs border border-stone-200/60"
                    : "text-[var(--ink-secondary)] hover:bg-white/80 hover:text-[var(--brand-primary)]"
                }`
              }
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100/90 px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-emerald-800 tracking-wider">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-600"></span>
                  </span>
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Primary CTA + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={primaryWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ca74b] to-[#0a8f40] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(12,167,75,0.3)] transition-all duration-200 hover:from-[#0db853] hover:to-[#0ca74b] hover:shadow-[0_6px_20px_rgba(12,167,75,0.45)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Pesan Sekarang</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.2} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200/80 bg-white text-[var(--ink-primary)] xl:hidden transition-colors duration-150 hover:bg-stone-50 shadow-xs"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Mobile"
          className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-stone-200/80 bg-white/95 p-4 xl:hidden shadow-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200"
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
                      ? "bg-[var(--brand-tint)] text-[var(--brand-primary)] font-bold"
                      : "text-[var(--ink-primary)] hover:bg-stone-100/70"
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default TopBar;
