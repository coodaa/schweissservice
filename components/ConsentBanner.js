"use client";

import Link from "next/link";
import { useCookieConsent } from "../hooks/useCookieConsent";

export default function ConsentBanner() {
  const { cookieConsent, updateCookieConsent } = useCookieConsent();

  // Nur zeigen, solange noch keine Entscheidung getroffen wurde.
  if (cookieConsent !== null) return null;

  return (
    <section
      aria-label="Cookie-Einstellungen"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink text-white shadow-[0_-8px_30px_rgb(0_0_0/0.25)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:gap-8">
        <p className="text-sm leading-relaxed text-white/85 md:flex-1">
          Dürfen wir mit Google Analytics messen, wie diese Seite genutzt wird? Die Seite funktioniert auch ohne.{" "}
          <Link href="/datenschutz" className="text-link hover:!text-white">
            Datenschutz
          </Link>
        </p>
        <div className="flex gap-3">
          <button type="button" onClick={() => updateCookieConsent(false)} className="btn btn-ghost-dark flex-1 md:flex-none">
            Ablehnen
          </button>
          <button type="button" onClick={() => updateCookieConsent(true)} className="btn btn-ghost-dark flex-1 md:flex-none">
            Erlauben
          </button>
        </div>
      </div>
    </section>
  );
}
