import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import KciLogo from "./KciLogo";

const NAV_LINKS = [
  { label: "Tentang", path: "/tentang-kami", hash: "#tentang" },
  { label: "Layanan", path: "/layanan", hash: "#layanan" },
  { label: "Portofolio", path: "/portofolio", hash: "#portofolio" },
  { label: "Model 3D", path: "/model-3d", hash: "#model-3d", badge: "3D" },
  { label: "Legalitas", path: "/#legalitas", hash: "#legalitas" },
  { label: "Kontak", path: "/kontak", hash: "#kontak" },
];

export function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const primaryWhatsAppHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi dan memesan layanan lanskap."
  );

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-warm)] bg-[var(--bg-canvas)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-3.5">
        {/* Brand with Official Vector Logo & Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)]"
          title="CV. Kreasi Cendekia Indonesia"
        >
          <KciLogo width={52} showText={true} />
        </Link>

        {/* Navigation links */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[var(--ink-secondary)]"
        >
          {NAV_LINKS.map((link) => {
            const targetHref = isHomePage ? link.hash : link.path;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={targetHref}
                className={`relative whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)] ${
                  isActive
                    ? "font-semibold text-[var(--ink-primary)]"
                    : "text-[var(--ink-secondary)]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 inline-flex items-center rounded-md bg-[var(--brand-tint-deep)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--brand-primary)] uppercase">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--brand-primary)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA + mobile toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={primaryWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--accent-cta)] px-4 py-2.5 text-sm font-semibold text-[var(--accent-cta-ink)] whitespace-nowrap shrink-0 shadow-sm transition-all duration-150 hover:bg-[var(--accent-cta-hover)] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
          >
            <span>Pesan Sekarang</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-warm)] text-[var(--ink-primary)] lg:hidden transition-colors duration-150 hover:bg-[var(--bg-sage-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cta)]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          aria-label="Navigasi Mobile"
          className="border-t border-[var(--border-warm)] bg-[var(--bg-elevated)] px-6 py-4 lg:hidden shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const targetHref = isHomePage ? link.hash : link.path;
              return (
                <Link
                  key={link.label}
                  to={targetHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-[var(--ink-primary)] transition-colors hover:bg-[var(--bg-sage-soft)]"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="rounded-md bg-[var(--brand-tint-deep)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--brand-primary)]">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

export default TopBar;
