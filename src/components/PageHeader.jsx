import React from "react";

export function PageHeader({
  bgImage,
  title,
  children,
}) {
  return (
    <section className="relative flex min-h-[280px] sm:min-h-[340px] lg:min-h-[380px] items-center justify-center overflow-hidden border-b border-[#183622] bg-[#0d2315] pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 text-white text-center">
      {/* Background Image with Ambient Overlays */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title || "Background Banner"}
            className="h-full w-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-105"
            loading="eager"
          />
          {/* Multi-layer atmospheric dark gradients for maximum text legibility & landscape immersion */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08170e]/95 via-[#08170e]/50 to-[#08170e]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.75)_100%)]" />
        </div>
      )}

      {/* Foreground Content - Centered */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 text-center">
        {children ? (
          children
        ) : (
          <h1 className="mx-auto max-w-3xl font-display text-[clamp(1.85rem,3.8vw,3.2rem)] font-bold leading-tight tracking-tight text-white drop-shadow-lg text-center">
            {title}
          </h1>
        )}
      </div>
    </section>
  );
}

export default PageHeader;
