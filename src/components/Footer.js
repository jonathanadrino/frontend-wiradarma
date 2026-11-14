import { site } from "@/content/site";

async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer({ t }) {
  const { nav, footer } = t;
  const year = await currentYear();
  return (
    <footer data-theme="dark" className="relative overflow-hidden border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center bg-fg font-display text-xl text-surface">W</span>
              <p className="font-display text-2xl text-fg">{site.name}</p>
            </div>
            <p className="mt-6 max-w-sm leading-relaxed text-fg-muted">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-7">
            <p className="eyebrow text-fg-subtle">{footer.sections}</p>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-fg-muted transition-colors hover:text-fg">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow text-fg-subtle">{footer.office}</p>
            <address className="mt-6 space-y-3 text-fg-muted not-italic">
              <p>{footer.location}</p>
              <p>
                <a href="#inquiries" className="border-b border-fg/30 pb-0.5 text-fg transition-colors hover:border-fg">
                  {footer.contact}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Legal bar */}
        <div className="flex flex-col gap-4 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-fg-subtle">
            © {year} {site.name}. {footer.rights}
          </p>
          <a
            href="#top"
            className="eyebrow group flex items-center gap-3 text-fg-muted transition-colors hover:text-fg"
          >
            {footer.top}
            <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
