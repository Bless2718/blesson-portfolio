"use client";

import ArchitectureCard from "./ArchitectureCard";

export default function ArchitectureCanvas() {
  return (
    <div className="w-full max-w-3xl">
      <div className="flex justify-center">
        <ArchitectureCard
          title="Next.js Dashboard"
          subtitle="Upload • Explore • Visualize"
        />
      </div>

      <div className="mx-auto h-12 w-px bg-blue-500/40" />

      <div className="grid grid-cols-3 gap-6">
        <ArchitectureCard
          title="Analytics"
          subtitle="Dataset Intelligence"
          delay={0.1}
        />

        <ArchitectureCard
          title="Forecasting"
          subtitle="ARIMA • XGBoost"
          delay={0.2}
        />

        <ArchitectureCard
          title="Hotspot Maps"
          subtitle="Interactive Geospatial Views"
          delay={0.3}
        />
      </div>

      <div className="mx-auto h-12 w-px bg-blue-500/40" />

      <div className="flex justify-center">
        <ArchitectureCard
          title="FastAPI Intelligence Layer"
          subtitle="Predictions • APIs • Sentinel Chat"
          delay={0.4}
        />
      </div>

      <div className="mx-auto h-12 w-px bg-blue-500/40" />

      <div className="flex justify-center">
        <ArchitectureCard
          title="Data & Model Layer"
          subtitle="PostgreSQL • Python • Google GenAI"
          delay={0.5}
        />
      </div>
    </div>
  );
}
