import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-6 pb-14 pt-24 lg:px-10 lg:pt-28"
    >
      {/* Decorative dot */}
      <div className="pointer-events-none absolute bottom-[12%] left-[45%] h-2 w-2 rounded-full bg-[#A87878]" />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">

        <div className="max-w-xl">

          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#A87878]">
              Frontend Developer · Frontend AI Engineer
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
              Hello, I'm
              <br />
              <span className="italic text-[#A87878]">
                Kareemah.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-lg text-base leading-7 text-[#655C57] sm:text-lg">
              I build clean, responsive and useful web experiences —
              turning ideas and real problems into thoughtful interfaces.
            </p>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2B2522] px-6 py-3.5 text-sm text-[#F4F0EA] transition-all duration-500 hover:-translate-y-1 hover:bg-[#A87878] hover:shadow-lg"
              >
                View my work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="mailto:saiduidris.karima@gmail.com"
                className="inline-flex items-center rounded-full border border-[#2B2522]/20 px-6 py-3.5 text-sm text-[#2B2522] transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878] hover:text-[#A87878]"
              >
                Let's connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-9 flex flex-wrap items-center gap-5 text-xs text-[#756B65]">
              <a
                href="https://github.com/Kareemah2"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[#A87878]"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-[#A87878]"
              >
                LinkedIn ↗
              </a>

              <span className="h-1 w-1 rounded-full bg-[#A87878]" />

              <span>Kaduna, Nigeria</span>
            </div>
          </Reveal>

        </div>

        <Reveal delay={250}>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#DED3C8] transition-transform duration-700 hover:scale-[1.01]">

              <div className="absolute inset-0 opacity-30">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(#2B2522 1px, transparent 1px), linear-gradient(90deg, #2B2522 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />
              </div>

              <div className="absolute inset-7 flex items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#C9B7A8]">
                <span className="font-serif text-6xl italic text-[#2B2522]/30">
                  KI
                </span>
              </div>

              <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#2B2522] font-mono text-xs text-[#F4F0EA] shadow-lg transition-transform duration-500 hover:rotate-12">
                {"</>"}
              </div>

              <div className="absolute right-5 top-7 [writing-mode:vertical-rl] text-[10px] font-medium uppercase tracking-[0.3em] text-[#2B2522]/60">
                Build · Learn · Create
              </div>

            </div>

            <div className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#2B2522]/15 bg-[#F4F0EA]">
              <ArrowDown
                size={18}
                className="animate-bounce text-[#A87878]"
              />
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
};