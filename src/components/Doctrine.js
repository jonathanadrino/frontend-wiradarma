import { doctrine } from "@/content/site";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Photo from "@/components/Photo";
import { photos } from "@/assets/images";

export default function Doctrine() {
  const [lead, rest] = doctrine.paragraphs;
  return (
    <section id="doctrine" className="bg-surface text-fg">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading eyebrow={doctrine.eyebrow} title={doctrine.header} />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-10 text-xl leading-relaxed font-light text-fg sm:text-[1.4rem]">{lead}</p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-[17px] leading-[1.8] text-fg-muted">{rest}</p>
            </Reveal>

            {/* What the firm protects — stated plainly */}
            <Reveal delay={220} className="mt-12 grid border-t border-line sm:grid-cols-3">
              {doctrine.tenets.map((t, i) => (
                <div
                  key={t}
                  className={`py-5 ${i > 0 ? "border-t border-line sm:border-t-0 sm:border-l sm:pl-6" : ""}`}
                >
                  <p className="font-display text-xl tracking-[-0.02em] text-fg">{t}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:col-span-5 lg:pt-24">
            <Photo
              photo={photos.contract}
              sizes="(min-width: 1024px) 40vw, 100vw"
              tintOpacity={0.35}
              className="aspect-4/3 lg:aspect-4/5"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
