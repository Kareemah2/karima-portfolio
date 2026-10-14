import { content } from "../data/content";

export const SocialLinks = ({ className = "" }: { className?: string }) => {
  const { github, linkedin, location } = content.profile;
  const links = [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
  ].filter((l) => l.href);

  return (
    <div className={`flex flex-wrap items-center gap-5 text-xs text-muted ${className}`}>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-accent-ink"
        >
          {l.label} ↗
        </a>
      ))}
      {links.length > 0 && <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />}
      <span>{location}</span>
    </div>
  );
};
