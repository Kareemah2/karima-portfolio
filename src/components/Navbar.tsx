import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { content } from "../data/content";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "AI Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const initial = content.profile.name.charAt(0).toUpperCase();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    `relative text-sm transition-colors duration-300 hover:text-accent-ink ${
      active === href.slice(1) ? "font-medium text-accent-ink" : "text-muted"
    }`;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a
          href="#home"
          aria-label="Back to top"
          className="font-serif text-3xl font-semibold text-ink transition-transform duration-300 hover:scale-105"
        >
          {initial}.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              aria-current={active === link.href.slice(1) ? "true" : undefined}
              className={linkClass(link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-all duration-300 hover:-translate-y-1 hover:bg-accent-ink"
          >
            Let's Talk
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-ink transition-transform duration-300 hover:scale-110 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink/10 bg-paper transition-all duration-500 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className={linkClass(link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => setIsOpen(false)}
            className="mt-2 w-fit rounded-full bg-ink px-5 py-2.5 text-sm text-paper"
          >
            Let's Talk ↗
          </a>
        </div>
      </div>
    </header>
  );
};
