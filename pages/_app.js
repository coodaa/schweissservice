import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Layout from "../components/Layout";
import { CookieConsentProvider } from "../hooks/useCookieConsent";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookieConsentProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </CookieConsentProvider>
    </>
  );
}
