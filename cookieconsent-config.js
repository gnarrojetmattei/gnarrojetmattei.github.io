import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

CookieConsent.run({
    page_scripts: true,
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },
    language: {
        default: "it",
        autoDetect: "browser",
        translations: {
           /*  en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
                        }
                    ]
                }
            }, */
            it: {
                consentModal: {
                    title: "Questo sito utilizza i Cookie",
                    description: "Questo sito web utilizza dei cookie essenziali per assicurare il buon funzionamento della navigazione e dei cookie di tracciamento per capire come queste pagine sono utilizzate. Questi ultimi vengono abilitati solo nel caso in cui acconsenti al loro uso.",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    showPreferencesBtn: "Gestisci preferenze"
                },
                preferencesModal: {
                    title: "Centro preferenze per il consenso",
                    acceptAllBtn: "Accetta tutto",
                    acceptNecessaryBtn: "Rifiuta tutto",
                    savePreferencesBtn: "Salva le preferenze",
                    closeIconLabel: "Chiudi la finestra",
                    serviceCounterLabel: "Servizi",
                    sections: [
                        {
                            title: "Utilizzo dei Cookie",
                            description: "I cookie sono utilizzati per assicurare le funzionalità di base di questo sito web e per migliorare l'esperienza di navigazione. Puoi scegliere per ogni categoria quali abilitare o disabilitare."
                        },
                        {
                            title: "Cookie Strettamente Necessari <span class=\"pm__badge\">Sempre Attivati</span>",
                            description: "Questi cookie sono essenziali per il corretto funzionamento del sito. Senza di essi il sito non funzionerebbe a dovere. Ma non tracciano nulla di sensibile.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Cookie Analitici",
                            description: "Questi cookie permettono al sito web di ricordare le tue visite precedenti e di analizzzare in modo anonimo i comportamenti degli utenti sulle pagine per capire cosa migliorare e correggere. Nulla viene trasmesso a terzi e nulla è usato a fini pubblicitari, promozionali o di profilazione.",
                            linkedCategory: "analytics"
                        }
                    ]
                }
            }
        }
    }
});