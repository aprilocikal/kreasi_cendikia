import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { buildWhatsAppUrl } from "../data/kciData";
import PageHeader from "../components/PageHeader";
import ServicesCatalog from "../components/ServicesCatalog";

export default function ServicesPage() {
  const whatsappHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi mengenai alur kerja dan penawaran layanan lanskap."
  );

  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner with Photography Background */}
      <PageHeader
        bgImage="/assets/kci/hardscape_planter_bench.jpg"
        badgeIcon={<Layers size={14} className="text-[#75dc66]" />}
        badgeText="Layanan Terpadu"
        title="Katalog Solusi Lanskap & Nursery"
        subtitle="Mulai dari konsep desain masterplan, simulasi 3D, konstruksi fisik hardscape dan kolam, penghijauan vertical garden, hingga pemeliharaan berkala berstandar mutu tinggi."
      />

      {/* Main Services Catalog Bento Grid */}
      <ServicesCatalog />

      {/* Alur Kerja / 5 Tahapan Eksekusi */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-canvas)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
              Standar Operasional
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
              5 Langkah Kerja Terstruktur &amp; Transparan
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-secondary)]">
              Setiap tahapan kerja dikawal oleh tim konsultan dan pelaksana lapangan berpengalaman.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-5">
            {[
              {
                step: "01",
                title: "Survei & Diskusi",
                desc: "Peninjauan langsung lokasi proyek, pengukuran kontur lahan, pencahayaan, dan kebutuhan ruang klien.",
              },
              {
                step: "02",
                title: "Desain & Model 3D",
                desc: "Penyusunan gambar kerja 2D & visualisasi 3D realistis agar Anda memiliki gambaran jelas sebelum pembangunan.",
              },
              {
                step: "03",
                title: "RAB & Kontrak Sah",
                desc: "Transparansi rincian biaya material, jadwal kerja, dan kepastian administrasi badan usaha berbadan hukum.",
              },
              {
                step: "04",
                title: "Konstruksi Fisik",
                desc: "Pengerjaan hardscape, instalasi kolam/drainase, dan penanaman vegetasi unggul dari nursery Cigombong.",
              },
              {
                step: "05",
                title: "Handover & Perawatan",
                desc: "Serah terima proyek dengan garansi tanaman hidup serta opsi kontrak perawatan berkala jangka panjang.",
              },
            ].map((item, idx) => (
              <div
                key={item.step}
                className={`flex flex-col justify-between rounded-xl border border-[var(--border-warm)] bg-[var(--bg-elevated)] p-3.5 sm:p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-sm ${
                  idx === 4 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <span className="font-display text-lg sm:text-2xl font-bold text-[var(--accent-cta)] tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="mt-1.5 sm:mt-3 font-display text-xs sm:text-lg font-semibold text-[var(--ink-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs leading-relaxed text-[var(--ink-secondary)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-6 py-3.5 text-sm font-semibold text-[var(--accent-cta-ink)] hover:bg-[var(--accent-cta-hover)] shadow-sm"
            >
              <span>Jadwalkan Survei Lokasi Sekarang</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
