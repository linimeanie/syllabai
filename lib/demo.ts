import type { Course } from "./types";

// Maps a (free-text) niche label to a demo key.
export function nicheKey(niche?: string): "sbf" | "34a" | "jagd" {
  const n = (niche || "").toLowerCase();
  if (n.includes("34a") || n.includes("sachkunde") || n.includes("security") || n.includes("bewach"))
    return "34a";
  if (n.includes("jagd") || n.includes("hunt")) return "jagd";
  return "sbf";
}

export function getDemoCourse(niche?: string): Course {
  return DEMO_COURSES[nicheKey(niche)];
}

// ---------- SBF Binnen (sailing) ----------
const SBF_COURSE: Course = {
  title: "Sportbootführerschein Binnen — Theorie-Vorbereitung",
  description:
    "Vollständiger Theoriekurs zur Vorbereitung auf die SBF-Binnen-Prüfung, automatisch erzeugt aus dem amtlichen ELWIS-Fragenkatalog (300 Fragen). Strukturiert in Module und Lektionen mit Lernzielen, ausformulierten Inhalten, Übungsfragen und Karteikarten.",
  niche: "Sportbootführerschein Binnen",
  examName: "ELWIS Fragenkatalog Binnen",
  language: "de",
  source: "demo",
  sampleLesson: { moduleIndex: 0, lessonIndex: 0 },
  modules: [
    {
      title: "Modul 1 — Allgemeine Grundlagen & Definitionen",
      lessons: [
        {
          title: "Lektion 1.1 — Grundbegriffe der Binnenschifffahrt",
          objectives: [
            "Die wichtigsten Fachbegriffe der Binnenschifffahrt korrekt benennen",
            "Den Aufbau eines Sportbootes und seine Bauteile beschreiben",
            "Den Geltungsbereich der Binnenschifffahrtsstraßen-Ordnung (BinSchStrO) erklären",
          ],
          content: {
            intro:
              "Bevor wir uns mit Verkehrsregeln und Lichterführung beschäftigen, müssen wir eine gemeinsame Sprache sprechen. Die Binnenschifffahrt verwendet zahlreiche Fachbegriffe, die in der Prüfung als bekannt vorausgesetzt werden. In dieser Lektion lernen Sie die grundlegende Terminologie kennen — vom Bug bis zum Heck, von Backbord bis Steuerbord — sowie die rechtliche Grundlage, auf der das gesamte Regelwerk aufbaut: die Binnenschifffahrtsstraßen-Ordnung.",
            sections: [
              {
                heading: "Die Teile des Bootes und ihre Bezeichnungen",
                body:
                  "Am Boot wird die Vorderseite als Bug, die Rückseite als Heck bezeichnet. In Fahrtrichtung gesehen liegt Backbord links (rotes Licht) und Steuerbord rechts (grünes Licht). Eine einfache Eselsbrücke: 'Backbord' und 'links' haben beide weniger Buchstaben als 'Steuerbord' und 'rechts'. Der Rumpf ist der eigentliche Bootskörper; die Wasserlinie markiert die Grenze zwischen Über- und Unterwasserschiff. Diese Begriffe sind nicht nur Theorie — auf dem Wasser müssen Sie blitzschnell verstehen, was ein anderer Schiffsführer meint.",
              },
              {
                heading: "Rechtliche Grundlage: die BinSchStrO",
                body:
                  "Die Binnenschifffahrtsstraßen-Ordnung (BinSchStrO) ist das zentrale Regelwerk für das Verhalten auf deutschen Binnenwasserstraßen wie dem Rhein, der Donau oder den großen Seen. Sie regelt Vorfahrt, Lichterführung, Schallsignale und das Verhalten an Schleusen. Der Sportbootführerschein Binnen berechtigt zum Führen von Sportbooten auf eben diesen Binnenschifffahrtsstraßen. Wer die Regeln der BinSchStrO kennt, hat den Großteil der Prüfung bereits verstanden.",
              },
            ],
            summary:
              "Sie kennen jetzt die grundlegenden Bauteile eines Sportbootes, die Begriffe Backbord/Steuerbord samt Eselsbrücke und die rechtliche Grundlage BinSchStrO. Mit diesem Fundament fällt Ihnen das Verständnis aller folgenden Module deutlich leichter.",
          },
          practiceQuestions: [
            {
              question: "Welche Seite eines Bootes wird als Backbord bezeichnet?",
              options: [
                "Die in Fahrtrichtung linke Seite",
                "Die in Fahrtrichtung rechte Seite",
                "Die Vorderseite des Bootes",
                "Die Rückseite des Bootes",
              ],
              correctIndex: 0,
              explanation:
                "Backbord ist in Fahrtrichtung die linke Seite und führt ein rotes Licht. Eselsbrücke: 'Backbord' und 'links' sind die kürzeren Wörter. Steuerbord (rechts) führt grün.",
            },
            {
              question: "Welche Farbe hat das Positionslicht auf der Steuerbordseite?",
              options: ["Rot", "Grün", "Weiß", "Gelb"],
              correctIndex: 1,
              explanation:
                "Steuerbord (rechts in Fahrtrichtung) führt ein grünes Positionslicht, Backbord (links) ein rotes. Das weiße Licht ist in der Regel das Heck- bzw. Topplicht.",
            },
            {
              question: "Welches Regelwerk gilt auf deutschen Binnenwasserstraßen?",
              options: [
                "Die Straßenverkehrs-Ordnung (StVO)",
                "Die Seeschifffahrtsstraßen-Ordnung (SeeSchStrO)",
                "Die Binnenschifffahrtsstraßen-Ordnung (BinSchStrO)",
                "Die Internationalen Kollisionsverhütungsregeln (KVR)",
              ],
              correctIndex: 2,
              explanation:
                "Für Binnenwasserstraßen gilt die BinSchStrO. Die SeeSchStrO und die KVR gelten auf See, die StVO im Straßenverkehr.",
            },
          ],
          flashcards: [
            { front: "Backbord", back: "In Fahrtrichtung die linke Seite; führt ein rotes Positionslicht." },
            { front: "Steuerbord", back: "In Fahrtrichtung die rechte Seite; führt ein grünes Positionslicht." },
            { front: "Bug / Heck", back: "Bug = Vorderseite des Bootes, Heck = Rückseite." },
            { front: "BinSchStrO", back: "Binnenschifffahrtsstraßen-Ordnung — zentrales Regelwerk für Binnengewässer." },
            { front: "Wasserlinie", back: "Grenze zwischen Überwasser- und Unterwasserschiff am Rumpf." },
            { front: "Eselsbrücke Backbord", back: "'Backbord' und 'links' haben weniger Buchstaben als 'Steuerbord'/'rechts'." },
            { front: "Geltungsbereich SBF Binnen", back: "Führen von Sportbooten auf Binnenschifffahrtsstraßen." },
            { front: "Rumpf", back: "Der eigentliche Bootskörper, der das Boot schwimmfähig macht." },
          ],
        },
        {
          title: "Lektion 1.2 — Sorgfaltspflicht und Verantwortung des Schiffsführers",
          objectives: [
            "Die allgemeine Sorgfaltspflicht nach BinSchStrO erläutern",
            "Pflichten des Schiffsführers vor und während der Fahrt aufzählen",
          ],
        },
      ],
    },
    {
      title: "Modul 2 — Lichterführung & Sichtzeichen",
      lessons: [
        { title: "Lektion 2.1 — Positionslichter bei Nacht", objectives: ["Die vorgeschriebene Lichterführung von Sportbooten beschreiben", "Andere Fahrzeuge anhand ihrer Lichter identifizieren"] },
        { title: "Lektion 2.2 — Tagzeichen und Sichtzeichen", objectives: ["Bälle, Kegel und Zylinder als Tagzeichen deuten", "Die Bedeutung der Taucherflagge erklären"] },
      ],
    },
    {
      title: "Modul 3 — Ausweich- & Manövrierregeln",
      lessons: [
        { title: "Lektion 3.1 — Grundregeln des Ausweichens", objectives: ["Die Begegnung zweier Fahrzeuge regelkonform auflösen", "Den Vorrang der Berufsschifffahrt erklären"] },
        { title: "Lektion 3.2 — Überholen und Begegnen", objectives: ["Sicheres Überholen auf engen Gewässern durchführen"] },
      ],
    },
    {
      title: "Modul 4 — Fahrwasserzeichen & Navigation",
      lessons: [
        { title: "Lektion 4.1 — Schifffahrtszeichen an Binnengewässern", objectives: ["Verbots-, Gebots- und Hinweiszeichen unterscheiden", "Die laterale Betonnung richtig deuten"] },
      ],
    },
  ],
};

// ---------- §34a Sachkundeprüfung (security) ----------
const SEC_COURSE: Course = {
  title: "§34a Sachkundeprüfung — Vorbereitung Bewachungsgewerbe",
  description:
    "Kompletter Vorbereitungskurs auf die IHK-Sachkundeprüfung nach §34a GewO, erzeugt aus dem bundeseinheitlichen DIHK-Rahmenstoffplan. Module zu Recht, Datenschutz, Umgang mit Menschen und Sicherheitstechnik — mit Lernzielen, Inhalten, Übungsfragen und Karteikarten.",
  niche: "§34a Sachkundeprüfung (Bewachungsgewerbe)",
  examName: "DIHK Rahmenstoffplan §34a GewO",
  language: "de",
  source: "demo",
  sampleLesson: { moduleIndex: 0, lessonIndex: 0 },
  modules: [
    {
      title: "Modul 1 — Recht der öffentlichen Sicherheit & Gewerberecht",
      lessons: [
        {
          title: "Lektion 1.1 — Grundbegriffe: öffentliche Sicherheit und Ordnung",
          objectives: [
            "Die Begriffe 'öffentliche Sicherheit' und 'öffentliche Ordnung' abgrenzen",
            "Die Rolle privater Sicherheitsdienste gegenüber staatlichen Befugnissen einordnen",
            "Die Bedeutung des §34a GewO und der Bewacher-ID erklären",
          ],
          content: {
            intro:
              "Die Sachkundeprüfung beginnt mit dem Fundament jeder Sicherheitstätigkeit: dem Rechtsrahmen. Eine Wachperson handelt nicht als Hilfspolizist, sondern als Privatperson mit denselben Rechten wie jeder Bürger — ergänzt durch die Rechte, die ihr der Auftraggeber per Hausrecht überträgt. Wer diesen Unterschied verstanden hat, vermeidet die häufigsten und gefährlichsten Fehler im Dienst. In dieser Lektion klären wir die zentralen Begriffe und die Stellung des privaten Sicherheitsgewerbes.",
            sections: [
              {
                heading: "Öffentliche Sicherheit vs. öffentliche Ordnung",
                body:
                  "Die 'öffentliche Sicherheit' umfasst die Unverletzlichkeit der Rechtsordnung, der subjektiven Rechte des Einzelnen (Leben, Gesundheit, Eigentum) sowie der Einrichtungen des Staates. Die 'öffentliche Ordnung' meint dagegen die ungeschriebenen Regeln, deren Befolgung nach den herrschenden Anschauungen als unerlässliche Voraussetzung eines geordneten Zusammenlebens gilt. Für die Sicherheitskraft ist vor allem die öffentliche Sicherheit relevant: Sie schützt konkrete Rechtsgüter ihres Auftraggebers.",
              },
              {
                heading: "Die rechtliche Stellung der Wachperson",
                body:
                  "Eine private Sicherheitskraft besitzt keine hoheitlichen Befugnisse. Sie darf nur das, was jedem Bürger erlaubt ist (sog. Jedermannsrechte, z. B. das vorläufige Festnahmerecht nach §127 StPO), ergänzt um vom Auftraggeber übertragenes Hausrecht. Wer im Bewachungsgewerbe selbstständig oder als angestellte Wachperson tätig ist, muss die Sachkunde nach §34a GewO nachweisen und im Bewacherregister mit einer Bewacher-ID eingetragen sein. Diese Eintragung ist gesetzlich zwingend.",
              },
            ],
            summary:
              "Sie können nun öffentliche Sicherheit und Ordnung abgrenzen und kennen die zentrale Wahrheit der Branche: Die Wachperson handelt mit Jedermannsrechten plus Hausrecht, nicht mit Polizeibefugnissen. §34a-Sachkunde und Bewacher-ID sind Pflicht.",
          },
          practiceQuestions: [
            {
              question: "Über welche Befugnisse verfügt eine private Wachperson im Dienst grundsätzlich?",
              options: [
                "Dieselben hoheitlichen Befugnisse wie die Polizei",
                "Nur die Jedermannsrechte, ergänzt um übertragenes Hausrecht",
                "Das Recht, Personen ohne Anlass zu durchsuchen",
                "Das Recht, Platzverweise hoheitlich auszusprechen",
              ],
              correctIndex: 1,
              explanation:
                "Private Sicherheitskräfte haben keine hoheitlichen Befugnisse. Sie stützen sich auf die Jedermannsrechte (z. B. §127 StPO vorläufige Festnahme) und auf das vom Auftraggeber übertragene Hausrecht. Polizeiliche Befugnisse stehen ihnen nicht zu.",
            },
            {
              question: "Was ist zwingende Voraussetzung, um als Wachperson tätig werden zu dürfen?",
              options: [
                "Eine abgeschlossene Berufsausbildung",
                "Ein Waffenschein",
                "Sachkunde bzw. Unterrichtung nach §34a GewO und Eintragung im Bewacherregister",
                "Die deutsche Staatsangehörigkeit",
              ],
              correctIndex: 2,
              explanation:
                "Tätigkeiten im Bewachungsgewerbe setzen den Nachweis nach §34a GewO (Unterrichtung oder Sachkundeprüfung) sowie die Eintragung im Bewacherregister mit Bewacher-ID voraus.",
            },
            {
              question: "Was beschreibt der Begriff 'öffentliche Sicherheit'?",
              options: [
                "Ungeschriebene Regeln des Anstands",
                "Die Unverletzlichkeit der Rechtsordnung, individueller Rechtsgüter und staatlicher Einrichtungen",
                "Die Sauberkeit im öffentlichen Raum",
                "Die Verkehrssicherheit auf Straßen",
              ],
              correctIndex: 1,
              explanation:
                "Öffentliche Sicherheit = Schutz der Rechtsordnung, der subjektiven Rechte (Leben, Gesundheit, Eigentum) und staatlicher Einrichtungen. Die ungeschriebenen Anstandsregeln gehören zur 'öffentlichen Ordnung'.",
            },
          ],
          flashcards: [
            { front: "Öffentliche Sicherheit", back: "Unverletzlichkeit der Rechtsordnung, individueller Rechtsgüter und staatlicher Einrichtungen." },
            { front: "Öffentliche Ordnung", back: "Ungeschriebene Regeln, deren Beachtung für ein geordnetes Zusammenleben als unerlässlich gilt." },
            { front: "Jedermannsrecht", back: "Recht, das jedem Bürger zusteht — z. B. vorläufige Festnahme nach §127 StPO." },
            { front: "§127 StPO", back: "Vorläufiges Festnahmerecht bei frischer Tat (gilt auch für Wachpersonen)." },
            { front: "Hausrecht", back: "Vom Eigentümer/Auftraggeber übertragenes Recht, über den Zutritt zu Räumen zu bestimmen." },
            { front: "Bewacher-ID", back: "Pflichteintrag im Bewacherregister; Voraussetzung für die Tätigkeit." },
            { front: "§34a GewO", back: "Rechtsgrundlage für die Sachkunde-/Unterrichtungspflicht im Bewachungsgewerbe." },
            { front: "Befugnisse Wachperson", back: "Keine hoheitlichen Befugnisse — nur Jedermannsrechte + Hausrecht." },
          ],
        },
        { title: "Lektion 1.2 — Gewerberecht und §34a GewO im Detail", objectives: ["Voraussetzungen für die Gewerbeanmeldung nennen", "Zuverlässigkeit nach §34a GewO erklären"] },
      ],
    },
    {
      title: "Modul 2 — Datenschutz & Bürgerliches Recht",
      lessons: [
        { title: "Lektion 2.1 — Grundzüge des Datenschutzes (DSGVO/BDSG)", objectives: ["Personenbezogene Daten erkennen", "Zulässigkeit der Datenverarbeitung beurteilen"] },
        { title: "Lektion 2.2 — Eigentum, Besitz und Notwehr im BGB/StGB", objectives: ["Notwehr und Nothilfe abgrenzen", "Verhältnismäßigkeit anwenden"] },
      ],
    },
    {
      title: "Modul 3 — Straf- & Verfahrensrecht, Umgang mit Waffen",
      lessons: [
        { title: "Lektion 3.1 — Relevante Straftatbestände", objectives: ["Körperverletzung, Nötigung und Hausfriedensbruch unterscheiden"] },
        { title: "Lektion 3.2 — Grundlagen des Waffenrechts", objectives: ["Erlaubnispflichtige Gegenstände einordnen"] },
      ],
    },
    {
      title: "Modul 4 — Umgang mit Menschen & Sicherheitstechnik",
      lessons: [
        { title: "Lektion 4.1 — Deeskalation und Konfliktmanagement", objectives: ["Deeskalationsstufen anwenden", "Eigensicherung beachten"] },
        { title: "Lektion 4.2 — Grundzüge der Sicherheitstechnik", objectives: ["Mechanische und elektronische Sicherungen unterscheiden"] },
      ],
    },
  ],
};

// ---------- Jagdschein (hunting) ----------
const HUNT_COURSE: Course = {
  title: "Jägerprüfung — Vorbereitung auf das 'Grüne Abitur'",
  description:
    "Strukturierter Vorbereitungskurs auf die staatliche Jägerprüfung, erzeugt aus dem Lernzielkatalog. Module zu Wildbiologie, Waffenrecht, Jagdrecht, Jagdhunden und Naturschutz — mit Lernzielen, Inhalten, Übungsfragen und Karteikarten.",
  niche: "Jägerprüfung (Jagdschein)",
  examName: "Lernzielkatalog Jägerprüfung",
  language: "de",
  source: "demo",
  sampleLesson: { moduleIndex: 0, lessonIndex: 0 },
  modules: [
    {
      title: "Modul 1 — Wildbiologie & Wildhege",
      lessons: [
        {
          title: "Lektion 1.1 — Schalenwild erkennen und ansprechen",
          objectives: [
            "Die wichtigsten Schalenwildarten sicher unterscheiden",
            "Geschlecht und Alter im Feld ('Ansprechen') grob bestimmen",
            "Die jagdliche Bedeutung von Setz- und Brunftzeiten erklären",
          ],
          content: {
            intro:
              "Das 'Ansprechen' des Wildes — also das sichere Erkennen von Art, Geschlecht und Alter vor dem Schuss — ist eine Kernkompetenz jeder Jägerin und jedes Jägers. Fehler beim Ansprechen führen zu Fehlabschüssen, die tier-, jagd- und strafrechtlich problematisch sind. In dieser Lektion lernen Sie die wichtigsten Schalenwildarten kennen und worauf es beim Ansprechen ankommt.",
            sections: [
              {
                heading: "Die wichtigsten Schalenwildarten",
                body:
                  "Zum Schalenwild zählen u. a. Rotwild, Damwild, Rehwild, Schwarzwild und Muffelwild. Das Rehwild ist die in Deutschland am weitesten verbreitete Art. Männliches Rehwild trägt ein Gehörn ('Gehörn', nicht 'Geweih'), Rotwild hingegen ein Geweih. Beim Schwarzwild spricht man von Keiler (männlich), Bache (weiblich) und Frischlingen (Jungtiere). Die korrekte Ansprache der Art ist Voraussetzung für jeden gesetzeskonformen Abschuss.",
              },
              {
                heading: "Setz- und Brunftzeiten",
                body:
                  "Die Setzzeit (Geburt der Jungtiere) und die Brunft (Paarungszeit) bestimmen die Schonzeiten und das jagdliche Verhalten. Beim Rehwild liegt die Brunft im Hochsommer (Juli/August), die Setzzeit im Mai/Juni. Während der Setzzeit ist führendes Muttertier (die 'Geiß' beim Reh) besonders geschont, da der Abschuss die abhängigen Jungtiere gefährden würde. Kenntnis dieser Zeiten ist sowohl Tierschutz als auch Prüfungsstoff.",
              },
            ],
            summary:
              "Sie können nun die zentralen Schalenwildarten unterscheiden, kennen die korrekte jagdliche Terminologie (Gehörn vs. Geweih, Keiler/Bache/Frischling) und verstehen, warum Setz- und Brunftzeiten für Schonzeiten und sicheres Ansprechen entscheidend sind.",
          },
          practiceQuestions: [
            {
              question: "Wie bezeichnet man das männliche Schwarzwild?",
              options: ["Bache", "Keiler", "Frischling", "Bock"],
              correctIndex: 1,
              explanation:
                "Beim Schwarzwild heißt das männliche Tier Keiler, das weibliche Bache und die Jungtiere Frischlinge. 'Bock' wird beim Reh- und Muffelwild verwendet.",
            },
            {
              question: "Welchen Kopfschmuck trägt männliches Rehwild?",
              options: ["Ein Geweih", "Ein Gehörn", "Ein Gestänge", "Keinen"],
              correctIndex: 1,
              explanation:
                "Männliches Rehwild trägt ein Gehörn. Der Begriff 'Geweih' ist dem Rot-, Dam- und Elchwild vorbehalten. Korrekte Terminologie ist in der Jägerprüfung wichtig.",
            },
            {
              question: "Warum ist die Kenntnis der Setzzeit jagdlich besonders bedeutsam?",
              options: [
                "Weil in der Setzzeit die Trophäen am größten sind",
                "Weil führende Muttertiere geschont werden, um abhängige Jungtiere nicht zu gefährden",
                "Weil das Wildbret in der Setzzeit am besten schmeckt",
                "Weil in der Setzzeit keine Schonzeiten gelten",
              ],
              correctIndex: 1,
              explanation:
                "In der Setzzeit (Geburt der Jungtiere) ist das führende Muttertier besonders geschont: Sein Abschuss würde die noch abhängigen Jungtiere gefährden. Das ist sowohl Tierschutz als auch geltendes Jagdrecht.",
            },
          ],
          flashcards: [
            { front: "Schalenwild", back: "Wildarten mit Schalen (Hufen): Rot-, Dam-, Reh-, Schwarz-, Muffelwild." },
            { front: "Keiler / Bache / Frischling", back: "Männliches / weibliches / junges Schwarzwild." },
            { front: "Gehörn vs. Geweih", back: "Rehwild trägt ein Gehörn; Rot-/Damwild ein Geweih." },
            { front: "Brunft", back: "Paarungszeit des Schalenwilds (Reh: Juli/August)." },
            { front: "Setzzeit", back: "Geburtszeit der Jungtiere (Reh: Mai/Juni)." },
            { front: "Ansprechen", back: "Sicheres Erkennen von Art, Geschlecht und Alter vor dem Schuss." },
            { front: "Geiß", back: "Weibliches Rehwild (führendes Muttertier besonders geschont)." },
            { front: "Verbreitetste Art", back: "Rehwild — in Deutschland am weitesten verbreitete Schalenwildart." },
          ],
        },
        { title: "Lektion 1.2 — Niederwild und Federwild", objectives: ["Hasen, Kaninchen und Federwildarten unterscheiden", "Lebensräume zuordnen"] },
      ],
    },
    {
      title: "Modul 2 — Waffenrecht, Waffentechnik & Munition",
      lessons: [
        { title: "Lektion 2.1 — Grundlagen des Waffenrechts (WaffG)", objectives: ["Erwerb und Besitz von Jagdwaffen erklären", "Sichere Waffenhandhabung beschreiben"] },
        { title: "Lektion 2.2 — Munitionskunde und Ballistik", objectives: ["Büchsen- und Schrotmunition unterscheiden"] },
      ],
    },
    {
      title: "Modul 3 — Jagdrecht & Naturschutz",
      lessons: [
        { title: "Lektion 3.1 — Bundesjagdgesetz und Schonzeiten", objectives: ["Jagd- und Schonzeiten einordnen", "Hege­pflicht erläutern"] },
        { title: "Lektion 3.2 — Naturschutz und Landschaftspflege", objectives: ["Geschützte Arten erkennen"] },
      ],
    },
    {
      title: "Modul 4 — Jagdhunde, Wildkrankheiten & Jagdpraxis",
      lessons: [
        { title: "Lektion 4.1 — Jagdhundewesen", objectives: ["Hunderassen und ihren jagdlichen Einsatz zuordnen"] },
        { title: "Lektion 4.2 — Wildkrankheiten & Wildbrethygiene", objectives: ["Bedenkliche Merkmale am Wildbret erkennen"] },
      ],
    },
  ],
};

export const DEMO_COURSES: Record<"sbf" | "34a" | "jagd", Course> = {
  sbf: SBF_COURSE,
  "34a": SEC_COURSE,
  jagd: HUNT_COURSE,
};

// Backwards-compatible default export used as the generic fallback.
export const DEMO_COURSE = SBF_COURSE;
