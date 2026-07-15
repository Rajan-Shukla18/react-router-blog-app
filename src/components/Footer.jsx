import logo from "../assets/logo.png";

const links = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  Topics: [
    { label: "Learning", href: "#" },
    { label: "Design", href: "#" },
    { label: "Career", href: "#" },
    { label: "Technology", href: "#" },
  ],

  Connect: [
    {
      label: "GitHub",
      href: "https://github.com/Rajan-Shukla18",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rajan-shukla-b02467337",
    },
    {
      label: "Email",
      href: "mailto:rajanshukla88503@gmail.com",
    },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">

          <div className="footer-brand-top">
            <img src={logo} alt="Field Notes" className="footer-logo" />
            <span className="brand-primary">Field</span>
            <span className="brand-secondary">Notes</span>
          </div>

          <p>
            Thoughts on technology, learning, design and building on the web.
          </p>

        </div>

        <div className="footer-grid">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="footer-column">
              <h4>{title}</h4>

              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Fieldnotes. All rights reserved.</span>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;


