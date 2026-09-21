import { useMemo, useState } from "react";
import {
  categories,
  projects,
  type ProjectCategory,
} from "@/lib/site";
import { ProjectCard } from "@/components/project-card";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="work" className="scroll-mt-24 border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              02 — Selected work
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Named where I can. Systems where I cannot.
            </h2>
            <p className="mt-4 text-muted">
              T-Rex Michigan and TRSportS are my clients. Everything else was
              employer work. Those account names stay off this site.
            </p>
          </div>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
          role="tablist"
          aria-label="Filter work by category"
        >
          {categories.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setFilter(cat);
                  setOpenId(null);
                }}
                className={cn(
                  "h-11 shrink-0 rounded-full px-4 text-sm transition-[background-color,color,box-shadow] duration-150",
                  active
                    ? "bg-accent text-accent-fg"
                    : "text-muted shadow-border hover:text-fg hover:shadow-border-hover",
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              open={openId === project.id}
              onToggle={() =>
                setOpenId((id) => (id === project.id ? null : project.id))
              }
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-subtle md:hidden">
          Tap a card to read the short description.
        </p>
      </div>
    </section>
  );
}
