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
    },
};

export default en;
