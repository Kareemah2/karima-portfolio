import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Services = () => (
  <section id="services" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-28">
    <div className="mx-auto max-w-6xl">
      <SectionHeading number="02" label="Services" title="What I can" accent="build for you." />

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {content.services.map((service, index) => (
          <Reveal key={service.title} delay={150 + index * 100}>
            <article className="h-full rounded-[1.5rem] border border-ink/10 p-6 sm:p-7">
              <span className="font-mono text-xs text-accent-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-12 font-serif text-3xl leading-tight text-ink">{service.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted">{service.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
