import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const About = () => {
  return (
    <section
      id="about"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          {/* Label */}
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                01 — About
              </p>
            </Reveal>
          </div>

          {/* Content */}
          <div>
            <Reveal delay={100}>
              <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                Building with curiosity,
                <br />
                <span className="italic text-[#A87878]">
                  learning with purpose.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">

                <p className="text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                  I'm a Computer Science student and frontend developer
                  interested in creating digital experiences that are useful,
                  thoughtful, and easy to use.
                </p>

                <p className="text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                  My work sits at the intersection of frontend development
                  and AI. I'm constantly experimenting, building projects,
                  and learning new ways technology can solve real problems.
                </p>

              </div>
            </Reveal>

            <Reveal delay={300}>
              <a
                href="#experience"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#2B2522] transition-colors hover:text-[#A87878]"
              >
                More about my experience

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};