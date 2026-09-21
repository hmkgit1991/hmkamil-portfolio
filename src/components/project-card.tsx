import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ProjectCover } from "@/components/project-cover";

type Props = {
  project: Project;
  open: boolean;
  onToggle: () => void;
};

export function ProjectCard({ project, open, onToggle }: Props) {
  return (
    <article
      className={cn(
        "group relative flex min-h-72 flex-col overflow-hidden rounded-xl bg-surface",
        "shadow-border transition-[box-shadow,transform] duration-200 ease-out",
        "hover:shadow-border-hover focus-within:shadow-border-hover",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="relative flex min-h-72 flex-1 flex-col text-left"
      >
        <ProjectCover cover={project.cover} className="h-52 w-full" />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-subtle">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-[0.14em] text-muted">
              {project.category} · {project.year}
            </span>
          </div>
          <h3 className="font-display text-2xl leading-tight text-fg">
            {project.title}
          </h3>
          <p className="text-sm text-muted">{project.role}</p>
        </div>

        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-end bg-bg/92 p-5",
            "transition-[opacity,transform] duration-200 ease-out",
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0",
            "md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100",
            "md:group-focus-within:pointer-events-auto md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100",
          )}
        >
          <span className="font-mono text-xs tracking-[0.18em] text-subtle">
            {project.number}
          </span>
          <h3 className="mt-3 font-display text-2xl leading-tight">
            {project.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-fg/90">
            {project.hover}
          </p>
          {!project.named ? (
            <p className="mt-2 text-xs text-subtle">
              Client names withheld under employer policy.
            </p>
          ) : null}
        </div>
      </button>

      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-bg/70 text-fg shadow-border transition-[background-color,transform] duration-150 hover:bg-accent hover:text-accent-fg"
          aria-label={`Open ${project.hrefLabel ?? project.title}`}
        >
          <ArrowUpRight className="size-4" />
        </a>
      ) : null}
    </article>
  );
}
