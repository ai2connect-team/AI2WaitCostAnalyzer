import { Truck, Route, MapPin, Clock, Euro, CalendarDays } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import InputField from './ui/InputField';
import { DEFAULT_VALUES, CHEMICAL_DEFAULT_VALUES } from '../constants';

/**
 * Field IDs and their icons (labels/tooltips/units come from translations).
 */
const FIELD_CONFIG = [
    { id: 'trucks', icon: <Truck size={16} />, min: 1, max: 10000 },
    { id: 'toursPerDay', icon: <Route size={16} />, min: 1, max: 20 },
    { id: 'stopsPerTour', icon: <MapPin size={16} />, min: 1, max: 50 },
    { id: 'avgWaitMinutes', icon: <Clock size={16} />, min: 0, max: 480 },
    { id: 'demurrageRate', icon: <Euro size={16} />, min: 0, step: 5 },
    { id: 'workingDays', icon: <CalendarDays size={16} />, min: 1, max: 31 },
];

/**
 * Calculator form — light theme white card with i18n.
 */
export default function Calculator({ values, onValueChange, variant = 'freight' }) {
    const { t } = useTranslation();
    const prefix = variant === 'chemical' ? 'chemical.' : '';

    return (
        <div className="card p-5 sm:p-6 lg:p-8">
            {/* Section header */}
            <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-surface-800 mb-3">
                    {t(`${prefix}calculator.title`)}
                </h2>
                <p className="text-sm sm:text-base text-surface-500 leading-relaxed">
                    {t(`${prefix}calculator.subtitle`)}
                </p>
            </div>

            {/* Input grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-6">
                {FIELD_CONFIG.map((field) => (
                    <InputField
                        key={field.id}
                        id={field.id}
                        label={t(`${prefix}calculator.fields.${field.id}.label`)}
                        value={values[field.id]}
                        onChange={(val) => onValueChange(field.id, val)}
                        icon={field.icon}
                        tooltip={t(`${prefix}calculator.fields.${field.id}.tooltip`)}
                        unit={t(`${prefix}calculator.fields.${field.id}.unit`)}
                        min={field.min}
                        max={field.max}
                        step={field.step || 1}
                    />
                ))}
            </div>

            {/* Legal note */}
            <div className="mt-8 px-5 py-4 rounded-xl bg-primary-50 border border-primary-100">
                <p className="text-xs sm:text-sm text-surface-600 leading-relaxed">
                    <span className="font-semibold text-primary-700">
                        {variant === 'chemical' ? t('chemical.calculator.legalNoteHeader') : '§412 HGB / VBGL §5:'}
                    </span>{' '}
                    {t(`${prefix}calculator.legalNote`)}
                </p>
            </div>
        </div>
    );
}
