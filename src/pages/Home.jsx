import React from "react";
import HeroSection from "../components/HeroSection";
import AboutVisionSection from "../components/AboutVisionSection";
import ServicesCatalog from "../components/ServicesCatalog";
import Interactive3DViewer from "../components/Interactive3DViewer";
import PortfolioGallery from "../components/PortfolioGallery";
import LegalityTrustSection from "../components/LegalityTrustSection";

export default function Home() {
  return (
    <div className="home-editorial-container">
      {/* 1. Hero Section with Typographic Hierarchy, Karawaci Photography, & KPI Strip */}
      <HeroSection />

      {/* 2. Profil, Visi, Misi, & 8 Core Values */}
      <AboutVisionSection showFullLink={true} />

      {/* 3. Katalog Layanan Terpadu Bento Grid & Scope Modal */}
      <ServicesCatalog />

      {/* 4. Fitur Simulasi 3D Interaktif (Three.js Rest Area Pavilion) */}
      <Interactive3DViewer />

      {/* 5. Portofolio Proyek Dokumentasi Lapangan & Lightbox */}
      <PortfolioGallery />

      {/* 6. Legalitas Badan Usaha (SK AHU & NPWP Resmi) */}
      <LegalityTrustSection />
    </div>
  );
}
