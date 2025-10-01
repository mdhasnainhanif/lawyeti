import {
  ArrowDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const NavItem = ({ children, active = false }) => (
  <button
    className={`text-white cursor-pointer font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight transition-colors hover:text-gold ${
      active ? "text-gold" : ""
    }`}
  >
    {children}
  </button>
);
const FooterSection = ({ title, links }) => (
  <div className="flex flex-col items-start gap-5">
    <h3 className="text-white text-2xl md:text-[30px] font-normal leading-normal">
      {title}
    </h3>
    <div className="flex flex-col justify-center items-start gap-5">
      {links.map((link, index) => {
        if (typeof link === 'string') {
          return (
            <button
              key={index}
              className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 hover:opacity-100 transition-opacity"
            >
              {link}
            </button>
          );
        }
        return (
          <Link
            key={index}
            href={link.href}
            className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80 hover:opacity-100 transition-opacity"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  </div>
);
const Footer = () => {
  return (
    <footer
      className="lg:py-16 xl:py-24 pt-20 relative lg:m-7 lg:rounded-[42px] overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 lg:rounded-[42px] border-b border-white/40 bg-dark-gray" />
      <div className="absolute -top-64 left-1/2 transform -translate-x-1/2 w-[520px] h-[520px] lg:rounded-full bg-white/20 blur-[127px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left section */}
          <div className="lg:col-span-5">
            <h2
              className="text-gradient-alt font-helvetica text-3xl md:text-[52px] font-medium leading-[130%] tracking-tight capitalize mb-8"
            >
              Be First In Line for Instant Legal Access
            </h2>
            <Link href="/auth/signup">
              <button
                className="flex px-5 py-4 justify-center items-center gap-2 rounded-full border border-gold bg-transparent text-white font-inter-tight text-lg font-medium leading-none tracking-tight hover:bg-gold/10 transition-colors"
              >
                Pre-Register
                <ArrowDown className="w-3 h-3 rotate-90" />
              </button>
            </Link>
          </div>

          {/* Right section */}
          <div
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16"
          >
            <FooterSection
              title="Useful Links"
              links={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about-us" },
                { name: "For Attorneys", href: "/for-attorneys" },
                { name: "For Promoters", href: "/for-promoters" },
                { name: "Contact Us", href: "/contact-us" },
              ]}
            />
            {/* <FooterSection
              title="Legal Information"
              links={[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Brand Guidelines", href: "/brand-guidelines" },
                { name: "Cookies Policy", href: "/cookies-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Privacy Shield", href: "/privacy-shield" },
              ]}
            /> */}
            <div className="space-y-5">
              <h3 className="text-white text-2xl md:text-[30px] font-normal leading-normal">
                Contact Info
              </h3>
              <div className="space-y-5">
                <div className="text-white/80 font-helvetica text-sm md:text-base font-bold leading-[150%] opacity-80">
                  +(123)456-7890
                </div>
                <div className="text-white/80 font-helvetica text-sm md:text-base font-medium leading-[150%] opacity-80">
                  Support: legal@law-yeti.com
                </div>
                <div className="text-white/80 font-helvetica text-sm md:text-base font-normal leading-[150%] opacity-80">
                  Abc St, XYZ, City, USA
                </div>
              </div>
            </div>
            <FooterSection
              title="Account"
              links={[
                { name: "Sign Up", href: "/auth/signup" },
                { name: "Log In", href: "/auth/login" },
                // { name: "Forgot Password", href: "/auth/forgot-password" },
              ]}
            />
          </div>
        </div>

        <div
          className="flex items-center lg:flex-row flex-wrap  justify-between gap-10 lg:gap-4 pt-10 lg:pt-20"
        >
          <Link href="/" className="cursor-pointer">
            <img
              src="/assets/images/logo.png"
              alt="Legal consultation"
              className="lg:-mb-10 h-[70px] lg:h-[100px] object-cover"
            />
          </Link>
          {/* Navigation Links */}
          {/* <div
            className="flex flex-wrap lg:justify-center gap-5 md:gap-8"
          >
            <Link href="/">
              <NavItem>Home</NavItem>
            </Link>
            <Link href="/about-us">
              <NavItem>About</NavItem>
            </Link>
            <NavItem>Services</NavItem>
            <NavItem>For Users</NavItem>
            <Link href="/for-attorneys">
              <NavItem>For Attorneys</NavItem>
            </Link>
            <Link href="/for-promoters">
              <NavItem>For Promoters</NavItem>
            </Link>
            <Link href="/auth/signup">
              <NavItem>Sign Up</NavItem>
            </Link>
            <Link href="/auth/login">
              <NavItem>Log In</NavItem>
            </Link>
            <NavItem>Blog</NavItem>
            <Link href="/contact-us">
              <NavItem>Contact Us</NavItem>
            </Link>
          </div> */}

          {/* Social Icons */}
          <div className="flex justify-center w-full gap-5">
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook className="w-6 h- rounded-sm" />
            </div>
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter className="w-6 h- rounded-sm" />
            </div>
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram className="w-6 h- rounded-sm" />
            </div>
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin className="w-6 h- rounded-sm" />
            </div>
          </div>
        </div>

        <div className="w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-white to-transparent mt-10 lg:my-10" />

        <div
          className="flex lg:flex-col xl:flex-row flex-wrap md:gap-0 gap-5  justify-center md:justify-between items-center py-10 md:py-0"
        >
          <div className="text-white/80 font-helvetica text-sm md:text-base block mx-auto font-normal leading-[150%] opacity-80 underline">
            <span className="font-bold text-center">Copyright 2025</span> LawYeti
          </div>
          {/* <div className="text-white/80 font-helvetica text-sm md:text-base font-bold leading-[150%] opacity-80 underline">
            Terms and Agr block mx-autoeements
          </div> */}
        </div>
      </div>

      {/* Left side decorative image */}
      {/* <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/b197b66fada37738ede29fd3b749727bc7709f9b?width=970"
          alt="Legal consultation"
          className="absolute left-0 bottom-0 w-96 h-96 md:w-[485px] md:h-[485px] object-cover opacity-50"
        /> */}
    </footer>
  );
};

export default Footer;
