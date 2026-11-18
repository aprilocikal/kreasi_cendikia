import React from "react";
import { Box } from "lucide-react";
import PageHeader from "../components/PageHeader";
import Interactive3DViewer from "../components/Interactive3DViewer";

export default function Model3DPage() {
  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner with Real 3D Project Background */}
      <PageHeader
        bgImage="/assets/kci/komersial_cipali_restarea.jpg"
        badgeIcon={<Box size={14} className="text-[#75dc66]" />}
        badgeText="Simulasi 3 Dimensi"
        title="Visualisasi Desain 3D Interaktif"
        subtitle="Tinjau simulasi rancangan kanopi pavilion dan tata hijau Rest Area Tol (Astra Toll Road) secara 360° sebelum eksekusi fisik. Nikmati eksplorasi pencahayaan siang/malam dan berbagai sudut pandang kamera."
      />

      {/* Main 3D Canvas & Feature Matrix */}
      <Interactive3DViewer />
    </div>
  );
}
