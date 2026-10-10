"use client";

import { useOpenStatus } from "../hooks/useOpenStatus";

const ROWS = [
  { label: "Montag", days: [1], time: "9–12 Uhr" },
  { label: "Dienstag", days: [2], time: "9–12 Uhr" },
  { label: "Mittwoch", days: [3], time: "9–12 Uhr" },
  { label: "Donnerstag", days: [4], time: "9–12 Uhr" },
  { label: "Freitag bis Sonntag", days: [5, 6, 0], time: "geschlossen" },
];

export default function HoursTable() {
  const status = useOpenStatus();

  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Öffnungszeiten</caption>
      <tbody>
        {ROWS.map((row) => {
          const today = status && row.days.includes(status.day);
          const closed = row.time === "geschlossen";
          return (
            <tr key={row.label} className={`border-b border-line ${today ? "bg-white" : ""}`}>
              <th scope="row" className={`py-3 pl-3 pr-4 font-normal ${today ? "font-semibold" : ""}`}>
                {row.label}
                {today && <span className="ml-2 text-sm font-normal text-steel">heute</span>}
              </th>
              <td className={`py-3 pr-3 text-right tabular-nums ${closed ? "text-steel" : "font-semibold"}`}>
                {row.time}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
