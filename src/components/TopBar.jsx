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
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 pt-3.5 pb-2 transition-all duration-300">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 rounded-full border border-white/15 bg-[#08180e]/85 px-6 py-2.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.65)]">
        {/* Brand with Official Vector Logo & Wordmark in Light Mode */}
        <Link
          to="/"
          className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)]"
          title="CV. Kreasi Cendekia Indonesia"
        >
          <KciLogo width={48} showText={true} light={true} />
        </Link>

        {/* Desktop Navigation Links - Dark Glass Capsule Tabs */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden xl:flex items-center gap-1 rounded-full border border-white/10 bg-black/25 p-1 backdrop-blur-md"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `relative flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-white/15 text-white font-semibold shadow-xs border border-white/20"
                    : "text-stone-300/85 hover:bg-white/8 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#75dc66] shadow-[0_0_8px_#75dc66]" />
                  )}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-1.5 py-0.5 text-[9px] font-extrabold uppercase text-[#75dc66] tracking-wider">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                      </span>
                      {link.badge}
                    </span>
                  )}
                </>
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
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ca74b] to-[#0a8f40] px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_18px_rgba(12,167,75,0.4)] transition-all duration-200 hover:from-[#10b952] hover:to-[#0ca74b] hover:shadow-[0_6px_26px_rgba(12,167,75,0.6)] hover:-translate-y-0.5 active:translate-y-0 border border-white/15"
          >
            <span>Pesan Sekarang</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white" strokeWidth={2.2} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white xl:hidden transition-colors duration-150 hover:bg-white/20 shadow-xs"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Mobile"
          className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-white/15 bg-[#08180e]/95 p-4 xl:hidden shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200"
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
                      ? "bg-white/15 text-white font-bold border border-white/20"
                      : "text-stone-300 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-bold text-[#75dc66]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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
