"use strict";
const dptCodes = {
  akq: "Akquisition",
  cc: "Callcenter",
  coa: "Coaching",
  edv: "EDV",
  ftm: "Fulltimer",
  gsl: "Geschäftsleitung",
  gfk: "Kommunikation und Design",
  lew: "Lokal Erfolgreich werben",
  mgs: "Mitgliederservice",
  rw: "Rechnungswesen",
  vt: "Vertrieb",
  vwt: "Verwaltung",
  rw: "Rechnungswesen",
};
const allMembers = [
  {
    firstName: "Julia",
    lastName: "Burkhardt",
    position: "Mitarbeitergewinnung",
    relevanceLevels: [],
    tasks: [
      {
        taskNr: "1",
        task: "Reputations&shy;management",
      },
      {
        taskNr: "2",
        task: "Content Management & Web Entwicklung",
      },
      {
        taskNr: "3",
        task: "Corporate Communication Management",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    images: {
      1: "",
      2: "",
    },
    "image-front": "julia_burkhardt_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "1",
      },
    ],
  },
  {
    firstName: "Katja",
    lastName: "Köhler",
    position: "Mitarbeitergewinnung",
    tasks: [
      {
        taskNr: "1",
        task: "Betreuung Jobportale/Google Ads",
      },
      {
        taskNr: "2",
        task: "Vorstellungsgespräche",
      },
      {
        taskNr: "3",
        task: "Scout Coaching",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "katja_köhler_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "2",
      },
    ],
  },
  {
    firstName: "Laura",
    lastName: "Maas",
    position: "Werkstudentin",
    tasks: [],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "laura_maas_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "3",
      },
    ],
  },
  {
    firstName: "Anouk",
    lastName: "Pardon",
    position: "Werkstudentin",
    tasks: [
      {
        taskNr: "1",
        task: "Erstkontaktgespräche",
      },
      {
        taskNr: "2",
        task: "Websitegestaltung",
      },
      {
        taskNr: "3",
        task: "Blogeinträge",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "anouk_pardon_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "4",
      },
    ],
  },
  {
    firstName: "Saskia",
    lastName: "Schirrmacher",
    position: "Mitarbeitergewinnung / Eventmanagement",
    tasks: [
      {
        taskNr: "1",
        task: "Koordination Vorstellungsgespräche & Job Scouts",
      },
      {
        taskNr: "2",
        task: "Leitung Backoffice",
      },
      {
        taskNr: "3",
        task: "Eventmanagement",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "saskia_schirrmacher_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "5",
      },
    ],
  },
  {
    firstName: "Sarah",
    lastName: "Stäbler",
    position: "Mitarbeitergewinnung",
    tasks: [
      {
        taskNr: "1",
        task: "Betreuung der Bewerber*innen",
      },
      {
        taskNr: "2",
        task: "Freundschaftswerbung",
      },
      {
        taskNr: "3",
        task: "Genderbeauftragte",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "sarah_stäbler_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "6",
      },
    ],
  },
  {
    firstName: "Jennifer",
    lastName: "Vrana",
    position: "Werkstudentin",
    tasks: [],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "jennifer_vrana_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "7",
      },
    ],
  },
  {
    firstName: "Meike",
    lastName: "Weber",
    position: "Wesser BackOffice",
    tasks: [
      {
        taskNr: "1",
        task: "Abwicklung nach Vorstellungsgesprächen",
      },
      {
        taskNr: "2",
        task: "Prüfung Vertragsunterlagen",
      },
      {
        taskNr: "3",
        task: "Scout Abrechnungen",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "meike_weber_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "8",
      },
    ],
  },
  {
    firstName: "Robert",
    lastName: "Werzer",
    position: "Leiter Mitarbeitergewinnung",
    tasks: [
      {
        taskNr: "1",
        task: "Recruitment Coordination",
      },
      {
        taskNr: "2",
        task: "Data Handling & Management",
      },
      {
        taskNr: "3",
        task: "Corporate Communication Management",
      },
    ],
    contacts: {
      officePhone: "00497111626640",
      mobilePhone: "08007470800",
      mail: "job@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "robert_werzer_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "akq",
        departmentPosition: "9",
      },
    ],
  },
  {
    firstName: "Joachim",
    lastName: "Grotrian-Steinweg",
    position: "Leiter Call-Center",
    tasks: [
      {
        taskNr: "1",
        task: "Koordination Call Center",
      },
      {
        taskNr: "2",
        task: "Kundenbetreuung",
      },
      {
        taskNr: "3",
        task: "Schulungen für Mitarbeiter*innen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "Joachim.Grotrian-Steinweg@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "cc",
        departmentPosition: "1",
      },
    ],
  },
  {
    firstName: "Emanuel",
    lastName: "Bickel",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "emanuel.bickel@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "emanuel_bickel_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "1",
      },
    ],
  },
  {
    firstName: "Kea",
    lastName: "Franken",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "kea.franken@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "kea_franken_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "2",
      },
    ],
  },
  {
    firstName: "Onno",
    lastName: "Hofmann",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "00491772158845",
      mail: "onno.hofmann@wesser.de",
      whatsapp: "+491772158845",
      telegram: "",
      signal: "",
    },
    "image-front": "onno_hofmann_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "3",
      },
    ],
  },
  {
    firstName: "Christian",
    lastName: "Illgner",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "christian.illgner@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "christian_illgner_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Thomas",
    lastName: "Kammerer",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "thomas.kammerer@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "thomas_kammerer_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Robert",
    lastName: "Ritter",
    position: "Headcoach",
    tasks: [
      {
        taskNr: "1",
        task: "Leitung des Coaching-Teams",
      },
      {
        taskNr: "2",
        task: "Projektmanagement",
      },
      {
        taskNr: "3",
        task: "Mitarbeiter&shy;entwicklung",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "004915771678491",
      mail: "robert.ritter@wesser.de",
      whatsapp: "+4915771678491",
      telegram: "robert_ritter",
      signal: "",
    },
    "image-front": "robert_ritter_2021_1.jpg",
    "image-back": "robert_ritter_2021_2.jpg",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "",
      },
      {
        departmentName: "vt",
        departmentPosition: "1",
      },
    ],
  },
  {
    firstName: "Juliane",
    lastName: "Singer",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "juliane.singer@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "juliane_singer_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Christian",
    lastName: "Stark",
    position: "Coach",
    tasks: [
      {
        taskNr: "1",
        task: "Begleitung & Ausbildung von Teamleitungen",
      },
      {
        taskNr: "2",
        task: "Team- & Personalcoaching",
      },
      {
        taskNr: "3",
        task: "Mitarbeit in Projektgruppen",
      },
    ],
    contacts: {
      officePhone: "+49 711 162 66 16",
      mobilePhone: "",
      mail: "christian.stark@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "christian_stark_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "coa",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Sabine",
    lastName: "Bartholmess",
    position: "Softwareentwicklerin",
    tasks: [
      {
        taskNr: "1",
        task: "Anwendungs&shy;programmierung Mitgliederverwaltung",
      },
      {
        taskNr: "2",
        task: "Qualitätsmanagement und Verarbeitung",
      },
      {
        taskNr: "3",
        task: "App für Tabletwerbung",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "edv@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "sabine_bartholmess_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "edv",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Zdenek",
    lastName: "Drbalek",
    position: "Leiter Softwareentwicklung",
    tasks: [
      {
        taskNr: "1",
        task: "Technische Aspekte der Unternehmensstrategie",
      },
      {
        taskNr: "2",
        task: "Erschließung und Einführung neuer Technologien",
      },
      {
        taskNr: "3",
        task: "Support neue Technologien",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "edv@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "zdenek_drbalek_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "edv",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Volker",
    lastName: "Hohmann",
    position: "IT Administrator",
    tasks: [
      {
        taskNr: "1",
        task: "Verwaltung Server und Netzwerk",
      },
      {
        taskNr: "2",
        task: "Support (intern und Kunden)",
      },
      {
        taskNr: "3",
        task: "Verwaltung Hard- und Software",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "edv@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "volker_hohmann_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "edv",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Hamed",
    lastName: "Javaheri",
    position: "Softwareentwickler",
    tasks: [
      {
        taskNr: "1",
        task: "Organization Management",
      },
      {
        taskNr: "2",
        task: "Kunden Portal",
      },
      {
        taskNr: "3",
        task: "Form Printing",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "edv@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "edv",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Harald",
    lastName: "Ott",
    position: "Leitung IT-Abteilung",
    tasks: [
      {
        taskNr: "1",
        task: "Projektplanung",
      },
      {
        taskNr: "2",
        task: "Projektleitung",
      },
      {
        taskNr: "3",
        task: "Schnittstelle Mitgliederservice",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "edv@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "harrald_ott_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "edv",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Joachim",
    lastName: "Welker",
    position: "Softwareentwickler",
    tasks: [
      {
        taskNr: "1",
        task: "Programmierung und Pflege von Anwendungen",
      },
      {
        taskNr: "2",
        task: "Erstellung Statistiken und Abfragen",
      },
      {
        taskNr: "3",
        task: "Pflege und Neuerstellung von Reporten",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "edv@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "joachim_welker_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "edv",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Marko",
    lastName: "Frech",
    position: "Regionalmanager neue Bundesländer",
    tasks: [
      {
        taskNr: "1",
        task: "Coaching",
      },
      {
        taskNr: "2",
        task: "Vertrieb",
      },
      {
        taskNr: "3",
        task: "Kundenbetreuung und Werbeplanung",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "Marko.Frech@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "marko_frech_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "ftm",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Benita",
    lastName: "Renz",
    position: "Mitarbeiterentwicklung/ -betreuung",
    tasks: [
      {
        taskNr: "1",
        task: "Fulltimer",
      },
      {
        taskNr: "2",
        task: "Mitarbeiterbetreuung Reiseteams",
      },
      {
        taskNr: "3",
        task: "Wesser-Spiel",
      },
    ],
    contacts: {
      officePhone: "+497111626635",
      mobilePhone: "00491777051207",
      mail: "Benita.Renz@wesser.de",
      whatsapp: "+491777051207",
      telegram: "",
      signal: "",
    },
    "image-front": "benita_renz_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "ftm",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Peter",
    lastName: "Renz",
    position: "Geschäftsleitung",
    tasks: [
      {
        taskNr: "1",
        task: "Strategische Unternehmensplanung",
      },
      {
        taskNr: "2",
        task: "Gestaltung der Organisation",
      },
      {
        taskNr: "3",
        task: "Überwachung von Systemstrukturen",
      },
    ],
    contacts: {
      officePhone: "00497111626636",
      mobilePhone: "004916097979992",
      mail: "Peter.Renz@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "peter_renz_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "gsl",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Ajjana",
    lastName: "Baumeister",
    position: "Kommunikation & Corporate Social Responsibility",
    tasks: [
      {
        taskNr: "1",
        task: "Interne und externe Kommunikation",
      },
      {
        taskNr: "2",
        task: "Verwaltung Wesser University",
      },
      {
        taskNr: "3",
        task: "Product Owner Wesser Studio",
      },
    ],
    contacts: {
      officePhone: "+497111626629",
      mobilePhone: "",
      mail: "ajjana.baumeister@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "ajjana_baumeister_2021_2.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "gfk",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Tonia",
    lastName: "Gieray",
    position: "Grafikerin",
    tasks: [
      {
        taskNr: "1",
        task: "Konzeption und Gestaltung aller Kommunikationsmittel",
      },
      {
        taskNr: "2",
        task: "Verwaltung Druckunterlagen",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "tonia_gieray_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "gfk",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Idris",
    lastName: "Al-Abyad",
    position: "Regionalleiter",
    tasks: [],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "lew",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Kore",
    lastName: "Kaluzynski",
    position: "Regionalleiterin",
    tasks: [],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "lew",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Tim",
    lastName: "Steinbach",
    position: "Regionalleiter",
    tasks: [],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "lew",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Chrysovalantis",
    lastName: "Tapras",
    position: "Regionalleiter",
    tasks: [],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "lew",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Jutta",
    lastName: "Anderson",
    position: "Mitgliederverwaltung / Qualitätsmanagement",
    tasks: [
      {
        taskNr: "1",
        task: "Kundenbetreunung",
      },
      {
        taskNr: "2",
        task: "Qualitätskontrolle",
      },
      {
        taskNr: "3",
        task: "Datenmanagement",
      },
    ],
    contacts: {
      officePhone: "00497111626667",
      mobilePhone: "004917643643289",
      mail: "MV@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "jutta_anderson_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "mgs",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Ann-Katrin",
    lastName: "Eberhardt",
    position: "Mitgliederverwaltung / Qualitätsmanagement",
    tasks: [
      {
        taskNr: "1",
        task: "Qualitätsmanagement",
      },
      {
        taskNr: "2",
        task: "Datenverarbeitung",
      },
      {
        taskNr: "3",
        task: "Tabletverwaltung",
      },
    ],
    contacts: {
      officePhone: "00497111626658",
      mobilePhone: "004917643643289",
      mail: "MV@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "ann_katrin_eberhardt_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "mgs",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Karla",
    lastName: "Wachsmann",
    position: "Mitgliederverwaltung / Qualitätsmanagement",
    tasks: [
      {
        taskNr: "1",
        task: "Beitragseinzug",
      },
      {
        taskNr: "2",
        task: "Rechnungstellung/ Statistiken",
      },
      {
        taskNr: "3",
        task: "Kundenbetreuung und Datenmanagement",
      },
    ],
    contacts: {
      officePhone: "00497111626666",
      mobilePhone: "",
      mail: "MV@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "karla_wachsmann_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "mgs",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Anita",
    lastName: "Bauer",
    position: "Rechnungswesen",
    tasks: [
      {
        taskNr: "1",
        task: "Gehalts- und Provisonsabrechnungen Fulltimer",
      },
      {
        taskNr: "2",
        task: "Verwaltungstechnische Aufgaben im Personalbereich",
      },
      {
        taskNr: "3",
        task: "Spesenabrechnung",
      },
    ],
    contacts: {
      officePhone: "00497111626623",
      mobilePhone: "",
      mail: "Anita.Bauer@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "anita_bauer_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "rw",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Manfred",
    lastName: "Binder",
    position: "Rechnungswesen",
    tasks: [
      {
        taskNr: "1",
        task: "Buchhaltung Schweiz",
      },
      {
        taskNr: "2",
        task: "Newcomer Abrechnung",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "",
      mail: "Manfred.Binder@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "rw",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Gerhilde",
    lastName: "Depner",
    position: "Rechnungswesen",
    tasks: [
      {
        taskNr: "1",
        task: "Personalverwaltung Büro-Angestellte und Aushilfen",
      },
      {
        taskNr: "2",
        task: "Lohn und Lohnbuchhaltung",
      },
      {
        taskNr: "3",
        task: "Finanz- und Bilanzbuchhaltung",
      },
    ],
    contacts: {
      officePhone: "00497111626645",
      mobilePhone: "",
      mail: "Gerhilde.Depner@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "rw",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Ludmila",
    lastName: "Dönges",
    position: "Rechnungswesen",
    tasks: [
      {
        taskNr: "1",
        task: "Büroleitung Stans",
      },
      {
        taskNr: "2",
        task: "Rechnungswesen & Controlling Schweiz",
      },
      {
        taskNr: "3",
        task: "Personalwesen Innendienst Schweiz",
      },
    ],
    contacts: {
      officePhone: "00497111626647",
      mobilePhone: "",
      mail: "Ludmila.Doenges@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "ludmila_dönges.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "rw",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Irene",
    lastName: "Kisselew",
    position: "Rechnungswesen",
    tasks: [
      {
        taskNr: "1",
        task: "Handelsvertreter Abrechnung",
      },
      {
        taskNr: "2",
        task: "Kostenerstattungen",
      },
    ],
    contacts: {
      officePhone: "497111626646",
      mobilePhone: "",
      mail: "Irene.Kisselew@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "rw",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Sibylle",
    lastName: "Wesser",
    position: "Rechnungswesen",
    tasks: [
      {
        taskNr: "1",
        task: "Finanzbuchhaltung",
      },
      {
        taskNr: "2",
        task: "Controlling",
      },
      {
        taskNr: "3",
        task: "Verwaltung",
      },
    ],
    contacts: {
      officePhone: "00497111626622",
      mobilePhone: "",
      mail: "Sibylle.Wesser@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "sibylle_wesser_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "rw",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Waldemar",
    lastName: "Günther",
    position: "Special Forces",
    tasks: [
      {
        taskNr: "1",
        task: "Verwaltung",
      },
      {
        taskNr: "2",
        task: "Fuhrparkmanagement",
      },
      {
        taskNr: "3",
        task: "Poststelle",
      },
    ],
    contacts: {
      officePhone: "00497111626631",
      mobilePhone: "",
      mail: "Waldemar.Guenther@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "waldemar_günther_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "vwt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Alexander",
    lastName: "Helwig",
    position: "Werkstudent",
    tasks: [
      {
        taskNr: "1",
        task: "Bestellungen & Kostenerstattungen",
      },
      {
        taskNr: "2",
        task: "Unterstützung Backoffice",
      },
      {
        taskNr: "3",
        task: "Quartiersuche",
      },
    ],
    contacts: {
      officePhone: "00497111626639",
      mobilePhone: "",
      mail: "alexander.helwig@wesser.de",
      whatsapp: "+4917643401842",
      telegram: "",
      signal: "",
    },
    "image-front": "alexander_helwig_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Agnes",
    lastName: "Jorgensen",
    position: "Vertriebsassistentin",
    tasks: [
      {
        taskNr: "1",
        task: "Komplettes Backoffice Vertrieb",
      },
      {
        taskNr: "2",
        task: "Quartiere und Autos",
      },
      {
        taskNr: "3",
        task: "Komplettes Vertragshandling",
      },
    ],
    contacts: {
      officePhone: "00497111626631",
      mobilePhone: "",
      mail: "agnes.jorgensen@wesser.de",
      whatsapp: "+4915232754571",
      telegram: "",
      signal: "",
    },
    "image-front": "",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Oliver",
    lastName: "Kunze",
    position: "Vertriebsleitung JUH / Digital Fundraising",
    tasks: [
      {
        taskNr: "1",
        task: "Kundenbetreuung",
      },
      {
        taskNr: "2",
        task: "Ansprechpartner Teamleiter*innen",
      },
      {
        taskNr: "3",
        task: "Digitale Entwicklung",
      },
    ],
    contacts: {
      officePhone: "+497111626637",
      mobilePhone: "",
      mail: "oliver.kunze@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "oliver_kunze_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Patrick",
    lastName: "Löst",
    position: "Schulungsleiter / Vertriebsleitung Stand",
    tasks: [
      {
        taskNr: "1",
        task: "Vertriebsleitung in der Standwerbung",
      },
      {
        taskNr: "2",
        task: "Entwicklung und Durchführung von Schulungen",
      },
      {
        taskNr: "3",
        task: "Aufbau des regionalen Vertriebskonzeptes LEW",
      },
    ],
    contacts: {
      officePhone: "",
      mobilePhone: "00491759705640",
      mail: "Patrick.Loest@wesser.de",
      whatsapp: "+491759705640",
      telegram: "",
      signal: "",
    },
    "image-front": "patrick_loest_2021_1.jpg?v_DATE",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Marcel",
    lastName: "Müller",
    position: "Vertriebsleitung NABU, BUND und LBV",
    tasks: [
      {
        taskNr: "1",
        task: "Kundenbetreuung",
      },
      {
        taskNr: "2",
        task: "Ansprechpartner Teamleiter*innen",
      },
      {
        taskNr: "3",
        task: "LEW Board",
      },
    ],
    contacts: {
      officePhone: "+497111626632",
      mobilePhone: "",
      mail: "Marcel.Mueller@wesser.de",
      whatsapp: "",
      telegram: "",
      signal: "",
    },
    "image-front": "marcel_mueller_2021_1.jpg?v_DATE",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Oliver",
    lastName: "Schaugg",
    position: "Werkstudent",
    tasks: [
      {
        taskNr: "1",
        task: "Bestellungen & Kostenerstattungen",
      },
      {
        taskNr: "2",
        task: "Unterstützung Backoffice",
      },
      {
        taskNr: "3",
        task: "Quartiersuche",
      },
    ],
    contacts: {
      officePhone: "00497111626634",
      mobilePhone: "",
      mail: "oliver.schaugg@wesser.de",
      whatsapp: "+4917643401842",
      telegram: "",
      signal: "",
    },
    "image-front": "oliver_schaugg_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Anesa",
    lastName: "Shabani",
    position: "Werkstudentin",
    tasks: [
      {
        taskNr: "1",
        task: "Bestellungen & Kostenerstattungen",
      },
      {
        taskNr: "2",
        task: "Unterstützung Backoffice",
      },
      {
        taskNr: "3",
        task: "Quartiersuche",
      },
    ],
    contacts: {
      officePhone: "00497111626638",
      mobilePhone: "",
      mail: "anesa.shabani@wesser.de",
      whatsapp: "+4917643401842",
      telegram: "",
      signal: "",
    },
    "image-front": "anesa_shabani_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
  {
    firstName: "Dayna",
    lastName: "Tscharnke",
    position: "Werkstudentin",
    tasks: [
      {
        taskNr: "1",
        task: "Bestellungen & Kostenerstattungen",
      },
      {
        taskNr: "2",
        task: "Unterstützung Backoffice",
      },
      {
        taskNr: "3",
        task: "Quartiersuche",
      },
    ],
    contacts: {
      officePhone: "00497111626634",
      mobilePhone: "",
      mail: "dayna.tscharnke@wesser.de",
      whatsapp: "+4917643401842",
      telegram: "",
      signal: "",
    },
    "image-front": "dayna_tscharnke_2021_1.jpg",
    "image-back": "",
    department: [
      {
        departmentName: "vt",
        departmentPosition: "",
      },
    ],
  },
];
