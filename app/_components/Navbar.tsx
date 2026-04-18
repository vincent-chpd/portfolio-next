"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useMobile } from "../_hooks/useMobile";

const Navbar = () => {
  const isMobile = useMobile(); // true if screen <= 768px
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show nothing during SSR to prevent hydration mismatch
    return null;
  }

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Recommendations", href: "/recommendations" },
    { name: "Contact", href: "/contact" },
  ];

  // Desktop sidebar
  if (!isMobile) {
    return (
      <nav className="flex flex-col items-center justify-between text-center p-4 bg-gray-800 text-foreground h-screen sticky top-0">
        <Link href="/">
          <div className="border-6 p-3 border-primary rounded-2xl">
            <p className="text-4xl font-semibold font-poppins">VC</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:text-primary hover:font-bold p-2"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Link href={"https://github.com/vincent-chpd"}>
            <Github className="hover:text-primary" />
          </Link>
          <Link href={"https://github.com/vincent-chpd"}>
            <Linkedin className="hover:text-primary " />
          </Link>
        </div>
        <div className="text-gray-500 text-xs">
          <p>© 2023 - 2026 </p>
          <p>Frontend Developer</p>
          <p>London, United Kingdom</p>
        </div>
      </nav>
    );
  }

  // Mobile top navbar with hamburger menu
  return (
    <nav className="flex flex-col items-center justify-between px-4 py-3 bg-gray-800 text-foreground fixed w-full z-50 top-0 left-0">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <div className="border-4 py-1 px-2 border-primary rounded-xl">
            <p className="text-xl font-semibold font-poppins">VC</p>
          </div>
        </Link>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="w-full bg-gray-800 p-6 flex flex-col justify-start gap-4 shadow-lg">
          <div className="flex flex-col gap-8 justify-between items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-6 mt-4">
              <Link href={"https://github.com/vincent-chpd"}>
                <Github />
              </Link>
              <Link href={"https://github.com/vincent-chpd"}>
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
