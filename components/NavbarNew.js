"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPhone, MdAccessTime } from "react-icons/md";

const NAV_LINKS = [
  { label: "Service", href: "/#serviceSection" },
  { label: "Geschichte", href: "/#historySection" },
  { label: "Öffnungszeiten", href: "/#openingSection" },
];

export default function NavbarNew() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Schließe Menu bei Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Info-Leiste */}
      <div className="bg-brand-red text-white text-xs py-2 px-4 flex justify-between items-center">
        <span className="flex items-center gap-1.5">
          <MdAccessTime size={14} />
          Mo–Do 09:00–12:00 Uhr
        </span>
        <a href="tel:+4904919293713" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
          <MdPhone size={14} />
          +49 (0) 491 9293713
        </a>
      </div>

      {/* Hauptnavigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-900/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/5"
            : "bg-zinc-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/img/logo/logo-full-white.svg"
              alt="Wagemann Schweiß-Service"
              width={180}
              height={68}
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-300 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contactSection"
                className="bg-brand-red hover:bg-brand-red-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Jetzt kontaktieren
              </Link>
            </li>
          </ul>

          {/* Burger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu — immer im DOM, per transform versteckt */}
        <div
          className={`md:hidden fixed inset-0 top-[calc(2rem+4rem)] z-40 bg-zinc-900 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-semibold tracking-wide hover:text-brand-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contactSection"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-brand-red hover:bg-brand-red-dark text-white text-lg font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Jetzt kontaktieren
          </Link>
        </div>
      </nav>
    </>
  );
}
