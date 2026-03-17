/**
 * German translations (primary language).
 */
const de = {
    translation: {
        // Header
        header: {
            subtitle: 'Standgeld-Analyse',
            badge: 'Kostenloser Rechner',
        },

        // Hero
        hero: {
            badgeFeatures: 'Kostenlos • Keine Anmeldung nötig • Sofortergebnis',
            badgeCalculator: 'Kostenloser Rechner',
            headline: 'Wie viel Geld verliert Ihre Flotte <highlight>jeden Monat</highlight> durch Wartezeiten?',
            subheadline:
                'LKW warten durchschnittlich 45–90 Minuten an Laderampen. Nach §412 HGB steht Ihnen Standgeld zu — berechnen Sie jetzt Ihren Anspruch.',
        },

        // Calculator
        calculator: {
            title: 'Ihre Flottendaten eingeben',
            subtitle: 'Passen Sie die Werte an Ihre Flotte an — die Ergebnisse aktualisieren sich sofort.',
            legalNote:
                'Die zumutbare Wartezeit beträgt ca. 2 Stunden pro Stopp. Darüber hinausgehende Wartezeiten können als Standgeld geltend gemacht werden.',
            fields: {
                trucks: {
                    label: 'Anzahl LKW',
                    tooltip: 'Gesamtanzahl Ihrer eingesetzten LKW',
                    unit: 'LKW',
                },
                toursPerDay: {
                    label: 'Touren pro LKW/Tag',
                    tooltip: 'Durchschnittliche Touren je LKW pro Arbeitstag',
                    unit: 'Touren',
                },
                stopsPerTour: {
                    label: 'Stopps pro Tour',
                    tooltip: 'Durchschnittliche Be-/Entladestopps je Tour',
                    unit: 'Stopps',
                },
                avgWaitMinutes: {
                    label: 'Ø Wartezeit pro Stopp',
                    tooltip: 'Durchschnittliche Wartezeit über das Zeitfenster hinaus',
                    unit: 'Minuten',
                },
                demurrageRate: {
                    label: 'Standgeldsatz',
                    tooltip: 'Ihr Standgeldsatz pro Stunde (Branchenüblich: 40–60 €)',
                    unit: '€/Stunde',
                },
                workingDays: {
                    label: 'Arbeitstage pro Monat',
                    tooltip: 'Durchschnittliche Arbeitstage pro Monat',
                    unit: 'Tage',
                },
            },
        },

        // Results
        results: {
            title: 'Ihre Analyse',
            subtitle: 'Echtzeit-Berechnung basierend auf Ihren Eingaben',
            downloadPdf: 'PDF herunterladen',
            form: {
                nameLabel: 'Ihr Name',
                namePlaceholder: 'Max Mustermann',
                emailLabel: 'Ihre E-Mail-Adresse',
                emailPlaceholder: 'name@firma.de',
                submitButton: 'Analyse per E-Mail erhalten',
                submitting: 'Wird gesendet…',
                successMessage: 'Ihre Analyse wurde erfolgreich an Ihre E-Mail gesendet!',
                errorMessage: 'Fehler beim Senden. Bitte versuchen Sie es erneut.',
                emailNote: 'Wir senden Ihnen die vollständige Analyse als PDF an Ihre E-Mail-Adresse.',
                gdprConsent: 'Ich stimme der Verarbeitung meiner Daten (Name, E-Mail) zum Zweck der Zusendung der Analyse zu. Weitere Infos in unserer <privacyLink>Datenschutzerklärung</privacyLink>.',
                gdprRequired: 'Bitte stimmen Sie der Datenschutzerklärung zu.',
            },
            cards: {
                waitingHours: {
                    label: 'Gesamtwartestunden / Monat',
                    description: 'Basierend auf {{stops}} Stopps pro Monat',
                    unit: 'Std.',
                },
                lostTimeCost: {
                    label: 'Kosten verlorener Zeit / Monat',
                    description: 'Gesamte Wartezeit × Ihr Stundensatz',
                },
                claimable: {
                    label: 'Einforderbar als Standgeld / Monat',
                    descriptionPositive: '{{hours}} Std. über der 2-Stunden-Frist',
                    descriptionZero: 'Die durchschn. Wartezeit liegt unter der 2-Stunden-Frist',
                },
                annualLoss: {
                    label: 'Geschätzter Jahresverlust',
                    description: 'Davon einforderbar: {{amount}} / Jahr',
                },
            },
            banner: {
                title: 'Jährlich einforderbares Standgeld',
                subtitle: 'Gemäß §412 HGB — Dieses Geld steht Ihnen rechtlich zu.',
            },
        },

        // Footer
        footer: {
            description:
                'Berechnen Sie Ihre monatlichen Verluste durch Wartezeiten an Laderampen und erfahren Sie, wie viel Standgeld Sie nach §412 HGB geltend machen können.',
            legalTitle: 'Rechtlicher Hinweis',
            legalText:
                'Diese Berechnung dient nur zur Orientierung und stellt keine Rechtsberatung dar. Für verbindliche Auskünfte konsultieren Sie bitte einen Fachanwalt für Transportrecht.',
            copyright: '© {{year}} AI2 Connect. Alle Rechte vorbehalten.',
            privacy: 'Datenschutz',
            imprint: 'Impressum',
        },

        // PDF
        pdf: {
            subtitle: 'Standgeld-Analyse | Demurrage Report',
            createdOn: 'Erstellt am: {{date}}',
            inputTitle: 'Eingabeparameter',
            parameterHeader: 'Tourenorganisation',
            valueHeader: 'Wert',
            minutesUnit: 'Minuten',
            perHourUnit: ' / Stunde',
            resultsTitle: 'Ergebnisse',
            metricHeader: 'Betriebliche Auswirkungen',
            totalStops: 'Gesamtstopps pro Monat',
            totalWaitHours: 'Gesamtwartestunden pro Monat',
            hoursUnit: 'Std.',
            monthlyCost: 'Kosten verlorener Zeit (monatlich)',
            monthlyClaimable: 'Einforderbar als Standgeld (monatlich)',
            annualCost: 'Kosten verlorener Zeit (jährlich)',
            annualClaimable: 'Einforderbar als Standgeld (jährlich)',
            legalTitle: 'Rechtliche Grundlage',
            legalLines: [
                'Gemäß §412 HGB haben Frachtführer Anspruch auf Standgeld (Demurrage),',
                'wenn die Be- oder Entladezeit die vereinbarte oder angemessene Frist überschreitet.',
                'Nach VBGL §5 gilt eine Wartezeit von ca. 2 Stunden pro Stopp als zumutbare Frist.',
                'Wartezeiten darüber hinaus können als Standgeld geltend gemacht werden.',
                '',
                'Hinweis: Diese Berechnung dient nur zur Orientierung und stellt keine Rechtsberatung dar.',
            ],
            page: 'Seite {{current}} von {{total}}',
            filename: 'Standgeld-Analyse',
        },
        // Chemical Logistics Adaptation
        chemical: {
            hero: {
                headline: 'Wie viel kostet Ihr Chemie-Terminal <highlight>jeden Monat</highlight> durch LKW-Wartezeiten?',
                subheadline: 'LKW warten an Chemie-Terminals durchschnittlich 45–90 Minuten. Jede blockierte Rampe kostet Produktionszeit, erhöht das ADR-Compliance-Risiko und bindet kritische Ressourcen. Berechnen Sie Ihre realen Kosten — in unter 2 Minuten.',
            },
            calculator: {
                title: 'Ihre Terminaldaten eingeben',
                subtitle: 'Passen Sie die Werte an Ihr Terminal an — die Ergebnisse aktualisieren sich sofort.',
                legalNoteHeader: 'ADR / GGVSEB-Regelung:',
                legalNote: 'Gefahrgutfahrzeuge (ADR) dürfen nicht gleichzeitig an benachbarten Rampen entladen werden. Jede ungeplante ADR-Verzögerung löst eine Dokumentationspflicht aus und erhöht das Haftungsrisiko. Wartekosten in der Chemielogistik sind 3–5× höher als in der Standardlogistik.',
                fields: {
                    trucks: {
                        label: 'LKW-Ankünfte pro Tag',
                        tooltip: 'Durchschnittliche Anzahl der täglich eintreffenden LKW',
                        unit: 'LKW/Tag',
                    },
                    toursPerDay: {
                        label: 'Anzahl Rampen / Tore',
                        tooltip: 'Verfügbare Kapazität an Be- und Entladestationen',
                        unit: 'Rampen',
                    },
                    stopsPerTour: {
                        label: 'ADR-Fahrzeuge pro Tag (Gefahrgut)',
                        tooltip: 'Anzahl der Fahrzeuge mit Gefahrgutkennzeichnung',
                        unit: 'ADR-Fahrzeuge',
                    },
                    avgWaitMinutes: {
                        label: 'Ø Wartezeit pro Stopp',
                        tooltip: 'Durchschnittliche Wartezeit pro LKW am Terminal',
                        unit: 'Minuten',
                    },
                    demurrageRate: {
                        label: 'Produktionsausfallkosten',
                        tooltip: 'Kosten pro Stunde bei Stillstand oder Verzögerung (Branchenüblich: >500 €)',
                        unit: '€/Stunde',
                    },
                    workingDays: {
                        label: 'Arbeitstage pro Monat',
                        tooltip: 'Durchschnittliche Arbeitstage pro Monat am Terminal',
                        unit: 'Tage',
                    },
                },
            },
            results: {
                title: 'Ihre Terminal-Kostenanalyse',
                cards: {
                    waitingHours: {
                        label: 'Gesamtwartestunden / Monat',
                        description: 'Basierend auf {{stops}} LKW-Anläufen pro Monat',
                        unit: 'Std.',
                    },
                    lostTimeCost: {
                        label: 'Produktionsverlust / Monat',
                    },
                    claimable: {
                        label: 'ADR-Compliance-Risikoexposition / Monat',
                        descriptionPositive: 'Ungeplante ADR-Verzögerungen erhöhen Vorfallrisiko und Dokumentationsaufwand',
                        descriptionZero: 'Aktuell keine erhöhte Risikoexposition durch ADR-Wartezeiten',
                    },
                    annualLoss: {
                        label: 'Geschätzter jährlicher Produktionsverlust',
                        description: 'Davon ADR-Risiko-induziert: {{amount}} / Jahr',
                    },
                },
                form: {
                    submitButton: 'Chemie-Terminal-Analyse per E-Mail erhalten',
                    emailNote: 'Wir senden Ihnen die vollständige Analyse als PDF — inklusive ADR-Risikoexposition und Optimierungspotenzial.',
                },
            },
            footer: {
                description: 'Berechnen Sie Ihre monatlichen Verluste durch LKW-Wartezeiten an Chemie-Terminals — und erfahren Sie, wie KI-gestützte Rampenplanung ADR-Risiken reduziert, Produktionsstopps verhindert und bis zu 30% Terminalkosten einspart.',
                legalText: 'Diese Berechnung dient nur zur Orientierung und stellt keine Rechts- oder Compliance-Beratung dar. Für verbindliche ADR/GGVSEB-Bewertungen konsultieren Sie bitte einen zertifizierten Gefahrgutbeauftragten.',
            },
            pdf: {
                filename: 'Chemie-Terminal-Analyse',
                parameterHeader: 'Terminal-Konfiguration',
                annualClaimable: 'ADR-Risikoexposition (jährlich)',
                legalTitle: 'Compliance-Grundlage',
            }
        },
    },
};

export default de;
