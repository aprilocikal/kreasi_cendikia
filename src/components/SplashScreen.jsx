import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BloomingFlowers from './BloomingFlowers'
import KciLogo from './KciLogo'
import { ArrowRight } from 'lucide-react'
import './SplashScreen.css'

export default function SplashScreen({ onDone }) {
  useEffect(() => {
    // Durasi pas untuk menikmati bunga mekar dan logo (3.6 detik)
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

          {/* Clean KCI Logo Mark (Tanpa Border / Card Box & Tanpa Teks) */}
          <motion.div
            className="splash-logo-clean"
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <KciLogo size={58} showText={false} />
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
