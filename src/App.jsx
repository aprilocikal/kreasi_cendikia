import React, { useState, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import TopBar from './components/TopBar'
import ConversionFooter from './components/ConversionFooter'
import ScrollToTop from './components/ScrollToTop'
import SplashScreen from './components/SplashScreen'

// Distinct Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Model3DPage from './pages/Model3DPage'
import PortfolioPage from './pages/PortfolioPage'
import LegalityPage from './pages/LegalityPage'
import ContactPage from './pages/ContactPage'
import AdminPage from './pages/AdminPage'

export default function App() {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')

  // Animasi splash tampil 1 kali per sesi kunjungan
  const [showSplash, setShowSplash] = useState(
    () => !sessionStorage.getItem('kci_splash_done')
  )

  const handleSplashDone = useCallback(() => {
    sessionStorage.setItem('kci_splash_done', '1')
    setShowSplash(false)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--ink-primary)] selection:bg-[var(--accent-cta)] selection:text-white flex flex-col justify-between">
      {!isAdmin && showSplash && <SplashScreen onDone={handleSplashDone} />}
      <ScrollToTop />
      {!isAdmin && <TopBar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/model-3d" element={<Model3DPage />} />
          <Route path="/portofolio" element={<PortfolioPage />} />
          <Route path="/legalitas" element={<LegalityPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>

      {!isAdmin && <ConversionFooter />}
    </div>
  )
}
