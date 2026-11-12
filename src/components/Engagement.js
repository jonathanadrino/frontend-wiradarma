import { engagement } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

// Rules of Engagement — rigid typography, open layout: no boxed cards, spacing does the separating.

const label = "font-mono text-[11px] font-medium uppercase tracking-[0.18em]";
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);

function Mark({ ok }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={`mt-1 h-3.5 w-3.5 shrink-0 ${ok ? "text-fg" : "text-fg-subtle"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      {ok ? <path d="M2 6.2l2.6 2.6L10 3.4" /> : <path d="M3 3l6 6M9 3l-6 6" />}
    </svg>
  );
}

export default function Engagement() {
  const { terms, eligibility } = engagement;

  return (
    <section id="engagement" className="bg-surface-2 text-fg">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        {/* Heading + statement */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow={engagement.eyebrow} title={engagement.header} />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:pt-16">
            <p className="text-lg leading-[1.7] font-light text-fg-muted sm:text-xl">{engagement.body}</p>
          </Reveal>
        </div>

        {/* Four rules — open columns, no boxes */}
        <ol className="mt-20 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {terms.map((t, i) => {
            const numeric = t.value.length <= 3;
            return (
              <Reveal as="li" key={t.label} delay={i * 80} className="flex flex-col">
                <p className={`${label} text-fg-subtle`}>{t.label}</p>

                {/* Fixed-height row so word values and numeric values share one baseline */}
                <p className="mt-4 flex h-20 items-end gap-3 lg:h-24">
                  <span
                    className={`leading-none font-medium tracking-[-0.04em] tabular-nums ${
                      numeric ? "text-7xl lg:text-[5.5rem]" : "text-4xl lg:text-[2.6rem]"
                    }`}
                  >
                    {t.value}
                  </span>
                  <span className={`${label} pb-1 text-fg-muted`}>{t.unit}</span>
                </p>

                <div className="mt-6 h-0.75 w-8 bg-fg" />
                <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-fg-muted">{t.detail}</p>
              </Reveal>
            );
          })}
        </ol>

        {/* Minimum term + eligibility */}
        <div className="mt-24 grid gap-16 lg:grid-cols-12">
          {/* 12-month minimum term — neon segments fill left-to-right once revealed */}
          <Reveal className="lg:col-span-7">
            <div className={`${label} flex items-center justify-between text-fg-subtle`}>
              <span>Minimum Term</span>
              <span>12 Months</span>
            </div>

            <div className="mt-8 grid grid-cols-12 gap-1">
              {MONTHS.map((m) => (
                <div key={m}>
                  <div className="h-10 bg-line sm:h-12">
                    <div
                      className="tl-seg h-full"
                      style={{
                        transitionDelay: `${300 + m * 60}ms`,
                        backgroundPosition: `${((m - 1) / 11) * 100}% 0`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-center font-mono text-[10px] text-fg-subtle tabular-nums">
                    {String(m).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start justify-between gap-6 text-sm">
              <div>
                <p className={`${label} text-fg`}>Month 01</p>
                <p className="mt-1 text-fg-muted">Mandate commences</p>
              </div>
              <div className="text-right">
                <p className={`${label} text-fg`}>Month 12</p>
                <p className="mt-1 text-fg-muted">Minimum term fulfilled</p>
              </div>
            </div>
          </Reveal>

          {/* Eligibility */}
          <Reveal delay={120} className="grid gap-10 sm:grid-cols-2 lg:col-span-5">
            <div>
              <p className={`${label} text-fg`}>We work with</p>
              <ul className="mt-5 space-y-3">
                {eligibility.accepted.map((a) => (
                  <li key={a} className="flex gap-3 text-[15px] leading-snug">
                    <Mark ok />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`${label} text-fg-subtle`}>We decline</p>
              <ul className="mt-5 space-y-3">
                {eligibility.declined.map((d) => (
                  <li key={d} className="flex gap-3 text-[15px] leading-snug text-fg-muted">
                    <Mark ok={false} />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Closing line */}
        <Reveal className="mt-20 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className={`${label} text-fg-subtle`}>All terms apply to every mandate</p>
          <a
            href="#inquiries"
            className="group inline-flex items-center justify-between gap-4 bg-fg px-7 py-4 text-sm font-medium tracking-[0.12em] text-surface uppercase transition-opacity hover:opacity-90"
          >
            Request Engagement Terms
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
