import { Info } from 'lucide-react';

/**
 * Reusable number input field — light theme styling.
 */
export default function InputField({
    id,
    label,
    value,
    onChange,
    icon,
    tooltip,
    unit,
    min = 0,
    max,
    step = 1,
}) {
    return (
        <div className="group flex flex-col h-full">
            <label
                htmlFor={id}
                className="flex items-center gap-2 text-sm font-medium text-surface-600 mb-2 transition-colors group-focus-within:text-primary-600 min-h-[1.5rem]"
            >
                <span className="text-surface-400 group-focus-within:text-primary-500 transition-colors shrink-0">
                    {icon}
                </span>
                <span className="truncate">{label}</span>
                {tooltip && (
                    <span className="relative group/tip shrink-0">
                        <Info size={14} className="text-surface-400 cursor-help" />
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-surface-800 rounded-lg shadow-xl opacity-0 group-hover/tip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {tooltip}
                        </span>
                    </span>
                )}
            </label>
            <div className="input-ring relative flex items-center rounded-xl bg-surface-50 border border-surface-200 hover:border-surface-300 focus-within:border-primary-500 transition-all mt-auto">
                <input
                    id={id}
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    min={min}
                    max={max}
                    step={step}
                    className="w-full px-4 py-3 bg-transparent text-surface-800 text-base font-medium outline-none placeholder:text-surface-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                {unit && (
                    <span className="pr-4 text-sm text-surface-400 font-medium whitespace-nowrap">
                        {unit}
                    </span>
                )}
            </div>
        </div>
    );
}
