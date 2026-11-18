import React from "react";

export function PageHeader({
  bgImage,
  badgeIcon,
  badgeText,
  title,
  subtitle,
  children,
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#183622] bg-[#0d2315] py-14 lg:py-20 text-white">
      {/* Background Image with Ambient Overlays */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title || "Background Banner"}
            className="h-full w-full object-cover object-center filter brightness-[0.75] contrast-[1.1] scale-105"
            loading="eager"
          />
          {/* Multi-layer atmospheric dark gradients for maximum text legibility & landscape feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08170e]/95 via-[#0d2315]/85 to-[#08170e]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08170e]/90 via-transparent to-[#08170e]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(46,181,86,0.18),transparent_65%)]" />
        </div>
      )}

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="max-w-3xl">
          {children ? (
            children
          ) : (
            <>
              {badgeText && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/95 backdrop-blur-md uppercase tracking-wider shadow-xs">
                  {badgeIcon}
                  <span>{badgeText}</span>
                </div>
              )}
              <h1 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight text-white drop-shadow-xs">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-4 text-base leading-relaxed text-stone-200/90 sm:text-lg">
                  {subtitle}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
