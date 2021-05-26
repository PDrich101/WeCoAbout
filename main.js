"use strict"

const dptCodes = {
    akq: "Akquisition",
    edv: "EDV",
    ftm: "Fulltimer",
    gsf: "Geschäftsführung",
    cc: "Callcenter",
    coa: "Coaching",
    vt: "Vertrieb",
    mgs: "Mitgliederservice",
    gsl: "Geschäftsleitung",
    rw: "Rechnungswesen",
    gfk: "Kommunikation und Design",
    vwt: "Verwaltung",
    na: "Nicht angegebene Abteilung",
    lew: "Lokal Erfolgreich Werben"
}
const featureRequest = [

]
const allMembers = [
    {

        "firstName": "Julia",
        "lastName": "Burkhardt",
        "position": "Mitarbeitergewinnung",
        "relevanceLevels": [],
        "tasks": [
            {
                "taskNr": "1",
                "task": "Reputations&shy;management"
            },
            {
                "taskNr": "2",
                "task": "Content Management & Web Entwicklung"
            },
            {
                "taskNr": "3",
                "task": "Corporate Communication Management"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "images": {
            "1": "",
            "2": ""
        },
        "image-front": "julia_burkhardt_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "1"
            }
        ]
    },
    {
        "firstName": "Katja",
        "lastName": "Köhler",
        "position": "Mitarbeitergewinnung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Betreuung Jobportale/Google Ads"
            },
            {
                "taskNr": "2",
                "task": "Vorstellungsgespräche"
            },
            {
                "taskNr": "3",
                "task": "Scout Coaching"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "katja_köhler_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "2"
            }
        ]
    },
    {
        "firstName": "Laura",
        "lastName": "Maas",
        "position": "Werkstudentin",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "laura_maas_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "3"
            }
        ]
    },
    {
        "firstName": "Anouk",
        "lastName": "Pardon",
        "position": "Werkstudentin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Erstkontaktgespräche"
            },
            {
                "taskNr": "2",
                "task": "Websitegestaltung"
            },
            {
                "taskNr": "3",
                "task": "Blogeinträge"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "anouk_pardon_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "4"
            }
        ]
    },
    {
        "firstName": "Saskia",
        "lastName": "Schirrmacher",
        "position": "Mitarbeitergewinnung / Eventmanagement",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Koordination Vorstellungsgespräche & Job Scouts"
            },
            {
                "taskNr": "2",
                "task": "Leitung Backoffice"
            },
            {
                "taskNr": "3",
                "task": "Eventmanagement"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "saskia_schirrmacher_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "5"
            }
        ]
    },
    {
        "firstName": "Sarah",
        "lastName": "Stäbler",
        "position": "Mitarbeitergewinnung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Betreuung der Bewerber*innen"
            },
            {
                "taskNr": "2",
                "task": "Freundschaftswerbung"
            },
            {
                "taskNr": "3",
                "task": "Genderbeauftragte"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "sarah_stäbler_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "6"
            }
        ]
    },
    {
        "firstName": "Jennifer",
        "lastName": "Vrana",
        "position": "Werkstudentin",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "jennifer_vrana_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "7"
            }
        ]
    },
    {
        "firstName": "Meike",
        "lastName": "Weber",
        "position": "Wesser BackOffice",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Abwicklung nach Vorstellungsgesprächen"
            },
            {
                "taskNr": "2",
                "task": "Prüfung Vertragsunterlagen"
            },
            {
                "taskNr": "3",
                "task": "Scout Abrechnungen"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "meike_weber_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "8"
            }
        ]
    },
    {
        "firstName": "Robert",
        "lastName": "Werzer",
        "position": "Leiter Mitarbeitergewinnung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Recruitment Coordination"
            },
            {
                "taskNr": "2",
                "task": "Data Handling & Management"
            },
            {
                "taskNr": "3",
                "task": "Corporate Communication Management"
            }
        ],
        "contacts": {
            "officePhone": "00497111626644",
            "mobilePhone": "00491727757788",
            "mail": "robert.werzer@wesser.de",
            "whatsapp": "+491727757788",
            "telegram": "PDrich",
            "signal": ""
        },
        "image-front": "robert_werzer_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "akq",
                "departmentPosition": "9"
            }
        ]
    },
    {
        "firstName": "Joachim",
        "lastName": "Grotrian-Steinweg",
        "position": "Leiter Call-Center",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Koordination Call Center"
            },
            {
                "taskNr": "2",
                "task": "Kundenbetreuung"
            },
            {
                "taskNr": "3",
                "task": "Schulungen für Mitarbeiter*innen"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "cc",
                "departmentPosition": "1"
            }
        ]
    },
    {
        "firstName": "Emanuel",
        "lastName": "Bickel",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": "1"
            }
        ]
    },
    {
        "firstName": "Kea",
        "lastName": "Franken",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": "2"
            }
        ]
    },
    {
        "firstName": "Onno",
        "lastName": "Hofmann",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": "3"
            }
        ]
    },
    {
        "firstName": "Christian",
        "lastName": "Illgner",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Thomas",
        "lastName": "Kammerer",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Robert",
        "lastName": "Ritter",
        "position": "Headcoach",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Leitung des Coaching-Teams"
            },
            {
                "taskNr": "2",
                "task": "Projektmanagement"
            },
            {
                "taskNr": "3",
                "task": "Mitarbeiterentwicklung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "004915771678491",
            "mail": "robert.ritter@wesser.de",
            "whatsapp": "+4915771678491",
            "telegram": "robert_ritter",
            "signal": ""
        },
        "image-front": "robert_ritter_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Juliane",
        "lastName": "Singer",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Christian",
        "lastName": "Stark",
        "position": "Coach",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "coa",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Sabine",
        "lastName": "Bartholmess",
        "position": "Softwareentwicklerin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Anwendungs&shy;programmierung Mitgliederverwaltung"
            },
            {
                "taskNr": "2",
                "task": "Qualitätsmanagement und Verarbeitung"
            },
            {
                "taskNr": "3",
                "task": "App für Tabletwerbung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "sabine_bartholmess_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Zdenek",
        "lastName": "Drbalek",
        "position": "Leiter Softwareentwicklung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Technische Aspekte der Unternehmensstrategie"
            },
            {
                "taskNr": "2",
                "task": "Erschließung und Einführung neuer Technologien"
            },
            {
                "taskNr": "3",
                "task": "Support neue Technologien"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "zdenek_drbalek_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Volker",
        "lastName": "Hohmann",
        "position": "IT Administrator",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Verwaltung Server und Netzwerk"
            },
            {
                "taskNr": "2",
                "task": "Support (intern und Kunden)"
            },
            {
                "taskNr": "3",
                "task": "Verwaltung Hard- und Software"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "volker_hohmann_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Hamed",
        "lastName": "Javaheri",
        "position": "Softwareentwickler",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Organization Management"
            },
            {
                "taskNr": "2",
                "task": "Kunden Portal"
            },
            {
                "taskNr": "3",
                "task": "Form Printing"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Harald",
        "lastName": "Ott",
        "position": "Leitung IT-Abteilung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Projektplanung"
            },
            {
                "taskNr": "2",
                "task": "Projektleitung"
            },
            {
                "taskNr": "3",
                "task": "Schnittstelle Mitgliederservice"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "harrald_ott_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Joachim",
        "lastName": "Welker",
        "position": "Softwareentwickler",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Programmierung und Pflege von Anwendungen"
            },
            {
                "taskNr": "2",
                "task": "Erstellung Statistiken und Abfragen"
            },
            {
                "taskNr": "3",
                "task": "Pflege und Neuerstellung von Reporten"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "joachim_welker_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Marko",
        "lastName": "Frech",
        "position": "Regionalmanager neue Bundesländer",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Coaching"
            },
            {
                "taskNr": "2",
                "task": "Vertrieb"
            },
            {
                "taskNr": "3",
                "task": "Kundenbetreuung und Werbeplanung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "marko_frech_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "ftm",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Benita",
        "lastName": "Renz",
        "position": "Mitarbeiterentwicklung/ -betreuung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Fulltimer"
            },
            {
                "taskNr": "2",
                "task": "Mitarbeiterbetreuung Reiseteams"
            },
            {
                "taskNr": "3",
                "task": "Wesser-Spiel"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "benita_renz_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "ftm",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Peter",
        "lastName": "Renz",
        "position": "Geschäftsleitung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Strategische Unternehmensplanung"
            },
            {
                "taskNr": "2",
                "task": "Gestaltung der Organisation"
            },
            {
                "taskNr": "3",
                "task": "Überwachung von Systemstrukturen"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "peter_renz_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "gsl",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Ajjana",
        "lastName": "Baumeister",
        "position": "Kommunikation & Corporate Social Responsibility",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Interne und externe Kommunikation"
            },
            {
                "taskNr": "2",
                "task": "Verwaltung Wesser University"
            },
            {
                "taskNr": "3",
                "task": "Product Owner Wesser Studio"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "ajjana_baumeister_2021_2.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "gfk",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Tonia",
        "lastName": "Gieray",
        "position": "Grafikerin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Konzeption und Gestaltung aller Kommunikationsmittel"
            },
            {
                "taskNr": "2",
                "task": "Verwaltung Druckunterlagen"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "tonia_gieray_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "gfk",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Idris",
        "lastName": "Al-Abyad",
        "position": "Regionalleiter",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "lew",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Kore",
        "lastName": "Kaluzynski",
        "position": "Regionalleiterin",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "lew",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Tim",
        "lastName": "Steinbach",
        "position": "Regionalleiter",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "lew",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Chrysovalantis",
        "lastName": "Tapras",
        "position": "Regionalleiter",
        "tasks": [],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "lew",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Jutta",
        "lastName": "Anderson",
        "position": "Mitgliederverwaltung / Qualitätsmanagement",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Kundenbetreunung"
            },
            {
                "taskNr": "2",
                "task": "Qualitätskontrolle"
            },
            {
                "taskNr": "3",
                "task": "Datenmanagement"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "jutta_anderson_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "mgs",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Ann-Katrin",
        "lastName": "Eberhardt",
        "position": "Mitgliederverwaltung / Qualitätsmanagement",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Qualitätsmanagement"
            },
            {
                "taskNr": "2",
                "task": "Datenverarbeitung"
            },
            {
                "taskNr": "3",
                "task": "Tabletverwaltung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "ann_katrin_eberhardt_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "mgs",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Karla",
        "lastName": "Wachsmann",
        "position": "Mitgliederverwaltung / Qualitätsmanagement",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Beitragseinzug"
            },
            {
                "taskNr": "2",
                "task": "Rechnungstellung/ Statistiken"
            },
            {
                "taskNr": "3",
                "task": "Kundenbetreuung und Datenmanagement"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "karla_wachsmann_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "mgs",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Anita",
        "lastName": "Bauer",
        "position": "Rechnungswesen",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Gehalts- und Provisonsabrechnungen Fulltimer"
            },
            {
                "taskNr": "2",
                "task": "Verwaltungstechnische Aufgaben im Personalbereich"
            },
            {
                "taskNr": "3",
                "task": "Spesenabrechnung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "anita_bauer_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "rw",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Manfred",
        "lastName": "Binder",
        "position": "Rechnungswesen",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Buchhaltung Schweiz"
            },
            {
                "taskNr": "2",
                "task": "Newcomer Abrechnung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "rw",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Gerhilde",
        "lastName": "Depner",
        "position": "Rechnungswesen",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Personalverwaltung Büro-Angestellte und Aushilfen"
            },
            {
                "taskNr": "2",
                "task": "Lohn und Lohnbuchhaltung"
            },
            {
                "taskNr": "3",
                "task": "Finanz- und Bilanzbuchhaltung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "rw",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Ludmila",
        "lastName": "Dönges",
        "position": "Rechnungswesen",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Büroleitung Stans"
            },
            {
                "taskNr": "2",
                "task": "Rechnungswesen & Controlling Schweiz"
            },
            {
                "taskNr": "3",
                "task": "Personalwesen Innendienst Schweiz"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "ludmila_dönges.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "rw",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Irene",
        "lastName": "Kisselew",
        "position": "Rechnungswesen",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Handelsvertreter Abrechnung"
            },
            {
                "taskNr": "2",
                "task": "Kostenerstattungen"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "rw",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Sibylle",
        "lastName": "Wesser",
        "position": "Rechnungswesen",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Finanzbuchhaltung"
            },
            {
                "taskNr": "2",
                "task": "Controlling"
            },
            {
                "taskNr": "3",
                "task": "Verwaltung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "sibylle_wesser_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "rw",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Waldemar",
        "lastName": "Günther",
        "position": "Special Forces",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Verwaltung"
            },
            {
                "taskNr": "2",
                "task": "Fuhrparkmanagement"
            },
            {
                "taskNr": "3",
                "task": "Poststelle"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "waldemar_günther_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vwt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Alexander",
        "lastName": "Helwig",
        "position": "Werkstudent",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Bestellungen & Kostenerstattungen"
            },
            {
                "taskNr": "2",
                "task": "Unterstützung Backoffice"
            },
            {
                "taskNr": "3",
                "task": "Quartiersuche"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "alexander_helwig_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Agnes",
        "lastName": "Jorgensen",
        "position": "Vertriebsassistentin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Komplettes Backoffice Vertrieb"
            },
            {
                "taskNr": "2",
                "task": "Quartiere und Autos"
            },
            {
                "taskNr": "3",
                "task": "Komplettes Vertragshandling"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Oliver",
        "lastName": "Kunze",
        "position": "Vertriebsleitung JUH / Digital Fundraising",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Kundenbetreuung"
            },
            {
                "taskNr": "2",
                "task": "Ansprechpartner Teamleiter*innen"
            },
            {
                "taskNr": "3",
                "task": "Digitale Entwicklung"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "004917620200315",
            "mail": "oliver.kunze@wesser.de",
            "whatsapp": "+4917620200315",
            "telegram": "",
            "signal": ""
        },
        "image-front": "oliver_kunze_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Patrick",
        "lastName": "Löst",
        "position": "Schulungsleiter / Bereichsleiter Infostandwerbung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Vertriebsleitung in der Standwerbung"
            },
            {
                "taskNr": "2",
                "task": "Entwicklung und Durchführung von Schulungen"
            },
            {
                "taskNr": "3",
                "task": "Aufbau des regionalen Vertriebskonzeptes LEW"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "patrick_loest_2021_1.jpg?v_DATE",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Marcel",
        "lastName": "Müller",
        "position": "Vertriebsleitung NABU, BUND und LBV",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Kundenbetreuung"
            },
            {
                "taskNr": "2",
                "task": "Ansprechpartner Teamleiter*innen"
            },
            {
                "taskNr": "3",
                "task": "LEW Board"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "marcel_mueller_2021_1.jpg?v_DATE",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Oliver",
        "lastName": "Schaugg",
        "position": "Werkstudent",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Bestellungen & Kostenerstattungen"
            },
            {
                "taskNr": "2",
                "task": "Unterstützung Backoffice"
            },
            {
                "taskNr": "3",
                "task": "Quartiersuche"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "oliver_schaugg_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Anesa",
        "lastName": "Shabani",
        "position": "Werkstudentin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Bestellungen & Kostenerstattungen"
            },
            {
                "taskNr": "2",
                "task": "Unterstützung Backoffice"
            },
            {
                "taskNr": "3",
                "task": "Quartiersuche"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "anesa_shabani_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    },
    {
        "firstName": "Dayna",
        "lastName": "Tscharnke",
        "position": "Werkstudentin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Bestellungen & Kostenerstattungen"
            },
            {
                "taskNr": "2",
                "task": "Unterstützung Backoffice"
            },
            {
                "taskNr": "3",
                "task": "Quartiersuche"
            }
        ],
        "contacts": {
            "officePhone": "",
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "dayna_tscharnke_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    }
]

const getID = (() => {
    let counter = -1
    return () => {
        counter++
        return counter
    }
})()

const dptModule = {
    master: [],
    vars: {
        selectedDpt: "",
        mobileMode : false,
        mainElements: {},
        navElementUL: [],
        dptSection: {},
    },
    helper:{
        createContactDiv(member, property){
            const div = document.createElement("div");
            const title = document.createElement("p");
            const tag = document.createElement("span");
            const link = document.createElement("a");
            const icon = document.createElement("img");
            if(property == "mobilePhone"){
                title.innerText = "Telefon Mobil";
                tag.innerText = member.contacts.mobilePhone 
                link.setAttribute("href", "tel:" + member.contacts.mobilePhone);
                icon.setAttribute("src", dptModule.vars.path + "ICON_mobil.svg");
            }
            if(property == "officePhone"){
                title.innerText = "Telefon Büro";
                tag.innerText = member.contacts.officePhone;
                link.setAttribute("href", "tel:" + member.contacts.officePhone);
                icon.setAttribute("src", dptModule.vars.path + "ICON_phone.svg");
            }
            if(property == "mail"){
                title.innerText = "E-Mail";
                tag.innerText = member.contacts.mail;
                link.setAttribute("href", "mailto:" + member.contacts.mail);
                icon.setAttribute("src", dptModule.vars.path + "ICON_mobil.svg");
            }
            if(property == "whatsapp"){
                title.innerText = "WhatsApp";
                tag.innerText = "WhatsApp Chat starten";
                link.setAttribute("href", "whatsapp://send?phone=" + member.contacts.whatsapp);
                link.setAttribute("target", "_blank");
                icon.setAttribute("src", dptModule.vars.path + "ICON_mobil.svg");
            }
            if(property == "telegram"){
                title.innerText = "Telegram";
                tag.innerText = "ID: @" + member.contacts.telegram;
                link.setAttribute("href", "https://telegram.me/" + member.contacts.telegram);
                link.setAttribute("target", "_blank");
                icon.setAttribute("src", dptModule.vars.path + "ICON_mobil.svg");
            }
            div.appendChild(title);
            div.appendChild(tag);
            link.appendChild(icon);
            div.appendChild(link);


            return div;
        },
        createParagraph(member, property){
            const paragraph = document.createElement("p");
            paragraph.innerText = member[property]
            return paragraph;
        }
    },
    init(mainContainer, defaultDpt, path) {
        this.vars.mainElements.mainContainer = mainContainer
        this.vars.selectedDpt = defaultDpt;
        this.vars.path =path;
        // ggf MobileMode aktivierenb
        window.mobileAndTabletCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
          };
        // this.vars.mobileMode = window.mobileAndTabletCheck();
        this.vars.mobileMode = true;
        console.log("mobileMode", this.vars.mobileMode)
        // JSON parsen oder in dem Fall definieren
        this.vars.allMembers = allMembers;
        //createMaster
        this.createMaster()

        console.log("INIT: this.vars.mainElements.mainContainer",this.vars.mainElements.mainContainer)
        console.log("INIT: this.vars.selectedDpt",this.vars.selectedDpt)

        // Hauptelemente erstellen
        const cardNav = document.createElement("section");
        cardNav.setAttribute("id", "card-nav");
        const cardContainer = document.createElement("section");
        cardContainer.setAttribute("id", "display");
        //createDisplay->in vars speichern
        this.vars.mainElements.cardNav = cardNav;
        this.vars.mainElements.cardContainer = cardContainer;

        //Navigation und Fenster an MasterContainer anfügen
        this.vars.mainElements.mainContainer.appendChild(cardNav);
        this.vars.mainElements.mainContainer.appendChild(cardContainer);

        console.log("INIT: this.vars.mainElements",this.vars.mainElements)
        console.log("INIT",this.master)

        this.createContainer()
    },
    createLightBox(member){
        console.log("createLightBox aufgerufen", member)
        console.log("this in CreateLightBox()", this);
        //lightBox inkl. Klassen erstellen
        const lightBoxOverlay = document.createElement("div");
        lightBoxOverlay.classList.add("light-box");
        lightBoxOverlay.setAttribute("id", "lightbox");
        // Klick-Listener für die gesamte Fläche hinzufügen
        lightBoxOverlay.addEventListener("click", ()=>{this.emit("closeLightBox")});
        //contentBox inkl. Klassen erstellen
        const lightBoxContent = document.createElement("div");

        lightBoxContent.addEventListener("click",(event) =>{event.stopPropagation();})
        lightBoxContent.classList.add("content-box");
        //Bildcontainer mit Bild und Klassen erstellen
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image-lightbox");
        const image = document.createElement("img");
        if (member["image-front"] != "") {
            image.setAttribute("src", this.vars.path + member["image-front"]);
            image.setAttribute("alt", "Titelbild von " + member.firstName + " " + member.lastName);
        } else {
            image.setAttribute("src", this.vars.path + "usersecret.jpg");
            image.setAttribute("alt", "Anonymes Titelbild von " + member.firstName + " " + member.lastName);
        }
        imageContainer.appendChild(image);
        //Namecontainer mit Name und Position erstellen
        const nameContainer = document.createElement("div");
        nameContainer.classList.add("card-overview-lightbox");

        nameContainer.appendChild(this.helper.createParagraph(member, "firstName"));
        nameContainer.appendChild(this.helper.createParagraph(member, "lastName"));
        nameContainer.appendChild(this.helper.createParagraph(member, "position"));

        //Kontaktcontainer erstellen
        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container")

        //ADD LOGIC HERE
        for(const contact in member.contacts){
            if(member.contacts[contact] != ""){
            contactContainer.appendChild(this.helper.createContactDiv(member, contact));
            }
        }

        // Image und nameContainer in contentBox einfügen
        lightBoxContent.appendChild(imageContainer);
        lightBoxContent.appendChild(nameContainer);
        lightBoxContent.appendChild(contactContainer)
        // ContentBox an Lightbox hängen
        lightBoxOverlay.appendChild(lightBoxContent);
        //LightBox in DOM anhängen
        this.vars.mainElements.mainContainer.appendChild(lightBoxOverlay);

        // Lightbox in Hauptelementen speichern
        this.vars.mainElements.lightBox = lightBoxOverlay;
    }
    ,
    /**
     * Erstellung des Master-Arrays, auf dem die weitere Programmstruktur aufbaut.
     * In verknüpfung mit der createSingleDepartment-Funktion 
     */
    createMaster() {
        // Alle Mitarbeiter werden der jeweils gesetzten Abteilung zugeordnet,
        // und vorerst in ein Hilfsobjekt allDptMembers geschrieben
        const allDptMembers = {};
        for (const member of this.vars.allMembers) {
            member.id = getID();
            let dptKey = member.department[0].departmentName
            // Wenn Kein Department-Key vergeben ist, weise den MA der Abteilung "na" zu 
            if (dptKey === "") {
                dptKey = "na";
                member.department[0].departmentName = "na";
            }
            // Wenn die Abteilung schon im Hilfsobjekt ist, füge MA hinzu
            if (allDptMembers.hasOwnProperty(dptKey)) {
                allDptMembers[dptKey].push(member);
                continue;
            }
            // Wenn die Abteilung noch nicht existiert, erstelle sie und füge MA hinzu
            else {
                allDptMembers[dptKey] = [];
                allDptMembers[dptKey].push(member);
            }
        }
        // An dieser Stelle könnte man sich das Hilfsobjekt anzeigen lassen
        // allDptMembers = { dpt1:[member, member, member], dpt2:[member, member], dpt3:[member, member, member].....}

        for (const dpt of Object.keys(allDptMembers)) {
            const newDpt = this.createSingleDepartment(dpt, allDptMembers[dpt])
            this.master.push(newDpt);
        }
    },
    /**
     * Nachdem alle Mitarbeiter von der createMaster-Funktion in die Abteilungen zugewiesen worden sind,
     * erstellt diese Funktion das fertige Abteilungs-Objekt
     * @param {string} key - Das Abteilungs-Kürzel
     * @param {array} array - Die Mitarbeiter einer Abteilung
     * @returns Abteilungs-Objekt
     */
    createSingleDepartment(key, array) {
        const finalObject = {};
        finalObject.code = key;
        finalObject.name = dptCodes[key];
        finalObject.members = array;
        return finalObject;
    },
    /**
     * "Container" bezeichnet hier die Einheit aus Navigation und Anzeige der Karten
     * Die Navigation wird aufgrund der Abteilungen im Master-Array erstellt
     * Die Sektion mit den Karten wird aufgrund der selected-Variable erstellt, die als
     * default bei init-Aufruf übergeben werden muss.
     * 
     * @returns 
     */
    createContainer() {
        //...basierend auf Master und vars
        const cardNavigationUL = document.createElement("ul")
        for (const dpt of this.master) {
            const cardNavigationLiElement = document.createElement("li");
            cardNavigationLiElement.innerText = dpt.name;
            cardNavigationLiElement.setAttribute("data-dpt", dpt.code)
            cardNavigationUL.appendChild(cardNavigationLiElement);
            this.emit("addNavLiElement", cardNavigationLiElement);
        }
        this.vars.navElementUL = cardNavigationUL;
        this.vars.mainElements.cardNav.appendChild(cardNavigationUL);

        this.getNavElementByCode(this.vars.selectedDpt).classList.add("selected");
        this.createSection(this.vars.selectedDpt);

        console.log("CREATE CONTAINER: ",this.vars.dptSection)
    },
    updateContainer(currentDpt, nextDpt) {
        // Wenn die Abteilung in this.vars.dptSection schon existiert, display-Eigeneschaft ändern
        this.vars.dptSection[currentDpt].classList.add("d-none");
        if (this.vars.dptSection.hasOwnProperty(nextDpt)) {
            this.vars.dptSection[nextDpt].classList.remove("d-none");
        }
        // ansonsten Section erzeugen und anfügen
        else {
            this.createSection(nextDpt)
            console.log("UPDATE CONTAINER: nextDpt", nextDpt);
            console.log("UPDATE CONTAINER: currentDpt", currentDpt);
        }
        this.getNavElementByCode(currentDpt).classList.remove("selected")
        this.getNavElementByCode(nextDpt).classList.add("selected")
        this.vars.selectedDpt = nextDpt
        console.log("UPDATE CONTAINER: Final, ", this.vars.selectedDpt)
    },
    createSection(dptCode) {

        const dpt = this.getDepartmentByCode(dptCode)
        // Section erstellen
        const section = document.createElement("section");
        section.setAttribute("id", dpt.code)
        // cardContainer erstellen
        const cardContainerDiv = document.createElement("div");
        cardContainerDiv.classList.add("cardContainer")

        for (const member of dpt.members) {
            const newCard = this.createCard(member, cardContainerDiv);
            cardContainerDiv.appendChild(newCard);
        }

        section.appendChild(cardContainerDiv);
        // Section in Hauptcontainer einfügen
        this.vars.mainElements.cardContainer.appendChild(section);
        // Section in dptSection schreiben
 
        this.vars.dptSection[dptCode]= section

        console.log("Grüße aus der Create Section", this.vars.dptSection[this.vars.selectedDpt])
    },
    createCard(member) {
        //
        // 3D singleCard erstellen
        //
        const singleCard = document.createElement("div");
        singleCard.classList.add("scene");
        singleCard.setAttribute("data-id", member.id)
        //
        // card erstellen
        //
        const card = document.createElement("div");
        card.classList.add("card");
        //
        //
        // card-front erstellen
        //
        //
        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");

        // Bild erstellen und wenn vorhanden mit Content füllen
        const imageFrontContainer = document.createElement("div");
        imageFrontContainer.classList.add("card-image-front");
        const imageFront = document.createElement("img");
        if (member["image-front"] != "") {
            imageFront.setAttribute("src", this.vars.path + member["image-front"]);
            imageFront.setAttribute("alt", "Titelbild von " + member.firstName + " " + member.lastName);
        } else {
            imageFront.setAttribute("src", this.vars.path + "usersecret.jpg");
            imageFront.setAttribute("alt", "Anonymes Titelbild von " + member.firstName + " " + member.lastName);
        }
        imageFrontContainer.appendChild(imageFront);

        // Overviev Front erstellen
        const cardOverviewFront = document.createElement("div");
        cardOverviewFront.classList.add("card-overview-front");

        cardOverviewFront.appendChild(this.helper.createParagraph(member, "firstName"));
        cardOverviewFront.appendChild(this.helper.createParagraph(member, "lastName"));
        cardOverviewFront.appendChild(this.helper.createParagraph(member, "position"))

        //Image und Overview in cardFront einfügen
        cardFront.appendChild(imageFrontContainer);
        cardFront.appendChild(cardOverviewFront);

        //
        //
        // card-back erstellen
        //
        //
        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");

        // Bild erstellen und wenn vorhanden mit Content füllen
        const imageBackContainer = document.createElement("div");
        imageBackContainer.classList.add("card-image-back");
        const imageBack = document.createElement("img");
        // Wenn imageBack vorhanden:nutzen, wenn nicht:nutze imageFront, wenn das nicht vorhanden:nutze Default
        if (member["image-back"] != "") {
            imageBack.setAttribute("src", this.vars.path + member["image-back"]);
            imageBack.setAttribute("alt", "Sekundäres Titelbild von " + member.firstName + " " + member.lastName);
        } else if (member["image-front"] != "") {
            imageBack.setAttribute("src", this.vars.path + member["image-front"]);
            imageBack.setAttribute("alt", "Titelbild von " + member.firstName + " " + member.lastName);
        } else {
            imageBack.setAttribute("src", this.vars.path + "usersecret.jpg");
            imageBack.setAttribute("alt", "Anonymes Titelbild von " + member.firstName + " " + member.lastName);
        }
        imageBackContainer.appendChild(imageBack);

        // cardOverviewBack erstellen
        const cardOverviewBack = document.createElement("div");
        cardOverviewBack.classList.add("card-overview-back");

        cardOverviewBack.appendChild(this.helper.createParagraph(member, "firstName"));
        cardOverviewBack.appendChild(this.helper.createParagraph(member, "lastName"));

        // TaskList erstellen
        const cardDescriptionContainer = document.createElement("div");
        cardDescriptionContainer.classList.add("card-description");
        const taskList = document.createElement("ul");

        for (const task of member.tasks) {
            const taskElement = document.createElement("li");
            taskElement.innerHTML = task.task;
            taskList.appendChild(taskElement);
        }
        cardDescriptionContainer.appendChild(this.helper.createParagraph(member, "position"));
        cardDescriptionContainer.appendChild(taskList);

        // Call-to-action erstellen
        const CTAContainer = document.createElement("div");
        CTAContainer.classList.add("card-call-to-action");

        // Button erstellen als Standard
        const contactLink = document.createElement("a");
        contactLink.innerText = "Kontaktieren";
        contactLink.addEventListener("click", () => { this.emit("clickContact", member) })
        CTAContainer.appendChild(contactLink)

        // Image, CTA, overviewBack und Description in cardBack einfügen
        cardBack.appendChild(imageBackContainer)
        cardBack.appendChild(cardOverviewBack)
        // cardBack.appendChild(imageNameContainerBack)
        cardBack.appendChild(cardDescriptionContainer)
        cardBack.appendChild(CTAContainer)


        if (this.vars.mobileMode === true) {
            // const contactLink = document.createElement("a");
            // contactLink.innerText = "Mehr Infos";
            // contactLink.addEventListener("click", () => { this.emit("clickContact", member) })
            // cardFront.appendChild(contactLink) 
        }

        card.appendChild(cardFront);
        card.appendChild(cardBack);
        singleCard.appendChild(card);

        this.emit("addCard", singleCard)
        return singleCard;
    },
    navigationClick(cardNavigationLiElement) {
        const nextDpt = cardNavigationLiElement.dataset.dpt
        // Wenn die geklickte Abteilung schon aktiv ist, return
        if (nextDpt === this.vars.selectedDpt) {
            console.log("aktives Element geklickt")
            return false;
        }
        this.updateContainer(this.vars.selectedDpt, nextDpt)
        return
    },
    getDepartmentByCode(dptCode) {
        for (const i in this.master) {
            if (this.master[i].code === dptCode) {
                return this.master[i];
            }
        }
    },
    getNavElementByCode(dptCode) {
        return this.vars.navElementUL.querySelector("li[data-dpt='" + dptCode + "']")
    },
    events: {
        "addNavLiElement": [
            function (navElement) {
                navElement.addEventListener("click", () => {
                    this.navigationClick(navElement);
                    return
                })
                navElement.addEventListener('mousedown', function (event) {
                    if (event.detail > 1) {
                        event.preventDefault();
                        // of course, you still do not know what you prevent here...
                        // You could also check event.ctrlKey/event.shiftKey/event.altKey
                        // to not prevent something useful.
                    }
                }, false)
            }
        ],
        "addCard": [
            function (singleCard) {
                // Im DesktopMode wird die Dreh-Möglichkeit aktiviert
                if(this.vars.mobileMode === false){
                    singleCard.addEventListener("mouseenter", () => {
                        singleCard.querySelector(".card").classList.add("is-flipped");
                    });
                    singleCard.addEventListener("mouseleave", () => {
                        singleCard.querySelector(".card").classList.remove("is-flipped");
                    })
                }
                if(this.vars.mobileMode === true){
                    
                    singleCard.addEventListener("touchstart", () => {
                        this.vars.dptSection[this.vars.selectedDpt].querySelector(".card").classList.remove("is-flipped")
                        singleCard.querySelector(".card").classList.add("is-flipped");
                    });
                }
            }
        ],
        "clickContact":[function (member){
            this.createLightBox(member);
            document.querySelector("div[data-id='" + member.id + "']").querySelector(".card").classList.remove("is-flipped")
            console.log("member from clickedCard: ", member);
            document.querySelector("body").classList.add("oflowhide")
        }],
        "closeLightBox":[function(){
            document.querySelector("#lightbox").remove();
            document.querySelector("body").classList.remove("oflowhide")
        }]
    },
    emit(eventName, param) {
        if (eventName in this.events) {
            for (const f of this.events[eventName]) {
                f.apply(dptModule, [param])
            }
        }
    },
    on(eventName, cb) {
        // Hier ist die Klammersetzung sehr wichtig!
        if (!(eventName in this.events)) {
            this.events[eventName] = []
        }
        this.events[eventName].push(cb)
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.querySelector("main");

    dptModule.init(mainContainer, "akq", "Bilder/");
    
})
