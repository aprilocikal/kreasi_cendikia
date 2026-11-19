import React from "react";
import Interactive3DViewer from "../components/Interactive3DViewer";

export default function Model3DPage() {
  return (
    <div className="bg-[var(--bg-canvas)] pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Main 3D Canvas & Feature Matrix */}
      <Interactive3DViewer />
    </div>
  );
}
