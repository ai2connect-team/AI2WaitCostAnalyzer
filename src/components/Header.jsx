import { useTranslation } from 'react-i18next';
import { Truck, Languages } from 'lucide-react';

/**
 * Application header with brand identity and language switcher.
 */
export default function Header() {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const next = i18n.language === 'de' ? 'en' : 'de';
        i18n.changeLanguage(next);
    };

    return (
        <header>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                            <Truck size={20} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-base font-bold text-white leading-tight">
                                AI2WaitCostAnalyzer
                            </h1>
                            <p className="text-[10px] text-blue-200 uppercase tracking-wider font-medium">
                                {t('header.subtitle')}
                            </p>
                        </div>
                    </div>

                    {/* Language switcher */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-sm hover:bg-white/25 transition-colors cursor-pointer"
                        aria-label="Switch language"
                    >
                        <Languages size={14} />
                        {i18n.language === 'de' ? 'EN' : 'DE'}
                    </button>
                </div>
            </div>
        </header>
    );
}
