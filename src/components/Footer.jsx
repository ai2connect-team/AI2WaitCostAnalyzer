import { useTranslation } from 'react-i18next';

/**
 * Footer — light theme with i18n.
 */
export default function Footer() {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-surface-200 mt-16 bg-surface-50">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-sm font-bold text-surface-800 mb-3">
                            AI2WaitCostAnalyzer
                        </h3>
                        <p className="text-xs text-surface-500 leading-relaxed max-w-sm">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Legal */}
                    <div className="sm:text-right">
                        <h4 className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">
                            {t('footer.legalTitle')}
                        </h4>
                        <p className="text-xs text-surface-400 leading-relaxed">
                            {t('footer.legalText')}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-surface-200 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-surface-400">
                        {t('footer.copyright', { year: currentYear })}
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="text-xs text-surface-400 hover:text-primary-600 transition-colors"
                        >
                            {t('footer.privacy')}
                        </a>
                        <a
                            href="#"
                            className="text-xs text-surface-400 hover:text-primary-600 transition-colors"
                        >
                            {t('footer.imprint')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
