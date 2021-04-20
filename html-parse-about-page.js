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
    suv: "Sekretariat und Verwaltung",
    na: "Nicht angegebene Abteilung",
    xxx: "Beispiel",
    lew: "Lokal Erfolgreich Werben"
}
const featureRequest = [
    "MitarbeiterSuche (Anm.: nett, nur geht ein User eher auf eine Suchleiste und tippt etwas oder klickt er eher 2-3 Karten durch?)",
    "Registerkarte 'Empfohlen' oder 'Relevant' -> umsetzbar, nur die Vorbedingungen müssen klar sein (Wie viele 'User-Level' soll es geben (NC, erste, Woche, zweite Wochen, TC, Coach, VT)? Das ist abhängig von der Struktur, die durch Wordpress und das Studio bereitgestellt wird) UND Jemand muss sich hinsetzten und definieren, für welche User-Level der jeweilige Mitarbeiter relevant ist.",
    "Filter nach Abteilungen -> umgesetzt",
    "Online Verfügbarkeit",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/julia_burkhardt_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/katja_köhler_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/laura_maas_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/anouk_pardon_2021_1.jpg",
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
                "task": "Koordination Vorstellungsgespräche"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/saskia_schirrmacher_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/sarah_stäbler_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/jennifer_vrana_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/meike_weber_2021_1.jpg",
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
            "telegram": "",
            "signal": ""
        },
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/robert_werzer_2021_1.jpg",
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
            "mobilePhone": "",
            "mail": "",
            "whatsapp": "",
            "telegram": "",
            "signal": ""
        },
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/robert_ritter_2021_1.jpg",
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
        "firstName": "Tonia",
        "lastName": "Gieray",
        "position": "Grafikerin",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Konzeption und Gestaltung interner und externer Kommunikationsmittel"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/tonia_gieray_2021_1.jpg",
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
        "lastName": "Barthlomäus",
        "position": "",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Anwendungsprogrammierung Mitgliederverwaltung"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/sabine_bartholmess_2021_1.jpg",
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
        "position": "Softwareentwicklung",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/zdenek_drbalek_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/volker_hohmann_2021_1.jpg",
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
        "position": "Softwareentwicklung",
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
        "position": "IT Manager",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Leitung EDV-Abteilung"
            },
            {
                "taskNr": "2",
                "task": "Projektplanung"
            },
            {
                "taskNr": "3",
                "task": "Projektleitung"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/harrald_ott_2021_1.jpg",
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
        "position": "Softwareentwicklung",
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
                "task": "Pflege und Neuerstellung der Reporten"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/joachim_welker_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "edv",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/benita_renz_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "ftm",
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
                "task": "Kundenbetreuung Reiseteams"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/marko_frech_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/peter_renz_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/ajjana_baumeister_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "",
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
                "task": "DatenManagement (Datenverarbeitung- und Abgaben)"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/jutta_anderson_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/ann_katrin_eberhardt_2021_1.jpg",
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
                "task": "Beitragseinzug D und CH"
            },
            {
                "taskNr": "2",
                "task": "Rechnungstellung/Statistiken D und CH"
            },
            {
                "taskNr": "3",
                "task": "Kundenbetreuung und Datenmanagement D und CH"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/karla_wachsmann_2021_1.jpg",
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
        "position": "",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/anita_bauer_2021_1.jpg",
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
        "position": "",
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
        "position": "",
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
        "position": "",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/ludmila_dönges.jpg",
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
        "position": "",
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
        "position": "",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/sibylle_wesser_2021_1.jpg",
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
        "position": "",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/waldemar_günther_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "suv",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/alexander_helwig_2021_1.jpg",
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
        "position": "Vertriebsleitung",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Vertriebsleitung JUH"
            },
            {
                "taskNr": "2",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/oliver_kunze_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/patrick_löst_2021_1.jpg",
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
        "position": "Vertriebsleiter",
        "tasks": [
            {
                "taskNr": "1",
                "task": "Vertriebsleitung NABU, BUND und LBV"
            },
            {
                "taskNr": "2",
                "task": "LEW Board"
            },
            {
                "taskNr": "3",
                "task": "Product Owner Tablet"
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/marcel_müller_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/oliver_schaugg_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/anesa_shabani_2021_1.jpg",
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
        "image-front": "/Webprojekte/WeCo Ressourcen/Bilder/dayna_tscharnke_2021_1.jpg",
        "image-back": "",
        "department": [
            {
                "departmentName": "vt",
                "departmentPosition": ""
            }
        ]
    }
]
/**
 * Erstellt fortlaufende IDs
 */
const getID = (() => {
    let counter = -1
    return () => {
        counter++
        return counter
    }
})()

const dptModule = {

    master: [],
    /**
     * Erschafft das Masterobjekt mit allen Abteilungen und allen Mitarbeitern
     */
    createMaster() {
        // Alle Mitarbeiter werder der jeweils gesetzten Abteilung zugeordnet,
        // und vorsert in ein Hilfsobjekt allDptMembers geschrieben
        const allDptMembers = {};
        for (const member of allMembers) {
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
     * Aus dem Abteilungskürzel und dem Array der zugewiesenen Mitarbeiter wird eine Abteilung erschaffen
     * @param {string} key dptCode 
     * @param {array} array memberArray 
     * @returns {object} single Department
     */
    createSingleDepartment(key, array){
        const finalObject = {};
        finalObject.code = key;
        finalObject.name = dptCodes[key];
        finalObject.active = false;
        finalObject.members = array;
        return finalObject;
    },

    /**
     * Nimmt einen Mitarbeiter als Objekt entgegen und gibt die HTML-Struktur zurück
     * EventListener werden über das dptModule.event "addcard" hinzugefügt
     * @param {object} member 
     * @returns {HTMLObjectElement} Kartenstruktur
     */
    createCard(member) {
        //
        // 3D scene erstellen
        //
        const scene = document.createElement("div");
        scene.classList.add("scene");
        scene.classList.add("border-std-round");
        scene.classList.add("aboutItem");
        scene.setAttribute("data-dpt", member.department[0].departmentName)
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
            imageFront.setAttribute("src", member["image-front"]);
            imageFront.setAttribute("alt", "Titelbild von " + member.firstName + " " + member.lastName);
        } else {
            imageFront.setAttribute("src", "/Webprojekte/WeCo Ressourcen/Bilder/usersecret.jpg");
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
        cardOverviewFront.appendChild(document.createElement("hr"));
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
            imageBack.setAttribute("src", member["image-back"]);
            imageBack.setAttribute("alt", "Sekundäres Titelbild von " + member.firstName + " " + member.lastName);
        } else if (member["image-front"] != "") {
            imageBack.setAttribute("src", member["image-front"]);
            imageBack.setAttribute("alt", "Titelbild von " + member.firstName + " " + member.lastName);
        } else {
            imageBack.setAttribute("src", "/Webprojekte/WeCo Ressourcen/Bilder/usersecret.jpg");
            imageBack.setAttribute("alt", "Anonymes Titelbild von " + member.firstName + " " + member.lastName);
        }
        imageBackContainer.appendChild(imageBack);
    
        // cardOverviewBack erstellen
        const cardOverviewBack = document.createElement("div");
        cardOverviewBack.classList.add("card-overview-back");
        const nameParagraphBack = document.createElement("p");
        nameParagraphBack.innerHTML = member.firstName + "<br>" + member.lastName;
        const positionParagraphBack = document.createElement("p");
        positionParagraphBack.innerText = member.position;
    
        cardOverviewBack.appendChild(nameParagraphBack);
        cardOverviewBack.appendChild(document.createElement("hr"));
        cardOverviewBack.appendChild(positionParagraphBack);
    
        // TaskList erstellen
        const cardDescriptionContainer = document.createElement("div");
        cardDescriptionContainer.classList.add("card-description");
        const taskList = document.createElement("ul");
    
        for (const task of member.tasks) {
            const taskElement = document.createElement("li");
            taskElement.innerHTML = task.task;
            taskList.appendChild(taskElement);
        }
        cardDescriptionContainer.appendChild(taskList);
    
        // Call-to-action erstellen
        const CTAContainer = document.createElement("div");
        CTAContainer.classList.add("card-call-to-action");
    
        // Wenn Office-Tel-Nr. existiert
        if (member.contacts.officePhone != "") {
            const CTADesktopPhoneLink = document.createElement("a");
            CTADesktopPhoneLink.setAttribute("href", "tel:" + member.contacts.officePhone);
            const CTADesktopPhone = document.createElement("img");
            CTADesktopPhone.setAttribute("src", "/Webprojekte/WeCo Ressourcen/Bilder/desktop_phone.jpg");
            CTADesktopPhoneLink.appendChild(CTADesktopPhone);
            CTAContainer.appendChild(CTADesktopPhoneLink);
        }
    
        // Wenn Mobil-Tel-Nr. existiert
        if (member.contacts.mobilePhone != "") {
            const CTAMobilePhoneLink = document.createElement("a");
            CTAMobilePhoneLink.setAttribute("href", "tel:" + member.contacts.mobilePhone);
            const CTAMobilePhone = document.createElement("img");
            CTAMobilePhone.setAttribute("src", "/Webprojekte/WeCo Ressourcen/Bilder/mobile_phone.jpg");
            CTAMobilePhoneLink.appendChild(CTAMobilePhone);
            CTAContainer.appendChild(CTAMobilePhoneLink);
        }
    
        // Wenn Mail-Adresse existiert
        if (member.contacts.mail != "") {
            const CTAMailLink = document.createElement("a");
            CTAMailLink.setAttribute("href", "mailto:" + member.contacts.mail);
            const CTAMail = document.createElement("img");
            CTAMail.setAttribute("src", "/Webprojekte/WeCo Ressourcen/Bilder/mail.jpg");
            CTAMailLink.appendChild(CTAMail);
            CTAContainer.appendChild(CTAMailLink);
        }
    
        // Wenn WhatsApp existiert
        if (member.contacts.whatsapp != "") {
            const CTAWhatsAppLink = document.createElement("a");
            CTAWhatsAppLink.setAttribute("href", "https://wa.me/" + member.contacts.whatsapp);
            CTAWhatsAppLink.setAttribute("target", "_blank");
            const CTAWhatsApp = document.createElement("img");
            CTAWhatsApp.setAttribute("src", "/Webprojekte/WeCo Ressourcen/Bilder/whatsapp.jpg");
            CTAWhatsAppLink.appendChild(CTAWhatsApp);
            CTAContainer.appendChild(CTAWhatsAppLink);
        }
    
        // Wenn Telegram existiert... noch zu erstellen
    
        // Image, CTA, overviewBack und Description in cardBack einfügen
        cardBack.appendChild(imageBackContainer)
        cardBack.appendChild(cardOverviewBack)
        cardBack.appendChild(cardDescriptionContainer)
        cardBack.appendChild(CTAContainer)
    
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        scene.appendChild(card);

        this.emit("addCard", scene)
        return scene;
    },
    /**
     * Erstellt die HTML Sektion für eine Abteilung inkl. aller Karten
     * 
     * @param {HTMLDivElement} mainContainer 
     * @param {string} dptcode 
     */
    createSection(mainContainer, dptcode) {
        const dpt = this.getDepartmentByCode(dptcode)
        console.log("this @ createSection", this)
        console.log("dptcode",dptcode)
        console.log("spannendes VT dpt:::", dpt)
        // Section erstellen
        const newSection = document.createElement("section");
        newSection.setAttribute("id", dpt.code)
        // Überschrift erstellen
        const heading = document.createElement("h1");
        heading.innerText = dpt.name;
        newSection.appendChild(heading);
        // cardContainer erstellen
        const cardContainerDiv = document.createElement("div");
        cardContainerDiv.classList.add("cardContainer")
    
        for (const member of dpt.members) {
            const newCard = this.createCard(member, cardContainerDiv);
            cardContainerDiv.appendChild(newCard);
        }
    
        newSection.appendChild(cardContainerDiv);
        // Section in Hauptcontainer einfügen
        mainContainer.appendChild(newSection);
    },
    /**
     * Erstellt eine HTML UL Liste mit allen Abteilungsnamen
     * 
     * @param {HTMLDivElement} cardNavigationULParent
     */
    createNavigation(cardNavigation) {
        const cardNavigationUL = document.createElement("ul")
        for (const dpt of this.master) {
            const cardNavigationLiElement = document.createElement("li");
            cardNavigationLiElement.innerText = dpt.name;
            cardNavigationLiElement.setAttribute("data-selected", dpt.active);
            cardNavigationLiElement.setAttribute("data-dpt", getID())

            cardNavigationUL.appendChild(cardNavigationLiElement);
        }
        const navElements = cardNavigationUL.querySelectorAll("li");
        for (const navElement of navElements) {
            navElement.addEventListener("click", () => {
                if (navElement.dataset.selected === "false") {
                    // Aktive Anzeige finden und deaktivieren
                    for (const navElement of navElements) {
                        if (navElement.dataset.selected === "true") {
                            navElement.classList.remove("active")
                            navElement.setAttribute("data-selected", "false")
                            document.getElementById(this.master[navElement.dataset.dpt].code).remove()
                        }
                    }
                    // Sezte am NavElement die Klasse "active" und das data-selected Attribut auf true, sowie die Abteilung intern auf "aktiv"
                    navElement.classList.add("active")
                    navElement.setAttribute("data-selected", "true")
                    this.master[navElement.dataset.dpt].active = true
                    // Sektion der aktiven Abteilung erstellen
                    this.createSection(this.CONST.mainContainer, dptModule.master[navElement.dataset.dpt].code)
                }
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
        cardNavigation.appendChild(cardNavigationUL);
    },
    /**
     * Gibt die Abteilung des übergebenen Kürzels als Objekt zurück
     * 
     * @param {string} dptCode 
     * @returns {object} dpt
     */
    getDepartmentByCode(dptCode){
        for (const i in this.master){
            if(this.master[i].code === dptCode){
                return this.master[i];
            }
        }
    },

    init() {
        console.log("this @ init", this)
        this.emit("startup")
    },
    events: {
        "addCard": [
            function (scene) {
                console.log("this @addCard", this)
                console.log("--".repeat(40))

                scene.addEventListener("mouseenter", () => {
                    scene.querySelector(".card").classList.add("is-flipped")
                });
                scene.addEventListener("mouseleave", () => {
                    scene.querySelector(".card").classList.remove("is-flipped")
                })
            }
        ],
        "startup":[
            // eine ARROW Funktion würde hier kein this "erzeugen", sondern WINDOW wäre "this"
            // Auch abhängig von der emit-Funktion, die das this festlegt.
            function (){
                console.log("this @ startup", this)
                this.createMaster()
            },
            function (){
                this.CONST.mainContainer = document.querySelector("main")
                this.CONST.cardNavigation = document.querySelector("#card-nav")
                console.log("this.CONST", this.CONST)
            }
        ]
    },
    CONST : {},
    /**
     * Löst ein Ereignis aus. Dieser Funktion dürfen beliebig viele
     * Parameter übergeben werden, diese werden 1:1 an die Events
     * durchgereicht.
     *
     * @param {string} eventName
     * @param {*=} params
     */
    emit(eventName, param) {
        if (eventName in this.events) {
            for (const f of this.events[eventName]) {
                console.log("this @emit before", this)
                f.apply(dptModule, [param])
                console.log("this @emit after", this)
            }
        }
    },

    /**
     * Registriert einen Event-Listener für das Event eventName.
     *
     * @param {string} eventName
     * @param {Function} cb
     * 
     */
    on(eventName, cb) {
        // Hier ist die Klammersetzung wirklich wichtig!
        if (!(eventName in this.events)) {
            this.events[eventName] = []
        }
        this.events[eventName].push(cb)
    }

}

document.addEventListener("DOMContentLoaded", () => {

    const elements = {
        "mainContainer": document.querySelector("main"),
        "cardNavigation": document.querySelector("#card-nav")
    }
    dptModule.init();
    dptModule.createNavigation(elements.cardNavigation);

    

})