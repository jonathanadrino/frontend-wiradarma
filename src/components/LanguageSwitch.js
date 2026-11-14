"use client";

import { useEffect, useId, useRef, useState } from "react";
import { locales } from "@/content/locales";
import Flag from "@/components/visuals/Flag";

// Language dropdown: flag + language name. Each language is its own page, so the options are plain
// links (a full page load between the two root layouts). The section being read is kept via `hash`.
// `nameClassName` lets the header hide the name on the button where space is tight (the list always shows it);
// `align` decides which edge the list opens from.
export default function LanguageSwitch({
  locale,
  hash = "",
  label,
  nameClassName = "",
  align = "right",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listId = useId();
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  // Close on outside click / Escape while open
  useEffect(() => {
    if (!open) return;
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className={`relative ${className}`}
      onBlur={(e) => {
        // Close when keyboard focus leaves the whole control
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${current.name}`}
        title={label}
        onClick={() => setOpen((v) => !v)}
        className={`flex h-9 items-center gap-2.5 border px-3 text-fg transition-colors hover:border-fg ${
          open ? "border-fg" : "border-line"
        }`}
      >
        <Flag code={current.flag} />
        <span
          className={`text-[13px] font-medium whitespace-nowrap ${nameClassName}`}
        >
          {current.name}
        </span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className={`h-3 w-3 text-fg-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" />
        </svg>
      </button>

      {open && (
        <ul
          id={listId}
          aria-label={label}
          className={`lang-pop absolute top-full ${align === "left" ? "left-0" : "right-0"} z-10 mt-2 min-w-56 border border-line bg-raise py-1.5 shadow-[0_18px_40px_-16px_rgb(15_27_45/0.28)]`}
        >
          {locales.map((l) => {
            const selected = l.code === current.code;
            return (
              <li key={l.code}>
                <a
                  href={`${l.path}${hash}`}
                  hrefLang={l.code}
                  lang={l.code}
                  aria-current={selected ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-surface-2 ${
                    selected ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  <Flag code={l.flag} />
                  <span className="flex-1 whitespace-nowrap">{l.name}</span>
                  {selected && (
                    <svg
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M2 6.2l2.6 2.6L10 3.4" />
                    </svg>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
