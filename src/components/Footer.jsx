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
    <footer className="mt-0 border-t border-border px-6 py-12 pb-8">
      <div className="mx-auto flex max-w-nav flex-col gap-12 md:flex-row md:justify-between md:items-start md:gap-20">
        <div className="max-w-[320px]">

          <div className="mb-5 flex items-center gap-2.5">
            <img src={logo} alt="Field Notes" className="h-[30px] w-[30px] object-contain"/>
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

        <div className="flex w-full flex-wrap justify-between gap-8 md:gap-20">
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="mb-3 text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-text">{title}</h4>

              {items.map((item) => (
              <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[0.95rem] text-muted transition-colors duration-200 hover:text-accent hover:no-underline">

                  {item.label}

              </a>

              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-nav flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-sm text-muted md:flex-row md:text-left">
        <span>© {year} Fieldnotes. All rights reserved.</span>

        <div className="flex justify-center gap-6 md:justify-start">
          <a href="#" className="text-muted transition-colors duration-200 hover:text-accent hover:no-underline" >
            Privacy Policy
          </a>

          <a href="#" className="text-muted transition-colors duration-200 hover:text-accent hover:no-underline" >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;


