import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import KciLogo from "./KciLogo";

export function ConversionFooter() {
  const ctaHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi mengenai layanan lanskap."
  );

  return (
    <footer className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-8 sm:py-10">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          {/* Logo Brand & Editorial Deskripsi (Desktop) */}
          <div className="max-w-md">
            <Link to="/" className="inline-block" title="CV. Kreasi Cendekia Indonesia">
              <KciLogo width={50} showText={true} />
            </Link>
            <p className="hidden md:block mt-3 text-xs leading-relaxed text-[var(--ink-secondary)]">
              Konsultan dan kontraktor lanskap profesional yang memadukan arsitektur tropis presisi, pembibitan nursery mandiri di Cigombong, serta komitmen mutu jangka panjang untuk hunian residensial, korporasi, dan infrastruktur publik.
            </p>
          </div>

          {/* Kantor & Nursery */}
          <div className="space-y-2 text-xs sm:text-sm text-[var(--ink-secondary)] max-w-md">
            <p className="text-[11px] font-bold tracking-wider text-[var(--ink-muted)] uppercase">
              Kantor &amp; Nursery
            </p>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--brand-primary)]" />
              <span>{COMPANY_PROFILE.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-[var(--brand-primary)]" />
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--ink-primary)] hover:underline tabular-nums"
              >
                {COMPANY_PROFILE.phoneDisplay} (WhatsApp / Telepon)
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[var(--brand-primary)]" />
              <a
                href={`mailto:${COMPANY_PROFILE.email}`}
                className="font-medium text-[var(--ink-primary)] hover:underline"
              >
                {COMPANY_PROFILE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-[var(--border-warm)] pt-5 text-[11px] text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_PROFILE.legalName}. Seluruh hak cipta dilindungi.
          </p>
          <p className="tabular-nums">
            SK AHU-0004520-AH.01.14 Tahun 2024 · NPWP 99.973.701.8-434.000
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ConversionFooter;
