import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import ConversionFooter from './components/ConversionFooter'
import ScrollToTop from './components/ScrollToTop'

// Distinct Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Model3DPage from './pages/Model3DPage'
import PortfolioPage from './pages/PortfolioPage'
import LegalityPage from './pages/LegalityPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--ink-primary)] selection:bg-[var(--accent-cta)] selection:text-white flex flex-col justify-between">
      <ScrollToTop />
      <TopBar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/model-3d" element={<Model3DPage />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/legalitas" element={<LegalityPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Routes>
      </main>

      <ConversionFooter />
    </div>
  )
}
