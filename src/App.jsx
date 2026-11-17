import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages terpisah rapi
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import Model3DPage from './pages/Model3DPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'

import './App.css'

function App() {
  // Hanya jalankan animasi 1 kali; jika di-refresh tidak akan muncul lagi
  const [splashDone, setSplashDone] = useState(() => {
    try {
      return sessionStorage.getItem('kci_splash_shown') === 'true'
    } catch {
      return false
    }
  })

  const handleSplashDone = () => {
    try {
      sessionStorage.setItem('kci_splash_shown', 'true')
    } catch {
      // Ignore sessionStorage errors
    }
    setSplashDone(true)
  }

  useEffect(() => {
    if (!splashDone) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [splashDone])

  return (
    <>
      {/* Animasi Bunga Mekar Pembuka (Hanya berjalan 1x per sesi) */}
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      <div className={`main-site ${splashDone ? 'visible' : 'hidden'}`}>
        <ScrollToTop />
        <Navbar />

        <main className="main-content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<AboutPage />} />
            <Route path="/layanan" element={<ServicesPage />} />
            <Route path="/model-3d" element={<Model3DPage />} />
            <Route path="/portofolio" element={<PortfolioPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
