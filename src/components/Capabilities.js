import { capabilities } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CapabilityIcon from "@/components/visuals/CapabilityIcon";
import Photo from "@/components/Photo";
import { photos } from "@/assets/images";

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-surface-2">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow={capabilities.eyebrow} title={capabilities.header} />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6">
            <p className="max-w-md text-lg leading-relaxed font-light text-fg-muted lg:ml-auto">{capabilities.intro}</p>
          </Reveal>
        </div>

        {/* Structural steel photograph */}
        <Reveal className="mt-16">
          <Photo
            photo={photos.hBeam}
            sizes="(min-width: 1280px) 1200px, 100vw"
            tintOpacity={0.5}
            className="aspect-4/3 sm:aspect-3/1"
            imgClassName="brightness-90"
          />
        </Reveal>

        <ol className="mt-16 grid gap-x-16 gap-y-16 md:grid-cols-2 lg:mt-20 lg:gap-y-20">
          {capabilities.items.map((c, i) => (
            <Reveal as="li" key={c.title} delay={(i % 2) * 120} className="flex flex-col">
              <CapabilityIcon name={c.icon} className="h-11 w-11 text-fg-muted" />
              <h3 className="mt-6 font-display text-[1.75rem] leading-[1.1] tracking-[-0.03em] text-fg lg:text-[2rem]">
                {c.title}
              </h3>
              <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-fg-muted">{c.body}</p>

              <dl className="mt-6 max-w-lg space-y-2 text-sm leading-relaxed">
                {c.terms.map((t) => (
                  <div key={t.abbr} className="flex gap-3">
                    <dt className="w-20 shrink-0 font-mono font-medium text-fg">{t.abbr}</dt>
                    <dd className="text-fg-subtle">{t.meaning}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
