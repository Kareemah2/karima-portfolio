import { ArrowUpRight } from "lucide-react";
import { content } from "../data/content";
import { Reveal } from "./Reveal";

export const About = () => {
  const { about1, about2 } = content.profile;

  return (
    <section id="about" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-ink">
              01 — About
            </p>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Building with curiosity,
                <br />
                <span className="italic text-accent-ink">learning with purpose.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">{about1}</p>
                <p className="text-base leading-7 text-muted sm:text-lg sm:leading-8">{about2}</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="#experience"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-accent-ink"
              >
                More about my experience
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
