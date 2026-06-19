// Representative question-catalog excerpts per niche, used by the "Load sample"
// button so the AI engine has real, on-niche source material to transform.
// Content is grounded in each exam's published subject structure but written as
// representative items (not verbatim copies of copyrighted official catalogs).

type SampleKey = "sbf" | "34a" | "jagd" | "ppl" | "hairdresser" | "care" | "radio";

function sampleKey(niche?: string): SampleKey {
  const n = (niche || "").toLowerCase();
  if (/(ppl|pilot|flug|aviation)/.test(n)) return "ppl";
  if (/(friseur|hairdress|journeyman)/.test(n)) return "hairdresser";
  if (/(care|pflege|nursing|nurse)/.test(n)) return "care";
  if (/(radio|funk|src|ubi|lrc)/.test(n)) return "radio";
  if (/(34a|sachkunde|security|bewach)/.test(n)) return "34a";
  if (/(jagd|hunt)/.test(n)) return "jagd";
  return "sbf";
}

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

const PPL_SAMPLE = `ECQB-PPL Fragenkatalog — Privatpilotenlizenz PPL(A) (Auszug)

Fach: Luftrecht
1. Was bedeutet die Abkürzung "QNH"?
a) Der auf Meereshöhe reduzierte Luftdruck zur Höhenmesseinstellung (richtig)
b) Die aktuelle Windrichtung
c) Die Pistenausrichtung
d) Die Funkfrequenz des Towers

2. Welche Mindestsichten gelten in der Regel im unkontrollierten Luftraum unterhalb 3000 ft (VFR)?
a) Keine Mindestsicht erforderlich
b) Flugsicht von mindestens 1,5 km und frei von Wolken (richtig)
c) 10 km bei jeder Höhe
d) Nur bei Nacht relevant

Fach: Meteorologie
3. Wie verändert sich der Luftdruck mit zunehmender Höhe?
a) Er steigt
b) Er bleibt konstant
c) Er nimmt ab (richtig)
d) Er schwankt zufällig

4. Was beschreibt der Taupunkt?
a) Die Temperatur, bei der die Luft mit Wasserdampf gesättigt ist (richtig)
b) Den höchsten Punkt einer Wolke
c) Die Reisefluggeschwindigkeit
d) Den Gefrierpunkt des Treibstoffs

Fach: Navigation
5. Wie groß ist 1 Seemeile näherungsweise?
a) 1000 m
b) 1609 m
c) 1852 m (richtig)
d) 500 m

Fach: Grundlagen des Fliegens
6. Wodurch entsteht der Auftrieb an einer Tragfläche hauptsächlich?
a) Durch den Triebwerksschub
b) Durch den Druckunterschied zwischen Ober- und Unterseite des Profils (richtig)
c) Durch das Gewicht des Flugzeugs
d) Durch die Lackierung

Fach: Menschliches Leistungsvermögen
7. Was ist Hypoxie?
a) Sauerstoffmangel im Körper (richtig)
b) Ein Überschuss an Sauerstoff
c) Eine Form der Seekrankheit
d) Ein Navigationsfehler

Fach: Kommunikation
8. Wie wird der Buchstabe "R" im ICAO-Alphabet gesprochen?
a) Romeo (richtig)
b) Roger
c) Radio
d) Rapid`;

const HAIR_SAMPLE = `Gesellenprüfung Friseurhandwerk — Theorie Teil 1 (Auszug, Lernfelder 1–7)

Lernfeld: Haar und Kopfhaut beurteilen, reinigen und pflegen
1. Welcher pH-Wert ist typisch für ein hautfreundliches Shampoo?
a) pH 5,5 (leicht sauer) (richtig)
b) pH 9 (basisch)
c) pH 1 (stark sauer)
d) pH 14 (stark basisch)

2. Woraus besteht das Haar hauptsächlich?
a) Aus dem Eiweiß Keratin (richtig)
b) Aus Zellulose
c) Aus Kollagen
d) Aus Melatonin

Lernfeld: Haare mit klassischen Techniken schneiden
3. Was bewirkt ein stumpfer Schnitt (Bluntcut)?
a) Eine gleichmäßige, kompakte Haarkante (richtig)
b) Ein stark ausgedünntes Ergebnis
c) Eine Dauerwelle
d) Eine Aufhellung

Lernfeld: Haare mit Umformungstechniken gestalten (Coloration/Dauerwelle)
4. Welche Substanz öffnet bei der oxidativen Färbung die Schuppenschicht?
a) Ammoniak bzw. ein alkalisches Mittel (richtig)
b) Zitronensäure
c) Kochsalz
d) Reines Wasser

5. Was bewirkt das Reduktionsmittel bei der Dauerwelle?
a) Es spaltet die Disulfidbrücken im Haar (richtig)
b) Es härtet das Haar sofort
c) Es färbt das Haar
d) Es trocknet die Kopfhaut

Lernfeld: Hygiene und Arbeitsschutz
6. Warum müssen Friseurwerkzeuge desinfiziert werden?
a) Um die Übertragung von Krankheitserregern zu verhindern (richtig)
b) Nur aus optischen Gründen
c) Um sie schärfer zu machen
d) Das ist nicht erforderlich

Lernfeld: Kunden serviceorientiert betreuen
7. Was gehört an den Beginn einer professionellen Kundenberatung?
a) Die Analyse von Haar, Kopfhaut und Kundenwunsch (richtig)
b) Sofort mit dem Schneiden beginnen
c) Den Preis verschweigen
d) Den Kunden allein lassen`;

const CARE_SAMPLE = `Kenntnisprüfung Pflege — Anerkennung ausländischer Pflegefachkräfte (Auszug)

Kompetenzbereich: Pflegeprozess und Pflegediagnostik
1. In welcher Reihenfolge läuft der Pflegeprozess idealtypisch ab?
a) Informationssammlung, Problemerkennung, Planung, Durchführung, Evaluation (richtig)
b) Durchführung, Planung, Evaluation, Informationssammlung
c) Evaluation, Durchführung, Planung
d) Es gibt keine feste Reihenfolge

2. Was versteht man unter einer Pflegediagnose?
a) Die fachliche Einschätzung eines pflegerischen Problems als Grundlage der Planung (richtig)
b) Die ärztliche Verordnung von Medikamenten
c) Die Abrechnung mit der Krankenkasse
d) Den Dienstplan der Station

Kompetenzbereich: Grundpflege und Prophylaxen
3. Welche Maßnahme dient der Dekubitusprophylaxe?
a) Regelmäßige Lagerung und Druckentlastung (richtig)
b) Reichliche Flüssigkeitskarenz
c) Dauerhafte Bettruhe ohne Bewegung
d) Verzicht auf Hautbeobachtung

Kompetenzbereich: Hygiene
4. Wann ist die hygienische Händedesinfektion u. a. erforderlich?
a) Vor und nach jedem direkten Patientenkontakt (richtig)
b) Nur am Ende der Schicht
c) Nur bei sichtbarer Verschmutzung
d) Niemals mit Handschuhen

Kompetenzbereich: Arzneimittel
5. Was gehört zur sicheren Medikamentengabe (6-R-Regel)?
a) Richtiger Patient, richtiges Medikament, richtige Dosierung, Applikation, Zeit und Dokumentation (richtig)
b) Nur das richtige Medikament
c) Nur die richtige Uhrzeit
d) Eine freie Auswahl durch die Pflegekraft

Kompetenzbereich: Recht und Ethik
6. Was ist vor einer pflegerischen Maßnahme grundsätzlich einzuholen?
a) Die Einwilligung des einwilligungsfähigen Patienten (richtig)
b) Die Erlaubnis der Verwaltung
c) Nichts, Pflege erfolgt immer ohne Rücksprache
d) Eine polizeiliche Genehmigung

Kompetenzbereich: Kommunikation
7. Was kennzeichnet aktives Zuhören?
a) Zuwendung, Nachfragen und Zusammenfassen des Gesagten (richtig)
b) Den Patienten unterbrechen
c) Gleichzeitig dokumentieren und weghören
d) Ausschließlich Fachbegriffe verwenden`;

const RADIO_SAMPLE = `Fragenkatalog Sprechfunkzeugnis — SRC (Seefunk) / UBI (Binnenfunk) (Auszug)

Themenblock: Not-, Dringlichkeits- und Sicherheitsverkehr
1. Mit welchem Wort wird ein Notruf (höchste Priorität) eingeleitet?
a) MAYDAY (richtig)
b) PAN-PAN
c) SECURITE
d) ROGER

2. Wofür steht der Anruf "PAN-PAN"?
a) Für eine Dringlichkeitsmeldung (richtig)
b) Für einen Seenotfall mit unmittelbarer Lebensgefahr
c) Für eine reine Routinemeldung
d) Für einen Funktest

3. Womit wird eine Sicherheitsmeldung (z. B. Wetterwarnung) eingeleitet?
a) SECURITE (richtig)
b) MAYDAY
c) PAN-PAN
d) BREAK

Themenblock: DSC / GMDSS
4. Wofür dient DSC (Digital Selective Calling)?
a) Zum digitalen Aussenden von Anrufen und Notalarmen per Knopfdruck (richtig)
b) Zum Empfang von Fernsehprogrammen
c) Zur Navigation per Satellit
d) Zur Motorsteuerung

5. Welche Information gehört zwingend in einen DSC-Notalarm, sofern verfügbar?
a) Die eigene Position (richtig)
b) Der Name des Hafenmeisters
c) Die Lieblingsfarbe des Skippers
d) Die Bootsversicherung

Themenblock: Funkverfahren und Buchstabieralphabet
6. Wie wird der Buchstabe "Q" im internationalen Buchstabieralphabet gesprochen?
a) Quebec (richtig)
b) Quito
c) Queen
d) Quick

7. Welcher UKW-Kanal ist der internationale Anruf- und Notkanal im Seefunk?
a) Kanal 16 (richtig)
b) Kanal 6
c) Kanal 72
d) Kanal 10`;

const SAMPLES: Record<SampleKey, string> = {
  sbf: SBF_SAMPLE,
  "34a": SEC_SAMPLE,
  jagd: HUNT_SAMPLE,
  ppl: PPL_SAMPLE,
  hairdresser: HAIR_SAMPLE,
  care: CARE_SAMPLE,
  radio: RADIO_SAMPLE,
};

export function getSample(niche?: string): string {
  return SAMPLES[sampleKey(niche)];
}

// Default export kept for any existing import.
export const SAMPLE_SYLLABUS = SBF_SAMPLE;
