import { ArrowUpRight } from "lucide-react";
import { content } from "../data/content";

export const Footer = () => {
  const { name, role } = content.profile;

  return (
    <footer className="border-t border-ink/10 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl text-ink">{name}.</p>
          <p className="mt-1 text-xs text-muted">{role}</p>
        </div>

        <div className="flex items-center gap-6 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {name}
          </span>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent-ink"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
