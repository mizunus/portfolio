const de = {
  nav: {
    about: "Über mich", experience: "Erfahrung", skills: "Fähigkeiten",
    projects: "Projekte", contact: "Kontakt", cta: "Kontakt aufnehmen",
    menuOpen: "Menü öffnen", menuClose: "Menü schließen", language: "Sprache wechseln",
  },
  hero: {
    badge: "Offen für Freelance & Beratung",
    headline: "Ich baue",
    roles: [
      "Systeme, die in Produktion gehen",
      "Commerce-Plattformen",
      "cloud-native Backends",
      "KI, die ihren Platz verdient",
    ],
    introBefore: "Ich bin",
    name: "Siddharth Dangarh",
    introAfter:
      ", Lead Software Engineer bei Saara. Ich habe vier Commerce-Produkte vom leeren Repository bis in die Produktion gebracht — Retouren, Versand, Sendungsverfolgung und die Plattform, die sie verbindet. Dasselbe mache ich jedes Jahr für eine Handvoll Kunden.",
    stack: "Python · Django · Next.js · React · AWS · Azure · Postgres",
    ctaPrimary: "Projekt starten",
    ctaSecondary: "Ansehen, was ich gebaut habe",
  },
  about: {
    label: "Über mich", title: "Mein Weg",
    p1Before: "Meine Faszination für Technik begann mit einer einfachen Frage:",
    p1Quote: "„Wie können wir das Leben mit Code einfacher machen?“",
    p2: "Von der Automatisierung alltäglicher Aufgaben bis zur Architektur KI-gestützter Plattformen haben mich immer Neugier und der Wunsch angetrieben, echte Probleme zu lösen. Heute leite ich die Entwicklung bei Saara, wo ich vier Commerce-Produkte ausgeliefert habe — Retouren, Versand, Sendungsverfolgung und eine agentische KI-Plattform — dazu das vereinheitlichte Commerce OS, das alles unter einem Dach zusammenführt. KI ist Teil dieser Arbeit, nicht ihr Kern; meistens geht es darum, Systeme zu entwerfen, die stabil bleiben, skalieren und auch ein Jahr später angenehm zu pflegen sind.",
    p3Before: "Außerhalb der Arbeit betreibe ich",
    p3After:
      ", ein Labor, in dem ich Ideen in Tagen statt in Quartalen zu funktionierenden Werkzeugen mache. Wenn Sie etwas zu bauen haben, ist das meist der schnellste Weg zu sehen, wie ich arbeite.",
    highlights: [
      { label: "Jahre Erfahrung", value: "4+" },
      { label: "Produkte ausgeliefert", value: "10+" },
      { label: "Standort", value: "Bengaluru" },
    ],
  },
  experience: {
    label: "Erfahrung", title: "Wo ich gearbeitet habe",
    entries: [
      {
        role: "Lead Software Engineer", period: "Sep 2026 - heute", location: "Bengaluru",
        bullets: [
          "Ich verantworte die technische Ausrichtung der KI-Produkte von Saara und setze Architektur und technische Standards über Teams hinweg.",
          "Ich betreue FlyOS von Anfang bis Ende — agentischer KI-Chat mit Tools und Artefakten sowie die KI-Widget- und Workflow-Builder.",
          "Ich begleite Entwickler und leite Design-Reviews, um unklare Produktwetten in lieferbare Systeme zu verwandeln.",
        ],
      },
      {
        role: "Senior Software Developer", period: "Mai 2023 - Aug 2026", location: "Bengaluru",
        bullets: [
          "Ich leitete Architektur und Umsetzung einer KI-Plattform von Grund auf und entwarf Agenten für Rückerstattungen, Produktanalyse und Qualitätskontrolle.",
          "Ich trieb die Cloud-Migration über AWS und Azure hinweg mit soliden Sicherheitspraktiken voran.",
          "Ich lieferte Kernprodukte wie EcoReturns, EcoShip und FlyOS aus.",
        ],
      },
      {
        role: "Software Developer", period: "Jul 2022 - Apr 2023", location: "Bengaluru",
        bullets: [
          "Ich baute einen ChatGPT-gestützten Chatbot für Retouren und Umtausch und modernisierte damit alte Kundenservice-Abläufe.",
          "Ich überarbeitete und stabilisierte Alt-Codebasen und verbesserte Performance und Wartbarkeit.",
          "Ich arbeitete über den gesamten Software-Lebenszyklus hinweg, vom Entwurf bis zum Deployment.",
        ],
      },
    ],
  },
  skills: {
    label: "Fähigkeiten", title: "Technologien, mit denen ich arbeite",
    categories: [
      "Sprachen & Frameworks", "Cloud & Infrastruktur", "Daten & Speicher",
      "KI & APIs", "Werkzeuge & Workflow",
    ],
  },
  projects: {
    label: "Projekte", title: "Was ich gebaut habe",
    blurb:
      "Commerce-Plattformen, die ich bei Saara ausgeliefert habe, dazu ein laufendes Labor an Nebenprojekten. Die meisten sind live — einfach anklicken und ausprobieren.",
    featured: "Hervorgehoben", sunsetted: "Eingestellt", previously: "Früher ausgeliefert",
    roles: {
      flyos: "Lead — Architektur & Agenten-Design",
      commerceos: "Lead — Konzeption und Umsetzung der vereinheitlichten Plattform",
      discuvr: "Allein — Design, Entwicklung, Deployment",
      core: "Kernentwickler",
    },
    items: {
      flyos: "Agentische KI-Plattform, auf der wir ein KI-Chat-Erlebnis mit Tools und Artefakten gebaut haben, dazu einen KI-Widget-Builder und einen KI-Workflow-Builder für schnelle Geschäftsautomatisierung.",
      commerceos: "Ein vereinheitlichtes Dashboard, das alle Saara-Produkte — EcoReturns, EcoShip, EcoTrack und FlyOS — hinter einem Login und einer Oberfläche zusammenführt, sodass Händler ihren gesamten After-Sales-Bereich an einem Ort steuern.",
      discuvr: "Mein eigenes Labor für live geschaltete KI-MVPs: ein Q&A-Bot zum Thema geistiges Eigentum, ein Generator für Patentantworten, ein Vergleichsstand für mehrere LLM-Anbieter, ein Angebotsschreiber, ein Security-Scanner und mehr. Jede Idee wird als etwas ausgeliefert, das man wirklich benutzen kann.",
      ecoreturns: "Plattform für Retourenmanagement, die den Retourenprozess für E-Commerce-Marken vereinfacht, automatisiert und optimiert.",
      ecoship: "KI-gestützte Versandlogistik-Plattform, die Routen optimiert und Emissionen senkt — damit Unternehmen Geld sparen und die Umwelt schonen.",
      ecotrack: "Sendungsverfolgung im eigenen Markenauftritt für Online-Shops: Händler passen die Tracking-Seite mit Logo, Farben und Typografie an und machen aus einem generischen Versandstatus einen Markenkontaktpunkt.",
      cosell: "Plattform für kollaborativen Vertrieb, die Unternehmen half, Partnerschaften einzugehen, Leads zu teilen und über gemeinsame Netzwerke zu wachsen.",
      coloyalty: "KI-gestützte Loyalty-Plattform, die mit intelligenter Segmentierung Prämien ausspielte und so Engagement und Kundenbindung steigerte.",
      ecorefunds: "Eine Lösung, die analysiert, warum Rückerstattungen entstehen, und umsetzbare Vorschläge liefert, um die Quote zu senken.",
    },
  },
  contact: {
    label: "Kontakt", title: "Lassen Sie uns etwas bauen",
    blurb: "Erzählen Sie mir, woran Sie arbeiten. Ich lese jede Nachricht und antworte innerhalb von ein bis zwei Tagen.",
    intentLegend: "Was führt Sie her?",
    intents: {
      project: "Mich für ein Projekt buchen", role: "Über eine Stelle sprechen",
      advice: "Technischen Rat einholen", other: "Etwas anderes",
    },
    name: "Name", namePlaceholder: "Ihr Name",
    email: "E-Mail", emailPlaceholder: "sie@unternehmen.com",
    message: "Was brauchen Sie?",
    messagePlaceholder: "Ein bis zwei Sätze genügen — was Sie bauen und wo es hakt.",
    send: "Nachricht senden", sending: "Wird gesendet…",
    sentTitle: "Nachricht erhalten",
    sentBody: "Danke für Ihre Nachricht — ich melde mich in Kürze unter der angegebenen E-Mail-Adresse.",
    privacy: "Direkt in mein Postfach. Kein Newsletter, keine Liste, kein Spam.",
    errorSuffix: "Sie können mir auch direkt schreiben an",
    emailMe: "Schreiben Sie mir",
  },
  footer: { rights: "Alle Rechte vorbehalten." },
};

export default de;
