"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function Header({ locale, nav, labels }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);
  const trackRef = useRef(null);

  // Solid background + reading progress.
  // The bar is written straight to the DOM as a GPU transform once per frame — no React re-render,
  // no layout, no CSS transition lagging behind the scroll position.
  useEffect(() => {
    let raf = 0;
    // Scrollable distance is cached and only re-measured when the page or viewport changes size,
    // so a scroll frame reads nothing but scrollY (reading scrollHeight every frame forces layout).
    let max = 1;
    const measure = () => {
      max = document.documentElement.scrollHeight - window.innerHeight;
    };
    const update = () => {
      raf = 0;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (trackRef.current)
        trackRef.current.setAttribute(
          "aria-valuenow",
          String(Math.round(p * 100)),
        );
      setScrolled(window.scrollY > 24); // bails out when unchanged, so this rarely re-renders
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };
    // Page height also changes without a window resize (images loading, mobile menu, fonts).
    const ro = new ResizeObserver(onResize);
    ro.observe(document.body);

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = nav
      .map((n) => document.querySelector(n.href))
      .filter(Boolean);
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
  }, [nav]);

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
        solid
          ? "border-b border-line bg-surface/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center bg-fg font-display text-base text-surface">
            W
          </span>
          <span className="font-display text-xl text-fg">{site.shortName}</span>
          <span className="eyebrow hidden text-fg-muted sm:inline lg:hidden xl:inline">
            {labels.group}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-9">
            {nav.map((item, i) => {
              const last = i === nav.length - 1;
              const isActive = active === item.href;
              if (last) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="eyebrow bg-fg px-5 py-3 whitespace-nowrap text-surface transition-opacity hover:opacity-90"
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
                    className={`eyebrow group relative py-2 whitespace-nowrap transition-colors ${
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
            <li className="flex items-center gap-3">
              <LanguageSwitch
                locale={locale}
                hash={active}
                label={labels.language}
                nameClassName="hidden xl:inline"
              />
              <ThemeToggle labels={labels} />
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitch
            locale={locale}
            hash={active}
            label={labels.language}
            className="hidden sm:block"
          />
          <ThemeToggle labels={labels} />
          <button
            type="button"
            className="eyebrow flex items-center gap-3 text-fg"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? labels.close : labels.menu}
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
        ref={trackRef}
        className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5"
        role="progressbar"
        aria-label={labels.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <div ref={barRef} className="progress-fill h-full w-full" />
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
          <div className="mt-10 flex flex-col items-start gap-8 px-6">
            <LanguageSwitch
              locale={locale}
              hash={active}
              label={labels.language}
              align="left"
              className="sm:hidden"
            />
            <p className="eyebrow text-fg-subtle">Jakarta · Indonesia</p>
          </div>
        </nav>
      )}
    </header>
  );
}
