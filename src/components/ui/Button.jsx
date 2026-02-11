import { Loader2 } from 'lucide-react';

/**
 * Styled button with variants — light theme.
 */
export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    icon,
    onClick,
    className = '',
    ...rest
}) {
    const baseClasses =
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/30 active:scale-[0.98]',
        secondary:
            'bg-surface-100 text-surface-700 border border-surface-200 hover:bg-surface-200 active:scale-[0.98]',
        outline:
            'bg-transparent text-primary-600 border-2 border-primary-500/40 hover:bg-primary-50 hover:border-primary-500 active:scale-[0.98]',
    };

    const sizes = {
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-3.5 text-base',
    };

    return (
        <button
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...rest}
        >
            {loading ? <Loader2 size={18} className="animate-spin" /> : icon}
            {children}
        </button>
    );
}
