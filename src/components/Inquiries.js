import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";
import Reveal from "@/components/Reveal";

export default function Inquiries({ t }) {
  const { inquiry } = t;
  return (
    <section id="inquiries" className="bg-surface">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10 lg:py-36">
        <Reveal className="lg:col-span-4">
          <SectionHeading eyebrow={inquiry.eyebrow} title={inquiry.header} />
          <p className="mt-8 max-w-sm leading-relaxed text-fg-muted">{inquiry.intro}</p>

          <p className="eyebrow mt-12 text-fg-subtle">{inquiry.stepsLabel}</p>
          <ol className="mt-4 border-t border-line">
            {inquiry.steps.map((s, i) => (
              <li key={s} className="flex gap-4 border-b border-line py-4 text-[15px] text-fg-muted">
                <span className="font-mono text-fg-subtle">{i + 1}.</span>
                {s}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7 lg:col-start-6">
          <div className="border border-line bg-surface-2">
            <div className="relative px-6 py-10 sm:px-10 sm:py-12">
              <InquiryForm locale={t.locale} inquiry={inquiry} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
