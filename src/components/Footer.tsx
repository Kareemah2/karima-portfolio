import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-[#2B2522]/10 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="font-serif text-xl text-[#2B2522]">
            Karima.
          </p>

          <p className="mt-1 text-xs text-[#9A918B]">
            Frontend AI Engineer
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#9A918B]">

          <span>
            © {new Date().getFullYear()} Karima
          </span>

          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-[#5E5550] transition-colors hover:text-[#A87878]"
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