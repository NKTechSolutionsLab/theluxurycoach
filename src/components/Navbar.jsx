import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Coaching", href: "#coaching" },
  { name: "Programs", href: "#programs" },
  { name: "The Book", href: "#book" },
  { name: "Platforms", href: "#platforms" },
  { name: "For Organizations", href: "#organizations" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-[78px] w-full items-center justify-between px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* =========================================================
            BRAND
        ========================================================= */}
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-50 shrink-0"
        >
          {/* Main Brand */}
          <div className="font-['Cormorant_Garamond'] text-[17px] font-medium uppercase leading-none tracking-[0.16em] text-[#F5F0E8] sm:text-[19px]">
            The Luxury Coach
            <sup className="ml-0.5 align-top font-['Manrope'] text-[6px] tracking-normal text-[#C9A86A]">
              ™
            </sup>
          </div>

          {/* Brand Descriptor */}
          <div className="mt-[5px] font-['Manrope'] text-[6.5px] font-medium uppercase tracking-[0.25em] text-[#CBBDA8] sm:text-[7px]">
            COACH · AUTHOR · SPEAKER
          </div>
        </a>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}
        <div className="hidden lg:flex lg:items-center">
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-['Manrope'] text-[8px] font-medium text-white/85 transition-colors duration-300 hover:text-[#D8BC88] xl:text-[12px]"
              >
                {link.name}

                {/* Hover line */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C9A86A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* =========================================================
            RIGHT CONTROLS
        ========================================================= */}
        <div className="relative z-50 flex items-center gap-5">
          {/* CTA */}
          <a
            href="#contact"
            className="group hidden h-[40px] items-center gap-2 rounded-full bg-[#D8BC88] px-6 font-['Manrope'] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#151412] transition-all duration-300 hover:bg-[#E5CEA0] lg:inline-flex"
          >
            <span>Work With Monica</span>

            <ArrowUpRight
              size={12}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Menu */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden flex h-8 w-8 items-center justify-center text-[#F5F0E8] transition-colors duration-300 hover:text-[#D8BC88]"
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.2} />
            ) : (
              <Menu size={21} strokeWidth={1.2} />
            )}
          </button>
        </div>
      </nav>

      {/* =========================================================
          FULLSCREEN MOBILE MENU
      ========================================================= */}
      <div
        className={`fixed inset-0 z-40 bg-[#151412] transition-all duration-500 lg:hidden ${
          isOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-7 pb-10 pt-28 sm:px-10">
          {/* Mobile Brand */}
          <div
            className={`mb-8 transition-all duration-500 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >
            <div className="font-['Cormorant_Garamond'] text-[24px] uppercase tracking-[0.14em] text-[#F5F0E8]">
              The Luxury Coach
              <sup className="ml-1 align-top font-['Manrope'] text-[7px] text-[#C9A86A]">
                ™
              </sup>
            </div>

            <div className="mt-1 font-['Manrope'] text-[7px] uppercase tracking-[0.28em] text-[#9F927F]">
              COACH · AUTHOR · SPEAKER
            </div>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-1 flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`group flex items-center justify-between border-b border-white/10 py-3.5 font-['Cormorant_Garamond'] text-[28px] text-[#F5F0E8] transition-all duration-500 sm:text-[32px] ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 45}ms`,
                }}
              >
                <span>{link.name}</span>

                <ArrowUpRight
                  size={19}
                  strokeWidth={1}
                  className="text-[#C9A86A] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ))}
          </div>

          {/* Mobile Bottom CTA */}
          <div
            className={`border-t border-white/10 pt-6 transition-all duration-500 ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="mb-4 font-['Manrope'] text-[7px] uppercase tracking-[0.25em] text-[#9F927F]">
              Clarity · Strategy · Freedom
            </p>

            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex h-[46px] items-center gap-2 rounded-full bg-[#D8BC88] px-6 font-['Manrope'] text-[8px] font-semibold uppercase tracking-[0.15em] text-[#151412]"
            >
              Work With Monica

              <ArrowUpRight size={13} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;