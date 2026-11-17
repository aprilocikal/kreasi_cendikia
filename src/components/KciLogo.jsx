import React from 'react'

export default function KciLogo({ size = 42, showText = true, light = false }) {
  const primaryGreen = light ? '#A4C2A5' : '#0EA14B'
  const accentGreen = light ? '#C8DBC8' : '#22C55E'
  const textColor = light ? '#F9F7F2' : '#1E281D'
  const subTextColor = light ? '#D6E6D4' : '#0EA14B'

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.32 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 6px rgba(14, 161, 75, 0.2))' }}
      >
        {/* Left 'K' Stem */}
        <rect x="14" y="15" width="22" height="90" rx="3" fill={primaryGreen} />
        
        {/* Left 'K' Slanted Top Wing */}
        <polygon points="36,46 56,15 78,15 50,56" fill={primaryGreen} />
        
        {/* Left 'K' Slanted Bottom Leg */}
        <polygon points="46,54 78,105 56,105 34,68" fill={primaryGreen} />

        {/* Middle Chevron / Forward Element */}
        <polygon points="86,15 106,15 76,60 106,105 86,105 58,60" fill={primaryGreen} />

        {/* Right Arrow / Top Accent Slash */}
        <polygon points="112,15 142,15 116,56 94,56" fill={accentGreen} />
        
        {/* Subtle shadow accent */}
        <polygon points="98,66 122,105 102,105 82,72" fill={accentGreen} />
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: size * 0.38,
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: subTextColor,
              textTransform: 'uppercase'
            }}
          >
            CV. KREASI CENDIKIA
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: size * 0.44,
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: textColor,
            }}
          >
            INDONESIA
          </span>
          <span
            style={{
              fontSize: size * 0.22,
              fontWeight: 600,
              color: light ? '#C1D7BE' : '#6E7E6D',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: 2
            }}
          >
            Landscape Consultant & Contractor
          </span>
        </div>
      )}
    </div>
  )
}
