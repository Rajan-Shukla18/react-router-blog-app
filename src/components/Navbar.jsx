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
    <nav className="sticky top-0 z-10 border-b border-border bg-bg">
      <div className="mx-auto flex max-w-nav items-center justify-between px-6 py-5">
      <Link
        to="/"
        onClick={closeMenu}
        className="flex items-center gap-2 font-serif text-lg font-bold uppercase no-underline"
      >
          <img src={logo} alt="Fieldnotes logo" className="h-8 w-8 object-contain" />
          <span className="text-lg font-semibold uppercase text-green-700">Field</span>
          <span className="text-lg font-semibold uppercase text-gray-900">Notes</span>
        </Link>
        <ul className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end}>
                {({ isActive }) => (
                  <span
                    className={`relative text-[15px] transition-colors duration-200 ${
                      isActive
                        ? "font-semibold text-gray-900"
                        : "text-stone-500 hover:text-gray-900"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-700"></span>
                    )}

                    {link.label}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
       <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="flex h-5 w-6 flex-col justify-between md:hidden"
          >
            <span
              className={`h-0.5 w-full rounded bg-gray-900 transition-all duration-300 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>

            <span
              className={`h-0.5 w-full rounded bg-gray-900 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`h-0.5 w-full rounded bg-gray-900 transition-all duration-300 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
        </button>
      </div>

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
                        ? "font-semibold text-gray-900"
                        : "text-stone-500 hover:text-gray-900"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-700"></span>
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

