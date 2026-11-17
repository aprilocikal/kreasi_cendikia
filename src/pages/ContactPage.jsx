import React from 'react'
import PageBanner from '../components/PageBanner'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <PageBanner
        badge="Hubungi Kami"
        title="Konsultasi &amp; Permintaan Penawaran"
        subtitle="Diskusikan rancangan lanskap hunian pribadi, kawasan komersial, atau proyek fasilitas publik Anda bersama tim ahli kami."
      />

      <Contact />
    </div>
  )
}
