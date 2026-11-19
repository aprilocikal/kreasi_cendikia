import React from "react";
import { Trees } from "lucide-react";
import PageHeader from "../components/PageHeader";
import PortfolioGallery from "../components/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner with Real Project Photography Background */}
      <PageHeader
        bgImage="/assets/kci/kawasan_segara_city.webp"
        badgeIcon={<Trees size={14} className="text-[#75dc66]" />}
        badgeText="Dokumentasi Nyata"
        title="Portofolio & Rekam Jejak Lapangan"
        subtitle="Dokumentasi proyek nyata yang telah diselesaikan untuk korporasi jalan tol (Astra), pengembang kawasan ternama (Damai Putra, Ciputra, Summarecon), perbankan, restoran, serta hunian residensial mewah."
      />

      {/* Main Portfolio Gallery with Lightbox & Ledger */}
      <PortfolioGallery />
    </div>
  );
}
