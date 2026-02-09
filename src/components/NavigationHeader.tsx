"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBandcamp, FaFacebook, FaInstagram } from "react-icons/fa";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#music", label: "Music" },
  { href: "#video", label: "Video" },
  { href: "#shows", label: "Shows" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://brainrustonline.bandcamp.com",
    icon: FaBandcamp,
    label: "Bandcamp",
  },
  {
    href: "https://www.facebook.com/people/Brainrust/61558737663532/",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/brainrust.online",
    icon: FaInstagram,
    label: "Instagram",
  },
];

const NavigationHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center">
        {/* Desktop nav — centered links with social icons at the end */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-muted hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-neutral-700" />

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted hover:text-fg transition-colors"
              >
                <link.icon size={15} />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-muted hover:text-fg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" />
            ) : (
              <path d="M3 6H17M3 10H17M3 14H17" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-bg/95 backdrop-blur-sm">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-[0.15em] uppercase text-muted hover:text-fg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-800 flex items-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted hover:text-fg transition-colors"
                >
                  <link.icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationHeader;
