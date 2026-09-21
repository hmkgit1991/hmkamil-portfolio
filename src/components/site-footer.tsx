import { site, nav } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-fg">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            GTM, sales operations, and live commerce from Dhaka. Two named
            clients. The rest is systems I can talk about without breaking a
            policy.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-subtle">
            On this page
          </p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-muted hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-subtle">
            Direct
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="text-muted hover:text-fg">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="text-muted hover:text-fg">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted hover:text-fg"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {site.name}. Dhaka.
          </p>
          <p>Issue 01 · Personal work, not a client roster.</p>
        </div>
      </div>
    </footer>
  );
}
