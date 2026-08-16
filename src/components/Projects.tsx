import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    number: "01",
    title: "IP Address Tracker",
    description:
      "A responsive IP address tracking application that retrieves location data from an API and displays the results through an interactive map.",
    category: "Web Application",
    technologies: ["React", "TypeScript", "Tailwind CSS", "API"],
    image: "/projects/ip-tracker.jpg",
    github: "https://github.com/Kareemah2/ip-tracker",
    live: "https://ip-tracker-swart-six.vercel.app/",
  },
  {
    number: "02",
    title: "Crypto Tracker",
    description:
      "A cryptocurrency dashboard that consumes market data and allows users to explore individual cryptocurrencies and their details.",
    category: "Web Application",
    technologies: ["React", "JavaScript", "CoinGecko API"],
    image: "/projects/crypto-price.png",
    github: "https://github.com/Kareemah2/crypto-price",
    live: "https://crypto-price-liart.vercel.app/",
  },
  {
    number: "03",
    title: "Calculator App",
    description:
      "A clean calculator interface built to strengthen component architecture, state management and interactive frontend development.",
    category: "Frontend Project",
    technologies: ["React", "JavaScript", "CSS"],
    image: "/projects/calculator.jpg",
    github: "https://github.com/Kareemah2/calculator-app",
    live: "https://calculator-app-gamma-seven.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                03 — Projects
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                Things I've
                <br />
                <span className="italic text-[#A87878]">
                  built.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                A selection of projects where I've experimented with
                interfaces, APIs, data and modern frontend technologies.
              </p>
            </Reveal>
          </div>

        </div>

        {/* Project grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              delay={150 + index * 100}
            >
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#2B2522]/10 transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878]/30 hover:shadow-lg">

                {/* Project image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E9E1D9]">

                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-[#2B2522]/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#F4F0EA] px-4 py-2.5 text-xs font-medium text-[#2B2522] transition-transform duration-300 hover:scale-105"
                    >
                      Live Demo
                      <ArrowUpRight size={14} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#F4F0EA]/60 px-4 py-2.5 text-xs font-medium text-[#F4F0EA] transition-all duration-300 hover:scale-105 hover:bg-[#F4F0EA] hover:text-[#2B2522]"
                    >
                      GitHub
                      <ArrowUpRight size={14} />
                    </a>

                  </div>

                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">

                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <p className="font-mono text-xs text-[#A87878]">
                        {project.category}
                      </p>

                      <h3 className="mt-2 font-serif text-2xl text-[#2B2522] transition-colors duration-300 group-hover:text-[#A87878]">
                        {project.title}
                      </h3>
                    </div>

                    <span className="font-mono text-xs text-[#9A918B]">
                      {project.number}
                    </span>

                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#756B65]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[#E9E1D9] px-3 py-1.5 text-xs font-medium text-[#5E5550]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Mobile-friendly links */}
                  <div className="mt-5 flex gap-4 border-t border-[#2B2522]/10 pt-4 lg:hidden">

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5E5550] transition-colors hover:text-[#A87878]"
                    >
                      Live Demo
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5E5550] transition-colors hover:text-[#A87878]"
                    >
                      GitHub
                      <ArrowUpRight size={13} />
                    </a>

                  </div>

                </div>

              </article>
            </Reveal>
          ))}

        </div>

        {/* GitHub link */}
        <Reveal delay={400}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Kareemah2"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#5E5550] transition-colors hover:text-[#A87878]"
            >
              Explore more on GitHub

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
};