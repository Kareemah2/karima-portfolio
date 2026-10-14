import { ArrowUpRight } from "lucide-react";
import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Projects = () => (
  <section id="projects" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        number="03"
        label="Projects"
        title="Things I've"
        accent="built."
        intro="A selection of projects where I've experimented with interfaces, APIs, data and modern frontend technologies."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, index) => {
          const links = [
            { label: "Live demo", href: project.live },
            { label: "GitHub", href: project.github },
            { label: "Case study", href: project.figma },
          ].filter((l) => l.href);

          return (
            <Reveal key={project.title} delay={150 + index * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-ink/75 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100 lg:flex">
                    {links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-paper/60 bg-paper px-4 py-2.5 text-xs font-medium text-ink transition-transform duration-300 hover:scale-105"
                      >
                        {l.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-accent-ink">
                        {project.category}
                        {project.role ? ` · ${project.role}` : ""}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-ink transition-colors duration-300 group-hover:text-accent-ink">
                        {project.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">{project.description}</p>

                  {project.outcome && (
                    <p className="mt-3 text-sm leading-7 text-muted">
                      <span className="font-medium text-ink">Outcome: </span>
                      {project.outcome}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-sand px-3 py-1.5 text-xs font-medium text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-4 border-t border-ink/10 pt-4 lg:hidden">
                    {links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent-ink"
                      >
                        {l.label}
                        <ArrowUpRight size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={400}>
        <div className="mt-10 text-center">
          <a
            href={content.profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
          >
            Explore more on GitHub
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
