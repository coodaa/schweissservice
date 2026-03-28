import Link from "next/link";
import { MdPhone, MdEmail } from "react-icons/md";

export const metadata = {
  title: "Impressum",
  description: "Impressum der Wagemann Schweiß Service UG – Angaben gemäß § 5 TMG.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/impressum" },
};

export default function Impressum() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/" className="text-brand-red text-sm font-medium hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-12 tracking-tight">Impressum</h1>

        <div className="space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Angaben gemäß § 5 TMG</h2>
            <p>Wagemann Schweiß Service UG (haftungsbeschränkt)<br />Sägemühlenstraße 89<br />26789 Leer (Ostfriesland)</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Vertreten durch</h2>
            <p>Geschäftsführerin Helga Wagemann</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Kontakt</h2>
            <p className="flex items-center gap-2 mb-1">
              <MdPhone className="text-brand-red shrink-0" />
              <a href="tel:+4904919293713" className="hover:text-brand-red transition-colors">+49 (0) 491 9293713</a>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-brand-red shrink-0" />
              <a href="mailto:kontakt@wagemann-schweiss-service.de" className="hover:text-brand-red transition-colors">
                kontakt@wagemann-schweiss-service.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Registereintrag</h2>
            <p>Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Aurich<br />Registernummer: HRB 204232</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Umsatzsteuer</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE 123456789</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Bildnachweis</h2>
            <p>Herzlichen Dank an Ralph Gebler vom <a href="https://www.sonntags-report.de/cms/front_content.php" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">SonntagsReport</a> für das Foto von Manfred Wagemann.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Helga Wagemann<br />Sägemühlenstraße 89<br />26789 Leer (Ostfriesland)</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">https://ec.europa.eu/consumers/odr</a>. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
