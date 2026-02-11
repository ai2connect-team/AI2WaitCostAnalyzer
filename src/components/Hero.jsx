import { useTranslation, Trans } from 'react-i18next';

/**
 * Hero section — centered on blue gradient background with i18n.
 */
export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-4 lg:pb-8">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-in backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-blue-100">
                        {t('hero.badgeFeatures')}
                    </span>
                </div>
                {/* Navigation badge */}
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 animate-fade-in backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-medium text-blue-100">
                        {t('hero.badgeCalculator')}
                    </span>
                </span>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-white animate-fade-in-up">
                    <Trans
                        i18nKey="hero.headline"
                        components={{ highlight: <span className="text-cyan-300" /> }}
                    />
                </h2>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-100">
                    {t('hero.subheadline')}
                </p>
            </div>
        </section>
    );
}
