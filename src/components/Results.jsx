import {
    Clock,
    TrendingDown,
    Scale,
    CalendarRange,
    Download,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ResultCard from './ui/ResultCard';
import Button from './ui/Button';
import { formatCurrency, formatNumber } from '../utils/calculations';
import { generatePDF } from '../utils/pdfExport';

/**
 * Results display — light theme with i18n.
 */
export default function Results({ results, inputs }) {
    const { t } = useTranslation();

    const handleDownloadPDF = () => {
        generatePDF(inputs, results, t);
    };

    const cards = [
        {
            icon: <Clock size={22} />,
            label: t('results.cards.waitingHours.label'),
            value: `${formatNumber(results.totalWaitingHoursPerMonth, 1)} ${t('results.cards.waitingHours.unit')}`,
            description: t('results.cards.waitingHours.description', {
                stops: formatNumber(results.totalStopsPerMonth),
            }),
            variant: 'default',
            delay: '',
        },
        {
            icon: <TrendingDown size={22} />,
            label: t('results.cards.lostTimeCost.label'),
            value: formatCurrency(results.monthlyCostOfLostTime),
            description: t('results.cards.lostTimeCost.description'),
            variant: 'danger',
            delay: 'animation-delay-100',
        },
        {
            icon: <Scale size={22} />,
            label: t('results.cards.claimable.label'),
            value: formatCurrency(results.monthlyClaimableDemurrage),
            description:
                results.monthlyClaimableDemurrage > 0
                    ? t('results.cards.claimable.descriptionPositive', {
                        hours: formatNumber(results.claimableHoursPerMonth, 1),
                    })
                    : t('results.cards.claimable.descriptionZero'),
            variant: 'success',
            delay: 'animation-delay-200',
        },
        {
            icon: <CalendarRange size={22} />,
            label: t('results.cards.annualLoss.label'),
            value: formatCurrency(results.annualCostOfLostTime),
            description: t('results.cards.annualLoss.description', {
                amount: formatCurrency(results.annualClaimableDemurrage),
            }),
            variant: 'highlight',
            delay: 'animation-delay-300',
        },
    ];

    return (
        <div className="space-y-5">
            {/* Section header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-surface-800 mb-1">
                        {t('results.title')}
                    </h2>
                    <p className="text-sm sm:text-base text-surface-500">
                        {t('results.subtitle')}
                    </p>
                </div>
                <Button
                    variant="primary"
                    size="md"
                    icon={<Download size={16} />}
                    onClick={handleDownloadPDF}
                    className="hidden sm:inline-flex shrink-0"
                >
                    {t('results.downloadPdf')}
                </Button>
            </div>

            {/* Result cards — 2x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cards.map((card) => (
                    <ResultCard
                        key={card.label}
                        icon={card.icon}
                        label={card.label}
                        value={card.value}
                        description={card.description}
                        variant={card.variant}
                        animationDelay={card.delay}
                    />
                ))}
            </div>

            {/* Claimable highlight banner */}
            {results.monthlyClaimableDemurrage > 0 && (
                <div className="card p-6 sm:p-8 border-success-200 bg-success-50/50 opacity-0 animate-fade-in-up animation-delay-400">
                    <div className="flex items-center gap-5">
                        <div className="p-3 rounded-xl bg-success-100 shrink-0">
                            <Scale size={24} className="text-success-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-success-700 mb-1">
                                {t('results.banner.title')}
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-success-600 tracking-tight">
                                {formatCurrency(results.annualClaimableDemurrage)}
                            </p>
                            <p className="text-xs text-surface-500 mt-2">
                                {t('results.banner.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile PDF button */}
            <div className="sm:hidden">
                <Button
                    variant="primary"
                    size="lg"
                    icon={<Download size={18} />}
                    onClick={handleDownloadPDF}
                    className="w-full"
                >
                    {t('results.downloadPdf')}
                </Button>
            </div>
        </div>
    );
}
