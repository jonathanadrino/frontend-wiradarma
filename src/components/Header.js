"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Solid background + reading progress
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = nav.map((n) => document.querySelector(n.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        solid ? "border-b border-line bg-surface/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center bg-fg font-display text-base text-surface">W</span>
          <span className="font-display text-xl text-fg">{site.shortName}</span>
          <span className="eyebrow hidden text-fg-muted sm:inline">Group</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {nav.map((item, i) => {
              const last = i === nav.length - 1;
              const isActive = active === item.href;
              if (last) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="eyebrow bg-fg px-5 py-3 text-surface transition-opacity hover:opacity-90"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`eyebrow group relative py-2 transition-colors ${
                      isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-fg transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-5 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="eyebrow flex items-center gap-3 text-fg"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
            <span className="relative block h-2.5 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-fg transition-transform ${open ? "top-1 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-fg transition-transform ${open ? "top-1 -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Reading progress */}
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
      >
        <div className="progress-fill h-full" style={{ width: `${progress * 100}%` }} />
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fade-in h-[calc(100dvh-4.5rem)] border-t border-line bg-surface lg:hidden"
        >
          <ul className="flex flex-col px-6 pt-6">
            {nav.map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-6 font-display text-3xl text-fg"
                >
                  {item.label}
                  <span className="eyebrow text-fg-subtle">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10 px-6 text-fg-subtle">Jakarta · Indonesia</p>
        </nav>
      )}
    </header>
  );
}
