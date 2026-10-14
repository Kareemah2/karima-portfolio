import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const Testimonials = () => {
  const items = content.testimonials;
  if (!items || items.length === 0) return null;

  return (
    <section id="testimonials" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="Kind words" title="What people" accent="say." />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((t, index) => (
            <Reveal key={`${t.name}-${index}`} delay={150 + index * 100}>
              <figure className="h-full rounded-[1.5rem] border border-ink/10 p-6">
                <blockquote className="font-serif text-xl leading-snug text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  <span className="font-medium text-ink">{t.name}</span>
                  {t.role ? `, ${t.role}` : ""}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
