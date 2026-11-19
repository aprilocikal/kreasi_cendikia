import React from "react";
import ServicesCatalog from "../components/ServicesCatalog";

export default function ServicesPage() {
  return (
    <div className="bg-[var(--bg-canvas)] pt-16 sm:pt-20 lg:pt-24 pb-12">
      {/* Main Services Catalog (Directly from official company profile PDF) */}
      <ServicesCatalog />
    </div>
  );
}
