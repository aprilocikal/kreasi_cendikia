import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onDone }) {
  // Langsung aktif bergerak tanpa jeda/stuck
  const [phase, setPhase] = useState("start"); // start → merge → hold → exit

  useEffect(() => {
    // Mulai gerakan meluncur anggun sejak awal
    const t1 = setTimeout(() => setPhase("merge"), 40);
    // Logo menyatu sempurna setelah proses meluncur yang lebih lambat dan dramatis (1800ms)
    const t2 = setTimeout(() => setPhase("hold"), 1800);
    // Mulai transisi keluar secara perlahan (3400ms)
    const t3 = setTimeout(() => setPhase("exit"), 3400);
    // Selesai dan masuk ke web (4000ms)
    const t4 = setTimeout(() => onDone?.(), 4000);

    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className={`kci-splash splash-phase-${phase}`}>
      {/* Atmospheric glow blobs */}
      <div className="splash-blob blob-green" />
      <div className="splash-blob blob-teal" />

      {/* Particle sparks yang memancar saat logo menyatu */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`splash-spark spark-${i + 1}`} />
      ))}

      {/* Main logo assembly — 3 paths merging smoothly */}
      <div className="splash-stage">
        <div className="splash-logo-assembly">
          {/* PATH 1 — K batang kiri (meluncur dari kiri) */}
          <svg className="splash-svg path-1" viewBox="34.5 111 338 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0CA74B"
              d="M81.74,225.14c0,18.31-0.34,35.71,0.15,53.09c0.23,7.99-2.37,10.92-10.43,10.43c-9.56-0.58-19.18-0.3-28.77-0.1c-5.33,0.11-8.06-1.57-8.04-7.41c0.1-52.88,0.1-105.77,0-158.65c-0.01-5.4,2.41-7.03,7.45-6.93c10.75,0.21,21.52,0.29,32.27-0.03c5.95-0.18,7.48,2.56,7.42,7.87c-0.16,14.53-0.09,29.06,0,43.58c0.02,3.13-0.68,6.37,0.97,9.54c3.91,0,5.03-3.51,6.9-5.76c13.74-16.55,27.43-33.13,40.89-49.9c3.02-3.76,6.2-5.45,11.06-5.34c11.91,0.28,23.84,0.01,35.76,0.15c2.76,0.03,6.58-1.43,8.06,1.34c1.57,2.94-1.99,5.06-3.71,7.19c-18.05,22.4-36.2,44.72-54.33,67.06c-8.05,9.92-8.06,9.92,0.2,19.98c18.99,23.14,38.01,46.25,56.94,69.44c1.56,1.91,4.8,3.73,3.51,6.43c-1.27,2.67-4.72,1.31-7.18,1.34c-11.92,0.13-23.85-0.21-35.76,0.17c-6.12,0.19-10.33-1.86-14.14-6.62c-13.43-16.79-27.17-33.34-40.86-49.93C88.12,229.7,86.72,226.64,81.74,225.14z"
            />
          </svg>

          {/* PATH 2 — K tanda tengah (meluncur dari kanan bawah) */}
          <svg className="splash-svg path-2" viewBox="34.5 111 338 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2EB556"
              d="M252.77,288.54c-18.66,4.82-30.06-4.17-40.72-18.64c-15.82-21.48-33.47-41.63-50.63-62.11c-4.13-4.93-4.21-8.53-0.08-13.5c20.44-24.55,40.64-49.29,60.78-74.08c2.62-3.23,5.42-4.75,9.59-4.69c12.78,0.17,25.56,0.01,38.35,0.11c2.17,0.02,5.12-0.99,6.27,1.62c1.09,2.47-1.36,4.23-2.74,5.95c-18.78,23.28-37.4,46.7-56.61,69.62c-5.14,6.13-5.08,10.09,0.01,16.13c19.82,23.54,39.15,47.51,58.59,71.37c1.57,1.93,4.54,3.86,3.43,6.55c-1.21,2.9-4.62,1.53-7.07,1.59C265.56,288.66,259.17,288.54,252.77,288.54z"
            />
          </svg>

          {/* PATH 3 — aksen hijau muda (meluncur dari atas kanan) */}
          <svg className="splash-svg path-3" viewBox="34.5 111 338 178" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#75DC66"
              d="M277.63,200.98c-7.27,0-14.54,0.04-21.81-0.01c-4.87-0.04-5.71-1.98-2.61-5.76c20.85-25.38,41.7-50.76,62.49-76.19c2.05-2.51,4.51-3.42,7.59-3.41c13.38,0.02,26.75-0.03,40.13,0.03c1.92,0.01,4.46-0.6,5.35,1.8c0.8,2.17-1.08,3.78-2.32,5.31c-19.9,24.65-39.88,49.24-59.74,73.92c-2.65,3.3-5.87,4.42-9.89,4.35c-6.4-0.1-12.79-0.03-19.19-0.03C277.63,201,277.63,200.99,277.63,200.98z"
            />
          </svg>
        </div>

        {/* Brand text — muncul bersamaan dengan menyatunya logo */}
        <div className="splash-brand-text">
          <span className="splash-brand-name">Kreasi Cendekia</span>
          <span className="splash-brand-tagline">LANDSCAPE CONSULTANT</span>
          <span className="splash-brand-loc">Cigombong, Bogor · Jawa Barat</span>
        </div>
      </div>
    </div>
  );
}
