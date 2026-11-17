import React from 'react'
import PageBanner from '../components/PageBanner'
import Interactive3DViewer from '../components/Interactive3DViewer'

export default function Model3DPage() {
  return (
    <div className="model3d-page">
      <PageBanner
        badge="Simulasi 3 Dimensi"
        title="Visualisasi Desain 3D Interaktif"
        subtitle="Rasakan pengalaman meninjau model lanskap dan kanopi pavilion Rest Area (Astra Toll Road) secara 360° sebelum pembangunan fisik dieksekusi."
      />

      <Interactive3DViewer />
    </div>
  )
}
