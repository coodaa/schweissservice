import Image from "next/image";
import { MdPhone, MdDirections, MdEmail } from "react-icons/md";
import OpenStatus from "../components/OpenStatus";
import HoursTable from "../components/HoursTable";
import MapEmbed from "../components/MapEmbed";
import GasCylinder from "../components/GasCylinder";
import { SITE } from "../lib/site";

// Schulterfarben nach DIN EN 1089-3. Propan ist Flüssiggas und fällt nicht unter die Norm.
const GASES = [
  { name: "Acetylen", formula: "C₂H₂", shoulder: "#6d342d", color: "kastanienbraun", use: "Brenngas zum Autogenschweißen und Brennschneiden" },
  { name: "Argon", formula: "Ar", shoulder: "#2f5d3a", color: "dunkelgrün", use: "Schutzgas zum WIG- und MIG-Schweißen" },
  { name: "Kohlendioxid", formula: "CO₂", shoulder: "#7d807e", color: "grau", use: "Schutzgas zum MAG-Schweißen" },
  { name: "Mischgas", formula: "Ar + CO₂", shoulder: "#5fa33a", color: "leuchtgrün", use: "Schutzgas zum MAG-Schweißen von Stahl" },
  { name: "Stickstoff", formula: "N₂", shoulder: "#101214", color: "schwarz", use: "Zum Formieren, Spülen und Druckprüfen" },
  { name: "Wasserstoff", formula: "H₂", shoulder: "#b3261e", color: "rot", use: "Brenngas und Bestandteil von Formiergas" },
  { name: "Propan", formula: "C₃H₈", shoulder: null, color: null, use: "Flüssiggas zum Wärmen, Löten und Heizen" },
];

const SERVICES = [
  {
    title: "Schweißarbeiten",
    text: "Von der kleinen Reparatur bis zum Einzelstück nach Ihren Vorgaben. Präzise und fachgerecht ausgeführt.",
  },
  {
    title: "Geräte und Zubehör",
    text: "Schweißgeräte von SR Schweißtechnik und Schutzhandschuhe von Hase Safety Gloves.",
  },
  {
    title: "Beratung vor Ort",
    text: "Wir beraten Sie in Leer, welches Gas und welches Gerät zu Ihrer Arbeit passt. Ehrlich und ohne Umwege.",
  },
];

const FAQ = [
  {
    q: "Welche Gase bekomme ich bei Wagemann in Leer?",
    a: "Am Lager haben wir Acetylen, Argon, Kohlendioxid (CO₂), Mischgas, Propan, Stickstoff und Wasserstoff. Wir führen noch viele weitere Gase. Rufen Sie an, wenn Sie etwas Bestimmtes suchen.",
  },
  {
    q: "Wann kann ich vorbeikommen?",
    a: "Montag bis Donnerstag von 9 bis 12 Uhr. Freitag, Samstag und Sonntag ist geschlossen.",
  },
  {
    q: "Wo finde ich Sie?",
    a: "In der Sägemühlenstraße 89 in 26789 Leer (Ostfriesland).",
  },
  {
    q: "Übernehmen Sie auch kleine Schweißarbeiten?",
    a: "Ja. Wir schweißen von der kleinen Reparatur bis zum Einzelstück nach Ihren Vorgaben.",
  },
  {
    q: "Führen Sie auch Schweißgeräte und Zubehör?",
    a: "Ja. Wir führen Schweißgeräte von SR Schweißtechnik und Schutzhandschuhe von Hase Safety Gloves und beraten Sie vor Ort, was zu Ihrer Arbeit passt.",
  },
];

const BASE_URL = "https://www.wagemann-schweiss-service.de";

// Strukturierte Daten für Google, gespeist aus denselben Listen wie die Seite.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Wagemann Schweiß-Service UG (haftungsbeschränkt)",
      alternateName: "Wagemann Schweiß-Service",
      description:
        "Stützpunkthändler für technische Gase in Leer (Ostfriesland). Dazu Schweißarbeiten, Schweißgeräte und Zubehör.",
      url: `${BASE_URL}/`,
      image: `${BASE_URL}/assets/img/og.jpg`,
      logo: `${BASE_URL}/assets/img/logo/wagemann_logo.svg`,
      telephone: "+49-491-9293713",
      email: SITE.email,
      foundingDate: "1998",
      founder: { "@type": "Person", name: "Manfred Wagemann" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sägemühlenstraße 89",
        addressLocality: "Leer (Ostfriesland)",
        postalCode: "26789",
        addressRegion: "Niedersachsen",
        addressCountry: "DE",
      },
      geo: { "@type": "GeoCoordinates", latitude: 53.21785, longitude: 7.45894 },
      hasMap: SITE.routeUrl,
      areaServed: { "@type": "AdministrativeArea", name: "Ostfriesland" },
      sameAs: [SITE.facebook],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "12:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday", "Sunday"], opens: "00:00", closes: "00:00" },
      ],
      knowsAbout: ["Technische Gase", "Schweißgas", "Schutzgasschweißen", "Autogenschweißen", "Schweißgeräte"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Technische Gase und Schweißservice",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Technische Gase",
            itemListElement: GASES.map((gas) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: gas.name, description: gas.use },
            })),
          },
          {
            "@type": "OfferCatalog",
            name: "Leistungen",
            itemListElement: SERVICES.map((service) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: service.title, description: service.text },
            })),
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Einstieg: was, wo, wann geöffnet ─────────────────────────── */}
      <section id="homeSection" className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_1fr]">
          <div className="px-4 pb-12 pt-12 sm:px-6 sm:pt-16 lg:pb-20 lg:pr-12 lg:pt-24">
            <h1 className="display text-[clamp(2.75rem,8vw,5.5rem)]">
              Technische Gase und Schweißservice in Leer
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              Ihr Stützpunkthändler für technische Gase in Ostfriesland. Dazu Schweißarbeiten, Geräte und Zubehör. Seit 1998.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={SITE.phoneHref} className="btn btn-primary">
                <MdPhone size={20} aria-hidden="true" />
                <span className="tabular-nums">{SITE.phoneLabel} anrufen</span>
              </a>
              <a href={SITE.routeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark">
                <MdDirections size={20} aria-hidden="true" />
                Route planen
              </a>
            </div>
            <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-white/15 pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-mist">Öffnungszeiten</dt>
                <dd className="mt-1">
                  <p className="font-semibold">Montag bis Donnerstag, 9–12 Uhr</p>
                  <OpenStatus className="mt-1 text-sm" />
                </dd>
              </div>
              <div>
                <dt className="text-sm text-mist">Adresse</dt>
                <dd className="mt-1">
                  <p className="font-semibold">{SITE.street}</p>
                  <p className="mt-1 text-sm text-mist">{SITE.city}</p>
                </dd>
              </div>
            </dl>
          </div>
          <div className="relative min-h-[18rem] sm:min-h-[24rem] lg:min-h-0">
            <Image
              src="/assets/img/pictures/landing.webp"
              alt="Schweißer bei der Arbeit, Funken fliegen"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Gase ─────────────────────────────────────────────────────── */}
      <section id="gasSection" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:py-24">
          <div>
            <h2 className="display text-4xl sm:text-5xl">Diese Gase haben wir am Lager</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">
              Als Stützpunkthändler in Leer halten wir die gängigen technischen Gase und Schweißgase in Flaschen vorrätig. Ihr Gas steht nicht in der Liste? Rufen Sie an, wir führen noch viele weitere.
            </p>
            <div className="relative mt-8 hidden aspect-[4/3] overflow-hidden lg:block">
              <Image
                src="/assets/img/pictures/gas.webp"
                alt="Gasflaschen im Lager"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
              {GASES.map((gas) => (
                <li key={gas.name} className="flex gap-4 border-b border-line py-4">
                  <GasCylinder shoulder={gas.shoulder} className="h-[4.5rem] w-auto shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">
                      {gas.name} <span className="ml-1 text-base font-normal text-steel">{gas.formula}</span>
                    </h3>
                    <p className="mt-1 leading-snug text-steel">{gas.use}</p>
                    {gas.color && <p className="mt-1 text-sm text-steel">Flaschenschulter {gas.color}</p>}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel">
              Die Farbe der Flaschenschulter zeigt den Inhalt an (DIN EN 1089-3).
            </p>
          </div>
        </div>
      </section>

      {/* ── Leistungen ───────────────────────────────────────────────── */}
      <section id="serviceSection" className="bg-paper">
        <div className="mx-auto grid max-w-7xl items-start gap-x-16 gap-y-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="relative aspect-[3/2] overflow-hidden lg:sticky lg:top-24">
            <Image
              src="/assets/img/pictures/quality.webp"
              alt="Schweißer mit Schutzhelm und Lederschürze an der Werkbank"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="display text-4xl sm:text-5xl">Alles rund ums Schweißen aus einer Hand</h2>
            <ul className="mt-8 border-t border-ink">
              {SERVICES.map((service) => (
                <li key={service.title} className="border-b border-line py-6">
                  <h3 className="display text-2xl sm:text-3xl">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-lg leading-relaxed text-steel">{service.text}</p>
                </li>
              ))}
            </ul>
            <a href={SITE.phoneHref} className="btn btn-ghost mt-8">
              <MdPhone size={20} aria-hidden="true" />
              Anfrage per Telefon
            </a>
          </div>
        </div>
      </section>

      {/* ── Über uns ─────────────────────────────────────────────────── */}
      <section id="historySection" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="display max-w-3xl text-4xl sm:text-5xl">Ein Familienbetrieb, zwei Generationen</h2>

          <div className="mt-12 grid gap-x-16 gap-y-14 md:grid-cols-2">
            <article>
              <div className="relative aspect-[4/5] max-w-sm overflow-hidden">
                <Image
                  src="/assets/img/pictures/mannfred.webp"
                  alt="Manfred Wagemann in der Werkstatt"
                  fill
                  sizes="(min-width: 768px) 24rem, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="display mt-6 text-5xl text-brand-red">1998</p>
              <h3 className="mt-2 text-2xl font-semibold">Manfred Wagemann</h3>
              <p className="mt-3 max-w-lg text-lg leading-relaxed text-steel">
                1998 gründete Manfred Wagemann den Schweiß-Service in Leer. Er baute den Betrieb von Grund auf und machte ihn zu einer angesehenen Adresse für Schweißarbeiten und technische Gase.
              </p>
              <p className="mt-3 text-sm text-steel">Foto: Ralph Gebler</p>
            </article>

            <article>
              <div className="relative aspect-[4/5] max-w-sm overflow-hidden">
                <Image
                  src="/assets/img/pictures/sunna.webp"
                  alt="Sunna Wagemann an der Werkbank"
                  fill
                  sizes="(min-width: 768px) 24rem, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="display mt-6 text-5xl text-brand-red">Heute</p>
              <h3 className="mt-2 text-2xl font-semibold">Sunna Wagemann</h3>
              <p className="mt-3 max-w-lg text-lg leading-relaxed text-steel">
                Heute leitet Sunna Wagemann den Betrieb. Sie führt die Tradition ihres Vaters fort: Schweißlösungen, technische Gase und ein Service, auf den sich Kundinnen und Kunden verlassen können.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Häufige Fragen ───────────────────────────────────────────── */}
      <section id="faqSection" className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-x-16 gap-y-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.5fr] lg:py-24">
          <h2 className="display text-4xl sm:text-5xl">Häufige Fragen</h2>
          <div className="border-t border-ink">
            {FAQ.map((item) => (
              <details key={item.q} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-brand-red" />
                    <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-brand-red transition-transform duration-200 group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 text-lg leading-relaxed text-steel">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Besuch & Kontakt ─────────────────────────────────────────── */}
      <section id="openingSection" className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <h2 className="display text-4xl sm:text-5xl">Besuch und Kontakt</h2>

          <div className="mt-10 grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h3 className="text-xl font-semibold">Öffnungszeiten</h3>
              <OpenStatus tone="light" className="mt-2" />
              <div className="mt-4 border-t border-ink">
                <HoursTable />
              </div>

              <div id="contactSection" className="mt-10">
                <h3 className="text-xl font-semibold">Kontakt</h3>
                <p className="mt-2 text-steel">{SITE.legalName}</p>
                <ul className="mt-4 space-y-1">
                  <li>
                    <a href={SITE.phoneHref} className="group inline-flex min-h-11 items-center gap-3">
                      <MdPhone size={20} className="shrink-0 text-brand-red" aria-hidden="true" />
                      <span className="text-link text-lg font-semibold tabular-nums group-hover:text-brand-red">{SITE.phoneLabel}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${SITE.email}`} className="group inline-flex min-h-11 items-center gap-3">
                      <MdEmail size={20} className="shrink-0 text-brand-red" aria-hidden="true" />
                      <span className="text-link break-all group-hover:text-brand-red">{SITE.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="h-[26rem] overflow-hidden lg:h-auto lg:min-h-[28rem]">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>

      {/* ── Ostfriesland ─────────────────────────────────────────────── */}
      <div className="relative h-56 sm:h-72">
        <Image
          src="/assets/img/pictures/sheep.webp"
          alt="Schafe auf einem Deich in Ostfriesland"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
    </>
  );
}
