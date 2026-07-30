import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-nav items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 no-underline"
        >
          <img
            src={logo}
            alt="Fieldnotes logo"
            className="h-8 w-8 object-contain"
          />

          <span className="font-serif text-lg font-semibold uppercase text-accent">
            Field
          </span>

          <span className="font-serif text-lg font-semibold uppercase text-text">
            Notes
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end}>
                {({ isActive }) => (
                  <span
                    className={`relative text-[15px] transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-text"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"></span>
                    )}

                    {link.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="flex h-5 w-6 flex-col justify-between md:hidden"
        >
          <span
            className={`h-0.5 w-full rounded bg-text transition-all duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full rounded bg-text transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-full rounded bg-text transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-64 border-t border-border bg-bg opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-5 px-6 py-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={closeMenu}
              >
                {({ isActive }) => (
                  <span
                    className={`relative text-base transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-text"
                        : "text-muted hover:text-text"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"></span>
                    )}

                    {link.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;