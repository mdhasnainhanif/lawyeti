"use client";

import { ArrowDown, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { SheetClose } from "./ui/sheet";

const NavItem = ({ children, active = false }) => (
  <button
    className={`text-white cursor-pointer font-inter-tight text-sm md:text-base font-normal leading-none tracking-tight transition-colors hover:text-gold ${
      active ? "text-gold" : ""
    }`}
  >
    {children}
  </button>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-md"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <nav
        className={`max-w-[1300px] w-[90%] mx-auto py-4 transition-all ${
          scrolled ? "" : "lg:mt-8 "
        } flex items-center justify-between`}
      >
        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/images/logo.png"
            alt="Legal consultation"
            className="h-[50px] lg:h-[100px] object-cover"
          />
        </Link>

        {/* Desktop Nav (≥1300px) */}
        <div className="hidden xl:flex items-center gap-15">
          <Link href="/">
            <NavItem active>Home</NavItem>
          </Link>
          <Link href="/about-us">
            <NavItem>About</NavItem>
          </Link>
          {/* <NavItem>Services</NavItem> */}
          {/* <NavItem>For Users</NavItem> */}
          <Link href="/for-attorneys">
            <NavItem>For Attorneys</NavItem>
          </Link>
          <Link href="/for-promoters">
            <NavItem>For Promoters</NavItem>
          </Link>
          {/* <NavItem>Internal Team Access</NavItem> */}
          {/* <NavItem>Blog</NavItem> */}
          <Link href="/contact-us">
            <NavItem>Contact Us</NavItem>
          </Link>
        </div>

        {/* Auth buttons (Desktop only) */}
        <div className="hidden xl:flex items-center gap-3">
          <Link href="/auth/login">
            <button className="flex px-5 py-4 justify-center items-center gap-2 rounded-full border border-white text-white font-inter-tight text-lg font-medium leading-none tracking-tight hover:bg-white/10 transition-colors cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="flex px-5 py-4 justify-center items-center gap-2 rounded-full border border-gold bg-transparent text-gold font-inter-tight text-lg font-medium leading-none tracking-tight hover:bg-gold/10 transition-colors cursor-pointer">
              Pre-Register
              <ArrowDown className="w-3 h-3 rotate-90" />
            </button>
          </Link>
        </div>

        {/* Mobile / Tablet Nav (<1300px) */}
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white hover:text-gold transition-colors cursor-pointer">
                <Menu className="w-8 h-8" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-black text-white border-0 p-6"
            >
              <nav className="flex flex-col gap-6 items-start">
                <SheetClose asChild>
                  <Link href="/">
                    <NavItem active>Home</NavItem>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about-us">
                    <NavItem>About</NavItem>
                  </Link>
                </SheetClose>
                {/* <SheetClose asChild>
                  <NavItem>Services</NavItem>
                </SheetClose> */}
                {/* <SheetClose asChild>
                  <NavItem>For Users</NavItem>
                </SheetClose> */}
                <SheetClose asChild>
                  <Link href="/for-attorneys">
                    <NavItem>For Attorneys</NavItem>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/for-promoters">
                    <NavItem>For Promoters</NavItem>
                  </Link>
                </SheetClose>
                {/* <SheetClose asChild>
                  <NavItem>Internal Team Access</NavItem>
                </SheetClose> */}
                {/* <SheetClose asChild>
                  <NavItem>Blog</NavItem>
                </SheetClose> */}
                <SheetClose asChild>
                  <Link href="/contact-us">
                    <NavItem>Contact Us</NavItem>
                  </Link>
                </SheetClose>
              </nav>

              <div className="mt-8 flex flex-col gap-4">
                <SheetClose asChild>
                  <button className="flex px-5 py-3 justify-center items-center gap-2 rounded-full border border-white text-white font-inter-tight text-base font-medium leading-none tracking-tight hover:bg-white/10 transition-colors cursor-pointer">
                    Sign In
                  </button>
                </SheetClose>
                <SheetClose asChild>
                  <button className="flex px-5 py-3 justify-center items-center gap-2 rounded-full border border-gold bg-transparent text-gold font-inter-tight text-base font-medium leading-none tracking-tight hover:bg-gold/10 transition-colors cursor-pointer">
                    Pre-Register
                    <ArrowDown className="w-3 h-3 rotate-90" />
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
