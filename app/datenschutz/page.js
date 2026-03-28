import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Wagemann Schweiß-Service Website.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <Link href="/" className="text-brand-red text-sm font-medium hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl font-extrabold text-zinc-900 mb-12 tracking-tight">Datenschutzerklärung</h1>

        <div className="space-y-8 text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-zinc-700 mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-semibold text-zinc-700 mb-2">Datenschutz</h3>
            <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <h3 className="font-semibold text-zinc-700 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />Wagemann Schweiß Service UG (haftungsbeschränkt)<br />Sägemühlenstraße 89<br />26789 Leer (Ostfriesland)<br /><br />Telefon: +49 (0) 491 9293713<br />E-Mail: kontakt@wagemann-schweiss-service.de</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-semibold text-zinc-700 mb-2">Cookies</h3>
            <p className="mb-4">Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir nutzen Cookies, um Google Analytics zu ermöglichen — jedoch nur nach Ihrer ausdrücklichen Einwilligung.</p>
            <h3 className="font-semibold text-zinc-700 mb-2">Google Analytics</h3>
            <p className="mb-4">Diese Website nutzt Google Analytics (nur nach Cookie-Zustimmung). Google Analytics verwendet Cookies zur Analyse der Websitenutzung. Die erzeugten Informationen werden in der Regel an einen Server von Google in den USA übertragen. IP-Anonymisierung ist aktiviert.</p>
            <h3 className="font-semibold text-zinc-700 mb-2">Google Maps</h3>
            <p>Zur Darstellung unseres Standorts nutzen wir Google Maps (nur nach Cookie-Zustimmung). Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">Google Datenschutzrichtlinie</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-900 mb-3">4. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
