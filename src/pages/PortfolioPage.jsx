import React from "react";
import PortfolioGallery from "../components/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--bg-canvas)] pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Main Portfolio Gallery with Lightbox & Ledger */}
      <PortfolioGallery />
    </div>
  );
}
