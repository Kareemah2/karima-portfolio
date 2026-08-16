import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-[#2B2522]/10 bg-[#F4F0EA]/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="font-serif text-3xl font-semibold text-[#2B2522] transition-transform duration-300 hover:scale-105"
        >
          K.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm text-[#5E5550] transition-colors duration-300 hover:text-[#A87878]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="group inline-flex items-center rounded-full bg-[#2B2522] px-5 py-2.5 text-sm text-[#F4F0EA] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A87878]"
          >
            Let's Talk
            <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#2B2522] transition-transform duration-300 hover:scale-110 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[#2B2522]/10 bg-[#F4F0EA] transition-all duration-500 md:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="translate-y-0 text-sm text-[#5E5550] transition-all duration-300 hover:translate-x-2 hover:text-[#A87878]"
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-fit rounded-full bg-[#2B2522] px-5 py-2.5 text-sm text-[#F4F0EA]"
          >
            Let's Talk ↗
          </a>
        </div>
      </div>
    </header>
  );
};