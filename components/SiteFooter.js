import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import CookieSettingsButton from "./CookieSettingsButton";
import { SITE, NAV_LINKS } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/assets/img/logo/logo-full-white.svg"
              alt="Wagemann Schweiß-Service"
              width={200}
              height={75}
              className="mb-5 h-12 w-auto"
            />
            <p className="max-w-xs leading-relaxed">
              Technische Gase und Schweißservice in Leer, Ostfriesland. Seit 1998.
            </p>
          </div>

          <nav aria-label="Fußzeile">
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="space-y-2.5 not-italic">
            <p>
              {SITE.street}
              <br />
              {SITE.city}
            </p>
            <p>
              <a href={SITE.phoneHref} className="tabular-nums transition-colors hover:text-white">
                {SITE.phoneLabel}
              </a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-white">
                {SITE.email}
              </a>
            </p>
          </address>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm">
          Unsere Empfehlung in Leer:{" "}
          <a href="https://www.haus-hamburg-leer.de/" target="_blank" rel="noopener noreferrer" className="text-link text-white hover:!text-white">
            Haus Hamburg
          </a>
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>© {new Date().getFullYear()} {SITE.legalName}</p>
            <p className="mt-1">
              Design &amp; Code by{" "}
              <a href="https://www.coodaa.de/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white transition-colors hover:text-brand-red-light">
                coodaa.de
              </a>
            </p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link href="/impressum" className="transition-colors hover:text-white">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition-colors hover:text-white">Datenschutz</Link>
            </li>
            <li>
              <CookieSettingsButton className="transition-colors hover:text-white" />
            </li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Wagemann Schweiß-Service auf Facebook" className="block transition-colors hover:text-white">
                <FaFacebookSquare size={22} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
