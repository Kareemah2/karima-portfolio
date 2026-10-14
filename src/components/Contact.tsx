import { ArrowUpRight, Mail } from "lucide-react";
import { content } from "../data/content";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export const Contact = () => (
  <section id="contact" className="border-t border-ink/10 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-ink">
            07 — Contact
          </p>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Let's build
              <br />
              <span className="italic text-accent-ink">something.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Have a project, opportunity, or idea you'd like to talk about? I'd love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <a
              href={`mailto:${content.profile.email}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm text-paper transition-all duration-500 hover:-translate-y-1 hover:bg-accent-ink hover:shadow-lg"
            >
              <Mail size={16} />
              Get in touch
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </Reveal>

          <Reveal delay={400}>
            <SocialLinks className="mt-10" />
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
