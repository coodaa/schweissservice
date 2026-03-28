import Image from "next/image";
import Link from "next/link";
import { MdBuild, MdLocalGasStation, MdStorefront, MdFavorite, MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import MapComponent from "../components/MapComponent";
import CookieConsentGate from "../components/CookieConsentGate";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Wagemann Schweiß-Service UG (haftungsbeschränkt)",
  image: "https://www.wagemann-schweiss-service.de/assets/img/pictures/quality.webp",
  "@id": "https://www.wagemann-schweiss-service.de/",
  url: "https://www.wagemann-schweiss-service.de/",
  telephone: "+49-491-9293713",
  email: "kontakt@wagemann-schweiss-service.de",
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sägemühlenstraße 89",
    addressLocality: "Leer (Ostfriesland)",
    postalCode: "26789",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.21785,
    longitude: 7.45894,
  },
  sameAs: ["https://www.facebook.com/wagemannschweissservice/"],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "12:00" },
  ],
};

const SERVICES = [
  { icon: <MdBuild size={32} />, title: "Schweißarbeiten", text: "Von der kleinen Reparatur bis zum Individualprojekt — präzise, zuverlässig und fachgerecht ausgeführt." },
  { icon: <MdLocalGasStation size={32} />, title: "Technische Gase", text: "Acetylon, Argon, CO₂, Mischgas, Propan, Stickstoff, Wasserstoff und viele mehr — stets vorrätig." },
  { icon: <MdStorefront size={32} />, title: "Zubehör & Geräte", text: "Schutzhandschuhe von Hase Safety Gloves und Schweißgeräte von SR Schweißtechnik — Qualität aus der Region." },
  { icon: <MdFavorite size={32} />, title: "Vor-Ort-Beratung", text: "Als Stützpunkthändler beraten wir Sie direkt in Leer — kompetent, ehrlich und ohne Umwege." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="homeSection" className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/assets/img/pictures/landing.webp" alt="Wagemann Schweiß-Service Werkstatt" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-zinc-900/65" />
        <div className="relative z-10 px-4 max-w-3xl mx-auto animate-fade-in">
          <Image
            src="/assets/img/logo/logo-full-white.svg"
            alt="Wagemann Schweiß-Service"
            width={320}
            height={120}
            className="mx-auto mb-8 w-56 sm:w-72"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Technische Gase &amp;<br className="hidden sm:block" /> Schweißlösungen<br className="hidden sm:block" /> in Ostfriesland
          </h1>
          <p className="text-zinc-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ihr Stützpunkthändler für technische Gase und maßgeschneiderte Schweißlösungen im Herzen Ostfrieslands — seit 1998.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contactSection" className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-3.5 text-sm tracking-widest uppercase rounded-lg transition-colors duration-200">
              Kontakt aufnehmen
            </Link>
            <Link href="/#serviceSection" className="border border-white/50 hover:border-white text-white font-semibold px-8 py-3.5 text-sm tracking-widest uppercase rounded-lg transition-colors duration-200">
              Unser Service
            </Link>
          </div>
        </div>
        {/* Scroll-Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ── WARUM WIR ────────────────────────────────────────────────── */}
      <section id="serviceSection" className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4">Warum wir</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight tracking-tight mb-6">
                Qualität, Erfahrung und maßgeschneiderte Lösungen
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Willkommen bei Wagemann Schweiß-Service — Ihrem Stützpunkthändler für technische Gase in Ostfriesland und Experte für maßgeschneiderte Schweißlösungen.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[["1998", "Gegründet"], ["25+", "Jahre Erfahrung"], ["100%", "Regionaler Fokus"], ["Top-Service", "Garantiert"]].map(([val, label]) => (
                  <div key={label} className="border-l-2 border-brand-red pl-4">
                    <div className="text-2xl font-extrabold text-zinc-900">{val}</div>
                    <div className="text-sm text-zinc-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden rounded-2xl">
              <Image src="/assets/img/pictures/gas.webp" alt="Technische Gase bei Wagemann" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-zinc-900/80 p-6">
                <p className="text-white font-semibold text-lg">Top-Service, Fachkenntnis, Lösungen nach Maß</p>
                <p className="text-zinc-400 text-sm mt-1">Ihr verlässlicher Partner in Leer, Ostfriesland</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section className="bg-zinc-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4">Was wir bieten</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">Alles rund ums Schweißen — aus einer Hand</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group border border-zinc-100">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-red/10 text-brand-red mb-5 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">{s.icon}</div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / DARK SECTION ───────────────────────────────────── */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image src="/assets/img/pictures/quality.webp" alt="Qualität bei Wagemann" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-900/80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-6">Unser Versprechen</p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Handwerk aus dem<br /> Herzen Ostfrieslands
          </h2>
          <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Unsere Mission? Ihre Anforderungen zu übertreffen. Vertrauen Sie auf Qualität und Expertise, die Perfektion in jeder Schweißnaht garantiert.
          </p>
        </div>
      </section>

      {/* ── GESCHICHTE ───────────────────────────────────────────────── */}
      <section id="historySection" className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4">Geschichte</p>
            <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight">Die Menschen hinter dem Unternehmen</h2>
          </div>

          {/* Manfred */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-96 overflow-hidden rounded-2xl">
              <Image src="/assets/img/pictures/mannfred.webp" alt="Manfred Wagemann ©Ralph Gebler" fill className="object-cover object-top" />
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-zinc-900 mb-2">Manfred Wagemann</h3>
              <div className="w-12 h-1 bg-brand-red mb-6" />
              <p className="text-zinc-500 leading-relaxed mb-4">Im Jahr 1998 gründete Manfred Wagemann den Wagemann Schweiß-Service — ein Unternehmen, das sich der Bereitstellung von erstklassigen Schweißlösungen und technischen Gasen verschrieben hat.</p>
              <p className="text-zinc-500 leading-relaxed mb-4">Mit einer Vision von Qualität, Zuverlässigkeit und Kundenzufriedenheit baute er das Unternehmen von Grund auf auf und verwandelte es in eine angesehene Adresse für Schweiß- und Gasbedürfnisse in Leer.</p>
              <p className="text-zinc-500 leading-relaxed">Seit seiner Gründung hat sich Wagemann Schweiß-Service kontinuierlich weiterentwickelt, um die Anforderungen einer sich ständig verändernden Branche zu erfüllen.</p>
            </div>
          </div>

          {/* Sunna */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 relative h-96 overflow-hidden rounded-2xl">
              <Image src="/assets/img/pictures/sunna.webp" alt="Sunna Wagemann" fill className="object-cover object-top" />
            </div>
            <div className="lg:order-1">
              <h3 className="text-3xl font-extrabold text-zinc-900 mb-2">Sunna Wagemann</h3>
              <div className="w-12 h-1 bg-brand-red mb-6" />
              <p className="text-zinc-500 leading-relaxed mb-4">Heute, mehr als zwei Jahrzehnte nach der Gründung, steht Wagemann Schweiß-Service unter der Leitung von Sunna Wagemann.</p>
              <p className="text-zinc-500 leading-relaxed mb-4">Sunna führt die Tradition ihres Vaters fort und bietet Kunden weiterhin erstklassige Schweißlösungen, technische Gase und einen unübertroffenen Service.</p>
              <p className="text-zinc-500 leading-relaxed">Die Werte, die das Unternehmen seit seinen Anfängen leiten, sind auch heute noch der Kern unserer Arbeit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÖFFNUNGSZEITEN ───────────────────────────────────────────── */}
      <section id="openingSection" className="relative py-20 px-4 overflow-hidden">
        <Image src="/assets/img/pictures/hafenleer.webp" alt="Hafen Leer Ostfriesland" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-brand-red/90" />
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">Besuchen Sie uns</p>
            <h2 className="text-4xl font-extrabold text-white mb-8 tracking-tight">Unsere Öffnungszeiten</h2>
            <div className="space-y-4">
              {[
                ["Montag – Donnerstag", "09:00 – 12:00 Uhr"],
                ["Freitag", "Geschlossen"],
                ["Samstag & Sonntag", "Geschlossen"],
              ].map(([day, time]) => (
                <div key={day} className="flex justify-between items-center border-b border-white/20 pb-4">
                  <span className="text-white/80 font-medium">{day}</span>
                  <span className="text-white font-bold">{time}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white">
            <p className="text-white/70 text-xs font-bold tracking-[0.2em] uppercase mb-4">Unser Standort</p>
            <h3 className="text-2xl font-bold mb-4">Leer, Ostfriesland</h3>
            <p className="text-white/80 leading-relaxed">Sägemühlenstraße 89<br />26789 Leer (Ostfriesland)</p>
          </div>
        </div>
      </section>

      {/* ── KONTAKT ──────────────────────────────────────────────────── */}
      <section id="contactSection" className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-4">Kontakt</p>
            <h2 className="text-4xl font-extrabold text-zinc-900 tracking-tight">So erreichen Sie uns</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Karte */}
            <div className="h-96 bg-zinc-100 overflow-hidden">
              <CookieConsentGate />
            </div>
            {/* Kontaktdaten */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-6">Wagemann Schweiß Service UG<br /><span className="text-zinc-400 font-normal text-base">(haftungsbeschränkt)</span></h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MdLocationOn className="text-brand-red mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="text-zinc-900 font-medium">Adresse</p>
                      <p className="text-zinc-500 text-sm">Sägemühlenstraße 89<br />26789 Leer (Ostfriesland)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MdPhone className="text-brand-red mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="text-zinc-900 font-medium">Telefon</p>
                      <a href="tel:+4904919293713" className="text-zinc-500 text-sm hover:text-brand-red transition-colors">+49 (0) 491 9293713</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MdEmail className="text-brand-red mt-0.5 shrink-0" size={20} />
                    <div>
                      <p className="text-zinc-900 font-medium">E-Mail</p>
                      <a href="mailto:kontakt@wagemann-schweiss-service.de" className="text-zinc-500 text-sm hover:text-brand-red transition-colors break-all">
                        kontakt@wagemann-schweiss-service.de
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="tel:+4904919293713" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-3.5 text-sm tracking-widest uppercase rounded-lg transition-colors duration-200">
                Jetzt anrufen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SHEEP IMAGE DIVIDER ──────────────────────────────────────── */}
      <div className="h-72 relative overflow-hidden">
        <Image src="/assets/img/pictures/sheep.webp" alt="Ostfriesland" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-900/20" />
      </div>
    </>
  );
}
