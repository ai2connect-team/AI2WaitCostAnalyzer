/**
 * Result card — white card with colored icon and value, light theme.
 */
export default function ResultCard({
    icon,
    label,
    value,
    description,
    variant = 'default',
    animationDelay = '',
}) {
    const iconBgColors = {
        default: 'bg-surface-100 text-surface-500',
        highlight: 'bg-primary-50 text-primary-600',
        success: 'bg-success-50 text-success-600',
        danger: 'bg-danger-50 text-danger-600',
    };

    const valueColors = {
        default: 'text-surface-800',
        highlight: 'text-primary-700',
        success: 'text-success-600',
        danger: 'text-danger-600',
    };

    return (
        <div
            className={`card p-5 sm:p-6 opacity-0 animate-fade-in-up ${animationDelay} hover:scale-[1.02]`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl shrink-0 ${iconBgColors[variant]}`}>
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-500 mb-1">{label}</p>
                    <p className={`text-xl sm:text-2xl font-bold ${valueColors[variant]} tracking-tight`}>
                        {value}
                    </p>
                    {description && (
                        <p className="text-xs text-surface-400 mt-2 leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
