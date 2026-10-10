// Öffnungszeiten: Montag bis Donnerstag, 9 bis 12 Uhr (Ortszeit Leer).
// Feiertage kennt diese Logik nicht.
export const OPEN_DAYS = [1, 2, 3, 4]; // 0 = Sonntag
export const OPENS_AT = 9 * 60;
export const CLOSES_AT = 12 * 60;

const DAY_NAMES = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
const SHORT = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

export function berlinNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    day: SHORT[get("weekday")],
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export function getStatus(date = new Date()) {
  const { day, minutes } = berlinNow(date);
  const isOpenDay = OPEN_DAYS.includes(day);

  if (isOpenDay && minutes >= OPENS_AT && minutes < CLOSES_AT) {
    return { open: true, day, label: "Jetzt geöffnet", detail: "bis 12 Uhr" };
  }

  for (let offset = 0; offset <= 7; offset++) {
    const candidate = (day + offset) % 7;
    if (!OPEN_DAYS.includes(candidate)) continue;
    if (offset === 0 && minutes >= OPENS_AT) continue;
    const when = offset === 0 ? "heute" : offset === 1 ? "morgen" : DAY_NAMES[candidate];
    return { open: false, day, label: "Geschlossen", detail: `öffnet ${when} um 9 Uhr` };
  }
  return { open: false, day, label: "Geschlossen", detail: "" };
}
