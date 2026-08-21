import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          {/* Label */}
          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                07 — Contact
              </p>
            </Reveal>
          </div>

          {/* Main content */}
          <div>

            <Reveal delay={100}>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                Let's build
                <br />
                <span className="italic text-[#A87878]">
                  something.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                Have a project, opportunity, or idea you'd like to talk about?
                I'd love to hear from you.
              </p>
            </Reveal>

            {/* Email */}
            <Reveal delay={300}>
              <a
                href="mailto:saiduidris.karima@gmail.com"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#2B2522] px-6 py-3.5 text-sm text-[#F4F0EA] transition-all duration-500 hover:-translate-y-1 hover:bg-[#A87878] hover:shadow-lg"
              >
                <Mail size={16} />

                Get in touch

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Reveal>

            {/* Social links */}
            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-5 text-xs text-[#756B65]">

                <a
                  href="https://github.com/Kareemah2"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:text-[#A87878]"
                >
                  GitHub ↗
                </a>

                <span className="h-1 w-1 rounded-full bg-[#A87878]" />

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:text-[#A87878]"
                >
                  LinkedIn ↗
                </a>

                <span className="h-1 w-1 rounded-full bg-[#A87878]" />

                <span>
                  Kaduna, Nigeria
                </span>

              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
};