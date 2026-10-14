import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { content } from "../data/content";
import { SectionHeading } from "./SectionHeading";

const VISIBLE = 4;

export const Learning = () => {
  const { learning, certificates } = content;
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? learning : learning.slice(0, VISIBLE);

  return (
    <section id="learning" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="06"
          label="AI Learning"
          title="Learning to build"
          accent="with AI."
          intro="Training from my FlyRank internship: practical AI workflows, Claude development and agents."
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {shown.map((item, i) => (
            <li key={item.title} className="rounded-2xl border border-ink/10 p-5">
              <p className="font-mono text-xs text-accent-ink">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 font-serif text-xl leading-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            </li>
          ))}
        </ul>

        {learning.length > VISIBLE && (
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
            className="mt-6 text-sm font-medium text-muted transition-colors hover:text-accent-ink"
          >
            {showAll ? "Show fewer" : `Show all ${learning.length} courses`}
          </button>
        )}

        {certificates.length > 0 && (
          <div className="mt-14 border-t border-ink/10 pt-8">
            <h3 className="font-serif text-3xl text-ink">Certificates</h3>
            <ul className="mt-5 divide-y divide-ink/10">
              {certificates.map((c) => (
                <li key={c.file}>
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 py-4 text-ink transition-colors hover:text-accent-ink"
                  >
                    <span>{c.title}</span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted">
                      View
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
