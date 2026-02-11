import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import de from './locales/de';
import en from './locales/en';

i18n.use(initReactI18next).init({
    resources: {
        de,
        en,
    },
    lng: 'de', // German as primary/default language
    fallbackLng: 'de',
    interpolation: {
        escapeValue: false, // React already escapes by default
    },
});

export default i18n;
