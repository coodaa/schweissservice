import styles from "../styles/Index.module.css";

export default function Index() {
  return (
    <div className={styles.main}>
      <h1>Hello World</h1>
      <a>
        Für Szenarien, in denen keine dauerhafte Benachrichtigung benötigt wird,
        z. B. die Anzeige von Informationen im Kontext eines bestimmten
        Benutzeroberflächenelements, ist ein Flyout-Steuerelement die bessere
        Option. Für Szenarien, in denen die Anwendung eine Benutzeraktion
        bestätigt und Informationen anzeigt, die der Benutzer lesen muss ,
        verwenden Sie einen ContentDialog. Wenn eine Statusänderung der App so
        schwerwiegend ist, dass sie alle weiteren Möglichkeiten des Benutzers
        zur Interaktion mit der App blockieren muss, verwenden Sie zusätzlich
        ein ContentDialog-Steuerelement. Für Szenarien, in denen eine
        Benachrichtigung vorübergehend zu Lehrzwecken angezeigt wird, ist ein
        TeachingTip-Steuerelement eine bessere Option.
      </a>
    </div>
  );
}
