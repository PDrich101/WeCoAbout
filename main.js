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
            "whatsapp": "00491727757788",
            "telegram": "robert.werzer",
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
            "whatsapp": "004915771678491",
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
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
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
        modus: "desktop",
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
                icon.setAttribute("src", dptModule.vars.path + "ICON_mobil.svg");
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
                link.setAttribute("href", "https://wa.me/" + member.contacts.whatsapp);
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
        createParagraph(){

        }
    },
    init(mainContainer, defaultDpt, path) {
        this.vars.mainElements.mainContainer = mainContainer
        this.vars.selectedDpt = defaultDpt;
        this.vars.path =path;
        // Modus Desktop oder Mobil Herausfinden


        // JSON parsen oder in dem Fall definieren
        this.vars.allMembers = allMembers;
        //createMaster
        this.createMaster()

        console.log("INIT: this.vars.mainElements.mainContainer",this.vars.mainElements.mainContainer)
        console.log("INIT: this.vars.selectedDpt",this.vars.selectedDpt)

        // Hauptelemente erstellen
        const cardNav = document.createElement("section");
        cardNav.setAttribute("id", "card-nav");
        const displayContainer = document.createElement("section");
        displayContainer.setAttribute("id", "display");
        //createDisplay->in vars speichern
        this.vars.mainElements.cardNav = cardNav;
        this.vars.mainElements.displayContainer = displayContainer;

        //Navigation und Fenster an MasterContainer anfügen
        this.vars.mainElements.mainContainer.appendChild(cardNav);
        this.vars.mainElements.mainContainer.appendChild(displayContainer);

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
        const firstName = document.createElement("p");
        firstName.innerText = member.firstName;
        const lastName = document.createElement("p");
        lastName.innerText = member.lastName;
        const position = document.createElement("p");
        position.innerText = member.position;
        nameContainer.appendChild(firstName);
        nameContainer.appendChild(lastName);
        nameContainer.appendChild(position);

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
        const newSection = document.createElement("section");
        newSection.setAttribute("id", dpt.code)
        // cardContainer erstellen
        const cardContainerDiv = document.createElement("div");
        cardContainerDiv.classList.add("cardContainer")

        for (const member of dpt.members) {
            const newCard = this.createCard(member, cardContainerDiv);
            cardContainerDiv.appendChild(newCard);
        }

        newSection.appendChild(cardContainerDiv);
        // Section in Hauptcontainer einfügen
        this.vars.mainElements.displayContainer.appendChild(newSection);
        // Section in dptSection schreiben
 
        this.vars.dptSection[dptCode]= newSection
    },
    createCard(member) {
        //
        // 3D scene erstellen
        //
        const scene = document.createElement("div");
        scene.classList.add("scene");
        scene.classList.add("aboutItem");
        scene.setAttribute("data-id", member.id)
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
        const nameParagraphFront = document.createElement("p");
        nameParagraphFront.innerHTML = member.firstName + "<br>" + member.lastName;
        const positionParagraphFront = document.createElement("p");
        positionParagraphFront.innerText = member.position;

        cardOverviewFront.appendChild(nameParagraphFront);
        //Trennlinie jetzt durch CSS Border-top an positionParagraphFront
        //cardOverviewFront.appendChild(document.createElement("hr"));
        cardOverviewFront.appendChild(positionParagraphFront)

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
        const nameParagraphBackFirstName = document.createElement("p");
        nameParagraphBackFirstName.innerHTML = member.firstName;
        const nameParagraphBackLastName = document.createElement("p");
        nameParagraphBackLastName.innerHTML = member.lastName;

        const positionParagraphBack = document.createElement("p");
        positionParagraphBack.innerText = member.position;

        cardOverviewBack.appendChild(nameParagraphBackFirstName);
        cardOverviewBack.appendChild(nameParagraphBackLastName);
        

        // TaskList erstellen
        const cardDescriptionContainer = document.createElement("div");
        cardDescriptionContainer.classList.add("card-description");
        const taskList = document.createElement("ul");

        for (const task of member.tasks) {
            const taskElement = document.createElement("li");
            taskElement.innerHTML = task.task;
            taskList.appendChild(taskElement);
        }
        cardDescriptionContainer.appendChild(positionParagraphBack)
        cardDescriptionContainer.appendChild(taskList);

        // Call-to-action erstellen
        const CTAContainer = document.createElement("div");
        CTAContainer.classList.add("card-call-to-action");

        // Button erstellen als Standard
        const contactLink = document.createElement("a");
        contactLink.innerText = "Kontaktieren";
        contactLink.addEventListener("click", ()=>{this.emit("clickContact", member)})
        CTAContainer.appendChild(contactLink)

        // ONHOLD
        if(1===2){
        // Wenn Office-Tel-Nr. existiert
        if (member.contacts.officePhone != "") {
            const CTADesktopPhoneLink = document.createElement("a");
            CTADesktopPhoneLink.setAttribute("href", "tel:" + member.contacts.officePhone);
            const CTADesktopPhone = document.createElement("img");
            CTADesktopPhone.setAttribute("src", "Bilder/desktop_phone.jpg");
            CTADesktopPhoneLink.appendChild(CTADesktopPhone);
            CTAContainer.appendChild(CTADesktopPhoneLink);
        }

        // Wenn Mobil-Tel-Nr. existiert
        if (member.contacts.mobilePhone != "") {
            const CTAMobilePhoneLink = document.createElement("a");
            CTAMobilePhoneLink.setAttribute("href", "tel:" + member.contacts.mobilePhone);
            const CTAMobilePhone = document.createElement("img");
            CTAMobilePhone.setAttribute("src", "Bilder/mobile_phone.jpg");
            CTAMobilePhoneLink.appendChild(CTAMobilePhone);
            CTAContainer.appendChild(CTAMobilePhoneLink);
        }

        // Wenn Mail-Adresse existiert
        if (member.contacts.mail != "") {
            const CTAMailLink = document.createElement("a");
            CTAMailLink.setAttribute("href", "mailto:" + member.contacts.mail);
            const CTAMail = document.createElement("img");
            CTAMail.setAttribute("src", "Bilder/mail.jpg");
            CTAMailLink.appendChild(CTAMail);
            CTAContainer.appendChild(CTAMailLink);
        }

        // Wenn WhatsApp existiert
        if (member.contacts.whatsapp != "") {
            const CTAWhatsAppLink = document.createElement("a");
            CTAWhatsAppLink.setAttribute("href", "https://wa.me/" + member.contacts.whatsapp);
            CTAWhatsAppLink.setAttribute("target", "_blank");
            const CTAWhatsApp = document.createElement("img");
            CTAWhatsApp.setAttribute("src", "Bilder/whatsapp.jpg");
            CTAWhatsAppLink.appendChild(CTAWhatsApp);
            CTAContainer.appendChild(CTAWhatsAppLink);
        }

        // Wenn Telegram existiert... noch zu erstellen
        }
        // Image, CTA, overviewBack und Description in cardBack einfügen
        cardBack.appendChild(imageBackContainer)
        cardBack.appendChild(cardOverviewBack)
        // cardBack.appendChild(imageNameContainerBack)
        cardBack.appendChild(cardDescriptionContainer)
        cardBack.appendChild(CTAContainer)
    
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        scene.appendChild(card);

        this.emit("addCard", scene)
        return scene;
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
            function (scene) {
                scene.addEventListener("mouseenter", () => {
                    scene.querySelector(".card").classList.add("is-flipped");
                });
                scene.addEventListener("mouseleave", () => {
                    scene.querySelector(".card").classList.remove("is-flipped");
                })
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
