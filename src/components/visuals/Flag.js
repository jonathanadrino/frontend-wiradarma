// Small inline SVG flags (emoji flags render as plain letters on Windows).
// Both are drawn into the same 20×14 box with a hairline edge so white areas stay visible.

const flags = {
  // Indonesia — Merah Putih
  id: (
    <svg viewBox="0 0 3 2" preserveAspectRatio="none" className="h-full w-full">
      <rect width="3" height="1" fill="#ce1126" />
      <rect y="1" width="3" height="1" fill="#ffffff" />
    </svg>
  ),
  // United Kingdom — simplified Union Jack (no counterchange; identical at this size)
  gb: (
    <svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#ffffff" strokeWidth="6" />
      <path d="M0 0l60 30M60 0L0 30" stroke="#c8102e" strokeWidth="2" />
      <path d="M30 0v30M0 15h60" stroke="#ffffff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  ),
};

export default function Flag({ code, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-3.5 w-5 shrink-0 overflow-hidden shadow-[0_0_0_1px_var(--line)] ${className}`}
    >
      {flags[code]}
    </span>
  );
}
