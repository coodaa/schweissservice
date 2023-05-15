import React, { useState, createContext, useContext, useEffect } from "react";

const CookieConsentContext = createContext();

export const useCookieConsent = () => {
  return useContext(CookieConsentContext);
};

export const CookieConsentProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState();

  useEffect(() => {
    const consent = localStorage.getItem("CookieConsent");
    setCookieConsent(consent === "true");
  }, []);

  const updateCookieConsent = (consent) => {
    setCookieConsent(consent);
    localStorage.setItem("CookieConsent", consent);
  };

  return (
    <CookieConsentContext.Provider
      value={{ cookieConsent, updateCookieConsent }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};
