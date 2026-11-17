import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BloomingFlowers from './BloomingFlowers'
import KciLogo from './KciLogo'
import { Sparkles, ArrowRight } from 'lucide-react'
import './SplashScreen.css'

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    // Memberi waktu yang pas agar animasi bunga mekar sempurna dinikmati (3.6 detik)
    const timer = setTimeout(() => {
      onDone()
    }, 3600)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <AnimatePresence>
      <motion.div
        className="kci-splash"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.03 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Soft background aura circles */}
        <motion.div
          className="splash-aura aura-sage"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.7, 1.15, 1], opacity: 0.45 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        />
        <motion.div
          className="splash-aura aura-orange"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.6, 1.05, 0.95], opacity: 0.28 }}
          transition={{ duration: 2.6, ease: 'easeOut', delay: 0.2 }}
        />

        {/* Skip button in top corner */}
        <button
          className="splash-skip-btn"
          onClick={onDone}
          title="Lewati animasi langsung ke halaman web"
        >
          <span>Lewati</span>
          <ArrowRight size={14} />
        </button>

        <div className="splash-box">
          {/* Fresh Blooming Floral Animation */}
          <div className="splash-blooming-wrapper">
            <BloomingFlowers />
          </div>

          {/* KCI Logo Mark & Typography Reveal */}
          <motion.div
            className="splash-brand-reveal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="splash-logo-mini-tag">
              <KciLogo size={42} showText={false} />
            </div>

            <span className="splash-company-prefix">CV. KREASI CENDIKIA</span>
            <h1 className="splash-company-title">INDONESIA</h1>

            <div className="splash-divider" />

            <p className="splash-tagline">
              Konsultan &amp; Kontraktor Landscape Profesional
            </p>
          </motion.div>

          {/* Elegant Progress Line */}
          <div className="splash-progress-track">
            <motion.div
              className="splash-progress-bar"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.6, delay: 0.4, ease: 'easeInOut' }}
            />
          </div>

          <motion.span
            className="splash-location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Cigombong, Kabupaten Bogor &bull; Jawa Barat
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
