import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, PhoneCall } from 'lucide-react'
import KciLogo from './KciLogo'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Layanan', path: '/layanan' },
  // { label: 'Model 3D', path: '/model-3d' },
  { label: 'Portofolio', path: '/portofolio' },
  { label: 'Kontak', path: '/kontak' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar-wrapper">
      <div className="navbar-floating-pill">
        {/* Sisi Kiri: Hanya Logo Saja */}
        <Link
          to="/"
          className="navbar-brand-logo-only"
          onClick={() => setMobileOpen(false)}
          title="CV. Kreasi Cendikia Indonesia - Beranda"
        >
          <KciLogo size={36} showText={false} />
        </Link>

        {/* Navigasi Terpisah Halaman (Center) */}
        <nav className="navbar-links-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-item-link ${isActive ? 'active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Sisi Kanan: Rapih & Proporsional */}
        <div className="navbar-action-right">
          <a
            href="https://wa.me/6281212126595?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20landscape"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-orange-btn"
          >
            <PhoneCall size={15} />
            <span>Pesan Sekarang</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka menu navigasi"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-curved-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-links-list">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `mobile-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <a
              href="https://wa.me/6281212126595?text=Halo%20CV%20Kreasi%20Cendikia%20Indonesia,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20landscape"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-orange-btn mobile-cta-full"
            >
              <PhoneCall size={15} />
              <span>Pesan Sekarang (WhatsApp)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
