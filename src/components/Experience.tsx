import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const experiences = [
  {
    year: "2026 — Present",
    role: "Frontend AI Engineer",
    company: "FlyRank AI",
    type: "Remote",
    description:
      "Developing pixel-perfect interfaces that transform AI-assisted outputs into clean, responsive and production-ready web experiences, with a strong focus on visual fidelity, responsiveness and frontend quality.",
  },
  {
    year: "2025 — Present",
    role: "Web Development Learner",
    company: "3Deez Global Investment Limited",
    type: "Learning · Practical Experience",
    description:
      "This is where I began my web development journey, building my foundation in modern web technologies through hands-on learning. I also support the team with occasional technical tasks, giving me practical experience alongside my learning.",
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                04 — Experience
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                Where I've
                <br />
                <span className="italic text-[#A87878]">
                  been.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                The experiences that have shaped how I approach technology,
                products and problem solving.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Experience Grid */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">

          {experiences.map((experience, index) => (
            <Reveal
              key={experience.company}
              delay={150 + index * 120}
            >
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-[#2B2522]/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878]/30 hover:shadow-lg">

                {/* Top information */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="font-mono text-xs text-[#A87878]">
                      {experience.year}
                    </p>

                    <p className="mt-1 text-xs text-[#9A918B]">
                      {experience.type}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-[#A87878] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                {/* Role */}
                <div className="mt-8">

                  <h3 className="font-serif text-3xl leading-tight text-[#2B2522] transition-colors duration-300 group-hover:text-[#A87878] sm:text-4xl">
                    {experience.role}
                  </h3>

                  <p className="mt-1.5 text-base text-[#756B65]">
                    {experience.company}
                  </p>

                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-[#756B65] sm:text-base sm:leading-8">
                  {experience.description}
                </p>

              </article>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};