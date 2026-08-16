import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const learning = [
  {
    number: "01",
    title: "Building with the Claude API",
    description:
      "Authentication, function calling, streaming, RAG patterns, and PDF/image processing.",
  },
  {
    number: "02",
    title: "Claude Code in Action",
    description:
      "Integrating Anthropic's terminal tool into software development workflows.",
  },
  {
    number: "03",
    title: "Introduction to Model Context Protocol",
    description:
      "Building MCP clients and servers in Python to connect external data sources.",
  },
  {
    number: "04",
    title: "Introduction to Agent Skills",
    description:
      "Creating and sharing reusable instructions for specialized agents.",
  },
  {
    number: "05",
    title: "Claude 101",
    description:
      "Core Claude features, workspace navigation, and practical daily workflows.",
  },
  {
    number: "06",
    title: "AI Fluency: Framework & Foundations",
    description:
      "Frameworks for safe, ethical, and effective human-AI collaboration.",
  },
  {
    number: "07",
    title: "AI Fluency for Students",
    description:
      "Safe and productive AI use for learning and career development.",
  },
  {
    number: "08",
    title: "AI Fluency for Educators",
    description:
      "Integrating AI tools into lesson plans, strategy, and teaching frameworks.",
  },
];

const certificates = [
  {
    number: "01",
    title: "AI Fluency: AI Capabilities & Limitations",
    file: "/certificates/ai-fluency-capabilities.pdf",
  },
  {
    number: "02",
    title: "Claude 101",
    file: "/certificates/claude-101.pdf",
  },
  {
    number: "03",
    title: "Claude Code 101",
    file: "/certificates/claude-code-101.pdf",
  },
  {
    number: "04",
    title: "Introduction to Claude Cowork",
    file: "/certificates/claude-cowork.pdf",
  },
  {
    number: "05",
    title: "AI Fluency for Students",
    file: "/certificates/ai-fluency-students.pdf",
  },
];

export const Learning = () => {
  return (
    <section
      id="learning"
      className="border-t border-[#2B2522]/10 px-6 py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          <div>
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A87878]">
                06 — AI Learning
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={100}>
              <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-[#2B2522] sm:text-6xl lg:text-7xl">
                Learning to build
                <br />
                <span className="italic text-[#A87878]">
                  with AI.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-[#756B65] sm:text-lg sm:leading-8">
                Training completed during my FlyRank internship, exploring
                practical AI workflows, Claude development, agents, and
                emerging developer tools.
              </p>
            </Reveal>
          </div>

        </div>

        {/* AI TRAINING */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">

          {learning.map((item, index) => (
            <Reveal
              key={item.number}
              delay={100 + index * 50}
            >
              <article className="group flex h-full gap-4 rounded-2xl border border-[#2B2522]/10 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878]/30 hover:shadow-md">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E9E1D9] text-[#A87878] transition-colors duration-300 group-hover:bg-[#A87878] group-hover:text-[#F4F0EA]">
                  <Sparkles
                    size={15}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <p className="font-mono text-[10px] text-[#A87878]">
                        {item.number}
                      </p>

                      <h3 className="mt-1 font-serif text-xl leading-tight text-[#2B2522] transition-colors duration-300 group-hover:text-[#A87878]">
                        {item.title}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="mt-1 shrink-0 text-[#A87878] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </div>

                  <p className="mt-3 text-xs leading-6 text-[#756B65] sm:text-sm">
                    {item.description}
                  </p>

                </div>

              </article>
            </Reveal>
          ))}

        </div>

        {/* CERTIFICATES */}
        <Reveal delay={250}>
          <div className="mt-14">

            {/* Certificate heading */}
            <div className="flex items-end justify-between border-b border-[#2B2522]/10 pb-5">

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A87878]">
                  Certificates
                </p>

                <h3 className="mt-2 font-serif text-3xl text-[#2B2522] sm:text-4xl">
                  Proof of learning.
                </h3>
              </div>

              <p className="hidden text-xs text-[#9A918B] sm:block">
                Anthropic · Completion Records
              </p>

            </div>

            {/* Certificate Grid */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {certificates.map((certificate, index) => (
                <Reveal
                  key={certificate.number}
                  delay={300 + index * 80}
                >
                  <article className="group overflow-hidden rounded-2xl border border-[#2B2522]/10 bg-[#F4F0EA] transition-all duration-500 hover:-translate-y-1 hover:border-[#A87878]/30 hover:shadow-lg">

                    {/* Certificate preview */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#E9E1D9]">

                      <iframe
                        src={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={certificate.title}
                        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.02] border-0"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-[#2B2522]/0 transition-colors duration-500 group-hover:bg-[#2B2522]/20" />

                    </div>

                    {/* Certificate information */}
                    <div className="p-5">

                      <div className="flex items-start justify-between gap-4">

                        <div>
                          <p className="font-mono text-[10px] text-[#A87878]">
                            Certificate {certificate.number}
                          </p>

                          <h4 className="mt-2 font-serif text-xl leading-tight text-[#2B2522] transition-colors duration-300 group-hover:text-[#A87878]">
                            {certificate.title}
                          </h4>
                        </div>

                      </div>

                      {/* View certificate */}
                      <a
                        href={certificate.file}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link mt-5 inline-flex items-center gap-2 text-xs font-medium text-[#5E5550] transition-colors duration-300 hover:text-[#A87878]"
                      >
                        View certificate
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                        />
                      </a>

                    </div>

                  </article>
                </Reveal>
              ))}

            </div>

          </div>
        </Reveal>

        {/* Footer note */}
        <Reveal delay={500}>
          <p className="mt-8 text-xs text-[#9A918B]">
            Training completed as part of my FlyRank internship.
          </p>
        </Reveal>

      </div>
    </section>
  );
};