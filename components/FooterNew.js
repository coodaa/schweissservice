import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Service", href: "/#serviceSection" },
  { label: "Geschichte", href: "/#historySection" },
  { label: "Öffnungszeiten", href: "/#openingSection" },
  { label: "Kontakt", href: "/#contactSection" },
];

export default function FooterNew() {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo + Beschreibung */}
          <div className="lg:col-span-1">
            <Image
              src="/assets/img/logo/logo-full-white.svg"
              alt="Wagemann Schweiß-Service"
              width={200}
              height={75}
              className="mb-4 opacity-90"
            />
            <p className="text-sm leading-relaxed">
              Ihr Stützpunkthändler für technische Gase und Schweißlösungen im Herzen Ostfrieslands — seit 1998.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">Kontakt</h4>
            <address className="not-italic text-sm space-y-2 leading-relaxed">
              <p>Sägemühlenstraße 89<br />26789 Leer (Ostfriesland)</p>
              <p>
                <a href="tel:+4904919293713" className="hover:text-white transition-colors">+49 (0) 491 9293713</a>
              </p>
              <p>
                <a href="mailto:kontakt@wagemann-schweiss-service.de" className="hover:text-white transition-colors break-all">
                  kontakt@wagemann-schweiss-service.de
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Partner */}
        <div className="border-t border-zinc-800 pt-8 pb-8">
          <p className="text-xs text-zinc-600 mb-2 uppercase tracking-widest">Empfehlung</p>
          <a href="https://www.haus-hamburg-leer.de/" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Haus Hamburg Leer
          </a>
        </div>

        {/* Trennlinie + Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Wagemann Schweiß-Service UG (haftungsbeschränkt) · Design &amp; Code by{" "}
            <a href="https://www.coodaa.de/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
              coodaa
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/wagemannschweissservice/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaFacebookSquare size={22} />
            </a>
            <Link href="/impressum" className="text-xs hover:text-white transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-xs hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
