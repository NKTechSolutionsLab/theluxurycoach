const footerLinks = {
  explore: [
    { name: "About", href: "#about" },
    { name: "Coaching", href: "#coaching" },
    { name: "Programs", href: "#programs" },
    { name: "The Book", href: "#book" },
  ],
  discover: [
    { name: "Platforms", href: "#platforms" },
    { name: "For Organizations", href: "#organizations" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

const SocialIcon = ({ label, href = "#", children }) => (
  <a
    href={href}
    aria-label={label}
    className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[#9A8667]/25
      text-[#9A8667]
      transition-all duration-300
      hover:border-[#D8BC88]
      hover:bg-[#D8BC88]
      hover:text-[#171514]
    "
  >
    {children}
  </a>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="0.8"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="currentColor"
  >
    <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.4 9h3.6v11.5H3.4V9Zm5.8 0h3.4v1.6h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.4v6.35h-3.55v-5.63c0-1.34-.02-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.96v5.73H9.2V9Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="17"
    height="17"
    fill="currentColor"
  >
    <path d="M13.7 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.65c-.29-.04-1.29-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.18H7.6V13h2.75v8h3.35Z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171514] text-[#F5F0E8]">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-block">
              <div className="font-serif text-[26px] tracking-[0.08em] text-[#F5F0E8]">
                THE LUXURY COACHING™
              </div>

              <div className="mt-2 text-[12px] uppercase tracking-[0.35em] text-[#9A8667]">
                Coach · Author · Speaker
              </div>
            </a>

            <p className="mt-8 max-w-md text-[16px] leading-7 text-[#9A8667]">
              A space for ambitious people ready to create a fuller life,
              a bolder impact, and a more intentional definition of success.
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              <SocialIcon label="Instagram">
                <InstagramIcon />
              </SocialIcon>

              <SocialIcon label="LinkedIn">
                <LinkedInIcon />
              </SocialIcon>

              <SocialIcon label="Facebook">
                <FacebookIcon />
              </SocialIcon>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <p className="mb-6 text-[12px] uppercase tracking-[0.3em] text-[#9A8667]">
              Explore
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.explore.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    w-fit text-[16px] text-[#F5F0E8]/75
                    transition-colors duration-300
                    hover:text-[#D8BC88]
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Discover */}
          <div className="lg:col-span-2">
            <p className="mb-6 text-[12px] uppercase tracking-[0.3em] text-[#9A8667]">
              Discover
            </p>

            <nav className="flex flex-col gap-4">
              {footerLinks.discover.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    w-fit text-[16px] text-[#F5F0E8]/75
                    transition-colors duration-300
                    hover:text-[#D8BC88]
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Back To Top */}
          <div className="flex items-start justify-start lg:col-span-3 lg:justify-end">
            <a
              href="#"
              className="
                group flex items-center gap-3
                text-[12px] uppercase tracking-[0.25em]
                text-[#9A8667]
                transition-colors duration-300
                hover:text-[#D8BC88]
              "
            >
              Back to top

              <span
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  border border-[#9A8667]/25
                  transition-all duration-300
                  group-hover:border-[#D8BC88]
                  group-hover:bg-[#D8BC88]
                  group-hover:text-[#171514]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 19V5" />
                  <path d="m6 11 6-6 6 6" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Large Statement */}
        <div className="mt-24 border-t border-[#9A8667]/20 pt-16 lg:mt-32 lg:pt-20">
          <p
            className="
              max-w-5xl
              font-serif
              text-[38px]
              leading-[1.08]
              text-[#F5F0E8]
              sm:text-[50px]
              lg:text-[74px]
            "
          >
            You don’t have to choose between{" "}
            <span className="text-[#9A8667]">
              success
            </span>{" "}
            and a life you love.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#9A8667]/20">
        <div
          className="
            mx-auto flex max-w-[1400px]
            flex-col gap-5
            px-6 py-6
            sm:px-8
            lg:flex-row lg:items-center lg:justify-between lg:px-12
          "
        >
          {/* Copyright */}
          <p className="text-[12px] uppercase tracking-[0.18em] text-[#766A58]">
            © {currentYear} The Luxury Coaching™. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="
                text-[12px] uppercase tracking-[0.18em]
                text-[#766A58]
                transition-colors duration-300
                hover:text-[#D8BC88]
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                text-[12px] uppercase tracking-[0.18em]
                text-[#766A58]
                transition-colors duration-300
                hover:text-[#D8BC88]
              "
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;