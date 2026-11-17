import React from 'react'
import { motion } from 'framer-motion'

export default function BloomingFlowers() {
  // Outer petals: 6 petals at 60 deg intervals
  const outerPetals = [0, 60, 120, 180, 240, 300]
  // Mid petals: 6 petals offset by 30 deg
  const midPetals = [30, 90, 150, 210, 270, 330]
  // Inner spiral petals: 5 petals
  const innerPetals = [15, 87, 159, 231, 303]
  // Stamen filaments: 12 golden pollen threads
  const stamens = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

  return (
    <div className="blooming-flowers-container">
      <svg
        viewBox="-130 -140 260 270"
        className="blooming-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Stem gradient: botanical forest to fresh spring green */}
          <linearGradient id="roseStemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#15803D" />
            <stop offset="50%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>

          {/* Leaf gradient with lush highlight */}
          <linearGradient id="roseLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86EFAC" />
            <stop offset="40%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#14532D" />
          </linearGradient>

          {/* Outer Petal: Elegant velvet rose blush with pearl white edge */}
          <linearGradient id="outerPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#E11D48" />
            <stop offset="35%" stopColor="#F43F5E" />
            <stop offset="70%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#FFF1F2" />
          </linearGradient>

          {/* Mid Petal: Rich blooming coral rose */}
          <linearGradient id="midPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#BE123C" />
            <stop offset="45%" stopColor="#E11D48" />
            <stop offset="85%" stopColor="#FDA4AF" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>

          {/* Inner Petal: Deep glowing core */}
          <linearGradient id="innerPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#9F1239" />
            <stop offset="60%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#FECDD3" />
          </linearGradient>

          {/* Golden Stamen glow */}
          <linearGradient id="goldStamenGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>

          {/* Soft blur glow for pollen */}
          <filter id="pollenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Drop shadow between petals */}
          <filter id="petalDepth" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#881337" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Ambient floating golden pollen sparkles */}
        {[-60, -35, -10, 15, 40, 65, -25, 30].map((x, idx) => (
          <motion.circle
            key={idx}
            cx={x}
            cy={-45 - (idx % 4) * 20}
            r={1.4 + (idx % 2) * 1.2}
            fill="#FEF08A"
            filter="url(#pollenGlow)"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.9, 0],
              y: [-5, -65],
              x: x + (idx % 2 === 0 ? 14 : -14)
            }}
            transition={{
              duration: 2.4,
              delay: 1.2 + idx * 0.22,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}

        {/* Base Sprout Mound */}
        <motion.ellipse
          cx="0"
          cy="112"
          rx="22"
          ry="6"
          fill="#DCFCE7"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        />

        {/* Animated Plant Group with Gentle Natural Sway */}
        <motion.g
          animate={{ rotate: [-0.8, 1, -0.8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ transformOrigin: '0px 112px' }}
        >
          {/* SINGLE GRACEFUL CURVING STEM */}
          <motion.path
            d="M 0, 112 C 16, 62 -14, 8 0, -48"
            fill="none"
            stroke="url(#roseStemGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          />

          {/* LOWER LEAF 1 (Left - y = 56) */}
          <motion.g
            transform="translate(6, 56)"
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Realistic Botanical Leaf with curved tip */}
            <path
              d="M 0, 0 C -18, -6 -32, -22 -26, -34 C -18, -42 -4, -28 0, 0 Z"
              fill="url(#roseLeafGrad)"
              filter="url(#petalDepth)"
            />
            {/* Midrib & Lateral Veins */}
            <path
              d="M 0, 0 C -12, -14 -18, -26 -25, -33"
              stroke="#15803D"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            <path d="M -6, -8 Q -12, -8 -16, -14" stroke="#86EFAC" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d="M -12, -16 Q -18, -18 -22, -24" stroke="#86EFAC" strokeWidth="0.8" fill="none" opacity="0.6" />
          </motion.g>

          {/* MID LEAF 2 (Right - y = 8) */}
          <motion.g
            transform="translate(-6, 8)"
            initial={{ scale: 0, rotate: 45, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.75, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <path
              d="M 0, 0 C 18, -6 32, -22 26, -34 C 18, -42 4, -28 0, 0 Z"
              fill="url(#roseLeafGrad)"
              filter="url(#petalDepth)"
            />
            <path
              d="M 0, 0 C 12, -14 18, -26 25, -33"
              stroke="#15803D"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.8"
            />
            <path d="M 6, -8 Q 12, -8 16, -14" stroke="#86EFAC" strokeWidth="0.8" fill="none" opacity="0.6" />
            <path d="M 12, -16 Q 18, -18 22, -24" stroke="#86EFAC" strokeWidth="0.8" fill="none" opacity="0.6" />
          </motion.g>

          {/* UPPER TENDER LEAF 3 (Left - y = -26) */}
          <motion.g
            transform="translate(-3, -26)"
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: [0, 1.1, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.95, ease: 'easeOut' }}
          >
            <path
              d="M 0, 0 C -12, -4 -20, -16 -15, -24 C -8, -18 -2, -8 0, 0 Z"
              fill="url(#roseLeafGrad)"
            />
          </motion.g>

          {/* MAIN FLOWER HEAD - MAGNIFICENT BLOOM (Puncak Bunga di y = -48) */}
          <g transform="translate(0, -48)">
            {/* Green Sepals (Kelopak pelindung yang membuka ke belakang) */}
            <motion.g
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
            >
              {[-50, -25, 0, 25, 50].map((deg, i) => (
                <path
                  key={i}
                  d="M 0, 6 C -5, 14 -8, 22 0, 24 C 8, 22 5, 14 0, 6 Z"
                  fill="#15803D"
                  transform={`rotate(${deg})`}
                />
              ))}
            </motion.g>

            {/* LAYER 1: 6 Petal Luar Besar (Silky Curving Petals) */}
            <motion.g
              initial={{ scale: 0, rotate: -35, opacity: 0 }}
              animate={{ scale: [0, 1.18, 1], rotate: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {outerPetals.map((deg, i) => (
                <motion.g
                  key={`outer-${i}`}
                  transform={`rotate(${deg})`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.15 + i * 0.05,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  {/* Outer petal curved shell */}
                  <path
                    d="M 0, 0 C -16, -14 -24, -36 -12, -46 C -2, -54 14, -50 20, -38 C 26, -26 18, -12 0, 0 Z"
                    fill="url(#outerPetalGrad)"
                    filter="url(#petalDepth)"
                  />
                  {/* Subtle silk highlight on petal rim */}
                  <path
                    d="M -10, -44 C -2, -52 12, -48 18, -36"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                  />
                </motion.g>
              ))}
            </motion.g>

            {/* LAYER 2: 6 Petal Tengah (Overlapping Cup Petals) */}
            <motion.g
              initial={{ scale: 0, rotate: 25, opacity: 0 }}
              animate={{ scale: [0, 1.22, 1], rotate: 0, opacity: 1 }}
              transition={{ duration: 0.85, delay: 1.35, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {midPetals.map((deg, i) => (
                <motion.g
                  key={`mid-${i}`}
                  transform={`rotate(${deg})`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.4 + i * 0.04,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <path
                    d="M 0, 0 C -12, -10 -16, -26 -8, -34 C -1, -40 10, -38 14, -28 C 18, -18 12, -8 0, 0 Z"
                    fill="url(#midPetalGrad)"
                    filter="url(#petalDepth)"
                  />
                  <path
                    d="M -6, -32 C 0, -37 8, -35 12, -26"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.75"
                  />
                </motion.g>
              ))}
            </motion.g>

            {/* LAYER 3: 5 Petal Inti Berputar (Spiral Core) */}
            <motion.g
              initial={{ scale: 0, rotate: -45, opacity: 0 }}
              animate={{ scale: [0, 1.25, 1], rotate: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 1.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {innerPetals.map((deg, i) => (
                <motion.path
                  key={`inner-${i}`}
                  d="M 0, 0 C -8, -6 -10, -18 0, -22 C 10, -18 8, -6 0, 0 Z"
                  fill="url(#innerPetalGrad)"
                  transform={`rotate(${deg})`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.65 + i * 0.03 }}
                />
              ))}
            </motion.g>

            {/* LAYER 4: Benang Sari Emas Radiatif (Golden Stamens) */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.3, 1], opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.85, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {stamens.map((deg, i) => {
                const rad = (deg * Math.PI) / 180
                const tipX = Math.cos(rad) * 11
                const tipY = Math.sin(rad) * 11
                return (
                  <g key={`stamen-${i}`}>
                    {/* Filament thread */}
                    <line
                      x1="0"
                      y1="0"
                      x2={tipX}
                      y2={tipY}
                      stroke="url(#goldStamenGrad)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    {/* Golden anther dot */}
                    <circle
                      cx={tipX}
                      cy={tipY}
                      r="1.6"
                      fill="#F59E0B"
                      filter="url(#pollenGlow)"
                    />
                  </g>
                )
              })}

              {/* Glowing Center Core */}
              <circle cx="0" cy="0" r="5.5" fill="#D97706" />
              <circle cx="0" cy="0" r="3.8" fill="#FDE047" />
              <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
            </motion.g>
          </g>
        </motion.g>
      </svg>
    </div>
  )
}
