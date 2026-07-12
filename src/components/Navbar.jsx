import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const getNavLinkClassName = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-inner">
      <Link to="/" className="brand">
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
    </div>
  </nav>
);

export default Navbar;
