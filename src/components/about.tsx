import { employers, site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            03 — About
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Commercial operations first. AI as a working habit.
          </h2>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          <p>
            I build B2B go-to-market and sales systems that connect the right
            market, message, and outreach with qualified pipeline.
          </p>
          <p>
            The spine is lifelong BPO and commercial operations. Inside sales,
            SDR delivery, and AI-assisted outbound sit on top of that. I am not
            an ML engineer. I am the person who stands up the engine, then runs
            it.
          </p>
          <p>
            Nights I use Claude Code, Codex, Clay, and the rest of the sales
            stack to stand up automations. I am not a Node or Python engineer.
            AI writes the glue. I run the engine. T-Rex Michigan and TRSportS
            are the two shops I can name. They are mine. Past employer accounts
            are not.
          </p>
          <p className="text-sm text-subtle">
            {site.education}. {site.languages[0]} native. {site.languages[1]}{" "}
            professional. {site.languages[2]} conversational. Based in{" "}
            {site.location}.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
          Path
        </p>
        <ol className="mt-6 divide-y divide-border border-y border-border">
          {employers.map((job) => (
            <li
              key={`${job.org}-${job.dates}`}
              className="grid gap-2 py-5 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] sm:items-baseline sm:gap-6"
            >
              <div>
                <p className="text-fg">{job.org}</p>
                <p className="text-sm text-muted">{job.title}</p>
              </div>
              <p className="text-sm text-muted">{job.note}</p>
              <p className="font-mono text-xs text-subtle sm:text-right">
                {job.dates}
                <span className="mt-1 block">{job.place}</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
