import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Box } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";

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
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
        {/* Brand wordmark & Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-[var(--ink-primary)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bg-sage-deep)] text-[var(--ink-primary)] border border-[var(--border-hairline)] transition-transform group-hover:scale-105">
            <svg viewBox="0 0 40 40" className="h-5 w-5 fill-current">
              <path d="M20 5C20 5 12 14 12 21C12 25.4 15.6 29 20 29C24.4 29 28 25.4 28 21C28 14 20 5 20 5Z" opacity="0.85" />
              <path d="M20 12V34M16 23L20 20M24 23L20 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-[var(--ink-primary)]">
              {COMPANY_PROFILE.shortName}
            </span>
            <span className="text-[10px] font-medium tracking-wider text-[var(--ink-muted)] uppercase">
              Landscape Consultant
            </span>
          </div>
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
                className={`relative whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-[var(--ink-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-cta)] ${
                  isActive
                    ? "font-semibold text-[var(--ink-primary)]"
                    : "text-[var(--ink-secondary)]"
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 inline-flex items-center rounded-md bg-[var(--bg-sage-deep)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--ink-primary)] uppercase">
                    {link.badge}
                  </span>
                )}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[var(--accent-cta)]" />
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
                    <span className="rounded-md bg-[var(--bg-sage-deep)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--ink-primary)]">
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
