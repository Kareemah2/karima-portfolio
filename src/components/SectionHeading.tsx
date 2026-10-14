import { Reveal } from "./Reveal";

interface Props {
  number?: string;
  label: string;
  title: string;
  accent: string;
  intro?: string;
}

export const SectionHeading = ({ number, label, title, accent, intro }: Props) => (
  <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
    <Reveal>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-ink">
        {number ? `${number} — ` : ""}
        {label}
      </p>
    </Reveal>
    <div>
      <Reveal delay={100}>
        <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {title}
          <br />
          <span className="italic text-accent-ink">{accent}</span>
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  </div>
);
