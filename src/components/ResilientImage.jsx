import React, { useState } from "react";
import { Leaf } from "lucide-react";

export function ResilientImage({
  src,
  alt,
  className = "w-full h-full object-cover",
  containerClassName = "",
  fallbackTitle,
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#e6efe4] via-[#eef4ec] to-[#d8e5d5] p-6 text-center text-[#1b2a20] ${containerClassName}`}
      >
        <Leaf className="h-7 w-7 text-[#415346] opacity-70" strokeWidth={1.5} />
        <span className="font-display text-sm font-medium text-[#1b2a20]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}

export default ResilientImage;
