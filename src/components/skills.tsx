import { skillGroups, tools } from "@/lib/site";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          04 — Skills
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
          What I actually run.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Tools I actually use for GTM, outbound, and automation. Not a developer stack.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-2xl text-fg">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            Stack I reach for
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full px-4 py-2 text-sm text-fg shadow-border"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
