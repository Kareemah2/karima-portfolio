import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Skills = () => (
  <section id="skills" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        number="05"
        label="Skills"
        title="Tools I use"
        accent="to build."
        intro="A growing toolkit shaped by the projects I build and the problems I'm learning to solve."
      />

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {content.skills.map((group, index) => (
          <Reveal key={group.title} delay={150 + index * 100}>
            <div className="h-full rounded-[1.5rem] border border-ink/10 p-6">
              <p className="font-mono text-xs text-accent-ink">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 font-serif text-2xl text-ink">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-sand px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
