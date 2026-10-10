"use client";

import { useState } from "react";
import Image from "next/image";
import { MdDirections, MdMap } from "react-icons/md";
import { SITE } from "../lib/site";

// Zwei-Klick-Lösung: Google Maps wird erst nach ausdrücklichem Klick geladen,
// unabhängig von der Entscheidung zu Statistik-Cookies.
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Karte: Standort Wagemann Schweiß-Service"
        src={SITE.mapEmbedUrl}
        className="h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="relative isolate flex h-full flex-col justify-end bg-ink p-6 text-white sm:p-8">
      <Image
        src="/assets/img/pictures/hafenleer.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 55vw, 100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/20" />
      <p className="display text-3xl sm:text-4xl">{SITE.street}</p>
      <p className="mt-1 text-white/80">{SITE.city}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={SITE.routeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <MdDirections size={20} aria-hidden="true" />
          Route planen
        </a>
        <button type="button" onClick={() => setLoaded(true)} className="btn btn-ghost-dark">
          <MdMap size={20} aria-hidden="true" />
          Karte hier anzeigen
        </button>
      </div>
      <p className="mt-4 max-w-md text-sm text-white/75">
        Die Karte kommt von Google Maps. Beim Anzeigen werden Daten an Google übertragen.{" "}
        <a href="/datenschutz" className="text-link hover:!text-white">
          Mehr dazu
        </a>
      </p>
    </div>
  );
}
