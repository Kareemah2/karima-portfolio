import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive, accessible and polished interfaces with modern frontend technologies.",
  },
  {
    number: "02",
    title: "UI Implementation",
    description:
      "Turning designs and ideas into clean, responsive web experiences with attention to detail.",
  },
  {
    number: "03",
    title: "AI-Powered Interfaces",
    description:
      "Exploring practical ways to bring AI capabilities into useful and intuitive web products.",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                02 — Services
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                What I can
                <br />
                <span className="italic text-[#A87878]">
                  build for you.
                </span>
              </h2>
            </Reveal>
          </div>

        </div>

        {/* Services */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">

          {services.map((service, index) => (
            <Reveal
              key={service.number}
              delay={150 + index * 100}
            >
              <article className="group h-full rounded-[1.5rem] border border-[#2B2522]/10 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878]/30 hover:shadow-lg sm:p-7">

                <div className="flex items-start justify-between">

                  <span className="font-mono text-xs text-[#A87878]">
                    {service.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#A87878] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                <h3 className="mt-12 font-serif text-3xl leading-tight text-[#2B2522] transition-colors duration-300 group-hover:text-[#A87878]">
                  {service.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#756B65]">
                  {service.description}
                </p>

              </article>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
};