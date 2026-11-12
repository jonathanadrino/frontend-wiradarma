import { hero, site } from "@/content/site";
import Photo from "@/components/Photo";
import { photos } from "@/assets/images";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden bg-surface">
      {/* Backdrop: structural-steel photograph (slow push-in), optional video */}
      <div className="absolute inset-0 -z-10">
        <Photo
          photo={photos.hero}
          preload
          tintOpacity={0.4}
          className="absolute inset-0 animate-drift"
          imgClassName="-scale-x-100 object-[30%_40%] brightness-95"
        />
        {site.heroVideo && (
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale"
            src={site.heroVideo}
            poster={site.heroPoster ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-surface/70 via-surface/10 to-surface" />
        <div className="absolute inset-0 bg-linear-to-r from-surface/85 via-surface/40 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pt-36 pb-14 lg:px-10 lg:pb-16">
        <p className="eyebrow fade-in text-fg-muted">{hero.eyebrow}</p>

        <h1 className="mt-6 max-w-6xl font-display text-[2.5rem] leading-none tracking-[-0.04em] text-fg sm:text-6xl lg:text-[4.9rem]">
          <span className="sr-only">{hero.headline}</span>
          <span aria-hidden="true">
            {hero.headlineLines.map((line, i) => (
              <span key={line} className="line-mask">
                <span style={{ animationDelay: `${150 + i * 140}ms` }}>{line}</span>
              </span>
            ))}
          </span>
        </h1>

        <div className="fade-in mt-10 grid gap-10 [animation-delay:600ms] lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-base leading-relaxed font-light text-fg-muted sm:text-lg lg:col-span-7">
            {hero.subheadline}
          </p>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <a
              href={hero.cta.href}
              className="group inline-flex items-center gap-4 bg-fg px-7 py-4 text-sm font-medium tracking-[0.12em] whitespace-nowrap text-surface uppercase transition-opacity hover:opacity-90 sm:gap-6 sm:px-8"
            >
              {hero.cta.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Key figures */}
      <div className="fade-in border-t border-line bg-surface/60 backdrop-blur-sm [animation-delay:900ms]">
        <dl className="mx-auto grid max-w-7xl px-6 sm:grid-cols-3 lg:px-10">
          {hero.stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse justify-end gap-2 py-6 lg:py-8 ${
                i > 0 ? "border-t border-line sm:border-t-0 sm:border-l sm:pl-8" : ""
              }`}
            >
              <dt className="eyebrow text-fg-subtle">{s.label}</dt>
              <dd className="font-display text-3xl text-fg tabular-nums sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
