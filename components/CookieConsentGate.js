"use client";

import { useCookieConsent } from "../hooks/useCookieConsent";

export default function CookieConsentGate() {
  const { cookieConsent } = useCookieConsent();

  if (!cookieConsent) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-zinc-100 text-center px-6">
        <p className="text-zinc-500 text-sm mb-2">
          Für die Kartenanzeige sind Cookies erforderlich.
        </p>
        <p className="text-zinc-400 text-xs">
          Bitte akzeptieren Sie die Cookies über den Banner unten.
        </p>
      </div>
    );
  }

  return (
    <iframe
      title="Standort Wagemann Schweiß-Service"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9555.999632641615!2d7.45894!3d53.21785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b64d95cb5d13f5%3A0x900587c6966f4882!2sWagemann%20Schwei%C3%9F%20Service%20UG%20(haftungsbeschr%C3%A4nkt)!5e0!3m2!1sde!2sde!4v1684187422005!5m2!1sde!2sde"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
