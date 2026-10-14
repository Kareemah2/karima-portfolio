import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export const Hero = () => {
  const { name, role, tagline, email, resume, availability, photo } = content.profile;
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden px-6 pb-14 pt-24 lg:px-10 lg:pt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] left-[45%] h-2 w-2 rounded-full bg-accent"
      />

      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <div className="max-w-xl">
          {availability && (
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1.5 text-xs text-muted">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                {availability}
              </p>
            </Reveal>
          )}

          <Reveal delay={100}>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-accent-ink">
              {role}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Hello, I'm
              <br />
              <span className="italic text-accent-ink">{name}.</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">{tagline}</p>
          </Reveal>

          <Reveal delay={450}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm text-paper transition-all duration-500 hover:-translate-y-1 hover:bg-accent-ink hover:shadow-lg"
              >
                View my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink transition-all duration-500 hover:-translate-y-1 hover:border-accent-ink hover:text-accent-ink"
              >
                Let's connect
              </a>

              {resume && (
                <a
                  href={resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 text-sm text-ink transition-all duration-500 hover:-translate-y-1 hover:border-accent-ink hover:text-accent-ink"
                >
                  <Download size={16} />
                  Résumé
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={600}>
            <SocialLinks className="mt-9" />
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone transition-transform duration-700 hover:scale-[1.01]">
              {photo ? (
                <img
                  src={photo}
                  alt={`Portrait of ${name}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute inset-0 opacity-30" aria-hidden="true">
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
                    <span className="font-serif text-6xl italic text-ink/30" aria-hidden="true">
                      {initials}
                    </span>
                  </div>
                </>
              )}

              <div
                aria-hidden="true"
                className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-ink font-mono text-xs text-paper shadow-lg"
              >
                {"</>"}
              </div>

              <div
                aria-hidden="true"
                className="absolute right-5 top-7 text-[11px] font-medium uppercase tracking-[0.3em] text-ink/70 [writing-mode:vertical-rl]"
              >
                Build · Learn · Create
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-full border border-ink/15 bg-paper"
            >
              <ArrowDown size={18} className="animate-bounce text-accent-ink motion-reduce:animate-none" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
