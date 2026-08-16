import { Reveal } from "./Reveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools & APIs",
    skills: [
      "Git",
      "GitHub",
      "REST APIs",
      "Vite",
      "npm",
      "Figma",
    ],
  },
  {
    title: "Exploring",
    skills: [
      "AI Engineering",
      "Node.js",
      "Python",
      "AI APIs",
      "Automation",
    ],
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                05 — Skills
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                Tools I use
                <br />
                <span className="italic text-[#A87878]">
                  to build.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                A growing toolkit shaped by the projects I build and the
                problems I'm learning to solve.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Skill groups */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">

          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={150 + index * 100}
            >
              <div className="h-full rounded-[1.5rem] border border-[#2B2522]/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878]/30 hover:shadow-lg">

                <p className="font-mono text-xs text-[#A87878]">
                  0{index + 1}
                </p>

                <h3 className="mt-4 font-serif text-2xl text-[#2B2522]">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-[#E9E1D9] px-3 py-1.5 text-xs font-medium text-[#5E5550] transition-all duration-300 hover:bg-[#A87878] hover:text-[#F4F0EA]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

        {/* Small statement */}
        <Reveal delay={350}>
          <p className="mt-8 max-w-3xl text-sm leading-7 text-[#9A918B]">
            Always learning, experimenting, and exploring better ways to
            combine frontend development with AI.
          </p>
        </Reveal>

      </div>
    </section>
  );
};