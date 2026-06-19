import { nicheKey } from "./demo";

// Representative question-catalog excerpts per niche, used by the "Load sample"
// button so the AI engine has real, on-niche source material to transform.

const SBF_SAMPLE = `Amtlicher Fragenkatalog — Sportbootführerschein Binnen (Auszug)

Abschnitt A: Basisfragen
1. Wie ist der Begriff "Backbord" definiert?
a) Die in Fahrtrichtung linke Seite des Fahrzeugs (richtig)
b) Die in Fahrtrichtung rechte Seite des Fahrzeugs
c) Die Vorderseite des Fahrzeugs
d) Die Rückseite des Fahrzeugs

2. Welche Farbe hat das Positionslicht an Steuerbord?
a) Grün (richtig)
b) Rot
c) Weiß
d) Gelb

3. Welches Regelwerk gilt auf deutschen Binnenschifffahrtsstraßen?
a) Die Binnenschifffahrtsstraßen-Ordnung (BinSchStrO) (richtig)
b) Die Straßenverkehrs-Ordnung (StVO)
c) Die Seeschifffahrtsstraßen-Ordnung
d) Die Hafenverordnung

Abschnitt B: Vorfahrt und Ausweichregeln
4. Wer muss ausweichen, wenn ein Sportboot auf ein Fahrgastschiff trifft?
a) Das Sportboot, da die Berufsschifffahrt Vorrang hat (richtig)
b) Das Fahrgastschiff
c) Beide jeweils zur Hälfte
d) Niemand

5. Wie verhalten sich zwei entgegenkommende Maschinenfahrzeuge?
a) Beide weichen nach Steuerbord aus (richtig)
b) Beide weichen nach Backbord aus
c) Das schnellere weicht aus
d) Das größere hat Vorfahrt

Abschnitt C: Lichterführung und Schallsignale
6. Welche Lichter führt ein Maschinenfahrzeug nachts in Fahrt?
a) Topplicht, Seitenlichter (rot/grün) und Hecklicht (richtig)
b) Nur ein weißes Rundumlicht
c) Nur die Seitenlichter
d) Ein gelbes Blinklicht

Abschnitt D: Schifffahrtszeichen
7. Was kennzeichnet eine rote Tonne in der lateralen Betonnung?
a) Die linke Fahrwasserseite (richtig)
b) Die rechte Fahrwasserseite
c) Die Fahrwassermitte
d) Eine Untiefe

Abschnitt E: Umweltschutz und Sicherheit
8. Wie ist mit Altöl an Bord umzugehen?
a) An Land ordnungsgemäß entsorgen, niemals ins Gewässer (richtig)
b) Über Bord werfen
c) Im Wasser verdünnen
d) Verbrennen an Bord`;

const SEC_SAMPLE = `Rahmenstoffplan — Sachkundeprüfung §34a GewO (Auszug)

Themenbereich 1: Recht der öffentlichen Sicherheit und Ordnung
1. Über welche Befugnisse verfügt eine private Wachperson?
a) Dieselben hoheitlichen Befugnisse wie die Polizei
b) Nur die Jedermannsrechte, ergänzt um übertragenes Hausrecht (richtig)
c) Das Recht, ohne Anlass zu durchsuchen
d) Das Recht, hoheitliche Platzverweise auszusprechen

2. Was ist Voraussetzung für eine Tätigkeit als Wachperson?
a) Eine abgeschlossene Berufsausbildung
b) Ein Waffenschein
c) Sachkunde/Unterrichtung nach §34a GewO und Eintragung im Bewacherregister (richtig)
d) Die deutsche Staatsangehörigkeit

Themenbereich 2: Gewerberecht
3. Worauf bezieht sich die "Zuverlässigkeit" nach §34a GewO?
a) Auf die körperliche Fitness
b) Auf die persönliche Eignung und Unbescholtenheit des Gewerbetreibenden (richtig)
c) Auf die Pünktlichkeit
d) Auf die Sprachkenntnisse

Themenbereich 3: Datenschutzrecht
4. Was sind personenbezogene Daten im Sinne der DSGVO?
a) Nur Name und Anschrift
b) Alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen (richtig)
c) Nur Daten von Kunden
d) Nur digital gespeicherte Daten

Themenbereich 4: Bürgerliches Recht und Strafrecht
5. Was setzt eine Notwehrhandlung nach §32 StGB voraus?
a) Einen gegenwärtigen rechtswidrigen Angriff (richtig)
b) Eine schriftliche Genehmigung
c) Die Anwesenheit der Polizei
d) Einen abgeschlossenen Angriff

Themenbereich 5: Umgang mit Menschen
6. Was ist das vorrangige Ziel der Deeskalation?
a) Den Konflikt gewaltfrei zu entschärfen (richtig)
b) Den Gegner einzuschüchtern
c) Möglichst schnell körperlich einzugreifen
d) Den Vorfall zu ignorieren

Themenbereich 6: Unfallverhütung und Sicherheitstechnik
7. Welche Sicherung zählt zur mechanischen Sicherheitstechnik?
a) Die Bewegungsmelder-Alarmanlage
b) Das Sicherheitsschloss bzw. der Riegel (richtig)
c) Die Videoüberwachung
d) Der Wachhund`;

const HUNT_SAMPLE = `Lernzielkatalog — Jägerprüfung (Auszug)

Fach 1: Wildbiologie und Wildhege
1. Wie bezeichnet man das männliche Schwarzwild?
a) Bache
b) Keiler (richtig)
c) Frischling
d) Bock

2. Welchen Kopfschmuck trägt männliches Rehwild?
a) Ein Geweih
b) Ein Gehörn (richtig)
c) Ein Gestänge
d) Keinen

3. Welche ist die in Deutschland am weitesten verbreitete Schalenwildart?
a) Rotwild
b) Rehwild (richtig)
c) Damwild
d) Muffelwild

Fach 2: Waffenrecht und Waffentechnik
4. Was wird zum Erwerb von Jagdwaffen benötigt?
a) Ein gültiger Jagdschein als Voraussetzung für die Waffenbesitzkarte (richtig)
b) Nur ein Personalausweis
c) Eine Gewerbeanmeldung
d) Keine besondere Erlaubnis

Fach 3: Jagdrecht
5. Was versteht man unter einer Schonzeit?
a) Den Zeitraum, in dem eine Wildart nicht bejagt werden darf (richtig)
b) Die Ruhezeit des Jägers
c) Die Zeit nach Sonnenuntergang
d) Die Brutzeit von Singvögeln

Fach 4: Naturschutz
6. Wie verhält sich der Jäger gegenüber führenden Muttertieren in der Setzzeit?
a) Er schont sie, um abhängige Jungtiere nicht zu gefährden (richtig)
b) Er bejagt sie bevorzugt
c) Er vertreibt sie aus dem Revier
d) Es gibt keine besondere Regelung

Fach 5: Jagdhunde und Jagdpraxis
7. Wofür werden Jagdhunde u. a. eingesetzt?
a) Ausschließlich zur Bewachung
b) Zur Nachsuche, zum Apportieren und Stöbern (richtig)
c) Nur als Haustiere
d) Zum Hüten von Nutztieren`;

const SAMPLES: Record<"sbf" | "34a" | "jagd", string> = {
  sbf: SBF_SAMPLE,
  "34a": SEC_SAMPLE,
  jagd: HUNT_SAMPLE,
};

export function getSample(niche?: string): string {
  return SAMPLES[nicheKey(niche)];
}

// Default export kept for any existing import.
export const SAMPLE_SYLLABUS = SBF_SAMPLE;
