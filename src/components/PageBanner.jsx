import React from 'react'
import './PageBanner.css'

export default function PageBanner({ badge, title, subtitle }) {
  return (
    <div className="subpage-banner">
      <div className="subpage-banner-overlay" />
      <div className="container subpage-banner-content">
        {badge && (
          <div className="section-badge subpage-badge">
            <span>{badge}</span>
          </div>
        )}
        <h1 className="subpage-title">{title}</h1>
        {subtitle && <p className="subpage-subtitle">{subtitle}</p>}
      </div>
    </div>
  )
}
