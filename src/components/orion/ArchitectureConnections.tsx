export default function ArchitectureConnections() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1200 1200"
      preserveAspectRatio="none"
    >
      {/* Users → Authentication */}

      <line
        x1="600"
        y1="170"
        x2="600"
        y2="290"
        stroke="rgba(255,255,255,.15)"
        strokeWidth="2"
      />

      {/* Authentication → Orion */}

      <line
        x1="600"
        y1="430"
        x2="600"
        y2="580"
        stroke="rgba(255,255,255,.15)"
        strokeWidth="2"
      />
    </svg>
  );
}