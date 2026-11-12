// Thin-line blueprint glyphs, one per capability.

const paths = {
  // Title deed with seal — distressed asset / title clearing
  deed: (
    <>
      <path d="M14 6h22l8 8v30H14z" />
      <path d="M36 6v8h8" />
      <path d="M20 18h12M20 23h18M20 28h18M20 33h10" strokeOpacity="0.6" />
      <circle cx="36" cy="38" r="5" />
      <path d="M33 42l-1.5 6 4.5-2.5 4.5 2.5L39 42" />
    </>
  ),
  // Cadastral parcels with a survey marker — spatial / zoning compliance
  zoning: (
    <>
      <path d="M6 10h40v34H6z" />
      <path d="M6 24h18l6-14M24 24v20M24 30h22M34 30l4-20" strokeOpacity="0.6" />
      <circle cx="30" cy="24" r="2.5" />
      <path d="M30 17v-3M30 34v-3M23 24h-3M40 24h-3" />
    </>
  ),
  // Reticle — threat calibration / risk
  reticle: (
    <>
      <circle cx="26" cy="26" r="17" />
      <circle cx="26" cy="26" r="9" strokeOpacity="0.6" />
      <path d="M26 3v12M26 37v12M3 26h12M37 26h12" />
      <circle cx="26" cy="26" r="1.5" fill="currentColor" />
    </>
  ),
  // WF beam in isometric — project command / material integrity
  beam: (
    <>
      <path d="M8 14h22v4h-9v16h9v4H8v-4h9V18H8z" />
      <path d="M30 14l14-6M30 38l14-6M44 8v24" strokeOpacity="0.6" />
      <path d="M8 14l14-6h22" strokeOpacity="0.6" />
    </>
  ),
};

export default function CapabilityIcon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 52 52"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
