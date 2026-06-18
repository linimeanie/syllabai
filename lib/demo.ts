import type { Course } from "./types";

// Pre-generated, realistic course for the SBF Binnen beachhead niche.
// Used as the live-link fallback when no ANTHROPIC_API_KEY is configured,
// and as the instant "Load sample" experience.
export const DEMO_COURSE: Course = {
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
                  "Am Boot wird die Vorderseite als Bug, die Rückseite als Heck bezeichnet. In Fahrtrichtung gesehen liegt Backbord links (rotes Licht) und Steuerbord rechts (grünes Licht). Eine einfache Eselsbrücke: 'Backbord' und 'links' haben beide weniger Buchstaben als 'Steuerbord' und 'rechts'. Der Rumpf ist der eigentliche Bootskörper; die Wasserlinie markiert die Grenze zwischen Über- und Unterwasserschiff. Diese Begriffe sind nicht nur Theorie — auf dem Wasser müssen Sie blitzschnell verstehen, was ein anderer Schiffsführer meint, wenn er 'Ausweichen nach Steuerbord' signalisiert.",
              },
              {
                heading: "Rechtliche Grundlage: die BinSchStrO",
                body:
                  "Die Binnenschifffahrtsstraßen-Ordnung (BinSchStrO) ist das zentrale Regelwerk für das Verhalten auf deutschen Binnenwasserstraßen wie dem Rhein, der Donau oder den großen Seen. Sie regelt Vorfahrt, Lichterführung, Schallsignale und das Verhalten an Schleusen. Der Sportbootführerschein Binnen berechtigt zum Führen von Sportbooten bis zu einer bestimmten Motorleistung auf eben diesen Binnenschifffahrtsstraßen. Wer die Regeln der BinSchStrO kennt, hat den Großteil der Prüfung bereits verstanden, denn fast alle Fragen leiten sich aus ihr ab.",
              },
            ],
            summary:
              "Sie kennen jetzt die grundlegenden Bauteile eines Sportbootes, die Begriffe Backbord/Steuerbord samt Eselsbrücke und die rechtliche Grundlage BinSchStrO. Mit diesem Fundament fällt Ihnen das Verständnis aller folgenden Module — Lichterführung, Ausweichregeln, Schifffahrtszeichen — deutlich leichter.",
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
                "Backbord ist in Fahrtrichtung die linke Seite und führt ein rotes Licht. Eselsbrücke: 'Backbord' und 'links' sind die kürzeren Wörter. Steuerbord (rechts) führt grün; Bug ist vorne, Heck hinten.",
            },
            {
              question: "Welche Farbe hat das Positionslicht auf der Steuerbordseite?",
              options: ["Rot", "Grün", "Weiß", "Gelb"],
              correctIndex: 1,
              explanation:
                "Steuerbord (rechts in Fahrtrichtung) führt ein grünes Positionslicht, Backbord (links) ein rotes. Das weiße Licht ist in der Regel das Hecklicht bzw. Topplicht. Gelb spielt bei Positionslichtern keine Rolle.",
            },
            {
              question:
                "Welches Regelwerk bildet die rechtliche Grundlage für das Verhalten auf deutschen Binnenwasserstraßen?",
              options: [
                "Die Straßenverkehrs-Ordnung (StVO)",
                "Die Seeschifffahrtsstraßen-Ordnung (SeeSchStrO)",
                "Die Binnenschifffahrtsstraßen-Ordnung (BinSchStrO)",
                "Die Internationalen Kollisionsverhütungsregeln (KVR)",
              ],
              correctIndex: 2,
              explanation:
                "Für Binnenwasserstraßen gilt die BinSchStrO. Die SeeSchStrO und die KVR gelten auf See, die StVO im Straßenverkehr. Der SBF Binnen prüft daher den Inhalt der BinSchStrO.",
            },
          ],
          flashcards: [
            { front: "Backbord", back: "In Fahrtrichtung die linke Seite; führt ein rotes Positionslicht." },
            { front: "Steuerbord", back: "In Fahrtrichtung die rechte Seite; führt ein grünes Positionslicht." },
            { front: "Bug / Heck", back: "Bug = Vorderseite des Bootes, Heck = Rückseite." },
            { front: "BinSchStrO", back: "Binnenschifffahrtsstraßen-Ordnung — zentrales Regelwerk für Binnengewässer." },
            { front: "Wasserlinie", back: "Grenze zwischen Überwasser- und Unterwasserschiff am Rumpf." },
            { front: "Eselsbrücke Backbord", back: "'Backbord' und 'links' haben weniger Buchstaben als 'Steuerbord'/'rechts'." },
            { front: "Geltungsbereich SBF Binnen", back: "Führen von Sportbooten auf Binnenschifffahrtsstraßen bis zu definierter Motorleistung." },
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
        {
          title: "Lektion 2.1 — Positionslichter bei Nacht",
          objectives: [
            "Die vorgeschriebene Lichterführung von Sportbooten beschreiben",
            "Andere Fahrzeuge anhand ihrer Lichter identifizieren",
          ],
        },
        {
          title: "Lektion 2.2 — Tagzeichen und Sichtzeichen",
          objectives: [
            "Bälle, Kegel und Zylinder als Tagzeichen deuten",
            "Die Bedeutung der Flaggen-A (Taucherflagge) erklären",
          ],
        },
      ],
    },
    {
      title: "Modul 3 — Ausweich- & Manövrierregeln",
      lessons: [
        {
          title: "Lektion 3.1 — Grundregeln des Ausweichens",
          objectives: [
            "Die Begegnung zweier Fahrzeuge regelkonform auflösen",
            "Den Vorrang der Berufsschifffahrt erklären",
          ],
        },
        {
          title: "Lektion 3.2 — Überholen und Begegnen",
          objectives: ["Sicheres Überholen auf engen Gewässern durchführen"],
        },
      ],
    },
    {
      title: "Modul 4 — Fahrwasserzeichen & Navigation",
      lessons: [
        {
          title: "Lektion 4.1 — Schifffahrtszeichen an Binnengewässern",
          objectives: [
            "Verbots-, Gebots- und Hinweiszeichen unterscheiden",
            "Die laterale Betonnung (Tonnen) richtig deuten",
          ],
        },
      ],
    },
  ],
};
