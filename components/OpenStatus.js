"use client";

import { useOpenStatus } from "../hooks/useOpenStatus";

// Zeigt live, ob gerade geöffnet ist. Ohne JavaScript bleiben die Zeiten stehen.
export default function OpenStatus({ className = "", tone = "dark" }) {
  const status = useOpenStatus();
  const muted = tone === "dark" ? "text-mist" : "text-steel";

  if (!status) {
    return <span className={className}>Mo–Do 9–12 Uhr</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${status.open ? "bg-emerald-400" : "bg-brand-red-light"}`}
      />
      <span>
        <span className="font-semibold">{status.label}</span>
        {status.detail && <span className={muted}>, {status.detail}</span>}
      </span>
    </span>
  );
}
