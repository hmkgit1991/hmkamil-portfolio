import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, stats } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:pb-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
            {site.location} · {site.availability}
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em] text-fg">
            {site.name}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            I stand up commercial engines, then I run them. Lifelong BPO and
            sales operations. Two live US shops this month, under my own name.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#work">Selected work</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                Write
                <ArrowDown className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <aside className="flex flex-col justify-end gap-8 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="font-display text-2xl leading-snug text-fg">
            GTM. Inside sales. SDR delivery. Shops that actually ship.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Automation is a habit I productize. Not an ML-engineer costume.
            Most past client names stay off this page. That is the deal I keep.
          </p>
        </aside>
      </div>

      <div className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={cnStat(i)}
            >
              <p className="font-display text-3xl tracking-tight text-fg sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 max-w-[12rem] text-xs leading-relaxed text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cnStat(index: number) {
  const edges =
    index === 0
      ? ""
      : index === 1
        ? "border-l border-border"
        : index === 2
          ? "border-t border-border sm:border-l sm:border-t-0"
          : "border-l border-t border-border sm:border-t-0";
  return `px-5 py-8 sm:px-8 ${edges}`;
}
