// Kleine Gasflasche. Die Schulterfarbe ist die Information:
// Sie kennzeichnet nach DIN EN 1089-3 den Inhalt.
export default function GasCylinder({ shoulder, className = "" }) {
  return (
    <svg viewBox="0 0 24 64" aria-hidden="true" className={className}>
      <rect x="8" y="2" width="8" height="9" rx="2" fill="#55646e" />
      <path d="M3 24v-5C3 11 21 11 21 19v5z" fill={shoulder ?? "#bcc6cb"} />
      <path d="M3 24h18v36a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" fill="#bcc6cb" />
    </svg>
  );
}
