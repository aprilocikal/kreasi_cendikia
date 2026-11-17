import React from 'react'
import { motion } from 'framer-motion'

export default function BloomingFlowers() {
  // 7 stems fanning out: angles from -36deg to +36deg
  const flowerList = [
    {
      id: 'rose',
      angle: -38,
      stemHeight: 145,
      delay: 0.2,
      type: 'rose',
      stemColor: '#4A7C43'
    },
    {
      id: 'cherry',
      angle: -26,
      stemHeight: 168,
      delay: 0.35,
      type: 'cherry',
      stemColor: '#3D7336'
    },
    {
      id: 'lotus',
      angle: -13,
      stemHeight: 185,
      delay: 0.5,
      type: 'lotus',
      stemColor: '#43803B'
    },
    {
      id: 'hibiscus',
      angle: 0,
      stemHeight: 198,
      delay: 0.65,
      type: 'hibiscus',
      stemColor: '#366F2F'
    },
    {
      id: 'daisy',
      angle: 13,
      stemHeight: 185,
      delay: 0.5,
      type: 'daisy',
      stemColor: '#43803B'
    },
    {
      id: 'tulip',
      angle: 26,
      stemHeight: 168,
      delay: 0.35,
      type: 'tulip',
      stemColor: '#3D7336'
    },
    {
      id: 'sunflower',
      angle: 38,
      stemHeight: 145,
      delay: 0.2,
      type: 'sunflower',
      stemColor: '#4A7C43'
    }
  ]

  // Render individual blooming flower head
  const renderFlowerHead = (type, delay) => {
    switch (type) {
      case 'rose':
        return (
          <motion.g
            initial={{ scale: 0, rotate: -25, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Calyx leaves */}
            <path d="M-9,10 Q-14,4 -8,-2 Q-4,6 0,8 Q4,6 8,-2 Q14,4 9,10 Z" fill="#4A7C43" />
            {/* Petals */}
            <path d="M-14,0 C-18,-14 -6,-22 0,-20 C6,-22 18,-14 14,0 C10,12 -10,12 -14,0 Z" fill="#E25C5C" />
            <path d="M-10,-4 C-12,-16 -2,-20 0,-18 C2,-20 12,-16 10,-4 C8,6 -8,6 -10,-4 Z" fill="#F07171" />
            <path d="M-6,-8 C-7,-15 0,-17 0,-17 C0,-17 7,-15 6,-8 C4,-2 -4,-2 -6,-8 Z" fill="#FFA3A3" />
          </motion.g>
        )

      case 'cherry':
        return (
          <motion.g
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* 5 Petals */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.g
                key={i}
                transform={`rotate(${deg})`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.45 + i * 0.04 }}
              >
                <path
                  d="M0,0 C-8,-12 -8,-24 -3,-26 C-1,-27 0,-25 0,-24 C0,-25 1,-27 3,-26 C8,-24 8,-12 0,0 Z"
                  fill="#FF8DA1"
                />
              </motion.g>
            ))}
            {/* Center Core */}
            <circle cx="0" cy="0" r="4.5" fill="#FFF2F4" />
            <circle cx="0" cy="0" r="2.2" fill="#E8617D" />
          </motion.g>
        )

      case 'lotus':
        return (
          <motion.g
            initial={{ scale: 0, y: 10, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Outer Petals */}
            <path d="M-18,6 C-24,-6 -20,-18 -12,-20 C-8,-14 -6,-2 0,4 C-6,2 -12,4 -18,6 Z" fill="#D94B88" />
            <path d="M18,6 C24,-6 20,-18 12,-20 C8,-14 6,-2 0,4 C6,2 12,4 18,6 Z" fill="#D94B88" />
            {/* Mid Petals */}
            <path d="M-11,4 C-16,-8 -12,-24 0,-28 C-2,-16 -4,0 0,4 Z" fill="#F06292" />
            <path d="M11,4 C16,-8 12,-24 0,-28 C2,-16 4,0 0,4 Z" fill="#F06292" />
            {/* Central Crown */}
            <path d="M-6,2 C-8,-12 0,-30 0,-30 C0,-30 8,-12 6,2 Z" fill="#FF80AB" />
            {/* Center glow pistil */}
            <circle cx="0" cy="-6" r="3" fill="#FFE57F" />
          </motion.g>
        )

      case 'hibiscus':
        return (
          <motion.g
            initial={{ scale: 0, rotate: 20, opacity: 0 }}
            animate={{ scale: [0, 1.25, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* 5 Broad Rounded Petals */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.path
                key={i}
                d="M0,0 C-14,-10 -16,-28 0,-30 C16,-28 14,-10 0,0 Z"
                fill="#FF4081"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* Inner Ring */}
            <circle cx="0" cy="0" r="9" fill="#C2185B" />
            <circle cx="0" cy="0" r="5" fill="#880E4F" />
            {/* Golden Stamen Filament */}
            <path d="M0,0 L3,-22" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="3" cy="-23" r="3" fill="#FFC107" />
          </motion.g>
        )

      case 'daisy':
        return (
          <motion.g
            initial={{ scale: 0, rotate: -40, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* 10 White/Cream Petals */}
            {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg, i) => (
              <motion.ellipse
                key={i}
                cx="0"
                cy="-16"
                rx="4.2"
                ry="9.5"
                fill="#FFFFFF"
                stroke="#E0ECE0"
                strokeWidth="0.8"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* Golden Orange Center Button */}
            <circle cx="0" cy="0" r="8" fill="#FFA000" />
            <circle cx="0" cy="0" r="6" fill="#FFB300" />
            <circle cx="0" cy="0" r="3.5" fill="#FF8F00" />
          </motion.g>
        )

      case 'tulip':
        return (
          <motion.g
            initial={{ scale: 0, y: 10, opacity: 0 }}
            animate={{ scale: [0, 1.15, 1], y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Outer Petals */}
            <path d="M-15,-4 C-18,-18 -10,-28 -2,-26 C-4,-14 -4,-2 0,0 C-4,-2 -11,-2 -15,-4 Z" fill="#BA68C8" />
            <path d="M15,-4 C18,-18 10,-28 2,-26 C4,-14 4,-2 0,0 C4,-2 11,-2 15,-4 Z" fill="#BA68C8" />
            {/* Center Cup */}
            <path d="M-10,0 C-12,-16 0,-30 0,-30 C0,-30 12,-16 10,0 C6,8 -6,8 -10,0 Z" fill="#E1BEE7" />
            <path d="M-6,2 C-8,-14 0,-28 0,-28 C0,-28 8,-14 6,2 C4,7 -4,7 -6,2 Z" fill="#CE93D8" />
          </motion.g>
        )

      case 'sunflower':
        return (
          <motion.g
            initial={{ scale: 0, rotate: 35, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], rotate: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* 12 Radiant Golden Yellow Petals */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <path
                key={i}
                d="M0,0 C-4,-8 -5,-18 0,-21 C5,-18 4,-8 0,0 Z"
                fill="#FFC107"
                transform={`rotate(${deg})`}
              />
            ))}
            {/* Brown Seed Disc */}
            <circle cx="0" cy="0" r="7.5" fill="#5D4037" />
            <circle cx="0" cy="0" r="5" fill="#4E342E" />
          </motion.g>
        )

      default:
        return null
    }
  }

  return (
    <div className="blooming-flowers-container">
      <svg
        viewBox="-160 -240 320 280"
        className="blooming-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft Glow Filter */}
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Fresh Stem Linear Gradients */}
          <linearGradient id="freshStemGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2E6627" />
            <stop offset="50%" stopColor="#438B3A" />
            <stop offset="100%" stopColor="#72B565" />
          </linearGradient>

          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8FC881" />
            <stop offset="100%" stopColor="#3E7C33" />
          </linearGradient>

          {/* Bouquet Ribbon Wrap */}
          <linearGradient id="wrapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(214, 230, 212, 0.75)" />
            <stop offset="100%" stopColor="rgba(139, 168, 136, 0.45)" />
          </linearGradient>
        </defs>

        {/* Ambient floating pollen/sparkles */}
        {[-80, -45, -15, 25, 60, 95].map((x, idx) => (
          <motion.circle
            key={idx}
            cx={x}
            cy={-120 - (idx % 3) * 35}
            r={1.8 + (idx % 2)}
            fill="#FFF59D"
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [-10, -40],
              x: x + (idx % 2 === 0 ? 8 : -8)
            }}
            transition={{
              duration: 2.2,
              delay: 0.6 + idx * 0.2,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        ))}

        {/* Central Floral Stems and Leaves */}
        <g id="stemsAndFlowers">
          {flowerList.map((flower) => {
            const rad = (flower.angle * Math.PI) / 180
            const headX = Math.sin(rad) * flower.stemHeight
            const headY = -Math.cos(rad) * flower.stemHeight

            // Middle leaf position
            const midX = Math.sin(rad) * (flower.stemHeight * 0.52)
            const midY = -Math.cos(rad) * (flower.stemHeight * 0.52)

            return (
              <g key={flower.id}>
                {/* Growing Green Stem */}
                <motion.line
                  x1="0"
                  y1="15"
                  x2={headX}
                  y2={headY}
                  stroke="url(#freshStemGrad)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: flower.delay,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                />

                {/* Sprouting Green Leaves on Stem */}
                <motion.g
                  transform={`translate(${midX}, ${midY}) rotate(${flower.angle})`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: flower.delay + 0.3,
                    ease: 'easeOut'
                  }}
                >
                  {/* Left leaf */}
                  <path
                    d="M0,0 C-10,-5 -14,-14 -10,-18 C-4,-14 -2,-6 0,0 Z"
                    fill="url(#leafGrad)"
                  />
                  {/* Right leaf */}
                  <path
                    d="M0,0 C10,-5 14,-14 10,-18 C4,-14 2,-6 0,0 Z"
                    fill="url(#leafGrad)"
                  />
                </motion.g>

                {/* Top Blooming Flower Head */}
                <g transform={`translate(${headX}, ${headY})`}>
                  {renderFlowerHead(flower.type, flower.delay)}
                </g>
              </g>
            )
          })}
        </g>

        {/* Elegant Semi-Transparent Vase / Bouquet Wrapper (Image 2 Inspired) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          {/* Glass / Frost Prism Cone Vase */}
          <polygon
            points="-48,8 48,8 26,58 -26,58"
            fill="url(#wrapGrad)"
            stroke="#A3BEA0"
            strokeWidth="1.4"
          />

          {/* Stems crossing inside vase */}
          <line x1="-14" y1="12" x2="14" y2="48" stroke="#366F2F" strokeWidth="2.5" opacity="0.6" />
          <line x1="14" y1="12" x2="-14" y2="48" stroke="#366F2F" strokeWidth="2.5" opacity="0.6" />
          <line x1="0" y1="10" x2="0" y2="52" stroke="#438B3A" strokeWidth="2.5" opacity="0.6" />

          {/* Ribbon Heart Emblem (from Image 2) */}
          <motion.g
            transform="translate(0, 36)"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.25, 1] }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Heart badge */}
            <path
              d="M0,8 C-1,-1 -11,-1 -11,-7 C-11,-12 -5,-14 0,-9 C5,-14 11,-12 11,-7 C11,-1 1,-1 0,8 Z"
              fill="#E28743"
            />
            {/* Golden Ribbon Bow */}
            <ellipse cx="-4" cy="-4" rx="3.5" ry="2" fill="#FFCA28" transform="rotate(-20 -4 -4)" />
            <ellipse cx="4" cy="-4" rx="3.5" ry="2" fill="#FFCA28" transform="rotate(20 4 -4)" />
            <circle cx="0" cy="-4" r="2" fill="#FFA000" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  )
}
