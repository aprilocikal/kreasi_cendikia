import React from "react";
import { Box } from "lucide-react";
import Interactive3DViewer from "../components/Interactive3DViewer";

export default function Model3DPage() {
  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner */}
      <section className="border-b border-[var(--border-warm)] bg-[var(--bg-sage-soft)] py-14 lg:py-18">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-canvas)] px-3.5 py-1 text-xs font-semibold text-[var(--ink-secondary)] uppercase">
              <Box size={14} className="text-[var(--accent-cta)]" />
              <span>Simulasi 3 Dimensi</span>
            </div>
            <h1 className="mt-4 font-display text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
              Visualisasi Desain 3D Interaktif
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-secondary)]">
              Tinjau simulasi rancangan kanopi pavilion dan tata hijau Rest Area Tol (Astra Toll Road) secara 360° sebelum eksekusi fisik. Nikmati eksplorasi pencahayaan siang/malam dan berbagai sudut pandang kamera.
            </p>
          </div>
        </div>
      </section>

      {/* Main 3D Canvas & Feature Matrix */}
      <Interactive3DViewer />
    </div>
  );
}
