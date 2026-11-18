import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import { COMPANY_PROFILE, buildWhatsAppUrl } from "../data/kciData";
import PageHeader from "../components/PageHeader";
import AboutVisionSection from "../components/AboutVisionSection";
import LegalityTrustSection from "../components/LegalityTrustSection";
import ResilientImage from "../components/ResilientImage";
import KciLogo from "../components/KciLogo";

export default function AboutPage() {
  const whatsappHref = buildWhatsAppUrl(
    "Halo CV. Kreasi Cendekia Indonesia, saya ingin berkonsultasi mengenai profil dan kapabilitas tim lanskap Anda."
  );

  return (
    <div className="bg-[var(--bg-canvas)]">
      {/* Header Banner with Real Nursery Photography Background */}
      <PageHeader
        bgImage="/assets/kci/nursery_cigombong.jpg"
        title="Mengenal CV. Kreasi Cendekia Indonesia"
        subtitle="Konsultan dan kontraktor lanskap profesional yang memadukan keahlian teknik sipil hijau, perencanaan 3D terukur, dan pembibitan mandiri di Cigombong, Bogor untuk menghadirkan ruang hidup yang asri dan berdaya tahan lama."
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center rounded-lg bg-white/95 px-2 py-1 shadow-sm backdrop-blur-sm">
            <KciLogo width={32} />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/95 backdrop-blur-md uppercase tracking-wider">
            <ShieldCheck size={14} className="text-[#75dc66]" />
            <span>Profil Resmi Perusahaan</span>
          </div>
        </div>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-white drop-shadow-xs">
          Mengenal CV. Kreasi Cendekia Indonesia
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-200/90 sm:text-lg">
          Konsultan dan kontraktor lanskap profesional yang memadukan keahlian teknik sipil hijau,
          perencanaan 3D terukur, dan pembibitan mandiri di Cigombong, Bogor untuk menghadirkan ruang hidup yang asri dan berdaya tahan lama.
        </p>
      </PageHeader>

      {/* Profil, Visi, Misi, & Core Values */}
      <AboutVisionSection />

      {/* Nursery Mandiri Spotlight */}
      <section className="border-t border-[var(--border-warm)] bg-[var(--bg-elevated)] py-16 lg:py-24">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-warm)] shadow-sm">
                <div className="aspect-[16/11] w-full">
                  <ResilientImage
                    src="/assets/kci/nursery_cigombong.jpg"
                    alt="Lahan Pembibitan Nursery CV. Kreasi Cendekia Indonesia di Cigombong Bogor"
                    className="h-full w-full object-cover"
                    containerClassName="h-full w-full"
                    fallbackTitle="Nursery Cigombong Bogor"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                  <p className="text-xs font-medium text-white/80">Fasilitas Mandiri</p>
                  <p className="font-display text-lg font-semibold">Kebun Pembibitan Cigombong, Kab. Bogor</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-[var(--ink-muted)] uppercase">
                Keunggulan Strategis
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight tracking-tight text-[var(--ink-primary)]">
                Kemandirian Suplai Vegetasi &amp; Kualitas Tanaman.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-secondary)]">
                Keberhasilan proyek lanskap berskala besar sangat bergantung pada kesegaran dan daya adaptasi tanaman saat dipindahkan ke lokasi. Dengan nursery mandiri di Cigombong, kami memangkas rantai pasok dan mengawasi langsung proses aklimatisasi.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-sage-soft)] p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-cta)]" />
                  <div className="text-xs text-[var(--ink-primary)]">
                    <strong>Stok Berkelanjutan:</strong> Ribuan tanaman semak, penutup tanah (ground cover), dan pohon pelindung siap kirim.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-sage-soft)] p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-cta)]" />
                  <div className="text-xs text-[var(--ink-primary)]">
                    <strong>Harga Kompetitif:</strong> Direct supply dari kebun sendiri menjamin efisiensi anggaran proyek Anda tanpa markup pihak ketiga.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-[var(--border-warm)] bg-[var(--bg-sage-soft)] p-3.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-cta)]" />
                  <div className="text-xs text-[var(--ink-primary)]">
                    <strong>Keahlian Perawatan &amp; Bonsai:</strong> Tim hortikultura kami berpengalaman dalam perawatan bonsai koleksi dan pohon peneduh kota.
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-cta)] px-6 py-3 text-sm font-semibold text-[var(--accent-cta-ink)] hover:bg-[var(--accent-cta-hover)] shadow-sm"
                >
                  <span>Kunjungi atau Pesan dari Nursery</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas Resmi */}
      <LegalityTrustSection />
    </div>
  );
}
