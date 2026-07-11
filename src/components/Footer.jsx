const socialLinks = [
  { label: "GitHub", href: "https://github.com/Rajan-Shukla18" },
  { label: "LinkedIn", href: "https://linkedin.com/in/rajan-shukla-b02467337" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {year} Fieldnotes</span>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;