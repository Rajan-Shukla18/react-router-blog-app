import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const getNavLinkClassName = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logo} alt="Fieldnotes logo" className="brand-logo" />
          <span className="brand-primary">Field</span>
          <span className="brand-secondary">Notes</span>
        </Link>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={getNavLinkClassName}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button 
          className={`mobile-menu-toggle ${isOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={getNavLinkClassName} onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
