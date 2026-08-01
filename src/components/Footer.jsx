import { useLocation } from "react-router-dom";
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
  const { pathname } = useLocation();

  const isAboutPage = pathname === "/about";

  const footerClass = isAboutPage
    ? "mt-0 border-t border-[#D9E7F5] bg-[#EBF3FC] px-6 py-12 pb-8"
    : "mt-0 border-t border-border px-6 py-12 pb-8";

  const bottomBarClass = isAboutPage
    ? "mx-auto mt-16 flex max-w-nav flex-col items-center justify-between gap-3 border-t border-[#D9E7F5] pt-6 text-center text-sm text-muted md:flex-row md:text-left"
    : "mx-auto mt-16 flex max-w-nav flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-sm text-muted md:flex-row md:text-left";

  return (
    <footer className={footerClass}>
      <div className="mx-auto flex max-w-nav flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-20">

        {/* Logo */}
        <div className="max-w-[320px]">
          <div className="mb-5 flex items-center gap-2.5">
            <img
              src={logo}
              alt="Field Notes"
              className="h-[30px] w-[30px] object-contain"
            />
            <span className="font-serif text-lg font-semibold uppercase text-green-700">
              Field
            </span>
            <span className="font-serif text-lg font-semibold uppercase text-gray-900">
              Notes
            </span>
          </div>

          <p className="max-w-[340px] leading-7 text-muted">
            Thoughts on technology, learning, design and building on the web.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex w-full flex-wrap justify-between gap-8 md:gap-20">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="mb-3 text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-text">
                {title}
              </h4>

              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-[0.95rem] text-muted transition-colors duration-200 hover:text-accent hover:no-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={bottomBarClass}>
        <span>© {year} Fieldnotes. All rights reserved.</span>

        <div className="flex justify-center gap-6 md:justify-start">
          <a
            href="#"
            className="text-muted transition-colors duration-200 hover:text-accent hover:no-underline"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="text-muted transition-colors duration-200 hover:text-accent hover:no-underline"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;