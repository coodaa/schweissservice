"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPhone } from "react-icons/md";
import OpenStatus from "./OpenStatus";
import { SITE, NAV_LINKS } from "../lib/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Zum Inhalt springen
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-6 sm:px-6">
        <Link href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
          <Image
            src="/assets/img/logo/logo-full-white.svg"
            alt="Wagemann Schweiß-Service, zur Startseite"
            width={180}
            height={68}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="py-2 text-[0.95rem] text-white/80 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <OpenStatus className="ml-auto hidden text-sm md:inline-flex lg:ml-0" />

        <a
          href={SITE.phoneHref}
          className="ml-auto inline-flex h-11 items-center gap-2 whitespace-nowrap rounded bg-brand-red px-3 font-semibold transition-colors hover:bg-brand-red-dark md:ml-0 sm:px-4"
        >
          <MdPhone size={18} aria-hidden="true" />
          <span className="tabular-nums">{SITE.phoneLabel}</span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Aufklappmenü direkt unter der Kopfzeile, nur wenn geöffnet im DOM */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Hauptnavigation"
          className="absolute inset-x-0 top-full border-t border-white/10 bg-ink shadow-xl lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/10 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="display block py-4 text-2xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-7xl px-4 pb-5 pt-2 text-sm sm:px-6 md:hidden">
            <OpenStatus />
          </div>
        </nav>
      )}
    </header>
  );
}
