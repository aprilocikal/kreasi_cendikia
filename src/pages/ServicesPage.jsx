import React from 'react'
import PageBanner from '../components/PageBanner'
import Services from '../components/Services'

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageBanner
        badge="Katalog Layanan"
        title="Layanan Landscape &amp; Hardscape Terpadu"
        subtitle="Solusi menyeluruh dari tahap konsepsi desain 2D/3D, konstruksi fisik, pengadaan tanaman nursery, hingga pemeliharaan kawasan secara berkesinambungan."
      />

      <Services />
    </div>
  )
}
