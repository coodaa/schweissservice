"use client";

import { useEffect, useState } from "react";
import { getStatus } from "../lib/hours";

// Liefert null, bis der Browser die Uhrzeit kennt – so bleibt das
// vorgerenderte HTML gültig, egal wann es gebaut wurde.
export function useOpenStatus() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const update = () => setStatus(getStatus());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
