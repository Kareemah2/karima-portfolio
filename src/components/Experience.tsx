import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Experience = () => (
  <section id="experience" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        number="04"
        label="Experience"
        title="Where I've"
        accent="been."
        intro="The experiences that have shaped how I approach technology, products and problem solving."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {content.experience.map((item, index) => (
          <Reveal key={item.company} delay={150 + index * 120}>
            <article className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 p-6">
              <p className="font-mono text-xs text-accent-ink">{item.year}</p>
              <p className="mt-1 text-xs text-muted">{item.type}</p>

              <h3 className="mt-8 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {item.role}
              </h3>
              <p className="mt-1.5 text-base text-muted">{item.company}</p>

              <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
