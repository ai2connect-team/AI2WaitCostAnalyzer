/**
 * English translations.
 */
const en = {
    translation: {
        // Header
        header: {
            subtitle: 'Demurrage Analysis',
            badge: 'Free Calculator',
        },

        // Hero
        hero: {
            badgeFeatures: 'Free • No registration required • Instant results',
            badgeCalculator: 'Free Calculator',
            headline: 'How much money does your fleet lose <highlight>every month</highlight> due to waiting times?',
            subheadline:
                'Trucks wait an average of 25–45 minutes at loading docks. Under §412 HGB you are entitled to demurrage — calculate your claim now.',
        },

        // Calculator
        calculator: {
            title: 'Enter your fleet data',
            subtitle: 'Adjust the values to your fleet — results update instantly.',
            legalNote:
                'The reasonable waiting time is approx. 2 hours per stop. Waiting times beyond this can be claimed as demurrage.',
            fields: {
                trucks: {
                    label: 'Number of trucks',
                    tooltip: 'Total number of trucks in your fleet',
                    unit: 'Trucks',
                },
                toursPerDay: {
                    label: 'Tours per truck/day',
                    tooltip: 'Average tours per truck per working day',
                    unit: 'Tours',
                },
                stopsPerTour: {
                    label: 'Stops per tour',
                    tooltip: 'Average loading/unloading stops per tour',
                    unit: 'Stops',
                },
                avgWaitMinutes: {
                    label: 'Avg. wait per stop',
                    tooltip: 'Average waiting time beyond the scheduled time window',
                    unit: 'Minutes',
                },
                demurrageRate: {
                    label: 'Demurrage rate',
                    tooltip: 'Your demurrage rate per hour (industry standard: €40–60)',
                    unit: '€ / hour',
                },
                workingDays: {
                    label: 'Working days per month',
                    tooltip: 'Average working days per month',
                    unit: 'Days',
                },
            },
        },

        // Results
        results: {
            title: 'Your Analysis',
            subtitle: 'Real-time calculation based on your input',
            downloadPdf: 'Download PDF',
            form: {
                nameLabel: 'Your Name',
                namePlaceholder: 'John Doe',
                emailLabel: 'Your Email Address',
                emailPlaceholder: 'name@company.com',
                submitButton: 'Get Analysis via Email',
                submitting: 'Sending…',
                successMessage: 'Your analysis has been sent to your email!',
                errorMessage: 'Failed to send. Please try again.',
                emailNote: 'We will send the full analysis as a PDF to your email address.',
                gdprConsent: 'I consent to the processing of my data (name, email) for the purpose of receiving the analysis. More info in our <privacyLink>Privacy Policy</privacyLink>.',
                gdprRequired: 'Please agree to the privacy policy.',
            },
            cards: {
                waitingHours: {
                    label: 'Total waiting hours / month',
                    description: 'Based on {{stops}} stops per month',
                    unit: 'h',
                },
                lostTimeCost: {
                    label: 'Cost of lost time / month',
                    description: 'Total waiting time × your hourly rate',
                },
                claimable: {
                    label: 'Claimable as demurrage / month',
                    descriptionPositive: '{{hours}} h beyond the 2-hour threshold',
                    descriptionZero: 'The avg. waiting time is below the 2-hour threshold',
                },
                annualLoss: {
                    label: 'Estimated annual loss',
                    description: 'Of which claimable: {{amount}} / year',
                },
            },
            banner: {
                title: 'Annually claimable demurrage',
                subtitle: 'Under §412 HGB — this money is legally yours.',
            },
        },

        // Footer
        footer: {
            description:
                'Calculate your monthly losses due to waiting times at loading docks and find out how much demurrage you can claim under §412 HGB.',
            legalTitle: 'Legal Notice',
            legalText:
                'This calculation is for guidance only and does not constitute legal advice. For binding information, please consult a specialist lawyer for transport law.',
            copyright: '© {{year}} AI2 Connect. All rights reserved.',
            privacy: 'Privacy Policy',
            imprint: 'Imprint',
        },

        // PDF
        pdf: {
            subtitle: 'Demurrage Analysis Report',
            createdOn: 'Created on: {{date}}',
            inputTitle: 'Input Parameters',
            parameterHeader: 'Route organization',
            valueHeader: 'Value',
            minutesUnit: 'Minutes',
            perHourUnit: ' / hour',
            resultsTitle: 'Results',
            metricHeader: 'Operational impact',
            totalStops: 'Total stops per month',
            totalWaitHours: 'Total waiting hours per month',
            hoursUnit: 'h',
            monthlyCost: 'Cost of lost time (monthly)',
            monthlyClaimable: 'Claimable as demurrage (monthly)',
            annualCost: 'Cost of lost time (annual)',
            annualClaimable: 'Claimable as demurrage (annual)',
            legalTitle: 'Legal Basis',
            legalLines: [
                'Under §412 HGB, carriers are entitled to demurrage compensation',
                'when loading/unloading time exceeds the agreed or reasonable period.',
                'Under VBGL §5, a waiting time of approx. 2 hours per stop is considered reasonable.',
                'Waiting times beyond this can be claimed as demurrage.',
                '',
                'Note: This calculation is for guidance only and does not constitute legal advice.',
            ],
            page: 'Page {{current}} of {{total}}',
            filename: 'Demurrage-Analysis',
        },
        // Chemical Logistics Adaptation
        chemical: {
            hero: {
                headline: 'How much does your Chemical Terminal <highlight>lose every month</highlight> due to truck waiting times?',
                subheadline: 'Trucks wait an average of 45–90 minutes at chemical terminals. Every blocked dock costs production time, increases ADR compliance risks, and ties up critical resources. Calculate your real costs — in under 2 minutes.',
            },
            calculator: {
                title: 'Enter your terminal data',
                subtitle: 'Adjust the values to your terminal — the results update instantly.',
                legalNoteHeader: 'ADR / GGVSEB Regulation:',
                legalNote: 'Dangerous goods vehicles (ADR) may not be unloaded simultaneously at adjacent docks. Any unplanned ADR delay triggers documentation requirements and increases liability risk. Waiting costs in chemical logistics are 3–5× higher than in standard logistics.',
                fields: {
                    trucks: {
                        label: 'Truck arrivals per day',
                        tooltip: 'Average number of trucks arriving daily',
                        unit: 'Trucks/Day',
                    },
                    toursPerDay: {
                        label: 'Number of docks / gates',
                        tooltip: 'Available capacity at loading and unloading stations',
                        unit: 'Docks',
                    },
                    stopsPerTour: {
                        label: 'ADR vehicles per day (Dangerous Goods)',
                        tooltip: 'Number of vehicles with dangerous goods labels',
                        unit: 'ADR Vehicles',
                    },
                    avgWaitMinutes: {
                        label: 'Avg. wait per truck',
                        tooltip: 'Average waiting time per truck at the terminal',
                        unit: 'Minutes',
                    },
                    demurrageRate: {
                        label: 'Production loss cost',
                        tooltip: 'Cost per hour for downtime or delays (Industry standard: >€500)',
                        unit: '€ / hour',
                    },
                    workingDays: {
                        label: 'Working days per month',
                        tooltip: 'Average working days per month at the terminal',
                        unit: 'Days',
                    },
                },
            },
            results: {
                title: 'Your Terminal Cost Analysis',
                cards: {
                    waitingHours: {
                        label: 'Total waiting hours / month',
                        description: 'Based on {{stops}} truck visits per month',
                        unit: 'h',
                    },
                    lostTimeCost: {
                        label: 'Production loss / month',
                    },
                    claimable: {
                        label: 'ADR Compliance Risk Exposure / month',
                        descriptionPositive: 'Unplanned ADR delays increase incident risk and documentation effort',
                        descriptionZero: 'Currently no elevated risk exposure from ADR waiting times',
                    },
                    annualLoss: {
                        label: 'Estimated annual production loss',
                        description: 'Of which ADR-risk induced: {{amount}} / year',
                    },
                },
                form: {
                    submitButton: 'Get Chemical Terminal Analysis via Email',
                    emailNote: 'We will send you the complete analysis as a PDF — including ADR risk exposure and optimization potential.',
                },
            },
            footer: {
                description: 'Calculate your monthly losses due to truck waiting times at chemical terminals — and discover how AI-supported dock scheduling reduces ADR risks, prevents production stops, and saves up to 30% in terminal costs.',
                legalText: 'This calculation serves only as a guide and does not constitute legal or compliance advice. For binding ADR/GGVSEB assessments, please consult a certified dangerous goods safety advisor.',
            },
            pdf: {
                filename: 'Chemical-Terminal-Analysis',
                parameterHeader: 'Terminal Configuration',
                annualClaimable: 'ADR Risk Exposure (annual)',
                legalTitle: 'Compliance Basis',
            }
        },
    },
};

export default en;
