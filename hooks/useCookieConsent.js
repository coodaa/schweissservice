"use client";

import React, { useState, createContext, useContext, useEffect, useCallback } from "react";

const KEY = "CookieConsent";
const CookieConsentContext = createContext({
  cookieConsent: undefined,
  updateCookieConsent: () => {},
  resetCookieConsent: () => {},
});

export const useCookieConsent = () => useContext(CookieConsentContext);

// cookieConsent: undefined = noch nicht gelesen, null = noch nicht entschieden,
// true / false = Entscheidung der Besucherin oder des Besuchers.
export const CookieConsentProvider = ({ children }) => {
  const [cookieConsent, setCookieConsent] = useState(undefined);

  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {}
    setCookieConsent(stored === "true" ? true : stored === "false" ? false : null);
  }, []);

  const updateCookieConsent = useCallback((consent) => {
    setCookieConsent(consent);
    try {
      localStorage.setItem(KEY, String(consent));
    } catch {}
  }, []);

  const resetCookieConsent = useCallback(() => {
    setCookieConsent(null);
    try {
      localStorage.removeItem(KEY);
    } catch {}
  }, []);

  return (
    <CookieConsentContext.Provider value={{ cookieConsent, updateCookieConsent, resetCookieConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
