import { useState } from 'react';
import {
    Clock,
    TrendingDown,
    Scale,
    CalendarRange,
    Mail,
    User,
    Send,
    CheckCircle2,
    AlertCircle,
} from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import ResultCard from './ui/ResultCard';
import Button from './ui/Button';
import { formatCurrency, formatNumber } from '../utils/calculations';

/**
 * Results display — light theme with i18n.
 * Includes an email form to send the PDF report to the user.
 */
export default function Results({ results, inputs }) {
    const { t } = useTranslation();

    // ── Form state ─────────────────────────────────────────────────
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const res = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    calculator_inputs: inputs,
                    calculator_results: results,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }

            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setName('');
                setEmail('');
            } else {
                setError(data.message || t('results.form.errorMessage'));
            }
        } catch {
            setError(t('results.form.errorMessage'));
        } finally {
            setLoading(false);
        }
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

    // ── Email Form ─────────────────────────────────────────────────
    const emailForm = (
        <form onSubmit={handleSubmit} className="card p-5 sm:p-6 border-primary-200 bg-primary-50/30 opacity-0 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-100">
                    <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-surface-800">
                        {t('results.form.submitButton')}
                    </h3>
                    <p className="text-xs text-surface-500">
                        {t('results.form.emailNote')}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {/* Name field */}
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
                        <User size={16} />
                    </span>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('results.form.namePlaceholder')}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-surface-200 text-surface-800 text-sm font-medium outline-none placeholder:text-surface-400 focus:border-primary-500 transition-colors"
                    />
                </div>

                {/* Email field */}
                <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400">
                        <Mail size={16} />
                    </span>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('results.form.emailPlaceholder')}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-surface-200 text-surface-800 text-sm font-medium outline-none placeholder:text-surface-400 focus:border-primary-500 transition-colors"
                    />
                </div>
            </div>

            {/* GDPR consent checkbox */}
            <label className="flex items-start gap-3 mb-4 cursor-pointer group">
                <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-surface-300 text-primary-600 focus:ring-primary-500 cursor-pointer shrink-0"
                />
                <span className="text-xs text-surface-500 leading-relaxed">
                    <Trans
                        i18nKey="results.form.gdprConsent"
                        components={{
                            privacyLink: (
                                <a
                                    href="https://ai2connect-do.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 underline hover:text-primary-700"
                                />
                            ),
                        }}
                    />
                </span>
            </label>

            {/* Submit button */}
            <Button
                type="submit"
                variant="primary"
                size="md"
                loading={loading}
                icon={<Send size={16} />}
                className="w-full"
            >
                {loading ? t('results.form.submitting') : t('results.form.submitButton')}
            </Button>

            {/* Success message */}
            {success && (
                <div className="flex items-center gap-2 mt-3 p-3 rounded-xl bg-success-50 border border-success-200 animate-fade-in-up">
                    <CheckCircle2 size={18} className="text-success-600 shrink-0" />
                    <p className="text-sm font-medium text-success-700">
                        {t('results.form.successMessage')}
                    </p>
                </div>
            )}

            {/* Error message */}
            {error && (
                <div className="flex items-center gap-2 mt-3 p-3 rounded-xl bg-red-50 border border-red-200 animate-fade-in-up">
                    <AlertCircle size={18} className="text-red-600 shrink-0" />
                    <p className="text-sm font-medium text-red-700">{error}</p>
                </div>
            )}
        </form>
    );

    return (
        <div className="space-y-5">
            {/* Section header */}
            <div>
                <h2 className="text-xl sm:text-2xl font-bold text-surface-800 mb-1">
                    {t('results.title')}
                </h2>
                <p className="text-sm sm:text-base text-surface-500">
                    {t('results.subtitle')}
                </p>
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

            {/* Email form — replaces the old download button */}
            {emailForm}
        </div>
    );
}
