import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

// Executive Command — written as a plain article: heading, lead, prose, and a quiet fact summary.
export default function Principal({ t }) {
  const { principal } = t;
  return (
    <section id="principal" className="bg-surface-3">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow={principal.eyebrow} title={principal.header} />
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-10 text-xl leading-relaxed font-light text-fg sm:text-[1.4rem]">{principal.body}</p>
            </Reveal>

            <Reveal delay={160} className="mt-8 space-y-6 border-t border-line pt-8">
              {principal.article.map((para) => (
                <p key={para.slice(0, 32)} className="text-[17px] leading-[1.8] text-fg-muted">
                  {para}
                </p>
              ))}
            </Reveal>
          </article>

          <Reveal delay={220} as="aside" className="lg:col-span-4 lg:col-start-9 lg:pt-28">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-fg-subtle">{principal.summaryLabel}</p>
              <dl className="mt-5 border-t border-line">
                {principal.summary.map((s) => (
                  <div key={s.label} className="border-b border-line py-4">
                    <dt className="eyebrow text-fg-subtle">{s.label}</dt>
                    <dd className="mt-1.5 text-[15px] leading-relaxed text-fg">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
